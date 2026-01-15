import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import StreamSection from "@/components/StreamSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PasswordGate from "@/components/PasswordGate";

const Index = () => {
  return (
    <PasswordGate password="Deving2024">
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <VideoSection />
        <StreamSection />
        <Footer />
      </div>
    </PasswordGate>
  );
};

export default Index;
