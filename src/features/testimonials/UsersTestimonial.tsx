import TestimonialCarousel from "./TestimonialCarousel/TestimonialCarousel";
import { EmblaOptionsType } from "embla-carousel";

const UsersTestimonial = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="mx-auto w-[85%] py-36">
      <div className="mb-4 flex items-center justify-center">
        <h1 className="mx-2 text-center text-2xl font-bold uppercase text-main md:text-4xl lg:text-5xl">
          User Testmonials
        </h1>
      </div>
      <div className="mx-auto mt-20 flex gap-10">
        <div className="w-full py-10">
          <TestimonialCarousel
            slides={SLIDES}
            options={OPTIONS}
            isAdded={false}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersTestimonial;
