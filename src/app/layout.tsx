import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'INTECH SOLUTION COLOMBIA | Tecnología Empresarial Inteligente',
  description:
    'Empresa colombiana líder en soporte IT, instalación CCTV, redes estructuradas, telefonía IP, automatización de procesos y transformación digital empresarial.',
  keywords: [
    'soporte IT Colombia',
    'instalación CCTV',
    'redes estructuradas',
    'telefonía IP',
    'transformación digital',
    'automatización procesos',
    'consultoría tecnológica',
    'mantenimiento servidores',
  ].join(', '),
  authors: [{ name: 'INTECH SOLUTION COLOMBIA' }],
  openGraph: {
    title: 'INTECH SOLUTION COLOMBIA',
    description: 'Impulsamos empresas con tecnología inteligente.',
    type: 'website',
    locale: 'es_CO',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-brand-black text-white antialiased">
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
