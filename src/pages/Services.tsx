import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services, categories, ServiceCategory } from "@/data/services";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "all">("all");

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch = 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "all" || service.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block mb-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-neon-blue via-neon-cyan to-pastel-purple bg-clip-text text-transparent">
                سرویس‌های Container
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              آماده‌سازی، استقرار و مدیریت containerهای شما
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="جستجو در سرویس‌ها..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 h-12 text-lg"
              />
            </div>

            {/* Category Tabs */}
            <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setSelectedCategory(value as ServiceCategory | "all")}>
              <TabsList className="w-full flex flex-wrap justify-center gap-2 h-auto p-2">
                <TabsTrigger value="all" className="px-4 py-2">همه سرویس‌ها</TabsTrigger>
                {Object.entries(categories).map(([key, label]) => (
                  <TabsTrigger key={key} value={key} className="px-4 py-2">
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-center text-muted-foreground">
            {filteredServices.length} سرویس یافت شد
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group flex"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Card className="flex flex-col w-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-neon-blue/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/20">
                  <CardHeader className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center mb-4 p-2">
                      <img 
                        src={service.logo} 
                        alt={service.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl group-hover:text-neon-blue transition-colors">
                        {service.title}
                      </CardTitle>
                      <span className="text-xs px-2 py-1 rounded-full bg-neon-blue/10 text-neon-blue">
                        {categories[service.category]}
                      </span>
                    </div>
                    <CardDescription className="text-foreground/60 line-clamp-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <div className="space-y-2 flex-grow">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-1 text-foreground/70">
                          <span className="text-xs">💾</span>
                          {service.specs.ram}
                        </div>
                        <div className="flex items-center gap-1 text-foreground/70">
                          <span className="text-xs">📦</span>
                          {service.specs.storage}
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-neon-blue">
                            {service.price}
                          </span>
                          <span className="text-sm text-foreground/60">تومان/ماه</span>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                      مشاهده جزئیات
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">سرویسی یافت نشد</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                پاک کردن فیلترها
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
