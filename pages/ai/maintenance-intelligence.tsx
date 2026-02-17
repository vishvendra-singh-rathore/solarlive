import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { TrendingUp, ArrowRight, Check, Wrench, Calendar, Bell, Target, Sparkles, BarChart3, Clock, Shield, Download, CheckCircle, AlertTriangle, Settings, Zap, Timer, Activity, Layers, LineChart, Users } from "lucide-react";

export function MaintenanceIntelligencePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foreground via-[#0A0F1E] to-foreground py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl opacity-30" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              AI-OPTIMIZED
            </div>
            
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-5">
              Proactive Maintenance Optimization
            </p>
            <h1 className="mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Maintenance Intelligence
            </h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              AI-driven maintenance scheduling that optimizes when, where, and how to perform maintenance—reducing costs by 30%, maximizing equipment uptime, and ensuring the right work at the right time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Maintenance Intelligence */}
      <section className="py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Smart Scheduling
                </span>
              </div>
              <h2 className="mb-6">What is Maintenance Intelligence?</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Maintenance Intelligence</strong> transforms reactive "fix when broken" approaches into proactive "maintain before failure" strategies. AI analyzes equipment health, weather forecasts, generation schedules, and O&M resources to recommend optimal maintenance timing.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Instead of calendar-based maintenance ("clean panels every 30 days") or emergency repairs, our AI tells you exactly when each action will deliver maximum ROI—accounting for soiling levels, rain forecasts, generation impact, and labor availability.
              </p>
              
              <div className="space-y-3">
                {[
                  { label: "30% Cost Reduction", desc: "Eliminate unnecessary preventive maintenance" },
                  { label: "ROI-Based Prioritization", desc: "Focus on high-impact maintenance first" },
                  { label: "Automated Work Orders", desc: "Generate schedules and task lists automatically" },
                  { label: "Resource Optimization", desc: "Optimize crew allocation across portfolios" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white border border-primary/10 rounded-lg hover:border-primary/30 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[15px] font-semibold text-foreground">{item.label}</p>
                      <p className="text-[13px] text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200"
                  alt="Maintenance Intelligence Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maintenance Optimization Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 text-foreground text-[10px] font-bold tracking-wider px-4 py-2 rounded-full">
              <Wrench className="w-3 h-3 text-primary" />
              MAINTENANCE TYPES
            </div>
            <h2 className="mb-5">What Maintenance Intelligence Optimizes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Panel Cleaning Optimization",
                icon: Sparkles,
                description: "AI determines optimal cleaning schedules based on soiling rate, generation loss, rain forecast, and cleaning ROI—avoiding over-cleaning or under-cleaning.",
                optimizations: [
                  "Real-time soiling loss quantification (2-3% detection)",
                  "Rain forecast integration (don't clean before rain)",
                  "ROI calculation: cleaning cost vs revenue recovered",
                  "Seasonal pattern learning (dust storm seasons)",
                  "Multi-site crew routing optimization"
                ],
                impact: "₹50K-2L monthly savings per 10 MW"
              },
              {
                category: "Inverter Maintenance Scheduling",
                icon: Zap,
                description: "Schedule inverter inspections, filter cleaning, and firmware updates during low-generation periods—minimizing revenue impact of maintenance downtime.",
                optimizations: [
                  "Identify low-generation windows (cloudy days, mornings)",
                  "Coordinate maintenance with weather forecasts",
                  "Batch multiple tasks into single downtime event",
                  "Prioritize inverters with highest fault frequency",
                  "Schedule firmware updates during grid curtailments"
                ],
                impact: "50-70% reduction in maintenance downtime"
              },
              {
                category: "Tracker Maintenance Planning",
                icon: Activity,
                description: "Optimize tracker calibration, motor lubrication, and mechanical inspections based on usage patterns, weather exposure, and performance degradation.",
                optimizations: [
                  "Usage-based maintenance (high-wind areas need more)",
                  "Seasonal calibration scheduling (post-monsoon)",
                  "Motor bearing wear prediction",
                  "Gearbox lubrication interval optimization",
                  "Emergency stow event analysis (stress tracking)"
                ],
                impact: "30% longer tracker component life"
              },
              {
                category: "String-Level Repairs",
                icon: AlertTriangle,
                description: "Prioritize string repairs by revenue impact—fix high-generation strings first, defer low-impact strings to batch maintenance days.",
                optimizations: [
                  "Revenue impact ranking (fix high-power strings first)",
                  "Batch low-priority repairs into quarterly outages",
                  "Thermal imaging campaign scheduling",
                  "Bypass diode replacement prioritization",
                  "Weather-dependent scheduling (avoid rainy days)"
                ],
                impact: "80% faster high-impact repair response"
              },
              {
                category: "Vegetation Management",
                icon: Target,
                description: "Schedule vegetation clearing based on shading analysis—clearing only areas causing measurable generation loss, not cosmetic maintenance.",
                optimizations: [
                  "Shadow analysis: quantify shading loss per area",
                  "Growth rate modeling (seasonal vegetation growth)",
                  "Cost-benefit analysis per clearing zone",
                  "Herbicide vs mechanical clearing optimization",
                  "Multi-year vegetation control planning"
                ],
                impact: "60% reduction in vegetation costs"
              },
              {
                category: "Transformer Maintenance",
                icon: Settings,
                description: "Schedule transformer oil analysis, cooling system maintenance, and load management based on operating temperature and load profiles.",
                optimizations: [
                  "Oil temperature trend analysis",
                  "Cooling fan maintenance scheduling",
                  "Load profile optimization (reduce peak stress)",
                  "Oil analysis interval optimization",
                  "Tap changer maintenance timing"
                ],
                impact: "2-3x transformer life extension"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white to-muted/30 border border-primary/10 rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold text-foreground mb-2">{item.category}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-5">
                  {item.optimizations.map((opt, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-[13px] text-foreground leading-relaxed">{opt}</p>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-primary/10 bg-gradient-to-r from-primary/5 to-purple-500/5 p-3 rounded-lg">
                  <p className="text-[12px] font-semibold text-primary">{item.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligent Features */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 text-foreground text-[10px] font-bold tracking-wider px-4 py-2 rounded-full">
              <Layers className="w-3 h-3 text-primary" />
              AI CAPABILITIES
            </div>
            <h2 className="mb-5">Intelligent Scheduling Features</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                feature: "Weather-Aware Scheduling",
                icon: Activity,
                description: "Integrates 7-day weather forecasts—schedule cleaning before dust storms, defer repairs during rain, optimize low-generation windows.",
                benefit: "30% better timing"
              },
              {
                feature: "ROI-Based Prioritization",
                icon: BarChart3,
                description: "Every maintenance task ranked by cost vs benefit—fix high-revenue issues first, batch low-priority tasks for quarterly outages.",
                benefit: "2x faster ROI"
              },
              {
                feature: "Multi-Site Optimization",
                icon: Target,
                description: "Optimize crew routing across 10+ plants—batch nearby maintenance tasks, minimize travel time, balance workload across teams.",
                benefit: "40% more efficient crews"
              },
              {
                feature: "Automated Work Orders",
                icon: Calendar,
                description: "Auto-generate work orders with task details, required parts, estimated duration, and technician assignments—no manual planning.",
                benefit: "Zero manual planning"
              },
              {
                feature: "Spare Parts Forecasting",
                icon: Shield,
                description: "Predict which spare parts will be needed in next 30-90 days based on failure predictions—optimize inventory and reduce emergency orders.",
                benefit: "50% inventory reduction"
              },
              {
                feature: "Compliance Tracking",
                icon: CheckCircle,
                description: "Track regulatory maintenance requirements (fire safety, electrical inspections)—auto-schedule before deadlines, maintain compliance documentation.",
                benefit: "100% compliance"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-primary/10 rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-[17px] font-bold text-foreground mb-2">{item.feature}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                <div className="pt-3 border-t border-primary/10">
                  <p className="text-[12px] font-semibold text-primary">{item.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-foreground via-[#0A0F1E] to-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              INTELLIGENT OPTIMIZATION
            </div>
            
            <h2 className="text-white mb-6">Optimize Every Maintenance Decision</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              30% cost reduction, ROI-driven prioritization, automated scheduling
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px] bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 border-0">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Enable Maintenance AI
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link to="/resources/data-sheets" className="inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Guide
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
