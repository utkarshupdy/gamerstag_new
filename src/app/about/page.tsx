// All Components are imported here
import AboutMe from "@/features/about/components/AboutMe";
import HeroSection from "@/features/about/components/HeroSection";
import SelectedWork from "@/features/about/components/SelectedWork";
import Services from "@/features/about/components/Services";
import SkilledTeam from "@/features/about/components/SkilledTeam";
import Testimonials from "@/features/about/components/Testimonials";
import Clients from "@/features/about/components/Clients";
import BlogSection from "@/features/about/components/BlogSection";
import Marquess from "@/components/Marquess";

export default function HomePersonal() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Services />
      <SelectedWork />
      <SkilledTeam />
      <Testimonials />
      <Clients />
      <BlogSection />
      <Marquess />
    </>
  );
}
