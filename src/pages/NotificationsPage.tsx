import { Bell, ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NotificationsPage = () => {
  const navigate = useNavigate();
  
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "سرویس جدید PostgreSQL",
      message: "دیتابیس PostgreSQL با قیمت ویژه اضافه شد. این سرویس شامل پشتیبانی کامل، بکاپ خودکار و امکانات پیشرفته است.",
      time: "۲ ساعت پیش",
      unread: true,
      type: "success",
    },
    {
      id: 2,
      title: "تخفیف ویژه",
      message: "۲۰٪ تخفیف روی سرویس‌های Redis برای مشتریان جدید. این تخفیف تا پایان هفته اعتبار دارد.",
      time: "۵ ساعت پیش",
      unread: true,
      type: "info",
    },
    {
      id: 3,
      title: "به‌روزرسانی سرور",
      message: "سرورها به نسخه جدید آپدیت شدند و امنیت بیشتری دارند. تمامی سرویس‌ها به‌روزرسانی شده‌اند.",
      time: "۱ روز پیش",
      unread: false,
      type: "update",
    },
    {
      id: 4,
      title: "پشتیبانی ۲۴/۷",
      message: "تیم پشتیبانی ما اکنون ۲۴ ساعته در خدمت شماست. می‌توانید از طریق چت آنلاین با ما در ارتباط باشید.",
      time: "۲ روز پیش",
      unread: false,
      type: "info",
    },
    {
      id: 5,
      title: "سرویس جدید MongoDB",
      message: "سرویس MongoDB با قابلیت‌های جدید اضافه شد. شامل Replica Set و Sharding می‌باشد.",
      time: "۳ روز پیش",
      unread: false,
      type: "success",
    },
    {
      id: 6,
      title: "امنیت بهبود یافت",
      message: "پروتکل‌های امنیتی جدید برای محافظت بهتر از داده‌های شما اعمال شد.",
      time: "۴ روز پیش",
      unread: false,
      type: "update",
    },
    {
      id: 7,
      title: "وبینار رایگان",
      message: "دعوت به وبینار رایگان آموزش Docker و Kubernetes. ثبت‌نام تا پایان هفته باز است.",
      time: "۵ روز پیش",
      unread: false,
      type: "info",
    },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, unread: false } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "border-green-500/30 bg-green-500/5";
      case "info":
        return "border-neon-blue/30 bg-neon-blue/5";
      case "update":
        return "border-neon-cyan/30 bg-neon-cyan/5";
      default:
        return "border-border bg-card/50";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 text-neon-cyan hover:bg-neon-cyan/10"
          >
            <ArrowRight className="w-4 h-4 ml-2" />
            بازگشت به صفحه اصلی
          </Button>
          
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon-blue/10 mb-6 relative">
            <Bell className="w-10 h-10 text-neon-cyan" />
            {unreadCount > 0 && (
              <Badge className="absolute -top-1 -right-1 w-8 h-8 p-0 flex items-center justify-center bg-neon-blue text-sm border-none glow-neon-blue">
                {unreadCount}
              </Badge>
            )}
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-neon-cyan mb-4">
            اعلان‌ها
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-6">
            آخرین اطلاعیه‌ها و اعلان‌های مهم
          </p>

          {unreadCount > 0 && (
            <Button
              onClick={markAllAsRead}
              variant="outline"
              className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10"
            >
              <Check className="w-4 h-4 ml-2" />
              علامت‌گذاری همه به عنوان خوانده‌شده
            </Button>
          )}
        </div>

        {/* Notifications List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`transition-all ${getTypeColor(notification.type)} ${
                notification.unread ? "border-neon-blue/50" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    {notification.unread && (
                      <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 glow-neon-blue flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <CardTitle className="text-lg text-neon-cyan flex items-center gap-2">
                        {notification.title}
                        {notification.unread && (
                          <Badge variant="outline" className="text-xs border-neon-blue/50 text-neon-blue">
                            جدید
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="text-foreground/60 mt-2">
                        {notification.message}
                      </CardDescription>
                      <span className="text-xs text-neon-cyan/70 mt-3 block">
                        {notification.time}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 flex-shrink-0">
                    {notification.unread && (
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => markAsRead(notification.id)}
                        className="hover:bg-neon-cyan/10 text-neon-cyan"
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => deleteNotification(notification.id)}
                      className="hover:bg-red-500/10 text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}

          {notifications.length === 0 && (
            <div className="text-center py-20">
              <Bell className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
              <p className="text-foreground/50 text-lg">
                اعلانی وجود ندارد
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotificationsPage;
