import { useState } from "react";
import { motion } from "framer-motion";
import { getBalloonMessage } from "@/lib/utils";

interface BalloonProps {
  color: string;
  delay: number;
}

export default function Balloon({ color, delay }: BalloonProps) {
  const [isPopped, setIsPopped] = useState(false);
  const [message, setMessage] = useState("");
  
  const popBalloon = () => {
    if (isPopped) return;
    
    setIsPopped(true);
    setMessage(getBalloonMessage());
    
    // Reset after animation
    setTimeout(() => {
      setIsPopped(false);
      setMessage("");
    }, 2000);
  };
  
  return (
    <div className="relative cursor-pointer transform transition hover:scale-110" onClick={popBalloon}>
      <motion.div
        className={`text-4xl ${color}`}
        initial={{ opacity: 1 }}
        animate={{
          y: [0, -15, 0],
          opacity: isPopped ? 0 : 1,
          scale: isPopped ? 1.5 : 1
        }}
        transition={{
          y: {
            duration: 4,
            delay: delay,
            repeat: Infinity,
            repeatType: "loop"
          },
          opacity: { duration: 0.3 },
          scale: { duration: 0.3 }
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2A9,9 0 0,1 21,11C21,14.5 18.5,19 12,22C5.5,19 3,14.5 3,11A9,9 0 0,1 12,2M12,4A7,7 0 0,0 5,11C5,13.5 7,17.2 12,19.7C17,17.2 19,13.5 19,11A7,7 0 0,0 12,4M12,9A2,2 0 0,1 14,11A2,2 0 0,1 12,13A2,2 0 0,1 10,11A2,2 0 0,1 12,9Z" />
        </svg>
      </motion.div>
      
      {isPopped && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          <span className="text-sm font-bold text-white bg-pink/70 px-3 py-1 rounded-full whitespace-nowrap">
            {message}
          </span>
        </motion.div>
      )}
    </div>
  );
}
