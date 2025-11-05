import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key, Lock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProfileSettings = () => {
  const { toast } = useToast();
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "خطا",
        description: "رمز عبور جدید و تکرار آن یکسان نیستند",
        variant: "destructive",
      });
      return;
    }

    if (passwordData.newPassword.length < 8) {
      toast({
        title: "خطا",
        description: "رمز عبور باید حداقل 8 کاراکتر باشد",
        variant: "destructive",
      });
      return;
    }

    setIsChangingPassword(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsChangingPassword(false);
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      toast({
        title: "موفقیت‌آمیز",
        description: "رمز عبور شما با موفقیت تغییر کرد",
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-neon-blue via-neon-cyan to-pastel-purple bg-clip-text text-transparent">
          تنظیمات حساب کاربری
        </h1>
        <p className="text-foreground/60 mt-2">مدیریت تنظیمات و امنیت حساب کاربری</p>
      </div>

      {/* Account Security */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-neon-blue" />
            امنیت حساب
          </CardTitle>
          <CardDescription>
            تنظیمات امنیتی و تغییر رمز عبور
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordChange} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword" className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  رمز عبور فعلی
                </Label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                  className="bg-background/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword" className="flex items-center gap-2">
                  <Key className="w-4 h-4" />
                  رمز عبور جدید
                </Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                  className="bg-background/50"
                  required
                  minLength={8}
                />
                <p className="text-xs text-foreground/60">
                  رمز عبور باید حداقل 8 کاراکتر باشد
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                  <Key className="w-4 h-4" />
                  تکرار رمز عبور جدید
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                  className="bg-background/50"
                  required
                  minLength={8}
                />
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <Button
                type="submit"
                disabled={isChangingPassword}
                className="gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-blue/80 hover:to-neon-cyan/80"
              >
                {isChangingPassword ? "در حال تغییر..." : "تغییر رمز عبور"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Account Information */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>اطلاعات حساب</CardTitle>
          <CardDescription>
            اطلاعات عمومی حساب کاربری شما
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-foreground/60">شماره تماس:</span>
              <p className="font-medium mt-1">09123456789</p>
            </div>
            <div>
              <span className="text-foreground/60">تاریخ عضویت:</span>
              <p className="font-medium mt-1">1402/08/15</p>
            </div>
            <div>
              <span className="text-foreground/60">سرویس‌های فعال:</span>
              <p className="font-medium mt-1 text-neon-blue">2 عدد</p>
            </div>
            <div>
              <span className="text-foreground/60">وضعیت حساب:</span>
              <p className="font-medium mt-1 text-pastel-green">فعال</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSettings;
