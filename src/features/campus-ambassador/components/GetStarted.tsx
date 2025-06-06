import steps from "../data/steps.json";

export default function GetStarted() {
  return (
    <div className="bg-black py-10 text-white">
      <h2 className="mb-8 text-center text-3xl font-bold">
        How To Get Started?
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {steps.map(({ description, icon, title }) => (
          <div
            key={title}
            className="w-60 bg-white p-6 text-center shadow-md transition-transform hover:scale-105"
          >
            <div className="mb-4 text-4xl text-black">{icon}</div>
            <h3 className="mb-2 text-xl font-bold text-black">{title}</h3>
            <p className="text-sm text-gray-900">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
