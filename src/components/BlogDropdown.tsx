import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";

const BlogDropdown = () => {
  const blogs = [
    {
      id: 1,
      title: "PaaS چیست؟",
      description: "Platform as a Service - پلتفرم به عنوان سرویس برای استقرار برنامه‌ها",
      icon: "🚀",
    },
    {
      id: 2,
      title: "Docker چیست؟",
      description: "کانتینریزه کردن برنامه‌ها برای استقرار آسان‌تر",
      icon: "🐳",
    },
    {
      id: 3,
      title: "n8n چیست؟",
      description: "ابزار اتوماسیون workflow برای اتصال سرویس‌ها",
      icon: "🔗",
    },
    {
      id: 4,
      title: "Redis چیست؟",
      description: "دیتابیس In-Memory برای کش و صف پیام",
      icon: "⚡",
    },
    {
      id: 5,
      title: "PostgreSQL چیست؟",
      description: "دیتابیس رابطه‌ای قدرتمند و منبع‌باز",
      icon: "🐘",
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="gap-2 hover:bg-neon-cyan/10 transition-all group">
          <BookOpen className="w-5 h-5 text-neon-cyan group-hover:animate-glow-pulse" />
          <span className="hidden md:inline text-foreground/80 group-hover:text-neon-cyan">وبلاگ</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0 bg-card/95 backdrop-blur-lg border-neon-cyan/30">
        <div className="p-4 border-b border-border bg-gradient-to-r from-neon-cyan/10 to-transparent">
          <h3 className="font-bold text-neon-cyan flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            وبلاگ و مقالات
          </h3>
          <p className="text-xs text-foreground/60 mt-1">
            آخرین مقالات و آموزش‌ها
          </p>
        </div>
        <div className="max-h-[400px] overflow-y-auto p-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-3 rounded-lg hover:bg-neon-cyan/5 transition-all cursor-pointer border border-transparent hover:border-neon-cyan/20 group"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{blog.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-neon-cyan transition-colors flex items-center gap-2">
                    {blog.title}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-xs text-foreground/70 mt-1">
                    {blog.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 text-center border-t border-border bg-gradient-to-r from-transparent to-neon-cyan/5">
          <Button variant="ghost" size="sm" className="text-neon-cyan text-xs hover:bg-neon-cyan/10 w-full">
            مشاهده همه مقالات
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default BlogDropdown;
