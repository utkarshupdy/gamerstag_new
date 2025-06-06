import HeroSection from "@/features/mentor-details/components/HeroSection";
import MentorCard from "@/features/mentor-details/components/MentorCard";
import MentorInfo from "@/features/mentor-details/components/MentorInfo";
import OtherMentors from "@/features/mentor-details/components/OtherMentors";

async function fetchMentorsDetail(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/team/mentors/${slug}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch mentors");
    }
    const data = await response.json();
    return data.mentorDetails || [];
  } catch (error) {
    console.error("Error fetching mentors:", error);
    return [];
  }
}

export default async function TeamDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const mentor = await fetchMentorsDetail(slug);

  return (
    <div className="mx-auto w-[90%] md:w-[80%] lg:w-[95%] xl:w-[85%]">
      <HeroSection />
      <MentorCard mentor={mentor} />
      <MentorInfo mentor={mentor} />
      <OtherMentors />
    </div>
  );
}
