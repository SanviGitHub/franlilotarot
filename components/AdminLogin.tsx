import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ isOpen, onClose, onSuccess }) => {
  const { login } = useApp();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(user, pass)) {
      setError(false);
      onSuccess();
      onClose();
    } else {
      setError(true);
      setPass(''); // Clear password on fail
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-sm p-8 bg-[#0a0a0a] border border-mystic-gold/20 rounded-sm shadow-2xl shadow-mystic-purple/10"
      >
        <h2 className="text-center text-gray-500 text-xs tracking-[0.2em] uppercase mb-6">Acceso Restringido</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full bg-[#111] border border-gray-800 text-gray-300 p-3 rounded-sm focus:border-mystic-gold outline-none text-sm"
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Contraseña"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full bg-[#111] border border-gray-800 text-gray-300 p-3 rounded-sm focus:border-mystic-gold outline-none text-sm"
            />
          </div>
          
          {error && <p className="text-red-500 text-xs text-center">Credenciales inválidas.</p>}

          <button 
            type="submit"
            className="w-full bg-mystic-gold/10 text-mystic-gold border border-mystic-gold/50 py-3 rounded-sm hover:bg-mystic-gold hover:text-black transition-all text-sm font-bold tracking-wider"
          >
            ENTRAR
          </button>
        </form>
        
        <button onClick={onClose} className="w-full text-center mt-4 text-gray-600 text-xs hover:text-white">
          Cancelar
        </button>
      </motion.div>
    </div>
  );
};

export default AdminLogin;