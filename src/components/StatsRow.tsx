import { motion } from 'motion/react';
import { StatItem } from '../types';
import { fadeUpVariant } from '../lib/animations';

interface StatsRowProps {
  stats: StatItem[];
}

export default function StatsRow({ stats }: StatsRowProps) {
  return (
    <section 
      className="relative z-10 flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0 select-none"
      id="stats-section"
    >
      <div 
        className="flex items-center gap-5 sm:gap-8 md:gap-10" 
        id="stats-row-container"
      >
        {stats.map((stat, idx) => {
          // Extract the digits only for the number
          const digits = stat.number.replace('+', '');
          // Prepare label with line break between the two words
          const labelWords = stat.label.split(' ');
          const formattedLabel = labelWords.join('\n');

          return (
            <motion.div
              key={stat.id}
              variants={fadeUpVariant}
              initial="initial"
              animate="animate"
              custom={2 + idx} // stat cards are custom=2,3,4
              className="flex flex-col items-end text-right"
              id={`stat-card-${stat.id}`}
            >
              {/* Stat Number */}
              <div 
                className="font-semibold text-black leading-none flex items-baseline justify-end"
                style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}
                id={`stat-number-${stat.id}`}
              >
                <span 
                  className="text-[var(--color-accent)] font-semibold mr-[0.05em]"
                  style={{ fontSize: '0.5em', lineHeight: 1 }}
                >
                  +
                </span>
                <span>{digits}</span>
              </div>

              {/* Stat Label with line break */}
              <p 
                className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black whitespace-pre-line leading-tight mt-1 sm:mt-2"
                id={`stat-label-${stat.id}`}
              >
                {formattedLabel}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
