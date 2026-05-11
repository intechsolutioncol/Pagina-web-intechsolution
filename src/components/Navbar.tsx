'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';

const NAV_LINKS = [
  { href: '#servicios',    label: 'Servicios' },
  { href: '#optimizacion', label: 'Optimización' },
  { href: '#tecnologia',   label: 'Tecnología' },
  { href: '#nosotros',     label: 'Nosotros' },
  { href: '#contacto',     label: 'Contacto' },
];

const WHATSAPP = 'https://wa.me/573003684990?text=Hola%2C%20me%20interesa%20una%20asesor%C3%ADa%20tecnol%C3%B3gica';

interface NavbarProps { onAsesoriaClick?: () => void; }

export default function Navbar({ onAsesoriaClick }: NavbarProps) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B0F14]/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-6">

          {/* ── Logo ── */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5 shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <LogoMark />
            <div className="hidden xs:flex flex-col leading-none">
              <span className="text-white font-bold text-[15px] tracking-wider">INTECH</span>
              <span className="text-[#2E8BCF] text-[9px] font-semibold tracking-[0.22em] uppercase">Solution</span>
            </div>
          </motion.a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`text-[13.5px] font-medium transition-colors duration-200 relative group
                  ${activeLink === link.href ? 'text-white' : 'text-white/60 hover:text-white'}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.25 }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#2E8BCF] to-[#64B5F6] group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              onClick={onAsesoriaClick}
              className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              <Phone size={13} className="shrink-0" />
              Solicitar Asesoría
              <ChevronRight size={13} className="shrink-0" />
            </motion.button>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 inset-x-0 z-40 bg-[#0B0F14]/95 backdrop-blur-2xl border-b border-white/[0.07] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/75 hover:text-white py-3 px-3 rounded-lg hover:bg-white/[0.04] text-[15px] font-medium transition-all flex items-center justify-between"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  <ChevronRight size={14} className="text-[#2E8BCF]" />
                </a>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 py-3.5 px-5 rounded-xl text-[14px] text-center flex items-center justify-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <Phone size={14} />
                Solicitar Asesoría Gratuita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LogoMark() {
  return (
    <svg width="38" height="38" viewBox="0 0 100 106" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield base — blue fill */}
      <path d="M50 3L12 17V54C12 77 29 93 50 103C71 93 88 77 88 54V17Z" fill="#2E8BCF"/>
      {/* Top angular tabs — blue detail */}
      <path d="M12 17L28 10L50 3L72 10L88 17L72 24L50 16L28 24Z" fill="#1A6FAD"/>
      {/* Dark orbital swoosh — covers most of shield */}
      <path d="M70 6C90 16 98 38 92 60C86 80 68 92 48 90C28 88 14 74 12 58C10 42 20 26 36 18L50 12Z" fill="#0A1520"/>
      {/* Blue accent wing — bottom left */}
      <path d="M12 70Q18 88 36 87Q22 94 8 83Z" fill="#2E8BCF"/>
      {/* Eye — outer white ring */}
      <circle cx="50" cy="54" r="18" fill="white"/>
      {/* Eye — blue ring */}
      <circle cx="50" cy="54" r="13.5" fill="#2E8BCF"/>
      {/* Eye — inner white */}
      <circle cx="50" cy="54" r="8.5" fill="white"/>
      {/* Eye — pupil */}
      <circle cx="50" cy="54" r="5" fill="#2E8BCF"/>
      {/* Eye — shine */}
      <circle cx="53.5" cy="50.5" r="2.2" fill="rgba(255,255,255,0.9)"/>
    </svg>
  );
}
