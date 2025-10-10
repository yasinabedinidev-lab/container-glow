import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Smartphone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingContainers from "@/components/FloatingContainers";
import { toast } from "sonner";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"phone" | "code">("phone");

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 11) {
      setStep("code");
      toast.success("کد تایید برای شما ارسال شد");
    } else {
      toast.error("لطفا شماره موبایل معتبر وارد کنید");
    }
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length === 6) {
      toast.success("ورود موفقیت‌آمیز!");
      // Redirect logic will be added when backend is connected
    } else {
      toast.error("کد تایید باید 6 رقمی باشد");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <FloatingContainers />
      <Navbar />
      
      <div className="relative pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-md">
          <Card className="border-neon-blue/30 bg-card/50 backdrop-blur-sm glow-neon-blue">
            <CardHeader className="space-y-4 text-center">
              <div className="w-16 h-16 mx-auto rounded-xl bg-neon-blue/10 flex items-center justify-center glow-neon-blue">
                <Container className="w-8 h-8 text-neon-blue" />
              </div>
              <CardTitle className="text-3xl text-glow-blue">
                ورود به ContainerShop
              </CardTitle>
              <CardDescription className="text-base">
                {step === "phone" 
                  ? "شماره موبایل خود را وارد کنید"
                  : "کد ارسال شده را وارد کنید"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === "phone" ? (
                <form onSubmit={handleSendCode} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground/80">
                      شماره موبایل
                    </Label>
                    <div className="relative">
                      <Smartphone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neon-blue" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="09123456789"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="pr-10 bg-background/50 border-border/50 focus:border-neon-blue"
                        maxLength={11}
                        dir="ltr"
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-neon-blue hover:bg-neon-blue/80 text-primary-foreground glow-neon-blue"
                    size="lg"
                  >
                    ارسال کد تایید
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyCode} className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="code" className="text-foreground/80">
                        کد تایید
                      </Label>
                      <button
                        type="button"
                        onClick={() => setStep("phone")}
                        className="text-sm text-neon-cyan hover:text-neon-blue transition-colors flex items-center gap-1"
                      >
                        <ArrowRight className="w-4 h-4" />
                        تغییر شماره
                      </button>
                    </div>
                    <Input
                      id="code"
                      type="text"
                      placeholder="123456"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="bg-background/50 border-border/50 focus:border-neon-blue text-center text-2xl tracking-widest"
                      maxLength={6}
                      dir="ltr"
                    />
                    <p className="text-sm text-foreground/60 text-center">
                      کد برای {phoneNumber} ارسال شد
                    </p>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-neon-blue hover:bg-neon-blue/80 text-primary-foreground glow-neon-blue"
                    size="lg"
                  >
                    تایید و ورود
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full border-neon-cyan/50 hover:bg-neon-cyan/10"
                    onClick={() => toast.success("کد مجددا ارسال شد")}
                  >
                    ارسال مجدد کد
                  </Button>
                </form>
              )}

              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-center text-sm text-foreground/60">
                  با ورود به سایت، 
                  {" "}
                  <Link to="#" className="text-neon-cyan hover:text-neon-blue transition-colors">
                    قوانین و مقررات
                  </Link>
                  {" "}
                  را می‌پذیرید
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-foreground/60">
              نیاز به کمک دارید؟
              {" "}
              <Link to="#" className="text-neon-cyan hover:text-neon-blue transition-colors">
                پشتیبانی 24/7
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
