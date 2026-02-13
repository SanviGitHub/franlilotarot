import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Timer to trigger the exit/completion of this act
    const timer = setTimeout(() => {
      onComplete();
    }, 2800); // 1.2s text reveal + reading time + exit buffer

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Particle System for the "Ethereal Smoke/Sparks"
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; vx: number; vy: number; life: number; color: string; size: number }[] = [];

    const createParticle = () => {
      const isGold = Math.random() > 0.7;
      return {
        x: Math.random() * width,
        y: height + 20,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -Math.random() * 2 - 0.5,
        life: Math.random() * 100 + 50,
        color: isGold ? 'rgba(212, 175, 55,' : 'rgba(107, 33, 168,', // Gold or Violet
        size: Math.random() * 2
      };
    };

    // Initial population
    for(let i = 0; i < 50; i++) particles.push(createParticle());

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Add new particles occasionally
      if (Math.random() > 0.1) particles.push(createParticle());

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        
        // Draw
        ctx.beginPath();
        const opacity = p.life / 100;
        ctx.fillStyle = `${p.color} ${opacity})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const text = "Franlilo Brujo";
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 }
    }),
    exit: {
      opacity: 0,
      y: -50,
      filter: "blur(20px)",
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }} // Smooth fade out to App
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60" />
      
      {/* Added significant padding (px-12 py-20) to prevent glow clipping */}
      <motion.div
        className="relative z-10 flex overflow-hidden px-12 py-20"
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            className={`text-4xl md:text-7xl font-serif font-bold ${letter === ' ' ? 'mr-4' : ''} text-transparent bg-clip-text bg-gradient-to-b from-mystic-gold via-white to-mystic-purple drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]`}
            style={{ 
              textShadow: "0 0 30px rgba(107,33,168,0.8), 0 0 60px rgba(107,33,168,0.4)" 
            }}
          >
            {letter}
          </motion.span>
        ))}
        
        {/* Light writing reveal effect overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full skew-x-12"
          initial={{ left: '-100%' }}
          animate={{ left: '200%' }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default IntroScreen;