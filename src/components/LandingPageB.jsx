
// Statistical version landing page
import Navbar from './common/Navbar';
import HeroB from './versionB/HeroB';
import StatsSection from './versionB/StatsSection';
import ImpactSection from './common/ImpactSection';
import ServicesSection from './common/ServicesSection';
import TestimonialSection from './common/TestimonialSection';
import GetInvolvedSection from './common/GetInvolvedSection';
import Footer from './common/Footer';

function LandingPageB() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroB />
      <StatsSection />
      <ImpactSection />
      <ServicesSection />
      <TestimonialSection />
      <GetInvolvedSection />
      <Footer />
    </div>
  );
}

export default LandingPageB;