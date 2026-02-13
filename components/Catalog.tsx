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
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
              Catálogo de Servicios
            </h2>
            <p className="text-gray-500 text-sm">Seleccione el ritual adecuado para su propósito.</p>
          </div>
          
          <div className="relative w-full md:w-auto min-w-[300px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-500" size={16} />
            </div>
            <input
                type="text"
                placeholder="Buscar por nombre o categoría..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#111] border border-gray-800 rounded-sm py-2.5 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-mystic-gold transition-colors text-sm font-sans"
            />
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-[#111] border border-gray-800 rounded-sm"
            >
              <p className="text-white font-serif text-lg mb-1">Sin resultados</p>
              <p className="text-gray-500 text-sm">
                No se encontraron servicios que coincidan con su búsqueda.
              </p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 text-xs uppercase font-bold text-mystic-gold hover:text-white transition-colors"
              >
                Limpiar filtros
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Catalog;