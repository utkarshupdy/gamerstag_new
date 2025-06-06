import Explore from "../medium/Explore";
import GetStarted from "../medium/GetStarted";
import World from "../medium/World";

export default function FeaturesBottom() {
  return (
    <main className="bg-primary-black overflow-hidden">
      <section className="relative">
        <div className="gradient-03 z-0" />
        <Explore />
      </section>
      <section className="relative">
        <GetStarted />
        <div className="gradient-03 z-0" />
        <World />
      </section>
      <section className="relative">
        <div className="gradient-03 z-0" />
      </section>
    </main>
  );
}
