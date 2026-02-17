import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Activity, ArrowRight, Check, Zap, BarChart3, Shield, Wifi, Database, Eye, Bell, TrendingUp, Clock, Award, Settings, Download, Smartphone, Cloud, Lock, Cpu, Radio, Sun, Users } from "lucide-react";

export function RemoteMonitoringPage() {
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
              <Activity className="w-3 h-3" />
              CORE MONITORING PLATFORM
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Remote Monitoring System (RMS)
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed mb-10">
              Enterprise-grade data acquisition and visualization platform for solar power plants. Monitor every aspect of your solar asset in real-time with military-grade reliability and industry-leading accuracy.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Activity, metric: "100+", label: "Inverter Brands", sublabel: "Universal compatibility" },
                { icon: Database, metric: "99.9%", label: "Uptime SLA", sublabel: "Enterprise reliability" },
                { icon: Eye, metric: "<1 sec", label: "Data Latency", sublabel: "Real-time monitoring" },
                { icon: Shield, metric: "25 Years", label: "Data Archival", sublabel: "Complete history" }
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

      {/* What is RMS */}
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
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Understanding RMS
                </span>
              </div>
              <h2 className="mb-6">What is a Remote Monitoring System?</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                A <strong className="text-foreground">Remote Monitoring System (RMS)</strong> is the digital nervous system of your solar power plant. It continuously collects data from every component—inverters, weather stations, meters, sensors—and transmits this information to a centralized platform accessible from anywhere in the world.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Think of RMS as having <strong className="text-foreground">24/7 eyes and ears</strong> on your solar asset. It tracks power generation, equipment health, environmental conditions, and performance metrics in real-time—alerting you instantly when something needs attention and providing comprehensive analytics to optimize plant operations.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Real-Time Visibility", desc: "See live performance from anywhere, anytime" },
                  { label: "Early Issue Detection", desc: "Catch problems before they become expensive failures" },
                  { label: "Performance Optimization", desc: "Data-driven insights to maximize energy yield" },
                  { label: "Compliance & Reporting", desc: "Automated reports for investors and regulators" }
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200"
                  alt="Remote Monitoring Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why RMS is Essential */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Critical Infrastructure
            </p>
            <h2 className="mb-5">Why Every Solar Plant Needs RMS</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Remote monitoring isn't optional—it's essential for protecting your multi-crore solar investment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Maximize Revenue",
                description: "Studies show that properly monitored plants generate 8-15% more energy than unmonitored ones. RMS detects underperformance instantly, ensuring every ray of sunlight converts to revenue.",
                impact: "8-15% higher yield"
              },
              {
                icon: Shield,
                title: "Protect Your Investment",
                description: "A solar plant is a ₹5-500 crore investment. RMS acts as your insurance policy—detecting equipment failures, theft, fire hazards, and performance degradation before they cause major losses.",
                impact: "Prevent crore-level losses"
              },
              {
                icon: Clock,
                title: "Reduce Downtime",
                description: "Every hour of downtime costs lakhs in lost generation. RMS alerts you instantly when issues occur, reducing Mean Time to Repair (MTTR) from days to hours—minimizing revenue loss.",
                impact: "70% faster issue resolution"
              },
              {
                icon: BarChart3,
                title: "Data-Driven Decisions",
                description: "Make informed O&M decisions backed by real data, not guesswork. Identify problem inverters, optimize cleaning schedules, and predict maintenance needs before failures occur.",
                impact: "30% lower O&M costs"
              },
              {
                icon: Eye,
                title: "Investor Confidence",
                description: "Banks, investors, and offtakers demand transparent performance data. RMS provides auditable reports, compliance documentation, and performance verification—essential for financing and PPAs.",
                impact: "Required for project financing"
              },
              {
                icon: Database,
                title: "Regulatory Compliance",
                description: "Meet MNRE, CERC, and state regulatory reporting requirements automatically. RMS generates compliant reports for subsidies, RECs, and government schemes—avoiding penalties.",
                impact: "100% compliance guarantee"
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

      {/* How RMS Works - Visual Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              System Architecture
            </p>
            <h2 className="mb-5">How SolarLive RMS Works</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              From solar panel to your smartphone—understanding the complete data flow
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
                    icon: Zap,
                    title: "Data Collection at Source",
                    description: "Inverters, meters, weather stations, and sensors generate real-time operational data. SolarLive's data loggers connect via Modbus, RS485, or Ethernet to collect this information every second.",
                    details: ["100+ inverter brands supported", "IEC 61850 & Modbus protocols", "1-second sampling rate", "Local data buffering"]
                  },
                  {
                    step: "2",
                    icon: Radio,
                    title: "Secure Data Transmission",
                    description: "Collected data is encrypted and transmitted to SolarLive's cloud servers via 4G, WiFi, or broadband. Military-grade encryption ensures data security during transmission.",
                    details: ["AES-256 encryption", "Redundant connectivity (4G + Ethernet)", "Offline data storage & sync", "99.9% transmission reliability"]
                  },
                  {
                    step: "3",
                    icon: Cloud,
                    title: "Cloud Processing & Storage",
                    description: "Data is processed, validated, and stored in enterprise-grade cloud infrastructure. Analytics engines calculate performance metrics, detect anomalies, and trigger alerts based on smart algorithms.",
                    details: ["Real-time data processing", "25-year data retention", "Advanced analytics engine", "Redundant backup systems"]
                  },
                  {
                    step: "4",
                    icon: Smartphone,
                    title: "Visualization & Access",
                    description: "Processed data is displayed on web dashboards and mobile apps with intuitive visualizations. Access from anywhere, anytime—on any device with internet connectivity.",
                    details: ["Web + mobile access", "Customizable dashboards", "Real-time charts & graphs", "Multi-user role management"]
                  },
                  {
                    step: "5",
                    icon: Bell,
                    title: "Alerts & Notifications",
                    description: "Smart algorithms continuously monitor performance. When issues are detected, instant alerts are sent via SMS, email, and app notifications—ensuring rapid response to problems.",
                    details: ["Instant SMS/email alerts", "Customizable alert rules", "Escalation workflows", "Alert acknowledgment tracking"]
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

      {/* Installation Process */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Simple Deployment
            </p>
            <h2 className="mb-5">SolarLive RMS Installation Process</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Professional installation completed in 2-5 days depending on plant size
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Installation Steps */}
            <div className="space-y-6">
              {[
                {
                  step: "Step 1",
                  title: "Site Survey & Planning",
                  description: "Our technical team visits your site to assess the inverter brands, communication infrastructure, and network connectivity. We create a detailed installation plan tailored to your plant architecture.",
                  duration: "1 day"
                },
                {
                  step: "Step 2",
                  title: "Hardware Installation",
                  description: "We install data loggers, connect to inverters via Modbus/RS485, mount weather sensors, and install energy meters. All equipment is industrial-grade with IP65 protection for outdoor reliability.",
                  duration: "1-2 days"
                },
                {
                  step: "Step 3",
                  title: "Network Configuration",
                  description: "Configure 4G routers or Ethernet connectivity for data transmission. Set up VPN tunnels for secure communication and test redundant connectivity paths to ensure 99.9% uptime.",
                  duration: "0.5 day"
                },
                {
                  step: "Step 4",
                  title: "System Commissioning",
                  description: "Connect hardware to SolarLive cloud platform, configure plant parameters, set up user accounts, customize dashboards, and define alert rules. Verify data accuracy and completeness.",
                  duration: "1 day"
                },
                {
                  step: "Step 5",
                  title: "Training & Handover",
                  description: "Train your O&M team on dashboard usage, mobile app features, alert management, and reporting tools. Provide documentation and 24/7 support contact details for ongoing assistance.",
                  duration: "0.5 day"
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-[11px] text-primary font-bold uppercase tracking-wider bg-primary/10 px-3 py-1.5 rounded-full">
                      {step.step}
                    </span>
                    <span className="text-[13px] text-muted-foreground font-medium">{step.duration}</span>
                  </div>
                  <h3 className="text-[18px] font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Installation Image & Info */}
            <div className="sticky top-24">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000"
                  alt="RMS Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-border">
                <h3 className="text-[18px] font-bold text-foreground mb-6">Installation Includes</h3>
                <div className="space-y-3">
                  {[
                    "Industrial data loggers (IP65 rated)",
                    "4G/WiFi routers with SIM cards",
                    "Weather station mounting hardware",
                    "Modbus/RS485 cables & connectors",
                    "Energy meters (optional)",
                    "Cloud platform subscription (1 year)",
                    "Mobile app licenses (unlimited users)",
                    "On-site training for O&M team",
                    "1-year warranty on all hardware",
                    "24/7 technical support access"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-[15px] text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Data RMS Provides */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Comprehensive Insights
            </p>
            <h2 className="mb-5">What Data Does SolarLive RMS Provide?</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              200+ data points tracked continuously for complete operational visibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Generation Metrics",
                icon: Zap,
                color: "primary",
                metrics: [
                  "Real-time power output (kW)",
                  "Daily energy generation (kWh)",
                  "Monthly/yearly cumulative energy",
                  "Specific yield (kWh/kWp)",
                  "Performance Ratio (PR%)",
                  "Capacity Utilization Factor (CUF)"
                ]
              },
              {
                category: "Equipment Health",
                icon: Activity,
                color: "primary",
                metrics: [
                  "Inverter status (on/off/fault)",
                  "Inverter efficiency (%)",
                  "DC voltage & current per string",
                  "AC voltage, current, frequency",
                  "Inverter temperature",
                  "Fault codes & error messages"
                ]
              },
              {
                category: "Weather Data",
                icon: Sun,
                color: "primary",
                metrics: [
                  "Solar irradiance (GHI/POA)",
                  "Module temperature",
                  "Ambient temperature",
                  "Wind speed & direction",
                  "Humidity levels",
                  "Rain detection"
                ]
              },
              {
                category: "Financial Metrics",
                icon: TrendingUp,
                color: "primary",
                metrics: [
                  "Revenue earned (₹/day)",
                  "PPA tariff tracking",
                  "Expected vs actual generation",
                  "Generation loss quantification",
                  "ROI & payback period",
                  "CO₂ emissions offset"
                ]
              },
              {
                category: "Grid & Metering",
                icon: Database,
                color: "primary",
                metrics: [
                  "Import/export energy (kWh)",
                  "Grid voltage & frequency",
                  "Power factor",
                  "Grid synchronization status",
                  "Net metering data",
                  "Reactive power (kVAR)"
                ]
              },
              {
                category: "Alarms & Events",
                icon: Bell,
                color: "primary",
                metrics: [
                  "Inverter trip events",
                  "Communication loss alerts",
                  "Underperformance warnings",
                  "Grid disturbance logs",
                  "Maintenance reminders",
                  "Security breach alerts"
                ]
              }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-muted/30 p-6 rounded-xl border border-border hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-[18px] font-bold text-foreground">{category.category}</h3>
                </div>
                <div className="space-y-2.5">
                  {category.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-[14px] text-foreground leading-relaxed">{metric}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SolarLive RMS */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Industry Leadership
            </p>
            <h2 className="mb-5">Why SolarLive RMS is the Best Choice</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              10+ years of proven expertise monitoring 2+ GW of solar assets across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "10+ Years of Experience",
                description: "Established in 2015, we've been monitoring solar plants since the JNNSM era. Our platform has evolved through thousands of installations, learning from real-world challenges to deliver unmatched reliability.",
                icon: Award,
                stats: "2000+ MW monitored"
              },
              {
                title: "100+ Inverter Brand Support",
                description: "Unlike competitors limited to a few brands, SolarLive RMS works with every major inverter manufacturer—from ABB to Zeversolar. Modbus, IEC 61850, DNP3, OPC UA protocols all supported natively.",
                icon: Settings,
                stats: "100+ brands compatible"
              },
              {
                title: "99.9% Uptime Guarantee",
                description: "Enterprise-grade cloud infrastructure hosted on AWS with redundant servers, automatic failover, and 24/7 monitoring. Your data is always accessible when you need it—backed by SLA guarantees.",
                icon: Shield,
                stats: "99.9% uptime SLA"
              },
              {
                title: "Military-Grade Security",
                description: "AES-256 encryption for data transmission, ISO 27001 certified data centers, role-based access control, and audit trails. Your operational data is protected with bank-level security.",
                icon: Lock,
                stats: "ISO 27001 certified"
              },
              {
                title: "Fastest Data Refresh",
                description: "1-second data sampling and 5-second dashboard refresh—the fastest in the industry. See real-time changes as they happen, not minutes later like competitors' 1-minute refresh cycles.",
                icon: Zap,
                stats: "1-second sampling"
              },
              {
                title: "Advanced Analytics Engine",
                description: "Machine learning algorithms detect anomalies, predict failures, and optimize performance. Our analytics go beyond simple charts—providing actionable insights that increase plant yield by 8-15%.",
                icon: BarChart3,
                stats: "AI-powered insights"
              },
              {
                title: "Local Support Team",
                description: "Unlike international vendors with email-only support, we have 24/7 phone support in English and Hindi, plus field engineers across India who can reach your site within 48 hours.",
                icon: Users,
                stats: "24/7 Indian support"
              },
              {
                title: "Competitive Pricing",
                description: "40-60% lower cost than international brands with zero compromise on features. Transparent pricing with no hidden fees—lifetime monitoring available with one-time payment for smaller plants.",
                icon: TrendingUp,
                stats: "40-60% cost savings"
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
                    <p className="text-[15px] text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-[13px] font-bold text-primary">{reason.stats}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Platform Capabilities
            </p>
            <h2 className="mb-5">Comprehensive Feature Set</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Everything you need to monitor, analyze, and optimize your solar power plant
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: "Real-Time Dashboards", desc: "Live data with 5-second refresh" },
              { feature: "Mobile Apps (iOS/Android)", desc: "Monitor on the go" },
              { feature: "Multi-Site Management", desc: "Centralized portfolio view" },
              { feature: "Custom Alert Rules", desc: "Define your own thresholds" },
              { feature: "SMS/Email/App Alerts", desc: "Instant notifications" },
              { feature: "Historical Data Analysis", desc: "25-year data retention" },
              { feature: "Performance Reports", desc: "Automated daily/monthly" },
              { feature: "Weather Normalization", desc: "Compare weather-adjusted PR" },
              { feature: "String-Level Monitoring", desc: "Detect shading & failures" },
              { feature: "Revenue Tracking", desc: "Financial performance metrics" },
              { feature: "API Integration", desc: "Connect to third-party systems" },
              { feature: "User Role Management", desc: "Multi-level access control" },
              { feature: "Maintenance Scheduling", desc: "Plan & track O&M activities" },
              { feature: "Fault Diagnosis Tools", desc: "Root cause analysis" },
              { feature: "Compliance Reports", desc: "MNRE/CERC formats" },
              { feature: "Data Export (CSV/Excel)", desc: "Download for analysis" },
              { feature: "Customizable Widgets", desc: "Build your ideal dashboard" },
              { feature: "Inverter Comparison", desc: "Benchmark performance" },
              { feature: "Energy Loss Analysis", desc: "Quantify losses by type" },
              { feature: "Ticket Management", desc: "Track issues to closure" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.02 }}
                className="bg-muted/30 p-5 rounded-lg border border-border hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[15px] font-semibold text-foreground mb-1">{item.feature}</p>
                    <p className="text-[13px] text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Technical Details
            </p>
            <h2 className="mb-5">RMS Technical Specifications</h2>
          </div>

          <div className="bg-white rounded-2xl border border-border p-10">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { spec: "Data Sampling Rate", value: "1-second intervals (configurable)" },
                { spec: "Dashboard Refresh", value: "5 seconds (real-time)" },
                { spec: "Communication Protocols", value: "Modbus RTU/TCP, IEC 61850, DNP3, OPC UA" },
                { spec: "Inverter Compatibility", value: "100+ brands (ABB, Huawei, SMA, Delta, etc.)" },
                { spec: "Connectivity Options", value: "4G LTE, WiFi, Ethernet, Fiber" },
                { spec: "Data Encryption", value: "AES-256 bit encryption" },
                { spec: "Data Retention", value: "25 years (full granularity)" },
                { spec: "Cloud Infrastructure", value: "AWS (Mumbai region)" },
                { spec: "System Uptime", value: "99.9% SLA guarantee" },
                { spec: "Scalability", value: "10 kW to 1000 MW plants" },
                { spec: "Alert Channels", value: "SMS, Email, Push notification, WhatsApp" },
                { spec: "User Licenses", value: "Unlimited users per plant" },
                { spec: "Mobile App Platforms", value: "iOS 12+, Android 8+" },
                { spec: "Web Browser Support", value: "Chrome, Safari, Firefox, Edge" },
                { spec: "API Access", value: "RESTful API with documentation" },
                { spec: "Report Formats", value: "PDF, Excel, CSV, JSON" },
                { spec: "Language Support", value: "English, Hindi + 10 regional languages" },
                { spec: "Compliance Standards", value: "MNRE, CERC, IEC 61724" }
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
            <h2 className="text-white mb-6">Ready to Deploy SolarLive RMS?</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 2000+ MW of solar capacity monitored by India's most advanced RMS platform
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request Demo
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
              <p className="text-[13px] text-white/50 mb-4">Trusted by Leading Solar Developers</p>
              <div className="flex items-center justify-center gap-8 text-white/40 text-[12px] font-medium">
                <span>Adani Green</span>
                <span>•</span>
                <span>Azure Power</span>
                <span>•</span>
                <span>ReNew Power</span>
                <span>•</span>
                <span>NTPC</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}