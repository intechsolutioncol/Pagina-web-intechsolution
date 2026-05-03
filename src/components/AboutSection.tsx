'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Lightbulb, Users, MapPin, Award } from 'lucide-react';

const VALUES = [
  {
    icon: Target,
    title: 'Resultados medibles',
    desc: 'Cada proyecto tiene KPIs definidos. No terminamos hasta que los números demuestren el impacto.',
  },
  {
    icon: Users,
    title: 'Equipo certificado',
    desc: 'Ingenieros con certificaciones Microsoft, Cisco, Hikvision y VMware activas.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación continua',
    desc: 'Adoptamos las últimas tecnologías para que tu empresa siempre esté un paso adelante.',
  },
  {
    icon: Award,
    title: 'Garantía de servicio',
    desc: 'Cada instalación e implementación viene respaldada por garantía escrita y soporte post-venta.',
  },
];

const TIMELINE = [
  { year: '2016', event: 'Fundación de INTECH SOLUTION en Colombia', detail: 'Nacemos con el objetivo de llevar tecnología de clase mundial a las empresas colombianas.' },
  { year: '2018', event: 'Expansión de servicios CCTV e IP', detail: 'Nos convertimos en integradores certificados Hikvision y Dahua, ampliando cobertura nacional.' },
  { year: '2020', event: 'División de Transformación Digital', detail: 'Lanzamos nuestra unidad de automatización de procesos y consultoría tecnológica empresarial.' },
  { year: '2022', event: 'Más de 300 empresas atendidas', detail: 'Alcanzamos un hito histórico: 300 clientes activos en 10 ciudades colombianas.' },
  { year: '2024', event: 'Certificación Microsoft Partner', detail: 'Reconocidos como socios tecnológicos de Microsoft para soluciones cloud y productividad.' },
  { year: '2025+', event: '+500 empresas · Presencia nacional', detail: 'Hoy somos el socio tecnológico de confianza de más de 500 organizaciones en Colombia.' },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id="nosotros-empresa"
      className="relative py-24 sm:py-32 bg-[#080C10] overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2E8BCF]/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Top: Mission + Vision ── */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 mb-20 items-center">

          {/* Left: Company story */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label mb-6 inline-flex">Quiénes Somos</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance mt-5 mb-6">
              El aliado tecnológico que tu empresa{' '}
              <span className="text-gradient">necesita</span>
            </h2>

            <div className="flex flex-col gap-4 text-white/55 text-[15px] leading-relaxed">
              <p>
                <strong className="text-white/80">INTECH SOLUTION</strong> es una empresa colombiana de tecnología
                fundada con un propósito claro: democratizar el acceso a infraestructura IT de clase mundial
                para las organizaciones del país, sin importar su tamaño.
              </p>
              <p>
                Con sede en Colombia y cobertura en todo el territorio nacional, ofrecemos soluciones
                integrales que van desde el soporte técnico del día a día hasta la transformación digital
                profunda de procesos empresariales críticos.
              </p>
              <p>
                Nuestro equipo está conformado por ingenieros y técnicos certificados con amplia experiencia
                en las principales plataformas del mercado: <span className="text-[#2E8BCF]">Microsoft, Cisco, Ubiquiti,
                Hikvision, VMware, Asterisk</span> y muchas más.
              </p>
            </div>

            {/* Location badges */}
            <div className="flex flex-wrap gap-2 mt-7">
              {['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Bucaramanga', 'Cartagena', 'Manizales', '+ más ciudades'].map((city) => (
                <span
                  key={city}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2E8BCF]/08 border border-[#2E8BCF]/15 rounded-full text-[11px] text-white/55 hover:text-[#2E8BCF] hover:border-[#2E8BCF]/30 transition-all"
                >
                  <MapPin size={9} className="text-[#2E8BCF]" />
                  {city}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Mission, Vision + Values */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Mission */}
            <div className="glass-blue rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2E8BCF]/15 border border-[#2E8BCF]/25 flex items-center justify-center shrink-0">
                <Target size={18} className="text-[#2E8BCF]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-[15px] mb-2">Misión</h3>
                <p className="text-white/55 text-[13.5px] leading-relaxed">
                  Ser el socio tecnológico más confiable de las empresas colombianas, ofreciendo
                  soluciones de infraestructura IT, seguridad electrónica y transformación digital
                  con estándares internacionales y atención 100% personalizada.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="glass rounded-2xl p-6 flex gap-4 border border-white/[0.07]">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center shrink-0">
                <Eye size={18} className="text-white/60" />
              </div>
              <div>
                <h3 className="text-white font-bold text-[15px] mb-2">Visión</h3>
                <p className="text-white/55 text-[13.5px] leading-relaxed">
                  Ser reconocidos para 2030 como el referente líder en innovación tecnológica
                  empresarial en Colombia, con presencia en todas las ciudades principales
                  del país y soluciones que compitan con los mejores del mundo.
                </p>
              </div>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3">
              {VALUES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass rounded-xl p-4 border border-white/[0.05] hover:border-[#2E8BCF]/20 transition-colors group">
                  <Icon size={16} className="text-[#2E8BCF] mb-2" />
                  <h4 className="text-white font-semibold text-[12px] mb-1 group-hover:text-[#64B5F6] transition-colors">{title}</h4>
                  <p className="text-white/40 text-[11px] leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Timeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <span className="section-label">Nuestra Historia</span>
            <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              8 años transformando empresas colombianas
            </h3>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2E8BCF]/60 via-[#2E8BCF]/30 to-transparent hidden md:block" />

            <div className="flex flex-col gap-6">
              {TIMELINE.map(({ year, event, detail }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-4 md:gap-8 ${i % 2 === 0 ? '' : 'md:[direction:rtl]'}`}
                >
                  {/* Year bubble — center */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:flex w-14 h-14 rounded-full glass-blue border border-[#2E8BCF]/30 items-center justify-center z-10">
                    <span className="text-[#2E8BCF] font-bold text-[11px] text-center leading-tight">{year}</span>
                  </div>

                  {/* Content card */}
                  <div className={`md:col-start-${i % 2 === 0 ? 1 : 2} [direction:ltr]`}>
                    <div className="glass rounded-2xl p-5 border border-white/[0.06] hover:border-[#2E8BCF]/20 transition-colors">
                      <div className="flex items-center gap-2 mb-2 md:hidden">
                        <span className="text-[#2E8BCF] font-bold text-[12px] px-2.5 py-1 bg-[#2E8BCF]/10 rounded-full">{year}</span>
                      </div>
                      <h4 className="text-white font-semibold text-[14px] mb-1.5">{event}</h4>
                      <p className="text-white/45 text-[12.5px] leading-relaxed">{detail}</p>
                    </div>
                  </div>

                  {/* Empty col for alignment */}
                  <div className="hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
