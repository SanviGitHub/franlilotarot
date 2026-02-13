import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Lock } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Hero: React.FC = () => {
  const { admin, login } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Logic
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);

  const triggerLogin = () => {
    window.dispatchEvent(new CustomEvent('open-login'));
  };

  const triggerDashboard = () => {
    window.dispatchEvent(new CustomEvent('open-dashboard'));
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Admin Button - Top Right */}
      <div className="absolute top-6 right-6 z-50">
         <button 
           onClick={admin.isAuthenticated ? triggerDashboard : triggerLogin}
           className="bg-black/60 backdrop-blur-md border border-mystic-gold/40 text-mystic-gold px-6 py-3 rounded-sm flex items-center gap-3 hover:bg-mystic-gold hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] group"
         >
           {admin.isAuthenticated ? (
             <span className="font-bold tracking-widest text-sm">PANEL GESTOR</span>
           ) : (
             <>
               <Lock size={18} className="group-hover:scale-110 transition-transform"/>
               <span className="font-bold tracking-widest text-sm">GESTOR</span>
             </>
           )}
         </button>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-mystic-black z-10 pointer-events-none" />
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="https://i.ibb.co/NnChr19Z/Chat-GPT-Image-13-feb-2026-01-23-24.png" 
            alt="Franlilo Tarot Background" 
            className="w-full h-full object-cover opacity-60 animate-pulse-slow"
          />
        </motion.div>
      </div>

      <div className="relative z-20 text-center max-w-4xl mx-auto mt-10">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-mystic-gold text-lg md:text-xl font-serif tracking-[0.3em] mb-4 uppercase drop-shadow-md">
            Alta Magia & Espiritualidad
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 mb-8 text-glow leading-tight drop-shadow-xl relative">
            Franlilo Tarot
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full -skew-x-12 animate-[shimmer_3s_infinite] pointer-events-none"></span>
          </h1>
          <p className="text-gray-200 font-sans text-lg md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Canalizador de Energías y Guía Espiritual. Rituales consagrados con Arcángeles y Santos para transformar tu destino.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-black/40 backdrop-blur-md border border-mystic-gold text-mystic-gold hover:bg-mystic-gold hover:text-mystic-black transition-all duration-300 font-serif text-xl rounded-sm tracking-widest shadow-lg relative overflow-hidden group"
          >
            <span className="relative z-10">VER RITUALES</span>
            <div className="absolute inset-0 h-full w-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-mystic-gold/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;