import HeroSection from '@/components/home/HeroSection';
import FeatureSection from '@/components/home/FeatureSection';
import PopularSkillsSection from '@/components/home/PopularSkillsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <PopularSkillsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
      <div className="mt-12 text-center space-x-4">
        <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
        <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
        <a href="/contact" className="text-primary hover:underline">Contact Us</a>
      </div>
    </>
  );
};

export default Index;
