import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Briefcase, ArrowRight, MapPin, Clock, DollarSign, Code, Brain, Smartphone, BarChart3, Users, Shield, Zap, CheckCircle, Heart, Coffee, Home, TrendingUp } from "lucide-react";

export function CareersPage() {
  const openPositions = [
    {
      title: "Senior Backend Engineer (Node.js / Python)",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      experience: "4-6 years",
      icon: Code,
      description: "Build scalable real-time data pipelines processing 50M+ data points daily from 500+ MW of solar plants. Work with Node.js, Python, PostgreSQL, Redis, Kafka.",
      requirements: [
        "4+ years backend development experience",
        "Expert in Node.js or Python",
        "Experience with real-time data systems",
        "Database optimization & scaling",
        "Cloud infrastructure (AWS/Azure)"
      ],
      responsibilities: [
        "Design and build API services",
        "Optimize database queries",
        "Implement caching strategies",
        "Monitor system performance",
        "Mentor junior engineers"
      ]
    },
    {
      title: "Machine Learning Engineer (AI/Predictive Analytics)",
      department: "AI & Data Science",
      location: "Bangalore / Remote",
      type: "Full-time",
      experience: "3-5 years",
      icon: Brain,
      description: "Build ML models for failure prediction, soiling detection, and energy forecasting. Work with TensorFlow, PyTorch, scikit-learn on real-world solar data.",
      requirements: [
        "MS/PhD in CS, ML, or related field",
        "3+ years ML engineering experience",
        "Strong Python & ML frameworks",
        "Time-series forecasting expertise",
        "Production ML deployment experience"
      ],
      responsibilities: [
        "Develop predictive ML models",
        "Train models on solar telemetry data",
        "Deploy models to production",
        "Monitor model performance",
        "Research new AI techniques"
      ]
    },
    {
      title: "Senior Frontend Engineer (React / TypeScript)",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      experience: "4-6 years",
      icon: Code,
      description: "Build beautiful, responsive dashboards for solar monitoring. Work with React, TypeScript, Tailwind CSS, and modern frontend tools.",
      requirements: [
        "4+ years React development",
        "Expert in TypeScript",
        "Experience with data visualization",
        "Performance optimization skills",
        "Design system experience"
      ],
      responsibilities: [
        "Build dashboard components",
        "Implement data visualizations",
        "Optimize frontend performance",
        "Collaborate with designers",
        "Code reviews & mentorship"
      ]
    },
    {
      title: "Mobile Engineer (React Native / Flutter)",
      department: "Engineering",
      location: "Bangalore / Remote",
      type: "Full-time",
      experience: "3-5 years",
      icon: Smartphone,
      description: "Build iOS and Android apps for field operations and on-the-go monitoring. Work with React Native or Flutter, integrate voice AI features.",
      requirements: [
        "3+ years mobile app development",
        "React Native or Flutter expertise",
        "iOS & Android deployment experience",
        "Offline-first architecture",
        "Performance optimization"
      ],
      responsibilities: [
        "Develop mobile features",
        "Implement offline sync",
        "Optimize app performance",
        "App store deployment",
        "User experience improvements"
      ]
    },
    {
      title: "DevOps Engineer (AWS / Kubernetes)",
      department: "Engineering",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-5 years",
      icon: Shield,
      description: "Manage cloud infrastructure for 99.9% uptime. Work with AWS, Kubernetes, Docker, Terraform, monitoring & alerting systems.",
      requirements: [
        "3+ years DevOps experience",
        "AWS or Azure expertise",
        "Kubernetes & Docker proficiency",
        "CI/CD pipeline experience",
        "Infrastructure as Code (Terraform)"
      ],
      responsibilities: [
        "Manage cloud infrastructure",
        "Implement monitoring & alerting",
        "Automate deployment pipelines",
        "Ensure 99.9% uptime",
        "Security & compliance"
      ]
    },
    {
      title: "Product Manager - AI Features",
      department: "Product",
      location: "Bangalore",
      type: "Full-time",
      experience: "4-6 years",
      icon: BarChart3,
      description: "Own AI product roadmap—predictive maintenance, forecasting, optimization. Work closely with ML team and customers to define features.",
      requirements: [
        "4+ years product management",
        "Technical background (engineering)",
        "Understanding of AI/ML concepts",
        "Solar/energy industry experience (plus)",
        "Data-driven decision making"
      ],
      responsibilities: [
        "Define AI product roadmap",
        "Gather customer requirements",
        "Work with engineering teams",
        "Analyze feature performance",
        "Present to stakeholders"
      ]
    },
    {
      title: "SCADA Integration Engineer",
      department: "Engineering",
      location: "Bangalore / Field",
      type: "Full-time",
      experience: "5-8 years",
      icon: Zap,
      description: "Implement DNP3, IEC 61850, Modbus integrations for grid-connected solar plants. Work directly with SLDC and power plant controllers.",
      requirements: [
        "5+ years SCADA experience",
        "DNP3 & IEC 61850 expertise",
        "Electrical engineering background",
        "Solar plant commissioning experience",
        "Willing to travel 30-40%"
      ],
      responsibilities: [
        "Commission SCADA systems",
        "Integrate with SLDC",
        "Protocol implementation",
        "On-site troubleshooting",
        "Technical documentation"
      ]
    },
    {
      title: "Customer Success Manager",
      department: "Operations",
      location: "Bangalore / Remote",
      type: "Full-time",
      experience: "3-5 years",
      icon: Users,
      description: "Own customer relationships for utility-scale solar portfolios. Ensure successful implementation, training, and ongoing optimization.",
      requirements: [
        "3+ years customer success experience",
        "Technical background preferred",
        "Solar/renewable energy experience",
        "Excellent communication skills",
        "Data analysis capabilities"
      ],
      responsibilities: [
        "Manage customer relationships",
        "Ensure successful implementations",
        "Conduct training sessions",
        "Analyze customer data & ROI",
        "Identify upsell opportunities"
      ]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Top-tier salaries matching FAANG companies + equity ownership in a high-growth startup"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance for you & family, gym membership, mental health support"
    },
    {
      icon: Home,
      title: "Flexible Work",
      description: "Hybrid model—work from home 3 days/week, flexible hours, results-focused culture"
    },
    {
      icon: Coffee,
      title: "Office Perks",
      description: "Free lunch & snacks, modern Bangalore office, standing desks, gaming zone"
    },
    {
      icon: TrendingUp,
      title: "Learning & Growth",
      description: "Conference budget, online courses, mentorship programs, career advancement paths"
    },
    {
      icon: Users,
      title: "Amazing Team",
      description: "Work with IIT/MIT/Stanford grads, ex-Google/Microsoft engineers, industry veterans"
    }
  ];

  const companyValues = [
    "🌍 **Climate Impact**: Your work directly contributes to global carbon reduction",
    "🚀 **Fast Growth**: Join during hyper-growth phase—500 MW today, 1 GW by 2025",
    "💻 **Hard Tech**: Work on real engineering challenges—AI, IoT, real-time systems, edge computing",
    "🎯 **Ownership**: Own entire features, ship fast, see impact across 120+ plants",
    "📈 **Equity**: Significant equity grants—benefit from company growth",
    "🏆 **Recognition**: Top performers get quarterly bonuses, promotions, awards"
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-violet-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Briefcase className="w-3 h-3" />
              JOIN OUR TEAM
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Build the Future of Solar Intelligence
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed max-w-3xl mx-auto mb-10">
              Join 95+ engineers, data scientists, and solar experts building AI-powered monitoring for 500+ MW of clean energy. Work on climate-critical technology with top-tier compensation and equity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px] bg-white text-foreground hover:bg-white/90">
                <a href="#positions" className="inline-flex items-center gap-2">
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </a>
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

      {/* Why Join SolarLive */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-5">Why Join SolarLive?</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              More than just a job—it's a mission to accelerate the clean energy transition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {companyValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-gradient-to-br from-muted/50 to-white border border-primary/10 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <p className="text-[15px] text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: value }} />
              </motion.div>
            ))}
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400"
              alt="SolarLive team working together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-5">Benefits & Perks</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              We take care of our team so they can focus on building amazing products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-primary/10 rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-[20px] font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-5">Open Positions</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              {openPositions.length} positions currently open—find your perfect role
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-primary/10 rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <position.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[24px] font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-[14px] text-muted-foreground mb-4">
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          {position.experience}
                        </div>
                      </div>
                      <p className="text-[15px] text-muted-foreground leading-relaxed">
                        {position.description}
                      </p>
                    </div>
                  </div>
                  <Button size="lg" asChild className="ml-4">
                    <a href={`mailto:careers@solarlive.com?subject=Application: ${position.title}`}>
                      Apply Now
                    </a>
                  </Button>
                </div>

                {/* Expandable Details */}
                <details className="group/details">
                  <summary className="cursor-pointer text-[14px] font-semibold text-primary hover:underline list-none">
                    View Full Details →
                  </summary>
                  
                  <div className="mt-6 pt-6 border-t border-border grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[16px] font-bold text-foreground mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-[14px] text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold text-foreground mb-4">Responsibilities</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-[14px] text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-foreground to-[#0A0F1E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Don't See Your Role?</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              We're always looking for exceptional talent. Send us your resume and let's talk!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <a href="mailto:careers@solarlive.com" className="inline-flex items-center gap-2">
                  Send Resume
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/about/team">
                  Meet the Team
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
