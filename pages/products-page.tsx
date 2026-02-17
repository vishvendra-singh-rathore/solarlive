import { motion } from "motion/react";
import { useEffect } from "react";
import { useLocation, Link } from "react-router";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
  Activity, 
  Cloud, 
  Layout, 
  Smartphone, 
  Database, 
  Cpu,
  Gauge,
  Monitor,
  ArrowRight,
  Shield
} from "lucide-react";

export function ProductsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const products = [
    {
      id: "rms",
      icon: Activity,
      number: "01",
      title: "Remote Monitoring System",
      tagline: "Core Data Acquisition Platform",
      description: "Real-time monitoring system connecting to 100+ inverter brands with multi-protocol support. Modbus TCP/RTU, IEC 61850, and DNP3 protocol compatibility for comprehensive plant visibility.",
      image: "https://images.unsplash.com/photo-1714322148068-923f9f9bfc1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMG1vbml0b3JpbmclMjBjb250cm9sJTIwcm9vbSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA5NzgzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: [
        "1-60 second data resolution",
        "25+ years data archival",
        "Unlimited concurrent users",
        "Multi-site portfolio management"
      ]
    },
    {
      id: "wms",
      icon: Cloud,
      number: "02",
      title: "Weather Monitoring System",
      tagline: "Integrated Environmental Sensing",
      description: "Class A pyranometers, temperature sensors, wind measurement, and soiling sensors. ISO 17025 calibrated for accurate performance ratio calculations and energy yield analysis.",
      image: "https://images.unsplash.com/photo-1598287504038-11135345fb14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwc3RhdGlvbiUyMHNvbGFyJTIwZmFybSUyMHNlbnNvcnN8ZW58MXx8fHwxNzcwOTc4MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: [
        "1 second sampling rate",
        "ISO 17025 calibration",
        "±2% measurement accuracy",
        "POA irradiance tracking"
      ]
    },
    {
      id: "dashboard",
      icon: Layout,
      number: "03",
      title: "Central Dashboard",
      tagline: "Web-Based Control Center",
      description: "Browser-based unified interface for multi-site monitoring. Customizable widgets, drag-and-drop layouts, role-based access control, and white-label capability for O&M service providers.",
      image: "https://images.unsplash.com/photo-1761141535640-c78744c4f369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tYW5kJTIwY2VudGVyJTIwY29udHJvbCUyMHJvb20lMjBzY3JlZW5zfGVufDF8fHx8MTc3MDk3ODMxOHww&ixlib=rb-4.1.0&q=80&w=1080",
      specs: [
        "Browser-based platform",
        "Mobile responsive design",
        "Customizable widget library",
        "White-label ready"
      ]
    },
    {
      id: "mobile",
      icon: Smartphone,
      number: "04",
      title: "Mobile App",
      tagline: "iOS & Android Applications",
      description: "Native mobile applications for field technicians and plant managers. Real-time push alerts, photo uploads, work order management, and offline capability for remote site operations.",
      image: "https://images.unsplash.com/photo-1745393926629-76f943e190ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHNvbGFyJTIwYXBwJTIwaGFuZHxlbnwxfHx8fDE3NzA5NzgzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: [
        "iOS and Android apps",
        "7 days offline cache",
        "Push notification alerts",
        "Hindi & English interface"
      ]
    },
    {
      id: "data-logger",
      icon: Database,
      number: "05",
      title: "Data Logger",
      tagline: "Industrial Edge Computing Device",
      description: "Rugged edge computing device for local data acquisition, buffering, protocol conversion, and edge analytics. Operates reliably in -40°C to 70°C environments with 4G and Ethernet connectivity.",
      image: "https://images.unsplash.com/photo-1760376208569-e1b82e1ae494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaGFyZHdhcmUlMjBkYXRhJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MDk3ODMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
      specs: [
        "-40°C to 70°C operation",
        "4G and Ethernet dual connectivity",
        "12-48V DC power input",
        "Protocol conversion engine"
      ]
    },
    {
      id: "ppc",
      icon: Cpu,
      number: "06",
      title: "Power Plant Controller",
      tagline: "Grid Control & Compliance",
      description: "Grid-compliant plant controller for active and reactive power regulation. IEC 61850 certified with sub-100ms response time for utility-scale solar power plant operations.",
      image: "https://images.unsplash.com/photo-1738918937796-743064feefa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHBsYW50JTIwY29udHJvbCUyMHBhbmVsJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzA5NzgzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: [
        "< 100ms response time",
        "IEC 61850 certification",
        "±0.5% control accuracy",
        "Active & reactive power control"
      ]
    },
    {
      id: "control-panel",
      icon: Gauge,
      number: "07",
      title: "Remote Control Panel",
      tagline: "Secure Operations Interface",
      description: "Secure web-based interface for remote plant operations. Inverter start/stop commands, setpoint adjustments, curtailment execution with complete audit trail and multi-factor authentication.",
      image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwbmV0d29yayUyMGNhYmxlcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwOTc4MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: [
        "Two-factor authentication",
        "Complete audit logging",
        "Role-based access control",
        "Remote inverter operations"
      ]
    },
    {
      id: "scada",
      icon: Monitor,
      number: "08",
      title: "SCADA Integration",
      tagline: "Enterprise System Connectivity",
      description: "Enterprise SCADA connectivity module for seamless data exchange with third-party systems. OPC UA, REST API, MQTT protocols with TLS 1.3 security and sub-second latency.",
      image: "https://images.unsplash.com/photo-1707334724059-12e2b6f945c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHNjYWRhJTIwc3lzdGVtfGVufDF8fHx8MTc3MDk3ODMyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      specs: [
        "OPC UA, REST, MQTT support",
        "TLS 1.3 encryption",
        "< 1 second data latency",
        "Custom protocol development"
      ]
    }
  ];

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
              PLATFORM PRODUCTS
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Platform Products
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed">
              Industrial-grade products that integrate seamlessly to form a complete solar monitoring ecosystem
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { icon: Activity, metric: "100+", label: "Inverter Brands", sublabel: "Multi-protocol support" },
                { icon: Database, metric: "25 Years", label: "Data Archival", sublabel: "Complete history" },
                { icon: Monitor, metric: "99.9%", label: "System Uptime", sublabel: "SLA-backed" },
                { icon: Smartphone, metric: "<1 sec", label: "Data Latency", sublabel: "Real-time updates" }
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

      {/* Products List */}
      <section className="bg-white">
        {products.map((product, index) => (
          <div
            key={product.id}
            id={product.id}
            className={`scroll-mt-20 ${index % 2 === 0 ? 'bg-white' : 'bg-muted/30'}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {/* Number & Icon */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="text-[80px] font-bold text-primary/20 leading-none">
                      {product.number}
                    </div>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <product.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-6">
                    <p className="text-[12px] text-primary font-bold uppercase tracking-widest mb-2">
                      {product.tagline}
                    </p>
                    <h2 className="text-[40px] leading-tight">{product.title}</h2>
                  </div>

                  {/* Description */}
                  <p className="text-[18px] text-muted-foreground leading-relaxed mb-10">
                    {product.description}
                  </p>

                  {/* Specs List */}
                  <div className="space-y-4">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <p className="text-[16px] text-foreground">{spec}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* Dark Feature Highlight Section */}
      <section className="py-28 bg-gradient-to-br from-foreground via-[#0A0F1E] to-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-3xl opacity-30" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,117,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,117,6,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-5">Enterprise-Grade Reliability</h2>
            <p className="text-[18px] text-white/70 max-w-3xl mx-auto leading-relaxed">
              Built for mission-critical solar operations with industrial-grade hardware and 99.9% platform uptime
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "ISO 27001 Certified", description: "Enterprise security standards" },
              { icon: Database, title: "Redundant Storage", description: "Multi-region data backup" },
              { icon: Activity, title: "24/7 Monitoring", description: "Always-on system health" },
              { icon: Gauge, title: "<100ms Response", description: "Real-time control loops" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-[18px] font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-[14px] text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Ready to Deploy?</h2>
            <p className="text-[19px] text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get detailed technical specifications and pricing for our product suite
            </p>
            <Button size="lg" asChild className="h-12 px-10">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Contact Sales Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}