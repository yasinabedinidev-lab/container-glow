import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Workflow, Zap, ArrowLeft } from "lucide-react";

const N8NPromo = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
              <Workflow className="w-12 h-12 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl md:text-4xl mb-2">
            مارکت‌پلیس N8N
          </CardTitle>
          <CardDescription className="text-lg">
            خرید و فروش Workflow و API آماده
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-foreground/80 max-w-2xl mx-auto">
            در این پلتفرم می‌توانید Workflowها و APIهای آماده و حرفه‌ای برای N8N را خریداری کنید
            یا Workflowهای خود را به فروش برسانید و درآمد کسب کنید.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="text-center p-4 rounded-lg bg-background/50">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">آماده استفاده</h3>
              <p className="text-sm text-foreground/60">Workflowهای تست شده و کاربردی</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50">
              <Workflow className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">متنوع و کامل</h3>
              <p className="text-sm text-foreground/60">انواع APIها برای نیازهای مختلف</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-background/50">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">کسب درآمد</h3>
              <p className="text-sm text-foreground/60">فروش Workflowهای خودتان</p>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button size="lg" className="gap-2">
              مشاهده مارکت‌پلیس N8N
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default N8NPromo;
