import { Headphones, MessageSquare, Clock, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

const SupportSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 glow-neon-blue mb-6">
              <Headphones className="w-4 h-4 text-neon-blue" />
              <span className="text-sm text-neon-blue">پشتیبانی ۲۴/۷</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan mb-4">
              همیشه در کنار شما هستیم
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              تیم پشتیبانی ما ۲۴ ساعته آماده پاسخگویی به سوالات و رفع مشکلات شماست
            </p>
          </div>

          {/* Support Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Clock,
                title: "پاسخگویی سریع",
                desc: "میانگین زمان پاسخ کمتر از ۱۵ دقیقه",
                color: "neon-blue",
              },
              {
                icon: MessageSquare,
                title: "چت آنلاین",
                desc: "پشتیبانی زنده از طریق چت",
                color: "neon-cyan",
              },
              {
                icon: Mail,
                title: "تیکت پشتیبانی",
                desc: "ثبت و پیگیری درخواست‌های خود",
                color: "pastel-purple",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 border-border/50 hover:border-neon-blue/30 transition-all group hover:shadow-lg hover:shadow-neon-blue/10"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-xl bg-${item.color}/10 group-hover:bg-${item.color}/20 transition-all`}>
                    <item.icon className={`w-8 h-8 text-${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/60">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/support">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-blue/80 hover:to-neon-cyan/80 text-primary-foreground glow-neon-blue shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                ارسال درخواست پشتیبانی
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-cyan/10 rounded-full blur-3xl opacity-30" />
    </section>
  );
};

export default SupportSection;
