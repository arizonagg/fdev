import SplashScreen from "@/components/SplashScreen";
import AmbientBackground from "@/components/AmbientBackground";
import FloatingDock from "@/components/FloatingDock";
import HeroSection from "@/components/HeroSection";
import TechStackMarquee from "@/components/TechStackMarquee";
import ServicesBento from "@/components/ServicesBento";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <AmbientBackground />
      <FloatingDock />

      <main className="relative z-10 max-w-6xl mx-auto px-4 pt-28 sm:pt-36 pb-16 space-y-24 sm:space-y-32">
        <HeroSection />
        <TechStackMarquee />
        <ServicesBento />
        <PortfolioShowcase />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
