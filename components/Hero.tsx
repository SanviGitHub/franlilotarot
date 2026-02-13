import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Lock, ShieldCheck } from 'lucide-react';
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
           className="bg-black/60 backdrop-blur-md border border-white/10 text-gray-400 px-6 py-3 rounded-sm flex items-center gap-3 hover:bg-white hover:text-black transition-all duration-300 group"
         >
           {admin.isAuthenticated ? (
             <span className="font-bold tracking-widest text-sm">PANEL</span>
           ) : (
             <>
               <Lock size={16} className="group-hover:scale-110 transition-transform"/>
               <span className="font-bold tracking-widest text-xs">LOGIN</span>
             </>
           )}
         </button>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-mystic-black z-10 pointer-events-none" />
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="https://i.ibb.co/NnChr19Z/Chat-GPT-Image-13-feb-2026-01-23-24.png" 
            alt="Franlilo Tarot Background" 
            className="w-full h-full object-cover opacity-50 grayscale-[0.3]"
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
          <div className="flex justify-center items-center gap-2 mb-6">
             <ShieldCheck className="text-mystic-gold w-4 h-4" />
             <h2 className="text-gray-400 text-xs md:text-sm font-sans tracking-[0.4em] uppercase border border-white/10 px-4 py-1 rounded-full bg-black/50 backdrop-blur-md">
               Servicios Esotéricos Premium
             </h2>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
            Franlilo Tarot
          </h1>
          
          <p className="text-gray-300 font-sans text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Soluciones de alta efectividad en retornos de pareja, limpiezas y apertura de caminos. Discreción absoluta y resultados profesionales.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 bg-mystic-gold text-black font-bold tracking-widest text-sm uppercase rounded-sm hover:bg-white transition-colors shadow-lg shadow-mystic-gold/10"
            >
              Ver Servicios
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 bg-transparent border border-white/20 text-white font-bold tracking-widest text-sm uppercase rounded-sm hover:bg-white/5 transition-colors"
            >
              Trayectoria
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;