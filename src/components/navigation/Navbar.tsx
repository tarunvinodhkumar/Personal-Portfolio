import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/10 shadow-lg shadow-primary/5'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div className="flex items-center cursor-pointer" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.98 }}>
            <a href="#" className="flex items-center space-x-2">
              <div className="relative">
                <div className="bg-gradient-primary bg-clip-text text-transparent">
                  <span className="text-4xl font-black tracking-tighter">T</span>
                  <span className="text-3xl font-bold tracking-tight">V</span>
                  <span className="text-4xl font-black tracking-tighter">K</span>
                </div>
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-primary bg-primary/10 shadow-md'
                      : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-primary opacity-10 -z-0"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <ThemeToggle />
            <motion.button
              className="relative overflow-hidden bg-gradient-primary text-primary-foreground text-sm font-medium px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="/TarunVinodhKumar_Resume.pdf" download='TarunVinodhKumar_Resume.pdf'>
                <span className="relative z-10">Download CV</span>
              </a>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-0 hover:opacity-20"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-foreground rounded-full hover:bg-foreground/10 transition"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
  <motion.div
    className="md:hidden mt-4 space-y-2 px-4 py-4 rounded-xl bg-background/80 backdrop-blur-md shadow-xl"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    {navItems.map((item) => (
      <a
        key={item.name}
        href={item.href}
        onClick={() => setIsMenuOpen(false)}
        className={`block px-4 py-2 rounded-full text-base font-medium ${
          activeSection === item.id
            ? 'text-primary bg-primary/10 shadow'
            : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
        }`}
      >
        {item.name}
      </a>
    ))}
  </motion.div>
)}
      </div>
    </motion.nav>
  );
};

export default Navbar;