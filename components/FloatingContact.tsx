import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingContact: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/1234567890" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-black/50 flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle size={32} fill="white" className="text-[#25D366]" />
      <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-sm text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Consultar Ahora
      </span>
    </motion.a>
  );
};

export default FloatingContact;