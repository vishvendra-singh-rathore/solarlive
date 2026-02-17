import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Database, ArrowRight, Check, Cpu, Zap, BarChart3, Shield, Eye, Bell, TrendingUp, Clock, Award, Settings, Download, Wifi, Server, HardDrive, Activity, CloudOff, Thermometer, Wind, Sun, Layers, Lock, AlertTriangle, Gauge, Cable, Network, Radio, ChevronRight, Target, Lightbulb, RefreshCw, LineChart, PieChart, CheckCircle, XCircle, Save, Upload, FileText, Search, Filter, TrendingDown, AlertCircle, Sparkles, Brain, Timer, Clipboard } from "lucide-react";

export function DataLoggerPage() {
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
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-violet-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Database className="w-3 h-3" />
              THE BRAIN OF YOUR SOLAR PLANT
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Industrial Data Loggers
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed mb-10">
              Enterprise-grade data acquisition systems that collect, process, and transmit real-time data from your solar plant—the critical link between your equipment and actionable insights.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Database, metric: "1-5 sec", label: "Data Polling", sublabel: "Real-time acquisition" },
                { icon: Server, metric: "-40 to 70°C", label: "Temperature Range", sublabel: "Industrial grade" },
                { icon: Wifi, metric: "4G + Ethernet", label: "Connectivity", sublabel: "Dual redundancy" },
                { icon: HardDrive, metric: "90 Days", label: "Local Storage", sublabel: "Zero data loss" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5"
                >
                  <item.icon className="w-6 h-6 text-primary mb-3" />
                  <p className="text-[28px] font-bold text-white mb-1">{item.metric}</p>
                  <p className="text-[13px] font-semibold text-white/90 mb-0.5">{item.label}</p>
                  <p className="text-[11px] text-white/50">{item.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is a Data Logger */}
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
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Understanding Data Loggers
                </span>
              </div>
              <h2 className="mb-6">What is a Solar Data Logger?</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                A <strong className="text-foreground">Data Logger</strong> is the central nervous system of your solar power plant—an industrial computer that continuously collects data from inverters, weather sensors, energy meters, and other equipment every second, 24/7/365.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Think of it as the <strong className="text-foreground">plant's historian</strong>—recording every watt of energy generated, every degree of temperature, every alarm, and every event. Without a data logger, your plant is blind. With it, you have complete visibility, control, and intelligence.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Data Collection", desc: "Polls 100+ devices every 1-5 seconds via Modbus/RS485" },
                  { label: "Local Processing", desc: "Edge computing for instant analytics & alerts" },
                  { label: "Cloud Transmission", desc: "Secure upload to SolarLive cloud platform" },
                  { label: "Backup & Reliability", desc: "Local storage ensures zero data loss" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[15px] font-semibold text-foreground">{item.label}</p>
                      <p className="text-[14px] text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200"
                  alt="Industrial Data Logger Hardware"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Data Loggers are Essential */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              The Foundation of Monitoring
            </p>
            <h2 className="mb-5">Why Data Loggers are Mission-Critical</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Your plant can't be optimized if it can't be measured
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Enables Complete Visibility",
                description: "Without a data logger, you're flying blind. You won't know how much energy you generated today, which inverter is faulty, or what your performance ratio is. The data logger is the foundation of all monitoring—everything else builds on this.",
                impact: "Foundation of all intelligence",
                color: "blue"
              },
              {
                icon: AlertTriangle,
                title: "Instant Fault Detection",
                description: "Detects inverter trips, communication failures, low generation, and equipment faults in real-time. Triggers instant alerts via SMS, email, and app notifications—enabling 10x faster response than manual checking.",
                impact: "Catch faults within seconds",
                color: "red"
              },
              {
                icon: Shield,
                title: "Prevents Data Loss",
                description: "Local data buffering ensures that even if internet connection fails for days, no data is lost. When connection restores, all buffered data automatically uploads. Cloud-only systems lose critical data during outages.",
                impact: "Zero data loss guarantee",
                color: "green"
              },
              {
                icon: BarChart3,
                title: "Historical Performance Analysis",
                description: "Stores years of 1-minute interval data—enabling trend analysis, year-over-year comparison, seasonal pattern identification, and performance degradation detection. Historical data is gold for optimization.",
                impact: "25+ years data retention",
                color: "purple"
              },
              {
                icon: TrendingUp,
                title: "Regulatory Compliance",
                description: "Provides timestamped, tamper-proof data logs required by MNRE, DISCOMs, lenders, and investors. Exportable reports with IEC 61724 compliance—essential for audits, performance guarantees, and legal documentation.",
                impact: "IEC 61724 compliant logging",
                color: "orange"
              },
              {
                icon: Target,
                title: "Foundation for AI & Analytics",
                description: "Clean, structured data enables advanced analytics—soiling detection, anomaly detection, yield forecasting, and predictive maintenance. Poor data logging = poor analytics. Quality in, quality out.",
                impact: "AI-ready data architecture",
                color: "blue"
              }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-border"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-[18px] font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">{reason.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-[13px] font-semibold text-primary">{reason.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Data Loggers Work - Visual Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Data Journey
            </p>
            <h2 className="mb-5">How SolarLive Data Loggers Work</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              From raw sensor signals to actionable intelligence
            </p>
          </div>

          {/* Visual Infographic Flow */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[31px] top-16 bottom-16 w-0.5 bg-primary/20 hidden md:block" />
              
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    icon: Cable,
                    title: "Device Connection & Polling",
                    description: "Data logger connects to inverters, weather sensors, meters, and other equipment via RS485/Modbus RTU/TCP. Polls each device every 1-5 seconds, reading 50+ parameters per inverter—power, voltage, current, temperature, faults, etc.",
                    details: ["RS485/Modbus RTU/TCP protocols", "1-5 second polling interval", "100+ devices per logger", "Auto device discovery"]
                  },
                  {
                    step: "2",
                    icon: Cpu,
                    title: "Edge Processing & Validation",
                    description: "Industrial-grade processor validates data quality, detects anomalies, removes outliers, calculates aggregates (kWh, PR, CUF), and performs real-time analytics. Edge computing reduces cloud bandwidth and enables instant alerts.",
                    details: ["Data quality validation", "Real-time calculations", "Anomaly detection", "Edge AI processing"]
                  },
                  {
                    step: "3",
                    icon: HardDrive,
                    title: "Local Storage & Buffering",
                    description: "All data is stored locally on 64GB+ industrial SSD/SD cards—ensuring zero data loss during internet outages. Local ring buffer stores 6-12 months of 1-minute data. Critical for remote sites with unreliable connectivity.",
                    details: ["64GB+ industrial storage", "6-12 month local retention", "Ring buffer architecture", "Power-loss protection"]
                  },
                  {
                    step: "4",
                    icon: Upload,
                    title: "Secure Cloud Transmission",
                    description: "Encrypted data transmission to SolarLive cloud via 4G/Ethernet/Wi-Fi. Uses MQTT/HTTPS with TLS 1.3 encryption. Automatic retry logic and delta compression minimize bandwidth. Works seamlessly even on slow 2G/3G networks.",
                    details: ["TLS 1.3 encryption", "4G/Ethernet/Wi-Fi", "Auto-retry on failure", "Low bandwidth optimization"]
                  },
                  {
                    step: "5",
                    icon: Brain,
                    title: "Cloud Analytics & AI",
                    description: "Cloud platform stores data permanently, runs advanced analytics (ML-based anomaly detection, yield forecasting, soiling analysis), generates automated reports, and powers dashboards. Historical data enables continuous learning.",
                    details: ["Permanent cloud storage", "ML-based analytics", "Automated reporting", "Predictive insights"]
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative flex gap-6 items-start"
                  >
                    {/* Step Circle */}
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-[24px] font-bold shadow-lg z-10">
                      {item.step}
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1 bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[20px] font-bold text-foreground mb-2">{item.title}</h3>
                          <p className="text-[15px] text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-[13px] text-foreground">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Data is Collected */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Comprehensive Data Acquisition
            </p>
            <h2 className="mb-5">What Data Does the Logger Collect?</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              200+ parameters logged every minute from all plant equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Inverter Data",
                icon: Zap,
                parameters: [
                  "AC/DC power (kW)",
                  "AC/DC voltage (V)",
                  "AC/DC current (A)",
                  "Frequency (Hz)",
                  "Power factor",
                  "Daily/total energy (kWh)",
                  "Inverter efficiency (%)",
                  "Temperature (°C)",
                  "Operating status",
                  "Fault codes & alarms"
                ]
              },
              {
                category: "String-Level Data",
                icon: Cable,
                parameters: [
                  "String voltage (V)",
                  "String current (A)",
                  "String power (kW)",
                  "MPPT efficiency",
                  "String temperature",
                  "Insulation resistance",
                  "Ground fault detection",
                  "Arc fault detection",
                  "String-level faults",
                  "String availability"
                ]
              },
              {
                category: "Weather Sensors",
                icon: Sun,
                parameters: [
                  "Solar irradiance (W/m²)",
                  "GHI/POA/DNI/DHI",
                  "Ambient temperature",
                  "Module temperature",
                  "Wind speed & direction",
                  "Humidity (%)",
                  "Barometric pressure",
                  "Rainfall (mm)",
                  "Cloud cover index",
                  "Soiling ratio"
                ]
              },
              {
                category: "Energy Meters",
                icon: Gauge,
                parameters: [
                  "Active energy (kWh)",
                  "Reactive energy (kVARh)",
                  "Apparent energy (kVAh)",
                  "Import/export energy",
                  "Power factor",
                  "Voltage THD (%)",
                  "Current THD (%)",
                  "Frequency variations",
                  "Grid availability",
                  "Power quality events"
                ]
              },
              {
                category: "System Performance",
                icon: BarChart3,
                parameters: [
                  "Performance Ratio (PR %)",
                  "Capacity Utilization Factor",
                  "Specific Yield (kWh/kWp)",
                  "System availability (%)",
                  "Grid availability (%)",
                  "Equipment availability",
                  "Energy losses breakdown",
                  "Expected vs actual generation",
                  "Weather-normalized PR",
                  "Benchmark comparisons"
                ]
              },
              {
                category: "Alarms & Events",
                icon: Bell,
                parameters: [
                  "Inverter faults & trips",
                  "Communication failures",
                  "High/low voltage events",
                  "Overload conditions",
                  "Temperature alarms",
                  "Grid disturbances",
                  "Equipment offline alerts",
                  "Low generation warnings",
                  "Weather-based alerts",
                  "Custom threshold alarms"
                ]
              }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl border border-border hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-[18px] font-bold text-foreground">{category.category}</h3>
                </div>
                <div className="space-y-2.5">
                  {category.parameters.map((param, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-[14px] text-foreground leading-relaxed">{param}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do With The Data */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              From Data to Intelligence
            </p>
            <h2 className="mb-5">How We Transform Data Into Actionable Insights</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Advanced analytics that tell you what to do and what to avoid
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                analysis: "Real-Time Fault Detection",
                description: "AI algorithms continuously monitor all data streams, detecting anomalies within seconds—inverter trips, communication failures, sudden generation drops, or string failures. Instant alerts with root cause analysis and recommended actions.",
                icon: AlertCircle,
                actions: ["Auto-alert via SMS/email/app", "Root cause identification", "Prioritized action items", "Escalation workflows"],
                example: "Example: 'Inverter 5 stopped generating at 11:23 AM. Likely cause: DC overvoltage. Action: Check string 7-8 for open circuit.'"
              },
              {
                analysis: "Performance Benchmarking",
                description: "Compare your plant against design expectations, historical performance, sister sites, and regional benchmarks. Identify underperformance that's masked by good absolute generation. Pinpoint which equipment or areas need attention.",
                icon: TrendingUp,
                actions: ["Expected vs actual comparison", "Peer plant benchmarking", "Equipment-level ranking", "Underperformance alerts"],
                example: "Example: 'Your plant PR is 78%, but similar plants in your region average 82%. Likely cause: Soiling. Action: Schedule panel cleaning.'"
              },
              {
                analysis: "Soiling Detection & Cleaning Optimization",
                description: "Machine learning compares actual vs expected generation based on weather data, detecting soiling losses as small as 2-3%. Recommends optimal cleaning schedules to maximize ROI—avoiding over-cleaning or under-cleaning.",
                icon: Sparkles,
                actions: ["Soiling loss quantification", "Optimal cleaning schedule", "ROI-based recommendations", "Rain event tracking"],
                example: "Example: 'Soiling loss detected: 6.2% (₹1.8L/month). Cleaning recommended in 3-5 days for optimal ROI. Next rain forecast: 10 days.'"
              },
              {
                analysis: "Yield Forecasting & Prediction",
                description: "Combines historical generation patterns with weather forecasts to predict tomorrow's, next week's, and next month's energy generation with 90%+ accuracy. Critical for grid scheduling and PPA compliance.",
                icon: Brain,
                actions: ["Hourly generation forecasts", "7-day weather-based predictions", "Monthly/annual yield forecasts", "Confidence intervals"],
                example: "Example: 'Tomorrow's predicted generation: 8,450 kWh (±5%). Peak expected at 12:30 PM. Cloud cover 20-30% in afternoon.'"
              },
              {
                analysis: "Loss Analysis & Attribution",
                description: "Breaks down all energy losses—weather losses, equipment downtime, grid unavailability, soiling, shading, cable losses, inverter losses, transformer losses. Quantifies each loss source so you know where to focus improvement efforts.",
                icon: PieChart,
                actions: ["Loss waterfall charts", "Loss attribution by category", "Month-over-month trends", "Cost impact quantification"],
                example: "Example: 'Total losses: 18%. Weather: 8%, Soiling: 4%, Equipment downtime: 3%, Cable losses: 2%, Other: 1%. Focus: Reduce soiling losses.'"
              },
              {
                analysis: "Predictive Maintenance",
                description: "Detects early warning signs of equipment failure—gradual efficiency decline, increasing temperature, rising fault frequency, or abnormal behavior patterns. Recommends preventive maintenance before catastrophic failures occur.",
                icon: Settings,
                actions: ["Equipment health scoring", "Degradation trend detection", "Maintenance prioritization", "Failure risk prediction"],
                example: "Example: 'Inverter 12 showing 3% efficiency decline over 60 days. Temperature rising. Recommend inspection within 2 weeks to prevent failure.'"
              },
              {
                analysis: "Weather-Normalized Reporting",
                description: "Automatically generates investor-grade reports showing actual vs expected performance, weather-adjusted PR, and compliance metrics. Proves that low generation was due to weather, not poor plant performance.",
                icon: FileText,
                actions: ["Automated monthly reports", "Weather-normalized metrics", "Lender-compliant formats", "Custom report templates"],
                example: "Example: 'August generation: 95% of expected (excellent). PR: 81.2% weather-normalized. Weather was 8% below normal—outperformed expectations.'"
              },
              {
                analysis: "Cost & Revenue Optimization",
                description: "Calculates revenue impact of every issue—how much money you're losing from downtime, soiling, or underperformance. Prioritizes O&M actions by ROI. Tracks cumulative revenue vs budget.",
                icon: TrendingDown,
                actions: ["Revenue loss quantification", "ROI-based action priority", "Budget vs actual tracking", "Financial forecasting"],
                example: "Example: 'Inverter 8 downtime: ₹45,000 revenue loss (12 hours @ ₹3,750/hr). Soiling: ₹1.2L/month loss. Priority: Fix inverter, then clean.'"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-muted/30 p-8 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold text-foreground mb-2">{item.analysis}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {item.actions.map((action, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-[13px] text-foreground">{action}</p>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border bg-white/50 p-4 rounded-lg">
                  <p className="text-[13px] text-muted-foreground italic leading-relaxed">{item.example}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SolarLive Data Loggers are Better */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Industrial-Grade Reliability
            </p>
            <h2 className="mb-5">Why SolarLive Data Loggers Lead the Industry</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              10+ years of proven reliability in harshest conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Industrial-Grade Hardware",
                description: "Designed for -40°C to +85°C operating temperature, IP65-rated enclosures, wide-range DC input (12-48V), and industrial-grade components. Survives dust, humidity, lightning, and voltage fluctuations—unlike consumer-grade Raspberry Pi or Arduino solutions.",
                icon: Shield,
                stats: "-40°C to +85°C operation",
                comparison: "vs consumer-grade hardware"
              },
              {
                title: "Zero Data Loss Architecture",
                description: "64GB+ industrial SSD/SD with wear-leveling, ring buffer storage, power-loss protection, and automatic cloud sync on reconnection. Even if internet fails for weeks, all data is safely buffered locally. Competitors lose data during outages.",
                icon: Save,
                stats: "6-12 month local buffering",
                comparison: "vs cloud-only systems"
              },
              {
                title: "Multi-Protocol Support",
                description: "Supports Modbus RTU, Modbus TCP, RS485, RS232, Ethernet, and manufacturer-specific protocols (SMA, Huawei, Sungrow, Delta, etc.). Universal compatibility with 100+ inverter brands—no vendor lock-in.",
                icon: Network,
                stats: "100+ inverter brands supported",
                comparison: "vs single-protocol loggers"
              },
              {
                title: "Edge AI Processing",
                description: "Onboard AI processor runs anomaly detection, soiling analysis, and fault diagnosis locally—enabling instant alerts without cloud round-trip. 10x faster than cloud-only analytics. Reduces bandwidth by 80%.",
                icon: Cpu,
                stats: "Real-time edge analytics",
                comparison: "vs cloud-only processing"
              },
              {
                title: "4G/5G Backup Connectivity",
                description: "Dual connectivity—primary Ethernet + backup 4G/5G modem ensures 99.9% uptime. Automatic failover within seconds. Remote sites with no broadband? No problem. Built-in dual SIM support for redundancy.",
                icon: Wifi,
                stats: "Dual connectivity (Ethernet + 4G)",
                comparison: "vs single-connection loggers"
              },
              {
                title: "Cybersecurity Hardened",
                description: "TLS 1.3 encryption, certificate-based authentication, firewall, intrusion detection, and regular security updates. Passes SCADA cybersecurity audits. Competitors have basic or no security—exposing plants to cyber attacks.",
                icon: Lock,
                stats: "TLS 1.3 + certificate auth",
                comparison: "vs basic/no security"
              },
              {
                title: "Plug-and-Play Installation",
                description: "Auto-discovers all Modbus devices on the network—no complex configuration. Pre-configured for 100+ inverter models. Average installation time: 2 hours vs 2 days for generic loggers. Includes mobile app for commissioning.",
                icon: Settings,
                stats: "2-hour installation",
                comparison: "vs 2-day manual setup"
              },
              {
                title: "Remote Management & Updates",
                description: "OTA (over-the-air) firmware updates, remote configuration, remote troubleshooting, and remote reboot—no site visit needed. Competitors require on-site visits for updates. We manage your loggers remotely, saving thousands in O&M costs.",
                icon: RefreshCw,
                stats: "OTA updates & remote mgmt",
                comparison: "vs on-site-only updates"
              },
              {
                title: "Built-In Redundancy",
                description: "Redundant power inputs (AC + DC), dual communication paths, watchdog timers for auto-recovery, and backup data storage. If one component fails, others take over seamlessly. Designed for 99.9%+ uptime.",
                icon: Layers,
                stats: "Redundant power & comms",
                comparison: "vs single-point-of-failure"
              },
              {
                title: "Scalable Architecture",
                description: "Single logger handles 1 MW to 100 MW plants. Cascade multiple loggers for larger plants. Distributed architecture allows plant-wide deployment. No performance degradation as plant grows—unlike monolithic systems.",
                icon: TrendingUp,
                stats: "1 MW to 100 MW scalability",
                comparison: "vs fixed-capacity loggers"
              },
              {
                title: "10-Year Lifespan",
                description: "Designed for 10-year continuous operation with minimal maintenance. Industrial components, no moving parts (fanless design), conformal coating for humidity protection. Competitors' loggers fail in 2-3 years in Indian conditions.",
                icon: Clock,
                stats: "10-year design life",
                comparison: "vs 2-3 year lifespan"
              },
              {
                title: "24/7 Expert Support",
                description: "Dedicated support team in India—phone, email, WhatsApp, remote login for troubleshooting. 95% issues resolved remotely within 4 hours. Field support available across India. Competitors offer email-only support from overseas.",
                icon: Lightbulb,
                stats: "4-hour response time",
                comparison: "vs email-only support"
              }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">{reason.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <p className="text-[13px] font-bold text-primary">{reason.stats}</p>
                  <p className="text-[12px] text-muted-foreground">{reason.comparison}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Technical Details
            </p>
            <h2 className="mb-5">Data Logger Technical Specifications</h2>
          </div>

          <div className="bg-muted/30 rounded-2xl border border-border p-10">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { spec: "Processor", value: "ARM Cortex-A7 Quad-Core 1.2GHz" },
                { spec: "RAM/Storage", value: "2GB RAM + 64GB industrial SSD/SD" },
                { spec: "Operating Temperature", value: "-40°C to +85°C (industrial-grade)" },
                { spec: "Enclosure Rating", value: "IP65 (dust & water resistant)" },
                { spec: "Power Input", value: "12-48V DC / 90-265V AC (redundant)" },
                { spec: "Power Consumption", value: "<10W typical" },
                { spec: "Communication Ports", value: "4x RS485, 2x Ethernet, 2x USB" },
                { spec: "Wireless Connectivity", value: "4G/5G LTE (dual SIM), Wi-Fi, optional NB-IoT" },
                { spec: "Protocol Support", value: "Modbus RTU/TCP, SNMP, IEC 61850, MQTT" },
                { spec: "Device Capacity", value: "100+ devices per logger" },
                { spec: "Polling Interval", value: "1-5 seconds (configurable)" },
                { spec: "Data Retention", value: "6-12 months local + 25 years cloud" },
                { spec: "Cybersecurity", value: "TLS 1.3, certificate auth, firewall" },
                { spec: "Certifications", value: "CE, FCC, IEC 61724, ISO 27001" },
                { spec: "MTBF", value: ">100,000 hours (10+ years)" },
                { spec: "Dimensions", value: "200 x 150 x 80 mm (DIN rail mount)" },
                { spec: "Warranty", value: "5 years standard + extended options" },
                { spec: "Support", value: "24/7 phone + remote login support" }
              ].map((spec, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-6 border-b border-border last:border-0">
                  <Cpu className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-foreground mb-1">{spec.spec}</p>
                    <p className="text-[14px] text-muted-foreground">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
            <h2 className="text-white mb-6">Deploy Industrial-Grade Data Logging</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Zero data loss, edge AI, and 10-year reliability—proven in 500+ plants
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request Technical Spec
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/resources/data-sheets" className="inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Datasheet
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-[13px] text-white/50 mb-4">Compatible with 100+ Inverter Brands</p>
              <div className="flex items-center justify-center gap-8 text-white/40 text-[12px] font-medium">
                <span>SMA</span>
                <span>•</span>
                <span>Huawei</span>
                <span>•</span>
                <span>Sungrow</span>
                <span>•</span>
                <span>Delta</span>
                <span>•</span>
                <span>ABB</span>
                <span>•</span>
                <span>100+ More</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}