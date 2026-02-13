import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10 bg-mystic-black border-b border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-mystic-gold/10 transform translate-x-4 translate-y-4 rounded-sm"></div>
            <img 
              src="https://i.ibb.co/jkxTgn75/image.png" 
              alt="Franlilo Profile" 
              className="w-full h-auto rounded-sm grayscale hover:grayscale-0 transition-all duration-700 relative z-10 shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">Sobre Franlilo</h2>
            <p className="text-mystic-gold text-xs font-bold tracking-[0.2em] uppercase">Experiencia & Profesionalismo</p>
          </div>
          
          <div className="space-y-4 font-sans text-gray-400 text-sm leading-7 text-justify">
            <p>
              Con más de 6 años de trayectoria en el campo de las ciencias ocultas y la parapsicología, Franlilo se ha consolidado como una referencia en trabajos de alta complejidad.
            </p>
            <p>
              Nos especializamos en la resolución de conflictos emocionales y energéticos mediante rituales de Alta Magia. Nuestro enfoque se aleja de la superstición común para ofrecer un servicio basado en el conocimiento, la técnica y resultados tangibles.
            </p>
            <p>
              Cada caso es analizado con rigor para determinar la viabilidad y el tipo de trabajo necesario, garantizando siempre la máxima discreción y respeto por la privacidad del consultante.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
            <div>
              <span className="block text-3xl font-serif text-white font-bold">6+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 block">Años de Experiencia</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-white font-bold">100%</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 block">Confidencialidad</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;