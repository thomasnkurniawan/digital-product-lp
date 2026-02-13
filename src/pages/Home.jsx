import MainLayout from "../components/layout/MainLayout";
import HeroSection from "../components/section/HeroSection";
import BenefitSection from "../components/section/BenefitSection";
import PricingSection from "../components/section/PricingSection";
import TestimonialSection from "../components/section/TestimonialSection";
import FAQSection from "../components/section/FAQSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <BenefitSection />  
      <PricingSection />
      <TestimonialSection />
      <FAQSection />
    </MainLayout>
  );
}
