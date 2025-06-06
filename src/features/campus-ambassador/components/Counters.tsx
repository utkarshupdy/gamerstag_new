import CountUp from "react-countup";
import counters from "../data/counters.json";

export default function Counter() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((counter, index) => (
            <div key={index} className="rounded-md bg-white p-6 shadow-md">
              <div>
                <h2 className="text-4xl font-bold text-main">
                  {/* React CountUp for number animation */}
                  <CountUp
                    start={0}
                    end={counter.value}
                    duration={1} // Animation duration in seconds
                    decimals={
                      typeof counter.value === "number" &&
                      counter.value % 1 !== 0
                        ? 2
                        : 0
                    }
                    separator=","
                  />
                </h2>
                <p className="mt-2 text-gray-600">{counter.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
