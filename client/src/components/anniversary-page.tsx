import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useUser } from "@/contexts/user-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FloatingHearts from "./floating-hearts";

interface AnniversaryPageProps {
  onComplete: () => void;
}

export default function AnniversaryPage({ onComplete }: AnniversaryPageProps) {
  const { alias } = useUser();
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    // Start hearts animation after component mounts
    const timer = setTimeout(() => {
      setShowHearts(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

  return (
    <section className="min-h-screen flex flex-col items-center bg-anime-gradient relative overflow-hidden px-4 pt-12 pb-20">
      {showHearts && <FloatingHearts />}
      
      <div className="z-10 text-center max-w-4xl">
        <motion.h1 
          className="text-3xl md:text-5xl font-quicksand font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Happy 2-Year Anniversary, <span className="text-light-pink">{alias}</span>!
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          From your Shin0ah ❤️
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left column: Anniversary message */}
          <motion.div variants={itemVariants}>
            <Card className="bg-cover bg-center relative h-full overflow-hidden border-none shadow-2xl" 
                  style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/rice-paper.png')" }}>
              <div className="absolute inset-0 bg-gradient-to-b from-pink-50/90 to-pink-100/90 backdrop-blur-sm"></div>
              
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
              
              {/* Content with scroll styling */}
              <CardContent className="p-6 pt-12 relative z-10">
                <h2 className="text-2xl font-quicksand font-bold mb-4 text-violet-800 text-center border-b-2 border-pink-300 pb-2">
                  My Love Letter to You
                </h2>
                <div className="space-y-4 text-left text-violet-900 px-2">
                  <p className="font-medium">To my amazing boyfriend,</p>
                  <p>Two years ago, I couldn't have imagined how much my life would change when you came into it. You've filled my days with joy, laughter, and so much love. You've made me a better person, and for that, I am eternally grateful.</p>
                  <p>You've embraced my weeb side and even joined me in this wonderful world of anime. Watching you get excited about new episodes and discussing theories with you has been one of my greatest joys.</p>
                  <p>You've been my Levi when I needed strength, my Tanjiro when I needed kindness, and my Ichigo when I needed protection.</p>
                  <p>Thank you for being the best boyfriend I could ever wish for. As we celebrate both our anniversary and your birthday, I want you to know:</p>
                  <ul className="list-disc pl-6 space-y-1 marker:text-pink-500">
                    <li>Your smile brightens even my darkest days</li>
                    <li>Your kindness inspires me to be better</li>
                    <li>Your love makes me feel like the luckiest person alive</li>
                  </ul>
                  <p>Every moment with you feels like the best anime storyline - except it's real! I truly cherish every moment we spend together, and I'm so grateful to have you in my life. You are the main character in my heart. And I wouldn't trade this storyline for any other.</p>
                  <p className="text-right font-medium pt-4">Forever yours,<br/>Shin0ah ❤️</p>
                </div>
              </CardContent>
              
              {/* Scroll bottom decoration */}
              <div className="absolute bottom-0 left-0 w-full h-8 bg-violet-800/90 rounded-b-lg flex items-center justify-center">
                <div className="w-full h-2 bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300 mx-6 rounded-full"></div>
              </div>
            </Card>
          </motion.div>
          
          {/* Right column: Anime-style elements */}
          <motion.div variants={containerVariants} className="flex flex-col space-y-6">
            <motion.div variants={itemVariants}>
              <Card className="relative bg-cover bg-center shadow-xl overflow-hidden border-none"
                    style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/rice-paper-light.png')" }}>
                {/* Gradient background with anime feel */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/80 to-violet-800/80"></div>
                
                {/* Decorative corners - anime scroll style */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-pink-300/80"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-pink-300/80"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-pink-300/80"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-pink-300/80"></div>
                
                <CardContent className="p-4 relative z-10">
                  <div className="w-full h-64 rounded flex flex-col items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ 
                        scale: [0.8, 1, 0.8],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{ 
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "loop" 
                      }}
                    >
                      <svg className="w-32 h-32 text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </motion.div>
                    
                    {/* Decorative floating particles - like anime sparkles */}
                    <div className="absolute top-1/4 left-1/4">
                      <motion.div
                        animate={{ 
                          y: [0, -10, 0],
                          opacity: [0.4, 1, 0.4]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity
                        }}
                        className="text-lg"
                      >
                        ✨
                      </motion.div>
                    </div>
                    <div className="absolute bottom-1/4 right-1/4">
                      <motion.div
                        animate={{ 
                          y: [0, -10, 0],
                          opacity: [0.4, 1, 0.4]
                        }}
                        transition={{
                          duration: 2.5,
                          delay: 0.5,
                          repeat: Infinity
                        }}
                        className="text-lg"
                      >
                        ✨
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="relative bg-cover bg-center shadow-xl border-none"
                    style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/rice-paper-light.png')" }}>
                <div className="absolute inset-0 bg-gradient-to-b from-violet-100/90 to-pink-100/90 backdrop-blur-sm"></div>
                
                {/* Anime-style quote with decorative elements */}
                <CardContent className="p-6 relative z-10">
                  <div className="relative">
                    {/* Decorative quote marks */}
                    <span className="absolute -top-3 -left-1 text-3xl text-pink-400">"</span>
                    <p className="italic text-violet-800 font-medium text-center px-4 py-2">
                      In this vast universe, finding someone who understands your soul is the greatest adventure. Thank you for being the best boyfriend, for understanding me, and for making every day feel like the best episode of our own anime series.
                    </p>
                    <span className="absolute -bottom-4 -right-1 text-3xl text-pink-400">"</span>
                    
                    {/* Small cherry blossom decorations */}
                    <div className="absolute -bottom-2 left-1/3 text-sm">🌸</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Button
            onClick={onComplete}
            className="px-8 py-3 bg-gradient-to-r from-violet to-pink rounded-full text-lg font-bold hover:opacity-90 transition transform hover:scale-105 animate-pulse-slow"
          >
            Continue to Birthday Surprise →
          </Button>
        </motion.div>
      </div>
      
      {/* Floating icons */}
      <div className="absolute top-1/4 left-10 w-16 h-16 opacity-70">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <svg className="w-full h-full text-pink" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </motion.div>
      </div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 opacity-70">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 6,
            delay: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <svg className="w-full h-full text-light-pink" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </motion.div>
      </div>
      <div className="absolute top-3/4 left-1/3 w-16 h-16 opacity-70">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 6,
            delay: 4,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <svg className="w-full h-full text-violet" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
