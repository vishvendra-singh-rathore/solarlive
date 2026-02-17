import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Users, ArrowRight, Linkedin, Mail, Award, Briefcase, GraduationCap, Globe } from "lucide-react";

export function TeamPage() {
  const leadership = [
    {
      name: "Rajesh Kumar",
      title: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      bio: "15+ years in renewable energy. Previously led operations at 2 GW+ solar portfolio. IIT Delhi, Stanford MBA.",
      expertise: ["Business Strategy", "Operations", "Fundraising"],
      linkedin: "#"
    },
    {
      name: "Priya Sharma",
      title: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      bio: "AI/ML expert with 12 years at Google and Microsoft. PhD in Computer Science from MIT. 8 patents in predictive analytics.",
      expertise: ["Machine Learning", "Cloud Architecture", "AI Research"],
      linkedin: "#"
    },
    {
      name: "Anil Malhotra",
      title: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      bio: "Built SCADA systems for 15+ years. Ex-ABB, Siemens. IIT Bombay. Leads our 40-person engineering team.",
      expertise: ["SCADA Integration", "IoT Systems", "Team Leadership"],
      linkedin: "#"
    },
    {
      name: "Sunita Reddy",
      title: "Chief AI Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      bio: "PhD in Applied AI from Stanford. Published 20+ research papers. Built forecasting models at Tesla Energy.",
      expertise: ["Deep Learning", "Forecasting", "Research"],
      linkedin: "#"
    }
  ];

  const team = [
    {
      department: "Engineering",
      icon: Briefcase,
      count: 42,
      members: [
        { name: "Vikram Singh", role: "Senior Backend Engineer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" },
        { name: "Kavita Deshmukh", role: "Lead Frontend Engineer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300" },
        { name: "Amit Patel", role: "DevOps Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300" },
        { name: "Neha Kapoor", role: "Mobile Engineering Lead", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300" },
        { name: "Sanjay Gupta", role: "SCADA Integration Engineer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300" },
        { name: "Pooja Iyer", role: "QA Engineering Manager", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300" }
      ]
    },
    {
      department: "AI & Data Science",
      icon: Award,
      count: 18,
      members: [
        { name: "Dr. Arjun Nair", role: "ML Research Scientist", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300" },
        { name: "Divya Menon", role: "Data Science Lead", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300" },
        { name: "Karthik Raman", role: "Computer Vision Engineer", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300" },
        { name: "Anjali Verma", role: "NLP Engineer", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" }
      ]
    },
    {
      department: "Product & Design",
      icon: GraduationCap,
      count: 12,
      members: [
        { name: "Rohan Mehta", role: "Head of Product", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=300" },
        { name: "Shreya Joshi", role: "Senior Product Designer", image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=300" },
        { name: "Manish Kumar", role: "UX Researcher", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300" },
        { name: "Isha Pandey", role: "Product Manager - AI", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300" }
      ]
    },
    {
      department: "Customer Success & Operations",
      icon: Globe,
      count: 22,
      members: [
        { name: "Ramesh Nair", role: "VP Customer Success", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300" },
        { name: "Meera Krishnan", role: "Implementation Lead", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300" },
        { name: "Suresh Rao", role: "Field Operations Manager", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300" },
        { name: "Lakshmi Iyer", role: "Technical Support Lead", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300" }
      ]
    }
  ];

  const stats = [
    { metric: "95+", label: "Team Members" },
    { metric: "12+", label: "Years Avg Experience" },
    { metric: "8", label: "PhD Researchers" },
    { metric: "15+", label: "Patents Filed" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foreground to-[#0A0F1E] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-5 bg-primary/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Users className="w-3 h-3" />
              OUR TEAM
            </div>
            
            <h1 className="mb-6">Meet the Minds Behind SolarLive</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              95+ engineers, data scientists, and solar experts from IIT, MIT, Stanford, Google, Microsoft, ABB, and Siemens—united by one mission: making solar the most intelligent energy source on Earth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-orange-600/10 border-y border-primary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-[36px] font-bold text-primary mb-1">{stat.metric}</p>
                <p className="text-[13px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-5">Leadership Team</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Industry veterans and AI pioneers leading SolarLive's vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-primary/10 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="grid md:grid-cols-[200px,1fr]">
                  {/* Image */}
                  <div className="relative aspect-square md:aspect-auto overflow-hidden">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-[24px] font-bold text-foreground mb-1">{leader.name}</h3>
                    <p className="text-[14px] text-primary font-semibold mb-4">{leader.title}</p>
                    <p className="text-[14px] text-muted-foreground leading-relaxed mb-6">{leader.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {leader.expertise.map((skill, sIdx) => (
                        <div key={sIdx} className="bg-muted px-3 py-1 rounded-full">
                          <p className="text-[12px] font-semibold text-foreground">{skill}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group/link">
                        <Linkedin className="w-5 h-5 text-primary group-hover/link:text-white transition-colors" />
                      </a>
                      <a href={`mailto:${leader.name.toLowerCase().replace(' ', '.')}@solarlive.com`} className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group/link">
                        <Mail className="w-5 h-5 text-primary group-hover/link:text-white transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Departments */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-5">Our Teams</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Meet the experts building the future of solar intelligence
            </p>
          </div>

          <div className="space-y-16">
            {team.map((dept, deptIdx) => (
              <motion.div
                key={deptIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Department Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                    <dept.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-[28px] font-bold text-foreground">{dept.department}</h3>
                    <p className="text-[14px] text-muted-foreground">{dept.count} team members</p>
                  </div>
                </div>

                {/* Team Members Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {dept.members.map((member, mIdx) => (
                    <motion.div
                      key={mIdx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: mIdx * 0.05 }}
                      className="bg-white border border-primary/10 rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all group"
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <h4 className="text-[16px] font-bold text-foreground mb-1">{member.name}</h4>
                        <p className="text-[13px] text-muted-foreground">{member.role}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* More Members Placeholder */}
                  {dept.count > dept.members.length && (
                    <div className="bg-gradient-to-br from-muted/50 to-white border border-primary/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-[20px] font-bold text-primary mb-2">+{dept.count - dept.members.length}</p>
                      <p className="text-[13px] text-muted-foreground">More talented team members</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6">Why Join SolarLive?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Work on Climate-Critical Technology",
                    desc: "Your code directly contributes to global carbon reduction and renewable energy adoption"
                  },
                  {
                    title: "Solve Hard Technical Problems",
                    desc: "AI/ML at scale, real-time IoT systems, distributed cloud architecture, edge computing"
                  },
                  {
                    title: "Learn from the Best",
                    desc: "Team with IIT/MIT/Stanford backgrounds, ex-Google/Microsoft engineers, and industry veterans"
                  },
                  {
                    title: "Ownership & Impact",
                    desc: "Own entire features, ship fast, see your work deployed across 500+ MW of solar capacity"
                  },
                  {
                    title: "Competitive Compensation",
                    desc: "Top-tier salaries, equity ownership, comprehensive health insurance, flexible work arrangements"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-[17px] font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-[14px] text-muted-foreground leading-relaxed">{item.desc}</p>
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
                  alt="SolarLive team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-foreground to-[#0A0F1E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Join Our Team</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              We're hiring across engineering, AI/ML, product, and operations
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/about/careers" className="inline-flex items-center gap-2">
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <a href="mailto:careers@solarlive.com">
                  Send Your Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
