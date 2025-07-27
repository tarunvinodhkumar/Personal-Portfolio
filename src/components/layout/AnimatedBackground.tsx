// import { motion } from 'framer-motion';

// const AnimatedBackground = () => {
//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden">
//       {/* Gradient Mesh Background */}
//       <div className="absolute inset-0 bg-gradient-mesh" />
      
//       {/* Animated Blobs */}
//       <motion.div
//         className="absolute top-1/4 left-1/4 w-64 h-64 blob opacity-60"
//         animate={{
//           x: [0, 30, -20, 0],
//           y: [0, -50, 20, 0],
//           scale: [1, 1.1, 0.9, 1],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
      
//       <motion.div
//         className="absolute top-3/4 right-1/4 w-48 h-48 blob-2 opacity-40"
//         animate={{
//           x: [0, -40, 30, 0],
//           y: [0, 30, -40, 0],
//           scale: [1, 0.8, 1.2, 1],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 2,
//         }}
//       />
      
//       <motion.div
//         className="absolute top-1/2 right-1/3 w-32 h-32 blob-3 opacity-50"
//         animate={{
//           x: [0, 20, -30, 0],
//           y: [0, -30, 10, 0],
//           scale: [1, 1.3, 0.7, 1],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 4,
//         }}
//       />
      
//       {/* Floating Particles */}
//       {Array.from({ length: 20 }).map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 bg-primary/20 rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, -100, 0],
//             opacity: [0, 1, 0],
//           }}
//           transition={{
//             duration: Math.random() * 10 + 10,
//             repeat: Infinity,
//             delay: Math.random() * 5,
//             ease: "easeInOut",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default AnimatedBackground;
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Ultra-modern layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10" />
      
      {/* Organic mesh overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      
      {/* Advanced noise texture with breathing effect */}
      <motion.div 
        className="absolute inset-0 opacity-[0.008] dark:opacity-[0.012]"
        animate={{ opacity: [0.008, 0.015, 0.008] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
      
      {/* Dynamic grid system */}
      <motion.div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        animate={{ 
          scale: [1, 1.02, 1],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(hsl(var(--primary) / 0.08) 1px, transparent 1px),
                 linear-gradient(90deg, hsl(var(--primary) / 0.08) 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px',
             }} />
      </motion.div>
      
      {/* Floating organic shapes with parallax */}
      <motion.div
        className="absolute top-1/5 left-1/8 w-40 h-40 rounded-[40%] bg-gradient-to-br from-primary/[0.05] to-accent/[0.03] backdrop-blur-3xl"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 15, 0],
          rotate: [0, 180, 360],
          borderRadius: ["40%", "60%", "30%", "40%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute top-3/5 right-1/6 w-32 h-32 rounded-[50%] bg-gradient-to-tl from-accent/[0.04] to-primary/[0.02] backdrop-blur-2xl"
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 40, -25, 0],
          scale: [1, 1.3, 0.8, 1],
          borderRadius: ["50%", "30%", "70%", "50%"],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      
      <motion.div
        className="absolute top-1/2 left-3/4 w-24 h-24 rounded-[35%] bg-gradient-to-r from-primary/[0.03] via-transparent to-accent/[0.02]"
        animate={{
          rotate: [0, -180, -360],
          scale: [1, 0.7, 1.4, 1],
          borderRadius: ["35%", "65%", "25%", "35%"],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />
      
      {/* Additional geometric shapes */}
      <motion.div
        className="absolute top-1/6 right-1/4 w-16 h-16 bg-accent/[0.02] backdrop-blur-sm"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
        animate={{
          rotate: [0, 120, 240, 360],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* More geometric variety */}
      <motion.div
        className="absolute top-2/3 right-1/8 w-14 h-14 bg-accent/[0.02] backdrop-blur-sm"
        style={{
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
        animate={{
          rotate: [0, 60, 120, 180, 240, 300, 360],
          scale: [1, 1.3, 0.7, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      
      <motion.div
        className="absolute top-1/8 left-2/3 w-18 h-18 bg-primary/[0.02] backdrop-blur-sm"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
        animate={{
          rotate: [0, -90, -180, -270, -360],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 9 }}
      />
      
      <motion.div
        className="absolute bottom-1/6 right-2/5 w-12 h-12 bg-accent/[0.015] backdrop-blur-sm"
        style={{
          clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
        }}
        animate={{
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          scale: [1, 0.9, 1.1, 0.8, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 12 }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/6 w-20 h-20 bg-primary/[0.025] backdrop-blur-sm"
        style={{
          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        }}
        animate={{
          rotate: [0, 45, 90, 135, 180],
          scale: [1, 0.9, 1.1, 0.95, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
      
      {/* Ambient light spheres */}
      <motion.div
        className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary) / 0.02) 0%, transparent 60%)`,
        }}
        animate={{
          scale: [1, 1.3, 0.9, 1],
          opacity: [0.3, 0.5, 0.2, 0.3],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, hsl(var(--accent) / 0.015) 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 0.8, 1.2, 1],
          opacity: [0.2, 0.35, 0.1, 0.2],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 10 }}
      />
      
      {/* Floating particles with intelligent movement */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-primary/15 rounded-full backdrop-blur-sm"
          style={{
            left: `${15 + (i * 10)}%`,
            top: `${20 + (i * 8)}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, 30 * Math.cos(i), 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 18 + (i * 2),
            repeat: Infinity,
            delay: i * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;