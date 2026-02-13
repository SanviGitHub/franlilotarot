import React, { useState, useMemo } from 'react';
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

// Utility: Normalize string to remove accents, lowercase, and trim for safe comparison
// Ensures "Protección" matches "Proteccion", "protección", etc.
const normalizeStr = (str: string): string => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
};

const Catalog: React.FC = () => {
  const { rituals } = useApp();
  const [filter, setFilter] = useState<Category | 'Todo'>('Todo');

  // Memoized filtering logic for instant reactivity and performance
  const filteredRituals = useMemo(() => {
    if (filter === 'Todo') return rituals;

    const normalizedFilter = normalizeStr(filter);

    return rituals.filter(r => {
      // Safety check: ensure category exists before normalizing
      const ritualCategory = r.category ? normalizeStr(r.category) : '';
      return ritualCategory === normalizedFilter;
    });
  }, [rituals, filter]);

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
        
        {/* Safe Fallback UI */}
        <AnimatePresence>
          {filteredRituals.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 px-4 border border-white/5 bg-white/5 rounded-sm max-w-lg mx-auto mt-8"
            >
              <p className="text-mystic-gold font-serif text-xl mb-2">Categoría en Preparación</p>
              <p className="text-gray-400 text-sm font-sans italic">
                Aún no hay rituales disponibles en <span className="text-white font-bold">"{filter}"</span>. 
                <br/>Estamos canalizando nuevas energías para esta sección.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Catalog;