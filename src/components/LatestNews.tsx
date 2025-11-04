import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "راه‌اندازی سرویس Elasticsearch با تخفیف ویژه",
    excerpt: "حالا می‌تونی با ۳۰٪ تخفیف از قدرتمندترین موتور جستجو استفاده کنی",
    date: "۱۴۰۳/۰۸/۱۵",
    readTime: "۳ دقیقه",
    category: "محصول جدید"
  },
  {
    id: 2,
    title: "آپدیت امنیتی برای تمام سرویس‌ها",
    excerpt: "پچ‌های امنیتی جدید برای PostgreSQL و MySQL منتشر شد",
    date: "۱۴۰۳/۰۸/۱۲",
    readTime: "۲ دقیقه",
    category: "به‌روزرسانی"
  },
  {
    id: 3,
    title: "راهنمای کامل استفاده از n8n",
    excerpt: "یاد بگیر چطور با n8n workflow های پیچیده بسازی",
    date: "۱۴۰۳/۰۸/۱۰",
    readTime: "۸ دقیقه",
    category: "آموزش"
  }
];

const LatestNews = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent">آخرین اخبار</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold">
            همیشه
            <span className="bg-gradient-to-l from-accent via-neon.cyan to-primary bg-clip-text text-transparent">
              {" "}به‌روز{" "}
            </span>
            باش
          </h2>
          <p className="text-xl text-muted-foreground">
            جدیدترین اخبار، آپدیت‌ها و آموزش‌ها
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {newsItems.map((news, index) => (
            <Card 
              key={news.id}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {news.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {news.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {news.title}
                </CardTitle>
                <CardDescription className="text-foreground/60">
                  {news.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </div>
                  <Link to={`/blog/${news.id}`} className="text-accent hover:text-accent/80 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    بیشتر بخوان
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/blog">
            <Button size="lg" variant="outline" className="gap-2">
              مشاهده تمام اخبار
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
