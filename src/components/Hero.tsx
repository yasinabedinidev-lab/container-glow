import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Container, Zap, Shield, Gauge, CheckCircle, Sparkles, Database, Server } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-16">{/* Removed py-32 and px-4 since it's now inside a Card with padding */}
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Icons */}
        <Container 
          className="absolute top-32 left-20 w-16 h-16 text-red-primary/20 animate-float-slow"
          strokeWidth={1}
        />
        <Database 
          className="absolute top-48 right-32 w-14 h-14 text-blue-accent/20 animate-float"
          strokeWidth={1}
          style={{ animationDelay: "1s" }}
        />
        <Shield 
          className="absolute bottom-40 left-1/4 w-20 h-20 text-purple-accent/20 animate-float-slow"
          strokeWidth={1}
          style={{ animationDelay: "2s" }}
        />
        <Server 
          className="absolute bottom-32 right-1/4 w-16 h-16 text-red-light/20 animate-float"
          strokeWidth={1}
          style={{ animationDelay: "0.5s" }}
        />
        
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-primary/5 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-accent/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Right Side - Content */}
            <div className="space-y-8 text-center lg:text-right order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-primary/10 to-purple-accent/10 border border-red-primary/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-red-primary animate-glow-pulse" />
                <span className="text-sm font-medium text-red-primary">بدون نیاز به دانش فنی</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                  <span className="block text-foreground">سرویس‌های ابری</span>
                  <span className="block mt-2 bg-gradient-accent bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                    در یک کلیک
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  فقط بگو چی می‌خوای، ما بقیه‌ش رو انجام میدیم.
                  <br />
                  <span className="text-red-primary font-semibold">بدون کد، بدون پیچیدگی، بدون سردرد.</span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link to="/services">
                  <Button 
                    size="lg" 
                    className="gap-2 bg-gradient-red-dark hover:scale-105 px-8 py-6 text-lg text-white shadow-2xl hover:shadow-red-primary/40 transition-all group border-0"
                  >
                    <Sparkles className="w-5 h-5 group-hover:animate-glow-pulse" />
                    شروع رایگان
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="gap-2 px-8 py-6 text-lg border-2 border-red-primary bg-transparent text-red-primary hover:bg-red-primary hover:text-white hover:shadow-lg hover:shadow-red-primary/50 transition-all relative overflow-hidden group"
                  >
                    <span className="relative z-10">مشاهده سرویس‌ها</span>
                    <div className="absolute inset-0 bg-red-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-6">
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
                  <CheckCircle className="w-5 h-5 text-red-primary" />
                  <span className="text-sm text-foreground/80 font-medium">راه‌اندازی در ۳۰ ثانیه</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
                  <CheckCircle className="w-5 h-5 text-red-primary" />
                  <span className="text-sm text-foreground/80 font-medium">+۵۰۰۰ کاربر فعال</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-border/50">
                  <CheckCircle className="w-5 h-5 text-red-primary" />
                  <span className="text-sm text-foreground/80 font-medium">۹۹.۹٪ آپتایم</span>
                </div>
              </div>
            </div>

            {/* Left Side - Visual */}
            <div className="relative h-[400px] lg:h-[500px] order-1 lg:order-2 flex items-center justify-center">
              {/* Central Element */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-primary/20 to-purple-accent/20 rounded-3xl blur-3xl animate-glow-pulse" />
                
                {/* Main Card */}
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl border-2 border-red-primary/30 flex flex-col items-center justify-center animate-float shadow-2xl">
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-lg">
                      <Container className="w-12 h-12 text-white" strokeWidth={2} />
                    </div>
                    <Sparkles className="w-6 h-6 text-red-light absolute -top-2 -right-2 animate-glow-pulse" />
                  </div>
                  
                  {/* Text */}
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">Docker City</h3>
                  <p className="text-sm text-foreground/60 text-center px-6">پلتفرم کانتینری پیشرفته</p>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-accent/30 to-red-primary/30 backdrop-blur-sm border border-blue-accent/40 rotate-12 animate-float-slow" />
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-accent/30 to-red-primary/30 backdrop-blur-sm border border-purple-accent/40 -rotate-12 animate-float" style={{ animationDelay: '1s' }} />
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute top-8 right-8 w-32 h-20 rounded-xl bg-card/80 backdrop-blur-xl border border-border shadow-xl flex flex-col items-center justify-center animate-float-slow p-3">
                <Database className="w-8 h-8 text-blue-accent mb-1" strokeWidth={1.5} />
                <span className="text-xs font-medium text-foreground/80">PostgreSQL</span>
              </div>
              
              <div className="absolute bottom-12 left-8 w-32 h-20 rounded-xl bg-card/80 backdrop-blur-xl border border-border shadow-xl flex flex-col items-center justify-center animate-float p-3" style={{ animationDelay: '0.5s' }}>
                <Zap className="w-8 h-8 text-red-primary mb-1" strokeWidth={1.5} />
                <span className="text-xs font-medium text-foreground/80">Redis</span>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-32 h-20 rounded-xl bg-card/80 backdrop-blur-xl border border-border shadow-xl flex flex-col items-center justify-center animate-float-slow p-3" style={{ animationDelay: '1s' }}>
                <Shield className="w-8 h-8 text-purple-accent mb-1" strokeWidth={1.5} />
                <span className="text-xs font-medium text-foreground/80">Security</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
