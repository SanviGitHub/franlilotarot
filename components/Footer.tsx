import React from 'react';

interface FooterProps {
  onOpenLogin: () => void;
  onOpenDashboard: () => void;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-black py-8 px-6 border-t border-gray-900 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-white font-serif text-lg">Franlilo Tarot</h3>
        </div>
        
        <div className="text-[10px] text-gray-600 uppercase tracking-widest">
           © 2026 Franlilo Tarot. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;