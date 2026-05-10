'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import PartnersStrip from '@/components/PartnersStrip';
import Services from '@/components/Services';
import BusinessOptimization from '@/components/BusinessOptimization';
import WhyChooseUs from '@/components/WhyChooseUs';
import Technology from '@/components/Technology';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import NewsletterBar from '@/components/NewsletterBar';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import AsesoriaModal from '@/components/AsesoriaModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="relative overflow-hidden">
      <Navbar onAsesoriaClick={() => setModalOpen(true)} />
      <Hero onAsesoriaClick={() => setModalOpen(true)} />
      <AboutSection />
      <PartnersStrip />
      <Services />
      <BusinessOptimization />
      <WhyChooseUs />
      <Technology />
      <Testimonials />
      <ContactSection />
      <NewsletterBar />
      <FinalCTA onAsesoriaClick={() => setModalOpen(true)} />
      <Footer />
      <AsesoriaModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
