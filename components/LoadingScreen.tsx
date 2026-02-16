import React, { useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [scope, animate] = useAnimate();

  // Simulate loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random increments for organic feel
        return prev + Math.floor(Math.random() * 5) + 1; 
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      ref={scope}
      className="fixed inset-0 z-[100] bg-mystic-black flex flex-col items-center justify-center overflow-hidden"
      exit={{ 
        opacity: 0, 
        transition: { duration: 0.8, delay: 0.2 } 
      }}
    >
      {/* --- CINEMATIC EXIT REVEAL --- 
          Instead of a solid ball, this is a light flash overlay */}
      <motion.div
        className="absolute inset-0 z-50 pointer-events-none bg-white mix-blend-overlay"
        initial={{ opacity: 0 }}
        exit={{ 
          opacity: [0, 1, 0], // Flash effect
          scale: [1, 1.5],
          transition: { duration: 0.8, ease: "easeInOut" } 
        }}
      />
      
      {/* --- AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mystic-purple/10 via-black to-black opacity-60 animate-pulse-slow" />
      
      {/* Floating Particles (CSS based for performance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-mystic-gold rounded-full opacity-20 blur-[1px]"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 10,
              scale: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: -100,
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 2
            }}
            style={{ width: Math.random() * 4 + 1, height: Math.random() * 4 + 1 }}
          />
        ))}
      </div>

      {/* --- SACRED GEOMETRY CENTERPIECE --- */}
      <div className="relative flex items-center justify-center scale-75 md:scale-100">
        
        {/* Core Glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 bg-mystic-gold/10 rounded-full blur-2xl"
        />

        {/* Outer Ring - Dashed & Slow */}
        <motion.svg 
          viewBox="0 0 200 200" 
          className="absolute w-80 h-80 opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
           <circle cx="100" cy="100" r="98" fill="none" stroke="url(#goldGrad)" strokeWidth="0.5" strokeDasharray="4 8" />
           <defs>
             <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
               <stop offset="50%" stopColor="#d4af37" stopOpacity="1" />
               <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
             </linearGradient>
           </defs>
        </motion.svg>

        {/* Middle Ring - Runes/Geometric */}
        <motion.svg 
          viewBox="0 0 200 200" 
          className="absolute w-64 h-64 opacity-60"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
           <circle cx="100" cy="100" r="90" fill="none" stroke="#6b21a8" strokeWidth="0.8" />
           {/* Geometric details simulating sigils */}
           <path d="M100 10 L190 100 L100 190 L10 100 Z" fill="none" stroke="#6b21a8" strokeWidth="0.5" opacity="0.5" />
           <rect x="58" y="58" width="84" height="84" fill="none" stroke="#6b21a8" strokeWidth="0.5" opacity="0.5" transform="rotate(45 100 100)" />
        </motion.svg>

        {/* Inner Ring - Fast & Bright */}
        <motion.svg 
          viewBox="0 0 100 100" 
          className="absolute w-40 h-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
           <circle cx="50" cy="50" r="45" fill="none" stroke="#d4af37" strokeWidth="1" strokeDasharray="60 120" strokeLinecap="round" />
        </motion.svg>

        {/* Center Text/Logo */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center backdrop-blur-[2px]"
          exit={{ scale: 0.8, opacity: 0, filter: "blur(10px)", transition: { duration: 0.5 } }}
        >
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.2em' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-mystic-gold to-yellow-100 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
          >
            FRANLILO
          </motion.h1>
          
          <motion.div 
            className="h-[1px] w-0 bg-gradient-to-r from-transparent via-mystic-purple to-transparent mt-2 mb-2"
            animate={{ w: '100%', width: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <p className="text-[10px] text-gray-500 font-sans uppercase tracking-[0.3em]">
             Sincronizando
          </p>
        </motion.div>
      </div>

      {/* --- NUMERIC COUNTER --- */}
      <motion.div 
        className="absolute bottom-24 z-20"
        exit={{ opacity: 0, y: 20 }}
      >
        <span className="text-4xl md:text-5xl font-serif text-mystic-gold/20 font-bold tabular-nums">
          {Math.min(progress, 100)}
        </span>
        <span className="text-sm text-mystic-gold/20 align-top ml-1">%</span>
      </motion.div>

      {/* --- CREDITS (Subtle) --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 right-6 z-50"
      >
        <a 
          href="https://www.instagram.com/santinooviana" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-500"
        >
           <div className="h-[1px] w-8 bg-gray-600 group-hover:bg-mystic-gold transition-colors" />
           <span className="text-[9px] uppercase tracking-widest text-gray-400 group-hover:text-white">
             Dev by Santino
           </span>
        </a>
      </motion.div>

    </motion.div>
  );
};

export default LoadingScreen;