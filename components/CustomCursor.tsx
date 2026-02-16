import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-mystic-gold rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovering ? 2.5 : 1,
        }}
      />
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-mystic-gold/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: -8, // Center relative to dot
          translateY: -8,
          scale: isHovering ? 1.5 : 1,
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: isHovering ? 1.5 : [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  );
};

export default CustomCursor;