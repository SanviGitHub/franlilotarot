import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import RitualCard from './RitualCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

// Utility: Normalize string to remove accents, lowercase, and trim for safe comparison
const normalizeStr = (str: string): string => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
};

const Catalog: React.FC = () => {
  const { rituals } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  // Memoized search logic
  const filteredRituals = useMemo(() => {
    if (!searchTerm.trim()) return rituals;

    const term = normalizeStr(searchTerm);

    return rituals.filter(r => {
      // Search across Name, Category, and Description
      const nameMatch = normalizeStr(r.name).includes(term);
      const categoryMatch = normalizeStr(r.category).includes(term);
      const descMatch = normalizeStr(r.description).includes(term);
      
      return nameMatch || categoryMatch || descMatch;
    });
  }, [rituals, searchTerm]);

  return (
    <section id="catalogo" className="py-24 px-6 relative z-10 bg-mystic-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white mb-8"
          >
            Catálogo Sagrado
          </motion.h2>
          
          {/* Mini Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-md mx-auto group"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="text-mystic-gold/50 group-focus-within:text-mystic-gold transition-colors duration-300" size={20} />
            </div>
            <input
                type="text"
                placeholder="Buscar ritual, intención o energía..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white placeholder-gray-500 focus:outline-none focus:border-mystic-gold/50 focus:bg-black/40 focus:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300 backdrop-blur-sm font-sans text-sm tracking-wide"
            />
          </motion.div>
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
        
        {/* Search Fallback UI */}
        <AnimatePresence>
          {filteredRituals.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 px-4"
            >
              <div className="inline-block p-4 rounded-full bg-white/5 mb-4">
                 <Search className="text-gray-600" size={32} />
              </div>
              <p className="text-mystic-gold font-serif text-xl mb-2">Energía no encontrada</p>
              <p className="text-gray-400 text-sm font-sans">
                No encontramos rituales que coincidan con <span className="text-white font-bold">"{searchTerm}"</span>. 
                <br/>Intenta buscar por una sola palabra clave (ej. "amor", "dinero").
              </p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-6 text-xs uppercase tracking-widest text-mystic-purple hover:text-white transition-colors border-b border-mystic-purple/30 hover:border-white"
              >
                Ver todo el catálogo
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Catalog;