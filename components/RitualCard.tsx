import React, { useState, useEffect } from 'react';
import { Ritual, CandleType } from '../types';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Instagram } from 'lucide-react';

interface RitualCardProps {
  ritual: Ritual;
}

const RitualCard: React.FC<RitualCardProps> = ({ ritual }) => {
  const availableTypes = (['1d', '3d', 'VDF', '7d'] as CandleType[]).filter(t => ritual.prices[t] > 0);
  const defaultType = availableTypes.includes('VDF') ? 'VDF' : availableTypes[0] || 'VDF';

  const [selectedType, setSelectedType] = useState<CandleType>(defaultType);

  useEffect(() => {
     if (ritual.prices[selectedType] === 0 && availableTypes.length > 0) {
         setSelectedType(availableTypes[0]);
     }
  }, [ritual, selectedType, availableTypes]);

  const price = ritual.prices[selectedType];
  const formattedPrice = price.toLocaleString('es-AR');

  const handleConsult = () => {
    // Redirección directa al perfil de Instagram
    window.open('https://www.instagram.com/franlilotarot', '_blank');
  };

  // Mouse move effect for border glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      onMouseMove={handleMouseMove}
      className="glass-panel rounded-sm overflow-hidden flex flex-col h-full border border-white/5 relative group transition-all duration-500"
    >
      {/* Interactive Border Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 175, 55, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="p-6 flex-grow relative z-10">
        <div className="flex justify-between items-start mb-3">
           <span className="text-[10px] font-bold uppercase text-mystic-purple tracking-widest border border-mystic-purple/30 px-2 py-1 rounded-sm bg-black/50 backdrop-blur-md">
            {ritual.category}
           </span>
           {ritual.popular && (
             <span className="text-[10px] font-bold uppercase text-black bg-gradient-to-r from-mystic-gold to-yellow-200 px-2 py-1 rounded-sm flex items-center gap-1 shadow-[0_0_10px_rgba(212,175,55,0.4)]">
               ★ Top
             </span>
           )}
        </div>
        
        <h3 className="text-xl md:text-2xl font-serif text-white mb-3 h-14 md:h-16 line-clamp-2 items-center flex group-hover:text-mystic-gold transition-colors duration-300 drop-shadow-sm">{ritual.name}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3 min-h-[60px] font-sans font-light leading-relaxed group-hover:text-gray-300 transition-colors">{ritual.description}</p>

        <div className="space-y-3">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center group-hover:text-mystic-gold/60 transition-colors">Selecciona Potencia</p>
          <div className="grid grid-cols-4 gap-1 bg-black/60 p-1 rounded-sm border border-white/5">
            {(['1d', '3d', 'VDF', '7d'] as CandleType[]).map((type) => {
              const isAvailable = ritual.prices[type] > 0;
              return (
                <button
                  key={type}
                  disabled={!isAvailable}
                  onClick={() => isAvailable && setSelectedType(type)}
                  className={`text-[10px] py-2 rounded-sm transition-all font-medium relative overflow-hidden ${
                    !isAvailable 
                      ? 'text-gray-700 cursor-not-allowed opacity-50' 
                      : selectedType === type 
                        ? 'text-black font-bold shadow-lg scale-105 z-10' 
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {selectedType === type && (
                    <motion.div 
                      layoutId={`active-bg-${ritual.id}`}
                      className="absolute inset-0 bg-mystic-gold"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{type}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-black/40 p-5 border-t border-white/5 mt-auto relative z-10 backdrop-blur-sm group-hover:bg-black/60 transition-colors">
        <div className="flex justify-between items-end mb-4">
          <span className="text-gray-500 text-xs uppercase tracking-wider">Inversión</span>
          <motion.span 
            key={formattedPrice}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-serif text-mystic-gold font-bold drop-shadow-sm"
          >
             ${formattedPrice}
          </motion.span>
        </div>
        
        <button 
          onClick={handleConsult}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#8a3ab9] to-[#bc1888] hover:from-mystic-gold hover:to-yellow-500 hover:text-black text-white py-3.5 rounded-sm font-sans font-bold tracking-wider text-sm transition-all duration-300 shadow-lg group-hover:shadow-[0_0_15px_rgba(188,24,136,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]"
        >
          <Instagram size={18} />
          SOLICITAR RITUAL
        </button>
      </div>
    </motion.div>
  );
};

export default RitualCard;