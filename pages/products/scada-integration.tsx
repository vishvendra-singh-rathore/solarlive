import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Monitor, ArrowRight, Check, Network, Server, Database, Radio, Globe, Lock, Zap, BarChart3, Shield, Settings, Download, Cable, Activity, Layers, RefreshCw, CheckCircle, Clock, Target, Lightbulb } from "lucide-react";

export function SCADAIntegrationPage() {
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
              Enterprise Connectivity
            </p>
            <h1 className="mb-6">SCADA</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              Enterprise SCADA connectivity for seamless integration with existing control systems—DNP3, IEC 61850, Modbus, OPC UA protocols for real-time data exchange with load dispatch centers and industrial automation systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is SCADA Integration */}
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
                  <Monitor className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Enterprise Integration
                </span>
              </div>
              <h2 className="mb-6">What is SCADA Integration?</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">SCADA (Supervisory Control and Data Acquisition)</strong> integration connects SolarLive to your existing enterprise control systems—load dispatch centers, utility SCADA, industrial automation platforms, and energy management systems.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Using industry-standard protocols like DNP3, IEC 61850, and Modbus, SolarLive becomes a seamless part of your existing infrastructure—no need to replace systems or train operators on new interfaces. Real-time bi-directional communication enables centralized monitoring and control.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "DNP3 Protocol", desc: "IEEE standard for utility SCADA systems" },
                  { label: "IEC 61850", desc: "International standard for substation automation" },
                  { label: "Modbus TCP/RTU", desc: "Universal industrial protocol support" },
                  { label: "OPC UA", desc: "Industry 4.0 connectivity standard" }
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200"
                  alt="SCADA Control Room"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why SCADA Integration is Essential */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Enterprise Requirements
            </p>
            <h2 className="mb-5">Why SCADA Integration Matters</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Regulatory compliance and operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Regulatory Compliance",
                description: "Grid operators mandate SCADA connectivity for plants &gt;5 MW. DNP3/IEC 61850 integration is required for SLDC approval and grid synchronization. Without certified SCADA integration, you cannot inject power.",
                impact: "Mandatory for grid approval"
              },
              {
                icon: Network,
                title: "Centralized Operations",
                description: "Integrate 100+ plants into a single SCADA control center. Unified visibility across your entire portfolio—utilities, EPCs, and IPPs manage all assets from one screen without jumping between systems.",
                impact: "Single pane of glass"
              },
              {
                icon: Target,
                title: "Real-Time Dispatch Commands",
                description: "Load dispatch centers send curtailment, frequency response, and reactive power commands via SCADA. Instant acknowledgment and execution. Manual coordination via phone calls causes delays and non-compliance penalties.",
                impact: "Instant command response"
              },
              {
                icon: Lock,
                title: "Enterprise Security Standards",
                description: "SCADA protocols include authentication, encryption, and intrusion detection—meeting utility cybersecurity requirements. SolarLive acts as secure gateway, protecting plant networks from external threats.",
                impact: "Cybersecurity compliant"
              },
              {
                icon: BarChart3,
                title: "Automated Reporting",
                description: "Automatic data push to utility systems, regulatory portals, and lender dashboards. No manual report generation. Data flows continuously—availability reports, generation logs, and compliance metrics.",
                impact: "Zero manual reporting"
              },
              {
                icon: Lightbulb,
                title: "Future-Proof Integration",
                description: "As new SCADA standards emerge, SolarLive's flexible architecture adapts via software updates. Avoid costly hardware replacements when grid codes change. Protocol updates deployed remotely—no site visits.",
                impact: "Software-defined connectivity"
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

      {/* Supported Protocols */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Universal Compatibility
            </p>
            <h2 className="mb-5">Supported SCADA Protocols</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Industry-standard protocols for seamless integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                protocol: "DNP3 (IEEE 1815)",
                icon: Radio,
                description: "Distributed Network Protocol 3—the gold standard for utility SCADA in North America and India. Used by all SLDCs and load dispatch centers for real-time telemetry and control.",
                capabilities: [
                  "Real-time telemetry (analog/digital)",
                  "Control commands (trip/close)",
                  "Event buffering during outages",
                  "Time-synchronized data logging"
                ],
                useCase: "Primary protocol for SLDC integration"
              },
              {
                protocol: "IEC 61850",
                icon: Globe,
                description: "International standard for substation automation and smart grid applications. Ethernet-based protocol with rich data modeling—becoming mandatory for new grid connections worldwide.",
                capabilities: [
                  "GOOSE messaging (fast events)",
                  "MMS client/server architecture",
                  "Self-describing data models",
                  "Interoperability across vendors"
                ],
                useCase: "Smart grid & substation integration"
              },
              {
                protocol: "Modbus TCP/RTU",
                icon: Cable,
                description: "Universal industrial protocol used globally for PLC, RTU, and SCADA systems. Simple, reliable, and widely adopted—works with virtually any industrial equipment.",
                capabilities: [
                  "RS485 & Ethernet connectivity",
                  "Master-slave architecture",
                  "Register-based data access",
                  "Vendor-agnostic compatibility"
                ],
                useCase: "Industrial automation & RTU systems"
              },
              {
                protocol: "OPC UA",
                icon: Server,
                description: "Industry 4.0 standard for secure industrial communication. Platform-independent, service-oriented architecture with built-in security and information modeling.",
                capabilities: [
                  "Client/Server architecture",
                  "Publish/Subscribe messaging",
                  "Built-in encryption & authentication",
                  "Cross-platform compatibility"
                ],
                useCase: "Enterprise IT/OT integration"
              },
              {
                protocol: "IEC 60870-5-104",
                icon: Network,
                description: "European standard for telecontrol in electrical engineering—widely used in Europe, Middle East, and parts of Asia. TCP/IP-based extension of IEC 60870-5-101.",
                capabilities: [
                  "TCP/IP network communication",
                  "Command & control functions",
                  "Spontaneous data transmission",
                  "Redundancy support"
                ],
                useCase: "European utility SCADA systems"
              },
              {
                protocol: "MQTT",
                icon: Activity,
                description: "Lightweight publish-subscribe messaging protocol for IoT and cloud integration. Efficient bandwidth usage—ideal for remote sites with limited connectivity.",
                capabilities: [
                  "Publish/Subscribe messaging",
                  "Quality of Service levels",
                  "Last Will & Testament",
                  "Low bandwidth requirements"
                ],
                useCase: "Cloud platforms & IoT integration"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-muted/30 p-8 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold text-foreground mb-2">{item.protocol}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {item.capabilities.map((capability, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-[13px] text-foreground">{capability}</p>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border bg-white/50 p-3 rounded-lg">
                  <p className="text-[12px] font-semibold text-primary">{item.useCase}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SolarLive SCADA is Better */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Certified Excellence
            </p>
            <h2 className="mb-5">Why SolarLive SCADA Integration Leads</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              500+ plants connected to SCADA systems nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Protocol Gateway",
                description: "Single gateway supports all protocols simultaneously—no need for multiple gateways. DNP3 to SLDC + Modbus to local RTU + OPC UA to enterprise simultaneously.",
                icon: Layers,
                stats: "6+ protocols in parallel"
              },
              {
                title: "Certified Compliance",
                description: "Third-party certified for DNP3, IEC 61850, and Modbus compliance. Pre-approved by major DISCOMs—accelerates commissioning and grid approval.",
                icon: Shield,
                stats: "CPRI/IEEE certified"
              },
              {
                title: "Zero Data Loss Buffering",
                description: "Local data buffering during SCADA connection loss. When connectivity restores, all buffered data automatically syncs—no gaps in historical records.",
                icon: Database,
                stats: "30-day buffer capacity"
              },
              {
                title: "Sub-Second Latency",
                description: "Optimized protocol stacks ensure &lt;500ms latency for critical commands. Competitors have 2-5 second delays—we're 10x faster for time-critical operations.",
                icon: Zap,
                stats: "&lt;500ms response time"
              },
              {
                title: "Automatic Failover",
                description: "Redundant SCADA connections with automatic failover. If primary link fails, secondary takes over within 2 seconds—maintaining continuous connectivity.",
                icon: RefreshCw,
                stats: "2-second failover"
              },
              {
                title: "Flexible Data Mapping",
                description: "Configure which plant data points map to SCADA tags via intuitive interface—no programming required. Change mappings remotely without site visits.",
                icon: Settings,
                stats: "No-code configuration"
              },
              {
                title: "Bi-Directional Communication",
                description: "Full bi-directional support—plant sends telemetry to SCADA, SCADA sends control commands to plant. Many competitors are telemetry-only.",
                icon: Network,
                stats: "Full control capability"
              },
              {
                title: "Real-Time Diagnostics",
                description: "Built-in protocol analyzer shows real-time SCADA traffic, connection status, and error logs. Troubleshoot integration issues instantly without expensive protocol analyzers.",
                icon: Activity,
                stats: "Built-in protocol analyzer"
              },
              {
                title: "24/7 Expert Support",
                description: "Dedicated SCADA integration engineers available 24/7. We handle SLDC coordination, protocol configuration, and commissioning—you don't need SCADA expertise in-house.",
                icon: Lightbulb,
                stats: "Expert integration support"
              }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white p-6 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-[16px] font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-3">{reason.description}</p>
                <div className="pt-3 border-t border-border">
                  <p className="text-[12px] font-semibold text-primary">{reason.stats}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Real-World Integration
            </p>
            <h2 className="mb-5">Common SCADA Integration Scenarios</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                scenario: "SLDC Integration",
                description: "Connect to State Load Dispatch Center for real-time telemetry, curtailment commands, and regulatory reporting. DNP3 or IEC 61850 protocol.",
                benefits: ["Grid approval & synchronization", "Automated curtailment response", "Compliance reporting", "Revenue metering integration"]
              },
              {
                scenario: "Multi-Site Portfolio",
                description: "Aggregate 100+ plants into single enterprise SCADA. Utilities, IPPs, and EPCs manage entire portfolio from centralized control room.",
                benefits: ["Unified operations center", "Cross-site analytics", "Centralized alarming", "Portfolio-level reporting"]
              },
              {
                scenario: "Third-Party DMS Integration",
                description: "Integrate with Distribution Management Systems (DMS) like GE, Siemens, or ABB for utility distribution automation.",
                benefits: ["DMS visibility", "Volt-VAR optimization", "Demand response participation", "Grid services coordination"]
              },
              {
                scenario: "Energy Trading Platforms",
                description: "Connect to energy trading and scheduling systems for real-time generation forecasting and bid management.",
                benefits: ["Real-time generation data", "Forecasting integration", "Automated bid updates", "Settlement data export"]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-muted/30 p-8 rounded-xl border border-border"
              >
                <h3 className="text-[18px] font-bold text-foreground mb-3">{item.scenario}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">{item.description}</p>
                <div className="space-y-2">
                  {item.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-[14px] text-foreground">{benefit}</p>
                    </div>
                  ))}
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
            <h2 className="mb-5">SCADA Gateway Specifications</h2>
          </div>

          <div className="bg-white rounded-2xl border border-border p-10 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { spec: "Supported Protocols", value: "DNP3, IEC 61850, Modbus, OPC UA, IEC 60870-5-104, MQTT" },
                { spec: "Data Throughput", value: "10,000+ points/second" },
                { spec: "Latency", value: "&lt;500ms (typical &lt;200ms)" },
                { spec: "Connection Capacity", value: "100+ simultaneous SCADA connections" },
                { spec: "Data Buffering", value: "30 days local storage" },
                { spec: "Redundancy", value: "Hot-standby dual gateway with auto-failover" },
                { spec: "Cybersecurity", value: "TLS 1.3, certificate auth, VPN, firewall" },
                { spec: "Certification", value: "DNP3 Level 3, IEC 61850 Ed 2.1, IEEE 1815" },
                { spec: "Operating Temperature", value: "-20°C to +70°C" },
                { spec: "Communication", value: "Dual Ethernet + 4G/5G backup" },
                { spec: "Configuration", value: "Web-based GUI, no-code mapping" },
                { spec: "Diagnostics", value: "Built-in protocol analyzer & traffic monitor" }
              ].map((spec, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-6 border-b border-border last:border-0">
                  <Monitor className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
            <h2 className="text-white mb-6">Integrate with Your SCADA Systems</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Certified protocols, proven reliability, expert support—500+ plants connected
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request Integration Guide
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/resources/data-sheets" className="inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Protocol Docs
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-[13px] text-white/50 mb-4">Certified Protocol Support</p>
              <div className="flex items-center justify-center gap-8 text-white/40 text-[12px] font-medium">
                <span>DNP3</span>
                <span>•</span>
                <span>IEC 61850</span>
                <span>•</span>
                <span>Modbus</span>
                <span>•</span>
                <span>OPC UA</span>
                <span>•</span>
                <span>IEC 60870</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
