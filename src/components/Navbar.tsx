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
    <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer blue orbit swoosh */}
      <ellipse cx="50" cy="58" rx="38" ry="14" stroke="#2E8BCF" strokeWidth="3.5" fill="none"
        strokeDasharray="120 80" strokeLinecap="round" transform="rotate(-20 50 58)" opacity="0.8"/>
      {/* Shield body */}
      <path d="M50 8L82 22V50C82 70 67 84 50 92C33 84 18 70 18 50V22L50 8Z"
        fill="#03263A" stroke="#2E8BCF" strokeWidth="2.5"/>
      {/* Inner shield */}
      <path d="M50 18L72 29V50C72 64 62 75 50 81C38 75 28 64 28 50V29L50 18Z"
        fill="#0B0F14"/>
      {/* Lens outer ring */}
      <circle cx="50" cy="50" r="14" fill="none" stroke="#2E8BCF" strokeWidth="1.5" opacity="0.5"/>
      {/* Lens */}
      <circle cx="50" cy="50" r="9" fill="rgba(46,139,207,0.25)"/>
      {/* Pupil */}
      <circle cx="50" cy="50" r="5" fill="#2E8BCF"/>
      {/* Shine */}
      <circle cx="52.5" cy="47.5" r="1.8" fill="rgba(255,255,255,0.75)"/>
    </svg>
  );
}
