import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Server,
  Award,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase
} from 'lucide-react';

const Qualifications = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: 'Frontend Development',
      skills: ['JavaScript', 'React.js', 'HTML5', 'CSS3', 'Responsive Design', 'Tailwind CSS'],
      color: 'bg-blue-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'ASP.NET', 'C#', 'REST APIs', 'Microservices'],
      color: 'bg-green-500'
    },
    {
      icon: Database,
      title: 'Database Management',
      skills: ['MongoDB', 'MySQL', 'Firebase', 'Database Design', 'Query Optimization'],
      color: 'bg-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['Flutter', 'Cross-platform Apps', 'Mobile UI/UX', 'App Store Deployment'],
      color: 'bg-orange-500'
    },
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['C++', 'JavaScript', 'C#', 'Dart', 'TypeScript', 'Python'],
      color: 'bg-red-500'
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Solutions',
      period: '2022 - Present',
      location: 'Cairo, Egypt',
      description: 'Developing modern web applications using React.js, Node.js, and MongoDB. Led a team of 3 developers in creating scalable e-commerce solutions.',
      achievements: [
        'Increased application performance by 40%',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      title: 'Mobile App Developer',
      company: 'Mobile Innovations',
      period: '2021 - 2022',
      location: 'Cairo, Egypt',
      description: 'Created cross-platform mobile applications using Flutter and Firebase. Worked on 5+ mobile apps with over 10,000 downloads.',
      achievements: [
        'Developed 5 mobile applications from concept to deployment',
        'Achieved 4.5+ star rating on app stores',
        'Integrated complex APIs and third-party services'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Agency',
      period: '2020 - 2021',
      location: 'Cairo, Egypt',
      description: 'Worked on various web development projects using HTML, CSS, JavaScript, and PHP. Gained experience in responsive design and user experience.',
      achievements: [
        'Built 15+ responsive websites',
        'Improved website loading speed by 50%',
        'Collaborated with design team on UI/UX improvements'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      year: '2020',
      description: 'Specialized in software engineering and web development. Graduated with honors.',
      courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Web Development']
    }
  ];

  const certifications = [
    'React Developer Certification - Meta',
    'Node.js Application Development - IBM',
    'Flutter Development - Google',
    'MongoDB Developer Certification',
    'AWS Cloud Practitioner'
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My Qualifications
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills, professional experience, 
              and educational background in software development.
            </p>
          </div>

          {/* Technical Skills */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Code className="mr-3 h-8 w-8 text-primary" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${category.color} text-white`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-lg">{category.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Briefcase className="mr-3 h-8 w-8 text-primary" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                        <p className="text-lg text-primary font-medium mb-2">{job.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {job.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <GraduationCap className="mr-3 h-8 w-8 text-primary" />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                        <p className="text-lg text-primary font-medium mb-2">{edu.institution}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.year}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Award className="mr-3 h-8 w-8 text-primary" />
              Certifications
            </h2>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                      <Award className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Interested in Working Together?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  I'm always open to discussing new opportunities and exciting projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-foreground text-primary rounded-md font-medium hover:bg-opacity-90 transition-colors"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="mailto:abdallah.elmahdy@example.com"
                    className="inline-flex items-center justify-center px-6 py-3 border border-primary-foreground text-primary-foreground rounded-md font-medium hover:bg-primary-foreground hover:text-primary transition-colors"
                  >
                    Send Email
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;

