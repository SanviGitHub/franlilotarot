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
import IntroScreen from './components/IntroScreen';
import { AnimatePresence, motion } from 'framer-motion';

// Sequence States
type AppState = 'loading' | 'intro' | 'content';

const MainLayout: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('loading');
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
        img.onerror = resolve; // Resolve even on error
      });
    };

    // 3. Asset Loading + Min Wait time
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 2500));
    const imagesLoaded = Promise.all(imageUrls.map(preloadImage));

    Promise.all([minLoadTime, imagesLoaded]).then(() => {
      // Act 1 Complete -> Trigger Transition to Act 2
      setAppState('intro');
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

  const handleIntroComplete = () => {
    // Act 2 Complete -> Trigger Act 3
    setAppState('content');
  };

  return (
    <div className="min-h-screen bg-mystic-black text-gray-100 font-sans selection:bg-mystic-purple selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {/* Act 1: Loading Screen */}
        {appState === 'loading' && (
          <LoadingScreen key="loading" />
        )}

        {/* Act 2: Intersticial "Franlilo Brujo" */}
        {appState === 'intro' && (
          <IntroScreen key="intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Act 3: Main Content Entry */}
      {appState === 'content' && (
        <motion.div
          key="main-content"
          initial={{ scale: 1.1, filter: "blur(12px)", opacity: 0 }}
          animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <StarBackground />
          
          <main>
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
        </motion.div>
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