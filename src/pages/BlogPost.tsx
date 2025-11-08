import { useParams, Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// همان داده‌های مقالات
const blogPosts = [
  {
    id: 1,
    title: "معرفی سرویس کانتینری‌سازی با Docker",
    description: "همه چیز درباره Docker و نحوه استفاده از کانتینرها",
    content: `
      <h2>Docker چیست؟</h2>
      <p>Docker یک پلتفرم متن‌باز برای توسعه، حمل و نقل و اجرای برنامه‌ها است. Docker به شما امکان می‌دهد برنامه‌های خود را از زیرساخت جدا کنید تا بتوانید نرم‌افزار را به سرعت تحویل دهید.</p>
      
      <h2>مزایای استفاده از Docker</h2>
      <ul>
        <li><strong>قابلیت حمل:</strong> کانتینرها در هر محیطی که Docker نصب شده باشد، اجرا می‌شوند</li>
        <li><strong>سبک‌وزن:</strong> کانتینرها منابع کمتری نسبت به ماشین‌های مجازی مصرف می‌کنند</li>
        <li><strong>ایزوله‌سازی:</strong> هر کانتینر مستقل از دیگران اجرا می‌شود</li>
        <li><strong>مقیاس‌پذیری:</strong> به راحتی می‌توان کانتینرها را افزایش یا کاهش داد</li>
      </ul>

      <h2>نحوه استفاده در سرویس ما</h2>
      <p>با استفاده از سرویس کانتینری ما، می‌توانید به راحتی برنامه‌های خود را در کانتینرهای Docker اجرا کنید. ما تمام پیچیدگی‌های مدیریت زیرساخت را برای شما انجام می‌دهیم.</p>

      <h3>مراحل شروع کار:</h3>
      <ol>
        <li>انتخاب سرویس کانتینری از پنل کاربری</li>
        <li>آپلود فایل Docker Compose یا Dockerfile</li>
        <li>تنظیم متغیرهای محیطی مورد نیاز</li>
        <li>راه‌اندازی و مانیتورینگ کانتینرها</li>
      </ol>

      <p>با این روش، می‌توانید در عرض چند دقیقه برنامه‌های خود را در محیط تولید اجرا کنید.</p>
    `,
    icon: "📦",
    date: "۱۵ فروردین ۱۴۰۳",
    readTime: "۵ دقیقه"
  },
  {
    id: 2,
    title: "بهینه‌سازی عملکرد با Redis",
    description: "نحوه استفاده از Redis برای کش کردن و افزایش سرعت",
    content: `
      <h2>Redis چیست؟</h2>
      <p>Redis یک پایگاه داده in-memory است که به عنوان کش، صف پیام و پایگاه داده استفاده می‌شود. سرعت بسیار بالا و قابلیت‌های گسترده آن، Redis را به انتخابی محبوب برای بهینه‌سازی عملکرد تبدیل کرده است.</p>

      <h2>کاربردهای اصلی Redis</h2>
      <ul>
        <li><strong>کش کردن:</strong> ذخیره موقت داده‌های پرتکرار برای دسترسی سریع‌تر</li>
        <li><strong>صف پیام:</strong> مدیریت وظایف و پیام‌های ناهمزمان</li>
        <li><strong>Session Store:</strong> ذخیره اطلاعات نشست کاربران</li>
        <li><strong>Real-time Analytics:</strong> تحلیل داده‌ها به صورت لحظه‌ای</li>
      </ul>

      <h2>بهترین روش‌های استفاده</h2>
      <p>برای بهره‌وری بهینه از Redis، توصیه می‌شود:</p>
      <ul>
        <li>از TTL (Time To Live) برای کلیدها استفاده کنید</li>
        <li>داده‌های با دسترسی بالا را کش کنید</li>
        <li>از pipeline برای عملیات دسته‌ای استفاده کنید</li>
        <li>مانیتورینگ مصرف حافظه را فراموش نکنید</li>
      </ul>

      <p>سرویس Redis ما با پشتیبانی کامل و backup خودکار، آماده استفاده شماست.</p>
    `,
    icon: "⚡",
    date: "۲۰ فروردین ۱۴۰۳",
    readTime: "۴ دقیقه"
  },
  {
    id: 3,
    title: "مدیریت پایگاه داده با PostgreSQL",
    description: "قدرتمندترین پایگاه داده رابطه‌ای متن‌باز",
    content: `
      <h2>چرا PostgreSQL؟</h2>
      <p>PostgreSQL یکی از پیشرفته‌ترین و قدرتمندترین پایگاه‌های داده متن‌باز است که از استانداردهای SQL به خوبی پشتیبانی می‌کند و قابلیت‌های پیشرفته‌ای دارد.</p>

      <h2>ویژگی‌های کلیدی</h2>
      <ul>
        <li><strong>ACID Compliance:</strong> تضمین یکپارچگی و قابلیت اطمینان داده‌ها</li>
        <li><strong>JSON Support:</strong> پشتیبانی کامل از داده‌های JSON و NoSQL</li>
        <li><strong>Full-text Search:</strong> جستجوی پیشرفته متن</li>
        <li><strong>Extensibility:</strong> قابلیت گسترش با افزونه‌ها</li>
      </ul>

      <h2>موارد استفاده</h2>
      <p>PostgreSQL برای طیف گسترده‌ای از برنامه‌ها مناسب است:</p>
      <ul>
        <li>برنامه‌های وب و موبایل</li>
        <li>سیستم‌های تحلیل داده</li>
        <li>برنامه‌های تجارت الکترونیک</li>
        <li>سیستم‌های مدیریت محتوا</li>
      </ul>

      <h2>بهینه‌سازی عملکرد</h2>
      <p>برای عملکرد بهتر PostgreSQL:</p>
      <ol>
        <li>از ایندکس‌ها به درستی استفاده کنید</li>
        <li>کوئری‌های خود را با EXPLAIN تحلیل کنید</li>
        <li>تنظیمات memory را بر اساس نیاز تنظیم کنید</li>
        <li>از connection pooling استفاده کنید</li>
      </ol>

      <p>سرویس PostgreSQL ما با backup روزانه، مانیتورینگ پیشرفته و پشتیبانی ۲۴/۷ آماده خدمت‌رسانی به شماست.</p>
    `,
    icon: "🐘",
    date: "۲۵ فروردین ۱۴۰۳",
    readTime: "۶ دقیقه"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-2xl mx-auto p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">مقاله یافت نشد</h1>
            <Link to="/blog">
              <Button>بازگشت به لیست مقالات</Button>
            </Link>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowRight className="w-4 h-4" />
            بازگشت به مقالات
          </Button>
        </Link>

        <Card className="p-8 md:p-12">
          <div className="text-6xl mb-6">{post.icon}</div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none 
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-foreground/80 prose-ul:mr-6
              prose-ol:text-foreground/80 prose-ol:mr-6
              prose-li:mb-2
              prose-strong:text-foreground prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Card>

        <div className="mt-12 text-center">
          <Link to="/services">
            <Button size="lg" className="gap-2">
              شروع استفاده از سرویس‌ها
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
