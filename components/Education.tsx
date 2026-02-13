import React from 'react';
import { motion } from 'framer-motion';
import { CANDLE_INFO } from '../constants';
import { Flame } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-20 px-6 relative z-10 bg-gradient-to-b from-mystic-black to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Aclaración Maestra</h2>
          <p className="text-mystic-gold font-sans uppercase tracking-widest text-sm">La potencia determina el resultado</p>
          <div className="mt-8 max-w-2xl mx-auto p-4 bg-red-900/20 border border-red-500/30 rounded-sm">
             <p className="text-red-200 text-sm font-sans font-medium">
               ⚠️ Advertencia: Si tu caso presenta bloqueos pesados o mucho tiempo de separación, una vela de iniciación NO será suficiente. Lo barato sale caro si no se mueve la energía necesaria.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CANDLE_INFO.map((candle, idx) => (
            <motion.div
              key={candle.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`glass-panel p-6 rounded-sm border-t-4 ${candle.color} hover:bg-white/5 transition-all duration-300 group`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-4xl font-serif text-white/20 font-bold group-hover:text-mystic-gold/50 transition-colors">0{idx + 1}</span>
                <Flame className={`${candle.type === '7d' ? 'text-mystic-gold' : 'text-gray-500'} group-hover:text-mystic-purple transition-colors`} />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{candle.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{candle.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;