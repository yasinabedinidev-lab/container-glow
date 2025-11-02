import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowRight, ShoppingCart, Package, Zap, Shield, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services, categories } from "@/data/services";
import dockerShipIcon from "@/assets/docker-ship-icon.png";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">سرویس یافت نشد</h1>
          <Link to="/services">
            <Button>بازگشت به سرویس‌ها</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon-blue transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              بازگشت به سرویس‌ها
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-xl bg-background border border-border/50 flex items-center justify-center p-4 flex-shrink-0">
                    <img 
                      src={service.logo} 
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <h1 className="text-4xl md:text-5xl font-bold">
                        {service.title}
                      </h1>
                      <span className="text-sm px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue">
                        {categories[service.category]}
                      </span>
                    </div>
                    <p className="text-xl text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <img src={dockerShipIcon} alt="Docker" className="w-6 h-6" />
                  <span className="text-sm text-muted-foreground">
                    Powered by Docker Container Technology
                  </span>
                </div>
              </div>

              {/* Long Description */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Package className="w-6 h-6 text-neon-blue" />
                    درباره این سرویس
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {service.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Specs */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Zap className="w-6 h-6 text-neon-cyan" />
                    مشخصات فنی
                  </CardTitle>
                  <CardDescription>
                    منابع اختصاصی برای عملکرد بهینه
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="space-y-2 text-center p-4 rounded-lg bg-background/50">
                      <div className="text-sm text-muted-foreground">رم (RAM)</div>
                      <div className="text-2xl font-bold text-neon-blue">{service.specs.ram}</div>
                    </div>
                    <div className="space-y-2 text-center p-4 rounded-lg bg-background/50">
                      <div className="text-sm text-muted-foreground">فضای ذخیره‌سازی</div>
                      <div className="text-2xl font-bold text-neon-cyan">{service.specs.storage}</div>
                    </div>
                    <div className="space-y-2 text-center p-4 rounded-lg bg-background/50">
                      <div className="text-sm text-muted-foreground">پردازنده</div>
                      <div className="text-2xl font-bold text-pastel-purple">{service.specs.cpu}</div>
                    </div>
                    <div className="space-y-2 text-center p-4 rounded-lg bg-background/50">
                      <div className="text-sm text-muted-foreground">پهنای باند</div>
                      <div className="text-2xl font-bold text-pastel-pink">{service.specs.bandwidth}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tabbed Content */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <Tabs defaultValue="features" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="features">امکانات</TabsTrigger>
                      <TabsTrigger value="technical">جزئیات فنی</TabsTrigger>
                      <TabsTrigger value="usecases">موارد استفاده</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="features" className="mt-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                            <div className="w-5 h-5 rounded-full bg-neon-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-neon-blue" />
                            </div>
                            <span className="text-foreground/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="technical" className="mt-6">
                      <div className="space-y-3">
                        {service.technicalDetails.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/30">
                            <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                            <span className="text-foreground/80 font-mono text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="usecases" className="mt-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.useCases.map((useCase, idx) => (
                          <div key={idx} className="p-4 rounded-lg border border-border/50 bg-background/30">
                            <div className="text-lg font-semibold text-neon-blue mb-2">
                              ✓ {useCase}
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Order Card */}
            <div className="lg:col-span-1">
              <Card className="border-neon-blue/50 bg-card/50 backdrop-blur-sm sticky top-24 shadow-lg shadow-neon-blue/10">
                <CardHeader className="text-center pb-4">
                  <div className="mb-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
                      {service.price}
                    </span>
                  </div>
                  <div className="text-muted-foreground">تومان / ماهانه</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/login" className="block">
                    <Button className="w-full gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan hover:opacity-90 text-white h-12 text-lg" size="lg">
                      <ShoppingCart className="w-5 h-5" />
                      سفارش سرویس
                    </Button>
                  </Link>
                  
                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-neon-blue/10 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-neon-blue" />
                      </div>
                      <div>
                        <div className="font-medium">فعال‌سازی فوری</div>
                        <div className="text-xs text-muted-foreground">در کمتر از 5 دقیقه</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-neon-cyan" />
                      </div>
                      <div>
                        <div className="font-medium">پشتیبانی 24/7</div>
                        <div className="text-xs text-muted-foreground">تیم فنی همیشه در دسترس</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-pastel-purple/10 flex items-center justify-center">
                        <Package className="w-4 h-4 text-pastel-purple" />
                      </div>
                      <div>
                        <div className="font-medium">بدون تعهد</div>
                        <div className="text-xs text-muted-foreground">لغو در هر زمان</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      با سفارش این سرویس، <Link to="/terms" className="text-neon-blue hover:underline">قوانین و مقررات</Link> را می‌پذیرید
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
