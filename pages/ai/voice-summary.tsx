import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Volume2, ArrowRight, Sparkles, CheckCircle, Download, Clock, Calendar, Play, Headphones, BarChart3, TrendingUp, AlertTriangle, Sun, Activity, Zap } from "lucide-react";

export function VoiceSummaryPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foreground via-[#0A0F1E] to-foreground py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl opacity-30" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-violet-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              AUTO-GENERATED
            </div>
            
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-5">
              Daily Audio Briefings
            </p>
            <h1 className="mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Voice Summary
            </h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              Auto-generated daily voice briefings of your plant performance—listen to generation stats, alerts, maintenance items, and key insights in 2-3 minutes while driving, walking, or multitasking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Voice Summary */}
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
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-violet-500/20 border border-primary/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Volume2 className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Audio Briefings
                </span>
              </div>
              <h2 className="mb-6">What is Voice Summary?</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Voice Summary</strong> automatically generates a daily audio briefing of your plant's performance—like a personalized podcast about your solar plant. Every morning, a 2-3 minute voice summary is created covering yesterday's generation, current alerts, maintenance needs, and key performance insights.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Instead of logging into dashboards and scrolling through charts, just press play—listen while driving to the site, during your morning routine, or any time you want a quick update. Access today's summary or go back and listen to previous days' briefings.
              </p>
              
              <div className="space-y-3">
                {[
                  { label: "Auto-Generated Daily", desc: "New voice summary ready every morning" },
                  { label: "2-3 Minute Duration", desc: "Quick, focused briefing—not lengthy" },
                  { label: "Historical Playback", desc: "Listen to any previous day's summary" },
                  { label: "Multi-Language Support", desc: "Hindi, English, regional languages" }
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
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200"
                  alt="Listening to Voice Summary"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating audio player mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white border border-primary/20 rounded-2xl p-6 shadow-2xl backdrop-blur-sm min-w-[280px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] font-semibold text-foreground">Today's Summary</p>
                    <p className="text-[11px] text-muted-foreground">2m 34s</p>
                  </div>
                </div>
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-gradient-to-r from-primary to-orange-600" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included in Voice Summary */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-violet-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Volume2 className="w-3 h-3" />
              BRIEFING CONTENT
            </div>
            <h2 className="mb-5 text-white">What Your Daily Summary Covers</h2>
            <p className="text-[16px] text-white/60 leading-relaxed">
              Comprehensive 2-3 minute audio report on your plant
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                section: "Generation Overview",
                icon: Sun,
                content: [
                  "Yesterday's total generation (MWh)",
                  "Target vs actual performance (%)",
                  "Performance ratio and CUF",
                  "Comparison to last week/month",
                  "Weather impact summary"
                ],
                example: '"Yesterday we generated 42.3 MWh, 98% of expected. Performance ratio at 82%, slightly above average."'
              },
              {
                section: "Critical Alerts",
                icon: AlertTriangle,
                content: [
                  "Active alarms and their severity",
                  "Equipment failures or issues",
                  "Communication losses",
                  "Grid events or curtailments",
                  "Safety alerts"
                ],
                example: '"Three active alarms: Inverter 8 high temperature—resolved. String 12 underperforming—inspection needed."'
              },
              {
                section: "Maintenance Highlights",
                icon: Activity,
                content: [
                  "Urgent maintenance items",
                  "Scheduled maintenance reminders",
                  "Cleaning recommendations",
                  "Predictive maintenance alerts",
                  "Completed work updates"
                ],
                example: '"Panel cleaning recommended—soiling at 5%. Inverter filter cleaning due today on units 3 and 7."'
              },
              {
                section: "Performance Insights",
                icon: TrendingUp,
                content: [
                  "Top/bottom performing inverters",
                  "String-level issues detected",
                  "Efficiency trends",
                  "Availability metrics",
                  "Week-over-week comparison"
                ],
                example: '"Inverter 4 leading at 99% efficiency. Block B performing 3% below average—investigate strings 40-45."'
              },
              {
                section: "Revenue & Financial",
                icon: BarChart3,
                content: [
                  "Yesterday's revenue estimate",
                  "Monthly generation progress",
                  "PPA target tracking",
                  "Revenue loss from downtime",
                  "Financial impact of issues"
                ],
                example: '"Revenue yesterday: ₹2.1 lakh. Month-to-date: ₹58 lakh, tracking 102% of monthly target."'
              },
              {
                section: "Weather & Forecast",
                icon: Clock,
                content: [
                  "Yesterday's irradiance summary",
                  "Today's generation forecast",
                  "Week-ahead weather outlook",
                  "Rain or dust storm alerts",
                  "Temperature trends"
                ],
                example: '"Today expect 95% generation—partly cloudy morning. Rain forecast Thursday—defer cleaning."'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-violet-500/20 border border-primary/30 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-[17px] font-bold text-white">{item.section}</h3>
                </div>
                
                <div className="space-y-2 mb-5">
                  {item.content.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-[13px] text-white/70 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-white/10 bg-gradient-to-r from-primary/10 to-violet-500/10 p-4 rounded-lg">
                  <p className="text-[12px] text-white/50 italic leading-relaxed">{item.example}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/10 to-violet-500/10 border border-primary/20 text-foreground text-[10px] font-bold tracking-wider px-4 py-2 rounded-full">
              <Play className="w-3 h-3 text-primary" />
              HOW IT WORKS
            </div>
            <h2 className="mb-5">Daily Voice Generation Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Data Collection",
                desc: "Every night at midnight, system collects all plant data from the previous day",
                icon: Activity
              },
              {
                step: "02",
                title: "AI Analysis",
                desc: "AI analyzes generation, identifies key insights, anomalies, and action items",
                icon: Sparkles
              },
              {
                step: "03",
                title: "Voice Generation",
                desc: "Natural language script generated and converted to high-quality voice audio",
                icon: Volume2
              },
              {
                step: "04",
                title: "Ready by Morning",
                desc: "Your personalized summary ready by 6 AM—listen anytime via app or web",
                icon: Clock
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
                <div className="h-full bg-gradient-to-br from-muted/30 to-white border border-primary/10 rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="text-[14px] font-bold text-primary/50 mb-4">{item.step}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-violet-500/20 border border-primary/30 rounded-xl flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-[17px] font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/10 to-violet-500/10 border border-primary/20 text-foreground text-[10px] font-bold tracking-wider px-4 py-2 rounded-full">
              <Headphones className="w-3 h-3 text-primary" />
              KEY BENEFITS
            </div>
            <h2 className="mb-5">Why Audio Briefings Beat Dashboards</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: "10x",
                label: "Faster Updates",
                desc: "2 minutes listening vs 20 minutes dashboard review",
                icon: Clock
              },
              {
                metric: "100%",
                label: "Hands-Free",
                desc: "Listen while driving, exercising, or multitasking",
                icon: Headphones
              },
              {
                metric: "Daily",
                label: "Historical Access",
                desc: "Play back any previous day's summary anytime",
                icon: Calendar
              },
              {
                metric: "Multi",
                label: "Language Support",
                desc: "Hindi, English, and regional languages",
                icon: Volume2
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-primary/20 rounded-2xl p-8 text-center hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-violet-500/20 border border-primary/30 rounded-xl flex items-center justify-center mx-auto mb-5">
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

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/10 to-violet-500/10 border border-primary/20 text-foreground text-[10px] font-bold tracking-wider px-4 py-2 rounded-full">
              <Zap className="w-3 h-3 text-primary" />
              PERFECT FOR
            </div>
            <h2 className="mb-5">Who Benefits from Voice Summaries?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                persona: "Site Managers",
                scenario: "Listen during morning commute to site—know critical issues before arrival, plan day accordingly",
                benefit: "Arrive prepared, prioritize work"
              },
              {
                persona: "Portfolio Managers",
                scenario: "Manage 10+ plants—listen to each site's 2-minute summary during breakfast, identify which sites need attention",
                benefit: "Multi-site oversight in 20 minutes"
              },
              {
                persona: "O&M Teams",
                scenario: "Field technicians listen while traveling between sites—stay updated on all plants without stopping to check dashboards",
                benefit: "Stay informed while mobile"
              },
              {
                persona: "Asset Owners",
                scenario: "Busy executives—get daily plant updates during morning routine or gym, no need to log in and analyze charts",
                benefit: "Stay informed effortlessly"
              },
              {
                persona: "Remote Monitoring Centers",
                scenario: "Operators monitoring 50+ plants—audio summaries flag which sites need immediate attention vs routine monitoring",
                benefit: "Rapid triage and prioritization"
              },
              {
                persona: "Investors & Lenders",
                scenario: "Periodic reviews—listen to last week's summaries in 15 minutes to understand plant performance and issues",
                benefit: "Quick catch-up anytime"
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
                <h3 className="text-[18px] font-bold text-foreground mb-4">{item.persona}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">{item.scenario}</p>
                <div className="pt-4 border-t border-primary/10 bg-gradient-to-r from-primary/5 to-violet-500/5 p-3 rounded-lg">
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
            <div className="inline-flex items-center gap-2 mb-6 bg-gradient-to-r from-primary/20 to-violet-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              DAILY AUTO-BRIEFINGS
            </div>
            
            <h2 className="text-white mb-6">Listen to Your Plant's Daily Story</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              2-3 minute voice summaries, auto-generated daily, multi-language support
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px] bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 border-0">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Enable Voice Summaries
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link to="/resources/data-sheets" className="inline-flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Listen to Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
