import Image from "next/image";

// importing images
import brand1 from "@/../public/home-personal-assets/images/brands/c1.png";
import brand2 from "@/../public/home-personal-assets/images/brands/b8.png";
import brand3 from "@/../public/home-personal-assets/images/brands/b3.png";
import brand4 from "@/../public/home-personal-assets/images/brands/b2.png";
import brand5 from "@/../public/home-personal-assets/images/brands/08.png";

export default function Clients() {
  const brandsLogos = [brand1, brand2, brand3, brand4, brand5];
  return (
    <>
      <div className="flex justify-center py-[140px]">
        <div className="w-[1280px]">
          <div className="mb-20 flex items-center justify-center">
            <h1 className="w-[50%] text-center text-5xl font-semibold text-white">
              {"We're"} proud to work with a
              <span className="opacity-60">diverse range of companies.</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-between">
            {brandsLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo}
                alt={logo.src}
                className="size-52 rounded-full border border-gray-800 object-contain p-10"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="inline-flex w-full items-center justify-center">
        <div className="h-1 flex-grow border-t border-white border-opacity-20"></div>
        <p className="border-1 rounded-full border border-solid border-white border-opacity-20 px-4 py-2 font-normal text-white">
          More than 200+ companies trusted us worldwide
        </p>
        <div className="h-1 flex-grow border-t border-white border-opacity-20"></div>
      </div>
    </>
  );
}
