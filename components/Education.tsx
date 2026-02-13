import React from 'react';
import { motion } from 'framer-motion';
import { CANDLE_INFO } from '../constants';
import { AlertCircle } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-20 px-6 relative z-10 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-l-2 border-mystic-gold pl-6">
          <h2 className="text-3xl font-serif text-white mb-2">Niveles de Potencia</h2>
          <p className="text-gray-400 font-sans text-sm max-w-2xl">
            Para garantizar la efectividad del trabajo, ofrecemos diferentes niveles de intensidad según la complejidad de su situación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CANDLE_INFO.map((candle, idx) => (
            <motion.div
              key={candle.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#111] p-6 rounded-sm border border-white/5 hover:border-mystic-gold/30 transition-colors"
            >
              <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Nivel 0{idx + 1}</div>
              <h3 className="text-lg font-serif text-white mb-2">{candle.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{candle.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-5 bg-blue-900/10 border border-blue-900/30 rounded-sm flex gap-4 items-start">
           <AlertCircle className="text-blue-400 flex-shrink-0 mt-0.5" size={18} />
           <div>
             <h4 className="text-blue-100 font-bold text-sm mb-1">Recomendación Profesional</h4>
             <p className="text-blue-200/70 text-xs leading-relaxed">
               Para casos de bloqueos persistentes o situaciones de ruptura complejas, se recomienda utilizar potencias <strong>VDF (Fuerza Mayor)</strong> o <strong>7 Días</strong>. Las velas de menor duración son ideales para mantenimiento o peticiones sencillas.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Education;