import HeroSection from "@/features/team/components/HeroSection";
import Team from "@/features/team/components/Team";

async function fetchTeamMembers() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/team/members`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch members");
    }
    const data = await response.json();
    return data.teamMembers || [];
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
}

export default async function TeamPage() {
  const members = await fetchTeamMembers();

  return (
    <>
      <HeroSection />
      <Team members={members} />
    </>
  );
}
