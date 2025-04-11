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
  const [cakeCut, setCakeCut] = useState(false);
  const [showBirthdayWish, setShowBirthdayWish] = useState(false);

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

  const handleCakeCut = () => {
    if (candlesLit || cakeCut) return;
    
    setCakeCut(true);
    setTimeout(() => {
      setShowBirthdayWish(true);
    }, 800);
  };

  return (
    <div className="max-w-md mx-auto mb-16">
      <motion.div 
        className="relative cursor-pointer"
        whileHover={{ scale: 1.02 }}
        onClick={candlesLit ? handleCakeBlow : (!cakeCut ? handleCakeCut : undefined)}
      >
        {/* Cake container with glossy look */}
        <div className="relative w-full h-80 bg-gradient-to-b from-pink-50/20 to-pink-100/50 rounded-xl overflow-hidden shadow-2xl border border-pink-200/30 backdrop-blur-sm">
          {/* Cake plate */}
          <div className="absolute bottom-0 w-full h-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-b-xl border-t border-gray-300"></div>
          
          {/* Main cake body */}
          <div className="absolute bottom-8 w-full px-2">
            {/* Bottom layer */}
            <div className="h-20 bg-gradient-to-r from-amber-600 to-amber-500 rounded-b-lg shadow-inner border-b-4 border-amber-700"></div>
            
            {/* Middle layer */}
            <div className="h-18 bg-gradient-to-r from-amber-400 to-amber-300 shadow-inner relative">
              {/* Layer frosting */}
              <div className="absolute -top-2 w-full h-3 bg-gradient-to-r from-white to-pink-100 rounded-t-sm"></div>
            </div>
            
            {/* Top layer */}
            <div className="h-16 bg-gradient-to-r from-amber-300 to-amber-200 rounded-t-lg shadow-inner relative">
              {/* Layer frosting */}
              <div className="absolute -top-2 w-full h-3 bg-gradient-to-r from-white to-pink-100 rounded-t-sm"></div>
            </div>
          </div>
          
          {/* Top frosting */}
          <div className="absolute bottom-[62px] w-full px-2">
            <div className="h-12 bg-gradient-to-r from-pink-200 to-pink-300 rounded-t-xl shadow-inner"></div>
            
            {/* Frosting swirls and decorations */}
            <div className="absolute -top-6 w-full">
              <div className="flex justify-around">
                <div className="w-8 h-8 bg-pink-200 rounded-full transform -translate-y-1"></div>
                <div className="w-10 h-10 bg-pink-300 rounded-full transform -translate-y-2"></div>
                <div className="w-8 h-8 bg-pink-200 rounded-full transform -translate-y-1"></div>
                <div className="w-10 h-10 bg-pink-300 rounded-full transform -translate-y-2"></div>
              </div>
            </div>
            
            {/* Cherry and sprinkle decorations */}
            <div className="absolute -top-2 w-full">
              <div className="flex justify-between px-8">
                <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-red-600 shadow-md"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-red-600 shadow-md"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full shadow-sm"></div>
                <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-red-600 shadow-md"></div>
              </div>
            </div>
            
            {/* Sprinkles */}
            <div className="absolute top-2 w-full">
              <div className="flex justify-around">
                <div className="w-2 h-4 bg-purple-400 rounded-full transform rotate-45"></div>
                <div className="w-2 h-3 bg-yellow-400 rounded-full transform -rotate-12"></div>
                <div className="w-2 h-4 bg-blue-400 rounded-full transform rotate-30"></div>
                <div className="w-2 h-3 bg-green-400 rounded-full transform rotate-65"></div>
                <div className="w-2 h-4 bg-pink-500 rounded-full transform -rotate-30"></div>
              </div>
            </div>
          </div>
          
          {/* Happy Birthday text on cake */}
          <div className="absolute bottom-[38px] w-full text-center">
            <span className="text-sm font-bold text-pink-800 px-3 py-1 bg-pink-100/70 rounded-md shadow-sm">Happy Birthday!</span>
          </div>
          
          {/* Cake cut animation */}
          {cakeCut && (
            <>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-[54px] bg-gradient-to-b from-amber-200 via-amber-300 to-amber-600 rounded-b-lg">
                {/* Cut line details */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-amber-700/30"></div>
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-amber-700/30"></div>
                
                {/* Cake texture lines */}
                <div className="absolute top-[18px] left-0 right-0 h-[1px] bg-amber-700/20"></div>
                <div className="absolute top-[36px] left-0 right-0 h-[1px] bg-amber-700/20"></div>
              </div>
              
              {/* Cut slice */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 translate-y-0"
                initial={{ y: 0 }}
                animate={{ y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="w-16 h-16 overflow-hidden">
                  <div className="w-0 h-0 
                    border-l-[40px] border-l-transparent
                    border-t-[60px] border-t-amber-400
                    border-r-[40px] border-r-transparent
                    relative">
                    {/* Frosting on top of slice */}
                    <div className="absolute -top-[60px] left-[-40px] right-[-40px] h-[12px] bg-pink-300"></div>
                    
                    {/* Layer lines on slice */}
                    <div className="absolute -top-[40px] left-[-38px] right-[-38px] h-[1px] bg-amber-600/40"></div>
                    <div className="absolute -top-[20px] left-[-20px] right-[-20px] h-[1px] bg-amber-600/40"></div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
          
          {/* Candles */}
          <div className="absolute top-4 left-0 w-full flex justify-center space-x-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="relative">
                <div className="w-3 h-16 bg-gradient-to-b from-blue-400 to-blue-500 rounded-sm shadow-md"></div>
                
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
                    <div className="w-4 h-6 bg-gradient-to-t from-orange-500 to-yellow-200 rounded-full opacity-90 shadow-lg shadow-orange-500/50"></div>
                    <div className="w-2 h-2 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 opacity-80"></div>
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
                    className="text-5xl"
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
        ) : !cakeCut ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-4"
          >
            <p className="text-white text-lg font-semibold">Candles blown out!</p>
            
            {showMessage && (
              <>
                <motion.p 
                  className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mt-2 mb-3"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.8, times: [0, 0.5, 1] }}
                >
                  Happy Birthday!!! 🎉
                </motion.p>
                
                <motion.p
                  className="text-lg text-white font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Click the cake again to cut a slice!
                </motion.p>
              </>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8"
          >
            {showBirthdayWish && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-2xl font-bold text-white mb-2">Happy Birthday to the love of my life! ❤️</p>
                <p className="text-lg text-pink-100">May every moment of your special day be filled with joy and love.</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}