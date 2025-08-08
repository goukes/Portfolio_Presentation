from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from src.models.user import ContactMessage, db
import re

contact_bp = Blueprint('contact', __name__)

def validate_email(email):
    """Validate email format"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

@contact_bp.route('/contact', methods=['POST'])
def submit_contact():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field) or not data[field].strip():
                return jsonify({'error': f'{field} is required'}), 400
        
        name = data['name'].strip()
        email = data['email'].strip().lower()
        subject = data['subject'].strip()
        message = data['message'].strip()
        
        # Validate email format
        if not validate_email(email):
            return jsonify({'error': 'Invalid email format'}), 400
        
        # Validate field lengths
        if len(name) > 100:
            return jsonify({'error': 'Name must be less than 100 characters'}), 400
        
        if len(subject) > 200:
            return jsonify({'error': 'Subject must be less than 200 characters'}), 400
        
        if len(message) > 2000:
            return jsonify({'error': 'Message must be less than 2000 characters'}), 400
        
        # Create contact message
        contact_message = ContactMessage(
            name=name,
            email=email,
            subject=subject,
            message=message
        )
        
        db.session.add(contact_message)
        db.session.commit()
        
        return jsonify({
            'message': 'Contact message sent successfully',
            'id': contact_message.id
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': 'Failed to send message'}), 500

@contact_bp.route('/contact/messages', methods=['GET'])
@jwt_required()
def get_contact_messages():
    try:
        current_user_id = get_jwt_identity()
        
        # Only allow admin users to view messages (for now, any authenticated user)
        # In a real application, you'd check for admin role
        
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        
        # Limit per_page to prevent abuse
        per_page = min(per_page, 100)
        
        messages = ContactMessage.query.order_by(
            ContactMessage.created_at.desc()
        ).paginate(
            page=page,
            per_page=per_page,
            error_out=False
        )
        
        return jsonify({
            'messages': [message.to_dict() for message in messages.items],
            'total': messages.total,
            'pages': messages.pages,
            'current_page': page,
            'per_page': per_page
        }), 200
        
    except Exception as e:
        return jsonify({'error': 'Failed to get messages'}), 500

@contact_bp.route('/contact/messages/<int:message_id>', methods=['GET'])
@jwt_required()
def get_contact_message(message_id):
    try:
        current_user_id = get_jwt_identity()
        
        message = ContactMessage.query.get_or_404(message_id)
        
        return jsonify({'message': message.to_dict()}), 200
        
    except Exception as e:
        return jsonify({'error': 'Failed to get message'}), 500

@contact_bp.route('/contact/messages/<int:message_id>/read', methods=['PUT'])
@jwt_required()
def mark_message_read(message_id):
    try:
        current_user_id = get_jwt_identity()
        
        message = ContactMessage.query.get_or_404(message_id)
        message.is_read = True
        
        db.session.commit()
        
        return jsonify({
            'message': 'Message marked as read',
            'contact_message': message.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': 'Failed to mark message as read'}), 500

@contact_bp.route('/contact/messages/<int:message_id>', methods=['DELETE'])
@jwt_required()
def delete_contact_message(message_id):
    try:
        current_user_id = get_jwt_identity()
        
        message = ContactMessage.query.get_or_404(message_id)
        
        db.session.delete(message)
        db.session.commit()
        
        return jsonify({'message': 'Contact message deleted successfully'}), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': 'Failed to delete message'}), 500

