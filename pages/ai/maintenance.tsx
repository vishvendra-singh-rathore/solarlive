import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { 
  Wrench, 
  CheckCircle2, 
  ArrowRight,
  AlertTriangle,
  Clock,
  TrendingDown,
  Zap,
  Settings,
  BarChart3
} from "lucide-react";

export function MaintenanceIntelligence() {
  const capabilities = [
    { 
      icon: AlertTriangle, 
      title: "Failure Prediction", 
      description: "Machine learning algorithms detect anomalies 2-4 weeks before failure",
      accuracy: "85%+ accuracy"
    },
    { 
      icon: Clock, 
      title: "Maintenance Scheduling", 
      description: "Automated work order generation and optimal scheduling based on priority",
      impact: "40% downtime reduction"
    },
    { 
      icon: TrendingDown, 
      title: "Degradation Tracking", 
      description: "Long-term performance monitoring to identify gradual equipment decline",
      benefit: "Extended asset life"
    },
    { 
      icon: Zap, 
      title: "Real-Time Alerts", 
      description: "Instant notifications for critical issues requiring immediate attention",
      coverage: "24/7 monitoring"
    },
    { 
      icon: Settings, 
      title: "Spare Parts Optimization", 
      description: "Predictive inventory management reducing carrying costs and stockouts",
      savings: "25-35% cost reduction"
    },
    { 
      icon: BarChart3, 
      title: "Root Cause Analysis", 
      description: "Automated diagnostics to identify underlying issues and prevent recurrence",
      value: "Faster resolution"
    }
  ];

  const metrics = [
    { value: "85%+", label: "Prediction Accuracy", description: "For major component failures" },
    { value: "2-4 Weeks", label: "Advance Warning", description: "Before failure occurrence" },
    { value: "40%", label: "Downtime Reduction", description: "Through proactive maintenance" },
    { value: "30%", label: "Cost Savings", description: "On maintenance operations" }
  ];

  const coverageAreas = [
    "Inverter health monitoring and failure prediction",
    "Transformer temperature and oil analysis",
    "String-level underperformance detection",
    "Tracker motor and gearbox diagnostics",
    "Communication equipment health checks",
    "Weather station sensor validation"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-foreground py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(214,117,6,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(15,23,42,0.3)_100%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6">
              <Wrench className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">AI Intelligence</span>
            </div>
            <h1 className="mb-8">
              Maintenance Intelligence
            </h1>
            <p className="text-[20px] text-white/80 mb-6 leading-relaxed">
              Proactive failure detection and automated maintenance optimization
            </p>
            <p className="text-[18px] text-white/60 mb-10 leading-relaxed max-w-3xl">
              AI-powered predictive maintenance reduces downtime by 40% through early failure detection. Machine learning algorithms analyze equipment behavior patterns to forecast issues 2-4 weeks in advance, enabling proactive intervention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base px-8 h-12">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="text-base px-8 h-12 border-2 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
              >
                <Link to="/ai/predictive-analysis">Predictive Analysis</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">
              Maintenance Intelligence Capabilities
            </h2>
            <p className="text-[18px] text-muted-foreground max-w-3xl mx-auto">
              Comprehensive predictive maintenance features for solar assets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <capability.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-bold text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-[15px] text-muted-foreground mb-4 leading-relaxed">
                  {capability.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                  <span className="text-[13px] font-semibold text-primary">
                    {capability.accuracy || capability.impact || capability.benefit || capability.coverage || capability.savings || capability.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-[13px] font-semibold text-primary uppercase tracking-wider">Performance Impact</span>
            </div>
            <h2 className="mb-6">
              Measurable Results
            </h2>
            <p className="text-[18px] text-muted-foreground max-w-3xl mx-auto">
              Quantified improvements from predictive maintenance deployment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-lg border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-[40px] font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-[15px] font-semibold text-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-[14px] text-muted-foreground">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">
              Equipment Coverage
            </h2>
            <p className="text-[18px] text-muted-foreground max-w-3xl mx-auto">
              Comprehensive monitoring across all critical solar plant components
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {coverageAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 bg-muted rounded-lg border border-border"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
                <span className="text-[15px] text-foreground leading-relaxed">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">
              Deploy Predictive Maintenance Today
            </h2>
            <p className="text-[18px] text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Reduce downtime, lower maintenance costs, and extend asset life with AI-powered maintenance intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8 h-12">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 h-12 border-2">
                <Link to="/ai">Explore AI Features</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}