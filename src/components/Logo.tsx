import { motion } from 'motion/react';
import { fadeDownVariant } from '../lib/animations';

interface LogoProps {
  index?: number;
}

export default function Logo({ index = 0 }: LogoProps) {
  return (
    <motion.div
      variants={fadeDownVariant}
      initial="initial"
      animate="animate"
      custom={index}
      className="flex items-center"
      id="app-logo"
    >
      <div 
        className="w-8 h-8 rounded-full border-2 border-[var(--color-accent)] flex items-center justify-center" 
        id="logo-outer-ring"
      >
        <div 
          className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" 
          id="logo-inner-dot"
        ></div>
      </div>
    </motion.div>
  );
}
