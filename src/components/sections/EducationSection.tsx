import { motion } from 'framer-motion';
import Timeline from '../ui/Timeline';
import ScrollReveal from '../animations/ScrollReveal';

const EducationSection = () => {
  const education = [
    {
      title: 'Master of Science in Computer Science',
      organization: 'Stanford University',
      location: 'Stanford, CA',
      duration: '2016 - 2018',
      description: 'Specialized in Machine Learning and Artificial Intelligence. Completed thesis on "Deep Learning Applications in Web Development". Graduated Magna Cum Laude with a GPA of 3.8/4.0.',
      skills: ['Machine Learning', 'AI', 'Python', 'TensorFlow', 'Data Structures', 'Algorithms'],
    },
    {
      title: 'Bachelor of Science in Software Engineering',
      organization: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      duration: '2012 - 2016',
      description: 'Comprehensive study of software development principles, computer science fundamentals, and engineering practices. Active member of the Programming Club and participated in multiple hackathons.',
      skills: ['Java', 'C++', 'Software Design', 'Database Systems', 'Web Development', 'Mobile Development'],
    },
    {
      title: 'Full Stack Web Development Bootcamp',
      organization: 'Le Wagon',
      location: 'San Francisco, CA',
      duration: '2017 (Summer)',
      description: 'Intensive 9-week program focused on modern web development technologies. Built multiple full-stack applications from scratch. Learned industry best practices and agile methodologies.',
      skills: ['Ruby on Rails', 'JavaScript', 'React', 'PostgreSQL', 'Git', 'Heroku'],
    },
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'Meta React Developer Certificate',
    'MongoDB Developer Certification',
  ];

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="text-gradient">Learning</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic background and continuous learning journey
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <Timeline items={education} title="Academic Background" />
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <ScrollReveal direction="right">
              <h3 className="text-3xl font-bold text-gradient mb-8">Certifications</h3>
            </ScrollReveal>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <ScrollReveal
                  key={cert}
                  direction="right"
                  delay={index * 0.1}
                >
                  <motion.div
                    className="glass-card hover-lift group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 group-hover:shadow-glow transition-all duration-300"></div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {cert}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Valid & Up to Date
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Additional Info */}
            <ScrollReveal direction="right" delay={0.6}>
              <div className="glass-card space-y-4">
                <h4 className="text-xl font-semibold text-gradient">Continuous Learning</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm committed to staying current with the latest technologies and best practices. 
                  I regularly participate in online courses, workshops, and tech conferences to expand my skill set.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Coursera', 'Udemy', 'Pluralsight', 'FreeCodeCamp'].map((platform, index) => (
                    <span
                      key={platform}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;