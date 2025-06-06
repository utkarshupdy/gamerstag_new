import Image from "next/image";

//importing images
import profileImage from "@/../public/home-personal-assets/images/profilePic.jpg";
import { FiArrowDownRight } from "react-icons/fi"; // from react icons

export default function AboutMe() {
  return (
    <div className="flex items-center justify-center py-[140px]">
      <div className="max-w-screen-xl items-center justify-between gap-4 lg:flex">
        <div className="border-1 mx-auto w-[420px] rounded-b-full rounded-t-full border border-white border-opacity-20 bg-neutral-950 p-[30px] md:w-[600px] lg:ml-4 lg:h-[680px] lg:w-[41%]">
          <Image
            src={profileImage}
            alt="profileImage"
            className="border-1 h-full w-full rounded-b-full rounded-t-full border border-white border-opacity-10 object-cover"
          />
        </div>
        <div className="mt-10 space-y-10 px-4 text-white lg:mt-0 lg:w-[70%] lg:px-10">
          <h2 className="font-medium uppercase text-red-500">About Me</h2>
          <p className="text-xl md:text-3xl lg:text-4xl">
            <span className="font-semibold">I&apos;m</span> Creative Director
            and UI-UX Designer{" "}
            <span className="font-semibold">
              {" "}
              from Sydney, Australia, working in web development and print
              media.
            </span>
          </p>
          <p className="opacity-70">
            I enjoy turning complex problems into simple, beautiful and
            intuitive designs. My aim is to bring across your message and
            identity in the most creative way. I created web design for many
            famous brand companies.
          </p>

          <div className="items-center justify-between gap-8 space-y-6 md:flex md:space-y-0 lg:gap-20">
            <div className="flex w-full items-end justify-between border border-x-0 border-b-0 border-solid border-gray-200 border-opacity-25 pt-6 lg:pt-10">
              <div className="space-y-2">
                <span className="text-3xl md:text-4xl lg:text-5xl">100%</span>
                <p className="font-semibold uppercase opacity-75">
                  Clients Satisfaction
                </p>
              </div>
              <FiArrowDownRight className="text-6xl opacity-50" />
            </div>

            <div className="flex w-full items-end justify-between border border-x-0 border-b-0 border-solid border-gray-200 border-opacity-25 pt-6 lg:pt-10">
              <div className="space-y-2">
                <span className="text-3xl md:text-4xl lg:text-5xl">6700</span>
                <p className="font-semibold uppercase opacity-75">
                  Projects Completed
                </p>
              </div>
              <FiArrowDownRight className="text-6xl opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
