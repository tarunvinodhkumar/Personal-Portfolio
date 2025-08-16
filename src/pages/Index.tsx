// import { motion } from 'framer-motion';
// import AnimatedBackground from '../components/layout/AnimatedBackground';
// import ScrollProgress from '../components/ui/ScrollProgress';
// import Navbar from '../components/navigation/Navbar';
// import HeroSection from '../components/sections/HeroSection';
// import AboutSection from '../components/sections/AboutSection';
// import ExperienceSection from '../components/sections/ExperienceSection';
// import EducationSection from '../components/sections/EducationSection';
// import ProjectsSection from '../components/sections/ProjectsSection';
// import SkillsSection from '../components/sections/SkillsSection';
// import ContactSection from '../components/sections/ContactSection';
// import Footer from '../components/layout/Footer';

// const Index = () => {
//   return (
//     <motion.div
//       className="min-h-screen"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <ScrollProgress />
//       <AnimatedBackground />
//       <Navbar />
      
//       <main>
//         <HeroSection />
//         <AboutSection />
//         <ExperienceSection />
//         <EducationSection />
//         <ProjectsSection />
//         <SkillsSection />
//         <ContactSection />
//       </main>
      
//       <Footer />
//     </motion.div>
//   );
// };

// export default Index;
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/layout/AnimatedBackground';
import ScrollProgress from '../components/ui/ScrollProgress';
import Navbar from '../components/navigation/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import EducationSection from '../components/sections/EducationSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';
import FloatingChatBot from '../components/ui/FloatingChatBot';

const Index = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <Footer />
      {/* <FloatingChatBot /> */}
    </motion.div>
  );
};

export default Index;
