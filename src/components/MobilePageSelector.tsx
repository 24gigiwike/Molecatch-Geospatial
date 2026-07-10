import { motion } from 'motion/react';
import { PageType } from '../types';

interface MobilePageSelectorProps {
  currentPage: PageType;
  onSelectPage: (page: PageType) => void;
}

export default function MobilePageSelector({ currentPage, onSelectPage }: MobilePageSelectorProps) {
  const pages: { id: PageType; label: string }[] = [
    { id: 'mission', label: 'Mission' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'contact', label: 'Contact' },
  ];

  // We show other pages (not current)
  const otherPages = pages.filter(p => p.id !== currentPage);

  return (
    <div 
      className="md:hidden flex flex-wrap gap-3 px-5 sm:px-8 mt-4 mb-2 justify-center select-none w-full"
      id="mobile-page-selector-row"
    >
      {otherPages.map((page) => (
        <motion.button
          key={page.id}
          onClick={() => {
            onSelectPage(page.id);
            window.location.hash = `#${page.id}`;
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="h-11 px-5 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] bg-transparent flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase hover:bg-[var(--color-accent)]/5 active:bg-[var(--color-accent)]/10 transition-colors focus:outline-none cursor-pointer"
          id={`mobile-select-${page.id}`}
        >
          <span>←</span>
          <span>{page.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
