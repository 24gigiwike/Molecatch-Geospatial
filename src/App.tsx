import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import NavBar from './components/NavBar';
import StatsRow from './components/StatsRow';
import BottomSection from './components/BottomSection';
import MobileMenu from './components/MobileMenu';
import { NavLink, StatItem } from './types';

const NAV_LINKS: NavLink[] = [
  { label: 'Mission', href: '#mission' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Solutions', href: '#solutions' },
];

const STAT_ITEMS: StatItem[] = [
  { id: 'missions', number: '+800', label: 'SPATIAL MISSIONS' },
  { id: 'data', number: '+450', label: 'DATA INTEGRATIONS' },
  { id: 'partners', number: '+150', label: 'GOVT PARTNERS' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on ESC keypress
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div 
      className="relative flex flex-col min-h-screen w-full bg-white text-black overflow-hidden font-sans tracking-widest uppercase font-semibold select-none"
      id="hero-root-container"
    >
      {/* 
        Background: Autoplaying, looping, muted video covering the viewport with opacity-80.
        Positioned absolute inset-0 with object-cover.
      */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" 
        id="background-video-wrapper"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
          autoPlay
          loop
          muted
          playsInline
          id="hero-background-video"
        />
      </div>

      {/* Subtle white overlay */}
      <div 
        className="absolute inset-0 bg-white/10 pointer-events-none" 
        id="subtle-white-overlay"
      ></div>

      {/* 
        Three-section full-screen column:
        1. Nav (fixed height, top-aligned)
        2. Stats Row (flex-1, centered, right-aligned)
        3. Bottom Section (pinned with bottom padding)
      */}
      <div 
        className="relative z-10 flex flex-col min-h-screen w-full" 
        id="hero-content-overlay"
      >
        {/* Section 1: Navigation Bar */}
        <NavBar 
          navLinks={NAV_LINKS} 
          onOpenMenu={() => setIsMenuOpen(true)} 
        />

        {/* Section 2: Vertically Centered Stats Row */}
        <StatsRow 
          stats={STAT_ITEMS} 
        />

        {/* Section 3: Bottom Content */}
        <BottomSection />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            navLinks={NAV_LINKS}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
