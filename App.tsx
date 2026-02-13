import React, { useState, useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import StarBackground from './components/StarBackground';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import FloatingContact from './components/FloatingContact';
import LoadingScreen from './components/LoadingScreen';

const MainLayout: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    // 1. URLs to preload
    const imageUrls = [
      "https://i.ibb.co/NnChr19Z/Chat-GPT-Image-13-feb-2026-01-23-24.png", // Hero BG
      "https://i.ibb.co/jkxTgn75/image.png" // About Img
    ];

    // 2. Preload function
    const preloadImage = (src: string) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve; // Resolve even on error to avoid sticking
      });
    };

    // 3. Minimum wait time for aesthetic purposes (so the logo is seen)
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 2500));
    
    // 4. Wait for images
    const imagesLoaded = Promise.all(imageUrls.map(preloadImage));

    // 5. When both finish, hide loading screen
    Promise.all([minLoadTime, imagesLoaded]).then(() => {
      setLoading(false);
    });

    // --- Admin Event Listeners ---
    const handleOpenLogin = () => setShowLogin(true);
    const handleOpenDashboard = () => setShowDashboard(true);

    window.addEventListener('open-login', handleOpenLogin);
    window.addEventListener('open-dashboard', handleOpenDashboard);

    return () => {
      window.removeEventListener('open-login', handleOpenLogin);
      window.removeEventListener('open-dashboard', handleOpenDashboard);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-mystic-black text-gray-100 font-sans selection:bg-mystic-purple selection:text-white">
      <StarBackground />
      
      <main className="animate-in fade-in duration-1000">
        <Hero />
        <About />
        <Education />
        <Catalog />
      </main>

      <FloatingContact />
      
      <Footer 
        onOpenLogin={() => setShowLogin(true)} 
        onOpenDashboard={() => setShowDashboard(true)} 
      />

      <AdminLogin 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
        onSuccess={() => setShowDashboard(true)}
      />

      {showDashboard && (
        <AdminDashboard onClose={() => setShowDashboard(false)} />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
};

export default App;