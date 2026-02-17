import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { HeroWithSlideshow } from "./home-hero-merged";
import { LiveDashboard } from "../components/live-dashboard";
import { 
  Activity, 
  BarChart3, 
  Zap, 
  Cloud, 
  Cpu, 
  ArrowRight,
  Smartphone,
  Layout,
  Database,
  Gauge,
  Monitor,
  Brain,
  CloudRain,
  Mic,
  LineChart,
  Compass,
  Building2,
  Factory,
  Sun,
  Users,
  Target,
  TrendingUp,
  Shield,
  CheckCircle2,
  BatteryCharging,
  Wifi
} from "lucide-react";
import heroImage from "figma:asset/0bd2393a8074f7af7fc3a9d9adda8a640a5b3a7d.png";
import dashboardMockup from "figma:asset/623b691249519e05cba01389fdf02b21343e7ba4.png";

export function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Stats
  const stats = [
    { value: "500+ MW", label: "Solar Capacity Monitored" },
    { value: "99.8%", label: "System Uptime" },
    { value: "15,000+", label: "Active Assets" },
    { value: "24/7", label: "Remote Monitoring" }
  ];

  // Three Pillars
  const pillars = [
    {
      icon: Activity,
      headline: "Real-Time Visibility",
      body: "Continuous monitoring of inverters, strings, meters, and environmental sensors. Centralized SCADA integration, automated alerts, and live performance tracking across your entire solar portfolio.",
      features: [
        "Multi-site dashboard consolidation",
        "Inverter-level granularity",
        "Weather station integration",
        "Alarm management system"
      ]
    },
    {
      icon: BarChart3,
      headline: "AI-Powered Intelligence",
      body: "Machine learning algorithms detect anomalies, predict equipment failures, and identify optimization opportunities. Our analytics engine processes millions of data points to surface insights that matter.",
      features: [
        "Predictive maintenance scoring",
        "Soiling loss quantification",
        "Performance ratio analysis",
        "Energy forecasting models"
      ]
    },
    {
      icon: Zap,
      headline: "Performance Enhancement",
      body: "Data-driven recommendations for maximizing energy yield, reducing downtime, and extending asset life. Remote control capabilities enable immediate corrective action.",
      features: [
        "Remote inverter control",
        "Cleaning schedule optimization",
        "Curtailment management",
        "Portfolio benchmarking"
      ]
    }
  ];

  // Products
  const products = [
    {
      icon: Activity,
      title: "Remote Monitoring System",
      description: "Core monitoring platform for real-time data acquisition, storage, and visualization. Supports 100+ inverter brands and protocols.",
      specs: "Modbus TCP/RTU, IEC 61850, DNP3 support"
    },
    {
      icon: Cloud,
      title: "Weather Monitoring System",
      description: "Integrated weather data collection. POA irradiance, ambient temperature, wind speed, and soiling sensors.",
      specs: "1-second sampling, calibrated sensors"
    },
    {
      icon: Layout,
      title: "Central Dashboard",
      description: "Web-based unified interface for multi-site monitoring. Customizable widgets, role-based access, white-label capability.",
      specs: "Browser-based, mobile responsive"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "iOS and Android applications for field technicians and managers. Offline capability for remote sites.",
      specs: "Real-time alerts, photo uploads, work orders"
    },
    {
      icon: Database,
      title: "Data Logger",
      description: "Industrial-grade edge computing device. Local data buffering, protocol conversion, and edge analytics.",
      specs: "-40°C to 70°C operation, 4G/Ethernet"
    },
    {
      icon: Cpu,
      title: "Power Plant Controller",
      description: "Grid-compliant plant controller for active power regulation and reactive power control.",
      specs: "IEC 61850 certified, <100ms response"
    },
    {
      icon: Gauge,
      title: "Remote Control Panel",
      description: "Secure remote operation interface. Inverter start/stop, setpoint adjustment, curtailment execution.",
      specs: "Multi-factor authentication, audit logging"
    },
    {
      icon: Monitor,
      title: "SCADA Integration",
      description: "Enterprise SCADA connectivity module. Seamless data exchange with third-party systems.",
      specs: "OPC UA, REST API, MQTT protocols"
    }
  ];

  // AI Features
  const aiFeatures = [
    {
      title: "Predictive Maintenance",
      description: "Failure prediction algorithms analyze equipment behavior patterns to forecast inverter, transformer, and tracker failures before they occur. Reduce unplanned downtime by up to 40%.",
      technical: "Time-series anomaly detection, degradation modeling, component-specific ML models"
    },
    {
      title: "Maintenance Intelligence",
      description: "Automated work order generation based on predictive alerts. Integration with CMMS systems. Technician dispatch optimization and spare parts forecasting.",
      technical: "Rule-based expert systems, priority scoring, resource optimization algorithms"
    },
    {
      title: "Soiling Loss Detection",
      description: "Quantify energy losses due to panel soiling. Differentiate between soiling and equipment issues. Optimize cleaning schedules based on cost-benefit analysis.",
      technical: "Performance ratio regression, weather correlation, site-specific soiling models"
    },
    {
      title: "Voice Summary",
      description: "Natural language query interface. Ask questions about plant performance in plain English. Voice-enabled mobile app for hands-free operation.",
      technical: "LLM integration, voice recognition, contextual data retrieval"
    },
    {
      title: "Energy Forecasting",
      description: "Day-ahead and intraday generation forecasts. Weather-integrated prediction models. Grid scheduling and power trading support.",
      technical: "Ensemble ML models, NWP integration, probabilistic forecasting"
    },
    {
      title: "Solar Compass",
      description: "Benchmarking engine that compares your plant performance against similar installations. Identify optimization opportunities based on peer analysis.",
      technical: "Clustering algorithms, normalized performance metrics, regional comparisons"
    }
  ];

  // Industries
  const industries = [
    {
      icon: Building2,
      title: "Independent Power Producers",
      description: "Multi-site portfolio monitoring for renewable energy developers. Consolidated reporting for investors and lenders. Performance guarantees tracking.",
      scale: "50-500 MW portfolios"
    },
    {
      icon: Zap,
      title: "Utilities & DISCOMs",
      description: "Grid-connected solar plant monitoring. Compliance reporting for regulatory requirements. Integration with utility SCADA and EMS systems.",
      scale: "10-200 MW plants"
    },
    {
      icon: Factory,
      title: "Commercial & Industrial",
      description: "Rooftop solar monitoring for corporate sustainability programs. Energy cost tracking and savings validation. Multi-location portfolio management.",
      scale: "100 kW - 5 MW installations"
    },
    {
      icon: Users,
      title: "EPC Contractors",
      description: "O&M monitoring during warranty period. Handover documentation and performance verification. Multi-project dashboard for ongoing contracts.",
      scale: "Variable project sizes"
    },
    {
      icon: Target,
      title: "Government & PSUs",
      description: "Specialized monitoring for government solar initiatives. PM-KUSUM, Surya Ghar, and solar park programs. Compliance and subsidy tracking.",
      scale: "1 kW - 100 MW"
    },
    {
      icon: Sun,
      title: "Agricultural Solar",
      description: "Solar pump monitoring and agricultural applications. Remote pump control and water delivery tracking. Farmer-friendly mobile interface.",
      scale: "5-10 HP pumps"
    }
  ];

  // Case Studies
  const caseStudies = [
    {
      client: "100 MW Utility Solar Plant",
      title: "Rajasthan IPP",
      results: [
        "6.2% improvement in Performance Ratio",
        "₹2.4 Cr annual revenue increase",
        "35% reduction in water consumption",
        "ROI achieved in 4 months"
      ],
      quote: "SolarLive's AI recommendations transformed our O&M approach. The data-driven cleaning schedule alone paid for the platform in four months.",
      attribution: "Chief Operating Officer",
      path: "/resources/case-studies"
    },
    {
      client: "25-Site Corporate Portfolio",
      title: "Commercial Rooftop Portfolio",
      results: [
        "99.2% uptime across portfolio",
        "4.5 hours average response time",
        "18% reduction in O&M costs",
        "Complete audit trail for sustainability reporting"
      ],
      quote: "We finally have single-pane visibility across all our sites. The mobile alerts help us respond to issues immediately.",
      attribution: "Sustainability Director",
      path: "/resources/case-studies"
    },
    {
      client: "50 MW Solar Park",
      title: "EPC O&M Contract",
      results: [
        "95% reduction in reporting time",
        "Zero SLA breaches since deployment",
        "100% client retention",
        "3 contract renewals attributed to reporting quality"
      ],
      quote: "The automated client reports have been a game-changer. Our clients get real-time access, and we've eliminated weeks of manual work.",
      attribution: "Projects Head",
      path: "/resources/case-studies"
    }
  ];

  return (
    <div>
      {/* Hero Section with Integrated Slideshow */}
      <HeroWithSlideshow />

      {/* Live Dashboard Section */}
      <LiveDashboard />

      {/* Pillars Section */}
      <section className="py-28 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="mb-4">Complete Solar Operations Platform</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time monitoring, AI-powered analytics, and performance optimization in one unified platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg border border-border hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <pillar.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-[20px]">{pillar.headline}</h3>
                <p className="text-[15px] text-muted-foreground mb-6 leading-relaxed">
                  {pillar.body}
                </p>
                <ul className="space-y-2.5">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-[14px] text-foreground">
                      <div className="w-1 h-1 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="mb-4">Platform Components</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modular products that integrate seamlessly to form a complete monitoring ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-6 rounded-lg border border-border bg-white hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 flex items-center justify-center mb-4">
                  <product.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h5 className="mb-2 text-[16px]">{product.title}</h5>
                <p className="text-[14px] text-muted-foreground mb-3 leading-relaxed">
                  {product.description}
                </p>
                <p className="text-[12px] text-muted-foreground/80">
                  {product.specs}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-28 bg-foreground text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-white mb-4">AI-Powered Intelligence</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Machine learning models trained on millions of operational hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white/5 backdrop-blur p-7 rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <h5 className="text-white mb-3 text-[18px]">{feature.title}</h5>
                <p className="text-[15px] text-white/60 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[12px] text-white/40">
                    {feature.technical}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="mb-4">Trusted by Energy Leaders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Serving utilities, independent power producers, and commercial operators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white p-8 rounded-xl border border-border hover:border-primary/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-12 h-12 mb-6 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <industry.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h5 className="mb-3 text-[18px] font-bold">{industry.title}</h5>
                  <p className="text-[14px] text-muted-foreground mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border/50">
                    <Zap className="w-3 h-3 text-primary flex-shrink-0" strokeWidth={2.5} />
                    <p className="text-[11px] text-primary font-semibold uppercase tracking-wider">
                      {industry.scale}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-28 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="mb-4">Results That Matter</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real performance improvements for solar operators across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="inline-block px-3 py-1 bg-primary/10 rounded mb-5">
                  <span className="text-[12px] font-semibold text-primary uppercase tracking-wide">
                    {study.client}
                  </span>
                </div>

                <h5 className="mb-6 text-[18px]">{study.title}</h5>

                <div className="space-y-2.5 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2.5 mt-2 flex-shrink-0" />
                      <p className="text-[14px] text-foreground">{result}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-6 p-5 bg-muted/50 rounded border-l-2 border-primary">
                  <p className="text-[14px] text-foreground mb-2 leading-relaxed">
                    "{study.quote}"
                  </p>
                  <p className="text-[12px] text-muted-foreground">
                    — {study.attribution}
                  </p>
                </div>

                <Link 
                  to={study.path}
                  className="inline-flex items-center text-[14px] font-medium text-primary hover:gap-2 transition-all"
                >
                  Read Case Study
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-foreground text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[40px] font-bold text-white mb-5">
              See SolarLive in Action
            </h2>
            <p className="text-[18px] text-white/60 mb-10 leading-relaxed">
              Schedule a personalized demo with our solutions team.
            </p>
            <Button 
              size="lg"
              asChild 
              className="h-12 px-10"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Request Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}