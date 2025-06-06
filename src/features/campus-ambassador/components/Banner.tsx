import Button from "@/components/buttons/Button";
import Image from "next/image";

export default function Banner() {
  return (
    <section
      id="home"
      className="banner bg-cover bg-center py-16 text-white"
      style={{
        backgroundImage: "url('/campus-ambassdor-assets/images/bnr.png')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div data-aos="fade-right" data-aos-duration="2000">
            <h1 className="mt-4 text-4xl font-bold lg:text-5xl">
              GamersTag-{" "}
              <span className="text-main">
                <br />
                Campus Ambasssdor
              </span>{" "}
              Program
            </h1>
            <p className="mt-4 text-gray-200">
              Your campus, Your crew, Your legacy
            </p>
            <div className="mt-6 flex space-x-4">
              <Button color={"main"} text={"Apply Now"} />
              <Button color={"white"} text={"share"} />
            </div>
          </div>

          {/* Right Content */}
          <div
            className="flex flex-col items-center justify-center space-y-4"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            {/* Banner Image */}
            <Image
              src="/nft-portal-assets/images/01.png"
              alt="Banner Image"
              width={400}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
