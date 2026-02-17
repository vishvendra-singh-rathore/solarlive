import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Home as HomeIcon, ArrowRight, Check, Shield, FileText, Smartphone, Sun, IndianRupee, Zap, Clock, Award, Users, TrendingUp, Building2 } from "lucide-react";

export function SuryaGharPage() {
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
              Residential Rooftop Program
            </p>
            <h1 className="mb-6">PM Surya Ghar: Muft Bijli Yojana</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              Complete monitoring solution for India's largest residential solar program. Help homeowners claim subsidies, track savings, and enjoy free electricity with seamless SolarLive integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction to Surya Ghar */}
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
                  <HomeIcon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Government of India Initiative
                </span>
              </div>
              <h2 className="mb-6">About PM Surya Ghar: Muft Bijli Yojana</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">PM Surya Ghar: Muft Bijli Yojana</strong> is the Government of India's flagship scheme to promote rooftop solar installations in residential households across the nation. Launched in February 2024, this ambitious program aims to light up 1 crore (10 million) households with solar rooftop systems.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Under this scheme, homeowners receive substantial subsidies—up to ₹78,000—making solar power affordable and accessible for every Indian family. The initiative supports India's renewable energy goals while helping families reduce electricity bills and achieve energy independence.
              </p>
              
              <div className="bg-muted/40 p-6 rounded-xl border border-border">
                <h3 className="text-[16px] font-bold text-foreground mb-4">Program Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1 font-semibold">Target Homes</p>
                    <p className="text-[24px] font-bold text-primary leading-none">1 Crore</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1 font-semibold">Max Subsidy</p>
                    <p className="text-[24px] font-bold text-primary leading-none">₹78,000</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1 font-semibold">Total Outlay</p>
                    <p className="text-[24px] font-bold text-primary leading-none">₹75,021 Cr</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1 font-semibold">System Size</p>
                    <p className="text-[24px] font-bold text-primary leading-none">1-10 kW</p>
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
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200"
                  alt="Residential Rooftop Solar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <IndianRupee className="w-5 h-5 text-primary" />
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                    Monthly Savings
                  </p>
                </div>
                <p className="text-[28px] font-bold text-foreground leading-none mb-1">₹1,800</p>
                <p className="text-[13px] text-primary font-medium">With 3 kW System</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subsidy Structure */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Financial Support
            </p>
            <h2 className="mb-5">Surya Ghar Subsidy Structure</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Central government subsidy making solar affordable for every household
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                size: "1 kW",
                subsidy: "₹30,000",
                perKw: "₹30,000/kW",
                description: "Perfect for small households with 2-3 BHK",
                savings: "~₹600/month"
              },
              {
                size: "2 kW",
                subsidy: "₹60,000",
                perKw: "₹30,000/kW",
                description: "Ideal for medium-sized homes and families",
                savings: "~₹1,200/month",
                popular: true
              },
              {
                size: "3 kW+",
                subsidy: "₹78,000",
                perKw: "₹18,000/kW",
                description: "For larger homes with higher consumption",
                savings: "~₹1,800/month"
              }
            ].map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`bg-white p-8 rounded-2xl border-2 hover:shadow-xl transition-all duration-300 relative ${
                  tier.popular ? 'border-primary' : 'border-border'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <p className="text-[13px] text-muted-foreground mb-2">System Capacity</p>
                  <p className="text-[36px] font-bold text-foreground leading-none mb-2">{tier.size}</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{tier.perKw}</p>
                </div>
                
                <div className="bg-primary/10 p-5 rounded-xl mb-6 text-center">
                  <p className="text-[11px] text-muted-foreground mb-1 uppercase tracking-wider">Subsidy Amount</p>
                  <p className="text-[32px] font-bold text-primary leading-none">{tier.subsidy}</p>
                </div>
                
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4 text-center">
                  {tier.description}
                </p>
                
                <div className="pt-4 border-t border-border text-center">
                  <p className="text-[13px] text-foreground">
                    <strong className="text-primary">{tier.savings}</strong> electricity savings
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[14px] text-muted-foreground">
              <strong className="text-foreground">Additional Benefits:</strong> For systems above 3 kW, subsidy is ₹18,000 per additional kW. Maximum subsidy capped at ₹78,000 for systems up to 10 kW.
            </p>
          </div>
        </div>
      </section>

      {/* How SolarLive Helps - Numbered Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Complete Solution
            </p>
            <h2 className="mb-5">How SolarLive Helps with Surya Ghar Yojana</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              From installation to subsidy claims to daily monitoring—we make the entire process simple and hassle-free
            </p>
          </div>

          <div className="space-y-24">
            {/* 01 - Subsidy Documentation */}
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
                    src="https://images.unsplash.com/photo-1554224311-beee460201f9?w=1000"
                    alt="Subsidy Documentation"
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
                      <h3 className="text-[24px]">Simplified Subsidy Claims</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  SolarLive automates the entire subsidy documentation process for Surya Ghar Yojana. Our platform generates all required reports and certificates in the format specified by MNRE and DISCOMs—making subsidy claims effortless for homeowners and installers.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Commissioning certificates:</strong> Auto-generated installation completion reports for DISCOM submission</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Performance validation:</strong> Real-time monitoring data proving system functionality for subsidy release</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Portal integration:</strong> Direct submission to National Portal for Rooftop Solar</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Document storage:</strong> Secure cloud backup of all certificates for 25 years</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 02 - Easy Monitoring */}
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
                      <h3 className="text-[24px]">Homeowner-Friendly Mobile App</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Simple, beautiful mobile app designed for homeowners—not engineers. Track your solar generation, see how much money you're saving, and receive alerts when something needs attention. Available in Hindi and regional languages with easy-to-understand visuals.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Real-time generation:</strong> See exactly how much electricity your panels are producing right now</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Savings calculator:</strong> Track daily, monthly, and yearly savings in rupees on your electricity bill</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Environmental impact:</strong> See how much CO₂ emissions you've offset and trees planted equivalent</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Family sharing:</strong> Multiple family members can view system performance on their phones</p>
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

            {/* 03 - Quick Installation */}
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
                    alt="Quick Installation"
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
                      <h3 className="text-[24px]">Plug-and-Play Installation</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  SolarLive monitoring hardware installs in under 30 minutes—no complex wiring or technical expertise needed. Our smart data loggers work with any inverter brand approved under Surya Ghar Yojana, connecting via WiFi or 4G to start transmitting data immediately.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Universal compatibility:</strong> Works with all MNRE-approved inverter brands and models</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>No configuration:</strong> Auto-detects your solar system and starts monitoring instantly</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Wireless connectivity:</strong> WiFi or 4G connection—no need for ethernet cables</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Included by installers:</strong> Many Surya Ghar empanelled vendors pre-install SolarLive</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 04 - Lifetime Support */}
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
                      <h3 className="text-[24px]">25-Year Monitoring & Support</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                  Your solar system will last 25+ years—and so does our monitoring and support. Unlike competitors who charge annual fees, SolarLive provides lifetime monitoring with just a one-time payment. We're here for the long term, ensuring your investment keeps performing optimally.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Lifetime monitoring:</strong> One-time payment, no recurring fees or hidden charges ever</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Automatic alerts:</strong> Get notified immediately if system performance drops or issues arise</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Expert support:</strong> Toll-free helpline with Hindi and English support for any questions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-[15px] text-foreground"><strong>Free updates:</strong> Automatic software updates and new features at no additional cost</p>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 p-5 rounded-lg">
                  <p className="text-[13px] text-foreground leading-relaxed">
                    <strong className="text-primary">Special Offer:</strong> For Surya Ghar Yojana beneficiaries, SolarLive monitoring is included free with select empanelled vendors—ask your installer!
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1560264280-88b68371db39?w=1000"
                    alt="Customer Support"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits for Homeowners */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Homeowner Benefits
            </p>
            <h2 className="mb-5">Why Homeowners Love SolarLive</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Thousands of satisfied Surya Ghar Yojana beneficiaries trust SolarLive
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: IndianRupee,
                title: "Track Real Savings",
                description: "See exactly how much money you're saving on electricity bills every day. Our app shows savings in rupees—not technical jargon."
              },
              {
                icon: Sun,
                title: "Peace of Mind",
                description: "Know your solar system is working properly 24/7. Get instant alerts if something goes wrong, so issues are fixed quickly."
              },
              {
                icon: Smartphone,
                title: "Simple Interface",
                description: "No engineering degree needed. Our app is designed for homeowners with clear visuals and Hindi language support."
              },
              {
                icon: FileText,
                title: "Easy Subsidy Claims",
                description: "All documentation generated automatically for subsidy claims. No paperwork hassles or back-and-forth with officials."
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Your data is safe with military-grade encryption. 99.9% uptime ensures you never lose sight of your system."
              },
              {
                icon: Users,
                title: "Family Sharing",
                description: "Share access with family members. Kids can see how your home is helping the environment with live data."
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-border"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-[18px] font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Real Results
            </p>
            <h2 className="mb-5">Surya Ghar Success with SolarLive</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Helping thousands of families across India enjoy free solar electricity
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                stat: "15,000+",
                label: "Homes Monitored",
                description: "Surya Ghar installations"
              },
              {
                stat: "₹18 Cr+",
                label: "Subsidies Claimed",
                description: "Successfully processed"
              },
              {
                stat: "99.2%",
                label: "Approval Rate",
                description: "For subsidy documentation"
              },
              {
                stat: "4.8/5",
                label: "User Rating",
                description: "From homeowners"
              }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-muted/30 p-8 rounded-2xl border border-border text-center hover:border-primary/40 transition-colors duration-300"
              >
                <p className="text-[48px] font-bold text-primary leading-none mb-3">{stat.stat}</p>
                <p className="text-[16px] font-semibold text-foreground mb-2">{stat.label}</p>
                <p className="text-[14px] text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply - Step by Step */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Getting Started
            </p>
            <h2 className="mb-5">How to Apply for Surya Ghar Yojana</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Simple 5-step process to get solar on your rooftop with government subsidy
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Register on National Portal",
                  description: "Visit the official Surya Ghar portal (suryaghar.gov.in) and register with your Aadhaar number and electricity bill details."
                },
                {
                  step: "2",
                  title: "Choose Empanelled Vendor",
                  description: "Select an MNRE-approved solar installer from the empanelled vendors list in your area. Compare quotes and reviews."
                },
                {
                  step: "3",
                  title: "Site Survey & Installation",
                  description: "Vendor conducts site survey, designs your system, and completes installation within 15-30 days. SolarLive monitoring included."
                },
                {
                  step: "4",
                  title: "Net Metering & Commissioning",
                  description: "DISCOM installs net meter and inspects your system. SolarLive generates commissioning certificate automatically."
                },
                {
                  step: "5",
                  title: "Receive Subsidy",
                  description: "Subsidy amount transferred directly to your bank account within 30 days of commissioning. Track status on portal."
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-6 bg-white p-6 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white text-[24px] font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 bg-primary/10 border border-primary/30 p-6 rounded-xl text-center">
              <p className="text-[14px] text-foreground">
                <strong className="text-primary">Important:</strong> Ensure your solar installer includes SolarLive monitoring for seamless subsidy documentation and lifetime monitoring benefits.
              </p>
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
            <h2 className="text-white mb-6">Ready to Get Free Solar Electricity?</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 15,000+ homeowners monitoring their Surya Ghar solar systems with SolarLive
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Find Installer Near You
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/solutions">View All Solutions</Link>
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-[13px] text-white/50 mb-4">Official Surya Ghar Yojana Portal</p>
              <a 
                href="https://suryaghar.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[14px] text-white/70 hover:text-white transition-colors underline"
              >
                suryaghar.gov.in →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
