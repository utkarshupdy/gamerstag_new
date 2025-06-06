//All Components are imported here
import ContactDetails from "@/features/contact/components/ContactDetails";
import ContactHeroSection from "@/features/contact/components/ContactHeroSection";
import SendMessage from "@/features/contact/components/SendMessage";

export default function Contact() {
  return (
    <div className="flex justify-center pb-[140px]">
      <div className="w-[1280px]">
        <ContactHeroSection />

        <div className="mx-8 space-y-16 md:mx-32 lg:mx-10 lg:flex lg:justify-between lg:space-y-0 xl:mx-10 2xl:mx-0">
          <ContactDetails />
          <SendMessage />
        </div>
      </div>
    </div>
  );
}
