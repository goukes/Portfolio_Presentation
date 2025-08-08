import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Server,
  Zap
} from 'lucide-react';

const Home = () => {
  const skills = [
    {
      icon: Globe,
      title: 'Frontend Development',
      description: 'React.js, JavaScript, HTML5, CSS3',
      color: 'text-blue-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Node.js, Express.js, ASP.NET, C#',
      color: 'text-green-500'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'MongoDB, MySQL, Firebase',
      color: 'text-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Flutter, Cross-platform Apps',
      color: 'text-orange-500'
    },
    {
      icon: Code,
      title: 'Programming Languages',
      description: 'C++, JavaScript, C#',
      color: 'text-red-500'
    },
    {
      icon: Zap,
      title: 'Modern Tools',
      description: 'Git, VS Code, REST APIs',
      color: 'text-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Abdallah Mohammed
                </span>
                <br />
                <span className="text-foreground">Elmahdy</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Full Stack Developer passionate about creating modern web applications 
                and mobile solutions with cutting-edge technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/qualifications">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technical Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized in modern web and mobile development technologies 
                with a focus on creating scalable and efficient solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`h-6 w-6 ${skill.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                          <p className="text-muted-foreground text-sm">{skill.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  About Me
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a passionate full-stack developer with expertise in modern web technologies, 
                  mobile development, and database management. I love creating efficient, 
                  scalable solutions that solve real-world problems.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  With experience in both frontend and backend development, I can handle 
                  complete project lifecycles from conception to deployment. I'm always 
                  eager to learn new technologies and take on challenging projects.
                </p>
                <Button asChild size="lg">
                  <Link to="/qualifications">
                    Learn More About My Skills
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 p-8">
                  <div className="w-full h-full rounded-xl bg-card border-2 border-border flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-2xl">AE</span>
                      </div>
                      <h3 className="font-semibold text-lg">Abdallah Elmahdy</h3>
                      <p className="text-muted-foreground">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your next project and bring your ideas to life.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

