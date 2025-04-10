import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { randomPosition, randomSize } from "@/lib/utils";

interface CherryBlossom {
  id: number;
  left: string;
  size: string;
  duration: number;
  delay: number;
}

export default function CherryBlossoms() {
  const [blossoms, setBlossoms] = useState<CherryBlossom[]>([]);
  
  useEffect(() => {
    // Create initial set of blossoms
    const initialBlossoms = Array.from({ length: 30 }, (_, i) => createBlossom(i));
    setBlossoms(initialBlossoms);
    
    // Set up interval to add new blossoms periodically
    const interval = setInterval(() => {
      setBlossoms(prev => {
        const newIndex = prev.length;
        return [...prev.slice(-28), createBlossom(newIndex)];
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  function createBlossom(id: number): CherryBlossom {
    return {
      id,
      left: `${randomPosition(0, 100)}%`,
      size: `${randomSize(5, 15)}px`,
      duration: randomPosition(5, 10),
      delay: randomPosition(0, 5)
    };
  }
  
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {blossoms.map((blossom) => (
        <motion.div
          key={blossom.id}
          className="rounded-full absolute"
          style={{
            left: blossom.left,
            width: blossom.size,
            height: blossom.size,
            backgroundColor: `rgba(255, ${randomPosition(150, 200)}, ${randomPosition(180, 230)}, ${randomPosition(0.6, 0.9)})`
          }}
          initial={{ top: "-5vh", opacity: 0 }}
          animate={{
            top: "100vh",
            opacity: [0, 1, 1, 0],
            rotate: 360,
            x: [0, 15, -15, 0]
          }}
          transition={{
            duration: blossom.duration,
            delay: blossom.delay,
            ease: "easeInOut",
            times: [0, 0.1, 0.9, 1]
          }}
        />
      ))}
    </div>
  );
}
