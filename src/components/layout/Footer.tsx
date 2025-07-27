// import { motion } from 'framer-motion';
// import { Heart } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-background border-t border-border">
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Brand */}
//           <motion.div
//             className="space-y-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-bold text-gradient">Tarun Vinodh Kumar</h3>
//             <p className="text-muted-foreground max-w-sm">
//               Full Stack Developer passionate about creating beautiful and functional web experiences.
//             </p>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             className="space-y-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-semibold">Quick Links</h4>
//             <div className="space-y-2">
//               {[
//                 { name: 'About', href: '#about' },
//                 { name: 'Projects', href: '#projects' },
//                 { name: 'Skills', href: '#skills' },
//                 { name: 'Contact', href: '#contact' },
//               ].map((link) => (
//                 <motion.a
//                   key={link.name}
//                   href={link.href}
//                   className="block text-muted-foreground hover:text-primary transition-colors duration-300"
//                   whileHover={{ x: 5 }}
//                 >
//                   {link.name}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             className="space-y-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <h4 className="text-lg font-semibold">Get in Touch</h4>
//             <div className="space-y-2 text-muted-foreground">
//               <p>tarunvinodhkumar@gmail.com</p>
//               <p>+1 (807) 357-3713</p>
//               <p>Oakville, ON, Canada</p>
//             </div>
            
//             <div className="flex gap-4 pt-2">
//               {[
//                 { name: 'GitHub', url: 'https://github.com/tarunvinodhkumar',icon: '/github.svg' },
//                 { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tarun-vinodh-kumar-177ab0193/',icon: '/linkedin.svg' },
//                 { name: 'Instagram', url: 'https://www.instagram.com/tarun_v0808/',icon: '/instagram.svg' },
//               ].map((social) => (
//                 <motion.a
//                   key={social.name}
//                   href={social.url}
//                   className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
//                   whileHover={{ scale: 1.1, y: -2 }}
//                 >
//                   <img
//   src={social.icon}
//   alt={social.name}
//   className="w-6 h-6 object-contain"
// />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           className="border-t border-border mt-12 pt-8 text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-muted-foreground flex items-center justify-center gap-2">
//             © {currentYear} Tarun Vinodh Kumar. Made with 
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
//             >
//               <Heart className="w-4 h-4 text-red-500 fill-current" />
//             </motion.span>
//             and React
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient">Tarun Vinodh Kumar</h3>
            <p className="text-muted-foreground max-w-sm">
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>tarunvinodhkumar@gmail.com</p>
              <p>+1 (807) 357-3713</p>
              <p>Oakville, ON, Canada</p>
            </div>

            <div className="flex gap-4 pt-2">
              {[
                { name: 'GitHub', url: 'https://github.com/tarunvinodhkumar', icon: '/github.svg' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tarun-vinodh-kumar-177ab0193/', icon: '/linkedin.svg' },
                { name: 'Instagram', url: 'https://www.instagram.com/tarun_v0808/', icon: '/instagram.svg' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6 object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
            © {currentYear} Tarun Vinodh Kumar. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.span>
            and React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;