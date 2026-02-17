import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Calendar, CheckCircle } from "lucide-react";

export function Timelines() {
  const milestones = [
    { year: "2018", title: "Company Founded", desc: "SolarLive established as Genex Technocrats LLP division", color: "primary" },
    { year: "2019", title: "First Major Deployment", desc: "100 MW utility solar plant monitoring", color: "primary" },
    { year: "2020", title: "AI Platform Launch", desc: "Predictive maintenance and soiling detection", color: "primary" },
    { year: "2021", title: "500 MW Milestone", desc: "Crossed 500 MW monitored capacity", color: "primary" },
    { year: "2022", title: "PM-KUSUM Integration", desc: "Government scheme monitoring solutions", color: "primary" },
    { year: "2023", title: "Enterprise Expansion", desc: "25+ IPP clients across India", color: "primary" },
    { year: "2024", title: "International Presence", desc: "Expanded to Southeast Asian markets", color: "primary" },
    { year: "2025", title: "1 GW+ Capacity", desc: "Managing over 1 GW of solar assets", color: "primary" },
    { year: "2026", title: "Next Generation Platform", desc: "Voice AI and advanced forecasting launch", color: "primary" }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-white to-[#FFF5EB] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-[48px] font-bold text-[#1A1A1A] mb-6">Our Journey</h1>
            <p className="text-[20px] text-[#4A4A4A] mb-8">Building the future of solar intelligence since 2018.</p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />
            
            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-8 items-start"
                >
                  {/* Circle */}
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-[16px] font-bold text-white">{milestone.year}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white border border-[#E5E5E5] rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-[24px] font-bold text-[#1A1A1A] mb-2">{milestone.title}</h3>
                    <p className="text-[16px] text-[#4A4A4A]">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] font-bold text-[#1A1A1A] mb-6">Be Part of Our Story</h2>
          <p className="text-[18px] text-[#4A4A4A] mb-8">Join thousands of solar operators optimizing with SolarLive.</p>
          <Button size="lg" asChild><Link to="/contact">Get Started Today</Link></Button>
        </div>
      </section>
    </div>
  );
}
