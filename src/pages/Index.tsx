import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import FloatingDockerIcons from "@/components/FloatingDockerIcons";
import PaaSInfo from "@/components/PaaSInfo";
import N8NPromo from "@/components/N8NPromo";
import LatestNews from "@/components/LatestNews";
import Newsletter from "@/components/Newsletter";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingDockerIcons />
      <Navbar />
      
      {/* Hero - No Box */}
      <Hero />
      
      {/* PaaS Info - With Box */}
      <div className="py-12 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <Card className="bg-card/80 backdrop-blur-xl border-primary/20 p-8 md:p-12">
            <PaaSInfo />
          </Card>
        </div>
      </div>
      
      {/* Services - No Box */}
      <ServicesPreview />
      
      {/* N8N Promo - With Box */}
      <div className="py-12 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto px-4">
          <Card className="bg-card/80 backdrop-blur-xl border-accent/20 p-8 md:p-12">
            <N8NPromo />
          </Card>
        </div>
      </div>
      
      {/* Latest News - No Box */}
      <LatestNews />
      
      {/* Newsletter - With Box (already has gradient bg) */}
      <Newsletter />
      
      {/* Support Section - With Box */}
      <div className="py-12 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <Card className="bg-card/80 backdrop-blur-xl border-primary/20 p-8 md:p-12">
            <SupportSection />
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
