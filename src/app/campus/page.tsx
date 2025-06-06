import HeroSection from "@/features/campus/components/HeroSection";
import AboutUsSection from "@/features/campus/components/AboutUsSection";
import RoadMap from "@/features/campus/components/RoadMap";
import Collection from "@/features/campus/components/Collection";
import TeamMember from "@/features/campus/components/TeamMember";
import FAQs from "@/features/campus/components/FAQs";
import BestPartners from "@/features/campus/components/BestPartners";
import JoinCommunity from "@/features/campus/components/JoinCommunity";
import Blogs from "@/features/campus/components/Blogs";

export default function CampusAmbassdor() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <RoadMap />
      <Collection />
      <TeamMember />
      <FAQs />
      <Blogs />
      <BestPartners />
      <JoinCommunity />
    </>
  );
}
