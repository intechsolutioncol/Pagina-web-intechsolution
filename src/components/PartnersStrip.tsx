'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* Brand logos rendered as clean SVG wordmarks / icon+text combos */
const BRANDS = [
  { name: 'Hikvision',   color: '#E8002D', accent: '#FF3B5C', category: 'CCTV & Seguridad'   },
  { name: 'Dahua',       color: '#0057A8', accent: '#2E8BCF', category: 'Videovigilancia'     },
  { name: 'Cisco',       color: '#049fd9', accent: '#0EA5E9', category: 'Redes Empresariales'  },
  { name: 'Ubiquiti',    color: '#0559C9', accent: '#3B82F6', category: 'Wi-Fi & Redes'        },
  { name: 'MikroTik',    color: '#A22B2B', accent: '#EF4444', category: 'Routing & Switching'  },
  { name: 'Microsoft',   color: '#00A4EF', accent: '#38BDF8', category: 'Cloud & Productividad'},
  { name: 'VMware',      color: '#607078', accent: '#94A3B8', category: 'Virtualización'       },
  { name: 'Panduit',     color: '#D4790E', accent: '#F59E0B', category: 'Cableado Estructurado'},
  { name: 'Dell EMC',    color: '#007DB8', accent: '#2E8BCF', category: 'Servidores & Storage' },
  { name: 'HP / HPE',    color: '#0096D6', accent: '#38BDF8', category: 'Servidores & PCs'     },
  { name: 'Asterisk',    color: '#F37021', accent: '#FB923C', category: 'Telefonía IP'          },
  { name: '3CX',         color: '#009966', accent: '#34D399', category: 'PBX Empresarial'       },
];

export default function PartnersStrip() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 bg-brand-black overflow-hidden">
      {/* Divider lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-[11px] text-white/25 uppercase tracking-[0.18em] font-semibold mb-10"
        >
          Marcas aliadas y tecnologías certificadas
        </motion.p>

        {/* Scrolling brands row */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {BRANDS.map(({ name, color, accent, category }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.045 + 0.1 }}
              className="group relative glass rounded-xl p-3.5 border border-white/[0.05] hover:border-[#2E8BCF]/20 flex flex-col items-center gap-2 cursor-default transition-all duration-300 hover:-translate-y-1"
            >
              {/* Brand icon */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[11px] font-extrabold tracking-tighter transition-all duration-300"
                style={{ background: `${color}18`, border: `1px solid ${color}30`, color: accent }}
              >
                <BrandIcon name={name} color={accent} />
              </div>

              {/* Name */}
              <p className="text-white/65 text-[11px] font-semibold text-center leading-tight group-hover:text-white transition-colors">
                {name}
              </p>

              {/* Category tooltip on hover */}
              <p className="text-white/25 text-[9px] text-center leading-tight">{category}</p>

              {/* Hover bottom bar */}
              <div
                className="absolute bottom-0 inset-x-0 h-[2px] rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-[11px] text-white/20 mt-8"
        >
          Integramos más de 30 plataformas tecnológicas enterprise · Certificaciones vigentes en Colombia
        </motion.p>
      </div>
    </section>
  );
}

/* Compact SVG brand icon — first letter(s) stylized */
function BrandIcon({ name, color }: { name: string; color: string }) {
  const abbr = name.replace(/[^A-Z0-9]/g, '').slice(0, 2) || name.slice(0, 2).toUpperCase();
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="12" y="17"
        textAnchor="middle"
        fill={color}
        fontSize="12"
        fontWeight="800"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="-0.5"
      >
        {abbr}
      </text>
    </svg>
  );
}
