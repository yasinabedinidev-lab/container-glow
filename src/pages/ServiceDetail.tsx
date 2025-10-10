import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Database, Globe, Shield, Cpu, HardDrive, Network, Lock, Check, ArrowRight, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingContainers from "@/components/FloatingContainers";
import Footer from "@/components/Footer";

const servicesData: Record<string, any> = {
  "1": {
    title: "Docker Container استاندارد",
    description: "کانتینر آماده با تنظیمات بهینه برای پروژه‌های کوچک تا متوسط",
    icon: Container,
    price: "50,000",
    specs: {
      ram: "1 GB",
      storage: "20 GB SSD",
      cpu: "1 vCore",
      bandwidth: "1 TB",
    },
    features: [
      "پشتیبانی 24/7",
      "99.9% Uptime Guarantee",
      "بکاپ هفتگی رایگان",
      "پنل مدیریت فارسی",
      "نصب خودکار",
      "مانیتورینگ رایگان",
    ],
  },
  "2": {
    title: "Database Container",
    description: "سرویس دیتابیس با بکاپ خودکار و امنیت بالا",
    icon: Database,
    price: "120,000",
    specs: {
      ram: "4 GB",
      storage: "100 GB SSD",
      cpu: "2 vCore",
      bandwidth: "2 TB",
    },
    features: [
      "MySQL/PostgreSQL/MongoDB",
      "Backup خودکار روزانه",
      "Encryption در حال انتقال",
      "Replication پشتیبانی",
      "Query Optimization",
      "پشتیبانی اختصاصی",
    ],
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData[id || "1"] || servicesData["1"];
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <FloatingContainers />
      <Navbar />
      
      <div className="relative pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/services" className="flex items-center gap-2 text-foreground/60 hover:text-neon-blue transition-colors">
              <ArrowRight className="w-4 h-4" />
              بازگشت به سرویس‌ها
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-xl bg-neon-blue/10 flex items-center justify-center glow-neon-blue">
                  <Icon className="w-8 h-8 text-neon-blue" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-glow-blue">
                  {service.title}
                </h1>
                <p className="text-xl text-foreground/70">
                  {service.description}
                </p>
              </div>

              {/* Specs */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">مشخصات فنی</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="text-sm text-foreground/60">رم (RAM)</div>
                      <div className="text-2xl font-bold text-neon-blue">{service.specs.ram}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-foreground/60">فضای ذخیره‌سازی</div>
                      <div className="text-2xl font-bold text-neon-cyan">{service.specs.storage}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-foreground/60">پردازنده (CPU)</div>
                      <div className="text-2xl font-bold text-pastel-purple">{service.specs.cpu}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-foreground/60">پهنای باند</div>
                      <div className="text-2xl font-bold text-pastel-pink">{service.specs.bandwidth}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">امکانات و ویژگی‌ها</CardTitle>
                  <CardDescription>
                    همه چیزی که برای شروع نیاز دارید
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-neon-blue" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Order Card */}
            <div className="lg:col-span-1">
              <Card className="border-neon-blue/50 bg-card/50 backdrop-blur-sm glow-neon-blue sticky top-24">
                <CardHeader>
                  <CardTitle className="text-3xl text-center">
                    <span className="text-4xl font-bold text-glow-blue">{service.price}</span>
                    <span className="text-lg text-foreground/60"> تومان/ماه</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/login">
                    <Button className="w-full gap-2 bg-neon-blue hover:bg-neon-blue/80 text-primary-foreground glow-neon-blue" size="lg">
                      <ShoppingCart className="w-5 h-5" />
                      سفارش سرویس
                    </Button>
                  </Link>
                  
                  <div className="pt-4 border-t border-border/50 space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/60">فعال‌سازی</span>
                      <span className="font-medium text-neon-cyan">فوری</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/60">دوره پرداخت</span>
                      <span className="font-medium">ماهانه</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/60">پشتیبانی</span>
                      <span className="font-medium text-pastel-green">24/7</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-foreground/60 text-center">
                      با سفارش این سرویس، قوانین و مقررات را می‌پذیرید
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
