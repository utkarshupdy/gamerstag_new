import { useEffect, useState } from "react";
import sliderData from "../data/slider.json";
import Button from "@/components/PrimaryButton";
import Image from "next/image";

export default function Slider() {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((idx) => (idx === sliderData.length - 1 ? 0 : idx + 1));
  };

  const prevImage = () => {
    setImageIndex((idx) => (idx === 0 ? sliderData.length - 1 : idx - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((idx) => (idx === sliderData.length - 1 ? 0 : idx + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen relative z-10 flex aspect-video overflow-hidden text-white">
      {sliderData.map(({ backgroundImage, title, description }, index) => (
        <div
          key={backgroundImage}
          className="relative w-screen min-w-full transition-all duration-500"
          style={{
            translate: `-${100 * imageIndex + "%"}`,
          }}
        >
          <Image
            key={backgroundImage}
            src={backgroundImage}
            height={1000}
            width={1000}
            alt={title}
            className={`w-full object-cover transition-all duration-1000 ${index === imageIndex ? "opacity-100" : "opacity-0"}`}
          />

          <div className="absolute right-10 top-1/3 space-y-5">
            <h2 className="text-6xl font-bold">{title}</h2>
            <h4 className="text-xl">{description}</h4>
            <Button>View More</Button>
            <Button>Apply</Button>
          </div>
        </div>
      ))}

      <button
        onClick={prevImage}
        className="absolute left-0 h-full outline-none hover:bg-black/25"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={nextImage}
        className="absolute right-0 h-full outline-none hover:bg-black/25"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
