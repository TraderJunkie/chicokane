import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StreamSection from "@/components/StreamSection";
import Footer from "@/components/Footer";
import PasswordGate from "@/components/PasswordGate";

const Index = () => {
  return (
    <PasswordGate password="Deving2024">
      <div className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <StreamSection />
        <Footer />
      </div>
    </PasswordGate>
  );
};

export default Index;
