import { motion } from "framer-motion";
import { randomPosition } from "@/lib/utils";

export default function FloatingElements() {
  // Create array of elements with random positions
  const elements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    top: `${randomPosition(10, 90)}%`,
    left: `${randomPosition(5, 95)}%`,
    size: `${randomPosition(3, 6)}rem`,
    delay: randomPosition(0, 4)
  }));

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-60"
          style={{
            top: element.top,
            left: element.left,
            width: element.size,
            height: element.size,
            background: `radial-gradient(circle, rgba(225,69,148,0.6) 0%, rgba(112,69,175,0.4) 100%)`
          }}
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
