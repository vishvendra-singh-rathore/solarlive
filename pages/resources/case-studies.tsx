import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { BookOpen, ArrowRight, TrendingUp, Zap, Building2, MapPin, Calendar, Users, Target, CheckCircle, BarChart3, Clock } from "lucide-react";

export function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "150 MW Portfolio: 40% Downtime Reduction with Predictive Maintenance",
      client: "Renewable Energy IPP",
      location: "Rajasthan, India",
      capacity: "150 MW",
      duration: "18 Months",
      category: "Predictive Maintenance",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200",
      challenge: "Large utility-scale portfolio experiencing frequent inverter failures causing 12-15 days of unplanned downtime annually. Emergency repairs costing ₹30-40 lakh monthly. No visibility into equipment health patterns.",
      solution: "Deployed SolarLive's Predictive Analysis AI across all 150 MW. ML models trained on inverter telemetry identified failure patterns 60-90 days in advance. Maintenance shifted from reactive to proactive scheduling.",
      results: [
        { metric: "40%", label: "Downtime Reduction", desc: "From 15 days to 9 days annually" },
        { metric: "₹4.2 Cr", label: "Annual Savings", desc: "Reduced emergency repairs and lost revenue" },
        { metric: "92%", label: "Prediction Accuracy", desc: "Successfully forecasted 92% of failures" },
        { metric: "3.2%", label: "PR Improvement", desc: "From 78.5% to 81.7% performance ratio" }
      ],
      testimonial: {
        quote: "SolarLive's predictive maintenance transformed our O&M approach. We now fix issues before they cause outages, saving millions in lost revenue.",
        author: "VP of Operations",
        company: "Leading Renewable IPP"
      }
    },
    {
      id: 2,
      title: "100 MW Plant: ₹1.8 Cr Annual Savings from Soiling Optimization",
      client: "Utility-Scale Developer",
      location: "Gujarat, India",
      capacity: "100 MW",
      duration: "12 Months",
      category: "Soiling Detection",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200",
      challenge: "Fixed 30-day cleaning schedule resulting in either over-cleaning (wasting ₹8-10 lakh monthly) or under-cleaning (losing generation). No data-driven approach to optimize cleaning ROI.",
      solution: "Implemented SolarLive's Soiling Loss Detection with rain forecast integration. AI detected soiling losses as small as 2-3% and recommended optimal cleaning timing based on ROI calculations.",
      results: [
        { metric: "₹1.8 Cr", label: "Annual Savings", desc: "Reduced cleaning frequency by 35%" },
        { metric: "45%", label: "Cost Reduction", desc: "Fewer cleaning cycles with better timing" },
        { metric: "2.1%", label: "Generation Gain", desc: "Cleaning at optimal times improved output" },
        { metric: "7-Day", label: "Rain Integration", desc: "Avoided cleaning before rainfall" }
      ],
      testimonial: {
        quote: "We were cleaning too often in some months and not enough in others. SolarLive's AI found the sweet spot, saving us lakhs monthly.",
        author: "Site Manager",
        company: "100 MW Solar Plant"
      }
    },
    {
      id: 3,
      title: "50 MW Portfolio: Grid Compliance & Penalty Avoidance",
      client: "Independent Power Producer",
      location: "Maharashtra, India",
      capacity: "50 MW",
      duration: "24 Months",
      category: "SCADA & Forecasting",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200",
      challenge: "Facing ₹8-12 lakh monthly penalties for day-ahead forecast deviations >15%. Manual SLDC coordination causing compliance issues. Lack of real-time grid communication.",
      solution: "Deployed SolarLive's Energy Forecasting (90%+ accuracy) and DNP3 SCADA integration for automated SLDC communication. Real-time telemetry and automated day-ahead scheduling.",
      results: [
        { metric: "Zero", label: "Penalties (18 Mo)", desc: "No deviation penalties in 18 months" },
        { metric: "₹2.1 Cr", label: "Penalty Savings", desc: "Avoided forecast deviation charges" },
        { metric: "91%", label: "Forecast Accuracy", desc: "Consistently under 10% deviation" },
        { metric: "<500ms", label: "SCADA Latency", desc: "Real-time grid command response" }
      ],
      testimonial: {
        quote: "SLDC integration was complex, but SolarLive handled everything. No more penalties, automated reporting—complete peace of mind.",
        author: "Director of Operations",
        company: "Regional IPP"
      }
    },
    {
      id: 4,
      title: "200 MW Multi-Site: Centralized Portfolio Management",
      client: "Renewable Energy Corporation",
      location: "Pan-India (6 States)",
      capacity: "200 MW",
      duration: "Ongoing (2+ Years)",
      category: "Portfolio Management",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200",
      challenge: "Managing 12 plants across 6 states with disparate monitoring systems. No unified visibility. Site managers using different tools, making portfolio-level decisions impossible.",
      solution: "Migrated all 12 plants to SolarLive platform. Unified dashboard providing fleet-wide visibility, benchmarking, and centralized alarming. Mobile app for on-site teams.",
      results: [
        { metric: "12 Sites", label: "Unified Platform", desc: "Single pane of glass for entire portfolio" },
        { metric: "60%", label: "Faster Response", desc: "Centralized alarming reduced reaction time" },
        { metric: "₹3.5 Cr", label: "O&M Optimization", desc: "Better resource allocation across sites" },
        { metric: "85%", label: "Team Efficiency", desc: "Standardized workflows saved time" }
      ],
      testimonial: {
        quote: "Before SolarLive, managing 12 plants meant 12 different systems. Now we have one unified view—game-changing for portfolio operations.",
        author: "CTO",
        company: "200 MW Portfolio Owner"
      }
    },
    {
      id: 5,
      title: "75 MW Plant: 5% PR Improvement Through String-Level Analytics",
      client: "EPC Contractor (O&M Contract)",
      location: "Karnataka, India",
      capacity: "75 MW",
      duration: "15 Months",
      category: "Performance Optimization",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200",
      challenge: "Plant PR stuck at 76-77% despite no major equipment failures. Client threatening O&M contract termination due to underperformance. Unable to identify root causes.",
      solution: "SolarLive's string-level monitoring and thermal imaging integration identified 850+ underperforming strings, 45 failed bypass diodes, and tracker calibration issues across 3 blocks.",
      results: [
        { metric: "5.2%", label: "PR Improvement", desc: "From 76.8% to 82% performance ratio" },
        { metric: "850+", label: "Strings Fixed", desc: "Identified and repaired underperformers" },
        { metric: "₹6.5 Cr", label: "Revenue Recovery", desc: "Annual revenue increase from PR gain" },
        { metric: "Contract", label: "Renewed 5 Years", desc: "Client extended O&M contract" }
      ],
      testimonial: {
        quote: "SolarLive's analytics found issues we never knew existed. We went from contract risk to a 5-year renewal—completely turned around our relationship.",
        author: "O&M Head",
        company: "National EPC Contractor"
      }
    },
    {
      id: 6,
      title: "40 MW Plant: 30% O&M Cost Reduction via Maintenance Intelligence",
      client: "Solar Asset Owner",
      location: "Andhra Pradesh, India",
      capacity: "40 MW",
      duration: "12 Months",
      category: "Maintenance Intelligence",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200",
      challenge: "Fixed calendar-based maintenance resulting in unnecessary preventive work. O&M costs at ₹22 lakh/month (₹2.64 Cr annually) for 40 MW—significantly above industry benchmark.",
      solution: "Implemented SolarLive's Maintenance Intelligence AI for ROI-based maintenance scheduling, automated work orders, and weather-aware planning. Eliminated unnecessary preventive tasks.",
      results: [
        { metric: "32%", label: "Cost Reduction", desc: "From ₹2.64 Cr to ₹1.79 Cr annually" },
        { metric: "₹85 L", label: "Annual Savings", desc: "Eliminated wasteful maintenance cycles" },
        { metric: "40%", label: "Less Downtime", desc: "Maintenance during low-generation windows" },
        { metric: "ROI-Based", label: "Prioritization", desc: "High-impact tasks first, batch low-priority" }
      ],
      testimonial: {
        quote: "We were doing maintenance because 'the calendar said so.' Now every task is justified by ROI. Costs down 32%, performance up.",
        author: "Plant Manager",
        company: "40 MW Solar Facility"
      }
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-foreground py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-5 bg-primary/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <BookOpen className="w-3 h-3" />
              SUCCESS STORIES
            </div>
            
            <h1 className="mb-6">Case Studies</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              Real-world results from solar operators using SolarLive—₹50+ crore in annual savings, 40% downtime reduction, 95%+ availability achieved across 500+ MW.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-orange-600/10 border-y border-primary/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "500+", label: "MW Managed" },
              { metric: "₹50+ Cr", label: "Annual Savings" },
              { metric: "40%", label: "Downtime Cut" },
              { metric: "95%+", label: "Availability" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="text-[32px] font-bold text-primary mb-1">{stat.metric}</p>
                <p className="text-[13px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, idx) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      <p className="text-[11px] font-bold text-primary uppercase tracking-wider">
                        {study.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-6 text-[13px] text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {study.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-4 h-4" />
                        {study.capacity}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {study.duration}
                      </div>
                    </div>
                  </div>
                  <h2 className="text-[32px] font-bold text-foreground leading-tight mb-3">
                    {study.title}
                  </h2>
                  <p className="text-[15px] text-muted-foreground">{study.client}</p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  {/* Image */}
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-primary/10">
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[16px] font-bold text-foreground mb-3 uppercase tracking-wider">
                        The Challenge
                      </h3>
                      <p className="text-[15px] text-muted-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div className="h-px bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />
                    
                    <div>
                      <h3 className="text-[16px] font-bold text-foreground mb-3 uppercase tracking-wider">
                        The Solution
                      </h3>
                      <p className="text-[15px] text-muted-foreground leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="mb-12">
                  <h3 className="text-[18px] font-bold text-foreground mb-6 uppercase tracking-wider">
                    Results Achieved
                  </h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    {study.results.map((result, rIdx) => (
                      <div
                        key={rIdx}
                        className="bg-gradient-to-br from-muted/50 to-white border border-primary/10 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                      >
                        <p className="text-[36px] font-bold text-primary mb-2">{result.metric}</p>
                        <p className="text-[14px] font-semibold text-foreground mb-1">{result.label}</p>
                        <p className="text-[12px] text-muted-foreground">{result.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-foreground text-white rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-[17px] text-white/90 leading-relaxed italic mb-4">
                          "{study.testimonial.quote}"
                        </p>
                        <p className="text-[14px] font-semibold text-white">{study.testimonial.author}</p>
                        <p className="text-[13px] text-white/60">{study.testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {idx < caseStudies.length - 1 && (
                  <div className="mt-24 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                )}
              </motion.article>
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
            <h2 className="text-white mb-6">Achieve Similar Results at Your Plant</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 500+ MW of solar capacity achieving 40% downtime reduction and ₹50+ crore annual savings
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/resources/downloads">
                  Download Case Studies PDF
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
