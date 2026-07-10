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
      className="flex flex-col items-start select-none"
      id="app-logo"
    >
      <span className="text-xl sm:text-2xl font-bold tracking-widest text-black leading-none" id="logo-main-text">
        MOLECATCH
      </span>
      <span className="text-[7px] sm:text-[8px] font-semibold tracking-widest text-[var(--color-accent)] leading-none mt-1 sm:mt-1.5" id="logo-sub-text">
        GEOSPATIAL INTELLIGENCE SERVICES
      </span>
    </motion.div>
  );
}
