import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-mystic-black flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.4 } }}
    >
      {/* Act 1 Climax: The Golden Reveal Mask */}
      <motion.div
        className="absolute z-50 bg-mystic-gold rounded-full pointer-events-none"
        initial={{ width: 0, height: 0, opacity: 1 }}
        exit={{ 
          width: '250vmax', 
          height: '250vmax', 
          opacity: 0, // Fades out to reveal the Black Intro Screen behind it
          transition: { duration: 0.8, ease: "easeInOut" } 
        }}
      />

      <div className="relative flex items-center justify-center z-10">
        {/* Animated Rings - Exit quickly */}
        <motion.div
          animate={{ rotate: 360 }}
          exit={{ scale: 0, opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute border border-mystic-gold/20 rounded-full w-64 h-64"
        />
        <motion.div
          animate={{ rotate: -360 }}
          exit={{ scale: 0, opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute border border-mystic-purple/20 rounded-full w-80 h-80"
        />
        
        {/* Glow Background */}
        <motion.div 
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-mystic-gold/5 blur-3xl rounded-full scale-150 animate-pulse-slow" 
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ scale: 1.5, opacity: 0, filter: "blur(10px)", transition: { duration: 0.4 } }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="text-center relative z-10 p-8"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-mystic-gold mb-3 text-glow tracking-tighter">
            Franlilo
          </h1>
          <p className="text-gray-400 font-sans tracking-[0.4em] text-xs uppercase border-t border-gray-800 pt-3 mt-1">
            Alta Magia
          </p>
        </motion.div>
      </div>

      {/* Loading Bar */}
      <motion.div 
        exit={{ opacity: 0 }}
        className="mt-16 w-48 h-[2px] bg-gray-900 rounded-full overflow-hidden relative z-10"
      >
        <motion.div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-mystic-gold to-transparent w-1/2"
          animate={{ x: [-200, 200] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      <motion.p 
        exit={{ opacity: 0 }}
        className="mt-4 text-[10px] text-gray-600 font-sans animate-pulse z-10"
      >
        Cargando energías...
      </motion.p>

      {/* Credits - Wow Effect */}
      <motion.div 
        initial={{ opacity: 0, y: 50, rotateX: 90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
        className="absolute bottom-8 right-8 z-50 perspective-1000"
      >
        <a 
          href="https://www.instagram.com/santinooviana" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative block transform transition-all duration-500 hover:scale-110 hover:rotate-2"
        >
           <div className="flex flex-col items-end">
             <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-1 group-hover:text-mystic-purple transition-colors">Creado por</span>
             <div className="relative">
                <span className="text-lg font-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-mystic-gold via-white to-mystic-purple animate-pulse drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all">
                  @santinooviana
                </span>
             </div>
           </div>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;