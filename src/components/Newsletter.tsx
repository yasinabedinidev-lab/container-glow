import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "عضویت موفق!",
        description: "از این پس جدیدترین اخبار رو دریافت می‌کنی.",
      });
      setEmail("");
    }
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">خبرنامه</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              از جدیدترین
              <span className="bg-gradient-to-l from-primary via-neon.cyan to-accent bg-clip-text text-transparent">
                {" "}اخبار و آپدیت‌ها{" "}
              </span>
              باخبر شو
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ویژگی‌های جدید، آموزش‌های کاربردی و پیشنهادات ویژه رو مستقیم به ایمیلت دریافت کن
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="ایمیل خودت رو وارد کن..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-right bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary"
              />
              <Button 
                type="submit" 
                size="lg" 
                className="h-12 px-8 gap-2"
              >
                <Mail className="w-4 h-4" />
                عضویت
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              با عضویت، شرایط و قوانین رو می‌پذیری
            </p>
          </form>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">+۲۰۰۰ مشترک</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">هر هفته یک آپدیت</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">لغو عضویت آسان</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
