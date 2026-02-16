import React from 'react';
import { motion } from 'framer-motion';
import { Search, Flame, Shield, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <Search size={32} />,
    title: "1. Diagnóstico",
    desc: "Analizamos la situación energética actual mediante una lectura profunda para detectar bloqueos reales."
  },
  {
    icon: <Flame size={32} />,
    title: "2. Preparación",
    desc: "Selección de materiales consagrados y configuración del altar específico para tu caso único."
  },
  {
    icon: <Sparkles size={32} />,
    title: "3. Ritualización",
    desc: "Ejecución del trabajo de Alta Magia con la potencia seleccionada (1, 3, 7 días o VDF)."
  },
  {
    icon: <Shield size={32} />,
    title: "4. Protección",
    desc: "Sellado energético final para asegurar que los resultados perduren y reboten cualquier negatividad."
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-32 px-6 relative z-10 bg-[#080808] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-1/4 left-10 w-64 h-64 bg-mystic-purple/10 rounded-full blur-[100px]" />
         <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-mystic-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-white mb-4"
          >
            El Proceso Sagrado
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-[2px] bg-mystic-gold mx-auto mb-6"
          />
          <p className="text-gray-400 font-sans max-w-xl mx-auto">
            No es solo encender una vela. Es un método estructurado de canalización energética.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="relative group"
            >
              {/* Connector Line (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[1px] bg-gradient-to-r from-mystic-gold/50 to-transparent z-0" />
              )}

              <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:bg-white/10 hover:border-mystic-gold/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] h-full flex flex-col items-center text-center">
                <motion.div 
                   animate={{ scale: [1, 1.1, 1], filter: ["drop-shadow(0 0 0px rgba(212,175,55,0))", "drop-shadow(0 0 10px rgba(212,175,55,0.5))", "drop-shadow(0 0 0px rgba(212,175,55,0))"] }}
                   transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                   className="mb-6 p-4 bg-black/50 rounded-full text-mystic-gold border border-mystic-gold/20 group-hover:text-white group-hover:border-mystic-gold transition-colors duration-300"
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-serif text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;