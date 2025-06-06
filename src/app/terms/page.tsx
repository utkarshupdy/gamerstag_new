import terms from "@/features/terms/data/termsData.json";
import Button from "@/components/PrimaryButton";
import Welcome from "@/features/terms/components/Welcome";
import Hello from "@/features/terms/components/Hello";
import Table from "@/components/CamparisonTable";
import Term from "@/features/terms/components/Term";
import WhyUs from "@/features/terms/components/WhyUs";

export default function TermsPage() {
  return (
    <div className="space-y-10 text-white">
      <Welcome />
      <Hello />
      <Table />

      <div className="md:pr-16">
        <div className="space-y-4 border-b border-primary-gray py-16 text-center tracking-widest">
          <h2 className="text-5xl font-bold uppercase">
            all in one esports tournament hosting
          </h2>
          <p className="text-sm capitalize text-primary-gray">
            &quot; why juggle multiple platforms when you can do it all in one ?
            welcome to the future of laziness &quot;
          </p>
          <div className="space-x-6">
            <Button>host now</Button>
            <Button>we host for you</Button>
          </div>
        </div>
        {terms.map(({ section, title, description }) => (
          <Term
            key={section}
            section={section}
            title={title}
            description={description}
          />
        ))}
      </div>

      <WhyUs />
    </div>
  );
}
