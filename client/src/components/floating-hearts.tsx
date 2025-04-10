import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { randomPosition, randomSize } from "@/lib/utils";

interface Heart {
  id: number;
  x: string;
  size: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  
  useEffect(() => {
    // Create new heart every 300ms
    const interval = setInterval(() => {
      const newHeart: Heart = {
        id: Date.now(),
        x: `${randomPosition(5, 95)}%`,
        size: randomSize(16, 28)
      };
      
      setHearts(prev => [...prev, newHeart]);
      
      // Cleanup old hearts to prevent memory issues
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, 4000);
    }, 300);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute"
            style={{
              left: heart.x,
              bottom: "0",
              fontSize: `${heart.size}px`,
              color: `rgba(${randomPosition(225, 255)}, ${randomPosition(100, 150)}, ${randomPosition(150, 200)}, ${randomPosition(0.7, 1)})`
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [0, -100, -200],
              rotate: [0, 10, -10, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 4,
              ease: "easeOut",
              times: [0, 0.1, 0.9, 1]
            }}
          >
            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
