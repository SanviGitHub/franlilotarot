import React, { useState, useEffect } from 'react';
import { Ritual, CandleType } from '../types';
import { CANDLE_INFO } from '../constants';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

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
    // 1. Obtener información detallada de la potencia seleccionada
    const candleInfo = CANDLE_INFO.find(c => c.type === selectedType);
    const candleTitle = candleInfo ? candleInfo.title : selectedType;

    // 2. Construir el mensaje Premium
    const phoneNumber = "5492212003424";
    
    // Usamos emojis universales y aseguramos la codificación
    const message = `Hola Franlilo 🔮, vengo de tu web sagrada.

Siento el llamado para solicitar el ritual:
✨ *${ritual.name.toUpperCase()}*
📂 Categoría: _${ritual.category}_

He seleccionado la potencia:
🕯️ *${candleTitle}*
💰 Inversión: *$${formattedPrice} ARS*

Entiendo que este trabajo está destinado a:
_"${ritual.description}"_

Quedo a la espera de tu guía para coordinar el pago y dar inicio a la energía.`;

    // 3. Redirigir a WhatsApp usando la API completa para evitar problemas de codificación con emojis
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
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
           <span className={`text-[10px] font-bold uppercase tracking-widest border px-2 py-1 rounded-sm bg-black/50 backdrop-blur-md ${
             ritual.category === 'Amor' ? 'border-pink-900/50 text-pink-500' :
             ritual.category === 'Trabajo de Magia Negra' ? 'border-red-900/50 text-red-500' :
             ritual.category === 'Trabajo de Dinero' ? 'border-mystic-gold/30 text-mystic-gold' :
             ritual.category === 'Protecciones' ? 'border-blue-900/50 text-blue-500' :
             ritual.category === 'Limpieza' ? 'border-emerald-900/50 text-emerald-500' :
             ritual.category === 'Diferentes Trabajos' ? 'border-purple-900/50 text-purple-500' :
             'border-mystic-purple/30 text-mystic-purple'
           }`}>
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
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-900 to-green-700 hover:from-mystic-gold hover:to-yellow-500 hover:text-black text-white py-3.5 rounded-sm font-sans font-bold tracking-wider text-sm transition-all duration-300 shadow-lg group-hover:shadow-[0_0_15px_rgba(20,83,45,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]"
        >
          <MessageCircle size={18} />
          SOLICITAR POR WHATSAPP
        </button>
      </div>
    </motion.div>
  );
};

export default RitualCard;