import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useUser } from "@/contexts/user-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import CherryBlossoms from "./cherry-blossoms";

interface AliasPageProps {
  onComplete: () => void;
}

export default function AliasPage({ onComplete }: AliasPageProps) {
  const { name, setAlias } = useUser();
  const [inputAlias, setInputAlias] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset error when component mounts
    setError(false);
  }, []);

  const handleSubmit = () => {
    if (inputAlias.trim().toLowerCase() !== "shinxou") {
      setError(true);
      return;
    }
    
    setAlias(inputAlias);
    onComplete();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-anime-gradient relative overflow-hidden px-4">
      <CherryBlossoms />
      
      <div className="z-10 text-center max-w-2xl">
        <motion.h1 
          className="text-3xl md:text-5xl font-quicksand font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Hello, <span className="text-light-pink">{name}</span>!
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          One more step before your surprise...
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Card className="bg-black/30 backdrop-blur-md shadow-2xl border-violet">
            <CardContent className="p-6 md:p-8 mt-6">
              <label htmlFor="alias" className="block text-lg mb-2 text-white">
                Enter your alias:
              </label>
              
              <Input
                id="alias"
                type="text"
                value={inputAlias}
                onChange={(e) => {
                  setInputAlias(e.target.value);
                  if (error) setError(false);
                }}
                onKeyPress={handleKeyPress}
                placeholder="Your alias"
                className="w-full p-3 rounded bg-white/10 border-violet text-white focus:border-pink"
              />
              
              <p className="text-soft-pink mt-2 italic">(Hint: Think about what we like to match 👀)</p>
              
              {error && (
                <p className="text-pink mt-2">That's not quite right</p>
              )}
              
              <Button
                onClick={handleSubmit}
                className="mt-6 px-8 py-3 bg-gradient-to-r from-violet to-pink rounded-full text-lg font-bold hover:opacity-90 transition transform hover:scale-105 w-full md:w-auto"
              >
                Reveal Surprise
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
