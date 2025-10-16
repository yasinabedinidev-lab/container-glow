import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Container, Zap, Sparkles, Shield, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Right Side - Content */}
          <div className="space-y-8 text-center lg:text-right order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">پلتفرم Docker حرفه‌ای</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-l from-primary via-neon-cyan to-primary bg-clip-text text-transparent">
                Docker را ساده کنید
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              سرویس‌های Docker حرفه‌ای با استقرار سریع، امنیت بالا و مدیریت آسان
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/services">
                <Button size="lg" className="gap-2 w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  مشاهده سرویس‌ها
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto border-primary/50 hover:bg-primary/10">
                  <Container className="w-5 h-5" />
                  شروع رایگان
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: "99.9%", label: "آپ‌تایم", icon: Shield },
                { value: "+5000", label: "کاربر فعال", icon: Sparkles },
                { value: "24/7", label: "پشتیبانی", icon: Rocket },
              ].map((stat, index) => (
                <div key={index} className="space-y-2 text-center lg:text-right">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Side - Visual Element */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl">
                <div className="h-full flex flex-col justify-between">
                  {/* Docker Logo Area */}
                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/30">
                      <Container className="w-16 h-16 text-primary" />
                    </div>
                  </div>

                  {/* Feature Pills */}
                  <div className="space-y-3">
                    {[
                      { icon: Zap, text: "استقرار در چند ثانیه", color: "primary" },
                      { icon: Shield, text: "امنیت پیشرفته", color: "neon-cyan" },
                      { icon: Rocket, text: "عملکرد بالا", color: "accent" }
                    ].map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-4"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${feature.color}/10 border border-${feature.color}/30`}>
                          <feature.icon className={`w-5 h-5 text-${feature.color}`} />
                        </div>
                        <span className="text-sm font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-cyan/20 rounded-2xl blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
