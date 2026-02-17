import { motion } from "motion/react";
import { useEffect } from "react";
import { useLocation, Link } from "react-router";
import { Button } from "../components/ui/button";
import { 
  FileText,
  Presentation,
  Video,
  Calendar,
  Download,
  BookOpen,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export function ResourcesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const resources = [
    {
      id: "case-studies",
      icon: Presentation,
      title: "Case Studies & Success Stories",
      description: "Real-world implementations showcasing measurable performance improvements and ROI across utility-scale and commercial solar installations",
      items: [
        "100 MW Rajasthan IPP - 6.2% PR improvement, ₹2.4 Cr annual revenue increase",
        "25-Site Commercial Portfolio - 99.2% uptime, 18% O&M cost reduction",
        "50 MW Solar Park EPC - 95% reporting time reduction, zero SLA breaches",
        "Agricultural solar pump deployment - 40% water delivery improvement",
        "Government solar initiative tracking - Complete subsidy compliance"
      ]
    },
    {
      id: "articles",
      icon: FileText,
      title: "Articles & Technical Blog",
      description: "In-depth technical articles, industry insights, and best practices for solar plant operations and monitoring",
      items: [
        "Advanced inverter diagnostics and failure pattern recognition",
        "Soiling loss quantification methodologies and regional variations",
        "Grid code compliance for utility-scale solar plants in India",
        "Performance ratio analysis and benchmarking techniques",
        "Data acquisition best practices for reliable monitoring",
        "Weather station calibration and maintenance guidelines"
      ]
    },
    {
      id: "tutorials",
      icon: Video,
      title: "Video Tutorials & Webinars",
      description: "Step-by-step video guides covering platform features, configuration, and advanced analytics",
      items: [
        "Platform onboarding and initial setup (15 minutes)",
        "Creating custom dashboards and reports (20 minutes)",
        "Mobile app configuration for field teams (10 minutes)",
        "Setting up automated alerts and escalations (12 minutes)",
        "Interpreting AI-powered predictive maintenance alerts (18 minutes)",
        "Multi-site portfolio management techniques (25 minutes)"
      ]
    },
    {
      id: "events",
      icon: Calendar,
      title: "Events & Webinars",
      description: "Upcoming industry events, product demonstrations, and technical webinar schedules",
      items: [
        "Monthly Product Demo Sessions - First Tuesday of every month",
        "Quarterly Solar O&M Best Practices Webinar",
        "Annual SolarLive User Conference",
        "Regional training workshops for field technicians",
        "Industry conference participation (REI, Renewable Watch, etc.)",
        "Custom training sessions for enterprise clients"
      ]
    },
    {
      id: "data-sheets",
      icon: BookOpen,
      title: "Product Datasheets & Documentation",
      description: "Comprehensive technical specifications, integration guides, and product documentation",
      items: [
        "RMS Platform Technical Specifications (PDF, 2.4 MB)",
        "Data Logger Hardware Specifications and Installation Guide",
        "API Documentation for Custom Integrations (v2.1)",
        "SCADA Protocol Compatibility Matrix",
        "Mobile App User Manual (iOS & Android)",
        "Power Plant Controller Grid Code Compliance Certificate"
      ]
    },
    {
      id: "downloads",
      icon: Download,
      title: "Downloads & Software Tools",
      description: "Downloadable resources including mobile apps, desktop tools, and configuration utilities",
      items: [
        "SolarLive Mobile App (iOS App Store | Google Play)",
        "Desktop Dashboard Client (Windows/Mac/Linux)",
        "Data Logger Configuration Tool",
        "Historical Data Export Utility",
        "Report Template Library (Excel/PDF formats)",
        "API Client Libraries (Python, JavaScript, Java)"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-foreground py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-4xl text-center mx-auto"
          >
            <h1 className="mb-8">
              Resources & Knowledge Center
            </h1>
            <p className="text-[20px] text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              Technical documentation, case studies, tutorials, and industry insights to maximize your solar monitoring investment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Sections */}
      {resources.map((resource, index) => (
        <section 
          key={resource.id}
          id={resource.id}
          className={`py-24 scroll-mt-20 ${index % 2 === 0 ? 'bg-white' : 'bg-muted'}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <resource.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-[32px]">{resource.title}</h2>
                  </div>
                  
                  <p className="text-[18px] text-muted-foreground mb-8 leading-relaxed">
                    {resource.description}
                  </p>

                  <Button size="lg" asChild>
                    <Link to="/contact" className="inline-flex items-center gap-2">
                      Request Access
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Items List */}
                <div>
                  <h3 className="text-[18px] font-bold text-foreground mb-6">Available Resources</h3>
                  <ul className="space-y-3">
                    {resource.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="flex items-start gap-3 p-4 bg-white border border-border rounded-lg hover:border-primary/40 hover:shadow-sm transition-all"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span className="text-[15px] text-foreground leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">
              Need Custom Resources or Training?
            </h2>
            <p className="text-[18px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our team can provide customized documentation, on-site training, and technical support tailored to your organization
            </p>
            <Button size="lg" asChild className="text-base px-8 h-12">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
