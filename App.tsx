import React, { useState, useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import StarBackground from './components/StarBackground';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Catalog from './components/Catalog';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import FloatingContact from './components/FloatingContact';
import LoadingScreen from './components/LoadingScreen';
import { AnimatePresence, motion } from 'framer-motion';

// Sequence States
type AppState = 'loading' | 'content';

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
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 2000));
    const imagesLoaded = Promise.all(imageUrls.map(preloadImage));

    Promise.all([minLoadTime, imagesLoaded]).then(() => {
      // Direct transition to content
      setAppState('content');
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

  return (
    <div className="min-h-screen bg-mystic-black text-gray-100 font-sans selection:bg-mystic-purple selection:text-white overflow-x-hidden">
      {/* Cinematic Grain Overlay */}
      <div className="bg-grain" />

      <AnimatePresence mode="wait">
        {/* Act 1: Loading Screen */}
        {appState === 'loading' && (
          <LoadingScreen key="loading" />
        )}
      </AnimatePresence>

      {/* Act 2: Main Content Entry */}
      {appState === 'content' && (
        <>
          <ScrollProgress />
          
          {/* Fixed Elements outside transformed container to preserve positioning */}
          <StarBackground />

          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10"
          >
            <main>
              <Hero />
              <Process />
              <About />
              <Testimonials />
              <Education />
              <Catalog />
              <FAQ />
            </main>
            
            <Footer 
              onOpenLogin={() => setShowLogin(true)} 
              onOpenDashboard={() => setShowDashboard(true)} 
            />
          </motion.div>

          {/* Overlays */}
          <FloatingContact />
          
          <AdminLogin 
            isOpen={showLogin} 
            onClose={() => setShowLogin(false)} 
            onSuccess={() => setShowDashboard(true)}
          />

          <AnimatePresence>
            {showDashboard && (
              <AdminDashboard onClose={() => setShowDashboard(false)} />
            )}
          </AnimatePresence>
        </>
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