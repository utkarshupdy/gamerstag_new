import roadmapData from "../data/roadmap.json";

export default function Roadmap() {
  return (
    <section
      className="roadmap bg-cover py-16"
      id="roadmap"
      style={{ backgroundImage: "url('/assets/images/roadmap/bg.jpg')" }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-lg font-bold text-gray-100">
            What&apos;s in it for you?
          </p>
          <h2 className="text-3xl font-bold text-main">How it all started</h2>
        </div>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 transform bg-main md:block"></div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className={`relative ${
                  item.direction === "right"
                    ? "md:col-start-2"
                    : "md:col-start-1"
                }`}
              >
                {/* Connector Arrow */}
                <div
                  className={`absolute hidden h-6 w-6 transform md:block ${
                    item.direction === "right"
                      ? "-left-6 -translate-y-1"
                      : "-right-6 -translate-y-1"
                  } top-1/2`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 gap-6 text-white"
                  >
                    {item.direction === "right" ? (
                      <path d="M3 12h16l-6-6 1.41-1.41L22.83 12l-8.42 8.41L13 18l6-6H3z" />
                    ) : (
                      <path d="M21 12H5l6 6-1.41 1.41L1.17 12l8.42-8.41L11 6l-6 6h16z" />
                    )}
                  </svg>
                </div>
                {/* Timeline Item */}
                <div className="bg-black p-6 text-white shadow-lg transition hover:bg-main hover:text-white">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-2xl font-bold">{item.title}</h4>
                    <p className="text-theme-color text-2xl font-extrabold">
                      {item.percentage}
                    </p>
                  </div>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
