import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { 
  ArrowRight,
  AlertCircle,
  Database,
  Brain,
  TrendingUp
} from "lucide-react";
import howWeWorkStep1 from "figma:asset/cefd731eddf521ade66ea16e1d8e01093e5a3001.png";
import howWeWorkStep2 from "figma:asset/2c840412b212439198fbf994001ff1d202aa584f.png";
import howWeWorkStep3 from "figma:asset/09ecca83c56e10827fa852eafe856be89a8daa0b.png";
import howWeWorkStep4 from "figma:asset/d476e1e14e9e0e6253147cc2873890d525fda002.png";

export function HowWeWorkSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full mb-6"
          >
            <motion.div
              className="w-2 h-2 bg-primary rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-[13px] font-bold text-primary uppercase tracking-widest">
              The SolarLive Journey
            </span>
          </motion.div>
          <h2 className="text-[44px] lg:text-[52px] font-bold text-foreground mb-5 tracking-tight leading-tight">
            From <span className="text-red-500">Problem</span> to{" "}
            <span className="text-green-500">Performance</span>
          </h2>
          <p className="text-[19px] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch how we transform blind spots into bright insights — a proven 4-step story that turns every solar asset into a revenue-generating powerhouse
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Animated Timeline */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            {/* Gradient line */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 via-blue-500/20 via-purple-500/20 to-green-500/20" />
            
            {/* Animated particles moving down */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 w-3 h-3 -ml-1.5 bg-primary rounded-full"
                animate={{
                  top: ["0%", "100%"],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.7
                }}
              />
            ))}
          </div>

          {/* Story Steps */}
          <div className="space-y-24">
            {[
              {
                step: "01",
                title: "The Problem",
                subtitle: "Unmonitored Assets",
                description: "Solar panels with frayed cables and no data flow. Storm clouds of uncertainty loom. Hidden faults drain revenue while operators remain blind to performance gaps and equipment failures.",
                icon: AlertCircle,
                color: "red",
                gradient: "from-red-500 to-orange-500",
                illustration: howWeWorkStep1,
                metrics: ["0% Visibility", "Unknown Losses", "Reactive Fixes"]
              },
              {
                step: "02",
                title: "The Solution",
                subtitle: "Connected & Centralized",
                description: "Every inverter, panel, and sensor streams live data through secure edge devices. Our cloud platform receives millions of data points, creating a unified digital twin of your entire solar portfolio.",
                icon: Database,
                color: "blue",
                gradient: "from-blue-500 to-cyan-500",
                illustration: howWeWorkStep2,
                metrics: ["100+ Protocols", "Real-Time Sync", "Centralized Hub"]
              },
              {
                step: "03",
                title: "The Process",
                subtitle: "Intelligent Analysis",
                description: "Machine learning algorithms crunch data in the cloud. AI detects patterns, predicts failures, and surfaces performance alerts instantly on your dashboard. Intelligence at enterprise scale.",
                icon: Brain,
                color: "purple",
                gradient: "from-purple-500 to-pink-500",
                illustration: howWeWorkStep3,
                metrics: ["AI-Powered", "Predictive", "Automated Alerts"]
              },
              {
                step: "04",
                title: "The Benefit",
                subtitle: "Optimized Performance",
                description: "Bright sunshine meets peak efficiency. Reduced downtime boosts energy yield. Data-driven maintenance cuts costs. The result: maximized ROI with measurable financial returns that scale.",
                icon: TrendingUp,
                color: "green",
                gradient: "from-green-500 to-emerald-500",
                illustration: howWeWorkStep4,
                metrics: ["+15% Yield", "-40% Downtime", "2x ROI"]
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Side */}
                <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:order-2 lg:pl-16"}`}>
                  {/* Step Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg mb-6 relative group`}
                  >
                    <span className="text-[24px] font-bold text-white relative z-10">{step.step}</span>
                    <motion.div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                      style={{ 
                        background: step.color === 'red' ? '#ef4444' : step.color === 'blue' ? '#3b82f6' : step.color === 'purple' ? '#a855f7' : '#22c55e'
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.7, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 
                      className="text-[36px] font-bold mb-2"
                      style={{ 
                        color: step.color === 'red' ? '#ef4444' : step.color === 'blue' ? '#3b82f6' : step.color === 'purple' ? '#a855f7' : '#22c55e'
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[20px] font-semibold text-foreground mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Metrics Pills */}
                    <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      {step.metrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                          className="px-4 py-2 rounded-full border text-[13px] font-semibold"
                          style={{
                            backgroundColor: `rgba(${step.color === 'red' ? '239, 68, 68' : step.color === 'blue' ? '59, 130, 246' : step.color === 'purple' ? '168, 85, 247' : '34, 197, 94'}, 0.1)`,
                            borderColor: `rgba(${step.color === 'red' ? '239, 68, 68' : step.color === 'blue' ? '59, 130, 246' : step.color === 'purple' ? '168, 85, 247' : '34, 197, 94'}, 0.2)`,
                            color: step.color === 'red' ? '#dc2626' : step.color === 'blue' ? '#2563eb' : step.color === 'purple' ? '#9333ea' : '#16a34a'
                          }}
                        >
                          {metric}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Illustration Side */}
                <div className={`${index % 2 === 0 ? "lg:order-2" : ""} relative`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: index % 2 === 0 ? -15 : 15 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 5 : -5 }}
                    className="relative group cursor-pointer"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Glowing background */}
                    <motion.div
                      className={`absolute -inset-8 bg-gradient-to-br ${step.gradient} rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Card Container */}
                    <div className="relative bg-white rounded-3xl border-2 border-border shadow-2xl overflow-hidden p-8 group-hover:border-primary/40 transition-all duration-300">
                      {/* Top gradient bar */}
                      <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${step.gradient}`} />
                      
                      {/* Illustration */}
                      <motion.img
                        src={step.illustration}
                        alt={step.title}
                        className="w-full h-auto relative z-10"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Floating icon badge */}
                      <motion.div
                        className={`absolute top-12 right-12 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-xl flex items-center justify-center`}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </motion.div>

                      {/* Corner accents */}
                      <div 
                        className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 rounded-tl-lg" 
                        style={{ borderColor: step.color === 'red' ? '#ef4444' : step.color === 'blue' ? '#3b82f6' : step.color === 'purple' ? '#a855f7' : '#22c55e' }} 
                      />
                      <div 
                        className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 rounded-br-lg" 
                        style={{ borderColor: step.color === 'red' ? '#ef4444' : step.color === 'blue' ? '#3b82f6' : step.color === 'purple' ? '#a855f7' : '#22c55e' }} 
                      />
                    </div>

                    {/* Floating particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          top: `${20 + i * 30}%`,
                          left: index % 2 === 0 ? "-10%" : "110%",
                          backgroundColor: step.color === 'red' ? '#ef4444' : step.color === 'blue' ? '#3b82f6' : step.color === 'purple' ? '#a855f7' : '#22c55e'
                        }}
                        animate={{
                          x: index % 2 === 0 ? [0, 20, 0] : [0, -20, 0],
                          y: [0, -20, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.5
                        }}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Central Timeline Node (Desktop only) */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                  className={`hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} border-4 border-white shadow-xl z-10`}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        `0 0 0 0 rgba(${step.color === 'red' ? '239, 68, 68' : step.color === 'blue' ? '59, 130, 246' : step.color === 'purple' ? '168, 85, 247' : '34, 197, 94'}, 0.4)`,
                        `0 0 0 20px rgba(${step.color === 'red' ? '239, 68, 68' : step.color === 'blue' ? '59, 130, 246' : step.color === 'purple' ? '168, 85, 247' : '34, 197, 94'}, 0)`,
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-28"
        >
          <div className="inline-block bg-gradient-to-br from-white to-orange-50/50 border-2 border-primary/20 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-primary/5"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 100%"
              }}
            />
            
            <div className="relative z-10">
              <p className="text-[20px] text-foreground font-semibold mb-6">
                Ready to write <span className="text-primary">your success story</span>?
              </p>
              <p className="text-[16px] text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join 500+ solar enterprises who transformed uncertainty into optimized performance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild className="h-14 px-10 text-[16px] shadow-xl">
                    <Link to="/contact" className="flex items-center gap-2">
                      Start Your Journey
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" asChild className="h-14 px-10 text-[16px] border-2">
                    <Link to="/about">
                      See Case Studies
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
