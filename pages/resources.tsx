import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { 
  FileText, 
  Video, 
  BookOpen, 
  Download,
  ArrowRight,
  Calendar,
  FileSpreadsheet
} from "lucide-react";

export function Resources() {
  const resourceCategories = [
    {
      category: "White Papers",
      icon: FileText,
      gradient: "from-blue-50 to-blue-100/50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      items: [
        {
          title: "The Future of Solar Asset Management",
          description: "How AI and IoT are transforming solar operations and driving operational excellence",
          type: "PDF • 24 pages",
          featured: true
        },
        {
          title: "Predictive Maintenance in Utility-Scale Solar",
          description: "Reducing O&M costs through data-driven insights and machine learning",
          type: "PDF • 18 pages"
        },
        {
          title: "Performance Optimization Strategies",
          description: "Best practices for maximizing solar asset yield and ROI",
          type: "PDF • 32 pages"
        }
      ]
    },
    {
      category: "Case Studies",
      icon: BookOpen,
      gradient: "from-green-50 to-green-100/50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      items: [
        {
          title: "500MW Portfolio Optimization",
          description: "How a leading IPP increased yield by 6.5% with SolarLive",
          type: "PDF • 8 pages",
          featured: true
        },
        {
          title: "Predictive Maintenance Success Story",
          description: "Reducing downtime by 40% for a multi-site solar park operator",
          type: "PDF • 10 pages"
        },
        {
          title: "Fleet-Wide Performance Improvement",
          description: "Managing 200+ sites with centralized intelligence platform",
          type: "PDF • 12 pages"
        }
      ]
    },
    {
      category: "Webinars & Videos",
      icon: Video,
      gradient: "from-purple-50 to-purple-100/50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      items: [
        {
          title: "SolarLive Platform Demo",
          description: "Complete walkthrough of monitoring and analytics features",
          type: "Video • 45 min",
          featured: true
        },
        {
          title: "AI in Solar Operations",
          description: "How machine learning drives predictive insights and optimization",
          type: "Video • 35 min"
        },
        {
          title: "Integration Best Practices",
          description: "Connecting SolarLive with existing SCADA and ERP systems",
          type: "Video • 30 min"
        }
      ]
    },
    {
      category: "Technical Documentation",
      icon: FileSpreadsheet,
      gradient: "from-orange-50 to-orange-100/50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      items: [
        {
          title: "API Documentation",
          description: "Complete REST API reference for developers and integrators",
          type: "Online Documentation"
        },
        {
          title: "User Guide & Manual",
          description: "Comprehensive platform usage documentation for all user roles",
          type: "PDF • 120 pages"
        },
        {
          title: "Integration Guide",
          description: "Step-by-step instructions for system integration and deployment",
          type: "PDF • 45 pages"
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(214,117,6,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Knowledge Hub</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-[1.08] tracking-tight">
              Resources & Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Explore our collection of white papers, case studies, webinars, and technical documentation to deepen your understanding of solar intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8 h-12">
                <Link to="/resources/case-studies" className="inline-flex items-center gap-2">
                  View Case Studies
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 h-12 border-2">
                <Link to="/contact">Request Custom Resources</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-12">
                  <div className={`w-14 h-14 ${category.iconBg} rounded-xl flex items-center justify-center`}>
                    <category.icon className={`w-7 h-7 ${category.iconColor}`} strokeWidth={2} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    {category.category}
                  </h2>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`group p-8 rounded-2xl border-2 border-border bg-gradient-to-br ${category.gradient} hover:border-primary/40 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden`}
                    >
                      {item.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center px-3 py-1 bg-primary/90 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                            Featured
                          </span>
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight pr-16">
                        {item.title}
                      </h3>
                      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">{item.type}</span>
                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                          <span className="text-sm">Download</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20"
          >
            <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-7 h-7 text-primary" strokeWidth={2} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter for the latest insights, product updates, and industry trends in solar intelligence
            </p>
            <Button size="lg" asChild className="text-base px-8 h-12">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Subscribe Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(214,117,6,0.15),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Custom Resources?
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact our team for tailored documentation, industry-specific case studies, or to discuss your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8 h-12 bg-primary hover:bg-primary/90">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 h-12 border-2 border-white text-white hover:bg-white/10">
                <Link to="/resources/tutorials">View Tutorials</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
