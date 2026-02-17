import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ArrowRight, Eye, Brain, Zap, Shield, Users, Building2 } from "lucide-react";

export function HeroCompact() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(214, 117, 6, 0.1) 0%, transparent 70%)",
            filter: "blur(80px)"
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Clear Messaging */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-full">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">
                  Solar Intelligence Platform
                </span>
              </div>
            </motion.div>

            {/* Main Headline - Clear & Direct */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-[42px] lg:text-[52px] text-foreground leading-[1.1] tracking-tight font-bold">
                Monitor. Analyze. Optimize.
                <br />
                <span className="text-primary">Every Kilowatt. Every Day.</span>
              </h1>
              
              <p className="text-[17px] text-muted-foreground leading-relaxed max-w-2xl">
                Real-time monitoring and AI-powered insights for utility-scale solar plants. See problems before they cost you.
              </p>
            </motion.div>

            {/* What We Do - 3 Clear Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid sm:grid-cols-3 gap-4"
            >
              {[
                { icon: Eye, label: "Monitor", desc: "Real-time data" },
                { icon: Brain, label: "Analyze", desc: "AI insights" },
                { icon: Zap, label: "Optimize", desc: "Auto actions" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/50">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-foreground mb-0.5">{item.label}</div>
                    <div className="text-[12px] text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button size="lg" asChild className="h-11 px-7">
                <Link to="/contact" className="flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-11 px-7">
                <Link to="/solutions">
                  Explore Platform
                </Link>
              </Button>
            </motion.div>

            {/* Compact Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-8 pt-6 border-t border-border/50"
            >
              {[
                { value: "500+", label: "MW Monitored" },
                { value: "99.8%", label: "Uptime" },
                { value: "15%", label: "Yield Increase" }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-[24px] font-bold text-foreground leading-none mb-1">{stat.value}</div>
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Compact Value Props */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Who It's For */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-6 border border-border/50"
            >
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="text-[13px] font-bold text-foreground uppercase tracking-wider">Who We Serve</h3>
              </div>
              <div className="space-y-2.5">
                {[
                  "Utility-Scale Solar Plants",
                  "Independent Power Producers",
                  "EPC Companies",
                  "Asset Management Firms"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[14px] text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="text-[13px] font-bold text-foreground uppercase tracking-wider">Enterprise Grade</h3>
              </div>
              <div className="space-y-2.5">
                {[
                  "100+ Inverter Brands Supported",
                  "Sub-Second Data Refresh",
                  "ISO 27001 Security Certified",
                  "24/7 Technical Support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[14px] text-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trusted By */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-foreground rounded-2xl p-5 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Building2 className="w-4 h-4 text-primary" />
                <div className="text-[11px] font-bold text-white uppercase tracking-wider">Trusted By</div>
              </div>
              <div className="text-[15px] text-white/80 leading-relaxed">
                500+ Enterprises Across 25 Countries
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
