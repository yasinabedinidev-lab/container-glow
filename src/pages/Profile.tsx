import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { User, Container, HardDrive, Activity, Calendar, Settings, LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingContainers from "@/components/FloatingContainers";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const userServices = [
  {
    id: 1,
    name: "Web Application Container",
    status: "فعال",
    expiryDate: "1403/12/15",
    ram: { used: 1.2, total: 2 },
    storage: { used: 28, total: 50 },
    bandwidth: { used: 450, total: 1000 },
  },
  {
    id: 2,
    name: "Database Container",
    status: "فعال",
    expiryDate: "1403/11/20",
    ram: { used: 2.8, total: 4 },
    storage: { used: 65, total: 100 },
    bandwidth: { used: 1200, total: 2000 },
  },
];

const Profile = () => {
  const navigate = useNavigate();
  
  const calculatePercentage = (used: number, total: number) => {
    return (used / total) * 100;
  };

  return (
    <div className="min-h-screen bg-background">
      <FloatingContainers />
      <Navbar />
      
      <div className="relative pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-block mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-xl rounded-3xl"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-neon-blue/30 rounded-3xl px-8 py-6">
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-blue via-neon-cyan to-pastel-purple bg-clip-text text-transparent">
                    پروفایل کاربری
                  </h1>
                </div>
              </div>
            </div>
            <p className="text-foreground/60">مدیریت سرویس‌ها و اطلاعات حساب کاربری</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* User Info Card */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-neon flex items-center justify-center glow-neon-blue mb-4">
                    <User className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">کاربر نمونه</CardTitle>
                  <CardDescription>09123456789</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/60">تاریخ عضویت</span>
                    <span className="font-medium">1402/08/15</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/60">سرویس‌های فعال</span>
                    <span className="font-medium text-neon-blue">2 عدد</span>
                  </div>
                  <div className="pt-4 border-t border-border/50 space-y-2">
                    <Button variant="outline" className="w-full gap-2 border-border/50">
                      <Settings className="w-4 h-4" />
                      تنظیمات حساب
                    </Button>
                    <Button variant="outline" className="w-full gap-2 border-destructive/50 text-destructive hover:bg-destructive/10">
                      <LogOut className="w-4 h-4" />
                      خروج از حساب
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">آمار کلی</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground/60">کل منابع استفاده شده</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span>رم</span>
                        <span className="text-neon-blue">4 / 6 GB</span>
                      </div>
                      <Progress value={66} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span>فضا</span>
                        <span className="text-neon-cyan">93 / 150 GB</span>
                      </div>
                      <Progress value={62} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Active Services */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-glow-cyan">سرویس‌های فعال</h2>
                
                {userServices.map((service) => (
                  <Card key={service.id} className="border-neon-blue/30 bg-card/50 backdrop-blur-sm hover:border-neon-blue/50 transition-all hover:glow-neon-blue">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-xl flex items-center gap-2">
                            <Container className="w-5 h-5 text-neon-blue" />
                            {service.name}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Activity className="w-3 h-3 text-pastel-green" />
                              {service.status}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              انقضا: {service.expiryDate}
                            </span>
                          </CardDescription>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-primary/50"
                          onClick={() => navigate(`/services/manage/${service.id}`)}
                        >
                          مدیریت
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* RAM Usage */}
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

                      {/* Storage Usage */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-foreground/60 flex items-center gap-2">
                            <HardDrive className="w-4 h-4" />
                            فضای ذخیره‌سازی
                          </span>
                          <span className="font-medium">
                            {service.storage.used} / {service.storage.total} GB
                          </span>
                        </div>
                        <Progress 
                          value={calculatePercentage(service.storage.used, service.storage.total)} 
                          className="h-2"
                        />
                      </div>

                      {/* Bandwidth Usage */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-foreground/60">پهنای باند (ماهانه)</span>
                          <span className="font-medium">
                            {service.bandwidth.used} / {service.bandwidth.total} GB
                          </span>
                        </div>
                        <Progress 
                          value={calculatePercentage(service.bandwidth.used, service.bandwidth.total)} 
                          className="h-2"
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 border-t border-border/50 flex gap-3">
                        <Button size="sm" className="flex-1 bg-neon-blue hover:bg-neon-blue/80">
                          تمدید سرویس
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 border-border/50">
                          ارتقا پلن
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Add New Service CTA */}
              <Card className="border-dashed border-2 border-neon-blue/30 bg-transparent hover:bg-neon-blue/5 transition-all cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center mb-4">
                    <Container className="w-8 h-8 text-neon-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">سرویس جدید اضافه کنید</h3>
                  <p className="text-foreground/60 mb-4">از بین سرویس‌های متنوع ما انتخاب کنید</p>
                  <Button className="gap-2 bg-neon-blue hover:bg-neon-blue/80">
                    مشاهده سرویس‌ها
                  </Button>
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

export default Profile;
