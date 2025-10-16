import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Container, CheckCircle, Zap, Shield, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const Hero = () => {
  const slides = [heroSlide1, heroSlide2, heroSlide3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Right side - Content */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* Badge - Centered */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">DockerCity - شهر کانتینرهای شما</span>
              </div>
            </div>

            {/* Heading - Right aligned */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-right">
              <span className="text-primary">Docker</span> را ساده کنید
            </h1>

            {/* Description - Right aligned */}
            <p className="text-base md:text-lg text-foreground/70 text-right">
              سرویس‌های Docker حرفه‌ای با استقرار سریع، امنیت بالا و مدیریت آسان
            </p>

            {/* Features - Centered */}
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-foreground/80">استقرار در ۵ دقیقه</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-foreground/80">امنیت تضمین شده</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-foreground/80">عملکرد بالا</span>
              </div>
            </div>

            {/* CTA Buttons - Centered */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/services">
                <Button size="lg" className="gap-2 min-w-[180px]">
                  مشاهده سرویس‌ها
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="gap-2 min-w-[180px]">
                  <Container className="w-4 h-4" />
                  شروع رایگان
                </Button>
              </Link>
            </div>

            {/* Stats - Centered */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto pt-8">
              {[
                { value: "99.9%", label: "آپ‌تایم" },
                { value: "+5000", label: "کاربر" },
                { value: "24/7", label: "پشتیبانی" },
              ].map((stat, index) => (
                <div key={index} className="space-y-1 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Left side - Image Slider */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="rounded-3xl overflow-hidden border-2 border-primary/30 bg-card shadow-2xl aspect-square">
                <img
                  src={slides[currentSlide]}
                  alt={`Docker service visualization ${currentSlide + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  key={currentSlide}
                />
              </div>
              
              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index ? "bg-primary w-6" : "bg-primary/30 w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-30" />
    </section>
  );
};

export default Hero;
