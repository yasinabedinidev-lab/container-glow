import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Container, HardDrive, Activity, Calendar } from "lucide-react";
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

const ProfileServices = () => {
  const navigate = useNavigate();
  
  const calculatePercentage = (used: number, total: number) => {
    return (used / total) * 100;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-neon-blue via-neon-cyan to-pastel-purple bg-clip-text text-transparent">
          سرویس‌های من
        </h1>
        <p className="text-foreground/60 mt-2">مدیریت و مشاهده تمامی سرویس‌های فعال</p>
      </div>

      {/* Services List */}
      <div className="space-y-4">
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
          <Button 
            className="gap-2 bg-neon-blue hover:bg-neon-blue/80"
            onClick={() => navigate('/services')}
          >
            مشاهده سرویس‌ها
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileServices;
