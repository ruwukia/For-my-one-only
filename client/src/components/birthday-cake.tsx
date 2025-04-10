import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BirthdayCakeProps {
  onBlow: () => void;
}

export default function BirthdayCake({ onBlow }: BirthdayCakeProps) {
  const [candlesLit, setCandlesLit] = useState(true);
  const [blowAnimation, setBlowAnimation] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleCakeBlow = () => {
    if (!candlesLit) return;
    
    setBlowAnimation(true);
    
    setTimeout(() => {
      setCandlesLit(false);
      setShowCat(true);
      
      setTimeout(() => {
        setShowMessage(true);
        onBlow();
      }, 1000);
    }, 500);
  };

  return (
    <div className="max-w-md mx-auto mb-16">
      <motion.div 
        className="relative cursor-pointer"
        whileHover={{ scale: 1.02 }}
        onClick={handleCakeBlow}
      >
        {/* Cake base */}
        <div className="relative w-full h-60 bg-gradient-to-b from-pink-200 to-pink-300 rounded-lg overflow-hidden shadow-xl">
          {/* Cake layers */}
          <div className="absolute bottom-0 w-full">
            <div className="h-10 bg-pink-500 rounded-t-lg"></div>
            <div className="h-16 bg-pink-400"></div>
            <div className="h-14 bg-pink-300"></div>
            <div className="h-12 bg-pink-200"></div>
          </div>
          
          {/* Cake decorations */}
          <div className="absolute top-1/2 left-0 w-full flex justify-around">
            <motion.div 
              className="w-6 h-6 rounded-full bg-violet-300"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <motion.div 
              className="w-4 h-4 rounded-full bg-teal-300"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            ></motion.div>
            <motion.div 
              className="w-5 h-5 rounded-full bg-purple-300"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
            ></motion.div>
          </div>
          
          {/* Candles */}
          <div className="absolute top-0 left-0 w-full flex justify-center space-x-4 pt-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="relative">
                <div className="w-2 h-16 bg-gradient-to-b from-blue-300 to-pink-300 rounded-full"></div>
                
                {/* Candle flame */}
                {candlesLit && (
                  <motion.div 
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotateZ: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 0.8, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  >
                    <div className="w-3 h-5 bg-gradient-to-t from-yellow-500 to-yellow-200 rounded-full opacity-90"></div>
                    <div className="w-2 h-2 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 opacity-60"></div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          
          {/* Blow animation */}
          <AnimatePresence>
            {blowAnimation && (
              <motion.div 
                className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center h-full">
                  <motion.div
                    className="text-4xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 1 }}
                    exit={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    💨
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Cat animation */}
          <AnimatePresence>
            {showCat && (
              <motion.div 
                className="absolute top-1/4 right-1/4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-5xl">🐱</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Instructions */}
        {candlesLit ? (
          <motion.p 
            className="text-center mt-4 text-white text-lg font-semibold"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click the cake to blow out the candles!
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-4"
          >
            <p className="text-white text-lg font-semibold">Candles blown out!</p>
            
            {showMessage && (
              <motion.p 
                className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mt-2"
                initial={{ scale: 0.8 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.8, times: [0, 0.5, 1] }}
              >
                Happy Birthday!!! 🎉
              </motion.p>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}