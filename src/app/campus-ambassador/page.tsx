import About from "@/features/campus-ambassador/components/About";
import Banner from "@/features/campus-ambassador/components/Banner";
import Community from "@/features/campus-ambassador/components/Community";
import FAQSection from "@/features/campus-ambassador/components/FAQSection";
import GetStarted from "@/features/campus-ambassador/components/GetStarted";
import Responsibilities from "@/features/campus-ambassador/components/Responsibilities";
import Roadmap from "@/features/campus-ambassador/components/Roadmap";
import WhyJoin from "@/features/campus-ambassador/components/WhyJoin";

export default function GTMentors() {
  return (
    <>
      <div className="mx-auto w-[85%]">
        <Banner />
        <About />
        <Roadmap />
        <GetStarted />
        <WhyJoin />
        <Responsibilities />
        <Community />
        <FAQSection />
      </div>
    </>
  );
}
