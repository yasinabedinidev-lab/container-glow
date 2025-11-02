import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import FloatingContainers from "@/components/FloatingContainers";
import PaaSInfo from "@/components/PaaSInfo";
import N8NPromo from "@/components/N8NPromo";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PaaSInfo />
      <ServicesPreview />
      <N8NPromo />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default Index;
