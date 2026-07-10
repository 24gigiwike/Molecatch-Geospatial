import { motion } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { NavLink } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: '100dvh' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 bg-white flex flex-col px-5 sm:px-8 md:px-12 pt-5 md:pt-6 pb-12 overflow-hidden"
      id="mobile-menu-overlay"
    >
      {/* Top row */}
      <div className="flex items-center justify-between w-full" id="mobile-menu-header">
        {/* Same logo on left */}
        <Logo index={0} />

        {/* 36px round black close button on right */}
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors focus:outline-none"
          id="mobile-menu-close-btn"
          aria-label="Close Menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Menu links list */}
      <div className="flex flex-col gap-8 mt-16" id="mobile-menu-links-list">
        {navLinks.map((link, idx) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={onClose}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + idx * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl font-semibold tracking-widest uppercase text-black hover:text-[var(--color-accent)] transition-colors inline-block w-fit"
            id={`mobile-nav-link-${link.label.toLowerCase()}`}
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      {/* Bottom section CTA */}
      <div className="mt-auto pt-6" id="mobile-menu-footer">
        <motion.a
          href="#contact"
          onClick={onClose}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex items-center gap-1.5 text-xl font-semibold tracking-widest uppercase text-[var(--color-accent)] hover:opacity-80 transition-opacity w-fit"
          id="mobile-menu-cta"
        >
          <span>Work With Us</span>
          <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
        </motion.a>
      </div>
    </motion.div>
  );
}
