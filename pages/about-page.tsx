import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { 
  Target,
  Users,
  Award,
  Clock,
  ArrowRight,
  CheckCircle2,
  Building2
} from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Accelerating renewable energy adoption through intelligent monitoring solutions"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Industrial-grade reliability and enterprise-level security in every product"
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "24/7 support and continuous innovation based on operator feedback"
    }
  ];

  const milestones = [
    { year: "2016", event: "Company founded with vision to digitize solar operations" },
    { year: "2018", event: "First 100 MW of solar capacity under monitoring" },
    { year: "2020", event: "AI-powered predictive maintenance launched" },
    { year: "2022", event: "500+ MW portfolio milestone, expansion to 15 states" },
    { year: "2024", event: "Voice AI and advanced forecasting capabilities deployed" }
  ];

  const team = [
    {
      role: "Leadership Team",
      description: "Experienced professionals from renewable energy, industrial automation, and enterprise software backgrounds"
    },
    {
      role: "Engineering",
      description: "Expert team in embedded systems, cloud architecture, ML/AI, and industrial protocols"
    },
    {
      role: "Support",
      description: "24/7 technical support team with deep expertise in solar plant operations"
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
            className="max-w-4xl text-center mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-violet-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Building2 className="w-3 h-3" />
              ABOUT SOLARLIVE
            </div>
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              About SolarLive
            </h1>
            <p className="text-[20px] text-white/70 mb-10 leading-relaxed max-w-3xl mx-auto">
              Building the digital nervous system for solar operations across India
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building2, metric: "2016", label: "Founded", sublabel: "8+ years experience" },
                { icon: Users, metric: "500+ MW", label: "Capacity", sublabel: "Under management" },
                { icon: Target, metric: "15 States", label: "Coverage", sublabel: "Pan-India reach" },
                { icon: Award, metric: "99.9%", label: "Uptime", sublabel: "Platform reliability" }
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

      {/* Vision & Mission */}
      <section id="vision" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h2 className="text-[32px]">Our Vision</h2>
              </div>
              <p className="text-[18px] text-muted-foreground leading-relaxed mb-6">
                To be the central intelligence platform powering India's renewable energy transition, enabling every solar installation to operate at peak efficiency through data-driven insights.
              </p>
              <p className="text-[16px] text-foreground leading-relaxed">
                We envision a future where AI-powered monitoring is standard across all solar installations, from utility-scale plants to residential rooftops, ensuring maximum energy yield and minimal environmental impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h2 className="text-[32px]">Our Mission</h2>
              </div>
              <p className="text-[18px] text-muted-foreground leading-relaxed mb-6">
                Deliver enterprise-grade solar monitoring and analytics solutions that combine industrial reliability, AI-powered intelligence, and exceptional user experience.
              </p>
              <p className="text-[16px] text-foreground leading-relaxed">
                We're committed to continuous innovation, drawing from operational data across hundreds of plants to build smarter algorithms that help our customers maximize returns on their solar investments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-[18px] text-muted-foreground max-w-2xl mx-auto">
              Principles that guide every decision and product we build
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg border border-border hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-[32px]">Our Journey</h2>
            </div>
            <p className="text-[18px] text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to transform solar operations
            </p>
          </motion.div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-6 p-6 bg-muted rounded-lg border-l-4 border-primary"
              >
                <div className="text-[24px] font-bold text-primary min-w-[80px]">
                  {milestone.year}
                </div>
                <p className="text-[16px] text-foreground leading-relaxed">
                  {milestone.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Team</h2>
            <p className="text-[18px] text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to renewable energy excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg border border-border"
              >
                <h3 className="text-[20px] font-bold text-foreground mb-4">{dept.role}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section id="careers" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Join Our Mission</h2>
            <p className="text-[18px] text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              We're always looking for talented individuals passionate about renewable energy and technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8 h-12">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 h-12 border-2">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}