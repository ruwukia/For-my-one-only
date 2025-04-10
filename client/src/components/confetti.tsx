import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { randomPosition, randomSize } from "@/lib/utils";

interface ConfettiPiece {
  id: number;
  x: string;
  size: number;
  color: string;
  rotation: number;
  delay: number;
}

interface ConfettiProps {
  show: boolean;
}

export default function Confetti({ show }: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  
  useEffect(() => {
    if (!show) return;
    
    // Create confetti pieces
    const newPieces = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: `${randomPosition(0, 100)}%`,
      size: randomSize(5, 12),
      color: getRandomColor(),
      rotation: Math.random() * 360,
      delay: Math.random() * 2
    }));
    
    setPieces(newPieces);
    
    // Clean up after animation
    const timer = setTimeout(() => {
      setPieces([]);
    }, 6000);
    
    return () => clearTimeout(timer);
  }, [show]);
  
  function getRandomColor(): string {
    const colors = [
      "bg-pink-500", "bg-violet-500", "bg-blue-500", 
      "bg-purple-500", "bg-yellow-400", "bg-green-400"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {pieces.map((piece) => (
            <motion.div
              key={piece.id}
              className={`absolute ${piece.color}`}
              style={{
                left: piece.x,
                width: `${piece.size}px`,
                height: `${piece.size * 0.4}px`,
                top: "-20px",
                rotate: `${piece.rotation}deg`
              }}
              initial={{ y: "-10vh", opacity: 0 }}
              animate={{
                y: "120vh",
                opacity: [0, 1, 1, 0],
                rotate: piece.rotation + 360,
                x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50]
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: Math.random() * 2 + 3,
                delay: piece.delay,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}