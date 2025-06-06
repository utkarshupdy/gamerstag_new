import responsibilities from "../data/responsibilities.json";
export default function Responsibilities() {
  return (
    <div className="bg-black px-5 py-10 text-white">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Your Responsibilities
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {responsibilities.map(({ title, description }) => (
          <div
            key={title}
            className="bg-white p-6 text-black shadow-md transition-shadow hover:shadow-lg"
          >
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-sm text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
