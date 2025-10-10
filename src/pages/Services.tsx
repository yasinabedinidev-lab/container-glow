import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container, Database, Globe, Shield, Cpu, HardDrive, Network, Lock, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingContainers from "@/components/FloatingContainers";

const allServices = [
  {
    id: 1,
    title: "Docker Container استاندارد",
    description: "کانتینر آماده با تنظیمات بهینه برای پروژه‌های کوچک تا متوسط",
    icon: Container,
    price: "50,000",
    features: ["1 GB RAM", "20 GB Storage", "پشتیبانی 24/7", "99.9% Uptime"],
    color: "neon-blue",
  },
  {
    id: 2,
    title: "Database Container",
    description: "سرویس دیتابیس با بکاپ خودکار و امنیت بالا",
    icon: Database,
    price: "120,000",
    features: ["4 GB RAM", "100 GB Storage", "Backup روزانه", "MySQL/PostgreSQL"],
    color: "pastel-purple",
  },
  {
    id: 3,
    title: "Web Application Container",
    description: "بستر آماده برای اجرای اپلیکیشن‌های وب با سرعت بالا",
    icon: Globe,
    price: "80,000",
    features: ["2 GB RAM", "50 GB Storage", "SSL رایگان", "CDN"],
    color: "neon-cyan",
  },
  {
    id: 4,
    title: "Security Hardened Container",
    description: "کانتینر با تنظیمات امنیتی پیشرفته برای پروژه‌های حساس",
    icon: Shield,
    price: "150,000",
    features: ["8 GB RAM", "200 GB Storage", "امنیت پیشرفته", "DDoS Protection"],
    color: "pastel-pink",
  },
  {
    id: 5,
    title: "High Performance Container",
    description: "کانتینر با منابع اختصاصی برای برنامه‌های پرترافیک",
    icon: Cpu,
    price: "200,000",
    features: ["16 GB RAM", "500 GB Storage", "CPU اختصاصی", "SSD NVMe"],
    color: "neon-blue",
  },
  {
    id: 6,
    title: "Storage Container",
    description: "فضای ذخیره‌سازی بالا برای فایل‌ها و مدیا",
    icon: HardDrive,
    price: "90,000",
    features: ["2 GB RAM", "1 TB Storage", "File Management", "Backup هفتگی"],
    color: "pastel-green",
  },
  {
    id: 7,
    title: "Network Optimized Container",
    description: "بهینه‌سازی شده برای برنامه‌های شبکه‌ای",
    icon: Network,
    price: "110,000",
    features: ["4 GB RAM", "100 GB Storage", "Low Latency", "IPv6"],
    color: "neon-cyan",
  },
  {
    id: 8,
    title: "Enterprise Container",
    description: "راهکار سازمانی با SLA و پشتیبانی اختصاصی",
    icon: Lock,
    price: "300,000",
    features: ["32 GB RAM", "1 TB Storage", "پشتیبانی VIP", "SLA 99.99%"],
    color: "pastel-purple",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingContainers />
      <Navbar />
      
      <div className="relative pt-24 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-glow-blue">
              سرویس‌های Docker
            </h1>
            <p className="text-xl text-foreground/70">
              راهکارهای کامل برای هر نیازی - از استارتاپ تا سازمان
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-neon-blue/50 transition-all duration-300 hover:scale-105 hover:glow-neon-blue">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center mb-4 group-hover:glow-neon-blue transition-all">
                        <Icon className="w-6 h-6 text-neon-blue" />
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
                      <Button className="w-full gap-2 bg-neon-blue/10 hover:bg-neon-blue hover:text-primary-foreground border border-neon-blue/50">
                        مشاهده جزئیات
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
