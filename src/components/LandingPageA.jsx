import Navbar from './common/Navbar';
import HeroA from './versionA/HeroA';
import StorySection from './versionA/StorySection';
import ImpactSection from './common/ImpactSection';
import ServicesSection from './common/ServicesSection';
import TestimonialSection from './common/TestimonialSection';
import GetInvolvedSection from './common/GetInvolvedSection';
import Footer from './common/Footer';

/**
|--------------------------------------------------
| emotional version landing page
|--------------------------------------------------
*/
function LandingPageA() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroA />
      <StorySection />
      <ImpactSection />
      <ServicesSection />
      <TestimonialSection />
      <GetInvolvedSection />
      <Footer />
    </div>
  );
}

export default LandingPageA;
