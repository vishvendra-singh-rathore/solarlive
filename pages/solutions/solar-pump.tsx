import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Droplets, ArrowRight, Check, Shield, Smartphone, Sun, Zap, Clock, Award, Users, TrendingUp, Database, IndianRupee, Wifi, Bell, MapPin } from "lucide-react";

export function SolarPumpPage() {
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
              <Droplets className="w-3 h-3" />
              AGRICULTURAL WATER MANAGEMENT
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Solar Pump Monitoring & Control
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed mb-10">
              Complete remote monitoring and control solution for solar agricultural pumps. Track performance, control operations, and ensure reliable irrigation with real-time data—helping farmers maximize water delivery and pump lifespan.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Sun, metric: "100%", label: "Solar Powered", sublabel: "Zero diesel cost" },
                { icon: Smartphone, metric: "Remote", label: "Pump Control", sublabel: "From anywhere" },
                { icon: Droplets, metric: "Real-Time", label: "Water Flow", sublabel: "Instant data" },
                { icon: IndianRupee, metric: "₹50K/year", label: "Savings", sublabel: "vs diesel pumps" }
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

      {/* Introduction to Solar Pumps */}
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
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Sustainable Agriculture
                </span>
              </div>
              <h2 className="mb-6">The Solar Pump Revolution in Indian Agriculture</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                Solar-powered water pumps are transforming Indian agriculture by eliminating the dependence on expensive diesel or unreliable grid electricity. With <strong className="text-foreground">zero running costs</strong> and <strong className="text-foreground">25+ year lifespan</strong>, solar pumps provide reliable irrigation while helping farmers save lakhs of rupees over the pump's lifetime.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                The Government of India supports solar pump adoption through the <strong className="text-foreground">PM-KUSUM Yojana</strong>, offering subsidies of up to 90% on solar pump systems. This makes solar pumps affordable for even small and marginal farmers across the country.
              </p>
              
              <div className="bg-muted/40 p-6 rounded-xl border border-border">
                <h3 className="text-[16px] font-bold text-foreground mb-4">Why Farmers Choose Solar Pumps</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Zero electricity bills:</strong> No monthly costs for pumping water</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Reliable water supply:</strong> Pump water even during power cuts</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Low maintenance:</strong> Minimal upkeep compared to diesel pumps</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Government subsidy:</strong> Up to 90% subsidy under PM-KUSUM</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Environmental benefit:</strong> Clean energy with zero pollution</p>
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
                  alt="Solar Pump in Agricultural Field"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <IndianRupee className="w-5 h-5 text-primary" />
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                    Annual Savings
                  </p>
                </div>
                <p className="text-[28px] font-bold text-foreground leading-none mb-1">₹60,000</p>
                <p className="text-[13px] text-primary font-medium">vs Diesel Pump</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PM-KUSUM Solar Pump Schemes */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Government Support
            </p>
            <h2 className="mb-5">PM-KUSUM Solar Pump Schemes</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Two subsidy components under PM-KUSUM specifically designed for farmers' irrigation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                component: "Component B",
                title: "Standalone Solar Pumps",
                capacity: "Up to 7.5 HP",
                description: "Individual solar-powered water pumps for farmers in off-grid or grid-deficient areas. Perfect for remote farmlands with no electricity access or unreliable power supply.",
                subsidy: "60% Government",
                farmerCost: "30% Farmer",
                loanCost: "10% Loan",
                features: [
                  "17.5 Lakh pumps target under PM-KUSUM",
                  "Completely off-grid operation",
                  "No electricity bills ever",
                  "Ideal for remote agricultural areas",
                  "Subsidy: 30% Central + 30% State",
                  "Works even without any power lines"
                ],
                icon: Sun,
                popular: true
              },
              {
                component: "Component C",
                title: "Grid-Connected Pump Solarization",
                capacity: "Up to 7.5 HP",
                description: "Convert existing grid-connected agricultural pumps to solar-powered systems. Farmers save on electricity bills and can sell surplus solar power back to DISCOMs for additional income.",
                subsidy: "30% Government",
                farmerCost: "60% Farmer",
                loanCost: "10% Loan",
                features: [
                  "10 Lakh pumps target under PM-KUSUM",
                  "Solarize existing pumps",
                  "Sell surplus power to grid",
                  "Dual benefit: savings + income",
                  "Net metering connectivity",
                  "Reduced dependence on grid power"
                ],
                icon: Zap
              }
            ].map((scheme, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`bg-white p-8 rounded-2xl border-2 hover:shadow-xl transition-all duration-300 relative ${
                  scheme.popular ? 'border-primary' : 'border-border'
                }`}
              >
                {scheme.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                      Most Common
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <scheme.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-[11px] text-primary font-bold uppercase tracking-wider bg-primary/10 px-3 py-1.5 rounded-full">
                    {scheme.component}
                  </span>
                </div>
                
                <h3 className="text-[20px] font-bold text-foreground mb-2">{scheme.title}</h3>
                <p className="text-[13px] text-primary font-semibold mb-4">{scheme.capacity}</p>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                  {scheme.description}
                </p>
                
                {/* Subsidy Breakdown */}
                <div className="bg-primary/5 p-5 rounded-xl mb-6">
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-3 font-semibold">Cost Structure</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[14px] text-foreground">{scheme.subsidy}</span>
                      <span className="text-[14px] font-semibold text-primary">Subsidy</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[14px] text-foreground">{scheme.farmerCost}</span>
                      <span className="text-[14px] font-semibold text-foreground">Farmer Payment</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[14px] text-foreground">{scheme.loanCost}</span>
                      <span className="text-[14px] font-semibold text-muted-foreground">Bank Loan</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2.5">
                  {scheme.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-[14px] text-foreground leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-border">
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Note:</strong> Both schemes are part of PM-KUSUM Yojana and require MNRE-compliant monitoring systems. SolarLive is pre-approved for both Component B and Component C installations across all states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How SolarLive Helps - Numbered Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Smart Monitoring Solution
            </p>
            <h2 className="mb-5">How SolarLive Transforms Solar Pump Management</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              From remote control to performance analytics to preventive maintenance—complete visibility and control of your solar pump installations
            </p>
          </div>

          <div className="space-y-24">
            {/* 01 - Remote Monitoring & Control */}
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
                    alt="Remote Pump Control"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[72px] font-bold text-primary/20 leading-none">01</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Smartphone className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Remote Pump Start/Stop Control</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Control your solar pump from anywhere using the SolarLive mobile app. Start or stop pumping operations remotely—no need to travel to the field. Perfect for farmers managing multiple pumps across different locations or those living far from their farmland.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>One-touch control:</strong> Start/stop pumps instantly from your mobile phone</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Scheduled operation:</strong> Set automatic start/stop times based on irrigation needs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Multi-pump management:</strong> Control multiple pumps from single dashboard</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Works without internet:</strong> SMS-based control option for areas with poor connectivity</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 02 - Real-Time Performance Tracking */}
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
                      <h3 className="text-[24px]">Real-Time Performance Monitoring</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Track pump performance metrics in real-time—water discharge rate, power consumption, daily operating hours, and cumulative water delivered. Identify underperformance issues immediately and ensure optimal irrigation efficiency throughout the crop season.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Water delivery tracking:</strong> Monitor total water pumped daily, weekly, and seasonally</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Motor health monitoring:</strong> Track voltage, current, and motor temperature to detect issues early</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Solar panel performance:</strong> Ensure panels are generating expected power output</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Historical data:</strong> Compare performance across days, months, and years</p>
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

            {/* 03 - Instant SMS Alerts */}
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
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000"
                    alt="SMS Alerts"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[72px] font-bold text-primary/20 leading-none">03</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Bell className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Instant SMS & Mobile Alerts</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Get instant SMS alerts when your pump stops working, performance drops, or maintenance is needed. SolarLive's alert system works even in areas without internet connectivity, ensuring farmers are always informed about their pump status—critical for time-sensitive irrigation.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Pump stopped alert:</strong> Immediate notification if pump stops unexpectedly</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Low performance warning:</strong> Alerts when water delivery drops below expected levels</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Motor issue detection:</strong> Early warning for overheating or electrical problems</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>No internet required:</strong> SMS alerts work on basic mobile phones without data connection</p>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 p-5 rounded-lg">
                  <p className="text-[13px] text-foreground leading-relaxed">
                    <strong className="text-primary">Farmer-Friendly:</strong> All alerts available in Hindi, Marathi, Gujarati, and 8+ regional languages—making it accessible for farmers across India.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 04 - MNRE Compliance & Subsidy Support */}
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
                      <Shield className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">MNRE Compliance & Subsidy Documentation</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  SolarLive is MNRE-approved for PM-KUSUM Component B and C monitoring. Our platform automatically generates all required compliance reports and performance certificates needed for subsidy claims—simplifying the documentation process for farmers and ensuring timely subsidy release from state agencies.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>MNRE-approved vendor:</strong> Pre-qualified monitoring solution for PM-KUSUM installations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Auto-generated reports:</strong> Commissioning and performance reports in prescribed formats</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>GenEx integration:</strong> Direct data submission to government portals for compliance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>25-year data retention:</strong> Complete audit trail maintained for entire pump lifetime</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000"
                    alt="MNRE Compliance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Farmers Trust SolarLive */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Established & Trusted
            </p>
            <h2 className="mb-5">Why Farmers & Installers Trust SolarLive</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Over a decade of experience monitoring solar pumps across India's diverse agricultural landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "10+ Years in Solar",
                description: "Established in 2015, we've been monitoring solar pumps since the early days of agricultural solar adoption in India. Deep understanding of farmer needs."
              },
              {
                icon: MapPin,
                title: "Pan-India Presence",
                description: "Monitoring solar pumps across all states—from Punjab's wheat fields to Tamil Nadu's rice paddies. Proven reliability in diverse climates."
              },
              {
                icon: Users,
                title: "22,000+ Pumps Monitored",
                description: "Trusted by thousands of farmers and 150+ solar pump installers for reliable, accurate monitoring across Components B and C of PM-KUSUM."
              },
              {
                icon: Smartphone,
                title: "Works Without Internet",
                description: "Designed for rural India with SMS alerts and offline functionality. No smartphone or data connection required for critical pump control."
              },
              {
                icon: Shield,
                title: "99.8% Uptime Guarantee",
                description: "Our monitoring infrastructure operates with carrier-grade reliability. Your pump data is always accessible when you need it."
              },
              {
                icon: Clock,
                title: "24/7 Farmer Helpline",
                description: "Toll-free support in Hindi and regional languages. Real humans answering farmer queries—not automated bots."
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

      {/* Key Features Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Complete Feature Set
            </p>
            <h2 className="mb-5">Everything You Need to Monitor Solar Pumps</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: "Remote Start/Stop", desc: "Control from anywhere" },
              { feature: "Water Delivery Tracking", desc: "Liters pumped per day" },
              { feature: "Motor Health Monitoring", desc: "Voltage, current, temp" },
              { feature: "SMS Alerts", desc: "Works without internet" },
              { feature: "Solar Panel Performance", desc: "Power generation tracking" },
              { feature: "Scheduled Operations", desc: "Auto start/stop times" },
              { feature: "Multi-Pump Dashboard", desc: "Manage multiple pumps" },
              { feature: "Historical Analytics", desc: "Performance trends" },
              { feature: "MNRE Reports", desc: "Auto-generated compliance" },
              { feature: "Multi-Language App", desc: "Hindi + 10 languages" },
              { feature: "Toll-Free Support", desc: "24/7 farmer helpline" },
              { feature: "Lifetime Monitoring", desc: "No annual fees" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-muted/30 p-5 rounded-xl border border-border hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-3 mb-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[15px] font-semibold text-foreground mb-1">{item.feature}</p>
                    <p className="text-[13px] text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Proven Impact
            </p>
            <h2 className="mb-5">Solar Pump Monitoring at Scale</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { stat: "22,000+", label: "Pumps Monitored", desc: "Across India" },
              { stat: "15 States", label: "Geographic Coverage", desc: "All major agricultural regions" },
              { stat: "850 Cr Liters", label: "Water Delivered", desc: "Tracked annually" },
              { stat: "₹45 Cr+", label: "Subsidy Approved", desc: "PM-KUSUM claims processed" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-border text-center hover:border-primary/40 transition-colors duration-300"
              >
                <p className="text-[48px] font-bold text-primary leading-none mb-3">{stat.stat}</p>
                <p className="text-[16px] font-semibold text-foreground mb-2">{stat.label}</p>
                <p className="text-[14px] text-muted-foreground">{stat.desc}</p>
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
            <h2 className="text-white mb-6">Ready to Monitor Your Solar Pumps?</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 22,000+ farmers using SolarLive for reliable solar pump monitoring and control
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/solutions/pm-kusum">Learn About PM-KUSUM</Link>
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-[13px] text-white/50 mb-4">Trusted by Leading Solar Pump Installers</p>
              <div className="flex items-center justify-center gap-8 text-white/40 text-[12px] font-medium">
                <span>Shakti Pumps</span>
                <span>•</span>
                <span>Tata Power Solar</span>
                <span>•</span>
                <span>Waaree Energies</span>
                <span>•</span>
                <span>150+ Installers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}