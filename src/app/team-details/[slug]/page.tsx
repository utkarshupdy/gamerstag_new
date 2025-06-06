import HeroSection from "@/features/team-details/components/HeroSection";
import MemberCard from "@/features/team-details/components/MemberCard";
import MemberInfo from "@/features/team-details/components/MemberInfo";
import OtherMembers from "@/features/team-details/components/OtherMembers";
import MemberCarousel from "@/features/team-details/components/TeamCarousel/MemberCarousel";

async function fetchTeamDetails(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/team/members/${slug}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch member details");
    }
    const data = await response.json();
    return data.memberDetails || [];
  } catch (error) {
    console.error("Error fetching member details:", error);
    return [];
  }
}

export default async function TeamDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = await fetchTeamDetails(slug);

  const gallery = [
    {
      imageUrl: "/portfolio-masonry-assets/images/h2.jpg",
    },
    {
      imageUrl: "/portfolio-masonry-assets/images/h3.jpg",
    },
    {
      imageUrl: "/portfolio-masonry-assets/images/h4.jpg",
    },
  ];

  return (
    <div className="mx-auto w-[90%] md:w-[80%] lg:w-[95%] xl:w-[85%]">
      <HeroSection />
      <MemberCard member={member} />
      <MemberInfo member={member} />
      <MemberCarousel gallery={gallery} options={{ loop: true }} />
      <OtherMembers />
    </div>
  );
}
