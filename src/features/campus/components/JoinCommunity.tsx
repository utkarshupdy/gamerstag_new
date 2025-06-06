import { Button } from "@/components/ui/button";

export default function JoinCommunity() {
  return (
    <div
      style={{
        backgroundImage: "url('/campus-ambassdor-assets/images/bg.jpg')",
        backgroundSize: "cover",
      }}
      className="py-40"
    >
      <div className="mx-auto w-[45%]">
        <div className="space-y-2 text-center">
          <span className="font-bold uppercase text-blue-500">
            Our Community
          </span>
          <h1 className="text-5xl font-bold uppercase text-white">
            Join Our Cumminity and get early access
          </h1>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <Button
            variant="outline"
            className="border-2 border-red-500 bg-transparent px-14 py-6 uppercase text-red-500 transition-colors duration-500 hover:bg-red-500 hover:text-white"
          >
            Mint Now
          </Button>
          <Button
            variant="outline"
            className="bg-black px-14 py-6 uppercase text-white transition-colors duration-500 hover:bg-white hover:text-black"
          >
            Whiltelist Now
          </Button>
        </div>
      </div>
    </div>
  );
}
