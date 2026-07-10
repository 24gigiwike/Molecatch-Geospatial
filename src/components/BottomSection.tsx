import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { fadeUpVariant, headingSlideUpVariant } from '../lib/animations';

export default function BottomSection() {
  const headingWords = ["Intelligence", "Powering", "Decisions"];

  return (
    <footer 
      className="relative z-10 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex-1 md:flex-initial flex flex-col justify-center md:justify-end w-full select-none"
      id="bottom-section"
    >
      <div 
        className="flex flex-col-reverse md:flex-row items-center md:items-end justify-center md:justify-between gap-8 md:gap-4 w-full" 
        id="bottom-row"
      >
        {/* Left CTA: Talk to an Expert */}
        <motion.a
          href="#contact"
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          custom={5} // custom=5
          className="flex items-center gap-1 text-base sm:text-xl md:text-2xl font-semibold tracking-widest uppercase text-[var(--color-accent)] hover:opacity-80 transition-opacity whitespace-nowrap md:mb-3.5 text-center justify-center"
          id="cta-link"
        >
          <span>Talk to an Expert</span>
          <ArrowUpRight 
            className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] stroke-[2.5]" 
            id="cta-arrow-icon"
          />
        </motion.a>

        {/* Right: Main Heading with responsive typography */}
        <h1 
          className="flex flex-col items-center md:items-end text-center md:text-right uppercase text-black font-semibold w-full max-w-[90%] md:max-w-none mx-auto md:mx-0 responsive-headline"
          id="main-heading"
        >
          {headingWords.map((word, idx) => (
            <span 
              key={word} 
              className="block overflow-hidden h-fit" 
              id={`heading-word-wrapper-${word.toLowerCase()}`}
            >
              <motion.span
                variants={headingSlideUpVariant}
                initial="initial"
                animate="animate"
                custom={idx}
                className="block"
                id={`heading-word-${word.toLowerCase()}`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>
    </footer>
  );
}
