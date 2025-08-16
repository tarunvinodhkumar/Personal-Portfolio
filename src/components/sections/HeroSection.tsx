import { motion } from 'framer-motion';
import ThreeScene from '../ui/ThreeScene';
import { ArrowRight, Download, icons, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                👋 Hi, I'm
              </motion.p>
              
              <motion.h1
                className="text-5xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="text-gradient">Tarun</span>
                <br />
                <span className="text-foreground">Vinodh Kumar</span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
               Generative AI Full Stack Developer and Data Analyst skilled in building intelligent end-to-end web solutions and leveraging AI to drive data-informed decisions.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href='#projects'>
              <motion.button
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
                
              </motion.button>
              </a>
              <a href='/TarunVinodhKumar_Resume.pdf' download='TarunVinodhKumar_Resume.pdf'>
              <motion.button
                className="btn-secondary inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.button>
              </a>

              <a href="#contact">
              <motion.button
                className="btn-secondary inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.button>
              </a>
            </motion.div>
          
            
            {/* Social Links */}
            <motion.div
              className="flex items-center gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { name: 'GitHub', url: 'https://github.com/tarunvinodhkumar', icon:'/github.svg' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tarun-vinodh-kumar-177ab0193/', icon:'/linkedin.svg' },
                { name: 'Instagram', url: 'https://www.instagram.com/tarun_v0808/', icon:'/instagram.svg' },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <img
        src={social.icon}
        alt={`${social.name} icon`}
        className="w-6 h-6 md:w-7 md:h-7 object-contain"
      />
                  {/* {social.name} */}
                  
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          {/* Profile Image */}
<motion.div
  className="flex justify-center lg:justify-end"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-3xl animate-pulse-glow" />
    <motion.div
      className="relative z-10"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src="tarun.jpeg"
        alt="Tarun Vinodh Kumar - Full Stack Developer"
        className="w-80 h-80 object-cover rounded-full border-4 border-primary/20 shadow-2xl"
      />
    </motion.div>
  </div>
</motion.div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;