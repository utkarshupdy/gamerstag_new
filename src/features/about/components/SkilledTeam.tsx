import Image from "next/image";

import skills from "../data/skills.json";

export default function SkilledTeam() {
  return (
    <>
      <div className="flex justify-center py-[140px]">
        <div className="w-[1280px]">
          <div className="flex justify-center">
            <h1 className="mb-20 w-[50%] text-center text-2xl font-semibold text-white md:text-3xl lg:text-5xl">
              We&apos;re proud to work with a
              <span className="opacity-70">diverse range of companies.</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-between px-4">
            {skills.map(({ image, level, skill }) => (
              <div key={image} className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-8 rounded-full rounded-b-full rounded-t-full border border-neutral-700 bg-neutral-900 px-7 py-8">
                  <Image
                    src={image}
                    alt={skill}
                    className="size-24 p-4"
                    width={70}
                    height={70}
                  />
                  <span className="text-3xl text-white">{level}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-0.5 bg-gradient-to-r from-white/0 via-white to-white/0" />
    </>
  );
}
