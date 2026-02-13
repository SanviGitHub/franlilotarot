import React from 'react';

interface FooterProps {
  onOpenLogin: () => void;
  onOpenDashboard: () => void;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-black py-12 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-mystic-gold font-serif text-xl mb-2">Franlilo Tarot</h3>
          <p className="text-gray-500 text-sm">Alta Magia & Espiritualidad.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-mystic-purple transition-colors font-sans text-sm tracking-wide">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-mystic-purple transition-colors font-sans text-sm tracking-wide">TikTok</a>
        </div>

        <div className="text-xs text-gray-800 flex items-center gap-2">
           <span>© 2026 Franlilo Tarot. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;