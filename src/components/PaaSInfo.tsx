import { Cloud, Zap, Shield, Gauge } from "lucide-react";

const PaaSInfo = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Visual Shapes */}
            <div className="relative h-96 flex items-center justify-center order-2 md:order-1">
              {/* Central Shape */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-neon.cyan/30 to-primary/30 rounded-full blur-3xl animate-glow-pulse" />
                <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-neon.cyan/20 to-primary/20 backdrop-blur-sm border-2 border-neon.cyan/40 flex items-center justify-center animate-float">
                  <Cloud className="w-24 h-24 text-neon.cyan" strokeWidth={1.5} />
                </div>
              </div>

              {/* Top Shape */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm border border-primary/40 rotate-12 animate-float-slow flex items-center justify-center">
                <Zap className="w-9 h-9 text-primary -rotate-12" strokeWidth={1.5} />
              </div>

              {/* Right Shape */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/30 to-pastel.purple/30 backdrop-blur-sm border border-accent/40 -rotate-12 animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <Shield className="w-10 h-10 text-accent rotate-12" strokeWidth={1.5} />
              </div>

              {/* Bottom Shape */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-28 rounded-2xl bg-gradient-to-br from-pastel.green/30 to-neon.cyan/30 backdrop-blur-sm border border-pastel.green/40 rotate-6 animate-float-slow flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                <Gauge className="w-11 h-11 text-pastel.green -rotate-6" strokeWidth={1.5} />
              </div>

              {/* Small Corner Shapes */}
              <div className="absolute top-10 left-10 w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-neon.cyan/20 backdrop-blur-sm border border-primary/30 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-10 right-10 w-16 h-16 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/30 -rotate-12 animate-float-slow" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 text-center md:text-right order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon.cyan/10 border border-neon.cyan/30">
                <Cloud className="w-4 h-4 text-neon.cyan" />
                <span className="text-sm text-neon.cyan font-medium">Platform as a Service</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                فقط بگو چی می‌خوای
                <br />
                <span className="bg-gradient-to-l from-neon.cyan via-primary to-accent bg-clip-text text-transparent">
                  بقیه‌ش با ماست
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                هیچ نیازی به دانش فنی نداری. فقط بهمون بگو چه سرویسی می‌خوای - 
                ما همه چیز رو آماده می‌کنیم، از نصب تا پشتیبانی.
              </p>

              {/* Features */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 justify-center md:justify-start group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/80">راه‌اندازی در چند دقیقه</span>
                </div>
                
                <div className="flex items-center gap-3 justify-center md:justify-start group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground/80">امنیت و بک‌آپ خودکار</span>
                </div>
                
                <div className="flex items-center gap-3 justify-center md:justify-start group">
                  <div className="w-10 h-10 rounded-xl bg-pastel.green/10 border border-pastel.green/30 flex items-center justify-center group-hover:bg-pastel.green/20 transition-colors">
                    <Gauge className="w-5 h-5 text-pastel.green" />
                  </div>
                  <span className="text-foreground/80">عملکرد بهینه و سریع</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon.cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default PaaSInfo;
