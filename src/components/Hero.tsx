import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Container, Zap, Shield, Gauge, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 px-4 md:px-8">
      {/* Background Shapes - Behind Everything */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <Container 
          className="absolute top-32 left-20 w-24 h-24 text-red-primary/40 animate-float-slow"
          strokeWidth={1}
        />
        <Zap 
          className="absolute top-48 right-32 w-20 h-20 text-blue-accent/40 animate-float"
          strokeWidth={1}
          style={{ animationDelay: "1s" }}
        />
        <Shield 
          className="absolute bottom-40 left-1/4 w-28 h-28 text-purple-accent/40 animate-float-slow"
          strokeWidth={1}
          style={{ animationDelay: "2s" }}
        />
        <Gauge 
          className="absolute bottom-32 right-1/4 w-24 h-24 text-red-light/40 animate-float"
          strokeWidth={1}
          style={{ animationDelay: "0.5s" }}
        />
        
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-7xl mx-auto p-6 md:p-10 lg:p-12 bg-card/80 backdrop-blur-xl border-primary/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Right Side - Content */}
            <div className="space-y-6 text-center lg:text-right order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs text-primary">بدون نیاز به دانش فنی</span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                هر سرویسی که
                <br />
                <span className="text-glow-red bg-gradient-accent bg-clip-text text-transparent">
                  نیاز داری
                </span>
                <br />
                در چند کلیک
              </h1>

              <p className="text-base md:text-lg text-foreground/70 max-w-lg mx-auto lg:mx-0">
                فقط کافیه بگی چی می‌خوای - ما بقیه‌ش رو انجام میدیم.
                بدون کد، بدون پیچیدگی، بدون سردرد.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link to="/services">
                  <Button size="lg" className="gap-2 glow-red bg-gradient-red-dark hover:opacity-90 px-6 text-white">
                    شروع کن - رایگانه
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="gap-2 px-6">
                    مشاهده سرویس‌ها
                  </Button>
                </Link>
              </div>

              {/* Simple Stats */}
              <div className="flex gap-6 justify-center lg:justify-start pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-xs text-foreground/60">راه‌اندازی در ۳۰ ثانیه</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-xs text-foreground/60">+۵۰۰۰ کاربر فعال</span>
                </div>
              </div>
            </div>

            {/* Left Side - Simple Visual */}
            <div className="relative h-64 lg:h-80 order-1 lg:order-2 flex items-center justify-center">
              {/* Central Icon with Glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-primary/30 to-purple-accent/30 rounded-full blur-3xl animate-glow-pulse" />
                <div className="relative w-40 h-40 lg:w-52 lg:h-52 rounded-full bg-gradient-to-br from-red-primary/20 to-purple-accent/20 backdrop-blur-sm border-2 border-red-primary/40 flex items-center justify-center animate-float">
                  <Container className="w-16 h-16 lg:w-20 lg:h-20 text-red-primary" strokeWidth={1.5} />
                </div>
              </div>

              {/* Orbiting Small Icons */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-accent/20 to-red-primary/20 backdrop-blur-sm border border-blue-accent/30 flex items-center justify-center animate-float-slow">
                <Zap className="w-5 h-5 text-blue-accent" strokeWidth={1.5} />
              </div>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-red-primary/20 to-purple-accent/20 backdrop-blur-sm border border-red-primary/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Shield className="w-5 h-5 text-red-primary" strokeWidth={1.5} />
              </div>
              
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-accent/20 to-blue-accent/20 backdrop-blur-sm border border-purple-accent/30 flex items-center justify-center animate-float-slow" style={{ animationDelay: '0.5s' }}>
                <Gauge className="w-5 h-5 text-purple-accent" strokeWidth={1.5} />
              </div>
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
