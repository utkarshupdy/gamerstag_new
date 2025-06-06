import Button from "@/components/buttons/Button";

export default function Community() {
  return (
    <section className="container mx-auto my-16 bg-black bg-opacity-60 p-10 px-6 text-center text-white">
      {/* Subtitle */}
      <p className="text-lg uppercase tracking-wide text-main">
        Lead. Play. Dominate.
      </p>

      {/* Main Heading */}
      <h2 className="mb-6 text-4xl font-extrabold md:text-5xl">
        Join the Community & Elevate Your Campus
      </h2>

      {/* Buttons */}
      <div className="flex justify-center space-x-4">
        <Button color={"main"} text="community Link" />
        <Button color={"white"} text="Save" />
      </div>
    </section>
  );
}
