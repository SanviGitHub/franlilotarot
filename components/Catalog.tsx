import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import RitualCard from './RitualCard';
import { Category } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const categories: (Category | 'Todo')[] = [
  'Todo', 
  'Amor', 
  'Limpieza', 
  'Apertura', 
  'Prosperidad',
  'Protección', 
  'Justicia',
  'Dominio', 
  'Salud'
];

const Catalog: React.FC = () => {
  const { rituals } = useApp();
  const [filter, setFilter] = useState<Category | 'Todo'>('Todo');

  const filteredRituals = filter === 'Todo' 
    ? rituals 
    : rituals.filter(r => r.category === filter);

  return (
    <section id="catalogo" className="py-24 px-6 relative z-10 bg-mystic-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white mb-6"
          >
            Catálogo Sagrado
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest border transition-all duration-300 rounded-sm mb-2 ${
                  filter === cat
                    ? 'border-mystic-gold bg-mystic-gold text-mystic-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'border-white/20 text-gray-400 hover:border-mystic-gold/50 hover:text-white hover:scale-105'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredRituals.map(ritual => (
              <RitualCard key={ritual.id} ritual={ritual} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredRituals.length === 0 && (
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-12 italic"
          >
            No hay rituales en esta categoría por el momento.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Catalog;