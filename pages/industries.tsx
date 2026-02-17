import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home, Building2, Factory, Sun } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Industries() {
  const industries = [
    {
      icon: Home,
      title: "Residential Solar",
      image: "https://images.unsplash.com/photo-1766288176154-d4cccaefd7a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHNvbGFyJTIwcGFuZWxzJTIwaG91c2V8ZW58MXx8fHwxNzcwNzEzODcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      challenge: "Managing thousands of distributed rooftop installations with varying system sizes and configurations.",
      solution: "Centralized monitoring and management of residential portfolios with automated performance tracking and customer reporting.",
      impact: [
        "Single-pane visibility across entire portfolio",
        "Automated customer notifications",
        "Proactive maintenance scheduling",
        "Enhanced customer satisfaction"
      ]
    },
    {
      icon: Building2,
      title: "Commercial & Industrial",
      image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBzb2xhciUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzA4MDEwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      challenge: "Optimizing solar installations for businesses seeking to reduce energy costs and meet sustainability targets.",
      solution: "Real-time energy monitoring, savings tracking, and integration with building management systems for maximum efficiency.",
      impact: [
        "Energy cost reduction tracking",
        "Carbon footprint reporting",
        "Load optimization",
        "Investment ROI validation"
      ]
    },
    {
      icon: Factory,
      title: "Industrial Facilities",
      image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc29sYXIlMjBwYW5lbHMlMjByb29mdG9wfGVufDF8fHx8MTc3MDgwMTAxOHww&ixlib=rb-4.1.0&q=80&w=1080",
      challenge: "Large-scale industrial solar requiring 24/7 reliability and integration with complex operational systems.",
      solution: "Enterprise monitoring with predictive maintenance, grid integration, and seamless SCADA connectivity.",
      impact: [
        "Minimized production downtime",
        "Predictive failure detection",
        "Grid stability management",
        "Operational cost savings"
      ]
    },
    {
      icon: Sun,
      title: "Utility-Scale Solar Parks",
      image: "https://images.unsplash.com/photo-1770068511771-7c146210a55b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1dGlsaXR5JTIwc2NhbGUlMjBzb2xhciUyMGZhcm0lMjBhZXJpYWx8ZW58MXx8fHwxNzcwODAxMDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      challenge: "Managing multi-megawatt installations with strict performance guarantees and complex grid requirements.",
      solution: "Advanced analytics, generation forecasting, and automated optimization for maximum yield and grid compliance.",
      impact: [
        "Performance ratio optimization",
        "Revenue maximization",
        "Grid code compliance",
        "Asset degradation tracking"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-foreground mb-8">
              Solutions Across All Solar Segments
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              From rooftop residential to utility-scale parks, SolarLive delivers tailored intelligence for every solar application
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-32">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-4xl font-semibold text-foreground mb-6">
                    {industry.title}
                  </h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {industry.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">SolarLive Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {industry.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Impact</h3>
                    <ul className="space-y-3">
                      {industry.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Find Your Industry Solution
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let us show you how SolarLive can transform your solar operations
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
