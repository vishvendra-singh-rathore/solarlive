import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Gauge, ArrowRight, Check, Zap, BarChart3, Shield, Eye, Bell, TrendingUp, Clock, Award, Settings, Download, Activity, Monitor, Radio, ChevronRight, Target, Lightbulb, RefreshCw, Power, ZapOff, PlayCircle, StopCircle, RotateCw, AlertTriangle, Lock, Server, Cable, Wifi, Layers, Database, Sun, Wind, Thermometer, Users, MapPin, Grid, Sliders, ToggleLeft, ToggleRight, CircuitBoard, Unplug, CheckCircle, XCircle, Timer, Command, MousePointer, Smartphone, Laptop, Hand, Navigation } from "lucide-react";

export function ControlPanelPage() {
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
              <Gauge className="w-3 h-3" />
              UNIFIED PLANT COMMAND CENTER
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Remote Control Panel
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed mb-10">
              Centralized control panel for managing inverters, trackers, breakers, and all solar plant equipment remotely—start, stop, reset, and configure from anywhere without physical site access.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Command, metric: "Remote", label: "Control Access", sublabel: "From anywhere" },
                { icon: Settings, metric: "All Devices", label: "Equipment Control", sublabel: "Unified interface" },
                { icon: Lock, metric: "Secure", label: "Authentication", sublabel: "Role-based access" },
                { icon: Zap, metric: "<2 sec", label: "Command Latency", sublabel: "Instant response" }
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

      {/* What is a Remote Control Panel */}
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
                  <Gauge className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Understanding Remote Control
                </span>
              </div>
              <h2 className="mb-6">What is a Remote Control Panel?</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                A <strong className="text-foreground">Remote Control Panel</strong> is your plant's command center—a centralized interface that lets you remotely control all plant equipment without physically being on-site. Start inverters, stop trackers, reset breakers, adjust settings—all from your office, home, or mobile device.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Think of it as a <strong className="text-foreground">universal remote for your solar plant</strong>—replacing manual switches, circuit breakers, and physical buttons with software controls accessible from anywhere. No more sending technicians to flip switches or waiting hours for site access. Control everything in seconds.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Start/Stop Control", desc: "Remotely start or stop any inverter, tracker, or equipment" },
                  { label: "Reset & Reboot", desc: "Clear faults and reboot equipment without site visits" },
                  { label: "Parameter Configuration", desc: "Adjust settings remotely—setpoints, limits, modes" },
                  { label: "Emergency Shutdown", desc: "Instant plant-wide shutdown from anywhere" }
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
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1200"
                  alt="Remote Control Panel Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Remote Control is Essential */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Game-Changing Capability
            </p>
            <h2 className="mb-5">Why Remote Control Changes Everything</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              From hours of delay to seconds of response
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Instant Response Time",
                description: "Inverter trip? Reset it in 10 seconds from your phone. No waiting 2-4 hours for technicians to reach remote sites. No lost generation during delays. Control panels save thousands of kWh daily by enabling instant response to faults and issues.",
                impact: "10-second response vs 2-4 hours",
                color: "red"
              },
              {
                icon: Target,
                title: "Eliminate Site Visits",
                description: "80% of 'site visits' are for simple tasks—resetting inverters, rebooting equipment, or clearing alarms. Remote control eliminates these trips—saving ₹50,000-2 lakh monthly in travel costs and enabling O&M teams to manage 5x more plants.",
                impact: "Save ₹50K-2L monthly",
                color: "green"
              },
              {
                icon: Shield,
                title: "Emergency Safety Shutdowns",
                description: "Fire, flood, equipment failure, or grid emergency? Shut down the entire plant instantly from anywhere—protecting equipment and personnel. Manual shutdown requires site access—risking equipment damage and safety during emergencies.",
                impact: "Instant emergency shutdown",
                color: "red"
              },
              {
                icon: TrendingUp,
                title: "Maximize Energy Generation",
                description: "Every hour of inverter downtime costs ₹10,000-1 lakh. Remote control minimizes downtime by enabling instant restarts, quick troubleshooting, and proactive maintenance scheduling. Data shows 5-10% higher generation for remotely controlled plants.",
                impact: "5-10% higher generation",
                color: "blue"
              },
              {
                icon: Users,
                title: "Perfect for Portfolio Management",
                description: "Managing 10+ plants? Control all from one dashboard—no jumping between sites. See which plants need attention, execute bulk commands (e.g., curtail all plants 20%), and coordinate multi-site operations seamlessly.",
                impact: "Manage 10x more plants",
                color: "purple"
              },
              {
                icon: Lightbulb,
                title: "Enable Automated Operations",
                description: "Pre-program actions—auto-restart after grid faults, scheduled tracker stowing for high winds, curtailment schedules, or maintenance modes. Transform manual operations into automated workflows—reducing human error and improving consistency.",
                impact: "Automated 24/7 operations",
                color: "orange"
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

      {/* What Can You Control - Visual Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Complete Equipment Control
            </p>
            <h2 className="mb-5">What Equipment Can You Control?</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Unified control for all solar plant equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                equipment: "Inverters",
                icon: Zap,
                controls: [
                  "Start/Stop inverter",
                  "Reset faults & alarms",
                  "Reboot inverter system",
                  "Enable/disable MPPT strings",
                  "Adjust power factor setpoint",
                  "Set active power limit (%)",
                  "Configure reactive power",
                  "Change operating modes",
                  "Update firmware remotely",
                  "View detailed parameters"
                ]
              },
              {
                equipment: "Solar Trackers",
                icon: Sun,
                controls: [
                  "Start/Stop tracking",
                  "Stow trackers (horizontal)",
                  "Move to specific angle",
                  "Emergency wind stow",
                  "Reset tracker faults",
                  "Calibrate tracker position",
                  "Adjust tracking algorithm",
                  "Enable/disable backtracking",
                  "Set tracking limits",
                  "Manual positioning mode"
                ]
              },
              {
                equipment: "Circuit Breakers",
                icon: Power,
                controls: [
                  "Open/Close breakers",
                  "Trip breaker remotely",
                  "Reset tripped breakers",
                  "View breaker status",
                  "Monitor current flow",
                  "Check breaker health",
                  "Lock-out breaker (safety)",
                  "Interlocking control",
                  "Load shedding control",
                  "Protection coordination"
                ]
              },
              {
                equipment: "Weather Stations",
                icon: Wind,
                controls: [
                  "Calibrate sensors",
                  "Reset sensor faults",
                  "Adjust polling interval",
                  "Configure alert thresholds",
                  "Enable/disable sensors",
                  "Validate sensor readings",
                  "Heater control (de-icing)",
                  "Fan control (ventilation)",
                  "Update sensor firmware",
                  "Download sensor logs"
                ]
              },
              {
                equipment: "Transformers",
                icon: CircuitBoard,
                controls: [
                  "View transformer status",
                  "Monitor oil temperature",
                  "Check winding temperature",
                  "Cooling fan control",
                  "Oil pump control",
                  "Tap changer control",
                  "Protection relay settings",
                  "Alarm acknowledgment",
                  "Scheduled maintenance mode",
                  "Load monitoring"
                ]
              },
              {
                equipment: "SCADA Systems",
                icon: Monitor,
                controls: [
                  "Start/Stop SCADA services",
                  "Configure data logging",
                  "Adjust polling rates",
                  "Reset communication",
                  "Update SCADA parameters",
                  "Enable/disable protocols",
                  "Configure alarms",
                  "Set report schedules",
                  "User access management",
                  "System diagnostics"
                ]
              },
              {
                equipment: "Data Loggers",
                icon: Database,
                controls: [
                  "Reboot data logger",
                  "Clear local storage",
                  "Sync data to cloud",
                  "Configure polling",
                  "Add/remove devices",
                  "Adjust sampling rate",
                  "Network configuration",
                  "Update logger firmware",
                  "Export stored data",
                  "Diagnostic mode"
                ]
              },
              {
                equipment: "Cooling Systems",
                icon: Wind,
                controls: [
                  "Start/Stop fans",
                  "Adjust fan speed",
                  "Temperature setpoints",
                  "Cooling schedule",
                  "Emergency cooling mode",
                  "Filter status check",
                  "Fan rotation direction",
                  "Humidity control",
                  "Alarm threshold settings",
                  "Energy saving modes"
                ]
              },
              {
                equipment: "Security Systems",
                icon: Lock,
                controls: [
                  "Arm/Disarm system",
                  "View camera feeds",
                  "Control PTZ cameras",
                  "Gate/door control",
                  "Motion sensor zones",
                  "Perimeter alarms",
                  "Access control override",
                  "Recording schedule",
                  "Alarm notification settings",
                  "Visitor log management"
                ]
              }
            ].map((item, idx) => (
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
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-[18px] font-bold text-foreground">{item.equipment}</h3>
                </div>
                <div className="space-y-2.5">
                  {item.controls.map((control, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-[14px] text-foreground leading-relaxed">{control}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Remote Control Works */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Control Architecture
            </p>
            <h2 className="mb-5">How Remote Control Works</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              From your click to equipment action in &lt;2 seconds
            </p>
          </div>

          {/* Visual Infographic Flow */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[31px] top-16 bottom-16 w-0.5 bg-primary/20 hidden md:block" />
              
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    icon: MousePointer,
                    title: "User Issues Command",
                    description: "You click 'Start Inverter 5' on dashboard (web/mobile). Command is authenticated with your user permissions, logged for audit trail, and encrypted with TLS 1.3 before transmission to cloud servers.",
                    details: ["Web/mobile interface", "User authentication", "Command validation", "Encrypted transmission"]
                  },
                  {
                    step: "2",
                    icon: Server,
                    title: "Cloud Processing",
                    description: "SolarLive cloud receives command, validates against plant configuration and safety rules (e.g., don't start inverter if DC voltage is zero), creates execution plan, and routes command to plant's control gateway.",
                    details: ["Safety checks", "Permission validation", "Command routing", "Execution logging"]
                  },
                  {
                    step: "3",
                    icon: Radio,
                    title: "Gateway Transmission",
                    description: "On-site control gateway receives command via 4G/Ethernet, translates to equipment-specific protocol (Modbus, CANbus, etc.), and sends directly to target equipment—inverter, tracker, breaker, etc.",
                    details: ["Protocol translation", "Direct equipment communication", "Real-time transmission", "Retry on failure"]
                  },
                  {
                    step: "4",
                    icon: Zap,
                    title: "Equipment Executes",
                    description: "Equipment (e.g., inverter) receives command, validates safety conditions locally, executes action (closes contactors, starts generation), and responds with execution status—success, failure, or error code.",
                    details: ["Local safety validation", "Physical action execution", "1-2 second response time", "Status confirmation"]
                  },
                  {
                    step: "5",
                    icon: CheckCircle,
                    title: "Status Feedback",
                    description: "Execution status flows back through gateway → cloud → dashboard. You see confirmation: 'Inverter 5 started successfully at 14:23:45'. Complete round-trip typically takes 2-3 seconds. Audit log updated.",
                    details: ["Real-time status update", "Success/failure notification", "Timestamp logging", "Dashboard refresh"]
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

      {/* Why SolarLive Control Panel is Better */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Superior Control Architecture
            </p>
            <h2 className="mb-5">Why SolarLive Control Panel Leads the Industry</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Proven reliability with military-grade security
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Multi-Layer Safety Architecture",
                description: "Triple safety validation—cloud-side logic checks, gateway-level interlocks, and equipment-level protection. Impossible to execute dangerous commands (e.g., open breaker under load). Competitors have single-layer validation—risking equipment damage.",
                icon: Shield,
                stats: "3-layer safety validation",
                comparison: "vs single-layer systems"
              },
              {
                title: "Granular Permission Control",
                description: "Role-based access—operators can restart, engineers can configure, admins have full control. Define per-user, per-plant, per-equipment permissions. Audit every action. Competitors have basic admin/user roles—no granularity or audit trails.",
                icon: Lock,
                stats: "Role-based access control",
                comparison: "vs basic permissions"
              },
              {
                title: "Works During Communication Loss",
                description: "Pre-programmed automation rules execute locally even if cloud connection fails—auto-restart after grid faults, emergency stowing, scheduled operations. Competitors require constant cloud connection—failing during network outages.",
                icon: Wifi,
                stats: "Offline automation capable",
                comparison: "vs cloud-dependent systems"
              },
              {
                title: "Instant Command Execution",
                description: "Direct gateway-to-equipment communication bypasses cloud latency for critical commands. Sub-2 second response times. Competitors route everything through cloud—causing 5-10 second delays that waste generation during faults.",
                icon: Zap,
                stats: "<2 second response time",
                comparison: "vs 5-10 second delays"
              },
              {
                title: "Universal Equipment Support",
                description: "Controls 100+ inverter brands, 20+ tracker brands, and generic Modbus/CANbus devices. Single interface for mixed equipment. Competitors support only select brands—forcing you to use multiple control systems.",
                icon: Layers,
                stats: "100+ device types supported",
                comparison: "vs limited compatibility"
              },
              {
                title: "Comprehensive Audit Logging",
                description: "Every command logged with timestamp, user, action, and result—immutable audit trail for compliance. Export logs for regulatory reporting. Competitors lack detailed logging—making it impossible to prove who did what.",
                icon: Database,
                stats: "Full audit trail logging",
                comparison: "vs minimal/no logging"
              },
              {
                title: "Bulk & Scheduled Operations",
                description: "Execute commands across multiple plants/equipment simultaneously—curtail all plants 20%, stow all trackers, restart all inverters. Schedule actions for off-peak hours. Competitors require individual manual commands—time-consuming and error-prone.",
                icon: Command,
                stats: "Bulk & scheduled commands",
                comparison: "vs manual one-by-one"
              },
              {
                title: "Mobile-First Interface",
                description: "Full control capability on mobile app—not a watered-down version. Control from anywhere with same features as desktop. Competitors offer limited mobile control—forcing you to use laptops for critical operations.",
                icon: Smartphone,
                stats: "100% mobile feature parity",
                comparison: "vs limited mobile control"
              },
              {
                title: "Emergency Lockout & Override",
                description: "Admin can instantly lock out all controls plant-wide during emergencies or maintenance—preventing accidental operation. Manual override mode for emergencies. Competitors lack emergency lockout—risking safety during maintenance.",
                icon: AlertTriangle,
                stats: "Emergency lockout capability",
                comparison: "vs no lockout mechanism"
              },
              {
                title: "Integration with SCADA/PPC",
                description: "Seamlessly integrates with existing SCADA systems and PPC—don't replace, enhance. Export commands via standard protocols (DNP3, IEC 61850). Competitors force you to replace existing systems—costly and disruptive.",
                icon: Grid,
                stats: "SCADA/PPC integration",
                comparison: "vs standalone systems"
              },
              {
                title: "Automatic Rollback on Failure",
                description: "If command fails or causes issues, system automatically rolls back to previous safe state. E.g., inverter won't start? Automatically opens DC disconnect. Competitors leave equipment in failed states—requiring manual intervention.",
                icon: RotateCw,
                stats: "Automatic failure rollback",
                comparison: "vs manual recovery"
              },
              {
                title: "24/7 Expert Support",
                description: "Dedicated control system engineers available 24/7 for assistance—guide you through complex operations, troubleshoot failures, and provide remote login support. Competitors offer email-only support during business hours.",
                icon: Users,
                stats: "24/7 expert phone support",
                comparison: "vs email-only support"
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

      {/* Use Cases & Benefits */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Real-World Applications
            </p>
            <h2 className="mb-5">Practical Use Cases & Benefits</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              From daily operations to emergency response
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { benefit: "Instant Fault Recovery", desc: "Reset tripped inverters in 10 seconds" },
              { benefit: "Remote Commissioning", desc: "Commission plants without site visits" },
              { benefit: "Emergency Shutdowns", desc: "Stop plant from anywhere instantly" },
              { benefit: "Tracker Wind Protection", desc: "Auto-stow trackers during storms" },
              { benefit: "Grid Curtailment Response", desc: "Reduce output per SLDC commands" },
              { benefit: "Scheduled Maintenance", desc: "Auto-shutdown for scheduled O&M" },
              { benefit: "Multi-Site Management", desc: "Control 100+ plants from one screen" },
              { benefit: "Night-Time Operations", desc: "Pre-configure for next day startup" },
              { benefit: "Testing & Validation", desc: "Remote equipment testing" },
              { benefit: "Firmware Updates", desc: "Update inverters remotely" },
              { benefit: "String Isolation", desc: "Disable faulty strings remotely" },
              { benefit: "Power Quality Control", desc: "Adjust power factor in real-time" },
              { benefit: "Load Balancing", desc: "Distribute load across inverters" },
              { benefit: "Seasonal Adjustments", desc: "Change tracker algorithms remotely" },
              { benefit: "Weather Response", desc: "Auto-actions based on weather" },
              { benefit: "Training & Demos", desc: "Train operators remotely" },
              { benefit: "Audit Compliance", desc: "Complete action audit trails" },
              { benefit: "Cost Savings", desc: "Eliminate 80% of site visits" },
              { benefit: "Generation Maximization", desc: "5-10% higher uptime" },
              { benefit: "Safety Improvement", desc: "Reduce on-site personnel risk" }
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
            <h2 className="mb-5">Control Panel Technical Specifications</h2>
          </div>

          <div className="bg-muted/30 rounded-2xl border border-border p-10">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { spec: "Control Protocols", value: "Modbus RTU/TCP, CANbus, DNP3, IEC 61850" },
                { spec: "Equipment Support", value: "100+ inverters, 20+ trackers, generic devices" },
                { spec: "Response Time", value: "<2 seconds (gateway to equipment)" },
                { spec: "Command Execution", value: "1-2 second equipment response typical" },
                { spec: "Safety Validation", value: "3-layer (cloud, gateway, equipment)" },
                { spec: "User Management", value: "Role-based access control (RBAC)" },
                { spec: "Audit Logging", value: "Immutable logs with timestamp & user" },
                { spec: "Communication", value: "4G/5G/Ethernet/Wi-Fi (redundant)" },
                { spec: "Offline Operation", value: "Yes (pre-programmed automation)" },
                { spec: "Encryption", value: "TLS 1.3 end-to-end encryption" },
                { spec: "Multi-Plant Support", value: "Unlimited plants in portfolio" },
                { spec: "Bulk Operations", value: "Yes (multi-device commands)" },
                { spec: "Scheduled Commands", value: "Yes (cron-like scheduling)" },
                { spec: "Mobile Access", value: "iOS/Android apps (100% feature parity)" },
                { spec: "SCADA Integration", value: "Yes (DNP3, IEC 61850 export)" },
                { spec: "Emergency Lockout", value: "Yes (plant-wide control disable)" },
                { spec: "Failure Rollback", value: "Automatic rollback on command failure" },
                { spec: "Support", value: "24/7 phone + remote login support" }
              ].map((spec, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-6 border-b border-border last:border-0">
                  <Gauge className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
            <h2 className="text-white mb-6">Take Control of Your Solar Plant</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Control everything from anywhere—eliminate site visits, maximize uptime, ensure safety
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request Live Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/resources/data-sheets" className="inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Brochure
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-[13px] text-white/50 mb-4">Control 100+ Equipment Types</p>
              <div className="flex items-center justify-center gap-8 text-white/40 text-[12px] font-medium">
                <span>Inverters</span>
                <span>•</span>
                <span>Trackers</span>
                <span>•</span>
                <span>Breakers</span>
                <span>•</span>
                <span>Transformers</span>
                <span>•</span>
                <span>SCADA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}