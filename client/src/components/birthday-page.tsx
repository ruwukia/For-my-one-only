import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useUser } from "@/contexts/user-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Balloon from "./balloon";
import BirthdayCake from "./birthday-cake";
import Confetti from "./confetti";
import CherryBlossoms from "./cherry-blossoms";

interface BirthdayPageProps {
  onRestart: () => void;
}

export default function BirthdayPage({ onRestart }: BirthdayPageProps) {
  const { alias } = useUser();
  const [showConfetti, setShowConfetti] = useState(false);
  const [cakeBlown, setCakeBlown] = useState(false);
  const [showSakura, setShowSakura] = useState(false);
  
  const balloonColors = [
    "text-pink",
    "text-violet",
    "text-light-pink",
    "text-blue-400",
    "text-pink",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };
  
  const handleCakeBlown = () => {
    setCakeBlown(true);
    setShowConfetti(true);
  };
  
  // Add sakura effect after balloons appear
  useEffect(() => {
    if (cakeBlown) {
      const timer = setTimeout(() => {
        setShowSakura(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [cakeBlown]);

  return (
    <section className="min-h-screen flex flex-col items-center bg-anime-gradient relative overflow-hidden px-4 pt-12 pb-20">
      {/* Celebration effects */}
      <Confetti show={showConfetti} />
      {showSakura && <CherryBlossoms density="high" showFullBlossom={true} />}
      
      <div className="z-10 text-center max-w-4xl">
        <motion.h1 
          className="text-4xl md:text-6xl font-quicksand font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Happy Birthday, <span className="text-light-pink">{alias}</span>!
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          April 14th - Your Special Day ✨
        </motion.p>
        
        {/* Birthday cake with interactive candles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <BirthdayCake onBlow={handleCakeBlown} />
        </motion.div>
        
        {/* Birthday message in scroll style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <Card className="bg-cover bg-center relative overflow-hidden border-none shadow-2xl" 
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/rice-paper.png')" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-violet-50/90 to-violet-100/90 backdrop-blur-sm"></div>
            
            {/* Scroll top decoration */}
            <div className="absolute top-0 left-0 w-full h-8 bg-violet-800/90 rounded-t-lg flex items-center justify-center">
              <div className="w-full h-2 bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300 mx-6 rounded-full"></div>
            </div>
            
            {/* Cherry blossom decorations */}
            <div className="absolute top-2 left-2">
              <span className="text-2xl">🌸</span>
            </div>
            <div className="absolute top-2 right-2">
              <span className="text-2xl">🌸</span>
            </div>
            
            <CardContent className="p-6 md:p-8 relative z-10 pt-14">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="w-full h-64 bg-gradient-to-br from-violet-300/60 via-violet-500/60 to-pink-400/60 flex items-center justify-center backdrop-blur-sm">
                  <motion.span 
                    className="text-6xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    🎉
                  </motion.span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-violet-800/40 to-transparent flex items-end">
                  <p className="p-4 text-xl font-quicksand text-white">🎉 Celebrating My Byakuya! 🎉</p>
                </div>
              </div>
              
              <div className="space-y-6 text-left text-violet-900">
                <p className="font-medium">Dearest {alias}, my noble Byakuya,</p>
                <p>Not only is it our anniversary, but today we celebrate the day you came into this world! How lucky am I to have these special days so close together?</p>
                <p>You face each day with such courage and kindness. Your passion for the things you love and our relationship inspires me to be a better person. I cherish every moment we spend together.</p>
                <p>As you blow out your candles, know that I'm wishing for countless more years of adventures together. I promise to be by your side, loving you, supporting you, and treasuring our journey together.</p>
                <p className="text-violet-700 font-bold text-center text-xl italic">"You are the best thing that's ever happened to me. I love you more than words can express."</p>
                <p className="text-right font-medium pt-4 pb-6">With all my heart,<br/>Your Shin0ah ❤️</p>
              </div>
            </CardContent>
            
            {/* Scroll bottom decoration */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-violet-800/90 rounded-b-lg flex items-center justify-center">
              <div className="w-full h-2 bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300 mx-6 rounded-full"></div>
            </div>
          </Card>
        </motion.div>
        
        {/* Interactive balloons */}
        <motion.div
          className="text-center mb-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p className="text-lg mb-4 bg-violet-800/30 backdrop-blur-sm px-4 py-2 rounded-full inline-block">Click the balloons for a surprise!</p>
          <div className="flex justify-center gap-8 flex-wrap py-6 px-4">
            {balloonColors.map((color, index) => (
              <div key={index} className="mx-2 my-2">
                <Balloon color={color} delay={index * 0.5} />
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Final thoughts in anime-inspired cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <Card className="relative bg-cover bg-center shadow-xl border-none overflow-hidden" 
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/rice-paper-light.png')" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-violet-300/70 to-pink-300/70 backdrop-blur-sm"></div>
            
            {/* Decorative corners - anime scroll style */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-violet-700/60"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-violet-700/60"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-violet-700/60"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-violet-700/60"></div>
            
            <CardContent className="p-6 relative z-10">
              <h2 className="text-2xl font-quicksand font-bold mb-4 text-violet-800 text-center border-b-2 border-pink-300 pb-2">Our Beautiful Journey Together</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <motion.div variants={itemVariants} className="relative">
                  <div className="w-full h-48 rounded-lg bg-gradient-to-br from-violet-200/60 to-violet-500/60 mb-4 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <svg className="w-20 h-20 text-pink-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                      </svg>
                    </motion.div>
                    
                    {/* Small sakura decoration */}
                    <span className="absolute top-2 left-2 text-sm">🌸</span>
                  </div>
                  <p className="italic text-violet-800 text-center px-4 py-2">"Each moment with you is a treasure I hold close to my heart. I'll cherish our memories for a lifetime."</p>
                </motion.div>
                
                <motion.div variants={itemVariants} className="relative">
                  <div className="w-full h-48 rounded-lg bg-gradient-to-br from-pink-200/60 to-pink-400/60 mb-4 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                    <motion.div
                      animate={{
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                      </svg>
                    </motion.div>
                    
                    {/* Small sakura decoration */}
                    <span className="absolute top-2 right-2 text-sm">🌸</span>
                  </div>
                  <p className="italic text-violet-800 text-center px-4 py-2">"Your love has transformed my life in ways I never thought possible. You are the best thing that's ever happened to me, my Byakuya."</p>
                </motion.div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-xl font-bold text-violet-700 mb-4">Here's to many more years together!</p>
                <Button
                  onClick={onRestart}
                  className="px-8 py-3 bg-gradient-to-r from-violet to-pink rounded-full text-lg font-bold hover:opacity-90 transition transform hover:scale-105"
                >
                  Restart Journey
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      {/* Floating decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/5 w-20 h-20 z-10"
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="w-full h-full rounded-full bg-pink-300/50 backdrop-blur-md flex items-center justify-center">
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/5 w-24 h-24 z-10"
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 5,
            delay: 1,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="w-full h-full rounded-full bg-violet-400/30 backdrop-blur-md flex items-center justify-center">
            <svg className="w-14 h-14 text-pink-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
            </svg>
          </div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-16 h-16 z-10"
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 7,
            delay: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="w-full h-full rounded-full bg-pink-400/40 backdrop-blur-md flex items-center justify-center">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
