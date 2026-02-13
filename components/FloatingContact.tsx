import React from 'react';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingContact: React.FC = () => {
  return (
    <motion.a
      href="https://www.instagram.com/franlilo" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-tr from-[#f09433] via-[#bc1888] to-[#8a3ab9] text-white p-4 rounded-full shadow-[0_0_20px_rgba(188,24,136,0.5)] flex items-center justify-center hover:scale-110 hover:shadow-[0_0_30px_rgba(188,24,136,0.8)] transition-all duration-300 group"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ y: -5 }}
    >
      <Instagram size={32} strokeWidth={2} className="text-white drop-shadow-md" />
      <span className="absolute right-full mr-4 bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-sm text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg transform translate-x-2 group-hover:translate-x-0 duration-300 pointer-events-none">
        Ir al Instagram
      </span>
    </motion.a>
  );
};

export default FloatingContact;