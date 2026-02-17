// Products Pages
import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Cloud, Database, Layout, Smartphone, Cpu, Gauge, Monitor, ArrowRight } from "lucide-react";

// Weather Monitoring
export function WeatherMonitoringPage() {
  return <ProductPageTemplate 
    icon={Cloud}
    tagline="Integrated Weather Data"
    title="Weather Monitoring System"
    description="Integrated weather data acquisition with on-site sensors and satellite data for accurate performance analysis and forecasting."
  />;
}

// Dashboard
export function DashboardPage() {
  return <ProductPageTemplate 
    icon={Layout}
    tagline="Unified Control Center"
    title="Centralized Dashboard"
    description="Single pane of glass for all your solar operations with customizable widgets and real-time KPIs."
  />;
}

// Mobile App
export function MobileAppPage() {
  return <ProductPageTemplate 
    icon={Smartphone}
    tagline="On-the-go Monitoring"
    title="Mobile App"
    description="iOS and Android apps for monitoring solar operations anywhere with push notifications and offline access."
  />;
}

// Data Logger
export function DataLoggerPage() {
  return <ProductPageTemplate 
    icon={Database}
    tagline="Industrial Edge Computing"
    title="Data Logger"
    description="Industrial-grade data loggers with edge computing capabilities for reliable data acquisition in harsh environments."
  />;
}

// Power Plant Controller
export function PowerPlantControllerPage() {
  return <ProductPageTemplate 
    icon={Cpu}
    tagline="Grid-Compliant PPC"
    title="Power Plant Controller"
    description="Grid-compliant power plant controller for reactive power management and voltage regulation."
  />;
}

// Control Panel
export function ControlPanelPage() {
  return <ProductPageTemplate 
    icon={Gauge}
    tagline="Centralized Operations"
    title="Remote Control Panel"
    description="Centralized control panel for managing inverters, trackers, and other solar plant equipment remotely."
  />;
}

// SCADA Integration
export function SCADAIntegrationPage() {
  return <ProductPageTemplate 
    icon={Monitor}
    tagline="Enterprise Connectivity"
    title="SCADA Integration"
    description="Seamless integration with existing SCADA systems via standard protocols like Modbus, DNP3, and IEC 61850."
  />;
}

// Reusable Product Page Template
function ProductPageTemplate({ 
  icon: Icon, 
  tagline, 
  title, 
  description 
}: { 
  icon: any; 
  tagline: string; 
  title: string; 
  description: string;
}) {
  return (
    <div className="pt-20">
      <section className="bg-foreground py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(214,117,6,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-[11px] text-primary font-bold uppercase tracking-widest">
                {tagline}
              </p>
            </div>
            <h1 className="mb-6">{title}</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="mb-6">Enterprise-Grade Solution</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
              Built for reliability, scalability, and performance. Our {title.toLowerCase()} is trusted by solar operators worldwide.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-muted/30 rounded-xl">
                <h3 className="text-[18px] font-bold mb-3">Key Features</h3>
                <ul className="space-y-2 text-[14px] text-muted-foreground">
                  <li>• Enterprise-grade reliability</li>
                  <li>• Real-time data processing</li>
                  <li>• Scalable architecture</li>
                  <li>• 24/7 technical support</li>
                </ul>
              </div>
              <div className="p-6 bg-muted/30 rounded-xl">
                <h3 className="text-[18px] font-bold mb-3">Benefits</h3>
                <ul className="space-y-2 text-[14px] text-muted-foreground">
                  <li>• Reduce downtime</li>
                  <li>• Increase efficiency</li>
                  <li>• Lower operational costs</li>
                  <li>• Improve performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(214,117,6,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">See {title} in Action</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a demo to see how our solution transforms solar operations
            </p>
            <Button size="lg" asChild className="h-12 px-10 text-[15px]">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
