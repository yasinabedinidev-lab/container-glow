import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft } from "lucide-react";
import { services, categories } from "@/data/services";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ServicesPreview = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-l from-primary via-neon.cyan to-accent bg-clip-text text-transparent">
              انتخاب کن، استفاده کن
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            هر چیزی که نیاز داری، آماده و در دسترس
          </p>
        </div>

        {/* Services Carousel */}
        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              direction: "rtl",
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={service.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link
                    to={`/services/${service.id}`}
                    className="group flex h-full"
                  >
                    <Card className="flex flex-col w-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-neon-blue/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/20">
                      <CardHeader className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-lg bg-background flex items-center justify-center mb-4 p-2">
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
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-neon-blue">
                              {service.price}
                            </span>
                            <span className="text-sm text-foreground/60">تومان/ماه</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              مشاهده تمام سرویس‌ها
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
