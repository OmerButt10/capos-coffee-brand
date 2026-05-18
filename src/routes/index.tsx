import { createFileRoute } from "@tanstack/react-router";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MenuSection from "@/components/Menu";
import AboutUs from "@/components/AboutUs";
import UpcomingEvents from "@/components/UpcomingEvents";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Capo's Coffee — Luxury Mobile Coffee Cart · Tri-State Area" },
      {
        name: "description",
        content:
          "Capo's Coffee brings a one-of-a-kind coffee experience to weddings, birthdays, sweet sixteens, and pop-ups across NJ, NY, and CT.",
      },
      { property: "og:title", content: "Capo's Coffee — A Marriage of Cultures, One Unforgettable Cup" },
      {
        property: "og:description",
        content: "Mobile coffee cart catering weddings, birthdays & pop-ups across the Tri-State Area.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <AnnouncementBanner />
      <Navbar />
      <main>
        <HeroBanner />
        <MenuSection />
        <AboutUs />
        <UpcomingEvents />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
