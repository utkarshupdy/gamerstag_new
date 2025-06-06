import { EmblaOptionsType } from "embla-carousel";
import { FaRegSquareFull, FaSquareFull } from "react-icons/fa6";
import IncubationCarousel from "@/features/incubated/components/IncubationCarousel";

async function fetchIncubations() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/team/incubation`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch incubations");
    }

    const data = await response.json();
    return data.incubations || [];
  } catch (error) {
    console.error("Error fetching incubations:", error);
    return [];
  }
}

const OPTIONS: EmblaOptionsType = { loop: true };

export default async function Incubated() {
  
  const incubations = await fetchIncubations();

  return (
    <div className="py-32">
      <h1 className="mb-2 text-center text-5xl font-bold uppercase text-white">
        High-Resolution Games
      </h1>
      <div className="mb-4 flex items-center justify-center">
        <div className="flex items-center gap-2 text-white text-opacity-50">
          <FaRegSquareFull className="text-xs" />
          <FaSquareFull className="text-xs" />
          <hr className="w-10 border border-solid border-white border-opacity-50" />
        </div>
        <span className="mx-2 text-lg font-semibold uppercase text-white text-opacity-50">
          Technically Stabilized
        </span>
        <div className="flex items-center gap-2 text-white text-opacity-50">
          <hr className="w-10 border border-solid border-white border-opacity-50" />
          <FaRegSquareFull className="text-xs" />
          <FaSquareFull className="text-xs" />
        </div>
      </div>
      <div className="mt-20 flex items-center justify-center">
        <IncubationCarousel incubations={incubations || []} options={OPTIONS} />
      </div>
    </div>
  );
}
