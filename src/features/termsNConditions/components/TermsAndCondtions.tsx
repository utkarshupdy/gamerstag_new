import termsData from "../data/terms.json";

export default function TermsAndConditions() {
  const data = termsData;

  return (
    <div className="bg-gray-900 text-white">
      {/* Header Section */}
      <div
        className="relative flex h-64 items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${data.headerImage})` }}
      >
        <h1 className="rounded-md bg-black/70 px-4 py-2 text-3xl font-bold text-red-500 md:text-5xl">
          {data.headerTitle}
        </h1>
      </div>

      {/* Introduction */}
      <div className="mx-auto max-w-4xl px-6 py-8 md:px-12 md:py-10">
        <p className="text-lg leading-relaxed text-gray-300">
          {data.introduction}
        </p>
      </div>

      {/* Sections */}
      <div className="mx-auto max-w-4xl px-6 py-4 md:px-12 md:py-6">
        {data.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-green-400">
              {section.title}
            </h2>

            {Array.isArray(section.content) ? (
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                {section.content.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="leading-relaxed text-gray-300">{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
