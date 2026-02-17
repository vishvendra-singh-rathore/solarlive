import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Monitor, CheckCircle2, ArrowRight, Activity, Server, Database, Zap } from "lucide-react";

export function SCADA() {
  const features = ["Enterprise SCADA connectivity", "OPC UA server/client", "REST API integration", "MQTT protocol support", "Real-time data exchange", "Bi-directional communication", "Third-party system integration", "Custom protocol development"];
  const specs = [{ label: "Protocols", value: "OPC UA, REST, MQTT" }, { label: "Data Rate", value: "1000+ points/sec" }, { label: "Latency", value: "<500ms" }, { label: "Reliability", value: "99.9% uptime" }];

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
              <Monitor className="w-3 h-3" />
              ENTERPRISE INTEGRATION
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              SCADA Integration
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed mb-10">
              Enterprise SCADA connectivity module. Seamless data exchange with third-party systems via OPC UA, REST API, and MQTT protocols.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Server, metric: "OPC UA", label: "Protocol Support", sublabel: "Industry standard" },
                { icon: Zap, metric: "1000+", label: "Data Points/sec", sublabel: "High throughput" },
                { icon: Activity, metric: "<500ms", label: "Latency", sublabel: "Real-time exchange" },
                { icon: Database, metric: "99.9%", label: "Reliability", sublabel: "Enterprise grade" }
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-[36px] font-bold text-[#1A1A1A] mb-12 text-center">Integration Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="flex items-start gap-3 p-6 bg-[#F8F8F8] rounded-lg"><CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" /><span className="text-[16px] text-[#1A1A1A]">{feature}</span></motion.div>))}</div>
        </div>
      </section>
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-[36px] font-bold text-[#1A1A1A] mb-12 text-center">Performance Specifications</h2>
          <div className="grid md:grid-cols-4 gap-6">{specs.map((spec, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center p-8 bg-white rounded-lg shadow-md"><div className="text-[14px] font-bold text-[#666666] uppercase tracking-wider mb-3">{spec.label}</div><div className="text-[24px] font-bold text-primary">{spec.value}</div></motion.div>))}</div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] font-bold text-[#1A1A1A] mb-6">Integrate with Your SCADA</h2>
          <p className="text-[18px] text-[#4A4A4A] mb-8">Connect SolarLive to existing enterprise systems.</p>
          <Button size="lg" asChild><Link to="/contact" className="inline-flex items-center gap-2">Start Integration <ArrowRight className="w-5 h-5" /></Link></Button>
        </div>
      </section>
    </div>
  );
}