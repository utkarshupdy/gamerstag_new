import loading from "@/assets/images/loading.png";
import Image from "next/image";

export default function Generating({ className }: { className: string }) {
  return (
    <div
      className={`flex h-[3.5rem] items-center rounded-[1.7rem] bg-n-8/80 px-6 text-base ${className || ""}`}
    >
      <Image
        width={400}
        height={400}
        className="mr-4 h-5 w-5 animate-spin"
        src={loading}
        alt="Loading"
      />
      AI is generating
    </div>
  );
}
