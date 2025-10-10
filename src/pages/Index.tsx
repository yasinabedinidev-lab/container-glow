import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import FloatingContainers from "@/components/FloatingContainers";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingContainers />
      <Navbar />
      <Hero />
      <ServicesPreview />
    </div>
  );
};

export default Index;
