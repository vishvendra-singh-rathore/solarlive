import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Database, Cpu, Gauge, Monitor, ArrowRight, Server, Zap, Shield, Activity } from "lucide-react";

// Data Logger Page
export function DataLoggerPage() {
  return <ProductTemplate 
    title="Data Logger" 
    tagline="Industrial Edge Computing" 
    description="Industrial-grade data loggers with edge computing capabilities for reliable data acquisition in harsh environments."
    icon={Database}
    stats={[
      { icon: Database, metric: "1-5 sec", label: "Data Polling", sublabel: "Real-time acquisition" },
      { icon: Server, metric: "-40 to 70°C", label: "Temperature Range", sublabel: "Industrial grade" },
      { icon: Zap, metric: "4G + Ethernet", label: "Connectivity", sublabel: "Dual redundancy" },
      { icon: Shield, metric: "90 Days", label: "Local Storage", sublabel: "Zero data loss" }
    ]}
  />;
}

// Power Plant Controller Page
export function PowerPlantControllerPage() {
  return <ProductTemplate 
    title="Power Plant Controller" 
    tagline="Grid-Compliant PPC" 
    description="Grid-compliant power plant controller for reactive power management and voltage regulation."
    icon={Cpu}
    stats={[
      { icon: Shield, metric: "IEC 61850", label: "Certified", sublabel: "Grid compliant" },
      { icon: Zap, metric: "<100ms", label: "Response Time", sublabel: "Real-time control" },
      { icon: Gauge, metric: "±1%", label: "Accuracy", sublabel: "Precise control" },
      { icon: Activity, metric: "Active/Reactive", label: "Power Control", sublabel: "Full regulation" }
    ]}
  />;
}

// Control Panel Page
export function ControlPanelPage() {
  return <ProductTemplate 
    title="Remote Control Panel" 
    tagline="Centralized Operations" 
    description="Centralized control panel for managing inverters, trackers, and other solar plant equipment remotely."
    icon={Gauge}
    stats={[
      { icon: Monitor, metric: "Remote", label: "Control Access", sublabel: "From anywhere" },
      { icon: Gauge, metric: "All Devices", label: "Equipment Control", sublabel: "Unified interface" },
      { icon: Shield, metric: "Secure", label: "Authentication", sublabel: "Role-based access" },
      { icon: Zap, metric: "<2 sec", label: "Command Latency", sublabel: "Instant response" }
    ]}
  />;
}

// SCADA Integration Page
export function SCADAIntegrationPage() {
  return <ProductTemplate 
    title="SCADA Integration" 
    tagline="Enterprise Connectivity" 
    description="Seamless integration with existing SCADA systems via standard protocols like Modbus, DNP3, and IEC 61850."
    icon={Monitor}
    stats={[
      { icon: Server, metric: "OPC UA", label: "Protocol Support", sublabel: "Industry standard" },
      { icon: Zap, metric: "1000+", label: "Data Points/sec", sublabel: "High throughput" },
      { icon: Activity, metric: "<500ms", label: "Latency", sublabel: "Real-time exchange" },
      { icon: Database, metric: "99.9%", label: "Reliability", sublabel: "Enterprise grade" }
    ]}
  />;
}

// Reusable Template
function ProductTemplate({ title, tagline, description, icon: Icon, stats }: { 
  title: string; 
  tagline: string; 
  description: string;
  icon: any;
  stats: Array<{ icon: any; metric: string; label: string; sublabel: string }>;
}) {
  return (
    <div className="pt-20">
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
              <Icon className="w-3 h-3" />
              {tagline.toUpperCase()}
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed mb-10">
              {description}
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((item, idx) => (
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="mb-6">Enterprise-Grade Solution</h2>
          <p className="text-[16px] text-muted-foreground leading-relaxed max-w-3xl">
            Built for reliability, scalability, and performance. Trusted by solar operators worldwide.
          </p>
        </div>
      </section>
      <section className="py-24 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">See {title} in Action</h2>
          <Button size="lg" asChild className="h-12 px-10">
            <Link to="/contact" className="inline-flex items-center gap-2">Request Demo <ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}