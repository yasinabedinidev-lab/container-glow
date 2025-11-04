import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import FloatingDockerIcons from "@/components/FloatingDockerIcons";
import PaaSInfo from "@/components/PaaSInfo";
import N8NPromo from "@/components/N8NPromo";
import Newsletter from "@/components/Newsletter";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingDockerIcons />
      <Navbar />
      <Hero />
      <PaaSInfo />
      <ServicesPreview />
      <N8NPromo />
      <Newsletter />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default Index;
