import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Send, User, Headphones } from "lucide-react";
import { toast } from "sonner";

const TicketDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [replyMessage, setReplyMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Mock ticket data
  const ticket = {
    id: id || "#T-1234",
    subject: "مشکل در اتصال به دیتابیس",
    status: "در حال بررسی",
    priority: "بالا",
    date: "۱۴۰۳/۰۷/۲۰",
    messages: [
      {
        id: 1,
        sender: "user",
        name: "شما",
        message: "سلام، من نمی‌توانم به دیتابیس PostgreSQL خود متصل شوم. خطای Connection Timeout می‌دهد.",
        timestamp: "۱۴۰۳/۰۷/۲۰ - ۱۴:۳۰",
      },
      {
        id: 2,
        sender: "support",
        name: "تیم پشتیبانی",
        message: "سلام و درود. لطفاً بررسی کنید که آیا IP شما در لیست سفید (whitelist) قرار دارد؟ همچنین مطمئن شوید که پورت 5432 باز است.",
        timestamp: "۱۴۰۳/۰۷/۲۰ - ۱۴:۴۵",
      },
      {
        id: 3,
        sender: "user",
        name: "شما",
        message: "بله IP من در لیست سفید است. اما هنوز مشکل برطرف نشده است.",
        timestamp: "۱۴۰۳/۰۷/۲۰ - ۱۵:۰۰",
      },
      {
        id: 4,
        sender: "support",
        name: "تیم پشتیبانی",
        message: "متوجه شدم. لطفاً اطلاعات زیر را برای ما ارسال کنید:\n1. نام کاربری دیتابیس\n2. نام دیتابیس\n3. پیغام خطای کامل\n\nهمچنین لطفاً بررسی کنید که آیا کانتینر شما در حال اجرا است؟",
        timestamp: "۱۴۰۳/۰۷/۲۰ - ۱۵:۱۰",
      },
    ],
  };

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyMessage.trim()) {
      toast.error("لطفاً پیام خود را وارد کنید");
      return;
    }

    setIsSending(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("پیام شما ارسال شد");
      setReplyMessage("");
      setIsSending(false);
    }, 1500);
  };

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button
              variant="ghost"
              className="mb-6 gap-2 hover:bg-accent/10"
              onClick={() => navigate("/support")}
            >
              <ArrowRight className="w-4 h-4" />
              بازگشت به پشتیبانی
            </Button>

            {/* Ticket Header */}
            <Card className="p-6 mb-6 bg-card/50 border-neon-blue/30">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-neon-cyan font-mono">{ticket.id}</span>
                      <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(ticket.status)}`}>
                        {ticket.status}
                      </span>
                    </div>
                    <h1 className="text-2xl font-bold text-foreground mb-2">{ticket.subject}</h1>
                    <div className="flex items-center gap-4 text-sm text-foreground/60">
                      <span className={getPriorityColor(ticket.priority)}>اولویت: {ticket.priority}</span>
                      <span>تاریخ: {ticket.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Messages */}
            <div className="space-y-4 mb-6">
              {ticket.messages.map((msg) => (
                <Card
                  key={msg.id}
                  className={`p-6 ${
                    msg.sender === "user"
                      ? "bg-card/50 border-border/50 ml-12"
                      : "bg-neon-blue/5 border-neon-blue/20 mr-12"
                  }`}
                >
                  <div className="flex gap-4">
                    <Avatar className={msg.sender === "support" ? "bg-neon-blue/20" : "bg-accent/20"}>
                      <AvatarFallback>
                        {msg.sender === "user" ? <User className="w-4 h-4" /> : <Headphones className="w-4 h-4" />}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-semibold ${msg.sender === "support" ? "text-neon-cyan" : "text-foreground"}`}>
                          {msg.name}
                        </span>
                        <span className="text-xs text-foreground/60">{msg.timestamp}</span>
                      </div>
                      <p className="text-foreground/80 whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Reply Form */}
            {ticket.status !== "بسته شده" && (
              <Card className="p-6 bg-card/50 border-neon-blue/30">
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Send className="w-5 h-5 text-neon-cyan" />
                  ارسال پاسخ
                </h2>
                <form onSubmit={handleSendReply} className="space-y-4">
                  <Textarea
                    placeholder="پیام خود را اینجا بنویسید..."
                    rows={6}
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-neon-blue resize-none"
                  />
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={isSending || !replyMessage.trim()}
                      className="gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-blue/80 hover:to-neon-cyan/80"
                    >
                      {isSending ? (
                        <>در حال ارسال...</>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          ارسال پاسخ
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TicketDetail;
