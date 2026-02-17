import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  Activity,
  BarChart3,
  Cloud,
  Lock,
  Bell,
  Layers,
  ArrowRight,
  TrendingUp,
  Database,
  Gauge
} from "lucide-react";

export function Platform() {
  const capabilities = [
    {
      icon: Activity,
      number: "01",
      title: "Real-Time Monitoring",
      tagline: "Live Telemetry & Tracking",
      description: "Monitor plant performance, inverter health, and environmental conditions across your entire portfolio with sub-second data latency. Complete visibility from string level to grid interconnection point.",
      image: "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwbW9kZXJufGVufDF8fHx8MTc3MDk1OTk2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Sub-second data updates from all assets",
        "Unlimited concurrent user access",
        "25+ years comprehensive data archival",
        "Multi-site portfolio consolidation"
      ]
    },
    {
      icon: BarChart3,
      number: "02",
      title: "AI-Powered Analytics",
      tagline: "Machine Learning Intelligence",
      description: "Advanced machine learning algorithms detect anomalies, predict equipment failures, and identify optimization opportunities. Process millions of data points to surface actionable insights that improve plant performance.",
      image: "https://images.unsplash.com/photo-1770233621425-5d9ee7a0a700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGJyYWlufGVufDF8fHx8MTc3MDk3ODU4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Predictive maintenance with failure forecasting",
        "Fleet-wide performance benchmarking",
        "AI-driven energy generation forecasting",
        "Automated anomaly detection & alerts"
      ]
    },
    {
      icon: Cloud,
      number: "03",
      title: "Cloud Infrastructure",
      tagline: "Enterprise-Grade Hosting",
      description: "99.9% uptime SLA with automatic scaling and global data redundancy. Multi-region backup infrastructure ensures your critical solar operations data is always accessible, secure, and performant.",
      image: "https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnMlMjBkYXRhY2VudGVyfGVufDF8fHx8MTc3MDk3ODU5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "99.9% uptime service level agreement",
        "Auto-scaling for unlimited users",
        "Multi-region data redundancy",
        "24/7 infrastructure monitoring"
      ]
    },
    {
      icon: Lock,
      number: "04",
      title: "Security & Compliance",
      tagline: "Bank-Grade Protection",
      description: "AES-256 encryption for data at rest, TLS 1.3 for data in transit. Role-based access control with multi-factor authentication. SOC 2 Type II and ISO 27001 certified for enterprise security requirements.",
      image: "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGVuY3J5cHRpb24lMjBjeWJlcnNlY3VyaXR5fGVufDF8fHx8MTc3MDk3ODYwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "AES-256 encryption for all data",
        "Multi-factor authentication system",
        "SOC 2 Type II & ISO 27001 certified",
        "Granular role-based access control"
      ]
    },
    {
      icon: Bell,
      number: "05",
      title: "Intelligent Alerting",
      tagline: "Smart Notification System",
      description: "Configurable thresholds with automatic escalation protocols. Predictive alerts warn of potential issues before they impact production. Multi-channel notifications via SMS, email, and mobile push.",
      image: "https://images.unsplash.com/photo-1714322148068-923f9f9bfc1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMG1vbml0b3JpbmclMjBjb250cm9sJTIwcm9vbSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA5NzgzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Predictive alerts for equipment issues",
        "Automatic escalation workflows",
        "SMS, email, and push notifications",
        "Custom threshold configuration"
      ]
    },
    {
      icon: Layers,
      number: "06",
      title: "API Integration",
      tagline: "Seamless System Connectivity",
      description: "RESTful APIs and webhooks integrate with existing ERP, SCADA, and business intelligence systems. Support for OPC UA, MQTT, and custom protocols enables connection to any third-party system.",
      image: "https://images.unsplash.com/photo-1764524335053-34cf8a8a3406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYXJjaGl0ZWN0dXJlJTIwbW9kZXJuJTIwc3lzdGVtfGVufDF8fHx8MTc3MDk3ODU5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "RESTful API and webhook support",
        "SCADA protocol compatibility",
        "OPC UA and MQTT connectivity",
        "Custom integration development"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foreground via-[#0A0F1E] to-foreground py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl opacity-30" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-violet-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Layers className="w-3 h-3" />
              PLATFORM OVERVIEW
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Enterprise Solar Intelligence Platform
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed mb-10">
              Complete visibility, predictive intelligence, and optimization automation for solar assets at any scale
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="h-11 px-7">
                <Link to="/contact" className="flex items-center gap-2">
                  Request Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-11 px-7 bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/technology">View Technology</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "500+ MW", label: "Solar Capacity Monitored" },
              { value: "99.9%", label: "Platform Uptime" },
              { value: "15,000+", label: "Active Assets" },
              { value: "< 1 sec", label: "Data Latency" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-[48px] font-bold text-primary mb-2 leading-none">
                  {stat.value}
                </div>
                <div className="text-[13px] text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">Platform Capabilities</h2>
            <p className="text-[19px] text-muted-foreground max-w-2xl">
              Comprehensive tools for monitoring, analysis, and optimization
            </p>
          </motion.div>
        </div>

        {capabilities.map((capability, index) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? 'bg-white' : 'bg-muted/30'}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {/* Number & Icon */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="text-[80px] font-bold text-primary/20 leading-none">
                      {capability.number}
                    </div>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <capability.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-6">
                    <p className="text-[12px] text-primary font-bold uppercase tracking-widest mb-2">
                      {capability.tagline}
                    </p>
                    <h2 className="text-[40px] leading-tight">{capability.title}</h2>
                  </div>

                  {/* Description */}
                  <p className="text-[18px] text-muted-foreground leading-relaxed mb-10">
                    {capability.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <p className="text-[16px] text-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={capability.image}
                        alt={capability.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* System Architecture */}
      <section className="py-28 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="mb-4">System Architecture</h2>
            <p className="text-[19px] text-muted-foreground max-w-2xl">
              Enterprise-grade infrastructure designed for reliability and scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: TrendingUp,
                title: "Fleet Management",
                description: "Portfolio-level visibility and control",
                points: [
                  "Multi-site dashboard consolidation",
                  "Portfolio-level analytics and KPIs",
                  "Cross-site performance comparisons",
                  "Consolidated reporting for stakeholders"
                ]
              },
              {
                icon: Database,
                title: "Asset Intelligence",
                description: "Component-level insights",
                points: [
                  "Component-level monitoring and tracking",
                  "Equipment degradation analysis",
                  "AI-powered failure prediction",
                  "Automated maintenance scheduling"
                ]
              },
              {
                icon: Gauge,
                title: "Operations Center",
                description: "Command and control hub",
                points: [
                  "24/7 centralized command dashboard",
                  "Real-time incident management",
                  "Team collaboration tools",
                  "Workflow automation engine"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-[24px] font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-muted-foreground mb-6">
                  {item.description}
                </p>
                <div className="space-y-3">
                  {item.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-[15px] text-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Experience the Platform</h2>
            <p className="text-[19px] text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a personalized demo to see how SolarLive transforms solar operations
            </p>
            <Button size="lg" asChild className="h-12 px-10">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Request Platform Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}