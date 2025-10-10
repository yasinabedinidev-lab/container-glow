import { Cloud, Zap, Shield, Gauge } from "lucide-react";
import { Card } from "./ui/card";

const PaaSInfo = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 glow-neon-cyan mb-6">
              <Cloud className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm text-neon-cyan">Platform as a Service</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-glow-blue mb-4">
              ما PaaS می‌فروشیم
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              با پلتفرم ما، نیازی به نگرانی درباره زیرساخت نیست. 
              فقط کدتان را بنویسید و ما بقیه کارها را انجام می‌دهیم.
            </p>
          </div>

          {/* Main Card */}
          <Card className="p-8 bg-gradient-to-br from-card via-card/95 to-neon-blue/5 border-neon-blue/30 glow-neon-blue relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Right Side - Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-neon-cyan">
                  چرا PaaS؟
                </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    پلتفرم به عنوان سرویس (PaaS) به شما اجازه می‌دهد تا بدون دغدغه مدیریت سرور، 
                    دیتابیس، و زیرساخت، مستقیماً روی توسعه محصول خود تمرکز کنید. 
                    ما همه چیز را برای شما آماده کرده‌ایم.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-neon-blue/20 border border-neon-blue/30 rounded-full text-sm text-neon-cyan">
                      Zero DevOps
                    </span>
                    <span className="px-3 py-1 bg-neon-cyan/20 border border-neon-cyan/30 rounded-full text-sm text-neon-blue">
                      Auto Scaling
                    </span>
                    <span className="px-3 py-1 bg-pastel-purple/20 border border-pastel-purple/30 rounded-full text-sm text-pastel-purple">
                      Pay as you go
                    </span>
                  </div>
                </div>

                {/* Left Side - Features */}
                <div className="space-y-4">
                  {[
                    {
                      icon: Zap,
                      title: "استقرار سریع",
                      desc: "در کمتر از 2 دقیقه اپلیکیشن خود را مستقر کنید",
                    },
                    {
                      icon: Shield,
                      title: "امنیت بالا",
                      desc: "SSL رایگان، فایروال و بک‌آپ اتوماتیک",
                    },
                    {
                      icon: Gauge,
                      title: "عملکرد بهینه",
                      desc: "CDN جهانی و کش هوشمند",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-neon-blue/30 transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-all">
                        <feature.icon className="w-5 h-5 text-neon-cyan" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-foreground/60 mt-1">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-3xl opacity-30" />
    </section>
  );
};

export default PaaSInfo;
