import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Download, ArrowRight, FileText, Video, BookOpen, Image, Code, File, CheckCircle, Smartphone, BarChart3 } from "lucide-react";

export function DownloadsPage() {
  const downloadCategories = [
    {
      title: "Complete Documentation Package",
      description: "All data sheets, technical guides, case studies, and integration documentation in one comprehensive bundle",
      icon: FileText,
      items: [
        { name: "SolarLive Complete Documentation Bundle", size: "24.5 MB", format: "ZIP", downloads: "2,450" }
      ],
      featured: true
    },
    {
      title: "User Guides & Manuals",
      description: "Step-by-step guides for platform usage, configuration, and troubleshooting",
      icon: BookOpen,
      items: [
        { name: "SolarLive Platform User Guide", size: "8.2 MB", format: "PDF", downloads: "5,670" },
        { name: "Quick Start Guide (15 Minutes)", size: "2.1 MB", format: "PDF", downloads: "8,340" },
        { name: "Administrator Configuration Manual", size: "12.4 MB", format: "PDF", downloads: "1,890" },
        { name: "Mobile App User Guide (iOS & Android)", size: "4.6 MB", format: "PDF", downloads: "3,240" },
        { name: "Alarm Configuration Best Practices", size: "3.8 MB", format: "PDF", downloads: "2,560" }
      ]
    },
    {
      title: "Technical Specifications",
      description: "Hardware specs, communication protocols, system architecture, and integration requirements",
      icon: Code,
      items: [
        { name: "Data Logger Hardware Specifications", size: "4.2 MB", format: "PDF", downloads: "1,450" },
        { name: "Power Plant Controller (PPC) Datasheet", size: "3.4 MB", format: "PDF", downloads: "980" },
        { name: "SCADA Integration Guide: DNP3 & IEC 61850", size: "4.8 MB", format: "PDF", downloads: "1,120" },
        { name: "API Documentation & Developer Guide", size: "6.5 MB", format: "PDF", downloads: "2,340" },
        { name: "Communication Protocols Comparison", size: "2.9 MB", format: "PDF", downloads: "1,670" },
        { name: "System Architecture & Network Diagrams", size: "5.1 MB", format: "PDF", downloads: "890" }
      ]
    },
    {
      title: "AI & Analytics Briefs",
      description: "Machine learning methodology, accuracy reports, and AI feature documentation",
      icon: BookOpen,
      items: [
        { name: "Predictive Maintenance AI Technical Brief", size: "2.9 MB", format: "PDF", downloads: "2,120" },
        { name: "Soiling Loss Detection Methodology", size: "2.2 MB", format: "PDF", downloads: "1,780" },
        { name: "Energy Forecasting Accuracy Report", size: "2.6 MB", format: "PDF", downloads: "1,560" },
        { name: "Maintenance Intelligence Optimization Guide", size: "2.3 MB", format: "PDF", downloads: "1,340" },
        { name: "Voice Summary Technology Brief", size: "1.6 MB", format: "PDF", downloads: "890" }
      ]
    },
    {
      title: "Case Studies & ROI Analysis",
      description: "Real-world customer success stories, financial results, and proven savings",
      icon: BarChart3,
      items: [
        { name: "Case Study Compilation: 500+ MW Deployments", size: "6.2 MB", format: "PDF", downloads: "3,450" },
        { name: "ROI Calculator & Savings Analysis", size: "1.8 MB", format: "XLSX", downloads: "2,890" },
        { name: "150 MW Portfolio: 40% Downtime Reduction", size: "2.4 MB", format: "PDF", downloads: "1,670" },
        { name: "100 MW Plant: ₹1.8 Cr Annual Savings", size: "2.1 MB", format: "PDF", downloads: "1,450" },
        { name: "Customer Testimonials & References", size: "1.5 MB", format: "PDF", downloads: "2,340" }
      ]
    },
    {
      title: "Training Videos & Webinar Recordings",
      description: "Video tutorials, webinar recordings, and live demo sessions",
      icon: Video,
      items: [
        { name: "Complete Platform Walkthrough (45 min)", size: "284 MB", format: "MP4", downloads: "1,240" },
        { name: "Predictive Maintenance Webinar Recording", size: "156 MB", format: "MP4", downloads: "890" },
        { name: "SCADA Integration Masterclass (Full Day)", size: "1.2 GB", format: "MP4", downloads: "340" },
        { name: "String-Level Analytics Workshop", size: "198 MB", format: "MP4", downloads: "560" }
      ]
    },
    {
      title: "Presentation Templates & Collateral",
      description: "PowerPoint templates, infographics, and marketing materials",
      icon: Image,
      items: [
        { name: "SolarLive Overview Presentation", size: "12.4 MB", format: "PPTX", downloads: "1,890" },
        { name: "ROI Presentation Template", size: "8.6 MB", format: "PPTX", downloads: "1,340" },
        { name: "Technical Architecture Diagrams", size: "15.2 MB", format: "PPTX", downloads: "780" },
        { name: "Product Feature Infographics", size: "24.5 MB", format: "PNG", downloads: "1,120" },
        { name: "Logo Pack & Brand Assets", size: "18.3 MB", format: "ZIP", downloads: "560" }
      ]
    },
    {
      title: "Mobile Apps",
      description: "iOS and Android apps for field operations and on-the-go monitoring",
      icon: Smartphone,
      items: [
        { name: "SolarLive iOS App", size: "45 MB", format: "App Store", downloads: "3,450" },
        { name: "SolarLive Android App", size: "38 MB", format: "Google Play", downloads: "5,670" },
        { name: "Mobile App Feature List PDF", size: "8.4 MB", format: "PDF", downloads: "890" }
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
              <Download className="w-3 h-3" />
              DOWNLOAD CENTER
            </div>
            
            <h1 className="mb-6">Downloads</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              Access all SolarLive resources—user guides, technical specs, case studies, training videos, mobile apps, and presentation templates. Instant download, no registration required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-12 text-center">
            {[
              { metric: "60+", label: "Resources Available" },
              { metric: "50K+", label: "Total Downloads" },
              { metric: "Free", label: "Instant Access" }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-[28px] font-bold text-primary mb-1">{stat.metric}</p>
                <p className="text-[12px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Categories */}
      <section className="py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {downloadCategories.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`${
                  category.featured
                    ? 'bg-gradient-to-br from-primary/10 to-orange-500/10 border-2 border-primary/30 rounded-3xl p-10'
                    : 'bg-white border border-primary/10 rounded-3xl p-10'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className={`w-14 h-14 ${
                    category.featured 
                      ? 'bg-primary border-2 border-primary' 
                      : 'bg-primary/10 border border-primary/20'
                    } rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <category.icon className={`w-7 h-7 ${category.featured ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-[28px] font-bold text-foreground mb-2">{category.title}</h2>
                        <p className="text-[15px] text-muted-foreground">{category.description}</p>
                      </div>
                      {category.featured && (
                        <div className="bg-primary px-3 py-1.5 rounded-full">
                          <p className="text-[11px] font-bold text-white uppercase tracking-wider">Most Popular</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Download Items */}
                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center gap-4 bg-white border border-primary/10 rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                    >
                      {/* Icon */}
                      <div className="w-12 h-12 bg-muted group-hover:bg-primary/10 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                        {item.format === 'PDF' && <FileText className="w-6 h-6 text-red-600" />}
                        {item.format === 'ZIP' && <File className="w-6 h-6 text-muted-foreground" />}
                        {item.format === 'XLSX' && <FileText className="w-6 h-6 text-green-600" />}
                        {item.format === 'MP4' && <Video className="w-6 h-6 text-purple-600" />}
                        {item.format === 'PPTX' && <FileText className="w-6 h-6 text-orange-600" />}
                        {item.format === 'PNG' && <Image className="w-6 h-6 text-blue-600" />}
                        {(item.format === 'App Store' || item.format === 'Google Play') && <Smartphone className="w-6 h-6 text-primary" />}
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <h3 className="text-[16px] font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-4 text-[13px] text-muted-foreground">
                          <span>{item.format}</span>
                          <span>•</span>
                          <span>{item.size}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Download className="w-3.5 h-3.5" />
                            {item.downloads} downloads
                          </span>
                        </div>
                      </div>

                      {/* Download Button */}
                      {item.format === 'App Store' ? (
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="whitespace-nowrap">
                            <ArrowRight className="w-4 h-4 mr-2" />
                            App Store
                          </Button>
                        </a>
                      ) : item.format === 'Google Play' ? (
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="whitespace-nowrap">
                            <ArrowRight className="w-4 h-4 mr-2" />
                            Google Play
                          </Button>
                        </a>
                      ) : (
                        <Button variant="outline" size="sm" className="whitespace-nowrap group/btn">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-muted rounded-3xl p-12 text-center">
            <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-[32px] font-bold text-foreground mb-4">Get Notified of New Resources</h2>
            <p className="text-[16px] text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to receive updates when we publish new guides, case studies, and training materials
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 px-6 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" className="h-12 px-10 whitespace-nowrap">
                Subscribe
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
            <h2 className="text-white mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact our team for custom documentation, technical specifications, or integration guides
            </p>
            
            <Button size="lg" asChild className="h-12 px-10 text-[15px]">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Request Custom Documentation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}