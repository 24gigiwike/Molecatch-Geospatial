import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { fadeUpVariant, headingSlideUpVariant } from '../lib/animations';

export default function BottomSection() {
  const headingWords = ["Intelligence", "Powering", "Decisions"];

  return (
    <footer 
      className="relative z-10 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-12 w-full select-none"
      id="bottom-section"
    >
      {/* Row A: tagline + CTA */}
      <div 
        className="flex items-center justify-between gap-4 w-full" 
        id="bottom-row-a"
      >
        {/* Left tagline */}
        <motion.p
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          custom={5} // custom=5
          className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black leading-normal max-w-[130px] sm:max-w-[160px] md:max-w-xs"
          id="tagline-text"
        >
          Precision Through <br /> Spatial Intelligence
        </motion.p>

        {/* Right CTA */}
        <motion.a
          href="#contact"
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          custom={6} // custom=6
          className="flex items-center gap-1 text-base sm:text-xl md:text-2xl font-semibold tracking-widest uppercase text-[var(--color-accent)] hover:opacity-80 transition-opacity whitespace-nowrap"
          id="cta-link"
        >
          <span>Talk to an Expert</span>
          <ArrowUpRight 
            className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] stroke-[2.5]" 
            id="cta-arrow-icon"
          />
        </motion.a>
      </div>

      {/* Row B: description + main heading */}
      <div 
        className="flex items-end justify-between gap-3 sm:gap-4 w-full" 
        id="bottom-row-b"
      >
        {/* Left: Description block */}
        <motion.div
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          custom={7} // custom=7
          className="w-[120px] sm:w-[180px] md:w-[280px] shrink-0"
          id="bottom-description-block"
        >
          <p className="text-[9px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-left md:text-right text-black leading-relaxed">
            We translate satellite imagery, GIS, remote sensing, and drone mapping into high-precision spatial analytics for data-driven decision making.
          </p>
        </motion.div>

        {/* Right: Main Heading */}
        <h1 
          className="flex flex-col items-end text-right uppercase text-black font-semibold"
          style={{ fontSize: 'clamp(2rem, 9vw, 9rem)', lineHeight: 0.88 }}
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
