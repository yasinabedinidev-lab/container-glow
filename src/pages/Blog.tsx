import { BookOpen, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate, Link } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "معرفی سرویس کانتینری‌سازی با Docker",
      description: "همه چیز درباره Docker و نحوه استفاده از کانتینرها",
      content: "Docker یک پلتفرم متن‌باز برای توسعه، حمل و نقل و اجرای برنامه‌ها است که به شما امکان می‌دهد برنامه‌های خود را در محیط‌های ایزوله به نام کانتینر اجرا کنید.",
      icon: "📦",
      date: "۱۵ فروردین ۱۴۰۳",
      readTime: "۵ دقیقه",
    },
    {
      id: 2,
      title: "بهینه‌سازی عملکرد با Redis",
      description: "نحوه استفاده از Redis برای کش کردن و افزایش سرعت",
      content: "Redis یک پایگاه داده in-memory است که به عنوان کش، صف پیام و پایگاه داده استفاده می‌شود و سرعت بسیار بالایی دارد.",
      icon: "⚡",
      date: "۲۰ فروردین ۱۴۰۳",
      readTime: "۴ دقیقه",
    },
    {
      id: 3,
      title: "مدیریت پایگاه داده با PostgreSQL",
      description: "قدرتمندترین پایگاه داده رابطه‌ای متن‌باز",
      content: "PostgreSQL یک سیستم مدیریت پایگاه داده رابطه‌ای قدرتمند است که از ویژگی‌های پیشرفته‌ای مانند تراکنش‌های ACID پشتیبانی می‌کند.",
      icon: "🐘",
      date: "۲۵ فروردین ۱۴۰۳",
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
            className="mb-8 text-primary hover:bg-primary/10"
          >
            <ArrowRight className="w-4 h-4 ml-2" />
            بازگشت به صفحه اصلی
          </Button>
          
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <BookOpen className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            وبلاگ و مقالات
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            آخرین مقالات و آموزش‌های تخصصی درباره فناوری‌های مدرن و خدمات ابری
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`}>
              <Card className="group hover:border-primary/50 transition-all cursor-pointer bg-card/50 backdrop-blur-sm h-full">
                <CardHeader>
                  <div className="text-4xl mb-4">{blog.icon}</div>
                  <CardTitle className="text-primary group-hover:text-accent transition-colors flex items-center justify-between">
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
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
