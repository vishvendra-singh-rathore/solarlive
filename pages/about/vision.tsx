import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Target, ArrowRight, Eye, Lightbulb, Globe, Zap, TrendingUp, Shield, Users, Sparkles } from "lucide-react";

export function VisionPage() {
  const visionPillars = [
    {
      icon: Globe,
      title: "Global Solar Intelligence Network",
      description: "Creating the world's largest interconnected solar monitoring network—enabling benchmarking, predictive analytics, and industry-wide performance optimization across continents."
    },
    {
      icon: Zap,
      title: "AI-First Operations",
      description: "Pioneering machine learning models that predict failures before they happen, optimize maintenance schedules, and maximize energy output—making every solar plant a self-optimizing system."
    },
    {
      icon: TrendingUp,
      title: "Democratizing Enterprise Technology",
      description: "Making Fortune 500-grade monitoring accessible to every solar operator—from 1 MW rooftop installations to 500 MW utility-scale portfolios. Premium technology shouldn't require premium budgets."
    },
    {
      icon: Shield,
      title: "Grid-Scale Energy Reliability",
      description: "Ensuring solar becomes the most predictable renewable energy source through 95%+ forecast accuracy, real-time grid integration, and automated SLDC compliance."
    }
  ];

  const futureGoals = [
    {
      year: "2025",
      title: "1 GW Under Management",
      description: "Reaching 1,000 MW of solar capacity managed on SolarLive platform across India and Asia-Pacific",
      metrics: ["500+ Plants", "15+ States", "₹100+ Cr Annual Savings"]
    },
    {
      year: "2026",
      title: "International Expansion",
      description: "Launching operations in Middle East, Africa, and Southeast Asia with localized AI models and multi-currency support",
      metrics: ["5 New Countries", "Wind Integration", "Battery Storage"]
    },
    {
      year: "2027",
      title: "AI Innovation Lab",
      description: "Establishing dedicated research lab for solar AI—advanced weather modeling, blockchain energy trading, and quantum optimization",
      metrics: ["PhD Research Team", "10+ Patents", "Open Source Tools"]
    },
    {
      year: "2028",
      title: "Carbon Intelligence Platform",
      description: "Expanding beyond monitoring to become the central nervous system for entire renewable portfolios—solar, wind, hydro, and storage unified",
      metrics: ["Multi-Energy Support", "Carbon Credits", "Trading Platform"]
    }
  ];

  const coreValues = [
    {
      icon: Eye,
      title: "Radical Transparency",
      value: "Every algorithm, every prediction, every ROI calculation—fully explainable. No black boxes, no vendor lock-in."
    },
    {
      icon: Users,
      title: "Customer Obsession",
      value: "We measure success by MW managed and rupees saved, not features shipped. Your plant's performance is our only KPI."
    },
    {
      icon: Lightbulb,
      title: "Innovation as Standard",
      value: "AI features that were research papers 6 months ago—deployed in production. We move at the speed of clean energy."
    },
    {
      icon: Sparkles,
      title: "Excellence by Default",
      value: "99.9% uptime, <500ms latency, 90%+ forecast accuracy—these aren't goals, they're requirements. Premium is our baseline."
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-violet-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Target className="w-3 h-3" />
              OUR VISION
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              The Central Digital Nervous System for Global Solar Operations
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed max-w-3xl mx-auto">
              We're building the world's most intelligent solar monitoring platform—where every plant becomes self-optimizing, every failure is predicted before it happens, and every kilowatt-hour is maximized through AI-driven intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/5 to-orange-500/5 border-2 border-primary/20 rounded-3xl p-12 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-[36px] font-bold text-foreground mb-6 leading-tight">
                Making Solar the Most Predictable Renewable Energy Source
              </h2>
              <p className="text-[18px] text-muted-foreground leading-relaxed mb-8">
                Solar energy's biggest challenge isn't generation—it's predictability. We're solving this through AI-powered forecasting, predictive maintenance, and real-time optimization that makes solar plants as reliable as traditional power generation.
              </p>
              <div className="flex items-center justify-center gap-8 pt-6 border-t border-primary/20">
                <div>
                  <p className="text-[32px] font-bold text-primary mb-1">95%+</p>
                  <p className="text-[13px] text-muted-foreground uppercase tracking-wider">Forecast Accuracy</p>
                </div>
                <div className="h-12 w-px bg-primary/20" />
                <div>
                  <p className="text-[32px] font-bold text-primary mb-1">40%</p>
                  <p className="text-[13px] text-muted-foreground uppercase tracking-wider">Downtime Reduced</p>
                </div>
                <div className="h-12 w-px bg-primary/20" />
                <div>
                  <p className="text-[32px] font-bold text-primary mb-1">99.9%</p>
                  <p className="text-[13px] text-muted-foreground uppercase tracking-wider">Platform Uptime</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-5">Four Pillars of Our Vision</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              The strategic foundations driving SolarLive's future
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visionPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-primary/10 rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-orange-500/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-[22px] font-bold text-foreground mb-4">{pillar.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-violet-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <TrendingUp className="w-3 h-3" />
              FUTURE ROADMAP
            </div>
            <h2 className="mb-5 text-white">Building the Next Generation of Solar Intelligence</h2>
            <p className="text-[16px] text-white/60 leading-relaxed">
              Our ambitious goals for the next 4 years
            </p>
          </div>

          <div className="space-y-8">
            {futureGoals.map((goal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-[120px,1fr] gap-8 items-start">
                  {/* Year Badge */}
                  <div className="lg:sticky lg:top-32">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center">
                      <p className="text-[32px] font-bold text-white">{goal.year}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <h3 className="text-[24px] font-bold text-white mb-4">{goal.title}</h3>
                    <p className="text-[16px] text-white/70 leading-relaxed mb-6">{goal.description}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      {goal.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="bg-primary/20 border border-primary/30 px-4 py-2 rounded-full">
                          <p className="text-[13px] font-semibold text-primary">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {idx < futureGoals.length - 1 && (
                  <div className="hidden lg:block absolute left-16 top-32 w-px h-20 bg-gradient-to-b from-primary/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-5">Core Values That Drive Us</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              The principles guiding every decision, every feature, every line of code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-muted/50 to-white border border-primary/10 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">{value.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6">Why This Vision Matters</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                Solar energy is the fastest-growing power source on Earth, but its operational intelligence is stuck in the past. Legacy monitoring systems were built for small-scale installations—they break under enterprise demands.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                Meanwhile, utility-scale operators lose millions in unplanned downtime, miss SLDC compliance penalties, and operate blind without predictive insights. The industry needed a platform built from the ground up for AI-first, cloud-native, enterprise-scale solar operations.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed">
                That's why we exist. SolarLive isn't just monitoring software—it's the nervous system that makes solar plants intelligent, predictable, and profitable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200"
                  alt="Solar plant control room"
                  className="w-full h-full object-cover"
                />
              </div>
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
            <h2 className="text-white mb-6">Join Us in Powering the Solar Revolution</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              We're hiring engineers, data scientists, and solar industry experts to build the future
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/about/careers" className="inline-flex items-center gap-2">
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/about/team">
                  Meet the Team
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
