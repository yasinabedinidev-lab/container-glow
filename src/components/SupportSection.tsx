import { Headphones, MessageSquare, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const SupportSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-6 text-center md:text-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <Headphones className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">پشتیبانی ۲۴/۷</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                نیاز به
                <br />
                <span className="bg-gradient-to-l from-primary via-neon.cyan to-accent bg-clip-text text-transparent">
                  کمک داری؟
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                تیم ما همیشه آماده کمک به تو هستند. هر سوال یا مشکلی داری، فقط بهمون بگو.
              </p>

              {/* Features */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/80">پاسخ در کمتر از ۱۵ دقیقه</span>
                </div>
                
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-xl bg-neon.cyan/10 border border-neon.cyan/30 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-neon.cyan" />
                  </div>
                  <span className="text-foreground/80">چت آنلاین و تیکت</span>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/support">
                  <Button size="lg" className="gap-2 glow-neon-blue text-lg px-8">
                    <MessageSquare className="w-5 h-5" />
                    شروع گفتگو
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Visual Shapes */}
            <div className="relative h-96 flex items-center justify-center">
              {/* Central Shape */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl animate-glow-pulse" />
                <div className="relative w-48 h-48 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border-2 border-primary/40 flex items-center justify-center -rotate-6 animate-float">
                  <Headphones className="w-20 h-20 text-primary rotate-6" strokeWidth={1.5} />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-0 right-0 w-28 h-28 rounded-2xl bg-gradient-to-br from-neon.cyan/30 to-primary/30 backdrop-blur-sm border border-neon.cyan/40 rotate-12 animate-float-slow flex items-center justify-center">
                <MessageSquare className="w-12 h-12 text-neon.cyan -rotate-12" strokeWidth={1.5} />
              </div>
              
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-2xl bg-gradient-to-br from-accent/30 to-pastel.purple/30 backdrop-blur-sm border border-accent/40 -rotate-12 animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <Clock className="w-14 h-14 text-accent rotate-12" strokeWidth={1.5} />
              </div>

              {/* Small Shapes */}
              <div className="absolute top-20 left-10 w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-neon.cyan/20 backdrop-blur-sm border border-primary/30 rotate-45 animate-float-slow" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-20 right-10 w-16 h-16 rounded-lg bg-gradient-to-br from-pastel.purple/20 to-accent/20 backdrop-blur-sm border border-pastel.purple/30 -rotate-12 animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default SupportSection;
