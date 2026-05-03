'use client';

import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, MessageCircle,
  Instagram, Facebook, Linkedin, Youtube,
  ChevronRight, ArrowUp,
} from 'lucide-react';

const WHATSAPP = 'https://wa.me/573003684990?text=Hola%2C%20necesito%20soporte%20t%C3%A9cnico';

const SERVICES_LINKS = [
  'Soporte IT Empresarial',
  'Reparación de Equipos',
  'Instalación CCTV',
  'Redes y Cableado Estructurado',
  'Telefonía IP',
  'Automatización de Procesos',
  'Transformación Digital',
  'Administración de Servidores',
];

const SOCIAL = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook,  label: 'Facebook',  href: '#' },
  { icon: Linkedin,  label: 'LinkedIn',  href: '#' },
  { icon: Youtube,   label: 'YouTube',   href: '#' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* ── Floating WhatsApp Button ── */}
      <motion.a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 shadow-[0_8px_30px_rgba(52,211,153,0.4)] flex items-center justify-center transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5, type: 'spring' }}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </motion.a>

      <footer className="relative bg-[#06090D] border-t border-white/[0.06] overflow-hidden">
        {/* Top glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2E8BCF]/30 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#2E8BCF]/[0.04] blur-[80px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

          {/* ── Main Footer Grid ── */}
          <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

            {/* Col 1: Brand */}
            <div className="lg:col-span-1 flex flex-col gap-5">
              <a href="#" className="flex items-center gap-2.5 w-fit">
                <LogoMark />
                <div className="flex flex-col leading-none">
                  <span className="text-white font-bold text-[15px] tracking-wider">INTECH</span>
                  <span className="text-[#2E8BCF] text-[9px] font-semibold tracking-[0.22em] uppercase">Solution Colombia</span>
                </div>
              </a>

              <p className="text-white/40 text-[13px] leading-relaxed">
                Empresa colombiana líder en soluciones tecnológicas empresariales.
                Soporte IT, CCTV, redes, telefonía IP y transformación digital.
              </p>

              {/* Social Links */}
              <div className="flex gap-2.5">
                {SOCIAL.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-xl glass border border-white/[0.07] flex items-center justify-center text-white/40 hover:text-[#2E8BCF] hover:border-[#2E8BCF]/30 transition-all"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-all text-[13px] font-medium w-fit"
              >
                <MessageCircle size={15} />
                Contactar por WhatsApp
              </a>
            </div>

            {/* Col 2: Services */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-semibold text-[13px] uppercase tracking-[0.1em]">
                Servicios
              </h3>
              <ul className="flex flex-col gap-2.5">
                {SERVICES_LINKS.map((s) => (
                  <li key={s}>
                    <a
                      href="#servicios"
                      className="flex items-center gap-1.5 text-white/45 hover:text-[#2E8BCF] text-[13px] transition-colors group"
                    >
                      <ChevronRight size={11} className="text-[#2E8BCF]/50 group-hover:text-[#2E8BCF] transition-colors" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-semibold text-[13px] uppercase tracking-[0.1em]">
                Empresa
              </h3>
              <ul className="flex flex-col gap-2.5">
                {[
                  ['Sobre Nosotros', '#nosotros'],
                  ['Nuestros Servicios', '#servicios'],
                  ['Optimización', '#optimizacion'],
                  ['Tecnología', '#tecnologia'],
                  ['Testimonios', '#'],
                  ['Contacto', '#contacto'],
                  ['Política de Privacidad', '#'],
                  ['Términos de Servicio', '#'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="flex items-center gap-1.5 text-white/45 hover:text-[#2E8BCF] text-[13px] transition-colors group"
                    >
                      <ChevronRight size={11} className="text-[#2E8BCF]/50 group-hover:text-[#2E8BCF] transition-colors" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white font-semibold text-[13px] uppercase tracking-[0.1em]">
                Contacto
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <MapPin size={15} className="text-[#2E8BCF] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/65 text-[13px] leading-relaxed">
                      Colombia · Servicio nacional<br />
                      a domicilio en toda Colombia
                    </p>
                  </div>
                </div>

                <a href="tel:+573003684990" className="flex items-center gap-3 group">
                  <Phone size={14} className="text-[#2E8BCF] shrink-0" />
                  <span className="text-white/55 text-[13px] group-hover:text-[#2E8BCF] transition-colors">
                    +57 (300) 368-4990
                  </span>
                </a>

                <a href="mailto:ceo@intechsolution.com.co" className="flex items-center gap-3 group">
                  <Mail size={14} className="text-[#2E8BCF] shrink-0" />
                  <span className="text-white/55 text-[13px] group-hover:text-[#2E8BCF] transition-colors">
                    ceo@intechsolution.com.co
                  </span>
                </a>

                <div className="flex gap-3">
                  <Clock size={14} className="text-[#2E8BCF] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/65 text-[13px]">Lun–Vie: 8:00 am – 6:00 pm</p>
                    <p className="text-white/65 text-[13px]">Sáb: 8:00 am – 1:00 pm</p>
                    <p className="text-emerald-400 text-[11px] mt-1 font-medium">
                      Soporte 24/7 para emergencias
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom Bar ── */}
          <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-[12px] text-center sm:text-left">
              © {new Date().getFullYear()} INTECH SOLUTION COLOMBIA. Todos los derechos reservados.
            </p>
            <button
              onClick={scrollTop}
              className="flex items-center gap-2 text-white/30 hover:text-[#2E8BCF] text-[12px] transition-colors group"
              aria-label="Volver arriba"
            >
              Volver arriba
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="58" rx="38" ry="14" stroke="#2E8BCF" strokeWidth="3.5" fill="none"
        strokeDasharray="120 80" strokeLinecap="round" transform="rotate(-20 50 58)" opacity="0.8"/>
      <path d="M50 8L82 22V50C82 70 67 84 50 92C33 84 18 70 18 50V22L50 8Z"
        fill="#03263A" stroke="#2E8BCF" strokeWidth="2.5"/>
      <path d="M50 18L72 29V50C72 64 62 75 50 81C38 75 28 64 28 50V29L50 18Z"
        fill="#0B0F14"/>
      <circle cx="50" cy="50" r="14" fill="none" stroke="#2E8BCF" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="50" cy="50" r="9" fill="rgba(46,139,207,0.25)"/>
      <circle cx="50" cy="50" r="5" fill="#2E8BCF"/>
      <circle cx="52.5" cy="47.5" r="1.8" fill="rgba(255,255,255,0.75)"/>
    </svg>
  );
}
