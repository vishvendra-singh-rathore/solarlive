import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { TrendingUp, ArrowRight, Check, Zap, BarChart3, Target, AlertCircle, Settings, LineChart, Battery } from "lucide-react";

export function PerformanceOptimizationPage() {
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
            className="max-w-3xl"
          >
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-5">
              AI-Driven Energy Intelligence
            </p>
            <h1 className="mb-6">Performance Optimization</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              Maximize solar energy generation and ROI through advanced analytics, predictive intelligence, and continuous optimization strategies that drive measurable performance improvements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Value Proposition with Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Maximize Energy Yield
                </span>
              </div>
              <h2 className="mb-6">Generate More Solar Energy, Maximize Your ROI</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                SolarLive's Performance Optimization platform uses advanced machine learning algorithms to identify energy losses, predict equipment failures, and deliver actionable recommendations that increase your plant's energy generation by 5-12%.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Our AI-powered system continuously analyzes millions of data points across inverters, strings, weather stations, and grid meters to detect inefficiencies invisible to traditional monitoring systems.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-muted/40 p-5 rounded-lg">
                  <p className="text-[32px] font-bold text-primary leading-none mb-2">5-12%</p>
                  <p className="text-[13px] text-muted-foreground">Energy Yield Increase</p>
                </div>
                <div className="bg-muted/40 p-5 rounded-lg">
                  <p className="text-[32px] font-bold text-primary leading-none mb-2">15-25%</p>
                  <p className="text-[13px] text-muted-foreground">Maintenance Cost Reduction</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200"
                  alt="Solar Plant Performance Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                    Live Performance
                  </p>
                </div>
                <p className="text-[28px] font-bold text-foreground leading-none mb-1">98.7%</p>
                <p className="text-[13px] text-primary font-medium">+2.3% vs baseline</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Optimize - Numbered Sections */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Our Optimization Process
            </p>
            <h2 className="mb-5">How We Help Your Plant Generate More Energy</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              A systematic, AI-driven approach to identifying losses and implementing corrective actions that deliver measurable performance improvements.
            </p>
          </div>

          <div className="space-y-24">
            {/* 01 - Loss Detection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1000"
                    alt="Loss Analysis Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[72px] font-bold text-primary/20 leading-none">01</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Intelligent Loss Detection</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Our AI algorithms continuously analyze your plant's performance against theoretical energy models, identifying losses at every stage—from DC collection to AC conversion to grid injection.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>String-level underperformance:</strong> Detect shading, soiling, or faulty panels at the string level</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Inverter efficiency tracking:</strong> Identify inverters operating below optimal efficiency curves</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Soiling loss quantification:</strong> Calculate energy losses from dust accumulation and optimize cleaning schedules</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Curtailment analysis:</strong> Track grid curtailment events and quantify revenue impact</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 02 - Predictive Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[72px] font-bold text-primary/20 leading-none">02</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Predictive Maintenance Intelligence</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Machine learning models analyze historical failure patterns and equipment behavior to predict failures before they occur, enabling proactive maintenance that prevents downtime and energy losses.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Inverter failure prediction:</strong> Early warning alerts 7-14 days before component failure</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>String health scoring:</strong> Predictive scores identify degrading strings for proactive replacement</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Sensor drift detection:</strong> Identify calibration issues in irradiance and temperature sensors</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Communication failures:</strong> Automated alerts for data gaps and connectivity issues</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000"
                    alt="Predictive Maintenance System"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* 03 - Actionable Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000"
                    alt="Performance Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[72px] font-bold text-primary/20 leading-none">03</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Actionable Optimization Recommendations</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  SolarLive doesn't just identify problems—it delivers specific, prioritized recommendations with ROI calculations, enabling your team to focus on high-impact optimizations that maximize energy generation.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Cleaning schedule optimization:</strong> Maximize energy gain while minimizing water and labor costs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Reactive power optimization:</strong> Improve power factor and maximize grid compliance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Equipment replacement planning:</strong> ROI-based recommendations for inverter and module replacement</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Performance benchmarking:</strong> Compare your plant against regional peers to identify improvement areas</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 04 - Continuous Monitoring */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[72px] font-bold text-primary/20 leading-none">04</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <LineChart className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Continuous Performance Tracking</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Track the impact of every optimization action with real-time performance metrics. Our system measures performance ratio improvements, energy gain, and ROI from each intervention, creating a continuous feedback loop for ongoing optimization.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Performance ratio tracking:</strong> Real-time PR calculation with weather-adjusted baselines</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Before/after analysis:</strong> Quantify energy gains from maintenance and optimization activities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Portfolio benchmarking:</strong> Compare performance across multiple sites to identify best practices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Automated reporting:</strong> Monthly performance reports with ROI metrics for stakeholders</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000"
                    alt="Performance Tracking Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Impact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Proven Results
            </p>
            <h2 className="mb-5">Maximize Your Solar Plant ROI</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Real-world performance improvements delivered by SolarLive's optimization platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: TrendingUp,
                metric: "8.5%",
                label: "Average Energy Yield Increase",
                description: "Across 500+ MW of monitored capacity"
              },
              {
                icon: Battery,
                metric: "₹2.8 Cr",
                label: "Additional Annual Revenue",
                description: "For a typical 50 MW plant"
              },
              {
                icon: BarChart3,
                metric: "18 months",
                label: "Average ROI Payback",
                description: "Including platform and optimization costs"
              }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl border border-primary/20 text-center"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-[42px] font-bold text-primary leading-none mb-3">{stat.metric}</p>
                <p className="text-[16px] font-semibold text-foreground mb-2">{stat.label}</p>
                <p className="text-[14px] text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Case Study Example */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-muted/30 p-10 rounded-2xl border border-border"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[11px] text-primary font-bold uppercase tracking-wider mb-2">Case Study</p>
                <h3 className="text-[20px] mb-3">50 MW IPP Plant in Rajasthan</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                  After implementing SolarLive's optimization recommendations, this plant achieved a 9.2% increase in energy generation through optimized cleaning schedules, string-level fault detection, and inverter efficiency improvements.
                </p>
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-2">Energy Gain</p>
                    <p className="text-[24px] font-bold text-foreground">4.2 GWh</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-2">Revenue Impact</p>
                    <p className="text-[24px] font-bold text-foreground">₹1.89 Cr</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-2">PR Improvement</p>
                    <p className="text-[24px] font-bold text-foreground">+3.2%</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-2">Payback Period</p>
                    <p className="text-[24px] font-bold text-foreground">14 months</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(214,117,6,0.12),transparent_60%)]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Ready to Optimize Your Solar Plant Performance?</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              See how SolarLive's AI-powered optimization can increase your energy generation and maximize ROI
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request Performance Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/solutions">View All Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
