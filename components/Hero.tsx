import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Lock, ShieldCheck, Star } from 'lucide-react';
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
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="https://i.ibb.co/NnChr19Z/Chat-GPT-Image-13-feb-2026-01-23-24.png" 
            alt="Franlilo Tarot Background" 
            className="w-full h-full object-cover opacity-50 grayscale-[0.3]"
          />
        </motion.div>
      </div>

      <div className="relative z-20 text-center max-w-5xl mx-auto mt-10">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex justify-center items-center gap-2 mb-8">
             <ShieldCheck className="text-mystic-gold w-4 h-4" />
             <h2 className="text-gray-400 text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase border border-white/10 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md shadow-lg shadow-mystic-gold/5">
               Alta Magia & Esoterismo Premium
             </h2>
          </div>

          <div className="relative inline-block mb-6">
            <motion.div 
              className="absolute -inset-10 bg-mystic-purple/20 blur-[60px] rounded-full"
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
              Franlilo <br />
              <span className="animate-text-shimmer bg-clip-text text-transparent bg-gradient-to-r from-mystic-gold via-yellow-200 to-mystic-gold">
                Tarot
              </span>
            </h1>
          </div>
          
          <p className="text-gray-300 font-sans text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light mix-blend-screen">
            Soluciones de alta efectividad en retornos de pareja, limpiezas y apertura de caminos. <br className="hidden md:block"/>
            <span className="italic text-mystic-gold/80">Discreción absoluta y resultados profesionales.</span>
          </p>
          
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-mystic-gold text-black font-bold tracking-[0.2em] text-xs uppercase rounded-sm hover:bg-white transition-all shadow-lg shadow-mystic-gold/10 relative overflow-hidden group"
            >
              <span className="relative z-10">Ver Servicios</span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-transparent border border-white/10 text-white font-bold tracking-[0.2em] text-xs uppercase rounded-sm transition-all"
            >
              Trayectoria
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-mystic-gold/70">Descubre</span>
        <ArrowDown size={20} className="text-mystic-gold/70" />
      </motion.div>
    </section>
  );
};

export default Hero;