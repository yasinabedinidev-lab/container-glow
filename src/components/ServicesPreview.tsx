import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Container, Database, Globe, Shield, ArrowLeft } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Docker Container استاندارد",
    description: "کانتینر آماده با تنظیمات بهینه برای پروژه‌های کوچک تا متوسط",
    icon: Container,
    price: "50,000",
    features: ["1 GB RAM", "20 GB Storage", "پشتیبانی 24/7"],
    color: "neon-blue",
  },
  {
    id: 2,
    title: "Database Container",
    description: "سرویس دیتابیس با بکاپ خودکار و امنیت بالا",
    icon: Database,
    price: "120,000",
    features: ["4 GB RAM", "100 GB Storage", "Backup روزانه"],
    color: "pastel-purple",
  },
  {
    id: 3,
    title: "Web Application Container",
    description: "بستر آماده برای اجرای اپلیکیشن‌های وب با سرعت بالا",
    icon: Globe,
    price: "80,000",
    features: ["2 GB RAM", "50 GB Storage", "SSL رایگان"],
    color: "neon-cyan",
  },
  {
    id: 4,
    title: "Security Hardened Container",
    description: "کانتینر با تنظیمات امنیتی پیشرفته برای پروژه‌های حساس",
    icon: Shield,
    price: "150,000",
    features: ["8 GB RAM", "200 GB Storage", "امنیت پیشرفته"],
    color: "pastel-pink",
  },
];

const ServicesPreview = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-glow-blue">
            سرویس‌های ما
          </h2>
          <p className="text-lg text-foreground/70">
            از کانتینرهای ساده تا راهکارهای پیچیده، همه چیز آماده است
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-neon-blue/50 transition-all duration-300 hover:scale-105 hover:glow-neon-blue">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:glow-neon-blue transition-all`}>
                      <Icon className={`w-6 h-6 text-${service.color}`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-neon-blue transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-foreground/60">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-neon-blue">
                          {service.price}
                        </span>
                        <span className="text-sm text-foreground/60">تومان/ماه</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button size="lg" variant="outline" className="gap-2 border-neon-blue/50 hover:bg-neon-blue/10 glow-neon-blue">
              مشاهده تمام سرویس‌ها
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
