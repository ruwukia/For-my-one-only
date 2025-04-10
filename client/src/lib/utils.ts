import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Animation utility for staggered reveals
export function staggerDelay(index: number, baseDelay: number = 0.1) {
  return baseDelay * index;
}

// Utility to generate random position within constraints
export function randomPosition(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Create hearts with random sizes
export function randomSize(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Function to generate random anime quotes
export const getRandomQuote = (): string => {
  const quotes = [
    "Like the cherry blossoms that fall each spring, each moment with you is beautiful and precious.",
    "Our story isn't an anime, but it's filled with just as much adventure, growth and love.",
    "You are my real-life anime hero. I love you more than words can express.",
    "In this vast universe, finding someone who understands your soul is the greatest adventure.",
    "Like Tanjiro's determination, your love gives me strength every day.",
    "If our life was an anime, I'd watch every season over and over again.",
    "Your love has been my strength, just as Mikasa's devotion to Eren."
  ];
  
  return quotes[Math.floor(Math.random() * quotes.length)];
};

// Function to generate random balloon messages
export const getBalloonMessage = (): string => {
  const messages = [
    "You're amazing!",
    "I love you!",
    "Happy Birthday!",
    "My hero!",
    "Forever yours!",
    "You + Me!",
    "My ShinXou!",
    "Best boyfriend!",
    "Heart stolen!",
    "Anime lovers forever!"
  ];
  
  return messages[Math.floor(Math.random() * messages.length)];
};
