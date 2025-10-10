import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Container, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 glow-neon-blue">
            <Zap className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-neon-cyan">سرویس‌های Docker حرفه‌ای</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-glow-blue leading-tight">
            قدرت Container ها را
            <br />
            <span className="gradient-neon bg-clip-text text-transparent">
              در اختیار بگیرید
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            با سرویس‌های Docker ما، برنامه‌های خود را با سرعت و امنیت بالا مستقر کنید.
            از کانتینرهای آماده تا راهکارهای سفارشی.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/services">
              <Button size="lg" className="gap-2 glow-neon-blue bg-neon-blue hover:bg-neon-blue/80 text-primary-foreground">
                مشاهده سرویس‌ها
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="gap-2 border-neon-cyan/50 hover:bg-neon-cyan/10">
                <Container className="w-5 h-5 text-neon-cyan" />
                شروع رایگان
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            {[
              { value: "99.9%", label: "آپ‌تایم" },
              { value: "+5000", label: "کاربر فعال" },
              { value: "24/7", label: "پشتیبانی" },
            ].map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold text-glow-cyan">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/20 rounded-full blur-3xl opacity-20 animate-glow-pulse" />
    </section>
  );
};

export default Hero;
