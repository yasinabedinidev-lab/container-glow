import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  Rocket, 
  Shield, 
  Database, 
  Code2, 
  Terminal,
  Search,
  FileCode,
  Zap,
  Settings
} from "lucide-react";

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const documentationSections = [
    {
      id: "getting-started",
      title: "شروع کار",
      icon: Rocket,
      color: "text-neon-cyan",
      articles: [
        { 
          title: "نصب و راه‌اندازی اولیه", 
          description: "نحوه نصب و پیکربندی سرویس Docker",
          tags: ["مبتدی", "نصب"]
        },
        { 
          title: "ساخت اولین Container", 
          description: "راهنمای گام به گام ساخت اولین کانتینر",
          tags: ["مبتدی", "آموزش"]
        },
        { 
          title: "مفاهیم پایه Docker", 
          description: "آشنایی با مفاهیم اصلی و اصطلاحات",
          tags: ["مبتدی"]
        },
      ]
    },
    {
      id: "configuration",
      title: "پیکربندی",
      icon: Settings,
      color: "text-pastel-purple",
      articles: [
        { 
          title: "تنظیمات شبکه", 
          description: "پیکربندی شبکه و پورت‌ها",
          tags: ["متوسط", "شبکه"]
        },
        { 
          title: "مدیریت Volume ها", 
          description: "نحوه کار با Volume و ذخیره‌سازی",
          tags: ["متوسط"]
        },
        { 
          title: "Environment Variables", 
          description: "تنظیم متغیرهای محیطی",
          tags: ["متوسط"]
        },
      ]
    },
    {
      id: "security",
      title: "امنیت",
      icon: Shield,
      color: "text-neon-blue",
      articles: [
        { 
          title: "بهترین شیوه‌های امنیتی", 
          description: "رعایت اصول امنیتی در Docker",
          tags: ["امنیت", "پیشرفته"]
        },
        { 
          title: "مدیریت دسترسی‌ها", 
          description: "کنترل دسترسی و احراز هویت",
          tags: ["امنیت"]
        },
        { 
          title: "SSL و HTTPS", 
          description: "پیکربندی گواهی SSL",
          tags: ["امنیت", "متوسط"]
        },
      ]
    },
    {
      id: "database",
      title: "پایگاه داده",
      icon: Database,
      color: "text-neon-cyan",
      articles: [
        { 
          title: "نصب MySQL/PostgreSQL", 
          description: "راه‌اندازی دیتابیس در Docker",
          tags: ["دیتابیس"]
        },
        { 
          title: "بک‌آپ و بازیابی", 
          description: "استراتژی‌های پشتیبان‌گیری",
          tags: ["دیتابیس", "پیشرفته"]
        },
        { 
          title: "بهینه‌سازی کوئری", 
          description: "افزایش سرعت دیتابیس",
          tags: ["دیتابیس", "بهینه‌سازی"]
        },
      ]
    },
    {
      id: "api",
      title: "API و توسعه",
      icon: Code2,
      color: "text-pastel-purple",
      articles: [
        { 
          title: "Docker API", 
          description: "استفاده از REST API",
          tags: ["API", "پیشرفته"]
        },
        { 
          title: "Webhooks", 
          description: "پیکربندی و استفاده از Webhook",
          tags: ["API"]
        },
        { 
          title: "Docker Compose", 
          description: "مدیریت چند کانتینر",
          tags: ["ابزار", "متوسط"]
        },
      ]
    },
    {
      id: "cli",
      title: "خط فرمان",
      icon: Terminal,
      color: "text-neon-blue",
      articles: [
        { 
          title: "دستورات پرکاربرد", 
          description: "لیست دستورات CLI ضروری",
          tags: ["CLI"]
        },
        { 
          title: "اسکریپت‌نویسی", 
          description: "اتوماسیون با Bash/Shell",
          tags: ["CLI", "پیشرفته"]
        },
        { 
          title: "Debugging", 
          description: "عیب‌یابی و رفع مشکلات",
          tags: ["CLI", "Debug"]
        },
      ]
    },
  ];

  const quickLinks = [
    { title: "راهنمای سریع", icon: Zap, color: "text-neon-cyan" },
    { title: "نمونه کدها", icon: FileCode, color: "text-pastel-purple" },
    { title: "سوالات متداول", icon: BookOpen, color: "text-neon-blue" },
  ];

  const filteredSections = documentationSections.map(section => ({
    ...section,
    articles: section.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.articles.length > 0);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      
      <div className="relative pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-xl rounded-3xl"></div>
                <div className="relative bg-card/80 backdrop-blur-sm border border-neon-blue/30 rounded-3xl px-8 py-6">
                  <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-neon-blue via-neon-cyan to-pastel-purple bg-clip-text text-transparent">
                    مستندات جامع
                  </h1>
                </div>
              </div>
            </div>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              همه چیزی که برای کار با سرویس‌های ما نیاز دارید
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="جستجو در مستندات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 h-12 bg-card/50 border-neon-blue/30"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {quickLinks.map((link, index) => (
              <Card 
                key={index}
                className="border-neon-blue/30 bg-card/50 backdrop-blur-sm hover:border-neon-blue/50 transition-all cursor-pointer group"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-pastel-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <link.icon className={`w-6 h-6 ${link.color}`} />
                  </div>
                  <span className="font-medium">{link.title}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Documentation Content */}
          <Tabs defaultValue="getting-started" className="space-y-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2 h-auto bg-card/50 p-2">
              {documentationSections.map((section) => {
                const Icon = section.icon;
                return (
                  <TabsTrigger 
                    key={section.id} 
                    value={section.id}
                    className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-primary/20"
                  >
                    <Icon className={`w-5 h-5 ${section.color}`} />
                    <span className="text-xs">{section.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {(searchQuery ? filteredSections : documentationSections).map((section) => {
              const Icon = section.icon;
              return (
                <TabsContent key={section.id} value={section.id} className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-pastel-purple/20 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${section.color}`} />
                    </div>
                    <h2 className="text-3xl font-bold text-glow-blue">{section.title}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.articles.map((article, index) => (
                      <Card 
                        key={index}
                        className="border-neon-blue/30 bg-card/50 backdrop-blur-sm hover:border-neon-blue/50 transition-all cursor-pointer group"
                      >
                        <CardHeader>
                          <CardTitle className="text-lg group-hover:text-neon-cyan transition-colors">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {article.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag, tagIndex) => (
                              <Badge 
                                key={tagIndex} 
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>

          {searchQuery && filteredSections.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">نتیجه‌ای برای "{searchQuery}" یافت نشد</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;
