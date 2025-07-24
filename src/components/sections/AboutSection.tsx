import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Users } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code with best practices',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in team environments',
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with 5+ years of experience building modern web applications
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a passionate full-stack developer with a love for creating beautiful, 
                  functional, and user-friendly applications. My journey in web development 
                  started 5 years ago, and I've been constantly learning and evolving ever since.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I specialize in React, Node.js, and modern web technologies. I believe in 
                  writing clean, maintainable code and creating exceptional user experiences 
                  that make a difference.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'MongoDB'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="glass-card px-4 py-2 text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Features Grid */}
          <ScrollReveal direction="right">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal
                  key={feature.title}
                  delay={index * 0.1}
                >
                  <motion.div
                    className="glass-card space-y-4 hover-lift"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;