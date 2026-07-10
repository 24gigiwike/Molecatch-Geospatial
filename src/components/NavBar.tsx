import { motion } from 'motion/react';
import Logo from './Logo';
import { NavLink } from '../types';
import { fadeDownVariant } from '../lib/animations';

interface NavBarProps {
  navLinks: NavLink[];
  onOpenMenu: () => void;
}

export default function NavBar({ navLinks, onOpenMenu }: NavBarProps) {
  return (
    <nav 
      className="relative z-10 flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6 w-full select-none" 
      id="main-nav-bar"
    >
      {/* Left: Logo (index=0) */}
      <Logo index={0} />

      {/* Center (hidden on mobile, visible md+): 4 nav links (index=1..4) */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12" id="nav-desktop-links">
        {navLinks.map((link, idx) => (
          <motion.a
            key={link.label}
            href={link.href}
            variants={fadeDownVariant}
            initial="initial"
            animate="animate"
            custom={idx + 1} // idx is 0..3, custom is 1..4
            className="text-sm font-semibold tracking-widest uppercase text-black hover:opacity-75 transition-opacity duration-200"
            id={`desktop-nav-link-${link.label.toLowerCase()}`}
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      {/* Right: Hamburger button (index=5) */}
      <motion.button
        variants={fadeDownVariant}
        initial="initial"
        animate="animate"
        custom={5}
        onClick={onOpenMenu}
        className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1 hover:bg-neutral-800 transition-colors focus:outline-none cursor-pointer"
        id="hamburger-btn"
        aria-label="Open Menu"
      >
        <span className="w-4 h-0.5 bg-white" id="hamburger-line-1"></span>
        <span className="w-4 h-0.5 bg-white" id="hamburger-line-2"></span>
        <span className="w-4 h-0.5 bg-white" id="hamburger-line-3"></span>
      </motion.button>
    </nav>
  );
}
