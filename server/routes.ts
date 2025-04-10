import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for background music (if needed)
  app.get('/api/music', (req, res) => {
    res.json({
      url: 'https://cdn.pixabay.com/download/audio/2022/10/31/audio_5ff2abda4e.mp3?filename=lofi-study-112191.mp3',
      title: 'Anniversary & Birthday Background Music'
    });
  });

  // API route for celebration quotes
  app.get('/api/quotes', (req, res) => {
    const quotes = [
      "Like the cherry blossoms that fall each spring, each moment with you is beautiful and precious.",
      "Our story isn't an anime, but it's filled with just as much adventure, growth and love.",
      "You are my real-life anime hero. I love you more than words can express.",
      "In this vast universe, finding someone who understands your soul is the greatest adventure.",
      "Like Tanjiro's determination, your love gives me strength every day.",
      "If our life was an anime, I'd watch every season over and over again.",
      "Your love has been my strength, just as Mikasa's devotion to Eren."
    ];
    
    res.json({ quotes });
  });

  const httpServer = createServer(app);

  return httpServer;
}
