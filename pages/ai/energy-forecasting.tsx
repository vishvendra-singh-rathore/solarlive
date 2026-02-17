import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { TrendingUp, ArrowRight, Sparkles, CheckCircle, Download, LineChart, Cloud, Sun, Target, Clock, BarChart3, Activity, Calendar } from "lucide-react";

export function EnergyForecastingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foreground via-[#0A0F1E] to-foreground py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl opacity-30" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-emerald-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              PREDICTIVE MODELING
            </div>
            
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-5">
              Weather-Based Forecasting
            </p>
            <h1 className="mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Energy Forecasting
            </h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              ML-powered generation forecasting with 90%+ accuracy—predict tomorrow's, next week's, and next month's energy output for grid scheduling, PPA compliance, and revenue planning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Energy Forecasting */}
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
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-emerald-500/20 border border-primary/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  ML Forecasting
                </span>
              </div>
              <h2 className="mb-6">What is Energy Forecasting?</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Energy Forecasting</strong> combines weather forecasts (irradiance, cloud cover, temperature) with historical generation patterns to predict future energy output with 90%+ accuracy—from hourly forecasts to monthly projections.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Critical for grid scheduling (day-ahead market bids), PPA compliance (monthly generation commitments), and financial planning (revenue projections). Utilities mandate forecasting accuracy to manage grid stability.
              </p>
              
              <div className="space-y-3">
                {[
                  { label: "90%+ Accuracy", desc: "Industry-leading forecast precision" },
                  { label: "Hourly to Monthly", desc: "Forecasts from 1 hour to 12 months ahead" },
                  { label: "Grid Schedule Compliance", desc: "Meet SLDC day-ahead requirements" },
                  { label: "PPA Revenue Planning", desc: "Accurate financial projections" }
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200"
                  alt="Energy Forecasting Charts"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Forecast Types */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-emerald-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Calendar className="w-3 h-3" />
              FORECAST HORIZONS
            </div>
            <h2 className="mb-5 text-white">What We Forecast</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                horizon: "Hourly",
                timeframe: "Next 24 Hours",
                accuracy: "95%",
                use: "Real-time operations, grid balancing",
                icon: Clock
              },
              {
                horizon: "Day-Ahead",
                timeframe: "Tomorrow",
                accuracy: "92%",
                use: "Grid scheduling, market bids (mandatory)",
                icon: Sun
              },
              {
                horizon: "Weekly",
                timeframe: "7-Day Forecast",
                accuracy: "88%",
                use: "Maintenance planning, resource allocation",
                icon: Activity
              },
              {
                horizon: "Monthly",
                timeframe: "30-Day Outlook",
                accuracy: "85%",
                use: "Revenue forecasting, PPA compliance",
                icon: BarChart3
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
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-emerald-500/20 border border-primary/30 rounded-xl flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-[20px] font-bold text-white mb-2">{item.horizon}</h3>
                  <p className="text-[14px] text-white/60 mb-4">{item.timeframe}</p>
                  
                  <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-lg px-3 py-2 inline-block mb-4">
                    <p className="text-[13px] font-bold text-emerald-300">{item.accuracy} Accuracy</p>
                  </div>
                  
                  <p className="text-[13px] text-white/50 leading-relaxed">{item.use}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/10 to-emerald-500/10 border border-primary/20 text-foreground text-[10px] font-bold tracking-wider px-4 py-2 rounded-full">
              <Target className="w-3 h-3 text-primary" />
              BUSINESS APPLICATIONS
            </div>
            <h2 className="mb-5">Why Forecasting Matters</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                use: "Grid Scheduling (Mandatory)",
                desc: "SLDCs mandate day-ahead generation schedules with penalties for deviations &gt;15%. Our forecasting ensures compliance and avoids penalties.",
                benefit: "Avoid ₹5-10L monthly penalties",
                icon: Activity
              },
              {
                use: "Energy Trading Optimization",
                desc: "Accurate forecasts enable optimal day-ahead market bids—sell when prices are high, defer generation during low-price periods.",
                benefit: "5-10% revenue uplift",
                icon: TrendingUp
              },
              {
                use: "PPA Compliance",
                desc: "Meet monthly generation commitments to off-takers. Forecast helps plan for shortfalls and avoid penalties or RECs purchases.",
                benefit: "100% PPA compliance",
                icon: CheckCircle
              },
              {
                use: "Maintenance Scheduling",
                desc: "Schedule maintenance during low-generation periods (cloudy days, monsoon). Forecast tells you when generation impact is minimal.",
                benefit: "50% less downtime cost",
                icon: Target
              },
              {
                use: "Battery Dispatch Planning",
                desc: "For plants with storage, forecast determines optimal charge/discharge schedules to maximize arbitrage or grid services revenue.",
                benefit: "Optimized BESS ROI",
                icon: BarChart3
              },
              {
                use: "Financial Planning",
                desc: "Accurate monthly/quarterly revenue projections for lenders, investors, and internal planning. Reduce variance in cash flow forecasts.",
                benefit: "±5% revenue accuracy",
                icon: LineChart
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
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-emerald-500/10 border border-primary/20 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-[18px] font-bold text-foreground mb-3">{item.use}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                <div className="pt-4 border-t border-primary/10">
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
            <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-primary/20 to-emerald-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              ACCURATE PREDICTIONS
            </div>
            
            <h2 className="text-white mb-6">Forecast Your Plant's Future</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              90%+ accuracy, grid compliance, revenue optimization
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px] bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 border-0">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Enable Forecasting AI
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link to="/resources/data-sheets" className="inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  View Accuracy Report
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
