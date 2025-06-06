import FeaturesCard from "@/features/features-for-you/components/FeaturesCard";
import GamingAppFeatures from "@/features/features-for-you/components/GamingAppPro";
import HeroSection from "@/features/features-for-you/components/HeroSection";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col justify-center pb-[140px]">
      <HeroSection />
      <GamingAppFeatures />
      <FeaturesCard />
    </div>
  );
}
