import { Link } from "react-router";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function FooterCTA() {
  return (
    <section className="bg-muted border-y border-border">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[38px] lg:text-[44px] font-bold text-foreground mb-6 tracking-tight leading-[1.1]">
            Ready to Optimize Your Solar Operations?
          </h2>
          <p className="text-[17px] text-muted-foreground mb-10 leading-relaxed">
            Join 500+ enterprises using SolarLive's AI-powered intelligence platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Schedule Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/solutions">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Platform
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
