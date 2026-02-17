import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Zap, ArrowRight, Check, Activity, Shield, TrendingUp, Globe, Cloud, Gauge, BarChart3, Layers, Radio, Lock, AlertCircle, Target, Users, Database, Cpu, Monitor, Smartphone, LineChart } from "lucide-react";

export function UtilityScalePage() {
  const capabilities = [
    {
      icon: Activity,
      title: "Real-Time SCADA Integration",
      description: "DNP3 & IEC 61850 certified connectivity to SLDC and utility control centers. Bi-directional communication for grid commands, setpoint changes, and active/reactive power control.",
      features: [
        "DNP3, IEC 61850, Modbus TCP/RTU protocols",
        "SLDC compliance & reporting automation",
        "Grid code compliance (CEA, IEGC)",
        "Reactive power control & PF management"
      ]
    },
    {
      icon: Shield,
      title: "Grid-Compliant Plant Control",
      description: "Automatic frequency response, voltage regulation, and ramp rate control. Meet all grid code requirements with built-in compliance monitoring and reporting.",
      features: [
        "Automatic generation control (AGC)",
        "Frequency & voltage regulation",
        "Ramp rate control & curtailment",
        "Anti-islanding protection"
      ]
    },
    {
      icon: Layers,
      title: "Multi-Site Portfolio Management",
      description: "Unified dashboard for IPPs managing 100s of MW across multiple states. Compare performance, benchmark sites, and identify optimization opportunities.",
      features: [
        "Consolidated multi-site view",
        "Cross-site performance benchmarking",
        "Portfolio-level analytics",
        "Custom reporting for stakeholders"
      ]
    },
    {
      icon: TrendingUp,
      title: "Performance Guarantee Tracking",
      description: "Automated PR tracking, contractual performance monitoring, and O&M penalty calculations. Generate audit-ready reports for lenders and investors.",
      features: [
        "Contractual PR vs actual tracking",
        "O&M penalty calculations",
        "Investor-grade reporting",
        "Availability guarantee monitoring"
      ]
    },
    {
      icon: Cloud,
      title: "Advanced Weather Integration",
      description: "Hyperlocal weather data, satellite irradiance, and soiling sensors. AI-powered forecasting for day-ahead generation predictions with 95%+ accuracy.",
      features: [
        "Weather station integration",
        "Satellite GHI/DNI data",
        "Soiling ratio sensors",
        "15-day energy forecasting"
      ]
    },
    {
      icon: Database,
      title: "Industrial IoT Architecture",
      description: "Edge computing with local data loggers, redundant cloud storage, and real-time data streaming. 99.9% uptime with automatic failover and data recovery.",
      features: [
        "Industrial edge gateways",
        "Redundant connectivity (4G/LTE backup)",
        "Local data buffering",
        "99.9% platform uptime SLA"
      ]
    }
  ];

  const technicalSpecs = [
    { category: "Plant Capacity", specs: [
      { label: "Minimum Size", value: "10 MW" },
      { label: "Maximum Size", value: "500 MW" },
      { label: "Multi-Site Support", value: "Unlimited" },
      { label: "Data Points", value: "50M+ daily" }
    ]},
    { category: "Data & Monitoring", specs: [
      { label: "Data Resolution", value: "1-second" },
      { label: "Historical Data", value: "25 years" },
      { label: "Alert Latency", value: "<2 minutes" },
      { label: "Report Generation", value: "Real-time" }
    ]},
    { category: "Connectivity", specs: [
      { label: "Primary Connection", value: "Ethernet/Fiber" },
      { label: "Backup Connection", value: "4G/LTE" },
      { label: "SCADA Protocols", value: "DNP3, IEC 61850" },
      { label: "API Rate Limit", value: "Unlimited" }
    ]},
    { category: "Reliability", specs: [
      { label: "Platform Uptime", value: "99.9%" },
      { label: "Data Accuracy", value: "±0.5%" },
      { label: "Redundancy", value: "Multi-region" },
      { label: "Disaster Recovery", value: "<15 minutes" }
    ]}
  ];

  const integrations = [
    {
      icon: Monitor,
      category: "Inverters",
      brands: "Huawei, SMA, Sungrow, ABB, Growatt, Delta, Fronius, SolarEdge",
      protocols: "Modbus TCP/RTU, Sunspec"
    },
    {
      icon: Radio,
      category: "Weather Stations",
      brands: "Vaisala, Kipp & Zonen, IMD, Campbell Scientific, Delta OHM",
      protocols: "Modbus, RS-485, API"
    },
    {
      icon: Gauge,
      category: "Power Meters",
      brands: "Schneider, ABB, Siemens, L&T, Fluke, Yokogawa",
      protocols: "Modbus, DNP3, IEC 61850"
    },
    {
      icon: Cpu,
      category: "SCADA Systems",
      brands: "ABB, Siemens, Schneider, GE, Hitachi, AVEVA",
      protocols: "DNP3, IEC 61850, OPC UA"
    }
  ];

  const useCases = [
    {
      title: "Independent Power Producers (IPPs)",
      icon: Zap,
      challenge: "Managing 200+ MW portfolios across 8 states with multiple O&M partners. Need unified visibility, performance benchmarking, and automated reporting for lenders.",
      solution: "Multi-site dashboard with cross-portfolio analytics, automated O&M penalty calculations, and investor-grade reports. Saved ₹8 Cr annually through optimized O&M contracts.",
      results: [
        "₹8 Cr annual O&M savings",
        "15% improvement in fleet PR",
        "90% reduction in reporting time",
        "Zero SLDC compliance penalties"
      ]
    },
    {
      title: "Utility Operators",
      icon: Globe,
      challenge: "Grid-connected 150 MW plant requiring strict frequency response, voltage regulation, and SLDC compliance. Manual control causing frequent penalties.",
      solution: "Automated grid control with DNP3 integration to SLDC. AI-powered AGC, reactive power optimization, and compliance monitoring. Real-time alerts for grid violations.",
      results: [
        "₹2 Cr saved in SLDC penalties",
        "99.8% grid code compliance",
        "40% faster frequency response",
        "Zero islanding incidents"
      ]
    },
    {
      title: "EPC Contractors",
      icon: Target,
      challenge: "Commissioning 50 MW plant with tight performance guarantee timelines. Need rapid data validation, PR calculations, and handover documentation.",
      solution: "Accelerated commissioning with pre-configured templates, automated PR reporting, and real-time validation dashboards. Complete handover package generation.",
      results: [
        "30% faster commissioning",
        "100% data validation accuracy",
        "Zero post-handover disputes",
        "₹50L saved in testing costs"
      ]
    }
  ];

  const metrics = [
    { icon: Zap, metric: "500+ MW", label: "Under Management", sublabel: "Across 120+ plants" },
    { icon: TrendingUp, metric: "99.8%", label: "Average Plant PR", sublabel: "vs 96% industry avg" },
    { icon: Shield, metric: "99.9%", label: "Platform Uptime", sublabel: "SLA-backed guarantee" },
    { icon: Globe, metric: "8", label: "States Covered", sublabel: "India + expanding" }
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
              <Zap className="w-3 h-3" />
              ENTERPRISE SOLAR OPERATIONS
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Utility-Scale Solar Monitoring System
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed mb-10">
              Enterprise-grade monitoring, control, and analytics for 10-500 MW solar power plants. Complete SCADA integration, grid compliance, and multi-site portfolio management for IPPs, utility operators, and large solar asset owners.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5"
                >
                  <item.icon className="w-6 h-6 text-primary mb-3" />
                  <p className="text-[28px] font-bold text-white mb-1">{item.metric}</p>
                  <p className="text-[13px] font-semibold text-white/90 mb-0.5">{item.label}</p>
                  <p className="text-[11px] text-white/50">{item.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              CORE CAPABILITIES
            </p>
            <h2 className="mb-5">Built for Utility-Scale Operations</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Enterprise features designed for the demanding requirements of large-scale solar operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-muted/30 to-white border border-primary/10 rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <capability.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-[20px] font-bold text-foreground mb-4">{capability.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                  {capability.description}
                </p>
                <div className="space-y-2">
                  {capability.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-[13px] text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              TECHNICAL SPECIFICATIONS
            </p>
            <h2 className="mb-5">Enterprise-Grade Performance</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Built to handle the most demanding utility-scale requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technicalSpecs.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-primary/10 rounded-2xl p-8"
              >
                <h3 className="text-[18px] font-bold text-foreground mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0">
                      <span className="text-[14px] text-muted-foreground">{spec.label}</span>
                      <span className="text-[16px] font-bold text-primary">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Integrations */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              HARDWARE INTEGRATIONS
            </p>
            <h2 className="mb-5 text-white">Works With All Major Brands</h2>
            <p className="text-[16px] text-white/60 leading-relaxed">
              Pre-configured integrations for 100+ inverter, meter, and weather station models
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {integrations.map((integration, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <integration.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-white mb-2">{integration.category}</h3>
                    <p className="text-[12px] text-white/50 uppercase tracking-wider">{integration.protocols}</p>
                  </div>
                </div>
                <p className="text-[14px] text-white/70 leading-relaxed">{integration.brands}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              CUSTOMER SUCCESS STORIES
            </p>
            <h2 className="mb-5">Real-World Results</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              How utility-scale operators are transforming their operations with SolarLive
            </p>
          </div>

          <div className="space-y-8">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-muted/30 to-white border border-primary/10 rounded-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-[2fr,1fr]">
                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                        <useCase.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-[22px] font-bold text-foreground">{useCase.title}</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-[14px] font-bold text-foreground uppercase tracking-wider mb-3">The Challenge</h4>
                        <p className="text-[15px] text-muted-foreground leading-relaxed">{useCase.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-[14px] font-bold text-foreground uppercase tracking-wider mb-3">The Solution</h4>
                        <p className="text-[15px] text-muted-foreground leading-relaxed">{useCase.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-br from-primary/10 to-orange-500/10 border-l border-primary/20 p-8 lg:p-10">
                    <h4 className="text-[14px] font-bold text-foreground uppercase tracking-wider mb-6">Results Achieved</h4>
                    <div className="space-y-4">
                      {useCase.results.map((result, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <p className="text-[15px] text-foreground font-medium leading-relaxed">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-5">Utility-Scale Monitoring in Action</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              From control rooms to field operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-primary/20"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200"
                alt="Utility scale solar farm aerial view"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-primary/20"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200"
                alt="Solar plant control room"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-foreground to-[#0A0F1E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Ready to Transform Your Utility-Scale Operations?</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 120+ utility-scale plants already optimized with SolarLive. Schedule a demo to see enterprise monitoring in action.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/products">
                  Explore Products
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
