import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Sun, ArrowRight, Check, Shield, FileText, Database, MapPin, Clock, Award, Users, Smartphone, TrendingUp, Zap, Server } from "lucide-react";

export function PMKusumPage() {
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
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-5 bg-gradient-to-r from-primary/20 to-violet-500/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Sun className="w-3 h-3" />
              GOVERNMENT INITIATIVE MONITORING
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              PM-KUSUM Program Monitoring Solution
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed mb-10">
              Complete MNRE-compliant monitoring and reporting platform for PM-KUSUM Component A, B, and C installations. Streamline subsidy claims, ensure compliance, and maximize benefits for farmers and solar developers.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, metric: "MNRE", label: "Compliant", sublabel: "100% certified" },
                { icon: Users, metric: "1000+", label: "Farmers Served", sublabel: "Across India" },
                { icon: FileText, metric: "Automated", label: "Subsidy Reports", sublabel: "Zero manual work" },
                { icon: Award, metric: "100%", label: "Claim Success", sublabel: "First-time approval" }
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

      {/* Introduction to PM-KUSUM */}
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
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  MNRE Approved Solution
                </span>
              </div>
              <h2 className="mb-6">About PM-KUSUM Yojana</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyaan (PM-KUSUM)</strong> is the Government of India's flagship solar energy program aimed at providing energy and water security to farmers while supporting the nation's commitment to increase renewable energy capacity.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Launched by the Ministry of New and Renewable Energy (MNRE), PM-KUSUM enables farmers to install solar power plants and solar pumps with substantial government subsidies—making clean energy accessible and affordable for agricultural use across India.
              </p>
              
              <div className="bg-muted/40 p-6 rounded-xl border border-border">
                <h3 className="text-[16px] font-bold text-foreground mb-4">Program Scale & Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1 font-semibold">Total Capacity</p>
                    <p className="text-[24px] font-bold text-primary leading-none">30.8 GW</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1 font-semibold">Investment</p>
                    <p className="text-[24px] font-bold text-primary leading-none">₹34,422 Cr</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1 font-semibold">Farmers Benefited</p>
                    <p className="text-[24px] font-bold text-primary leading-none">20 Lakh+</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1 font-semibold">States Covered</p>
                    <p className="text-[24px] font-bold text-primary leading-none">All India</p>
                  </div>
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
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200"
                  alt="PM-KUSUM Solar Farm"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Components of PM-KUSUM */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Three-Pillar Framework
            </p>
            <h2 className="mb-5">PM-KUSUM Program Components</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              The scheme operates through three distinct components, each targeting different aspects of agricultural solar energy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                component: "Component A",
                title: "Ground-Mounted Solar Projects",
                capacity: "500 kW - 2 MW",
                description: "Decentralized ground-mounted solar power plants installed on barren or fallow land within 5 km of electricity substations. Farmers earn additional income by selling solar power to DISCOMs.",
                features: [
                  "10 GW total capacity target",
                  "Power sold to DISCOMs at APPC rates",
                  "Land lease income for farmers",
                  "30% subsidy by MNRE",
                  "Grid-connected installations"
                ],
                icon: Zap
              },
              {
                component: "Component B",
                title: "Standalone Solar Pumps",
                capacity: "7.5 HP",
                description: "Individual solar-powered water pumps for farmers in off-grid or grid-deficient areas, replacing diesel pumps and providing reliable irrigation with zero running costs.",
                features: [
                  "17.5 Lakh pumps target",
                  "60% subsidy from government",
                  "Zero electricity bills",
                  "Off-grid operation",
                  "25-year warranty"
                ],
                icon: Server
              },
              {
                component: "Component C",
                title: "Grid-Connected Pump Solarization",
                capacity: "7.5 HP",
                description: "Solarization of existing grid-connected agricultural pumps, allowing farmers to save on electricity bills and sell surplus solar power back to DISCOMs for additional income.",
                features: [
                  "10 Lakh pumps target",
                  "30% subsidy from MNRE",
                  "Sell surplus power to grid",
                  "Reduced electricity bills",
                  "Feeder-level solarization"
                ],
                icon: TrendingUp
              }
            ].map((component, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white p-8 rounded-2xl border border-border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <component.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-[11px] text-primary font-bold uppercase tracking-wider bg-primary/10 px-3 py-1.5 rounded-full">
                    {component.component}
                  </span>
                </div>
                
                <h3 className="text-[20px] font-bold text-foreground mb-2">{component.title}</h3>
                <p className="text-[13px] text-primary font-semibold mb-4">{component.capacity}</p>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                  {component.description}
                </p>
                
                <div className="space-y-2.5">
                  {component.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-[14px] text-foreground leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How SolarLive Helps - Numbered Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Complete Compliance Solution
            </p>
            <h2 className="mb-5">How SolarLive Enables PM-KUSUM Success</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Our MNRE-compliant platform simplifies monitoring, reporting, and subsidy management for all three PM-KUSUM components
            </p>
          </div>

          <div className="space-y-24">
            {/* 01 - MNRE Compliance */}
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
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000"
                    alt="MNRE Compliance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[72px] font-bold text-primary/20 leading-none">01</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">MNRE-Compliant Monitoring</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  SolarLive meets all MNRE technical specifications and reporting requirements for PM-KUSUM installations. Our platform is approved by multiple State Nodal Agencies (SNAs) and DISCOMs across India, ensuring smooth subsidy processing and compliance verification.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>MNRE specifications:</strong> Fully compliant with technical requirements for data logging and transmission</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>SNA integration:</strong> Direct data sharing with State Nodal Agencies for subsidy verification</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>DISCOM connectivity:</strong> Real-time energy export tracking for Component C installations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Audit trail:</strong> Complete data history for government inspections and compliance audits</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 02 - Subsidy Management */}
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
                      <FileText className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Automated Subsidy Documentation</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Streamline subsidy claims with automated report generation in MNRE-prescribed formats. Our platform generates all required documentation for subsidy application, release tracking, and compliance verification—reducing paperwork and accelerating fund disbursement.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Commissioning reports:</strong> Automatic generation of performance test reports for subsidy claims</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Performance tracking:</strong> Monthly and annual reports showing generation vs. MNRE benchmarks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Energy bill integration:</strong> Track electricity savings and revenue from power sold to grid</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Document repository:</strong> Centralized storage of certificates, approvals, and compliance documents</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1554224311-beee460201f9?w=1000"
                    alt="Documentation Management"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* 03 - Farmer-Friendly Interface */}
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
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000"
                    alt="Mobile App for Farmers"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[72px] font-bold text-primary/20 leading-none">03</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Smartphone className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Farmer-Friendly Mobile App</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Simple, intuitive mobile application designed specifically for farmers—available in Hindi and regional languages. Farmers can monitor their solar system performance, track income from power sales, receive maintenance alerts, and access technical support—all from their smartphone.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Multi-language support:</strong> Hindi, English, and major regional languages with voice guidance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Income tracking:</strong> Real-time visibility of earnings from power generation and sales</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>SMS alerts:</strong> Critical notifications sent via SMS for farmers without internet access</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Helpdesk support:</strong> Toll-free number with multilingual technical support team</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 04 - GenEx Integration */}
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
                      <Database className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">GenEx Platform Integration</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  SolarLive is fully integrated with the <strong className="text-foreground">GenEx</strong> (Generation eXchange) platform—India's centralized data repository for PM-KUSUM installations. Our seamless integration ensures automatic data submission to GenEx, eliminating manual uploads and ensuring real-time compliance with MNRE reporting mandates.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Automatic data sync:</strong> Real-time data transmission to GenEx portal without manual intervention</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>API integration:</strong> Secure, authenticated connection to GenEx servers for data integrity</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Compliance verification:</strong> Automatic validation against MNRE benchmarks and standards</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Multi-state support:</strong> Works across all state-specific GenEx implementations</p>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 p-5 rounded-lg">
                  <p className="text-[13px] text-foreground leading-relaxed">
                    <strong className="text-primary">Note:</strong> GenEx integration is mandatory for all PM-KUSUM installations under revised MNRE guidelines. SolarLive's pre-approved integration ensures your project meets compliance requirements from day one.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000"
                    alt="GenEx Data Integration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Trust SolarLive for PM-KUSUM */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Established & Certified
            </p>
            <h2 className="mb-5">Why PM-KUSUM Developers Trust SolarLive</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              A proven track record of successful PM-KUSUM implementations across multiple states
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "MNRE Approved Vendor",
                description: "Listed as approved monitoring solution vendor by MNRE. Pre-qualified with multiple State Nodal Agencies and DISCOMs for hassle-free project approvals."
              },
              {
                icon: MapPin,
                title: "Multi-State Experience",
                description: "Successfully deployed PM-KUSUM monitoring across Rajasthan, Gujarat, Maharashtra, Karnataka, and 8+ other states. Deep understanding of state-specific requirements."
              },
              {
                icon: Users,
                title: "5,000+ Farmers Served",
                description: "Monitoring over 5,000 PM-KUSUM installations across all three components. Farmers trust our reliable systems and local language support."
              },
              {
                icon: Clock,
                title: "10+ Years in Solar",
                description: "Established in 2015 with extensive experience in government solar programs. We've been monitoring solar assets since the JNNSM era."
              },
              {
                icon: Shield,
                title: "Data Security & Backup",
                description: "Military-grade encryption with redundant data backups. Your compliance data is secure and accessible for 25-year project lifetime."
              },
              {
                icon: TrendingUp,
                title: "Proven ROI Delivery",
                description: "Our clients report 98% subsidy approval rates and 15% faster claim processing due to accurate, compliant documentation."
              }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-border"
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

      {/* State Coverage Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Pan-India Presence
            </p>
            <h2 className="mb-5">PM-KUSUM State Coverage</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Pre-approved and operational in major PM-KUSUM implementing states
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { state: "Rajasthan", projects: "1,200+", capacity: "850 MW" },
              { state: "Gujarat", projects: "800+", capacity: "620 MW" },
              { state: "Maharashtra", projects: "650+", capacity: "480 MW" },
              { state: "Karnataka", projects: "550+", capacity: "390 MW" },
              { state: "Uttar Pradesh", projects: "480+", capacity: "340 MW" },
              { state: "Madhya Pradesh", projects: "420+", capacity: "310 MW" },
              { state: "Tamil Nadu", projects: "380+", capacity: "280 MW" },
              { state: "Punjab", projects: "320+", capacity: "240 MW" }
            ].map((state, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-muted/30 p-6 rounded-xl border border-border hover:border-primary/40 transition-colors duration-300"
              >
                <h3 className="text-[18px] font-bold text-foreground mb-3">{state.state}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-muted-foreground">Projects</span>
                    <span className="text-[15px] font-semibold text-primary">{state.projects}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-muted-foreground">Capacity</span>
                    <span className="text-[15px] font-semibold text-foreground">{state.capacity}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Technical Excellence
            </p>
            <h2 className="mb-5">MNRE-Compliant Technical Specifications</h2>
          </div>

          <div className="bg-white rounded-2xl border border-border p-10">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { param: "Data Logging Interval", value: "5 minutes (MNRE compliant)" },
                { param: "Data Transmission", value: "Real-time via 4G/WiFi/Ethernet" },
                { param: "Data Retention", value: "25 years (full lifecycle)" },
                { param: "Accuracy", value: "±0.5% (Class 1 meters)" },
                { param: "Communication Protocol", value: "Modbus RTU/TCP, RS485" },
                { param: "GenEx Integration", value: "Native API integration" },
                { param: "Inverter Compatibility", value: "All MNRE-approved brands" },
                { param: "Weather Data", value: "GHI, POA, Temp, Wind speed" },
                { param: "Alert Response Time", value: "< 2 minutes" },
                { param: "System Uptime", value: "99.8% SLA guarantee" },
                { param: "Report Formats", value: "MNRE, DISCOM, SNA formats" },
                { param: "Mobile App", value: "iOS, Android with 12+ languages" }
              ].map((spec, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-6 border-b border-border last:border-0">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[15px] font-semibold text-foreground mb-1">{spec.param}</p>
                    <p className="text-[14px] text-muted-foreground">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
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
            <h2 className="text-white mb-6">Ready to Deploy Your PM-KUSUM Project?</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get MNRE-compliant monitoring with GenEx integration—backed by proven expertise across 5,000+ installations
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/solutions">View All Solutions</Link>
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-[13px] text-white/50 mb-4">Approved by State Nodal Agencies</p>
              <div className="flex items-center justify-center gap-8 text-white/40 text-[12px] font-medium">
                <span>Rajasthan SNA</span>
                <span>•</span>
                <span>Gujarat SNA</span>
                <span>•</span>
                <span>Maharashtra SNA</span>
                <span>•</span>
                <span>Karnataka SNA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}