import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Users, Linkedin, Mail } from "lucide-react";

export function Teams() {
  const leadership = [
    { name: "Rajesh Kumar", role: "Chief Executive Officer", dept: "Leadership", experience: "20+ years in renewable energy" },
    { name: "Priya Sharma", role: "Chief Technology Officer", dept: "Technology", experience: "15+ years in IoT & AI" },
    { name: "Amit Patel", role: "VP Engineering", dept: "Engineering", experience: "12+ years in solar SCADA" },
    { name: "Neha Gupta", role: "VP Sales & Marketing", dept: "Commercial", experience: "10+ years in B2B SaaS" }
  ];

  const teams = [
    { dept: "Engineering", count: "25+ engineers", focus: "Platform development & system integration" },
    { dept: "Operations", count: "15+ specialists", focus: "Customer deployment & support" },
    { dept: "Data Science", count: "10+ AI engineers", focus: "Machine learning & analytics" },
    { dept: "Sales & Marketing", count: "12+ professionals", focus: "Business development & partnerships" }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-white to-[#FFF5EB] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-[48px] font-bold text-[#1A1A1A] mb-6">Our Team</h1>
            <p className="text-[20px] text-[#4A4A4A] mb-8">Meet the experts building the future of solar intelligence.</p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-[36px] font-bold text-[#1A1A1A] mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-2">{leader.name}</h3>
                <p className="text-[16px] text-primary mb-2">{leader.role}</p>
                <p className="text-[14px] text-[#666666] mb-4">{leader.experience}</p>
                <div className="flex justify-center gap-3">
                  <button className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-primary" />
                  </button>
                  <button className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-[36px] font-bold text-[#1A1A1A] mb-12 text-center">Our Departments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((team, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white p-6 rounded-lg border border-[#E5E5E5]">
                <h3 className="text-[22px] font-bold text-[#1A1A1A] mb-2">{team.dept}</h3>
                <p className="text-[16px] text-primary mb-3">{team.count}</p>
                <p className="text-[15px] text-[#4A4A4A]">{team.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] font-bold text-[#1A1A1A] mb-6">Join Our Team</h2>
          <p className="text-[18px] text-[#4A4A4A] mb-8">We're always looking for talented individuals.</p>
          <Button size="lg" asChild><Link to="/about/careers">View Open Positions</Link></Button>
        </div>
      </section>
    </div>
  );
}
