import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Container, Zap, Shield, Gauge, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Right Side - Content */}
          <div className="space-y-8 text-center lg:text-right order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">بدون نیاز به دانش فنی</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              هر سرویسی که
              <br />
              <span className="text-glow-cyan bg-gradient-to-l from-primary via-neon.cyan to-accent bg-clip-text text-transparent">
                نیاز داری
              </span>
              <br />
              در چند کلیک
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              فقط کافیه بگی چی می‌خوای - ما بقیه‌ش رو انجام میدیم.
              <br />
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

          {/* Left Side - Visual Shapes */}
          <div className="relative h-[500px] order-1 lg:order-2">
            {/* Central Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-64 h-64 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 rotate-12 animate-float">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Container className="w-24 h-24 text-primary" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Top Left Shape */}
            <div className="absolute top-0 left-0 w-32 h-32 rounded-2xl bg-gradient-to-br from-neon.cyan/20 to-primary/20 backdrop-blur-sm border border-neon.cyan/30 -rotate-12 animate-float-slow flex items-center justify-center">
              <Zap className="w-12 h-12 text-neon.cyan" strokeWidth={1.5} />
            </div>

            {/* Top Right Shape */}
            <div className="absolute top-20 right-0 w-24 h-24 rounded-xl bg-gradient-to-br from-accent/20 to-pastel.purple/20 backdrop-blur-sm border border-accent/30 rotate-45 animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
              <Shield className="w-10 h-10 text-accent -rotate-45" strokeWidth={1.5} />
            </div>

            {/* Bottom Right Shape */}
            <div className="absolute bottom-10 right-10 w-28 h-28 rounded-2xl bg-gradient-to-br from-pastel.green/20 to-neon.cyan/20 backdrop-blur-sm border border-pastel.green/30 -rotate-6 animate-float-slow flex items-center justify-center" style={{ animationDelay: '2s' }}>
              <Gauge className="w-11 h-11 text-pastel.green" strokeWidth={1.5} />
            </div>

            {/* Bottom Left Small Circle */}
            <div className="absolute bottom-0 left-20 w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm border border-primary/40 animate-float" style={{ animationDelay: '0.5s' }} />

            {/* Floating Orb - Background */}
            <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-glow-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
          </div>

        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
