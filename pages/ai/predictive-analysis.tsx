import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Brain, ArrowRight, Check, Zap, AlertTriangle, TrendingDown, BarChart3, Clock, Target, Sparkles, LineChart, Activity, Layers, Shield, Download, CheckCircle, XCircle, Timer, Gauge, Settings, RefreshCw, Bell, Eye } from "lucide-react";

export function PredictiveAnalysisPage() {
  return (
    <div className="pt-20">
      {/* Hero Section with Sci-Fi Gradient */}
      <section className="bg-gradient-to-br from-foreground via-[#0A0F1E] to-foreground py-32 text-white relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl opacity-30" />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl"
          >
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              AI-POWERED
            </div>
            
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-5">
              Predictive Intelligence
            </p>
            <h1 className="mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Predictive Analysis
            </h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              Machine learning algorithms that predict equipment failures 30-90 days in advance—enabling proactive maintenance, reducing unplanned downtime by 40%, and preventing catastrophic failures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Predictive Analysis */}
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
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  AI-Driven Forecasting
                </span>
              </div>
              <h2 className="mb-6">What is Predictive Analysis?</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Predictive Analysis</strong> uses machine learning models trained on millions of data points to forecast equipment failures before they occur. By analyzing patterns in inverter efficiency, temperature trends, fault frequency, and performance degradation, our AI predicts which equipment will fail and when.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Think of it as a <strong className="text-foreground">"check engine light" for your solar plant</strong>—warning you 30-90 days before failure. Instead of reacting to breakdowns, you schedule preventive maintenance during planned outages, minimizing revenue loss and extending equipment life.
              </p>
              
              <div className="space-y-3">
                {[
                  { label: "30-90 Day Advance Warning", desc: "Predict failures weeks before they occur" },
                  { label: "40% Downtime Reduction", desc: "Proactive maintenance vs reactive repairs" },
                  { label: "Equipment-Specific Models", desc: "Inverters, transformers, trackers, strings" },
                  { label: "Continuous Learning", desc: "Models improve as more data is collected" }
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
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200"
                  alt="AI Predictive Analysis"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white border border-primary/20 rounded-xl p-5 shadow-xl backdrop-blur-sm"
              >
                <p className="text-[13px] text-muted-foreground mb-1">Failure Prediction Accuracy</p>
                <p className="text-[28px] font-bold text-primary">92%</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Predictive Analysis Works */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Brain className="w-3 h-3" />
              ML PIPELINE
            </div>
            <h2 className="mb-5 text-white">How AI Predicts Failures</h2>
            <p className="text-[16px] text-white/60 leading-relaxed">
              From raw sensor data to actionable predictions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Data Collection",
                desc: "Collect 200+ parameters per inverter—power, voltage, temperature, faults—every minute, 24/7",
                icon: Activity
              },
              {
                step: "02",
                title: "Feature Engineering",
                desc: "Extract patterns—efficiency trends, temperature deltas, fault frequency, degradation rates",
                icon: LineChart
              },
              {
                step: "03",
                title: "ML Model Training",
                desc: "Train models on historical failures across 1000+ plants—learning failure signatures",
                icon: Brain
              },
              {
                step: "04",
                title: "Real-Time Prediction",
                desc: "Score equipment health daily—flagging anomalies and issuing failure warnings 30-90 days ahead",
                icon: AlertTriangle
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
                {/* Card */}
                <div className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  {/* Step number */}
                  <div className="text-[14px] font-bold text-primary/50 mb-4">{item.step}</div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 rounded-xl flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-[18px] font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[14px] text-white/60 leading-relaxed">{item.desc}</p>
                </div>
                
                {/* Connector line */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Predict */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-foreground text-[10px] font-bold tracking-wider px-4 py-2 rounded-full">
              <Target className="w-3 h-3 text-primary" />
              FAILURE TYPES
            </div>
            <h2 className="mb-5">Equipment Failures We Predict</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Comprehensive failure forecasting across all critical equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                equipment: "Inverter Failures",
                icon: Zap,
                predictions: [
                  "Capacitor degradation (3-6 months warning)",
                  "Fan failure (30-60 days warning)",
                  "IGBT module aging (60-90 days warning)",
                  "Communication board failure (15-30 days)",
                  "Temperature sensor drift (30-45 days)"
                ],
                accuracy: "91%"
              },
              {
                equipment: "String-Level Issues",
                icon: Activity,
                predictions: [
                  "String degradation & underperformance",
                  "Bypass diode failure prediction",
                  "Hot spot development (thermal imaging)",
                  "Open circuit detection (pre-failure)",
                  "Shading pattern anomalies"
                ],
                accuracy: "87%"
              },
              {
                equipment: "Transformer Health",
                icon: Settings,
                predictions: [
                  "Oil temperature anomalies",
                  "Winding insulation degradation",
                  "Cooling system failures",
                  "Tap changer wear prediction",
                  "Overload stress accumulation"
                ],
                accuracy: "89%"
              },
              {
                equipment: "Tracker Failures",
                icon: RefreshCw,
                predictions: [
                  "Motor bearing wear (45-60 days)",
                  "Actuator failure prediction",
                  "Gearbox lubrication issues",
                  "Position sensor drift",
                  "Mechanical linkage stress"
                ],
                accuracy: "85%"
              },
              {
                equipment: "DC Cable Issues",
                icon: AlertTriangle,
                predictions: [
                  "Connector hot spots (IR patterns)",
                  "Insulation resistance degradation",
                  "Arc fault precursors",
                  "Ground fault development",
                  "Junction box failures"
                ],
                accuracy: "83%"
              },
              {
                equipment: "Communication Drops",
                icon: Bell,
                predictions: [
                  "RS485 network degradation",
                  "WiFi/4G modem failures",
                  "Data logger hardware issues",
                  "Protocol timeout patterns",
                  "Gateway connectivity loss"
                ],
                accuracy: "90%"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-primary/10 rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-[17px] font-bold text-foreground">{item.equipment}</h3>
                  </div>
                  
                  {/* Accuracy badge */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-3 py-1 rounded-full">
                    <p className="text-[11px] font-bold text-green-700">{item.accuracy}</p>
                  </div>
                </div>
                
                {/* Predictions list */}
                <div className="space-y-2.5">
                  {item.predictions.map((prediction, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-[13px] text-muted-foreground leading-relaxed">{prediction}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & ROI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-foreground text-[10px] font-bold tracking-wider px-4 py-2 rounded-full">
              <TrendingDown className="w-3 h-3 text-primary" />
              BUSINESS IMPACT
            </div>
            <h2 className="mb-5">Measurable ROI from Predictive Analysis</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: "40%",
                label: "Downtime Reduction",
                desc: "Proactive repairs during planned outages vs emergency shutdowns",
                icon: Clock
              },
              {
                metric: "₹2-5L",
                label: "Monthly Savings",
                desc: "Per 10 MW plant—avoiding unplanned downtime and emergency repairs",
                icon: TrendingDown
              },
              {
                metric: "2-3x",
                label: "Equipment Life Extension",
                desc: "Early intervention prevents cascading failures and extends lifespan",
                icon: RefreshCw
              },
              {
                metric: "95%",
                label: "Availability Target",
                desc: "Achieve 95%+ availability through predictive maintenance scheduling",
                icon: Target
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/20 rounded-2xl p-8 text-center hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30 rounded-xl flex items-center justify-center mx-auto mb-5">
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
            <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              AI-POWERED INTELLIGENCE
            </div>
            
            <h2 className="text-white mb-6">Predict Failures Before They Happen</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              92% accuracy, 30-90 day advance warning, 40% downtime reduction
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px] bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 border-0">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Enable Predictive AI
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link to="/resources/data-sheets" className="inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download AI Brief
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
