import { useState } from "react";
import { motion } from "framer-motion";
import { useUser } from "@/contexts/user-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import FloatingElements from "./floating-elements";

interface LandingPageProps {
  onComplete: () => void;
}

export default function LandingPage({ onComplete }: LandingPageProps) {
  const { setName } = useUser();
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (inputName.trim() === "") {
      setError(true);
      return;
    }
    
    setName(inputName);
    onComplete();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-anime-gradient relative overflow-hidden px-4">
      <FloatingElements />
      
      <div className="z-10 text-center max-w-2xl">
        <motion.h1 
          className="text-4xl md:text-6xl font-quicksand font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Welcome!
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Something special awaits you...
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Card className="bg-black/30 backdrop-blur-md shadow-2xl border-violet">
            <CardContent className="p-6 md:p-8 mt-6">
              <label htmlFor="name" className="block text-lg mb-2 text-white">
                Enter your name:
              </label>
              
              <Input
                id="name"
                type="text"
                value={inputName}
                onChange={(e) => {
                  setInputName(e.target.value);
                  if (error) setError(false);
                }}
                onKeyPress={handleKeyPress}
                placeholder="Your name"
                className="w-full p-3 rounded bg-white/10 border-violet text-white focus:border-pink"
              />
              
              {error && (
                <p className="text-pink mt-2">Please enter your name</p>
              )}
              
              <Button
                onClick={handleSubmit}
                className="mt-6 px-8 py-3 bg-gradient-to-r from-violet to-pink rounded-full text-lg font-bold hover:opacity-90 transition transform hover:scale-105 w-full md:w-auto"
              >
                Continue
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
