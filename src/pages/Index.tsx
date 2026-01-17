import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import StreamSection from "@/components/StreamSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <GallerySection />
      <StreamSection />
      <Footer />
    </div>
  );
};

export default Index;
