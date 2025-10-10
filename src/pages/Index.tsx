import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import FloatingContainers from "@/components/FloatingContainers";
import PaaSInfo from "@/components/PaaSInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingContainers />
      <Navbar />
      <Hero />
      <PaaSInfo />
      <ServicesPreview />
    </div>
  );
};

export default Index;
