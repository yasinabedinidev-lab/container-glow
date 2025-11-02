import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Workflow, Zap, ArrowLeft, TrendingUp, Package } from "lucide-react";
import n8nLogo from "@/assets/n8n-logo.png";

const N8NPromo = () => {
  return (
    <section className="container mx-auto px-4 py-24 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-card via-card to-primary/5">
        {/* Decorative Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <CardContent className="relative z-10 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Visual */}
            <div className="relative h-80 flex items-center justify-center order-2 md:order-1">
              {/* Central Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-30 animate-glow-pulse" />
                <div className="relative w-48 h-48 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border-2 border-primary/40 flex items-center justify-center rotate-6 animate-float p-6">
                  <img src={n8nLogo} alt="n8n" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-0 left-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/30 to-primary/30 backdrop-blur-sm border border-accent/40 -rotate-12 animate-float-slow flex items-center justify-center">
                <Zap className="w-10 h-10 text-accent" strokeWidth={1.5} />
              </div>
              
              <div className="absolute bottom-0 right-0 w-28 h-28 rounded-2xl bg-gradient-to-br from-primary/30 to-neon.cyan/30 backdrop-blur-sm border border-primary/40 rotate-12 animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <Package className="w-11 h-11 text-primary" strokeWidth={1.5} />
              </div>

              <div className="absolute top-1/2 right-0 w-20 h-20 rounded-xl bg-gradient-to-br from-pastel.purple/30 to-accent/30 backdrop-blur-sm border border-pastel.purple/40 rotate-45 animate-float-slow flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                <TrendingUp className="w-8 h-8 text-pastel.purple -rotate-45" strokeWidth={1.5} />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 text-center md:text-right order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <Workflow className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">n8n Marketplace</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-l from-primary via-neon.cyan to-accent bg-clip-text text-transparent">
                  بخر، بفروش، اتوماتیک کن
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                با n8n marketplace، workflow های آماده رو بخر یا workflow های خودت رو بفروش.
                هزاران اتوماسیون آماده منتظرتن.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm">نصب در یک کلیک</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-sm">کسب درآمد</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neon.cyan/10 border border-neon.cyan/20">
                  <Package className="w-4 h-4 text-neon.cyan" />
                  <span className="text-sm">+۱۰۰۰ Workflow</span>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="gap-2 glow-neon-blue text-lg px-8">
                  مشاهده marketplace
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default N8NPromo;
