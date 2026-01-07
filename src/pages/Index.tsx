import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StreamSection from "@/components/StreamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <StreamSection />
      <Footer />
    </div>
  );
};

export default Index;
