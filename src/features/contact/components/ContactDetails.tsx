// from react icons
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function ContactDetails() {
  return (
    <div className="border-1 mx-auto w-full max-w-[90%] space-y-10 rounded-3xl border border-white border-opacity-20 p-6 md:p-10 lg:max-w-[32%] lg:p-12">
      {/* Phone Number */}
      <span className="block cursor-pointer text-center text-xl font-semibold text-red-500 underline md:text-2xl lg:text-left lg:text-3xl">
        +1 840 841 25 69
      </span>

      {/* Address Section */}
      <div className="space-y-2 text-center lg:text-left">
        <h2 className="text-lg font-semibold text-white md:text-xl lg:text-2xl">
          Address
        </h2>
        <p className="text-sm text-white text-opacity-80 md:text-base lg:text-lg">
          Besòs 1, 08174 Sant Cugat del Vallès, Barcelona
        </p>
      </div>

      <div className="border-t border-solid border-white border-opacity-25"></div>

      {/* Email Section */}
      <div className="space-y-2 text-center lg:text-left">
        <h2 className="text-lg font-semibold text-white md:text-xl lg:text-2xl">
          Email
        </h2>
        <p className="text-sm text-white text-opacity-80 md:text-base lg:text-lg">
          Support@UiCamp.com
        </p>
      </div>

      <div className="border-t border-solid border-white border-opacity-25"></div>

      {/* Social Media Icons */}
      <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
        <span className="border-1 flex cursor-pointer items-center justify-center rounded-full border border-solid border-white border-opacity-30 p-3 transition hover:bg-white hover:bg-opacity-20">
          <FaFacebookF className="text-lg text-white" />
        </span>
        <span className="border-1 flex cursor-pointer items-center justify-center rounded-full border border-solid border-white border-opacity-30 p-3 transition hover:bg-white hover:bg-opacity-20">
          <FaDribbble className="text-lg text-white" />
        </span>
        <span className="border-1 flex cursor-pointer items-center justify-center rounded-full border border-solid border-white border-opacity-30 p-3 transition hover:bg-white hover:bg-opacity-20">
          <FaBehance className="text-lg text-white" />
        </span>
        <span className="border-1 flex cursor-pointer items-center justify-center rounded-full border border-solid border-white border-opacity-30 p-3 transition hover:bg-white hover:bg-opacity-20">
          <FaInstagram className="text-lg text-white" />
        </span>
      </div>
    </div>
  );
}
