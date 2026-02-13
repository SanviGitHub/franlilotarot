import React, { useState, useEffect } from 'react';
import { Ritual, CandleType } from '../types';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface RitualCardProps {
  ritual: Ritual;
}

const RitualCard: React.FC<RitualCardProps> = ({ ritual }) => {
  // Determine default selected type (prioritize VDF, then fallback to first available)
  const availableTypes = (['1d', '3d', 'VDF', '7d'] as CandleType[]).filter(t => ritual.prices[t] > 0);
  const defaultType = availableTypes.includes('VDF') ? 'VDF' : availableTypes[0] || 'VDF';

  const [selectedType, setSelectedType] = useState<CandleType>(defaultType);

  // Update selected if current becomes unavailable (e.g. data change)
  useEffect(() => {
     if (ritual.prices[selectedType] === 0 && availableTypes.length > 0) {
         setSelectedType(availableTypes[0]);
     }
  }, [ritual, selectedType, availableTypes]);

  const price = ritual.prices[selectedType];
  const formattedPrice = price.toLocaleString('es-AR');

  const handleConsult = () => {
    const message = `Hola Franlilo, estoy interesado en el ritual *${ritual.name}* con la opción *${selectedType}* ($${formattedPrice}). Vi tu web.`;
    const url = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`; 
    window.open(url, '_blank');
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="glass-panel rounded-sm overflow-hidden flex flex-col h-full border border-white/5 hover:border-mystic-gold/40 transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] group"
    >
      <div className="p-6 flex-grow relative">
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-mystic-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="flex justify-between items-start mb-3 relative z-10">
           <span className="text-[10px] font-bold uppercase text-mystic-purple tracking-widest border border-mystic-purple/30 px-2 py-1 rounded-sm bg-black/50">
            {ritual.category}
           </span>
           {ritual.popular && (
             <span className="text-[10px] font-bold uppercase text-black bg-mystic-gold px-2 py-1 rounded-sm flex items-center gap-1 shadow-glow">
               ★ Top
             </span>
           )}
        </div>
        
        <h3 className="text-xl md:text-2xl font-serif text-white mb-3 h-14 md:h-16 line-clamp-2 items-center flex relative z-10 group-hover:text-mystic-gold transition-colors duration-300">{ritual.name}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3 min-h-[60px] relative z-10 font-sans font-light">{ritual.description}</p>

        <div className="space-y-3 relative z-10">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center">Selecciona Potencia</p>
          <div className="grid grid-cols-4 gap-1 bg-black/60 p-1 rounded-sm border border-white/5">
            {(['1d', '3d', 'VDF', '7d'] as CandleType[]).map((type) => {
              const isAvailable = ritual.prices[type] > 0;
              return (
                <button
                  key={type}
                  disabled={!isAvailable}
                  onClick={() => isAvailable && setSelectedType(type)}
                  className={`text-[10px] py-2 rounded-sm transition-all font-medium ${
                    !isAvailable 
                      ? 'text-gray-700 cursor-not-allowed opacity-50' 
                      : selectedType === type 
                        ? 'bg-mystic-gold text-black font-bold shadow-lg shadow-mystic-gold/20 scale-105' 
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-black/40 p-5 border-t border-white/5 mt-auto relative z-10 backdrop-blur-sm">
        <div className="flex justify-between items-end mb-4">
          <span className="text-gray-500 text-xs uppercase tracking-wider">Inversión</span>
          <span className="text-2xl font-serif text-mystic-gold font-bold drop-shadow-sm">
             ${formattedPrice}
          </span>
        </div>
        
        <button 
          onClick={handleConsult}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-mystic-purple to-purple-900 hover:from-mystic-gold hover:to-yellow-600 hover:text-black text-white py-3.5 rounded-sm font-sans font-bold tracking-wider text-sm transition-all duration-300 shadow-lg"
        >
          <MessageCircle size={18} />
          SOLICITAR RITUAL
        </button>
      </div>
    </motion.div>
  );
};

export default RitualCard;