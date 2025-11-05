import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Container, Activity, TrendingUp, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProfileDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-neon-blue via-neon-cyan to-pastel-purple bg-clip-text text-transparent">
          داشبورد کاربری
        </h1>
        <p className="text-foreground/60 mt-2">خوش آمدید! خلاصه‌ای از فعالیت‌های شما</p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-foreground/60">سرویس‌های فعال</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-neon-blue">2</div>
              <Container className="w-8 h-8 text-neon-blue/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-foreground/60">کل منابع استفاده شده</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-neon-cyan">62%</div>
              <Activity className="w-8 h-8 text-neon-cyan/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-foreground/60">صرفه‌جویی این ماه</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-pastel-green">45%</div>
              <TrendingUp className="w-8 h-8 text-pastel-green/50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resource Overview */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>آمار کلی منابع</CardTitle>
          <CardDescription>مصرف کلی منابع در تمامی سرویس‌ها</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground/60">رم (RAM)</span>
              <span className="font-medium text-neon-blue">4 / 6 GB</span>
            </div>
            <Progress value={66} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground/60">فضای ذخیره‌سازی</span>
              <span className="font-medium text-neon-cyan">93 / 150 GB</span>
            </div>
            <Progress value={62} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground/60">پهنای باند (ماهانه)</span>
              <span className="font-medium text-pastel-purple">1650 / 3000 GB</span>
            </div>
            <Progress value={55} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>فعالیت‌های اخیر</CardTitle>
          <CardDescription>آخرین تغییرات و رویدادها</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "سرویس Database Container راه‌اندازی شد", time: "2 ساعت پیش", icon: Activity },
              { action: "تمدید سرویس Web Application", time: "1 روز پیش", icon: Calendar },
              { action: "ارتقا پلن به Enterprise", time: "3 روز پیش", icon: TrendingUp },
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-4 border-b border-border/30 last:border-0 last:pb-0">
                <div className="w-8 h-8 rounded-full bg-neon-blue/10 flex items-center justify-center shrink-0">
                  <activity.icon className="w-4 h-4 text-neon-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-foreground/60 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border-border/50 bg-gradient-to-br from-neon-blue/10 to-neon-cyan/10 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold mb-1">نیاز به سرویس جدید دارید؟</h3>
              <p className="text-sm text-foreground/60">از بین سرویس‌های متنوع ما انتخاب کنید</p>
            </div>
            <Button
              className="gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-blue/80 hover:to-neon-cyan/80"
              onClick={() => navigate('/services')}
            >
              مشاهده سرویس‌ها
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileDashboard;
