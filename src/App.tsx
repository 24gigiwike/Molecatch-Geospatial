import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import NavBar from './components/NavBar';
import BottomSection from './components/BottomSection';
import MobileMenu from './components/MobileMenu';
import ExpertisePage from './components/ExpertisePage';
import CapabilitiesPage from './components/CapabilitiesPage';
import ContactPage from './components/ContactPage';
import { NavLink, PageType } from './types';

const NAV_LINKS: NavLink[] = [
  { label: 'Mission', href: '#mission' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('mission');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync hash routing with react state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#expertise') setCurrentPage('expertise');
      else if (hash === '#capabilities') setCurrentPage('capabilities');
      else if (hash === '#contact') setCurrentPage('contact');
      else setCurrentPage('mission');
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
        2. Mobile Page Selector (mobile only)
        3. Dynamic Content
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

        {/* Section 3: Dynamic Content Body */}
        <AnimatePresence mode="wait">
          {currentPage === 'mission' && (
            <motion.div 
              key="mission-view"
              className="flex-1 flex flex-col justify-between w-full"
              id="mission-view-wrapper"
            >
              {/* Vertical Spacer (hidden on mobile, flex-1 on desktop) */}
              <div className="hidden md:block md:flex-1" id="vertical-spacer" />
              <BottomSection />
            </motion.div>
          )}

          {currentPage === 'expertise' && (
            <ExpertisePage key="expertise-view" />
          )}

          {currentPage === 'capabilities' && (
            <CapabilitiesPage key="capabilities-view" />
          )}

          {currentPage === 'contact' && (
            <ContactPage key="contact-view" />
          )}
        </AnimatePresence>

        {/* Subtle Developer Credit Footer Signature */}
        <div 
          className="relative z-10 w-full flex justify-center mt-auto pt-10 pb-8 md:pb-10" 
          id="developer-credit-container"
        >
          <a
            href="https://webdesignking.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 transition-all duration-300 ease-out hover:-translate-y-[2px] group cursor-pointer bg-transparent"
            id="developer-credit-link"
          >
            <span 
              className="font-sans text-[12px] md:text-[13px] font-medium tracking-widest uppercase text-neutral-500 opacity-65 group-hover:opacity-100 group-hover:text-[var(--color-accent)] transition-all duration-300 ease-out select-none"
              id="developer-credit-text"
            >
              Built by
            </span>
            <img
              src="https://res.cloudinary.com/dtkluxukm/image/upload/v1781877708/8_cwwfre.png"
              alt="Web Design King Logo"
              className="h-[18px] md:h-[22px] w-auto object-contain transition-none pointer-events-none select-none"
              referrerPolicy="no-referrer"
              id="developer-credit-logo"
            />
          </a>
        </div>
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

