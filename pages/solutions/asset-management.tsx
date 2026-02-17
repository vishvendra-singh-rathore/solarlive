import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Target, ArrowRight, Check, Shield, Clock, FileText, Database, Users, BarChart3, Settings, Calendar, TrendingUp } from "lucide-react";

export function AssetManagementPage() {
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
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-5">
              Complete Lifecycle Management Platform
            </p>
            <h1 className="mb-6">Solar Asset Management</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              Comprehensive asset management solution that maximizes the value of your solar investments from commissioning to decommissioning. Track performance, manage maintenance, and ensure long-term reliability of your solar portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Value Proposition with Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Complete Asset Control
                </span>
              </div>
              <h2 className="mb-6">Manage Every Aspect of Your Solar Assets</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                SolarLive's Asset Management platform provides complete visibility and control over your solar infrastructure. From tracking equipment warranties to managing preventive maintenance schedules, our system ensures your assets deliver maximum value throughout their operational lifetime.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Built for solar asset owners, fund managers, and portfolio operators who need a single source of truth for asset health, financial performance, and operational efficiency across multiple sites.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-muted/40 p-5 rounded-lg">
                  <p className="text-[32px] font-bold text-primary leading-none mb-2">25+</p>
                  <p className="text-[13px] text-muted-foreground">Years Asset Tracking</p>
                </div>
                <div className="bg-muted/40 p-5 rounded-lg">
                  <p className="text-[32px] font-bold text-primary leading-none mb-2">99.2%</p>
                  <p className="text-[13px] text-muted-foreground">Data Availability</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?w=1200"
                  alt="Solar Asset Management"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Database className="w-5 h-5 text-primary" />
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                    Portfolio Value
                  </p>
                </div>
                <p className="text-[28px] font-bold text-foreground leading-none mb-1">500+ MW</p>
                <p className="text-[13px] text-primary font-medium">Under Management</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Help Manage Assets - Numbered Sections */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Comprehensive Asset Management
            </p>
            <h2 className="mb-5">How SolarLive Helps Manage Your Solar Assets</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              A complete platform that covers every aspect of solar asset lifecycle management, from installation documentation to long-term performance tracking.
            </p>
          </div>

          <div className="space-y-24">
            {/* 01 - Asset Documentation & Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000"
                    alt="Asset Documentation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[72px] font-bold text-primary/20 leading-none">01</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Complete Asset Documentation</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Maintain comprehensive digital records of every asset in your solar portfolio. From commissioning certificates to equipment specifications, warranty documents to maintenance histories—everything is centralized, searchable, and accessible.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Equipment registry:</strong> Complete inventory of modules, inverters, transformers, and all BOS components</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Warranty tracking:</strong> Automated alerts for warranty expiration and claim documentation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Technical specifications:</strong> Datasheets, performance curves, and commissioning test reports</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Compliance documents:</strong> Permits, grid approvals, and regulatory compliance certificates</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 02 - Performance Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[72px] font-bold text-primary/20 leading-none">02</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Lifetime Performance Tracking</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Track the performance of every asset throughout its operational lifetime. Our platform automatically calculates degradation rates, compares actual performance against manufacturer warranties, and provides early warnings of underperforming equipment.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Degradation analysis:</strong> Automatic calculation of module and system degradation rates</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Warranty validation:</strong> Compare actual performance against manufacturer performance guarantees</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Asset health scoring:</strong> AI-powered health scores for equipment replacement planning</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Historical comparisons:</strong> Year-over-year performance trends and seasonal variations</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000"
                    alt="Performance Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* 03 - Maintenance Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1000"
                    alt="Maintenance Management"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[72px] font-bold text-primary/20 leading-none">03</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Preventive Maintenance Scheduling</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Proactive maintenance scheduling based on equipment age, operating hours, and manufacturer recommendations. Automated work orders, spare parts management, and maintenance history tracking ensure your assets remain in peak condition.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Automated scheduling:</strong> Rule-based maintenance calendars for cleaning, inspections, and service</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Work order management:</strong> Digital work orders with mobile app access for field technicians</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Spare parts inventory:</strong> Track spare parts usage, reorder points, and supplier information</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Vendor management:</strong> Contractor performance tracking and service agreement monitoring</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 04 - Financial Asset Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[72px] font-bold text-primary/20 leading-none">04</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Financial Performance & Reporting</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Connect technical performance to financial outcomes. Track revenue generation, calculate actual vs. projected returns, and generate comprehensive reports for investors, lenders, and stakeholders with complete transparency.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Revenue tracking:</strong> Energy generation translated to revenue with tariff and incentive calculations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>OPEX management:</strong> Track maintenance costs, insurance, and operational expenses per MW</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>ROI analysis:</strong> Actual return on investment vs. projected IRR and NPV calculations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Investor reporting:</strong> Automated monthly and quarterly reports with financial KPIs</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000"
                    alt="Financial Tracking"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Trust SolarLive */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Industry Leadership
            </p>
            <h2 className="mb-5">Why Leading Solar Asset Owners Trust SolarLive</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Built on a foundation of reliability, security, and deep solar industry expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Enterprise-Grade Security",
                description: "ISO 27001 certified infrastructure with bank-level encryption. Role-based access control and complete audit trails for regulatory compliance."
              },
              {
                icon: Clock,
                title: "99.8% System Uptime",
                description: "Redundant cloud architecture with automatic failover. Your asset data is always accessible when you need it, guaranteed by our SLA."
              },
              {
                icon: Database,
                title: "25-Year Data Retention",
                description: "Long-term data storage matching solar asset lifetime. Historical data for warranty claims, performance analysis, and asset valuation."
              },
              {
                icon: Users,
                title: "Dedicated Support Team",
                description: "24/7 technical support with solar industry experts. Dedicated account managers for enterprise clients and customization support."
              },
              {
                icon: Calendar,
                title: "Proven Track Record",
                description: "Managing 500+ MW of solar assets across India. Trusted by leading IPPs, utilities, and commercial solar operators since 2015."
              },
              {
                icon: Settings,
                title: "Continuous Innovation",
                description: "Regular platform updates with new features. AI-powered analytics and integration with emerging solar technologies."
              }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-muted/20 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-[18px] font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Measurable Impact
            </p>
            <h2 className="mb-5">Asset Management Benefits</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Quantifiable improvements in asset performance and operational efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                metric: "30%",
                label: "Reduced Admin Time",
                description: "Automated reporting and documentation"
              },
              {
                metric: "15%",
                label: "Lower Maintenance Costs",
                description: "Proactive scheduling and spare parts management"
              },
              {
                metric: "98%",
                label: "Documentation Completeness",
                description: "Full asset history and compliance records"
              },
              {
                metric: "2-4%",
                label: "Extended Asset Life",
                description: "Through optimized maintenance strategies"
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-border text-center hover:border-primary/40 transition-colors duration-300"
              >
                <p className="text-[48px] font-bold text-primary leading-none mb-3">{benefit.metric}</p>
                <p className="text-[16px] font-semibold text-foreground mb-2">{benefit.label}</p>
                <p className="text-[14px] text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(214,117,6,0.12),transparent_60%)]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Ready to Transform Your Solar Asset Management?</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              See how SolarLive's comprehensive platform can maximize the value and performance of your solar portfolio
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/solutions">View All Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
