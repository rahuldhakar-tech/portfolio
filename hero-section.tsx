import { Button } from "@/components/ui/button";
import { Download, MessageCircle, Eye } from "lucide-react";

export function HeroSection() {
  const metrics = [
    { metric: "13.7%", description: "monthly revenue from new export channel" },
    { metric: "18%", description: "MoM revenue growth (pilot channel)" },
    { metric: "97%", description: "capacity utilization (operations optimization)" },
    { metric: "8.33 CGPA", description: "B.Tech, MANIT Bhopal" }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/5">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] mb-6">
            Hi, I'm Rahul Singh Dhakar
          </h1>
          <p className="text-2xl mb-6">Data Analytics & Operations Specialist</p>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            I build actionable dashboards and operational pipelines that improve revenue, 
            utilization and decision-making for operations and service businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="gap-3 px-8 py-4 text-lg font-semibold">
              <Eye className="h-5 w-5" /> View Case Studies
            </Button>
            <Button variant="outline" size="lg" className="gap-3 px-8 py-4 text-lg font-semibold">
              <MessageCircle className="h-5 w-5" /> Let's Talk
            </Button>
          </div>
          <Button variant="ghost" size="lg" className="gap-3">
            <Download className="h-5 w-5" /> Download Resume
          </Button>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {metrics.map((item, index) => (
              <div key={index} className="p-4 border rounded-xl shadow">
                <div className="text-2xl font-bold text-accent">{item.metric}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
