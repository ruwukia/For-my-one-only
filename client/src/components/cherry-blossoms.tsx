import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { randomPosition, randomSize } from "@/lib/utils";

interface CherryBlossom {
  id: number;
  left: string;
  size: string;
  duration: number;
  delay: number;
  rotate: number;
  type: 'petal' | 'blossom';
}

// Props to allow controlling the density of blossoms
interface CherryBlossomsProps {
  density?: 'low' | 'medium' | 'high';
  showFullBlossom?: boolean;
}

export default function CherryBlossoms({ 
  density = 'medium',
  showFullBlossom = false 
}: CherryBlossomsProps = {}) {
  const [blossoms, setBlossoms] = useState<CherryBlossom[]>([]);
  
  useEffect(() => {
    // Set blossom count based on density
    const blossomCounts = {
      low: 15,
      medium: 30,
      high: 50
    };
    
    const count = blossomCounts[density];
    
    // Keep track of the latest ID to ensure uniqueness
    let nextId = 0;
    
    // Create initial set of blossoms
    const initialBlossoms = Array.from({ length: count }, () => {
      return createBlossom(nextId++);
    });
    setBlossoms(initialBlossoms);
    
    // Set up interval to add new blossoms periodically
    const interval = setInterval(() => {
      setBlossoms(prev => {
        // Keep array size under control by removing old blossoms
        return [...prev.slice(-(count - 2)), createBlossom(nextId++)];
      });
    }, density === 'high' ? 600 : density === 'medium' ? 1000 : 1500);
    
    return () => clearInterval(interval);
  }, [density]);
  
  function createBlossom(id: number): CherryBlossom {
    // Decide whether to create a full blossom or a petal
    const type = showFullBlossom && Math.random() > 0.7 ? 'blossom' : 'petal';
    
    return {
      id,
      left: `${randomPosition(0, 100)}%`,
      size: type === 'blossom' 
        ? `${randomSize(12, 22)}px` 
        : `${randomSize(5, 15)}px`,
      duration: randomPosition(5, 10),
      delay: randomPosition(0, 5),
      rotate: Math.floor(Math.random() * 360),
      type
    };
  }
  
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {blossoms.map((blossom) => (
        blossom.type === 'blossom' ? (
          // Full cherry blossom emoji
          <motion.div
            key={blossom.id}
            className="absolute text-xl"
            style={{
              left: blossom.left,
              fontSize: blossom.size,
            }}
            initial={{ top: "-5vh", opacity: 0, rotate: blossom.rotate }}
            animate={{
              top: "100vh",
              opacity: [0, 1, 1, 0.8, 0],
              rotate: blossom.rotate + 360,
              x: [0, 15, -15, 10, 0]
            }}
            transition={{
              duration: blossom.duration,
              delay: blossom.delay,
              ease: "easeInOut",
              times: [0, 0.1, 0.5, 0.9, 1]
            }}
          >
            🌸
          </motion.div>
        ) : (
          // Petal-like shape with pink color
          <motion.div
            key={blossom.id}
            className="absolute"
            style={{
              left: blossom.left,
              width: blossom.size,
              height: blossom.size,
              backgroundColor: `rgba(255, ${randomPosition(150, 200)}, ${randomPosition(180, 230)}, ${randomPosition(0.6, 0.9)})`,
              borderRadius: '50% 50% 0 50%', // Create petal shape
              transform: `rotate(${blossom.rotate}deg)`
            }}
            initial={{ top: "-5vh", opacity: 0 }}
            animate={{
              top: "100vh",
              opacity: [0, 1, 1, 0],
              rotate: blossom.rotate + 360,
              x: [0, 15, -15, 0]
            }}
            transition={{
              duration: blossom.duration,
              delay: blossom.delay,
              ease: "easeInOut",
              times: [0, 0.1, 0.9, 1]
            }}
          />
        )
      ))}
    </div>
  );
}
