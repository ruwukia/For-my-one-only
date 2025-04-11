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

// Function to generate random heartfelt quotes
export const getRandomQuote = (): string => {
  const quotes = [
    "Each moment with you is beautiful and precious, a memory to cherish forever.",
    "Our story is filled with adventure, growth, and endless love.",
    "You are my hero. I love you more than words can express.",
    "In this vast universe, finding someone who understands your soul is the greatest treasure.",
    "Your love gives me strength and purpose every day.",
    "I would choose our love story over and over again, through every chapter of our lives.",
    "Your love has transformed me into the best version of myself.",
    "Every day with you feels like the greatest gift I could ever receive.",
    "You are the reason I believe in forever.",
    "Your smile is the highlight of my day, every single day."
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
    "Always & Forever!",
    "My everything!",
    "Two years strong!",
    "Cherish you!",
    "My happiness!",
    "Love grows deeper!",
    "My sunshine!",
    "Soulmates!",
    "My world!"
  ];
  
  return messages[Math.floor(Math.random() * messages.length)];
};
