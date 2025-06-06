import ExploreGallery from "@/features/gallery/components/ExploreGallery";
import GalleryHeroSection from "@/features/gallery/components/GalleryHeroSection";

async function fetchGallery() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/gallery`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch member details");
    }
    const data = await response.json();
    return data.gallery || [];
  } catch (error) {
    console.error("Error fetching member details:", error);
    return [];
  }
}

export default async function Gallery() {
  const gallery = await fetchGallery();

  return (
    <>
      <GalleryHeroSection />
      <ExploreGallery gallery={gallery} />
    </>
  );
}
