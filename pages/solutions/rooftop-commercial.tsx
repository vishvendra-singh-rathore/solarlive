import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Building2, ArrowRight, Check, Smartphone, Zap, Cloud, Clock, Shield, BarChart3, Settings, Wifi, Battery, TrendingUp, Users } from "lucide-react";

export function RooftopCommercialPage() {
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
              <Building2 className="w-3 h-3" />
              RESIDENTIAL & COMMERCIAL SYSTEMS
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Rooftop Solar Monitoring Made Simple
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed mb-10">
              Complete monitoring solution for rooftop solar installations—from residential homes to commercial buildings. Track performance, maximize savings, and maintain your investment with confidence.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, metric: "1 kW - 500 kW", label: "System Size", sublabel: "Any rooftop scale" },
                { icon: Smartphone, metric: "Mobile-First", label: "Easy Access", sublabel: "iOS & Android" },
                { icon: Clock, metric: "15 min", label: "Quick Setup", sublabel: "Plug & monitor" },
                { icon: Shield, metric: "₹10K/year", label: "Saves", sublabel: "Prevent losses" }
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
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Complete Rooftop Solution
                </span>
              </div>
              <h2 className="mb-6">Simple, Reliable Rooftop Solar Monitoring</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                SolarLive makes rooftop solar monitoring effortless—whether you're a homeowner with a 5 kW system or a commercial enterprise managing 50 rooftop installations across multiple locations. Get complete visibility into your solar performance with plug-and-play installation that takes less than 30 minutes.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Our cloud-based platform works seamlessly with any inverter brand, requires no complex wiring, and provides real-time insights through intuitive mobile apps that anyone can use—no technical expertise required.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-muted/40 p-5 rounded-lg">
                  <p className="text-[32px] font-bold text-primary leading-none mb-2">&lt;30 min</p>
                  <p className="text-[13px] text-muted-foreground">Setup Time</p>
                </div>
                <div className="bg-muted/40 p-5 rounded-lg">
                  <p className="text-[32px] font-bold text-primary leading-none mb-2">10,000+</p>
                  <p className="text-[13px] text-muted-foreground">Systems Monitored</p>
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
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200"
                  alt="Rooftop Solar Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                    Energy Today
                  </p>
                </div>
                <p className="text-[28px] font-bold text-foreground leading-none mb-1">47.3 kWh</p>
                <p className="text-[13px] text-primary font-medium">₹356 saved</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How SolarLive Makes It Easy - Numbered Sections */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Simple & Powerful
            </p>
            <h2 className="mb-5">How SolarLive Makes Rooftop Solar Easy</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              From installation to daily monitoring to long-term maintenance—we've simplified every aspect of rooftop solar management.
            </p>
          </div>

          <div className="space-y-24">
            {/* 01 - Easy Installation */}
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
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1000"
                    alt="Easy Installation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[72px] font-bold text-primary/20 leading-none">01</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Settings className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Plug-and-Play Installation</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  No complex wiring or technical configuration required. Our smart data loggers connect directly to your inverter and start transmitting data to the cloud within minutes. Compatible with 100+ inverter brands—simply plug in, connect to WiFi or 4G, and you're done.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Universal compatibility:</strong> Works with any inverter brand—Sungrow, Growatt, Huawei, SMA, Delta, and more</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Zero configuration:</strong> Auto-detects inverter model and parameters—no manual setup needed</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Multiple connectivity options:</strong> WiFi, 4G LTE, or Ethernet—choose what works best for you</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Compact design:</strong> Small, weatherproof device that mounts near your inverter</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 02 - Mobile App */}
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
                      <Smartphone className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Intuitive Mobile & Web Apps</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Monitor your solar performance from anywhere with our beautifully designed mobile apps for iOS and Android. Track real-time generation, daily/monthly energy production, savings, and system health—all in a clean, easy-to-understand interface.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Live dashboard:</strong> Real-time power generation, daily yield, and savings in rupees</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Historical graphs:</strong> Visualize performance trends over days, months, and years</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Instant alerts:</strong> Push notifications for system issues or performance drops</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Family sharing:</strong> Multiple users can access the same system with role-based permissions</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000"
                    alt="Mobile App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* 03 - Automatic Maintenance Alerts */}
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
                    alt="Maintenance Monitoring"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[72px] font-bold text-primary/20 leading-none">03</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <h3 className="text-[24px]">Smart Maintenance Management</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  SolarLive automatically monitors your system health and alerts you when maintenance is needed. Our intelligent algorithms detect performance drops, inverter faults, and cleaning requirements—so you can act before small issues become expensive problems.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Fault detection:</strong> Automatic alerts for inverter errors, grid disconnections, or system failures</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Cleaning reminders:</strong> AI-powered recommendations for optimal panel cleaning schedules</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Performance tracking:</strong> Compare your system against expected generation to identify issues</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Service history:</strong> Track all maintenance activities and warranty information in one place</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 04 - Commercial Portfolio Management */}
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
                      <h3 className="text-[24px]">Multi-Site Portfolio Management</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  For businesses with multiple rooftop installations, SolarLive provides consolidated portfolio management. Monitor all your sites from a single dashboard, compare performance across locations, and generate comprehensive sustainability reports for stakeholders.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Unified dashboard:</strong> View aggregate performance across all your rooftop installations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Site comparison:</strong> Benchmark performance across locations to identify optimization opportunities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Sustainability reporting:</strong> Automated reports showing CO₂ reduction and environmental impact</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Team access:</strong> Role-based permissions for facility managers, finance teams, and executives</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000"
                    alt="Portfolio Dashboard"
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
              Trusted by Thousands
            </p>
            <h2 className="mb-5">Why Rooftop Solar Owners Trust SolarLive</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Reliability, security, and support you can count on for the lifetime of your solar investment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Bank-Grade Security",
                description: "Your data is encrypted and stored on secure cloud servers. We never sell or share your information. GDPR compliant with complete data privacy."
              },
              {
                icon: Cloud,
                title: "99.9% Cloud Uptime",
                description: "Enterprise-grade infrastructure ensures your data is always accessible. Automatic backups and redundancy protect against any data loss."
              },
              {
                icon: Battery,
                title: "25-Year Data Storage",
                description: "We store your performance data for the entire lifetime of your solar system—critical for warranty claims and system valuation."
              },
              {
                icon: Wifi,
                title: "Works Everywhere",
                description: "Low-bandwidth operation works even in areas with poor connectivity. Automatic data sync when connection is restored."
              },
              {
                icon: Users,
                title: "Expert Support Team",
                description: "Chat, email, and phone support from solar monitoring experts. Quick response times and helpful troubleshooting guidance."
              },
              {
                icon: TrendingUp,
                title: "10+ Years Experience",
                description: "Monitoring 10,000+ rooftop systems across India. Proven reliability with continuous platform improvements and new features."
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

      {/* Why Choose SolarLive - Key Benefits */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              The Smart Choice
            </p>
            <h2 className="mb-5">Why SolarLive is Best for Your Rooftop Solar</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              The most comprehensive, easy-to-use rooftop solar monitoring solution in India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Easiest Setup",
                stat: "< 30 min",
                description: "Faster installation than any competitor"
              },
              {
                title: "Universal Support",
                stat: "100+",
                description: "Inverter brands supported"
              },
              {
                title: "Best Value",
                stat: "₹4,999",
                description: "One-time payment, lifetime monitoring"
              },
              {
                title: "Top Reliability",
                stat: "99.9%",
                description: "System uptime guarantee"
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
                <p className="text-[11px] text-primary font-bold uppercase tracking-wider mb-3">{benefit.title}</p>
                <p className="text-[48px] font-bold text-primary leading-none mb-3">{benefit.stat}</p>
                <p className="text-[14px] text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Comparison Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-white p-10 rounded-2xl border border-border"
          >
            <div className="text-center mb-10">
              <h3 className="text-[24px] font-bold text-foreground mb-3">What Sets Us Apart</h3>
              <p className="text-[15px] text-muted-foreground">SolarLive vs. typical manufacturer apps</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-[16px] font-bold text-foreground mb-2">Works with Any Brand</h4>
                <p className="text-[14px] text-muted-foreground">Unlike manufacturer apps that only work with their inverters, SolarLive supports all brands</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-[16px] font-bold text-foreground mb-2">Advanced Analytics</h4>
                <p className="text-[14px] text-muted-foreground">AI-powered insights and maintenance alerts that basic apps don't provide</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-[16px] font-bold text-foreground mb-2">Local Support</h4>
                <p className="text-[14px] text-muted-foreground">India-based support team who understand your system and local conditions</p>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-white mb-6">Start Monitoring Your Rooftop Solar Today</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 10,000+ satisfied customers who trust SolarLive to monitor and protect their solar investment
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/solutions">View All Solutions</Link>
              </Button>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="text-[13px] text-white/50 mb-4">As seen in</p>
              <div className="flex items-center justify-center gap-8 text-white/40 text-[12px] font-medium">
                <span>The Hindu</span>
                <span>•</span>
                <span>Economic Times</span>
                <span>•</span>
                <span>Solar Quarter</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}