import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Headphones, Search, MessageSquare, Plus } from "lucide-react";

interface Ticket {
  id: string;
  subject: string;
  status: "در حال بررسی" | "پاسخ داده شده" | "بسته شده";
  priority: "فوری" | "بالا" | "متوسط" | "پایین";
  date: string;
  lastUpdate: string;
}

const TicketsList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterPriority, setFilterPriority] = useState<string>("all");

  // Mock tickets data - replace with real API call
  const allTickets: Ticket[] = [
    {
      id: "#T-1234",
      subject: "مشکل در اتصال به دیتابیس",
      status: "در حال بررسی",
      priority: "بالا",
      date: "۱۴۰۳/۰۷/۲۰",
      lastUpdate: "۱۴۰۳/۰۷/۲۰ - ۱۵:۱۰"
    },
    {
      id: "#T-1233",
      subject: "درخواست افزایش حجم",
      status: "پاسخ داده شده",
      priority: "متوسط",
      date: "۱۴۰۳/۰۷/۱۸",
      lastUpdate: "۱۴۰۳/۰۷/۱۹ - ۱۰:۳۰"
    },
    {
      id: "#T-1232",
      subject: "سوال درباره بکاپ خودکار",
      status: "بسته شده",
      priority: "پایین",
      date: "۱۴۰۳/۰۷/۱۵",
      lastUpdate: "۱۴۰۳/۰۷/۱۶ - ۱۴:۰۰"
    },
    {
      id: "#T-1231",
      subject: "خطا در راه‌اندازی کانتینر",
      status: "پاسخ داده شده",
      priority: "فوری",
      date: "۱۴۰۳/۰۷/۱۴",
      lastUpdate: "۱۴۰۳/۰۷/۱۴ - ۱۶:۴۵"
    },
    {
      id: "#T-1230",
      subject: "درخواست اطلاعات قیمت‌گذاری",
      status: "بسته شده",
      priority: "متوسط",
      date: "۱۴۰۳/۰۷/۱۲",
      lastUpdate: "۱۴۰۳/۰۷/۱۳ - ۰۹:۲۰"
    },
    {
      id: "#T-1229",
      subject: "مشکل در دسترسی به پنل کاربری",
      status: "در حال بررسی",
      priority: "بالا",
      date: "۱۴۰۳/۰۷/۲۱",
      lastUpdate: "۱۴۰۳/۰۷/۲۱ - ۱۱:۰۰"
    }
  ];

  // Filter tickets
  const filteredTickets = allTickets.filter((ticket) => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ticket.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || ticket.status === filterStatus;
    const matchesPriority = filterPriority === "all" || ticket.priority === filterPriority;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "پاسخ داده شده":
        return "bg-pastel-green/20 text-pastel-green border-pastel-green/30";
      case "در حال بررسی":
        return "bg-neon-blue/20 text-neon-blue border-neon-blue/30";
      case "بسته شده":
        return "bg-foreground/20 text-foreground/60 border-foreground/30";
      default:
        return "bg-accent/20 text-accent-foreground border-accent/30";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "فوری":
        return "text-destructive";
      case "بالا":
        return "text-neon-orange";
      case "متوسط":
        return "text-neon-cyan";
      case "پایین":
        return "text-foreground/60";
      default:
        return "text-foreground";
    }
  };

  const openTickets = filteredTickets.filter(t => t.status !== "بسته شده");
  const closedTickets = filteredTickets.filter(t => t.status === "بسته شده");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 glow-neon-blue mb-4">
                  <Headphones className="w-4 h-4 text-neon-blue" />
                  <span className="text-sm text-neon-blue">تیکت‌های پشتیبانی</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-glow-blue mb-2">
                  همه تیکت‌ها
                </h1>
                <p className="text-lg text-foreground/70">
                  مدیریت و پیگیری درخواست‌های پشتیبانی
                </p>
              </div>
              <Button
                onClick={() => navigate("/support")}
                className="gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-blue/80 hover:to-neon-cyan/80"
              >
                <Plus className="w-4 h-4" />
                تیکت جدید
              </Button>
            </div>

            {/* Filters */}
            <Card className="p-6 mb-6 bg-card/50 border-neon-blue/20">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                  <Input
                    placeholder="جستجو در تیکت‌ها..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10 bg-background/50"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="فیلتر وضعیت" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">همه وضعیت‌ها</SelectItem>
                    <SelectItem value="در حال بررسی">در حال بررسی</SelectItem>
                    <SelectItem value="پاسخ داده شده">پاسخ داده شده</SelectItem>
                    <SelectItem value="بسته شده">بسته شده</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterPriority} onValueChange={setFilterPriority}>
                  <SelectTrigger className="bg-background/50">
                    <SelectValue placeholder="فیلتر اولویت" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">همه اولویت‌ها</SelectItem>
                    <SelectItem value="فوری">فوری</SelectItem>
                    <SelectItem value="بالا">بالا</SelectItem>
                    <SelectItem value="متوسط">متوسط</SelectItem>
                    <SelectItem value="پایین">پایین</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>

            {/* Tickets Tabs */}
            <Tabs defaultValue="open" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="open">
                  باز ({openTickets.length})
                </TabsTrigger>
                <TabsTrigger value="closed">
                  بسته شده ({closedTickets.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="open" className="space-y-4">
                {openTickets.length === 0 ? (
                  <Card className="p-12 text-center bg-card/50 border-border/50">
                    <MessageSquare className="w-12 h-12 text-foreground/40 mx-auto mb-4" />
                    <p className="text-foreground/60">تیکت بازی یافت نشد</p>
                  </Card>
                ) : (
                  openTickets.map((ticket) => (
                    <Card
                      key={ticket.id}
                      className="p-6 bg-card/50 border-border/50 hover:border-neon-blue/30 transition-all cursor-pointer"
                      onClick={() => navigate(`/ticket/${ticket.id.replace('#T-', '')}`)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm text-neon-cyan font-mono">{ticket.id}</span>
                            <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(ticket.status)}`}>
                              {ticket.status}
                            </span>
                            <span className={`text-sm font-medium ${getPriorityColor(ticket.priority)}`}>
                              اولویت: {ticket.priority}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{ticket.subject}</h3>
                          <div className="flex items-center gap-4 text-sm text-foreground/60">
                            <span>ایجاد: {ticket.date}</span>
                            <span>آخرین بروزرسانی: {ticket.lastUpdate}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/ticket/${ticket.id.replace('#T-', '')}`);
                          }}
                        >
                          <MessageSquare className="w-4 h-4" />
                          مشاهده
                        </Button>
                      </div>
                    </Card>
                  ))
                )}
              </TabsContent>

              <TabsContent value="closed" className="space-y-4">
                {closedTickets.length === 0 ? (
                  <Card className="p-12 text-center bg-card/50 border-border/50">
                    <MessageSquare className="w-12 h-12 text-foreground/40 mx-auto mb-4" />
                    <p className="text-foreground/60">تیکت بسته شده‌ای یافت نشد</p>
                  </Card>
                ) : (
                  closedTickets.map((ticket) => (
                    <Card
                      key={ticket.id}
                      className="p-6 bg-card/50 border-border/50 hover:border-neon-blue/30 transition-all cursor-pointer opacity-75"
                      onClick={() => navigate(`/ticket/${ticket.id.replace('#T-', '')}`)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm text-neon-cyan font-mono">{ticket.id}</span>
                            <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(ticket.status)}`}>
                              {ticket.status}
                            </span>
                            <span className={`text-sm font-medium ${getPriorityColor(ticket.priority)}`}>
                              اولویت: {ticket.priority}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{ticket.subject}</h3>
                          <div className="flex items-center gap-4 text-sm text-foreground/60">
                            <span>ایجاد: {ticket.date}</span>
                            <span>آخرین بروزرسانی: {ticket.lastUpdate}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/ticket/${ticket.id.replace('#T-', '')}`);
                          }}
                        >
                          <MessageSquare className="w-4 h-4" />
                          مشاهده
                        </Button>
                      </div>
                    </Card>
                  ))
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TicketsList;
