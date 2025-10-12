import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  Globe, 
  Key, 
  User, 
  RefreshCw, 
  Activity,
  HardDrive,
  Cpu,
  Network,
  Calendar,
  TrendingUp,
  TrendingDown,
  Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingContainers from "@/components/FloatingContainers";
import Footer from "@/components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ServiceManagement = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [isResetting, setIsResetting] = useState(false);

  // Mock service data - replace with real data from backend
  const service = {
    id: id,
    name: "Web Application Container",
    domain: "myapp.example.com",
    username: "admin_user",
    password: "••••••••••••",
    status: "فعال",
    createdDate: "1402/08/15",
    expiryDate: "1403/12/15",
    ram: { used: 1.2, total: 2 },
    cpu: { used: 45, total: 100 },
    storage: { used: 28, total: 50 },
    bandwidth: { used: 450, total: 1000 },
  };

  const handleResetPassword = async () => {
    setIsResetting(true);
    // Simulate API call
    setTimeout(() => {
      setIsResetting(false);
      toast({
        title: "رمز عبور بازنشانی شد",
        description: "رمز عبور جدید به ایمیل شما ارسال شد",
      });
    }, 2000);
  };

  const calculatePercentage = (used: number, total: number) => {
    return (used / total) * 100;
  };

  // Mock metrics data
  const metrics = [
    { label: "بازدید امروز", value: "1,234", change: "+12%", trend: "up" },
    { label: "زمان پاسخ‌دهی میانگین", value: "120ms", change: "-5%", trend: "down" },
    { label: "درخواست‌های موفق", value: "98.5%", change: "+2%", trend: "up" },
    { label: "خطاهای سرور", value: "0.2%", change: "-0.1%", trend: "down" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingContainers />
      <Navbar />
      
      <div className="relative pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button & Header */}
          <Button 
            variant="ghost" 
            className="mb-6 gap-2 hover:bg-accent/10"
            onClick={() => navigate("/profile")}
          >
            <ArrowRight className="w-4 h-4" />
            بازگشت به پروفایل
          </Button>

          <div className="mb-8">
            <div className="inline-block mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-xl rounded-3xl"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-primary/30 rounded-3xl px-8 py-6">
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-blue via-neon-cyan to-pastel-purple bg-clip-text text-transparent">
                    مدیریت سرویس
                  </h1>
                </div>
              </div>
            </div>
            <p className="text-foreground/60">{service.name}</p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
              <TabsTrigger value="overview">اطلاعات کلی</TabsTrigger>
              <TabsTrigger value="credentials">دسترسی</TabsTrigger>
              <TabsTrigger value="analytics">گزارشات</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Service Info */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" />
                      اطلاعات سرویس
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-foreground/60">دامنه (Domain)</Label>
                      <div className="flex gap-2">
                        <Input 
                          value={service.domain} 
                          readOnly 
                          className="bg-background/50"
                        />
                        <Button variant="outline" size="icon">
                          <RefreshCw className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-sm text-foreground/60">وضعیت</span>
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-pastel-green" />
                          <span className="font-medium">{service.status}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-sm text-foreground/60">تاریخ ایجاد</span>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{service.createdDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm text-foreground/60">تاریخ انقضا</span>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-destructive" />
                        <span className="font-medium">{service.expiryDate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Resource Usage */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HardDrive className="w-5 h-5 text-primary" />
                      مصرف منابع
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* RAM */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/60">رم (RAM)</span>
                        <span className="font-medium">
                          {service.ram.used} / {service.ram.total} GB
                        </span>
                      </div>
                      <Progress 
                        value={calculatePercentage(service.ram.used, service.ram.total)} 
                        className="h-2"
                      />
                    </div>

                    {/* CPU */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/60 flex items-center gap-2">
                          <Cpu className="w-4 h-4" />
                          پردازنده (CPU)
                        </span>
                        <span className="font-medium">
                          {service.cpu.used}%
                        </span>
                      </div>
                      <Progress 
                        value={service.cpu.used} 
                        className="h-2"
                      />
                    </div>

                    {/* Storage */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/60">فضای ذخیره‌سازی</span>
                        <span className="font-medium">
                          {service.storage.used} / {service.storage.total} GB
                        </span>
                      </div>
                      <Progress 
                        value={calculatePercentage(service.storage.used, service.storage.total)} 
                        className="h-2"
                      />
                    </div>

                    {/* Bandwidth */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/60 flex items-center gap-2">
                          <Network className="w-4 h-4" />
                          پهنای باند (ماهانه)
                        </span>
                        <span className="font-medium">
                          {service.bandwidth.used} / {service.bandwidth.total} GB
                        </span>
                      </div>
                      <Progress 
                        value={calculatePercentage(service.bandwidth.used, service.bandwidth.total)} 
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Credentials Tab */}
            <TabsContent value="credentials" className="space-y-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="w-5 h-5 text-primary" />
                    اطلاعات ورود
                  </CardTitle>
                  <CardDescription>
                    از این اطلاعات برای ورود به پنل مدیریت سرویس استفاده کنید
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      نام کاربری
                    </Label>
                    <Input 
                      id="username"
                      value={service.username} 
                      readOnly 
                      className="bg-background/50 font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">رمز عبور</Label>
                    <Input 
                      id="password"
                      type="password"
                      value={service.password} 
                      readOnly 
                      className="bg-background/50 font-mono"
                    />
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <Button 
                      onClick={handleResetPassword}
                      disabled={isResetting}
                      className="gap-2 bg-primary hover:bg-primary/90"
                    >
                      <RefreshCw className={`w-4 h-4 ${isResetting ? 'animate-spin' : ''}`} />
                      {isResetting ? "در حال بازنشانی..." : "بازنشانی رمز عبور"}
                    </Button>
                    <p className="text-sm text-foreground/60 mt-2">
                      رمز عبور جدید به ایمیل شما ارسال خواهد شد
                    </p>
                  </div>

                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-sm font-medium mb-2">آدرس پنل مدیریت:</p>
                    <a 
                      href={`https://${service.domain}/admin`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-mono text-sm"
                    >
                      https://{service.domain}/admin
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric, index) => (
                  <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        <p className="text-sm text-foreground/60">{metric.label}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-2xl font-bold">{metric.value}</p>
                          <div className={`flex items-center gap-1 text-sm ${
                            metric.trend === 'up' ? 'text-pastel-green' : 'text-destructive'
                          }`}>
                            {metric.trend === 'up' ? (
                              <TrendingUp className="w-4 h-4" />
                            ) : (
                              <TrendingDown className="w-4 h-4" />
                            )}
                            <span>{metric.change}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>گزارش عملکرد</CardTitle>
                  <CardDescription>
                    آمار و گزارشات سرویس در 30 روز گذشته
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Traffic Chart Placeholder */}
                    <div className="h-64 bg-background/50 rounded-lg flex items-center justify-center border border-border/50">
                      <p className="text-foreground/40">نمودار ترافیک</p>
                    </div>

                    {/* Additional Stats */}
                    <div className="grid md:grid-cols-3 gap-4 pt-4">
                      <div className="space-y-1">
                        <p className="text-sm text-foreground/60">کل درخواست‌ها</p>
                        <p className="text-xl font-bold">245,678</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-foreground/60">بازدیدکننده منحصر به فرد</p>
                        <p className="text-xl font-bold">12,456</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-foreground/60">میانگین زمان بارگذاری</p>
                        <p className="text-xl font-bold">1.2s</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceManagement;