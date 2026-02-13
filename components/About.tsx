import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 px-6 relative z-10 bg-mystic-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-mystic-purple/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <div className="relative group">
            <div className="absolute -inset-4 border border-mystic-gold/20 transform rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="absolute -inset-4 border border-mystic-purple/20 transform -rotate-2 group-hover:rotate-0 transition-transform duration-700 delay-100"></div>
            <img 
              src="https://i.ibb.co/jkxTgn75/image.png" 
              alt="Franlilo" 
              className="w-full h-auto rounded-sm shadow-2xl shadow-mystic-gold/10 relative z-10"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-mystic-gold mb-4">Mi Camino Sagrado</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-mystic-purple to-transparent"></div>
          </div>
          
          <div className="space-y-6 font-sans text-gray-300 text-lg leading-relaxed">
            <p>
              Mi trabajo no es un juego, es una devoción. Como canalizador de energías, fusiono mi profunda fe católica con el respeto ancestral a deidades paganas que han guiado a la humanidad por siglos.
            </p>
            <p>
              Cada ritual que realizo es una petición formal ante el plano espiritual. No trabajo con oscuridad caótica, sino con <span className="text-mystic-gold font-semibold text-glow">luz, orden y autoridad espiritual</span>. Mis manos son instrumentos para abrir los caminos que el destino parecía haber cerrado.
            </p>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex gap-12">
            <div className="text-center">
              <span className="block text-4xl font-serif text-mystic-purple font-bold drop-shadow-glow">6+</span>
              <span className="text-xs uppercase tracking-widest text-gray-400 mt-2 block">Años de Exp.</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-serif text-mystic-purple font-bold drop-shadow-glow">5k+</span>
              <span className="text-xs uppercase tracking-widest text-gray-400 mt-2 block">Casos Éxito</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;