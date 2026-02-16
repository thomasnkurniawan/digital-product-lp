import MainLayout from "../components/layout/MainLayout";
import HeroSection from "../components/section/HeroSection";
import BenefitSection from "../components/section/BenefitSection";
import PreviewSection from "../components/section/PreviewSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <PreviewSection />
      <BenefitSection />  
      {/* <FAQSection /> */}
    </MainLayout>
  );
}
