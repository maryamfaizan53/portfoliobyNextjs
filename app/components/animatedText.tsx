import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
}

const AdvancedAnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const textArray = text.split(""); // Split the text into individual letters

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.01, // Add stagger effect
            ease: "easeOut",
            duration: 1, // Animation duration
          },
        },
      }}
      className="flex justify-center items-center animate-infinite" // Center text and apply infinite animation
    >
      {textArray.map((letter: string, index: number) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AdvancedAnimatedText;
