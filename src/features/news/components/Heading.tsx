export default function Heading() {
  return (
    <div className="mb-20 flex items-center justify-center">
      <div className="w-full items-center justify-between px-10 lg:flex lg:w-[85%]">
        <div>
          <span className="text-red-500">DISCOVER OUR CASES</span>
          <h1 className="text-2xl font-semibold text-white md:text-4xl lg:text-5xl">
            Latest News
          </h1>
        </div>

        <div className="mt-8 flex text-white lg:mt-0">
          <div className="border-1 flex flex-wrap items-center gap-12 rounded-full border border-solid border-white border-opacity-30 px-10 py-6 font-medium uppercase md:px-12 md:py-3">
            <div className="relative cursor-pointer text-sm text-red-500 text-opacity-70">
              <p>All</p>
              <span className="absolute right-0 top-0 flex h-4 w-4 -translate-y-1/2 translate-x-4 transform items-center justify-center rounded-full text-sm">
                09
              </span>
            </div>

            <div className="relative cursor-pointer text-sm text-white text-opacity-70">
              <p>Esports</p>
              <span className="absolute right-0 top-0 flex h-4 w-4 -translate-y-1/2 translate-x-4 transform items-center justify-center rounded-full text-sm">
                20
              </span>
            </div>

            <div className="relative cursor-pointer text-sm text-white text-opacity-70">
              <p>AI</p>
              <span className="absolute right-0 top-0 flex h-4 w-4 -translate-y-1/2 translate-x-4 transform items-center justify-center rounded-full text-sm">
                02
              </span>
            </div>

            <div className="relative cursor-pointer text-sm text-white text-opacity-70">
              <p>Gaming</p>
              <span className="absolute right-0 top-0 flex h-4 w-4 -translate-y-1/2 translate-x-4 transform items-center justify-center rounded-full text-sm">
                94
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
