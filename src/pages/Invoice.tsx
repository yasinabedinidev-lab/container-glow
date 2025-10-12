import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Download, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Invoice = () => {
  const navigate = useNavigate();
  
  const invoiceData = {
    number: "INV-2024-001234",
    date: "۱۴۰۳/۰۷/۲۰",
    paymentDate: "۱۴۰۳/۰۷/۲۰",
    paymentMethod: "پرداخت آنلاین",
    items: [
      { name: "PostgreSQL - پلن استاندارد", quantity: 1, price: 250000 },
      { name: "Redis - پلن حرفه‌ای", quantity: 2, price: 180000 },
    ],
  };

  const subtotal = invoiceData.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.09;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-500">پرداخت موفق</span>
              </div>
              <h1 className="text-4xl font-bold text-glow-blue mb-2">رسید خرید</h1>
              <p className="text-foreground/60">پرداخت شما با موفقیت انجام شد</p>
            </div>

            {/* Invoice Card */}
            <Card className="p-8 bg-card/50 border-neon-blue/30 mb-6">
              {/* Invoice Header */}
              <div className="flex justify-between items-start mb-8 pb-6 border-b border-border/50">
                <div>
                  <h2 className="text-2xl font-bold gradient-neon bg-clip-text text-transparent mb-2">
                    ContainerShop
                  </h2>
                  <p className="text-sm text-foreground/60">Platform as a Service</p>
                </div>
                <div className="text-left">
                  <div className="text-sm text-foreground/60">شماره فاکتور</div>
                  <div className="font-bold text-neon-blue">{invoiceData.number}</div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-sm text-foreground/60 mb-1">تاریخ پرداخت</div>
                  <div className="font-semibold">{invoiceData.paymentDate}</div>
                </div>
                <div>
                  <div className="text-sm text-foreground/60 mb-1">روش پرداخت</div>
                  <div className="font-semibold">{invoiceData.paymentMethod}</div>
                </div>
                <div>
                  <div className="text-sm text-foreground/60 mb-1">وضعیت</div>
                  <div className="font-semibold text-green-500">پرداخت شده</div>
                </div>
              </div>

              {/* Items Table */}
              <div className="mb-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-right py-3 text-sm font-semibold text-foreground/70">سرویس</th>
                      <th className="text-center py-3 text-sm font-semibold text-foreground/70">تعداد</th>
                      <th className="text-left py-3 text-sm font-semibold text-foreground/70">قیمت واحد</th>
                      <th className="text-left py-3 text-sm font-semibold text-foreground/70">جمع</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.items.map((item, index) => (
                      <tr key={index} className="border-b border-border/30">
                        <td className="py-4 text-foreground">{item.name}</td>
                        <td className="py-4 text-center text-foreground/70">{item.quantity}</td>
                        <td className="py-4 text-left text-foreground/70">
                          {item.price.toLocaleString()} تومان
                        </td>
                        <td className="py-4 text-left font-semibold">
                          {(item.price * item.quantity).toLocaleString()} تومان
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="space-y-3 max-w-md mr-auto">
                <div className="flex justify-between text-foreground/70">
                  <span>جمع کل</span>
                  <span>{subtotal.toLocaleString()} تومان</span>
                </div>
                <div className="flex justify-between text-foreground/70">
                  <span>مالیات (۹٪)</span>
                  <span>{tax.toLocaleString()} تومان</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between text-xl font-bold">
                  <span>مبلغ قابل پرداخت</span>
                  <span className="text-neon-blue">{total.toLocaleString()} تومان</span>
                </div>
              </div>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate('/profile')}
                className="flex-1 gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-blue/80 hover:to-neon-cyan/80"
              >
                <Home className="w-5 h-5" />
                بازگشت به پنل کاربری
              </Button>
              <Button variant="outline" className="gap-2 border-neon-blue/50 hover:bg-neon-blue/10">
                <Download className="w-5 h-5" />
                دانلود رسید
              </Button>
            </div>

            {/* Success Message */}
            <Card className="p-6 mt-6 bg-green-500/5 border-green-500/20">
              <h3 className="font-bold text-foreground mb-2">✓ خرید موفق</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                سرویس‌های شما با موفقیت فعال شدند و در پنل کاربری قابل مشاهده هستند.
                برای مدیریت سرویس‌ها به پنل کاربری بروید.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Invoice;
