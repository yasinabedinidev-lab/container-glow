import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Container, Zap, Shield, Gauge, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20">
      {/* Background Shapes - Behind Everything */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <Container 
          className="absolute top-32 left-20 w-24 h-24 text-primary/40 animate-float-slow"
          strokeWidth={1}
        />
        <Zap 
          className="absolute top-48 right-32 w-20 h-20 text-neon.cyan/40 animate-float"
          strokeWidth={1}
          style={{ animationDelay: "1s" }}
        />
        <Shield 
          className="absolute bottom-40 left-1/4 w-28 h-28 text-accent/40 animate-float-slow"
          strokeWidth={1}
          style={{ animationDelay: "2s" }}
        />
        <Gauge 
          className="absolute bottom-32 right-1/4 w-24 h-24 text-pastel.purple/40 animate-float"
          strokeWidth={1}
          style={{ animationDelay: "0.5s" }}
        />
        
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-5xl mx-auto p-8 md:p-12 lg:p-16 bg-card/80 backdrop-blur-xl border-primary/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Right Side - Content */}
            <div className="space-y-8 text-center lg:text-right order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">بدون نیاز به دانش فنی</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                هر سرویسی که
                <br />
                <span className="bg-gradient-to-l from-primary via-neon.cyan to-accent bg-clip-text text-transparent">
                  نیاز داری
                </span>
                <br />
                در چند کلیک
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                فقط کافیه بگی چی می‌خوای - ما بقیه‌ش رو انجام میدیم.
                بدون کد، بدون پیچیدگی، بدون سردرد.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/services">
                  <Button size="lg" className="gap-2 glow-neon-blue text-lg px-8">
                    شروع کن - رایگانه
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
                    مشاهده سرویس‌ها
                  </Button>
                </Link>
              </div>

              {/* Simple Stats */}
              <div className="flex gap-8 justify-center lg:justify-start pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">راه‌اندازی در ۳۰ ثانیه</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">+۵۰۰۰ کاربر فعال</span>
                </div>
              </div>
            </div>

            {/* Left Side - Simple Visual */}
            <div className="relative h-80 lg:h-96 order-1 lg:order-2 flex items-center justify-center">
              {/* Central Icon with Glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-glow-pulse" />
                <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border-2 border-primary/40 flex items-center justify-center animate-float">
                  <Container className="w-20 h-20 lg:w-28 lg:h-28 text-primary" strokeWidth={1.5} />
                </div>
              </div>

              {/* Orbiting Small Icons */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-neon.cyan/20 to-primary/20 backdrop-blur-sm border border-neon.cyan/30 flex items-center justify-center animate-float-slow">
                <Zap className="w-7 h-7 text-neon.cyan" strokeWidth={1.5} />
              </div>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-pastel.purple/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Shield className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>
              
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-pastel.green/20 to-neon.cyan/20 backdrop-blur-sm border border-pastel.green/30 flex items-center justify-center animate-float-slow" style={{ animationDelay: '0.5s' }}>
                <Gauge className="w-7 h-7 text-pastel.green" strokeWidth={1.5} />
              </div>
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
