import { BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "PaaS چیست؟",
      description: "Platform as a Service - پلتفرم به عنوان سرویس برای استقرار برنامه‌ها",
      content: "PaaS یا Platform as a Service یک مدل ارائه خدمات ابری است که به توسعه‌دهندگان اجازه می‌دهد بدون نگرانی درباره زیرساخت، برنامه‌های خود را توسعه، اجرا و مدیریت کنند. این سرویس شامل سیستم عامل، سرور وب، پایگاه داده و ابزارهای توسعه است.",
      icon: "🚀",
      date: "۱۴۰۳/۰۷/۲۰",
      readTime: "۵ دقیقه",
    },
    {
      id: 2,
      title: "Docker چیست؟",
      description: "کانتینریزه کردن برنامه‌ها برای استقرار آسان‌تر",
      content: "Docker یک پلتفرم متن‌باز برای توسعه، حمل و نقل و اجرای برنامه‌ها است. Docker به شما این امکان را می‌دهد که برنامه‌های خود را از زیرساخت جدا کنید تا بتوانید نرم‌افزار را به سرعت ارائه دهید. با Docker می‌توانید برنامه‌های خود را در محیط‌های ایزوله به نام کانتینر اجرا کنید.",
      icon: "🐳",
      date: "۱۴۰۳/۰۷/۱۸",
      readTime: "۷ دقیقه",
    },
    {
      id: 3,
      title: "n8n چیست؟",
      description: "ابزار اتوماسیون workflow برای اتصال سرویس‌ها",
      content: "n8n یک ابزار اتوماسیون workflow متن‌باز است که به شما امکان می‌دهد سرویس‌ها و برنامه‌های مختلف را به یکدیگر متصل کنید. با n8n می‌توانید workflow‌های پیچیده را بدون نیاز به کدنویسی ایجاد کنید و فرآیندهای تکراری را خودکار سازید.",
      icon: "🔗",
      date: "۱۴۰۳/۰۷/۱۵",
      readTime: "۶ دقیقه",
    },
    {
      id: 4,
      title: "Redis چیست؟",
      description: "دیتابیس In-Memory برای کش و صف پیام",
      content: "Redis یک پایگاه داده متن‌باز و in-memory است که به عنوان کش، صف پیام و پایگاه داده استفاده می‌شود. Redis از ساختارهای داده مختلفی مانند رشته‌ها، لیست‌ها، مجموعه‌ها و جداول هش پشتیبانی می‌کند و عملکرد بسیار سریعی دارد.",
      icon: "⚡",
      date: "۱۴۰۳/۰۷/۱۲",
      readTime: "۸ دقیقه",
    },
    {
      id: 5,
      title: "PostgreSQL چیست؟",
      description: "دیتابیس رابطه‌ای قدرتمند و منبع‌باز",
      content: "PostgreSQL یک سیستم مدیریت پایگاه داده رابطه‌ای شی‌گرا و متن‌باز است که بر استانداردها تأکید دارد و قابلیت گسترش بالایی دارد. PostgreSQL از ویژگی‌های پیشرفته‌ای مانند تراکنش‌های ACID، نماهای materialize شده، trigger‌ها و stored procedure‌ها پشتیبانی می‌کند.",
      icon: "🐘",
      date: "۱۴۰۳/۰۷/۱۰",
      readTime: "۹ دقیقه",
    },
    {
      id: 6,
      title: "Kubernetes چیست؟",
      description: "سیستم مدیریت کانتینرها در مقیاس بزرگ",
      content: "Kubernetes یک پلتفرم متن‌باز برای خودکارسازی استقرار، مقیاس‌بندی و مدیریت برنامه‌های کانتینری است. این سیستم کانتینرها را در گروه‌ها سازماندهی می‌کند و مدیریت آنها را آسان می‌کند.",
      icon: "☸️",
      date: "۱۴۰۳/۰۷/۰۸",
      readTime: "۱۰ دقیقه",
    },
    {
      id: 7,
      title: "MongoDB چیست؟",
      description: "پایگاه داده NoSQL برای داده‌های غیرساختاریافته",
      content: "MongoDB یک پایگاه داده NoSQL محبوب است که داده‌ها را در قالب اسناد JSON ذخیره می‌کند. این پایگاه داده برای برنامه‌هایی که نیاز به انعطاف‌پذیری بالا و مقیاس‌پذیری افقی دارند، ایده‌آل است.",
      icon: "🍃",
      date: "۱۴۰۳/۰۷/۰۵",
      readTime: "۷ دقیقه",
    },
    {
      id: 8,
      title: "Nginx چیست؟",
      description: "وب سرور پرسرعت و Reverse Proxy",
      content: "Nginx یک وب سرور قدرتمند، reverse proxy و load balancer است که به خاطر کارایی بالا و مصرف منابع پایین شناخته شده است. Nginx می‌تواند هزاران اتصال همزمان را مدیریت کند.",
      icon: "🌐",
      date: "۱۴۰۳/۰۷/۰۳",
      readTime: "۶ دقیقه",
    },
  ];

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
          
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon-cyan/10 mb-6">
            <BookOpen className="w-10 h-10 text-neon-cyan" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-neon-cyan mb-4">
            وبلاگ و مقالات
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            آخرین مقالات و آموزش‌های تخصصی درباره فناوری‌های مدرن و خدمات ابری
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="group hover:border-neon-cyan/50 transition-all cursor-pointer bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="text-4xl mb-4">{blog.icon}</div>
                <CardTitle className="text-neon-cyan group-hover:text-neon-blue transition-colors flex items-center justify-between">
                  {blog.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-foreground/60">
                  {blog.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                  {blog.content}
                </p>
                <div className="flex items-center justify-between text-xs text-foreground/50">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
