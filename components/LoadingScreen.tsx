import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-mystic-black flex flex-col items-center justify-center overflow-hidden">
      <div className="relative flex items-center justify-center">
        {/* Animated Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute border border-mystic-gold/20 rounded-full w-64 h-64"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute border border-mystic-purple/20 rounded-full w-80 h-80"
        />
        
        {/* Glow Background */}
        <div className="absolute inset-0 bg-mystic-gold/5 blur-3xl rounded-full scale-150 animate-pulse-slow" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
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
      <div className="mt-16 w-48 h-[2px] bg-gray-900 rounded-full overflow-hidden relative">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-mystic-gold to-transparent w-1/2"
          animate={{ x: [-200, 200] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <p className="mt-4 text-[10px] text-gray-600 font-sans animate-pulse">
        Cargando energías...
      </p>
    </div>
  );
};

export default LoadingScreen;