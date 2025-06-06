import HeroSection from "@/features/mentors/components/HeroSection";
import Mentors from "@/features/mentors/components/Mentors";

async function fetchTeamMentors() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/team/mentors`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch mentors");
    }
    const data = await response.json();
    return data.teamMentors || [];
  } catch (error) {
    console.error("Error fetching mentors:", error);
    return [];
  }
}

export default async function GTMentors() {
  const mentors = await fetchTeamMentors();

  return (
    <div className="mx-auto w-[85%]">
      <HeroSection />
      <Mentors mentors={mentors} />
    </div>
  );
}
