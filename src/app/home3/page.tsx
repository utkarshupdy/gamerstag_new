import Collaboration from "@/features/home3/components/large/Collaboratiobn";
import Hero from "@/features/home3/components/large/Hero";
import Services from "@/features/home3/components/large/Services";

export default function Home() {
  return (
    <div className="bg-[#111411] px-24 text-white">
      <Hero />
      <Services />
      <Collaboration />
    </div>
  );
}
