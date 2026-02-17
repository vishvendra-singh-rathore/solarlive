import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Cloud, Shield, Cpu, TrendingUp, Users, Globe } from "lucide-react";

export function WhySolarLive() {
  const differentiators = [
    {
      icon: Cloud,
      title: "Scalability",
      description: "Built to manage portfolios from megawatts to gigawatts. Our cloud infrastructure scales automatically with your growing asset base.",
      details: [
        "Unlimited asset connectivity",
        "Auto-scaling infrastructure",
        "Global data centers",
        "Performance at any scale"
      ]
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-grade encryption, role-based access control, and compliance with international security standards protect your critical infrastructure.",
      details: [
        "ISO 27001 certified",
        "SOC 2 Type II compliant",
        "End-to-end encryption",
        "Regular security audits"
      ]
    },
    {
      icon: Cpu,
      title: "AI Intelligence",
      description: "Machine learning models trained on billions of data points provide predictive insights that prevent failures before they happen.",
      details: [
        "Predictive maintenance algorithms",
        "Anomaly detection",
        "Performance optimization",
        "Continuous learning"
      ]
    },
    {
      icon: TrendingUp,
      title: "Real-Time Infrastructure",
      description: "Sub-second data processing and instant alerts ensure you're always aware of your system's performance and any emerging issues.",
      details: [
        "Live data streaming",
        "Instant notifications",
        "Real-time dashboards",
        "No data latency"
      ]
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our team of solar energy experts and data scientists provide 24/7 support and proactive monitoring of your assets.",
      details: [
        "24/7 technical support",
        "Dedicated account managers",
        "Onboarding assistance",
        "Training programs"
      ]
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deployed across multiple continents with local support teams and compliance with regional regulations and standards.",
      details: [
        "Multi-region deployment",
        "Local data residency options",
        "Regional compliance",
        "Global customer base"
      ]
    }
  ];

  const comparison = [
    {
      feature: "Real-Time Monitoring",
      solarlive: "Sub-second latency",
      traditional: "5-15 minute delays"
    },
    {
      feature: "Predictive Analytics",
      solarlive: "AI-powered predictions",
      traditional: "Manual analysis"
    },
    {
      feature: "Scalability",
      solarlive: "Unlimited assets",
      traditional: "Limited capacity"
    },
    {
      feature: "Integration",
      solarlive: "API-first platform",
      traditional: "Limited connectivity"
    },
    {
      feature: "Support",
      solarlive: "24/7 expert team",
      traditional: "Business hours only"
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
              Why Leading Operators Choose SolarLive
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Enterprise-grade technology, unmatched intelligence, and proven results at global scale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-8 rounded-lg border border-border bg-secondary"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              SolarLive vs Traditional Systems
            </h2>
            <p className="text-xl text-muted-foreground">
              See how we compare to legacy monitoring solutions
            </p>
          </motion.div>

          <div className="bg-white rounded-lg border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-[#0F172A] text-white p-6">
              <div className="font-semibold">Feature</div>
              <div className="font-semibold">SolarLive</div>
              <div className="font-semibold">Traditional Systems</div>
            </div>
            {comparison.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-6 ${
                  index % 2 === 0 ? "bg-white" : "bg-secondary"
                }`}
              >
                <div className="font-medium text-foreground">{row.feature}</div>
                <div className="text-primary font-medium">{row.solarlive}</div>
                <div className="text-muted-foreground">{row.traditional}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Utility-scale operators, IPPs, and EPC companies worldwide rely on SolarLive
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { value: "2.5 GW+", label: "Capacity Under Management" },
                { value: "500+", label: "Solar Plants Monitored" },
                { value: "25+", label: "Countries Deployed" }
              ].map((stat, index) => (
                <div key={index} className="p-8 rounded-lg border border-border bg-secondary">
                  <div className="text-4xl font-semibold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button size="lg" asChild>
              <Link to="/contact">Join Them</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
