import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { TrendingUp, ArrowRight, Calendar, Award, Users, Zap, Globe, Target, Rocket } from "lucide-react";

export function JourneyPage() {
  const milestones = [
    {
      year: "2020",
      quarter: "Q3",
      title: "The Beginning: A Problem Worth Solving",
      description: "Founded by Rajesh Kumar and Priya Sharma after witnessing 200 MW portfolio lose ₹15 crore annually to preventable downtime. Raised seed funding of $2M from Matrix Partners.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      achievements: [
        "Incorporated SolarLive Technologies",
        "$2M seed funding raised",
        "Assembled founding team of 8",
        "First product concept validated"
      ],
      metrics: { employees: "8", plants: "0", funding: "$2M" }
    },
    {
      year: "2021",
      quarter: "Q1-Q2",
      title: "Building the Foundation",
      description: "6 months of intensive development—cloud architecture, real-time data pipelines, inverter protocol integrations. First beta deployed at 25 MW plant in Rajasthan.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      achievements: [
        "Platform MVP launched",
        "First customer: 25 MW plant",
        "DNP3 SCADA integration certified",
        "Engineering team grew to 18"
      ],
      metrics: { employees: "18", plants: "1", capacity: "25 MW" }
    },
    {
      year: "2021",
      quarter: "Q3-Q4",
      title: "Product-Market Fit",
      description: "Word spreads fast—3 more utility-scale customers onboarded. Predictive maintenance AI successfully predicts first inverter failure 75 days in advance, saving ₹12 lakh in emergency repairs.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      achievements: [
        "Reached 100 MW under management",
        "Predictive AI first success",
        "Series A fundraising initiated",
        "Mobile app launched (iOS/Android)"
      ],
      metrics: { employees: "28", plants: "8", capacity: "100 MW" }
    },
    {
      year: "2022",
      quarter: "Q1",
      title: "Series A: Scaling Up",
      description: "Raised $12M Series A led by Sequoia Capital India. Hired VP of Engineering from ABB, Chief AI Officer from Tesla Energy. Moved to 15,000 sq ft Bangalore office.",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800",
      achievements: [
        "$12M Series A funding",
        "Key leadership hires",
        "New 15,000 sq ft office",
        "R&D lab established"
      ],
      metrics: { employees: "45", plants: "15", funding: "$14M Total" }
    },
    {
      year: "2022",
      quarter: "Q2-Q4",
      title: "AI Innovation & Geographic Expansion",
      description: "Launched soiling detection AI, energy forecasting (90%+ accuracy), and maintenance intelligence. Expanded to Gujarat, Maharashtra, Karnataka. Crossed 200 MW milestone.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
      achievements: [
        "3 new AI features launched",
        "200 MW+ under management",
        "Expanded to 4 states",
        "IEC 61850 certification achieved"
      ],
      metrics: { employees: "62", plants: "32", capacity: "200 MW" }
    },
    {
      year: "2023",
      quarter: "Q1-Q2",
      title: "Enterprise Partnerships & Recognition",
      description: "Signed multi-year contracts with 3 IPPs managing 500+ MW combined. Won 'Best Solar Tech Innovation' at REI Expo. Featured in Economic Times and Bloomberg.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      achievements: [
        "Enterprise partnerships signed",
        "'Best Innovation' award won",
        "National media coverage",
        "Customer NPS: 85+"
      ],
      metrics: { employees: "78", plants: "58", capacity: "350 MW" }
    },
    {
      year: "2023",
      quarter: "Q3-Q4",
      title: "Platform 2.0 & Portfolio Management",
      description: "Complete platform redesign—unified dashboard for multi-site portfolios, advanced benchmarking, fleet analytics. Voice Summary AI launched. Crossed 400 MW.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800",
      achievements: [
        "Platform 2.0 launched",
        "Voice Summary AI released",
        "Portfolio features deployed",
        "400 MW milestone reached"
      ],
      metrics: { employees: "85", plants: "74", capacity: "400 MW" }
    },
    {
      year: "2024",
      quarter: "Q1-Q2",
      title: "Series B & Market Leadership",
      description: "Raised $35M Series B from Accel and existing investors. Largest solar monitoring platform in India by MW managed. Team crosses 90 members. 8 patents filed.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800",
      achievements: [
        "$35M Series B funding",
        "Market leader by capacity",
        "90+ team members",
        "8 patents filed"
      ],
      metrics: { employees: "92", plants: "95+", funding: "$49M Total" }
    },
    {
      year: "2024",
      quarter: "Q3-Q4",
      title: "Present Day: 500+ MW & Growing",
      description: "Crossed 500 MW under management. Proven ₹50+ crore annual savings for customers. Preparing international expansion. Hiring aggressively across all teams.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
      achievements: [
        "500+ MW milestone crossed",
        "₹50+ Cr annual savings proven",
        "International expansion planned",
        "95+ team members"
      ],
      metrics: { employees: "95", plants: "120+", capacity: "500+ MW" }
    }
  ];

  const impactMetrics = [
    {
      icon: Zap,
      metric: "500+ MW",
      label: "Solar Capacity Managed",
      description: "Powering 500,000+ homes"
    },
    {
      icon: TrendingUp,
      metric: "₹50+ Cr",
      label: "Annual Customer Savings",
      description: "Proven ROI across portfolio"
    },
    {
      icon: Globe,
      metric: "120+",
      label: "Plants Monitored",
      description: "Across 8 states in India"
    },
    {
      icon: Users,
      metric: "95+",
      label: "Team Members",
      description: "Engineers, AI experts, operators"
    }
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
              <TrendingUp className="w-3 h-3" />
              OUR JOURNEY
            </div>
            
            <h1 className="mb-6">From 0 to 500 MW in 4 Years</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              The story of how two engineers and a bold vision became India's leading AI-powered solar monitoring platform—managing 500+ MW, saving ₹50+ crore annually, and powering the clean energy revolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Impact Metrics */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {impactMetrics.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-[32px] font-bold text-primary mb-2">{item.metric}</p>
                <p className="text-[15px] font-semibold text-foreground mb-1">{item.label}</p>
                <p className="text-[13px] text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-5">The SolarLive Journey</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              4 years of innovation, growth, and impact—milestone by milestone
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

            <div className="space-y-16">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    idx % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`${idx % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                    {/* Year Badge */}
                    <div className={`inline-flex items-center gap-2 mb-4 bg-primary px-4 py-2 rounded-full ${idx % 2 === 0 ? '' : ''}`}>
                      <Calendar className="w-4 h-4 text-white" />
                      <span className="text-[13px] font-bold text-white uppercase tracking-wider">
                        {milestone.year} {milestone.quarter}
                      </span>
                    </div>

                    <h3 className="text-[28px] font-bold text-foreground mb-4">{milestone.title}</h3>
                    <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                      {milestone.description}
                    </p>

                    {/* Achievements */}
                    <div className={`space-y-2 mb-6 ${idx % 2 === 0 ? 'lg:flex lg:flex-col lg:items-end' : ''}`}>
                      {milestone.achievements.map((achievement, aIdx) => (
                        <div key={aIdx} className={`flex items-center gap-2 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <p className="text-[14px] text-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className={`flex flex-wrap gap-3 ${idx % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      {Object.entries(milestone.metrics).map(([key, value], mIdx) => (
                        <div key={mIdx} className="bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
                          <p className="text-[13px] font-semibold text-primary">
                            {key === 'employees' && '👥 '}
                            {key === 'plants' && '🏭 '}
                            {key === 'capacity' && '⚡ '}
                            {key === 'funding' && '💰 '}
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`${idx % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-primary/10">
                        <ImageWithFallback
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-12 -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growth Chart Visual */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-5">Exponential Growth</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              From 0 to 500+ MW in 4 years—a testament to product-market fit and customer trust
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "4 Years",
                label: "From Founding to 500 MW",
                icon: Rocket,
                color: "from-primary/20 to-orange-500/20"
              },
              {
                metric: "15x",
                label: "Revenue Growth (YoY)",
                icon: TrendingUp,
                color: "from-green-500/20 to-emerald-500/20"
              },
              {
                metric: "95%",
                label: "Customer Retention Rate",
                icon: Target,
                color: "from-blue-500/20 to-indigo-500/20"
              }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-gradient-to-br ${stat.color} border border-primary/20 rounded-2xl p-8 text-center`}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-[42px] font-bold text-foreground mb-2">{stat.metric}</p>
                <p className="text-[15px] font-semibold text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-24 bg-gradient-to-br from-foreground to-[#0A0F1E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-5 bg-primary/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
                <Rocket className="w-3 h-3" />
                WHAT'S NEXT
              </div>
              
              <h2 className="text-white mb-6">The Next Chapter: 1 GW & Beyond</h2>
              <p className="text-[17px] text-white/70 leading-relaxed mb-8">
                We're just getting started. By 2025, we aim to manage 1 GW of solar capacity, expand internationally to 5 countries, and launch revolutionary AI features like blockchain energy trading and quantum-optimized dispatch.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "1 GW under management by end of 2025",
                  "International expansion: Middle East, Africa, SE Asia",
                  "Wind and battery storage integration",
                  "Carbon trading platform launch",
                  "Open-source AI research tools"
                ].map((goal, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-[15px] text-white/90">{goal}</p>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/about/vision" className="inline-flex items-center gap-2">
                  Read Our Vision
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
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
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200"
                  alt="Future of solar monitoring"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Be Part of Our Journey</h2>
            <p className="text-[17px] text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our team, partner with us, or help us manage your solar portfolio
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/about/careers" className="inline-flex items-center gap-2">
                  Join Our Team
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact">
                  Partner With Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
