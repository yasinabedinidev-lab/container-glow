import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  
  const notifications = [
    {
      id: 1,
      title: "سرویس جدید PostgreSQL",
      message: "دیتابیس PostgreSQL با قیمت ویژه اضافه شد",
      time: "2 ساعت پیش",
      unread: true,
    },
    {
      id: 2,
      title: "تخفیف ویژه",
      message: "20% تخفیف روی سرویس‌های Redis",
      time: "5 ساعت پیش",
      unread: true,
    },
    {
      id: 3,
      title: "به‌روزرسانی سرور",
      message: "سرورها به نسخه جدید آپدیت شدند",
      time: "1 روز پیش",
      unread: false,
    },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative hover:bg-neon-blue/10 transition-all">
          <Bell className="w-5 h-5 text-neon-cyan" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-neon-blue text-xs border-none glow-neon-blue">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-card/95 backdrop-blur-lg border-neon-blue/30">
        <div className="p-4 border-b border-border">
          <h3 className="font-bold text-neon-cyan">اعلان‌ها</h3>
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b border-border/50 hover:bg-neon-blue/5 transition-all cursor-pointer ${
                notification.unread ? "bg-neon-blue/5" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                {notification.unread && (
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 glow-neon-blue" />
                )}
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-foreground">
                    {notification.title}
                  </h4>
                  <p className="text-xs text-foreground/70 mt-1">
                    {notification.message}
                  </p>
                  <span className="text-xs text-neon-cyan/70 mt-2 block">
                    {notification.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 text-center border-t border-border">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-neon-cyan text-xs hover:bg-neon-blue/10"
            onClick={() => navigate("/notifications")}
          >
            مشاهده همه اعلان‌ها
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
