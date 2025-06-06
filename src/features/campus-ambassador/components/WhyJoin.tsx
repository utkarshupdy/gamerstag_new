import Image from "next/image";
import featuresList from "../data/featuresList.json";

export default function WhyJoin() {
  return (
    <div className="my-2 bg-black px-5 py-10 text-white md:px-20">
      <div className="flex flex-col items-center md:flex-row">
        {/* Left Section: Images */}
        <div className="flex flex-col space-y-5 md:w-1/2 md:flex-row md:space-x-5 md:space-y-0">
          <Image
            width={100}
            height={100}
            src="/campus-ambassdor-assets/images/boygamer.png" // Replace with the actual path
            alt="Player close-up"
            className="w-full rounded-md md:w-1/2"
          />
          <Image
            width={100}
            height={100}
            src="/campus-ambassdor-assets/images/girlgamer.png" // Replace with the actual path
            alt="Cyborg warrior"
            className="w-full rounded-md md:w-1/2"
          />
        </div>

        {/* Right Section: Text */}
        <div className="mt-10 md:ml-10 md:mt-0 md:w-1/2">
          <h2 className="mb-5 text-3xl font-extrabold">
            Why Join the GAMERSTAG Community?
          </h2>
          <ul className="list-disc space-y-3 pl-5">
            {featuresList.map(({ title, description }) => (
              <li key={title}>
                <span className="font-bold">{title}:</span> {description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
