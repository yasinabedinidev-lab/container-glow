import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "PostgreSQL",
      plan: "استاندارد",
      price: 250000,
      quantity: 1,
      image: "🐘",
    },
    {
      id: 2,
      name: "Redis",
      plan: "حرفه‌ای",
      price: 180000,
      quantity: 2,
      image: "⚡",
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.09;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-glow-blue mb-2">سبد خرید</h1>
              <p className="text-foreground/70">
                {cartItems.length} سرویس در سبد خرید شما
              </p>
            </div>

            {cartItems.length === 0 ? (
              <Card className="p-12 text-center bg-card/50">
                <ShoppingCart className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-foreground mb-2">سبد خرید خالی است</h2>
                <p className="text-foreground/60 mb-6">هنوز هیچ سرویسی انتخاب نکرده‌اید</p>
                <Link to="/services">
                  <Button className="gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan">
                    مشاهده سرویس‌ها
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="md:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="p-6 bg-card/50 border-border/50 hover:border-neon-blue/30 transition-all">
                      <div className="flex items-center gap-6">
                        <div className="text-5xl">{item.image}</div>
                        
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-foreground">{item.name}</h3>
                          <p className="text-sm text-foreground/60">پلن {item.plan}</p>
                          <div className="text-neon-blue font-bold mt-2">
                            {item.price.toLocaleString()} تومان
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="h-8 w-8 border-neon-blue/30"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="h-8 w-8 border-neon-blue/30"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Summary */}
                <div>
                  <Card className="p-6 bg-gradient-to-br from-card to-neon-blue/5 border-neon-blue/30 sticky top-24">
                    <h2 className="font-bold text-xl text-foreground mb-6">خلاصه سفارش</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-foreground/70">
                        <span>جمع کل</span>
                        <span>{subtotal.toLocaleString()} تومان</span>
                      </div>
                      <div className="flex justify-between text-foreground/70">
                        <span>مالیات (۹٪)</span>
                        <span>{tax.toLocaleString()} تومان</span>
                      </div>
                      <div className="h-px bg-border" />
                      <div className="flex justify-between text-lg font-bold text-foreground">
                        <span>مجموع</span>
                        <span className="text-neon-blue">{total.toLocaleString()} تومان</span>
                      </div>
                    </div>

                    <Link to="/invoice">
                      <Button className="w-full gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-blue/80 hover:to-neon-cyan/80 glow-neon-blue">
                        ادامه و پرداخت
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                    </Link>

                    <Link to="/services">
                      <Button variant="ghost" className="w-full mt-3 text-neon-cyan hover:bg-neon-cyan/10">
                        ادامه خرید
                      </Button>
                    </Link>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
