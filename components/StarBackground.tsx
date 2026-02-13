import React, { useEffect, useRef } from 'react';

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { 
      x: number; 
      y: number; 
      size: number; 
      speed: number; 
      opacity: number;
      twinkleSpeed: number;
      twinkleDir: number; 
    }[] = [];
    
    // Performance: Limit particles on mobile
    const isMobile = width < 768;
    const particleCount = isMobile ? 40 : 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (isMobile ? 1.5 : 2.5),
        speed: Math.random() * 0.15 + 0.05,
        opacity: Math.random() * 0.5 + 0.1,
        twinkleSpeed: Math.random() * 0.01 + 0.005,
        twinkleDir: 1
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p) => {
        // Twinkle logic
        p.opacity += p.twinkleSpeed * p.twinkleDir;
        if (p.opacity > 0.8 || p.opacity < 0.1) {
          p.twinkleDir *= -1;
        }

        // Draw star with glow
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(212, 175, 55, 0.5)";
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`; // Gold particles
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for performance

        // Move
        p.y -= p.speed;
        if (p.y < -5) {
          p.y = height + 5;
          p.x = Math.random() * width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
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
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  );
};

export default StarBackground;