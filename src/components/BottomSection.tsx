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
        {/* Left CTA: Talk to an Expert & Supporting Paragraph (Mobile only) */}
        <div className="flex flex-col items-center md:items-start gap-2" id="cta-and-supporting-container">
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

          {/* Mobile-only supporting paragraph */}
          <motion.p
            variants={fadeUpVariant}
            initial="initial"
            animate="animate"
            custom={6}
            className="md:hidden text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-neutral-700 leading-relaxed max-w-[340px] text-center px-4"
            id="mobile-supporting-paragraph"
          >
            From infrastructure planning and environmental monitoring to strategic development and national-scale initiatives, MoleCatch delivers geospatial intelligence that helps organizations make confident decisions wherever they operate. Our work is driven by precision, trusted by professionals, and designed to create impact far beyond local boundaries.
          </motion.p>
        </div>

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
