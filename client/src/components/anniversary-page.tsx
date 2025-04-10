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
            <Card className="bg-black/30 backdrop-blur-md shadow-xl h-full border-violet">
              <CardContent className="p-6">
                <h2 className="text-2xl font-quicksand font-bold mb-4 text-light-pink">Two Years of Us</h2>
                <div className="space-y-4 text-left">
                  <p>My dearest {alias},</p>
                  <p>Two years ago, our story began, and what a beautiful journey it has been. Like characters in our favorite anime, we've faced challenges, shared laughter, and grown together.</p>
                  <p>Your love has been my strength, just as Mikasa's devotion to Eren. Your wisdom reminds me of the best qualities we see in our anime heroes - honor, loyalty, and unconditional love.</p>
                  <p>You transformed me into a fellow weeb, and I couldn't be happier to share this world with you. From Attack on Titan to Demon Slayer, we've explored countless worlds together.</p>
                  <p className="text-light-pink font-bold">I cherish every moment we spend together, and I'm so grateful to have you in my life.</p>
                  <p>Forever yours,<br/>Shin0ah</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Right column: Image and quote */}
          <motion.div variants={containerVariants} className="flex flex-col space-y-6">
            <motion.div variants={itemVariants}>
              <Card className="bg-black/30 backdrop-blur-md shadow-xl overflow-hidden border-violet">
                <CardContent className="p-4">
                  <div className="w-full h-64 rounded bg-gradient-to-br from-dark-blue to-violet flex items-center justify-center">
                    <svg className="w-32 h-32 text-soft-pink" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="bg-black/30 backdrop-blur-md shadow-xl border-violet">
                <CardContent className="p-6">
                  <p className="italic text-soft-pink">"In this vast universe, finding someone who understands your soul is the greatest adventure. Thank you for being the best boyfriend, for understanding me, and for making every day feel like the best episode of our own anime series."</p>
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
