import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Smartphone, ArrowRight, Check, Monitor, Zap, BarChart3, Shield, Eye, Bell, TrendingUp, Clock, Award, Settings, Download, Wifi, WifiOff, Battery, MapPin, Layers, Filter, Share2, User, Users, Lock, Palette, Target, AlertTriangle, Sun, Wind, Thermometer, Activity, PieChart, DollarSign, Search, RefreshCw, Camera, Fingerprint, Globe, Headphones, Gauge, Maximize2, MessageSquare, ChevronRight } from "lucide-react";

export function MobileAppPage() {
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
              <Smartphone className="w-3 h-3" />
              YOUR PLANT IN YOUR POCKET
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              SolarLive Mobile App
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed mb-10">
              Monitor your entire solar portfolio from anywhere in the world. Real-time alerts, instant insights, and complete control—all in a beautifully designed mobile-first app for iOS and Android.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Smartphone, metric: "4.8★", label: "App Rating", sublabel: "iOS & Android" },
                { icon: Download, metric: "50K+", label: "Downloads", sublabel: "Active users" },
                { icon: Bell, metric: "<5 sec", label: "Push Alerts", sublabel: "Instant notifications" },
                { icon: Globe, metric: "12 Languages", label: "Supported", sublabel: "Global reach" }
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

      {/* What is the Mobile App */}
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
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Mobile-First Monitoring
                </span>
              </div>
              <h2 className="mb-6">Solar Monitoring in Your Pocket</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                The <strong className="text-foreground">SolarLive Mobile App</strong> brings the power of professional solar monitoring to your smartphone. No need to be at your desk or visit the control room—see real-time generation, receive instant alerts, and manage your entire portfolio from anywhere, anytime.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Designed with a <strong className="text-foreground">mobile-first philosophy</strong>, every feature is optimized for touchscreens. Large buttons, swipeable cards, intuitive gestures, and a clean interface ensure you get the information you need in 3 seconds or less—perfect for checking on the go.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "View at a Glance", desc: "See generation, performance, and alerts on the home screen" },
                  { label: "Instant Notifications", desc: "Push alerts for inverter trips, low generation, faults" },
                  { label: "Works Offline", desc: "View cached data even without internet connectivity" },
                  { label: "Global Access", desc: "Monitor plants anywhere in the world, 24/7" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[15px] font-semibold text-foreground">{item.label}</p>
                      <p className="text-[14px] text-muted-foreground">{item.desc}</p>
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
              <div className="aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-foreground/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800"
                  alt="SolarLive Mobile App Interface"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* App Store Badges Placeholder */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="bg-foreground text-white px-6 py-3 rounded-xl text-[13px] font-semibold flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  App Store
                </div>
                <div className="bg-foreground text-white px-6 py-3 rounded-xl text-[13px] font-semibold flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Google Play
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Mobile Monitoring is Essential */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Freedom from Your Desk
            </p>
            <h2 className="mb-5">Why Mobile Monitoring Changes Everything</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Don't wait until you're at your desk—monitor, respond, and optimize on the go
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bell,
                title: "Instant Alert Response",
                description: "Receive push notifications the moment something goes wrong—inverter trips, grid failures, or low generation. Respond within seconds from anywhere. In the solar business, every minute of downtime costs money. Mobile alerts ensure you're always the first to know.",
                impact: "Respond 10x faster than email",
                color: "red"
              },
              {
                icon: Globe,
                title: "Monitor from Anywhere",
                description: "Traveling for business? On vacation? At a client meeting? No problem. Access your entire portfolio from anywhere in the world with 4G/5G or Wi-Fi. Check generation while having coffee, review performance at the airport, or share data during investor calls.",
                impact: "100% location independence",
                color: "blue"
              },
              {
                icon: Clock,
                title: "Save Hours Daily",
                description: "No need to open laptops, VPN into offices, or call site teams for updates. Quick checks take 10 seconds on your phone vs 5 minutes on desktop. Check generation 50+ times per day effortlessly—staying constantly informed without workflow disruption.",
                impact: "Save 2+ hours daily",
                color: "green"
              },
              {
                icon: Target,
                title: "Make Faster Decisions",
                description: "See a problem, fix it immediately. Approve O&M work orders, acknowledge alerts, export reports, or call your field team—all from the app. Mobile access accelerates decision-making by removing the 'I'll check when I'm back at my desk' delay.",
                impact: "3x faster decision cycles",
                color: "orange"
              },
              {
                icon: Users,
                title: "Perfect for Field Teams",
                description: "Site engineers can view real-time data while walking the plant. Compare live inverter readings with physical inspection. Troubleshoot issues without running back to the control room. Field and remote teams stay synchronized with the same real-time information.",
                impact: "Field + remote team alignment",
                color: "purple"
              },
              {
                icon: Share2,
                title: "Share Data Instantly",
                description: "Investor asking about today's performance? Screenshot the dashboard and share via WhatsApp. Client wants this month's PR? Export the report and email from your phone. Mobile-first design makes data sharing effortless—improving stakeholder communication.",
                impact: "Share in 5 seconds",
                color: "blue"
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
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">{reason.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-[13px] font-semibold text-primary">{reason.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You See at a Glance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Information at Your Fingertips
            </p>
            <h2 className="mb-5">Everything You Need in One Glance</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Mobile-optimized interface designed for speed and clarity
            </p>
          </div>

          {/* Home Screen Widgets */}
          <div className="mb-16">
            <h3 className="text-[22px] font-bold text-foreground mb-8 text-center">Home Screen Overview</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  widget: "Live Generation",
                  icon: Zap,
                  data: ["Current power (kW)", "Today's energy (kWh)", "Live update every 5 seconds", "Color-coded status indicator"]
                },
                {
                  widget: "Performance Ratio",
                  icon: Gauge,
                  data: ["Today's PR %", "Monthly average PR", "Comparison with yesterday", "Trend indicator (↑/↓)"]
                },
                {
                  widget: "Active Alerts",
                  icon: AlertTriangle,
                  data: ["Critical/warning count", "Latest 3 alerts shown", "Tap to see all alerts", "Red badge for critical issues"]
                },
                {
                  widget: "Weather Conditions",
                  icon: Sun,
                  data: ["Solar irradiance (W/m²)", "Module temperature", "Wind speed", "Current weather icon"]
                },
                {
                  widget: "Revenue Today",
                  icon: DollarSign,
                  data: ["Today's earnings (₹)", "This month's total", "Projected month-end", "Cumulative lifetime revenue"]
                },
                {
                  widget: "Plant Status",
                  icon: Activity,
                  data: ["System availability %", "Inverters online/offline", "Equipment health score", "Last data update time"]
                },
                {
                  widget: "Portfolio Summary",
                  icon: Layers,
                  data: ["Total plants count", "Combined capacity (MW)", "Aggregate generation", "Best/worst performer"]
                },
                {
                  widget: "Quick Actions",
                  icon: Settings,
                  data: ["View all plants", "Check alerts", "Export reports", "Contact support"]
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-muted/30 p-6 rounded-xl border border-border hover:border-primary/40 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-[16px] font-bold text-foreground">{item.widget}</h4>
                  </div>
                  <div className="space-y-2">
                    {item.data.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-[13px] text-muted-foreground">{d}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Detailed Screens */}
          <div>
            <h3 className="text-[22px] font-bold text-foreground mb-8 text-center">Detailed Screen Views</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  screen: "Plant Dashboard",
                  description: "Tap any plant to see detailed performance, generation charts, equipment status, weather data, and historical trends—all optimized for mobile viewing.",
                  icon: Monitor
                },
                {
                  screen: "Alerts & Notifications",
                  description: "Complete alert history with filters (critical/warning/info), acknowledge buttons, alert details, timestamp, and direct actions—resolve issues without leaving the app.",
                  icon: Bell
                },
                {
                  screen: "Analytics & Reports",
                  description: "PR trends, generation comparison, loss analysis, energy yield charts, and monthly summaries—all with pinch-to-zoom and swipeable time ranges.",
                  icon: BarChart3
                },
                {
                  screen: "Equipment View",
                  description: "Inverter grid showing online/offline status, detailed inverter view with DC/AC parameters, string-level data, and fault history—technical details simplified for mobile.",
                  icon: Activity
                },
                {
                  screen: "Weather Station",
                  description: "Real-time weather data with beautiful visualizations, 7-day forecast, hourly irradiance predictions, and weather impact on generation—optimized for quick scanning.",
                  icon: Wind
                },
                {
                  screen: "Financial Dashboard",
                  description: "Revenue tracking, earnings breakdown, tariff information, payback progress, CO₂ savings, and ROI calculations—perfect for sharing with investors during meetings.",
                  icon: PieChart
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[18px] font-bold text-foreground mb-2">{item.screen}</h4>
                      <p className="text-[15px] text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why SolarLive App is Better */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Superior Mobile Experience
            </p>
            <h2 className="mb-5">Why SolarLive App is the Best in the Industry</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Rated 4.8/5 stars—India's highest-rated solar monitoring app
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "True Mobile-First Design",
                description: "Unlike competitors who simply shrink their desktop websites, SolarLive app is built from the ground up for mobile. Every interaction is touch-optimized—large tap targets, swipe gestures, pull-to-refresh, and mobile-native UI patterns. Result: 10x better usability.",
                icon: Smartphone,
                stats: "Built for mobile from day one",
                comparison: "vs shrunk desktop websites"
              },
              {
                title: "Works Offline",
                description: "Lost signal at a remote site? No problem. The app caches recent data locally—view last known generation, historical charts, and plant information without internet. Competitors' apps show blank screens offline. We show your data.",
                icon: WifiOff,
                stats: "Full offline access",
                comparison: "vs online-only apps"
              },
              {
                title: "5-Second Refresh Rate",
                description: "Real-time means real-time. Data refreshes every 5 seconds automatically—fastest in the industry. Competitors update every 1-5 minutes. When you're troubleshooting an inverter issue, 5 minutes feels like an eternity. We keep you constantly updated.",
                icon: RefreshCw,
                stats: "5-second live updates",
                comparison: "vs 1-5 minute delays"
              },
              {
                title: "Push Notifications Done Right",
                description: "Critical alerts appear instantly on your lock screen with actionable buttons (Acknowledge, View Details, Call Support). Customizable notification preferences—choose which alerts you want. Competitors spam you with every alert. We respect your attention.",
                icon: Bell,
                stats: "Smart, actionable notifications",
                comparison: "vs notification spam"
              },
              {
                title: "Biometric Security",
                description: "Face ID and fingerprint login for instant, secure access—no typing passwords on tiny keyboards. Plus device-specific authentication, auto-logout, and encrypted data storage. Competitors use basic passwords. We use banking-level security.",
                icon: Fingerprint,
                stats: "Face ID & fingerprint login",
                comparison: "vs password-only"
              },
              {
                title: "One-Tap Data Sharing",
                description: "Share any chart, report, or dashboard view via WhatsApp, email, or SMS with one tap. Auto-generate beautiful PDFs with your company logo. Competitors make you export → download → upload → share. We make it instant.",
                icon: Share2,
                stats: "One-tap sharing to any app",
                comparison: "vs multi-step exports"
              },
              {
                title: "Dark Mode Support",
                description: "Automatic dark mode for nighttime checking—easy on eyes and saves battery. Seamlessly switches based on system settings or manual toggle. Competitors have glaring white screens. We care about your eyes and battery life.",
                icon: Palette,
                stats: "Auto dark mode",
                comparison: "vs bright white only"
              },
              {
                title: "Ultra-Lightweight App",
                description: "Only 25MB download size vs competitors' 100-200MB bloated apps. Fast downloads even on 3G. Minimal battery drain—app uses <2% battery per hour. Optimized for Indian network conditions where bandwidth matters.",
                icon: Battery,
                stats: "25MB app size, <2% battery/hr",
                comparison: "vs 100-200MB apps"
              },
              {
                title: "Multi-Language Support",
                description: "Full interface in English, Hindi, Tamil, Telugu, Marathi, Gujarati, and more. Competitors offer English only. We serve India's linguistic diversity—making solar monitoring accessible to regional teams and local investors.",
                icon: Globe,
                stats: "10+ Indian languages",
                comparison: "vs English-only"
              },
              {
                title: "No Feature Compromise",
                description: "100% feature parity with desktop dashboard—every widget, report, chart, and setting available on mobile. Competitors cripple mobile apps with 'coming soon' features. If it's on desktop, it's on mobile.",
                icon: Check,
                stats: "100% feature parity",
                comparison: "vs limited mobile features"
              },
              {
                title: "Camera Integration",
                description: "Scan equipment QR codes to instantly view that inverter's data. Take photos of faulty equipment and attach to alerts. AI-powered visual inspection (beta). Competitors lack camera features. We integrate hardware with software.",
                icon: Camera,
                stats: "QR scan + photo attachment",
                comparison: "vs no camera features"
              },
              {
                title: "In-App Support Chat",
                description: "Instant chat with support team without leaving the app. Share screenshots, get live help, and resolve issues in minutes. Competitors make you call or email. We offer real-time chat—because problems need immediate solutions.",
                icon: MessageSquare,
                stats: "Live in-app chat support",
                comparison: "vs email/call only"
              }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] font-bold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">{reason.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <p className="text-[13px] font-bold text-primary">{reason.stats}</p>
                  <p className="text-[12px] text-muted-foreground">{reason.comparison}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Comprehensive Features
            </p>
            <h2 className="mb-5">Everything You Need in One App</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              50+ features designed to make solar monitoring effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: "Real-Time Generation", desc: "Live power & energy updates", icon: Zap },
              { feature: "Push Notifications", desc: "Instant alerts for issues", icon: Bell },
              { feature: "Portfolio Management", desc: "All plants in one app", icon: Layers },
              { feature: "Performance Analytics", desc: "PR, CUF, availability charts", icon: BarChart3 },
              { feature: "Equipment Status", desc: "All inverters at a glance", icon: Activity },
              { feature: "Weather Integration", desc: "Live weather + forecasts", icon: Wind },
              { feature: "Financial Tracking", desc: "Revenue & ROI monitoring", icon: DollarSign },
              { feature: "Alert Management", desc: "Acknowledge & resolve alerts", icon: AlertTriangle },
              { feature: "Historical Data", desc: "View any date range", icon: Clock },
              { feature: "Export Reports", desc: "PDF/Excel in one tap", icon: Download },
              { feature: "Data Sharing", desc: "Share via WhatsApp/email", icon: Share2 },
              { feature: "Dark Mode", desc: "Auto or manual toggle", icon: Palette },
              { feature: "Offline Access", desc: "View cached data offline", icon: WifiOff },
              { feature: "Biometric Login", desc: "Face ID & fingerprint", icon: Fingerprint },
              { feature: "Multi-Language", desc: "10+ Indian languages", icon: Globe },
              { feature: "QR Code Scanner", desc: "Scan equipment for data", icon: Camera },
              { feature: "In-App Chat", desc: "Live support chat", icon: MessageSquare },
              { feature: "Custom Filters", desc: "Filter by plant, date, metric", icon: Filter },
              { feature: "Comparison View", desc: "Compare multiple plants", icon: Layers },
              { feature: "Widget Customization", desc: "Arrange home screen", icon: Settings },
              { feature: "Search Function", desc: "Find any plant instantly", icon: Search },
              { feature: "Map View", desc: "Geographic plant locations", icon: MapPin },
              { feature: "Full-Screen Charts", desc: "Maximize any chart", icon: Maximize2 },
              { feature: "User Profiles", desc: "Multiple user accounts", icon: User }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.02 }}
                className="bg-muted/30 p-5 rounded-lg border border-border hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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

      {/* How SolarLive Made It Simple */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Simplicity by Design
            </p>
            <h2 className="mb-5">How We Made Solar Monitoring This Simple</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              3 years of mobile-first development and user testing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                principle: "Mobile-First Philosophy",
                description: "We didn't build a desktop app and shrink it. We started with mobile constraints—small screens, touch input, limited bandwidth—and built up. This forces clarity, simplicity, and focus on what truly matters.",
                icon: Smartphone,
                example: "Result: 3-tap access to any data vs 10+ clicks on desktop-first apps"
              },
              {
                principle: "User Testing with Real O&M Teams",
                description: "We tested with 100+ site engineers, plant owners, and field technicians—watching where they struggled, what they needed most, and how they actually used the app. Every feature justified by real user needs, not developer assumptions.",
                icon: Users,
                example: "Result: Features you'll actually use daily, not bloatware"
              },
              {
                principle: "Ruthless Feature Prioritization",
                description: "We said 'no' to 200+ feature requests to keep the app fast and simple. Only features used by 70%+ of users made it in. Every screen loads in <1 second. Every action completes in <3 taps. Simplicity is our competitive advantage.",
                icon: Target,
                example: "Result: 25MB app vs competitors' 200MB feature bloat"
              },
              {
                principle: "Visual Design Language",
                description: "Color-coded status indicators (green=good, red=problem), large typography for outdoor readability, high-contrast icons for sunlight visibility, and intuitive layouts that don't need tutorials. Design communicates instantly.",
                icon: Eye,
                example: "Result: Zero training needed—intuitive from first launch"
              },
              {
                principle: "Progressive Disclosure",
                description: "Home screen shows essentials (generation, alerts, weather). Tap for more details. Swipe for charts. Long-press for actions. Information reveals progressively—preventing cognitive overload while keeping power-user features accessible.",
                icon: Layers,
                example: "Result: Beginners comfortable, experts satisfied"
              },
              {
                principle: "Performance Obsession",
                description: "Every screen optimized to load in <1 second. Images compressed without quality loss. Data fetched incrementally. Background updates minimize battery drain. We measure performance daily—any slowdown is a bug-level priority.",
                icon: Zap,
                example: "Result: Fastest solar monitoring app in India"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-[18px] font-bold text-foreground mb-3">{item.principle}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-[13px] font-semibold text-primary">{item.example}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Technical Details
            </p>
            <h2 className="mb-5">Mobile App Specifications</h2>
          </div>

          <div className="bg-muted/30 rounded-2xl border border-border p-10">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { spec: "iOS Compatibility", value: "iOS 12.0 or later (iPhone & iPad)" },
                { spec: "Android Compatibility", value: "Android 8.0 (Oreo) or later" },
                { spec: "App Size", value: "25MB (lightweight download)" },
                { spec: "Data Refresh Rate", value: "5 seconds (real-time)" },
                { spec: "Offline Mode", value: "Yes (cached data available)" },
                { spec: "Battery Usage", value: "<2% per hour (optimized)" },
                { spec: "Languages Supported", value: "English, Hindi + 10 regional" },
                { spec: "Security", value: "Face ID, Touch ID, biometric login" },
                { spec: "Data Encryption", value: "AES-256 encryption" },
                { spec: "Push Notifications", value: "Real-time alerts with actions" },
                { spec: "Network Requirements", value: "3G/4G/5G/Wi-Fi (offline capable)" },
                { spec: "Tablet Support", value: "Optimized for iPad & Android tablets" },
                { spec: "Dark Mode", value: "Auto or manual toggle" },
                { spec: "Screen Orientations", value: "Portrait & landscape supported" },
                { spec: "Export Formats", value: "PDF, Excel, CSV, images" },
                { spec: "Widget Support", value: "iOS/Android home screen widgets" },
                { spec: "Updates", value: "Monthly feature releases" },
                { spec: "Support", value: "In-app chat + 24/7 phone support" }
              ].map((spec, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-6 border-b border-border last:border-0">
                  <Smartphone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-foreground mb-1">{spec.spec}</p>
                    <p className="text-[14px] text-muted-foreground">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              What Users Say
            </p>
            <h2 className="mb-5">Rated 4.8/5 Stars by Solar Professionals</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I check my plants 20+ times daily from my phone—takes just 5 seconds. The app is faster than our desktop SCADA!",
                author: "Rajesh Kumar",
                role: "O&M Manager, 50MW Portfolio",
                rating: 5
              },
              {
                quote: "Push notifications saved us ₹8 lakhs last month—inverter trip alert came instantly, we fixed it within 10 minutes.",
                author: "Priya Sharma",
                role: "Plant Owner, 10MW Solar Farm",
                rating: 5
              },
              {
                quote: "Finally, an app that works without internet! Perfect for remote sites where network is patchy. Game changer for field teams.",
                author: "Amit Patel",
                role: "Site Engineer, Multiple Plants",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl border border-border"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-[15px] text-foreground leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-[15px] font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-[13px] text-muted-foreground">{testimonial.role}</p>
                </div>
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
            <h2 className="text-white mb-6">Download India's Best Solar Monitoring App</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 10,000+ solar professionals monitoring 2000+ MW from their pockets
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" asChild className="h-14 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  Download for iOS
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/contact" className="inline-flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  Download for Android
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-white/40 text-[13px]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Free for all SolarLive users</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>No in-app purchases</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Regular updates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}