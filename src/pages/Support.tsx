import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Headphones, Send, Clock, CheckCircle2, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Support = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    subject: "",
    priority: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.subject || !formData.priority || !formData.message) {
      toast.error("لطفاً تمام فیلدها را پر کنید");
      return;
    }
    toast.success("درخواست شما با موفقیت ثبت شد");
    setFormData({ subject: "", priority: "", message: "" });
  };

  const tickets = [
    {
      id: "#T-1234",
      subject: "مشکل در اتصال به دیتابیس",
      status: "در حال بررسی",
      priority: "بالا",
      date: "۱۴۰۳/۰۷/۲۰",
    },
    {
      id: "#T-1233",
      subject: "درخواست افزایش حجم",
      status: "پاسخ داده شده",
      priority: "متوسط",
      date: "۱۴۰۳/۰۷/۱۸",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 glow-neon-blue mb-6">
                <Headphones className="w-4 h-4 text-neon-blue" />
                <span className="text-sm text-neon-blue">مرکز پشتیبانی</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-glow-blue mb-4">
                چطور می‌توانیم کمکتان کنیم؟
              </h1>
              <p className="text-lg text-foreground/70">
                تیم پشتیبانی ما ۲۴/۷ آماده پاسخگویی به سوالات شماست
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Stats */}
              {[
                { label: "زمان پاسخ", value: "<15 دقیقه", icon: Clock },
                { label: "نرخ رضایت", value: "98%", icon: CheckCircle2 },
                { label: "تیکت‌های فعال", value: "2", icon: Headphones },
              ].map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-card/50 border-neon-blue/20">
                  <stat.icon className="w-8 h-8 text-neon-cyan mx-auto mb-3" />
                  <div className="text-2xl font-bold text-neon-blue mb-1">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Ticket Form */}
              <Card className="p-8 bg-card/50 border-neon-blue/30">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Send className="w-6 h-6 text-neon-cyan" />
                  ثبت تیکت جدید
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="subject">موضوع</Label>
                    <Input
                      id="subject"
                      placeholder="موضوع درخواست خود را وارد کنید"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-neon-blue"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority">اولویت</Label>
                    <Select value={formData.priority} onValueChange={(value) => setFormData({ ...formData, priority: value })}>
                      <SelectTrigger className="bg-background/50 border-border/50">
                        <SelectValue placeholder="انتخاب اولویت" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">پایین</SelectItem>
                        <SelectItem value="medium">متوسط</SelectItem>
                        <SelectItem value="high">بالا</SelectItem>
                        <SelectItem value="urgent">فوری</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">پیام</Label>
                    <Textarea
                      id="message"
                      placeholder="توضیحات کامل درخواست خود را بنویسید..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-neon-blue resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-blue/80 hover:to-neon-cyan/80 glow-neon-blue"
                  >
                    <Send className="w-4 h-4" />
                    ارسال درخواست
                  </Button>
                </form>
              </Card>

              {/* Recent Tickets */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Headphones className="w-6 h-6 text-neon-cyan" />
                  تیکت‌های اخیر شما
                </h2>
                <div className="space-y-4">
                  {tickets.map((ticket) => (
                    <Card 
                      key={ticket.id} 
                      className="p-6 bg-card/50 border-border/50 hover:border-neon-blue/30 transition-all cursor-pointer"
                      onClick={() => navigate(`/ticket/${ticket.id.replace('#T-', '')}`)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="text-sm text-neon-cyan mb-1">{ticket.id}</div>
                          <h3 className="font-semibold text-foreground">{ticket.subject}</h3>
                        </div>
                        <div className={`text-xs px-3 py-1 rounded-full ${
                          ticket.status === "پاسخ داده شده"
                            ? "bg-pastel-green/20 text-pastel-green"
                            : "bg-neon-blue/20 text-neon-blue"
                        }`}>
                          {ticket.status}
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-foreground/60">اولویت: {ticket.priority}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-foreground/60">{ticket.date}</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="gap-1 h-7 text-xs"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/ticket/${ticket.id.replace('#T-', '')}`);
                            }}
                          >
                            <MessageSquare className="w-3 h-3" />
                            مشاهده
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-6 bg-gradient-to-br from-neon-blue/10 to-neon-cyan/10 border-neon-blue/30">
                  <h3 className="font-bold text-foreground mb-2">راه‌های ارتباطی دیگر</h3>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <p>📧 ایمیل: support@containershop.ir</p>
                    <p>📞 تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
                    <p>💬 چت آنلاین: در دسترس ۲۴/۷</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
