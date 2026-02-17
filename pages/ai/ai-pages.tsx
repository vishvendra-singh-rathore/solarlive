import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Brain, TrendingUp, CloudRain, Mic, LineChart, Compass, ArrowRight } from "lucide-react";

// AI Pages
export function PredictiveAnalysisPage() {
  return <AITemplate title="Predictive Analysis" tagline="AI-Driven Failure Forecasting" description="AI-powered predictive analytics for failure forecasting and maintenance optimization" />;
}

export function MaintenanceIntelligencePage() {
  return <AITemplate title="Maintenance Intelligence" tagline="Proactive Maintenance Optimization" description="Proactive maintenance scheduling powered by machine learning algorithms" />;
}

export function SoilingDetectionPage() {
  return <AITemplate title="Soiling Loss Detection" tagline="Automated Cleaning Optimization" description="Automated soiling detection and cleaning optimization using computer vision" />;
}

export function VoiceSummaryPage() {
  return <AITemplate title="Voice Summary" tagline="Natural Language Interface" description="Voice-powered plant summaries and natural language querying" />;
}

export function EnergyForecastingPage() {
  return <AITemplate title="Energy Forecasting" tagline="Day-Ahead Predictions" description="AI-powered energy generation forecasting for day-ahead planning" />;
}

export function SolarCompassPage() {
  return <AITemplate title="Solar Compass" tagline="Performance Benchmarking" description="Industry benchmarking and performance comparison with similar solar plants" />;
}

function AITemplate({ title, tagline, description }: { title: string; tagline: string; description: string; }) {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-foreground via-foreground to-foreground/95 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(214,117,6,0.20),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-block mb-5 bg-gradient-to-r from-primary to-orange-600 text-white text-[9px] font-bold tracking-wider px-2 py-1 rounded-full">NEW</div>
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-5">{tagline}</p>
            <h1 className="mb-6">{title}</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">{description}</p>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="mb-6">AI-Powered Intelligence</h2>
          <p className="text-[16px] text-muted-foreground leading-relaxed max-w-3xl">
            Transform your solar operations with cutting-edge artificial intelligence and machine learning.
          </p>
        </div>
      </section>
      <section className="py-24 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Experience AI in Solar</h2>
          <Button size="lg" asChild className="h-12 px-10">
            <Link to="/contact" className="inline-flex items-center gap-2">Request Demo <ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
