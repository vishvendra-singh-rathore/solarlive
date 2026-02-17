import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { FileText, Download, Eye, ArrowRight, Zap, Activity, Brain, Shield, Smartphone, BarChart3 } from "lucide-react";

export function DataSheetsPage() {
  const datasheets = [
    {
      category: "Platform Overview",
      icon: BarChart3,
      sheets: [
        {
          title: "SolarLive Platform Overview",
          description: "Complete platform capabilities—monitoring, analytics, AI features, mobile apps, and SCADA integration",
          pages: "8 pages",
          size: "2.4 MB",
          version: "v2.5"
        },
        {
          title: "Technical Specifications Sheet",
          description: "Hardware requirements, communication protocols, data rates, supported equipment, and system architecture",
          pages: "12 pages",
          size: "3.1 MB",
          version: "v2.5"
        },
        {
          title: "ROI Calculator & Pricing Guide",
          description: "Cost-benefit analysis framework, pricing tiers, typical savings scenarios, and payback period calculations",
          pages: "6 pages",
          size: "1.8 MB",
          version: "2025 Q1"
        }
      ]
    },
    {
      category: "AI & Analytics",
      icon: Brain,
      sheets: [
        {
          title: "Predictive Maintenance AI Datasheet",
          description: "ML algorithms, failure prediction accuracy, equipment coverage, advance warning periods, and case studies",
          pages: "10 pages",
          size: "2.9 MB",
          version: "v1.8"
        },
        {
          title: "Soiling Loss Detection Technical Brief",
          description: "Detection methodology, sensitivity thresholds, ROI optimization algorithms, and cleaning recommendations",
          pages: "7 pages",
          size: "2.2 MB",
          version: "v1.5"
        },
        {
          title: "Energy Forecasting Accuracy Report",
          description: "Forecast horizons, accuracy benchmarks, weather integration, grid compliance, and validation methodology",
          pages: "9 pages",
          size: "2.6 MB",
          version: "v1.6"
        },
        {
          title: "Maintenance Intelligence Optimization Guide",
          description: "ROI-based scheduling, weather-aware planning, cost reduction strategies, and workflow automation",
          pages: "8 pages",
          size: "2.3 MB",
          version: "v1.4"
        }
      ]
    },
    {
      category: "Hardware & Integration",
      icon: Zap,
      sheets: [
        {
          title: "Data Logger Hardware Specifications",
          description: "Industrial edge computing specs, communication interfaces, environmental ratings, and installation guide",
          pages: "14 pages",
          size: "4.2 MB",
          version: "DL-300 Series"
        },
        {
          title: "Power Plant Controller (PPC) Datasheet",
          description: "Grid-compliant PPC features, LVRT/HVRT capabilities, frequency response, reactive power control, and certifications",
          pages: "11 pages",
          size: "3.4 MB",
          version: "PPC-500"
        },
        {
          title: "Remote Control Panel Specifications",
          description: "Centralized control capabilities, switchgear integration, automation features, and safety protocols",
          pages: "9 pages",
          size: "2.8 MB",
          version: "RCP-2025"
        }
      ]
    },
    {
      category: "SCADA & Grid Integration",
      icon: Shield,
      sheets: [
        {
          title: "SCADA Integration Guide: DNP3 & IEC 61850",
          description: "Protocol specifications, point mapping, SLDC requirements, commissioning process, and compliance documentation",
          pages: "16 pages",
          size: "4.8 MB",
          version: "v3.2"
        },
        {
          title: "Grid Compliance & Certification Portfolio",
          description: "CERC Grid Code compliance, LVRT testing reports, DNP3 Level 3 certification, and regulatory approvals",
          pages: "20 pages",
          size: "5.6 MB",
          version: "2025"
        },
        {
          title: "Communication Protocols Comparison",
          description: "DNP3 vs IEC 61850 vs Modbus—technical comparison, use cases, performance benchmarks, and selection guide",
          pages: "10 pages",
          size: "2.9 MB",
          version: "v2.0"
        }
      ]
    },
    {
      category: "Mobile & Field Operations",
      icon: Smartphone,
      sheets: [
        {
          title: "Mobile App Feature List & Screenshots",
          description: "iOS/Android capabilities, voice summary, field inspection tools, offline mode, and workflow automation",
          pages: "12 pages",
          size: "8.4 MB",
          version: "v4.2"
        },
        {
          title: "Voice Summary Technology Brief",
          description: "AI voice generation, daily briefing content, multi-language support, and audio quality specifications",
          pages: "5 pages",
          size: "1.6 MB",
          version: "v1.2"
        }
      ]
    },
    {
      category: "Case Studies & Success Stories",
      icon: Activity,
      sheets: [
        {
          title: "Case Study Compilation: 500+ MW Deployments",
          description: "Six detailed case studies covering predictive maintenance, soiling optimization, SCADA integration, and portfolio management",
          pages: "24 pages",
          size: "6.2 MB",
          version: "2025 Q1"
        },
        {
          title: "ROI Analysis: Proven Savings Across 500+ MW",
          description: "Aggregated financial results, downtime reduction metrics, cost savings analysis, and customer testimonials",
          pages: "10 pages",
          size: "2.8 MB",
          version: "2025 Q1"
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foreground to-[#0A0F1E] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-5 bg-primary/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <FileText className="w-3 h-3" />
              TECHNICAL DOCUMENTATION
            </div>
            
            <h1 className="mb-6">Data Sheets</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              Comprehensive technical documentation, specifications, integration guides, and case studies—everything you need to evaluate and deploy SolarLive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-12 text-center">
            {[
              { metric: "35+", label: "Technical Documents" },
              { metric: "200+", label: "Pages of Documentation" },
              { metric: "PDF", label: "Instant Download" }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-[28px] font-bold text-primary mb-1">{stat.metric}</p>
                <p className="text-[12px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sheets by Category */}
      <section className="py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {datasheets.map((category, catIdx) => (
              <div key={catIdx}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-[28px] font-bold text-foreground">{category.category}</h2>
                    <p className="text-[14px] text-muted-foreground">{category.sheets.length} documents available</p>
                  </div>
                </div>

                {/* Documents Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {category.sheets.map((sheet, sheetIdx) => (
                    <motion.div
                      key={sheetIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: sheetIdx * 0.1 }}
                      className="bg-white border border-primary/10 rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-orange-500/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex gap-2">
                          <button className="w-10 h-10 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center transition-colors group/btn">
                            <Eye className="w-5 h-5 text-muted-foreground group-hover/btn:text-primary transition-colors" />
                          </button>
                          <button className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group/btn">
                            <Download className="w-5 h-5 text-primary group-hover/btn:text-white transition-colors" />
                          </button>
                        </div>
                      </div>

                      <h3 className="text-[20px] font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                        {sheet.title}
                      </h3>

                      <p className="text-[14px] text-muted-foreground leading-relaxed mb-6">
                        {sheet.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-6 pt-6 border-t border-border text-[13px] text-muted-foreground">
                        <div>
                          <span className="font-semibold text-foreground">{sheet.pages}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">{sheet.size}</span>
                        </div>
                        <div className="ml-auto">
                          <div className="bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                            <span className="text-[11px] font-bold text-primary">{sheet.version}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download All CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 to-orange-500/10 border border-primary/20 rounded-3xl p-12 text-center">
            <div className="w-16 h-16 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-[32px] font-bold text-foreground mb-4">Download Complete Documentation Package</h2>
            <p className="text-[16px] text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get all 35+ data sheets, case studies, and technical guides in one comprehensive ZIP file
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-10 text-[15px]">
                <Download className="w-5 h-5 mr-2" />
                Download All (24.5 MB)
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request Custom Documentation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-foreground to-[#0A0F1E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Need Technical Consultation?</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our engineering team can help you evaluate technical requirements and design the optimal solution
            </p>
            
            <Button size="lg" asChild className="h-12 px-10 text-[15px]">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Talk to Engineering Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
