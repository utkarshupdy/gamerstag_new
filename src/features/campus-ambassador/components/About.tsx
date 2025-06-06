import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-darkBlue py-16 text-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-wrap items-center">
          {/* Left Image Section */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="/campus-ambassdor-assets/images/gamer.png"
                alt="About"
                className="object-cover shadow-lg"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div
            className="mt-8 w-full lg:mt-0 lg:w-1/2 lg:pl-16"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            {/* About Us Section */}
            <p className="text-3xl font-bold uppercase text-secondary">
              Welcome To Gamerstag - The Next-Gen Gaming platform
            </p>

            <p className="mb-8 leading-relaxed text-gray-300">
              Gamerstag is a next-gen platform created for gamers who crave
              more. Powered by cutting-edge technology and fueled by a dynamic,
              community-driven experience, our platform offers an immersive and
              seamless space where players can compete, connect, and
              thrive-designed by gamers, for gamers. whether you&apos;re hosting
              tournaments, discovering new games, or connecting ith fellow
              enthusiasts. Join us and be part of the next era of Esports!
            </p>

            {/* How to Mint Section */}
            <div>
              <p className="text-xl font-bold uppercase text-main">
                Why join the Gamerstag Campus Ambassador Program
              </p>
              <p className="mb-8 leading-relaxed text-gray-300">
                This is more than just a role- it&apos;s an opportunity. By
                becoing a Campus Ambassador, you&apos;ll unlock career-boosting
                benefits, including exclusive access to internships, event
                hosting opportunities, and sponsor connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
