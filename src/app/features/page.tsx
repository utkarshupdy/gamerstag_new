import FeatureHeader from "@/features/features/components/large/FeatureHeader";
import FeaturesBottom from "@/features/features/components/large/FeatureBottom";
import Screenshots from "@/features/features/components/large/Screenshots";

export default function Features() {
  return (
    <>
      <h1 className="py-64 text-center text-4xl font-light text-white md:text-7xl">
        NEWS
      </h1>
      <FeatureHeader />
      <Screenshots rtl={false} />
      <FeaturesBottom />
    </>
  );
}
