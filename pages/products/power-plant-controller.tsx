import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Cpu, ArrowRight, Check, Zap, BarChart3, Shield, Eye, Bell, TrendingUp, Clock, Award, Settings, Download, Activity, Gauge, Network, Radio, ChevronRight, Target, Lightbulb, RefreshCw, LineChart, AlertTriangle, Lock, Server, Cable, Power, Waves, GitBranch, Sliders, Timer, ZapOff, AlertCircle, CheckCircle, TrendingDown, Filter, Maximize2, MinusCircle, PlusCircle, Info, FileText, Layers, Database, Cloud } from "lucide-react";

export function PowerPlantControllerPage() {
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
              Grid Intelligence & Control
            </p>
            <h1 className="mb-6">Power Plant Controller (PPC)</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              CERC/IEGC-compliant power plant controller for utility-scale solar plants—managing reactive power, voltage regulation, grid codes, and automated curtailment for stable grid integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is a PPC */}
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
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Understanding PPC
                </span>
              </div>
              <h2 className="mb-6">What is a Power Plant Controller?</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                A <strong className="text-foreground">Power Plant Controller (PPC)</strong> is the intelligent command center that manages your solar plant's interaction with the electrical grid. It's not just monitoring—it's actively controlling your plant in real-time to meet grid operator requirements.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Think of it as the <strong className="text-foreground">plant's brain for grid compliance</strong>—continuously adjusting reactive power, voltage, frequency, and active power to maintain grid stability. Without PPC, utility-scale plants cannot legally inject power into the grid or comply with CERC/IEGC regulations.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Active Power Control", desc: "Ramp rate, curtailment, frequency-watt control" },
                  { label: "Reactive Power Management", desc: "Power factor, voltage regulation, VAR control" },
                  { label: "Grid Code Compliance", desc: "CERC, IEGC, LVRT, HVRT requirements" },
                  { label: "SCADA Integration", desc: "DNP3, IEC 61850, IEC 60870 protocols" }
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
                  src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8c7?w=1200"
                  alt="Power Plant Controller System"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why PPC is Essential */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Mandatory for Grid Connection
            </p>
            <h2 className="mb-5">Why PPC is Essential for Utility-Scale Plants</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Grid operators demand real-time control—PPC is legally required, not optional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Regulatory Compliance",
                description: "CERC regulations mandate PPC for all plants >5 MW. Without PPC, you cannot obtain grid connectivity approval or inject power. DISCOMs reject commissioning without certified PPC documentation. It's not optional—it's legally required.",
                impact: "CERC/IEGC mandatory compliance",
                color: "red"
              },
              {
                icon: Waves,
                title: "Grid Stability & Protection",
                description: "Solar plants inject variable power that can destabilize the grid. PPC smooths ramp rates, manages voltage fluctuations, provides reactive power support, and prevents cascading failures—protecting both your plant and the grid from blackouts.",
                impact: "Prevents grid disturbances",
                color: "blue"
              },
              {
                icon: Target,
                title: "Active Power Curtailment",
                description: "Grid operators issue curtailment commands during over-generation or emergencies. PPC automatically reduces plant output within seconds—avoiding penalties, grid disconnections, or equipment damage. Manual control is too slow and risky.",
                impact: "Instant response to commands",
                color: "orange"
              },
              {
                icon: Gauge,
                title: "Reactive Power Management",
                description: "Grid operators demand specific power factor (0.90-0.95) and voltage levels. PPC adjusts inverter reactive power in real-time to maintain these setpoints—avoiding penalties of ₹5-10 lakhs/month for non-compliance.",
                impact: "Avoid ₹5-10L monthly penalties",
                color: "green"
              },
              {
                icon: Activity,
                title: "Frequency-Watt Response",
                description: "When grid frequency drops below 49.5 Hz or rises above 50.5 Hz, PPC automatically adjusts plant output to stabilize frequency—as per IEGC requirements. Failure to respond can disconnect your plant and incur penalties.",
                impact: "Automatic frequency response",
                color: "purple"
              },
              {
                icon: Server,
                title: "SCADA Integration",
                description: "Grid operators require real-time visibility and control via SCADA systems using DNP3, IEC 61850, or IEC 60870 protocols. PPC provides this communication layer—enabling remote monitoring and dispatch commands from load dispatch centers.",
                impact: "Mandated SCADA connectivity",
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

      {/* How PPC Works - Visual Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Control Architecture
            </p>
            <h2 className="mb-5">How SolarLive PPC Works</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              From grid commands to inverter control in milliseconds
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
                    icon: Cloud,
                    title: "Grid Operator Commands",
                    description: "SLDC (State Load Dispatch Center) sends real-time setpoints via SCADA—active power curtailment, reactive power demand, voltage setpoints, or frequency response commands. PPC receives these via DNP3/IEC 61850 protocols.",
                    details: ["DNP3/IEC 61850/IEC 60870 protocols", "Encrypted SCADA communication", "Real-time command reception", "Acknowledgment handshake"]
                  },
                  {
                    step: "2",
                    icon: Cpu,
                    title: "Command Processing & Validation",
                    description: "PPC validates commands against plant capabilities, checks safety limits, calculates optimal distribution across inverters, and determines control strategy. Industrial processor ensures <100ms response time—critical for grid stability.",
                    details: ["Command validation & safety checks", "Optimal inverter distribution", "Load balancing algorithm", "<100ms processing time"]
                  },
                  {
                    step: "3",
                    icon: Network,
                    title: "Inverter Communication",
                    description: "PPC communicates with all inverters simultaneously via Modbus TCP/RTU, issuing individual setpoints—active power limits, reactive power targets, and power factor commands. Ensures coordinated plant-wide response.",
                    details: ["Simultaneous multi-inverter control", "Modbus TCP/RTU commands", "Individual inverter setpoints", "Coordinated plant response"]
                  },
                  {
                    step: "4",
                    icon: Settings,
                    title: "Real-Time Control Execution",
                    description: "Inverters execute commands within 1-2 seconds—adjusting output power, injecting/absorbing reactive power, or modifying power factor. PPC continuously monitors execution and makes micro-adjustments to maintain precise setpoints.",
                    details: ["1-2 second inverter response", "Continuous monitoring", "Micro-adjustment loops", "Setpoint precision ±1%"]
                  },
                  {
                    step: "5",
                    icon: Activity,
                    title: "Feedback & Telemetry",
                    description: "PPC sends telemetry back to SLDC every 2-4 seconds—actual active power, reactive power, voltage, frequency, power factor, and alarms. Proves compliance and enables grid operators to make informed decisions.",
                    details: ["2-4 second telemetry updates", "Real-time status reporting", "Compliance documentation", "Alarm forwarding to SLDC"]
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

      {/* PPC Control Functions */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Advanced Control Functions
            </p>
            <h2 className="mb-5">What Does the PPC Control?</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              10+ grid-compliant control functions in one intelligent system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                function: "Active Power Curtailment",
                description: "Reduces plant output from 100% to any setpoint (e.g., 60%) within 10 seconds as per grid operator commands. Essential during over-generation, grid congestion, or emergency curtailment scenarios. Smooth ramp-down prevents grid instability.",
                icon: TrendingDown,
                specifications: ["0-100% setpoint range", "10-second ramp down", "Smooth power reduction", "Emergency curtailment <5 sec"],
                compliance: "CERC Grid Code 5.5(q)"
              },
              {
                function: "Ramp Rate Control",
                description: "Limits power change rate to prevent sudden grid disturbances. Typical limits: 10% per minute during cloud transients or startup. PPC smooths solar variability by coordinating inverter output—making solar behave like conventional power.",
                icon: Waves,
                specifications: ["Configurable ramp limits", "1-20% per minute typical", "Cloud transient smoothing", "Startup/shutdown control"],
                compliance: "IEGC Section 5.2(f)"
              },
              {
                function: "Power Factor Control",
                description: "Maintains specified power factor (PF) setpoint—typically 0.90-0.95 lagging/leading. PPC adjusts each inverter's reactive power injection/absorption to achieve plant-wide PF. Avoids penalties for poor power factor compliance.",
                icon: Sliders,
                specifications: ["0.85-1.0 PF range", "Lagging/leading control", "±0.01 PF accuracy", "Automatic adjustment"],
                compliance: "CERC Grid Code 5.4(e)"
              },
              {
                function: "Voltage Regulation (Volt-VAR)",
                description: "Automatically adjusts reactive power based on grid voltage—injecting VARs if voltage is low, absorbing VARs if voltage is high. Maintains grid voltage within 0.95-1.05 pu limits, providing ancillary voltage support service.",
                icon: Gauge,
                specifications: ["Volt-VAR droop curves", "0.95-1.05 pu regulation", "Automatic VAR injection", "Deadband configuration"],
                compliance: "IEGC Voltage Standards"
              },
              {
                function: "Frequency-Watt Response",
                description: "Reduces active power when frequency exceeds 50.2 Hz (over-frequency), prevents generation drop when frequency falls below 49.0 Hz (under-frequency). Provides primary frequency response—supporting grid stability during disturbances.",
                icon: Activity,
                specifications: ["49.0-50.5 Hz operating range", "Freq-Watt droop control", "Under/over-freq response", "Automatic power adjustment"],
                compliance: "IEGC Section 5.2(g)"
              },
              {
                function: "Reactive Power Control",
                description: "Provides +/- reactive power (VARs) as per grid demand—independent of active power generation. Enables solar plants to provide voltage support even at night using inverter VAR capability. Monetizable ancillary service.",
                icon: Zap,
                specifications: ["±40-60% VAR capability", "Q(P) curve control", "Independent VAR control", "Night-time VAR support"],
                compliance: "CERC Grid Code 5.4(f)"
              },
              {
                function: "Low Voltage Ride Through (LVRT)",
                description: "Prevents plant disconnection during grid voltage dips (0.15-0.9 pu). PPC commands inverters to stay online and inject reactive current—supporting grid voltage recovery. Mandatory for grid stability during faults.",
                icon: AlertTriangle,
                specifications: ["LVRT per IEC 61850", "0.15 pu minimum voltage", "Reactive current injection", "Fault ride-through"],
                compliance: "CERC Grid Code Appendix-1"
              },
              {
                function: "High Voltage Ride Through (HVRT)",
                description: "Prevents disconnection during voltage swells (1.1-1.3 pu). PPC absorbs reactive power to reduce voltage. Critical for grid stability during load rejection or switching events. Avoids nuisance tripping.",
                icon: TrendingUp,
                specifications: ["HVRT per IEC 61850", "1.3 pu maximum voltage", "Reactive power absorption", "Overvoltage tolerance"],
                compliance: "CERC Grid Code Appendix-1"
              },
              {
                function: "Load Following / AGC",
                description: "Responds to Automatic Generation Control (AGC) signals from SLDC—increasing or decreasing output to match load demand in real-time. Enables solar participation in grid balancing markets. Advanced PPC feature.",
                icon: GitBranch,
                specifications: ["AGC signal response", "±5% MW modulation", "4-second response time", "Economic dispatch mode"],
                compliance: "IEGC Section 6.4"
              },
              {
                function: "Power Smoothing",
                description: "Uses energy storage (if available) to smooth rapid power fluctuations from clouds. PPC coordinates solar + storage to deliver stable output—improving grid compatibility. Optional feature for plants with BESS integration.",
                icon: LineChart,
                specifications: ["Cloud transient smoothing", "Battery coordination", "1-minute smoothing window", "Configurable smoothing rate"],
                compliance: "Optional Enhancement"
              }
            ].map((item, idx) => (
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
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold text-foreground mb-2">{item.function}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {item.specifications.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-[13px] text-foreground">{spec}</p>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-[12px] font-semibold text-primary">Compliance: {item.compliance}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SolarLive PPC is Better */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              CERC-Certified Excellence
            </p>
            <h2 className="mb-5">Why SolarLive PPC Leads the Industry</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              500+ MW deployed across India with zero compliance failures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "CERC/IEGC Certified",
                description: "Our PPC is third-party certified for CERC Grid Code and IEGC compliance—tested at CPRI/NABL labs. Certified documentation accepted by all DISCOMs without delays. Competitors claim compliance but lack certification—risking commissioning rejections.",
                icon: Award,
                stats: "CPRI/NABL certified",
                comparison: "vs uncertified systems"
              },
              {
                title: "Multi-Protocol SCADA Support",
                description: "Supports DNP3, IEC 61850, IEC 60870-5-104, and Modbus TCP—compatible with all Indian SLDC systems. Single PPC works across multiple states. Competitors support only 1-2 protocols—requiring custom development and delays.",
                icon: Network,
                stats: "4+ SCADA protocols",
                comparison: "vs single-protocol systems"
              },
              {
                title: "Universal Inverter Compatibility",
                description: "Works with 100+ inverter brands—SMA, Huawei, Sungrow, Delta, ABB, etc. No vendor lock-in. Unified control regardless of inverter mix. Competitors support only select brands—limiting your inverter choices and causing integration headaches.",
                icon: Layers,
                stats: "100+ inverter brands",
                comparison: "vs limited brand support"
              },
              {
                title: "Sub-100ms Response Time",
                description: "Industrial real-time OS ensures <100ms command processing—critical for LVRT, HVRT, and frequency response. Meets strictest grid code timing requirements. Competitors use standard Linux—causing 300-500ms delays and compliance failures.",
                icon: Timer,
                stats: "<100ms response time",
                comparison: "vs 300-500ms delays"
              },
              {
                title: "Built-In Redundancy",
                description: "Hot-standby redundant PPC with automatic failover in <2 seconds. Dual communication paths, redundant power supplies, watchdog timers. 99.99% availability. Competitors offer single-unit systems—one failure = grid disconnection.",
                icon: Shield,
                stats: "Hot-standby redundancy",
                comparison: "vs single-point failure"
              },
              {
                title: "Advanced Telemetry & Analytics",
                description: "Real-time dashboards showing PPC commands, setpoints, actual values, and compliance metrics. Historical logging for audits. Competitors have basic status screens. We provide full transparency and audit trails.",
                icon: BarChart3,
                stats: "Full telemetry & logging",
                comparison: "vs basic status only"
              },
              {
                title: "Remote Configuration & Updates",
                description: "OTA firmware updates, remote parameter changes, remote troubleshooting via secure VPN. No site visits for 90% of issues. Competitors require on-site visits for every change—costing weeks and lakhs in travel expenses.",
                icon: Settings,
                stats: "OTA updates & remote mgmt",
                comparison: "vs on-site-only access"
              },
              {
                title: "Grid Code Library",
                description: "Pre-configured templates for all Indian states' grid codes—plug-and-play compliance. New regulations? We update remotely. Competitors require manual reconfiguration for each state—causing commissioning delays and errors.",
                icon: FileText,
                stats: "Pre-configured grid codes",
                comparison: "vs manual configuration"
              },
              {
                title: "Proven Reliability",
                description: "500+ MW deployed across 50+ plants since 2018—zero compliance failures, zero grid disconnections due to PPC faults. Track record speaks louder than datasheets. Competitors have limited deployments and frequent failures.",
                icon: Target,
                stats: "500+ MW proven deployment",
                comparison: "vs limited track record"
              },
              {
                title: "Expert Support Team",
                description: "Dedicated PPC engineers available 24/7 for grid commissioning, SLDC coordination, grid code interpretation, and troubleshooting. We've commissioned plants with 20+ different SLDCs—we know every quirk and requirement.",
                icon: Lightbulb,
                stats: "24/7 expert support",
                comparison: "vs generic support"
              },
              {
                title: "Transparent Pricing",
                description: "Fixed price per MW—no hidden costs for protocols, features, or support. Includes lifetime software updates and certifications. Competitors charge extra for each SCADA protocol, inverter brand, and feature—final cost 2-3x quoted price.",
                icon: CheckCircle,
                stats: "All-inclusive pricing",
                comparison: "vs hidden costs"
              },
              {
                title: "Fast Commissioning",
                description: "Average commissioning time: 3-5 days including SLDC coordination and testing. We handle all SLDC paperwork and grid code compliance documentation. Competitors take 2-4 weeks—delaying COD and revenue generation.",
                icon: Clock,
                stats: "3-5 day commissioning",
                comparison: "vs 2-4 week delays"
              }
            ].map((reason, idx) => (
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

      {/* Benefits for Plant Owners */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Tangible Value
            </p>
            <h2 className="mb-5">How Plant Owners Benefit</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              From compliance to revenue protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { benefit: "Grid Connectivity Approval", desc: "Get SLDC approval without delays" },
              { benefit: "Zero Compliance Penalties", desc: "Avoid ₹5-10L monthly fines" },
              { benefit: "Faster Commissioning", desc: "COD achieved in weeks, not months" },
              { benefit: "Protection from Disconnection", desc: "Stay connected during grid events" },
              { benefit: "Ancillary Service Revenue", desc: "Monetize VAR support capability" },
              { benefit: "AGC Market Participation", desc: "Access frequency regulation markets" },
              { benefit: "LVRT/HVRT Compliance", desc: "Meet fault ride-through requirements" },
              { benefit: "Automated Curtailment Response", desc: "Instant response to SLDC commands" },
              { benefit: "Grid Code Updates", desc: "Remote updates when regulations change" },
              { benefit: "Audit-Ready Documentation", desc: "Automatic compliance logging" },
              { benefit: "Multi-State Compatibility", desc: "Works across all Indian states" },
              { benefit: "Inverter Brand Flexibility", desc: "No vendor lock-in, use any brand" },
              { benefit: "Remote Troubleshooting", desc: "90% issues resolved without site visit" },
              { benefit: "Expert SLDC Coordination", desc: "We handle all grid paperwork" },
              { benefit: "Peace of Mind", desc: "CERC-certified, proven reliability" },
              { benefit: "Future-Proof", desc: "Lifetime software & certification updates" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.02 }}
                className="bg-white p-5 rounded-lg border border-border hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[15px] font-semibold text-foreground mb-1">{item.benefit}</p>
                    <p className="text-[13px] text-muted-foreground">{item.desc}</p>
                  </div>
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
            <h2 className="mb-5">PPC Technical Specifications</h2>
          </div>

          <div className="bg-muted/30 rounded-2xl border border-border p-10">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { spec: "Compliance Standards", value: "CERC Grid Code, IEGC, IEC 61850, IEEE 1547" },
                { spec: "Certification", value: "CPRI/NABL certified (Type-tested)" },
                { spec: "SCADA Protocols", value: "DNP3, IEC 61850, IEC 60870-5-104, Modbus TCP" },
                { spec: "Plant Capacity", value: "1 MW to 1000 MW (scalable architecture)" },
                { spec: "Inverter Compatibility", value: "100+ brands (universal protocol support)" },
                { spec: "Response Time", value: "<100ms (real-time OS)" },
                { spec: "Control Functions", value: "10+ grid code functions (P, Q, V, f control)" },
                { spec: "Active Power Control", value: "0-100% curtailment, 10-20% ramp rate limits" },
                { spec: "Reactive Power Control", value: "±40-60% VAR capability, 0.85-1.0 PF" },
                { spec: "Voltage Regulation", value: "0.95-1.05 pu, Volt-VAR droop control" },
                { spec: "Frequency Response", value: "49.0-50.5 Hz, Freq-Watt droop control" },
                { spec: "LVRT/HVRT", value: "0.15-1.3 pu per CERC Grid Code Appendix-1" },
                { spec: "Redundancy", value: "Hot-standby dual PPC with <2 sec failover" },
                { spec: "Communication", value: "Dual Ethernet + 4G backup" },
                { spec: "Cybersecurity", value: "TLS 1.3, VPN, firewall, IDS" },
                { spec: "Operating Temperature", value: "-20°C to +70°C (industrial-grade)" },
                { spec: "Commissioning Time", value: "3-5 days (including SLDC coordination)" },
                { spec: "Warranty & Support", value: "5-year warranty + 24/7 support" }
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
            <h2 className="text-white mb-6">Deploy CERC-Certified Power Plant Controller</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              CPRI-certified, 500+ MW proven deployment, 3-5 day commissioning
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request PPC Quote
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
              <p className="text-[13px] text-white/50 mb-4">CERC-Compliant & CPRI-Certified</p>
              <div className="flex items-center justify-center gap-8 text-white/40 text-[12px] font-medium">
                <span>CERC Grid Code</span>
                <span>•</span>
                <span>IEGC</span>
                <span>•</span>
                <span>IEC 61850</span>
                <span>•</span>
                <span>IEEE 1547</span>
                <span>•</span>
                <span>CPRI Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
