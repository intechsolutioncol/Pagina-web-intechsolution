import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BusinessOptimization from '@/components/BusinessOptimization';
import WhyChooseUs from '@/components/WhyChooseUs';
import Technology from '@/components/Technology';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <BusinessOptimization />
      <WhyChooseUs />
      <Technology />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
