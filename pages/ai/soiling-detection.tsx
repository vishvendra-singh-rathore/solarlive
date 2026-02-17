import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { CloudRain, ArrowRight, Check, Sparkles, BarChart3, TrendingDown, Download, CheckCircle, Calendar, Target, Clock, Droplets, Sun, Wind } from "lucide-react";

export function SoilingDetectionPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foreground via-[#0A0F1E] to-foreground py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl opacity-30" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              ML-DETECTED
            </div>
            
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-5">
              Automated Cleaning Optimization
            </p>
            <h1 className="mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Soiling Loss Detection
            </h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              Machine learning detects soiling losses as small as 2-3%—recommending optimal cleaning schedules to maximize ROI and avoid over-cleaning or under-cleaning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Soiling Detection */}
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
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-cyan-500/20 border border-primary/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <CloudRain className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Automated Detection
                </span>
              </div>
              <h2 className="mb-6">What is Soiling Loss Detection?</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Soiling Loss Detection</strong> uses ML to compare actual vs expected generation (based on irradiance), identifying when dust, pollen, or pollution causes generation loss. Detects losses as small as 2-3%—far more sensitive than visual inspection.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Our AI integrates rain forecasts, historical cleaning data, and cost-benefit analysis to recommend optimal cleaning timing—avoiding cleaning just before rain or when soiling loss doesn't justify cleaning costs.
              </p>
              
              <div className="space-y-3">
                {[
                  { label: "2-3% Detection Sensitivity", desc: "Catch losses invisible to human inspection" },
                  { label: "ROI-Based Recommendations", desc: "Clean only when financially beneficial" },
                  { label: "Rain Forecast Integration", desc: "Avoid cleaning before natural rainfall" },
                  { label: "₹50K-2L Monthly Savings", desc: "Per 10 MW plant from optimized cleaning" }
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
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200"
                  alt="Solar Panel Soiling"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Detection Works */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <BarChart3 className="w-3 h-3" />
              DETECTION METHOD
            </div>
            <h2 className="mb-5 text-white">How Soiling Detection Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Expected Generation",
                desc: "Calculate expected generation from irradiance, temperature, and panel specs",
                icon: Sun
              },
              {
                step: "02",
                title: "Actual vs Expected",
                desc: "Compare actual generation against expected—accounting for temperature, shading, inverter efficiency",
                icon: BarChart3
              },
              {
                step: "03",
                title: "Soiling Loss Isolation",
                desc: "ML isolates soiling loss from other factors—equipment issues, shading, weather anomalies",
                icon: Target
              },
              {
                step: "04",
                title: "Cleaning Recommendation",
                desc: "Recommend cleaning when: Loss &gt; 4-6% AND No rain forecast AND ROI positive",
                icon: CheckCircle
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <div className="text-[14px] font-bold text-primary/50 mb-4">{item.step}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-cyan-500/20 border border-primary/30 rounded-xl flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-[18px] font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[14px] text-white/60 leading-relaxed">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-foreground text-[10px] font-bold tracking-wider px-4 py-2 rounded-full">
              <TrendingDown className="w-3 h-3 text-primary" />
              COST OPTIMIZATION
            </div>
            <h2 className="mb-5">Cleaning ROI Optimization</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: "₹50K-2L",
                label: "Monthly Savings",
                desc: "Per 10 MW plant from optimized cleaning frequency",
                icon: TrendingDown
              },
              {
                metric: "40%",
                label: "Cleaning Cost Reduction",
                desc: "Eliminate unnecessary cleaning cycles",
                icon: Clock
              },
              {
                metric: "2-3%",
                label: "Detection Sensitivity",
                desc: "Catch soiling losses before they become costly",
                icon: Target
              },
              {
                metric: "7-Day",
                label: "Rain Forecast",
                desc: "Avoid cleaning when rain is coming",
                icon: Droplets
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-cyan-500/5 border border-primary/20 rounded-2xl p-8 text-center hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-cyan-500/20 border border-primary/30 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-[36px] font-bold text-primary mb-2">{item.metric}</p>
                <p className="text-[15px] font-semibold text-foreground mb-2">{item.label}</p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
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
            <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              INTELLIGENT CLEANING
            </div>
            
            <h2 className="text-white mb-6">Optimize Cleaning for Maximum ROI</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              2-3% detection, rain forecast integration, ₹50K-2L monthly savings
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px] bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 border-0">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Enable Soiling AI
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link to="/resources/data-sheets" className="inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
