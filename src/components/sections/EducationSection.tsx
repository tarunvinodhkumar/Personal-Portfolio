import { motion } from 'framer-motion';
import Timeline from '../ui/Timeline';
import ScrollReveal from '../animations/ScrollReveal';

const EducationSection = () => {
  const education = [
    {
      title: 'Master of Science in Computer Science',
      organization: 'Lakehead University',
      location: 'Thunder Bay, ON',
      duration: '2023 - 2025',
      description: 'Focused on Machine Learning and Artificial Intelligence during academic coursework. Graduated with a GPA of 3.7/4.0',
      skills: [
        'Python',
        'Machine Learning',
        'Artificial Intelligence',
        'TensorFlow',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'OpenAI API',
        'Data Structures & Algorithms'
      ],
    },
    {
      title: 'Bachelor of Engineering in Computer Science',
      organization: 'Panimalar Engineering College',
      location: 'Chennai, India',
      duration: '2019 - 2023',
      description: 'Comprehensive study of software development principles, computer science fundamentals, and engineering practices. Active member of the Programming Club and participated in multiple hackathons.',
      skills: ['Python','Java', 'C++', 'Software Design', 'Database Systems', 'Web Development', 'Mobile Development', 'Data Structures & Algorithms'],
    },
    
  ];

  const certifications = [
    'Full Stack Web Development Certification',
    'Microsoft AI Classroom Series',
    'Android App Development using Flutter',
    'UI/UX Designing using Figma',
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
            From Classroom to Code: My Learning Journey
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
                <p className="text-muted-foreground text-m leading-relaxed text-justify">
                I stay actively engaged with emerging technologies and development practices through online courses, workshops, and community events. I’m passionate about upskilling and continuously expanding my expertise to stay ahead in a fast-evolving tech landscape.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Coursera', 'Udemy', 'Youtube', 'FreeCodeCamp'].map((platform, index) => (
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