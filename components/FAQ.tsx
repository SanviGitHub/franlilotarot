import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "¿Mis datos y consultas son 100% privados?",
    a: "Absolutamente. En Franlilo Tarot la discreción es un pilar fundamental. Nadie sabrá que solicitaste un trabajo. Toda la comunicación es encriptada y confidencial."
  },
  {
    q: "¿Cuánto tiempo tardan en verse los resultados?",
    a: "Los tiempos energéticos no son lineales y dependen de la complejidad del bloqueo. Sin embargo, con rituales VDF o 7 Días, los movimientos suelen percibirse entre la segunda y cuarta semana post-ritual."
  },
  {
    q: "¿Qué pasa si no tengo experiencia en esto?",
    a: "No necesitas experiencia. Nosotros nos encargamos de toda la ejecución ritualística. Tu única tarea es seguir las instrucciones simples de mentalización que te daremos."
  },
  {
    q: "¿Cuál es la diferencia entre una vela de 3 días y una VDF?",
    a: "La vela de 3 días es un impulso suave, ideal para situaciones recientes. La potencia VDF (Velón de Fuerza) concentra una carga energética mucho mayor, diseñada para romper resistencias y situaciones estancadas hace tiempo."
  },
  {
    q: "¿Hacen trabajos a distancia?",
    a: "Sí, el 95% de nuestros trabajos son a distancia. La energía no conoce de kilómetros. Trabajamos con nombres, fechas y fotos para canalizar el vínculo."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative z-10 bg-mystic-black border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-mystic-gold text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Dudas Comunes</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">Preguntas Frecuentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-sm bg-[#111] overflow-hidden hover:border-mystic-gold/30 transition-colors"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-base md:text-lg font-serif transition-colors ${activeIndex === idx ? 'text-mystic-gold' : 'text-gray-200'}`}>
                  {faq.q}
                </span>
                <span className="text-gray-500 ml-4">
                  {activeIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-gray-400 text-sm font-light leading-7 border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;