import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Users } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Building robust and maintainable codebases with a focus on long-term scalability.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting seamless and intuitive digital experiences.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Improving load times and responsiveness through performance optimization.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Collaborating seamlessly within cross-functional teams.',
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
            Versatile developer and data analyst with hands-on experience delivering end-to-end web solutions and turning complex data into actionable insights.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground text-justify" >
                I’m a passionate full-stack developer with a growing focus on Generative AI and modern web technologies. I specialize in the MERN stack and love building intelligent, user-centric applications that blend functionality with innovation.

                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                Recently, I’ve been exploring how GenAI can transform user experiences by integrating features like smart chatbots, AI-generated content, and personalized recommendations into full-stack solutions. My work bridges the gap between beautiful UI and powerful machine intelligence, helping build the next generation of web applications.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Firebase',
    'Python',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'TensorFlow',
    'LangChain',
    'OpenAI API',
    'AWS',
    'Docker',
    'Git',
    'Framer Motion',
    'Tailwind CSS'
  ].map((tech, index) => (
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
                      <p className="text-muted-foreground text-left">{feature.description}</p>
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