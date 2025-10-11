import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cpu, HardDrive, MemoryStick, Zap, Check } from "lucide-react";

const serviceTypes = [
  { id: "basic", name: "Basic", pricePerUnit: 0.5 },
  { id: "standard", name: "Standard", pricePerUnit: 1.0 },
  { id: "premium", name: "Premium", pricePerUnit: 1.5 },
  { id: "enterprise", name: "Enterprise", pricePerUnit: 2.0 },
];

const Pricing = () => {
  const [ram, setRam] = useState([4]);
  const [cpu, setCpu] = useState([2]);
  const [storage, setStorage] = useState([50]);
  const [serviceType, setServiceType] = useState("standard");

  const selectedService = serviceTypes.find(s => s.id === serviceType);
  
  const calculatePrice = () => {
    const ramPrice = ram[0] * 5;
    const cpuPrice = cpu[0] * 10;
    const storagePrice = storage[0] * 0.5;
    const basePrice = ramPrice + cpuPrice + storagePrice;
    return (basePrice * (selectedService?.pricePerUnit || 1)).toFixed(2);
  };

  const features = [
    "پشتیبانی 24/7",
    "بک‌آپ خودکار روزانه",
    "SSL رایگان",
    "پنل مدیریت اختصاصی",
    "مانیتورینگ لحظه‌ای",
    "آپتایم 99.9%",
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      
      <div className="relative pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-xl rounded-3xl"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-neon-blue/30 rounded-3xl px-8 py-6">
                  <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-neon-blue via-neon-cyan to-pastel-purple bg-clip-text text-transparent">
                    قیمت‌گذاری هوشمند
                  </h1>
                </div>
              </div>
            </div>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              پیکربندی دلخواه خود را انتخاب کنید و قیمت را به صورت لحظه‌ای مشاهده کنید
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Configuration Panel */}
            <Card className="border-neon-blue/30 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-glow-blue">پیکربندی سرویس</CardTitle>
                <CardDescription>منابع مورد نیاز خود را تنظیم کنید</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Service Type */}
                <div className="space-y-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4 text-neon-cyan" />
                    نوع سرویس
                  </label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* RAM Slider */}
                <div className="space-y-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MemoryStick className="w-4 h-4 text-neon-cyan" />
                    حافظه RAM: <span className="text-neon-blue font-bold">{ram[0]} GB</span>
                  </label>
                  <Slider
                    value={ram}
                    onValueChange={setRam}
                    min={1}
                    max={64}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 GB</span>
                    <span>64 GB</span>
                  </div>
                </div>

                {/* CPU Slider */}
                <div className="space-y-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-neon-cyan" />
                    پردازنده CPU: <span className="text-neon-blue font-bold">{cpu[0]} Core</span>
                  </label>
                  <Slider
                    value={cpu}
                    onValueChange={setCpu}
                    min={1}
                    max={16}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 Core</span>
                    <span>16 Core</span>
                  </div>
                </div>

                {/* Storage Slider */}
                <div className="space-y-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-neon-cyan" />
                    فضای ذخیره‌سازی: <span className="text-neon-blue font-bold">{storage[0]} GB</span>
                  </label>
                  <Slider
                    value={storage}
                    onValueChange={setStorage}
                    min={10}
                    max={1000}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>10 GB</span>
                    <span>1000 GB</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price Summary */}
            <div className="space-y-6">
              <Card className="border-neon-blue/30 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-glow-blue">خلاصه قیمت</CardTitle>
                  <CardDescription>محاسبه قیمت بر اساس پیکربندی شما</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-border/50">
                      <span className="text-muted-foreground">نوع سرویس</span>
                      <Badge variant="secondary">{selectedService?.name}</Badge>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border/50">
                      <span className="text-muted-foreground">RAM</span>
                      <span className="font-medium">{ram[0]} GB</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border/50">
                      <span className="text-muted-foreground">CPU</span>
                      <span className="font-medium">{cpu[0]} Core</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border/50">
                      <span className="text-muted-foreground">ذخیره‌سازی</span>
                      <span className="font-medium">{storage[0]} GB</span>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-xl rounded-2xl"></div>
                    <div className="relative bg-gradient-to-br from-neon-blue/20 to-pastel-purple/20 p-6 rounded-2xl border border-neon-blue/30">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">قیمت ماهانه</p>
                        <p className="text-5xl font-bold text-glow-blue">${calculatePrice()}</p>
                        <p className="text-sm text-muted-foreground mt-2">در ماه</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                    سفارش سرویس
                  </Button>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="border-neon-blue/30 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">امکانات شامل شده</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-neon-cyan" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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

export default Pricing;
