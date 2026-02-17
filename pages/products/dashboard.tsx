import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Layout as LayoutIcon, ArrowRight, Check, Monitor, Zap, BarChart3, Shield, Eye, Bell, TrendingUp, Clock, Award, Settings, Download, Smartphone, Layers, Grid, PieChart, LineChart, Activity, Users, Lock, Palette, Maximize2, Filter, RefreshCw, Download as DownloadIcon, Share2, Search, Sliders, Workflow, Lightbulb, Target, AlertTriangle, DollarSign, Gauge, MapPin, Calendar } from "lucide-react";

export function DashboardPage() {
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
              <LayoutIcon className="w-3 h-3" />
              UNIFIED CONTROL CENTER
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              SolarLive Centralized Dashboard
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed mb-10">
              India's most advanced solar monitoring dashboard—combining real-time operations, portfolio analytics, and AI-powered insights in one intuitive interface. Monitor everything from a single screen, anywhere, anytime.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Monitor, metric: "50+ Widgets", label: "Dashboard Widgets", sublabel: "Fully customizable" },
                { icon: Gauge, metric: "<1 sec", label: "Load Time", sublabel: "Lightning fast" },
                { icon: Eye, metric: "5 sec", label: "Data Refresh", sublabel: "Real-time updates" },
                { icon: Users, metric: "Unlimited", label: "User Access", sublabel: "Role-based control" }
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

      {/* What is the Dashboard */}
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
                  <Monitor className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Understanding the Dashboard
                </span>
              </div>
              <h2 className="mb-6">Your Solar Operations Command Center</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                The <strong className="text-foreground">SolarLive Dashboard</strong> is your single pane of glass for complete solar plant visibility. It transforms raw data from thousands of sensors into actionable intelligence—displaying live generation, equipment status, weather conditions, alerts, and financial metrics on one unified interface.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Think of it as the <strong className="text-foreground">cockpit of an aircraft</strong>—where pilots see all critical information at a glance. Similarly, plant owners, O&M teams, and investors see real-time performance, instantly identify issues, drill down into problems, and make data-driven decisions—all without juggling multiple screens or spreadsheets.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Real-Time Monitoring", desc: "Live updates every 5 seconds—see generation as it happens" },
                  { label: "Portfolio Management", desc: "Manage 1 to 1000+ plants from one dashboard" },
                  { label: "Customizable Widgets", desc: "Build your ideal dashboard with drag-and-drop" },
                  { label: "Role-Based Access", desc: "Different views for owners, engineers, investors" }
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
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200"
                  alt="SolarLive Dashboard Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Dashboard is Essential - Game Changer */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              The Game Changer
            </p>
            <h2 className="mb-5">Why SolarLive Dashboard Changes Everything</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              From chaos to clarity—how a unified dashboard transforms solar operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Prevents Revenue Loss",
                description: "Real-time alerts catch inverter trips, grid failures, and underperformance within seconds—not hours or days. Every hour of undetected downtime costs ₹50,000-5 lakhs. The dashboard prevents this by alerting you instantly via SMS, email, and app notifications.",
                impact: "Prevent ₹10-50 lakh annual losses",
                color: "red"
              },
              {
                icon: TrendingUp,
                title: "Maximizes Energy Yield",
                description: "Identify underperforming inverters, detect soiling losses, spot string failures, and optimize cleaning schedules—all from dashboard analytics. Data shows plants with active monitoring generate 8-15% more energy than unmonitored ones.",
                impact: "8-15% higher generation",
                color: "green"
              },
              {
                icon: Clock,
                title: "Saves 10+ Hours Weekly",
                description: "No more visiting sites for routine checks, manually compiling Excel reports, or calling site teams for updates. See everything remotely in real-time. O&M teams save 10-20 hours per week—allowing them to manage 3x more plants.",
                impact: "10-20 hours saved per week",
                color: "blue"
              },
              {
                icon: Eye,
                title: "Complete Transparency",
                description: "Investors, lenders, and offtakers demand proof of performance. The dashboard provides auditable data, automated reports, and compliance documentation—building trust and satisfying due diligence requirements without manual effort.",
                impact: "Investor confidence guaranteed",
                color: "purple"
              },
              {
                icon: Target,
                title: "Data-Driven Decisions",
                description: "Stop guessing, start knowing. Which inverter needs replacement? When should you clean panels? Is your O&M vendor performing? Dashboard analytics provide answers backed by data—optimizing every operational decision.",
                impact: "30% better decision accuracy",
                color: "orange"
              },
              {
                icon: DollarSign,
                title: "ROI Visibility",
                description: "Track daily revenue, cumulative earnings, payback period progress, and CO₂ savings. Financial widgets show if your plant is meeting pro forma projections—critical for performance guarantees and debt servicing.",
                impact: "Track ₹ earned every minute",
                color: "green"
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

      {/* What Information Dashboard Displays */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Comprehensive Information
            </p>
            <h2 className="mb-5">Everything You Need in One Place</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              50+ widgets displaying 200+ metrics—all customizable to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Live Generation Data",
                icon: Zap,
                widgets: [
                  "Real-time power output (kW)",
                  "Today's energy generation (kWh)",
                  "Month/Year cumulative energy",
                  "Specific yield (kWh/kWp)",
                  "Expected vs actual generation",
                  "Generation trend charts (hourly/daily)"
                ]
              },
              {
                category: "Performance Metrics",
                icon: BarChart3,
                widgets: [
                  "Performance Ratio (PR %)",
                  "Capacity Utilization Factor (CUF)",
                  "Inverter efficiency",
                  "System availability (%)",
                  "Grid availability (%)",
                  "Weather-normalized PR"
                ]
              },
              {
                category: "Equipment Status",
                icon: Activity,
                widgets: [
                  "All inverters status (live grid)",
                  "Online/offline/fault indicators",
                  "String-level voltage & current",
                  "Inverter temperature monitoring",
                  "Communication status",
                  "Equipment health score"
                ]
              },
              {
                category: "Weather Intelligence",
                icon: Gauge,
                widgets: [
                  "Solar irradiance (GHI/POA)",
                  "Module & ambient temperature",
                  "Wind speed & direction",
                  "Humidity & rainfall",
                  "7-day weather forecast",
                  "Weather impact analysis"
                ]
              },
              {
                category: "Financial Tracking",
                icon: DollarSign,
                widgets: [
                  "Revenue earned (today/month/year)",
                  "Per-unit tariff (₹/kWh)",
                  "Daily revenue tracker",
                  "Cumulative lifetime earnings",
                  "Payback period progress",
                  "CO₂ emissions offset"
                ]
              },
              {
                category: "Alerts & Notifications",
                icon: Bell,
                widgets: [
                  "Active alarms count",
                  "Recent alerts feed",
                  "Critical/warning/info classification",
                  "Acknowledged vs pending",
                  "Alert response time tracking",
                  "Escalation status"
                ]
              },
              {
                category: "Portfolio Overview",
                icon: Layers,
                widgets: [
                  "Multi-site generation summary",
                  "Plant-wise comparison tables",
                  "Best/worst performing sites",
                  "Geographic map view",
                  "Aggregate portfolio metrics",
                  "Capacity-weighted averages"
                ]
              },
              {
                category: "Analytics & Reports",
                icon: PieChart,
                widgets: [
                  "Loss analysis breakdown",
                  "PR trend (daily/monthly)",
                  "Generation vs budget",
                  "Soiling loss detection",
                  "Inverter performance ranking",
                  "Automated PDF reports"
                ]
              },
              {
                category: "Historical Data",
                icon: LineChart,
                widgets: [
                  "Date range comparison",
                  "Year-over-year analysis",
                  "Monthly generation heatmap",
                  "Seasonal performance trends",
                  "Custom period selection",
                  "Export to Excel/CSV"
                ]
              }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-muted/30 p-6 rounded-xl border border-border hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-[18px] font-bold text-foreground">{category.category}</h3>
                </div>
                <div className="space-y-2.5">
                  {category.widgets.map((widget, wIdx) => (
                    <div key={wIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-[14px] text-foreground leading-relaxed">{widget}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SolarLive Dashboard is Better */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Industry Leadership
            </p>
            <h2 className="mb-5">Why SolarLive Dashboard Beats All Competition</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              10+ years of innovation, 2000+ MW monitored, and continuous improvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "5-Second Real-Time Refresh",
                description: "While competitors update every 1-5 minutes, SolarLive refreshes every 5 seconds. See generation changes instantly—critical for catching rapid events like inverter trips, grid disturbances, or sudden production drops. The fastest dashboard in India.",
                icon: RefreshCw,
                stats: "5-second live updates",
                comparison: "vs 1-5 min for competitors"
              },
              {
                title: "Fully Customizable Interface",
                description: "Drag-and-drop widget builder with 50+ widgets. Create unlimited custom dashboards for different roles—overview for owners, detailed for engineers, financial for investors. Competitors force you into rigid, one-size-fits-all layouts.",
                icon: Palette,
                stats: "50+ customizable widgets",
                comparison: "vs fixed layouts"
              },
              {
                title: "Multi-Plant Portfolio View",
                description: "Manage 1000+ plants from one dashboard. Aggregate view, drill-down capability, plant comparison, and unified search across your entire portfolio. Competitors charge per plant—we include unlimited plants in every subscription.",
                icon: Layers,
                stats: "Unlimited plants included",
                comparison: "vs per-plant pricing"
              },
              {
                title: "Advanced Analytics Engine",
                description: "Go beyond basic charts. Loss analysis, soiling detection, string-level diagnostics, weather correlation, and AI-powered anomaly detection. Our analytics identify issues competitors' dashboards miss—backed by 10+ years of machine learning.",
                icon: Lightbulb,
                stats: "AI-powered analytics",
                comparison: "vs basic charting"
              },
              {
                title: "Mobile-First Design",
                description: "Responsive web dashboard + dedicated iOS/Android apps. Full feature parity—everything on desktop works on mobile. Competitors offer watered-down mobile versions. Monitor your plant while traveling, at site, or from home with equal capability.",
                icon: Smartphone,
                stats: "100% mobile feature parity",
                comparison: "vs limited mobile apps"
              },
              {
                title: "Zero Learning Curve",
                description: "Intuitive UI designed by UX experts—no training needed. Color-coded indicators, contextual tooltips, logical layouts. New users navigate confidently within 5 minutes. Competitors have complex interfaces requiring days of training and thick manuals.",
                icon: Target,
                stats: "5-minute onboarding",
                comparison: "vs days of training"
              },
              {
                title: "Blazing Fast Performance",
                description: "Cloud-optimized architecture with CDN acceleration. Load times under 2 seconds even with years of historical data. Competitors' dashboards lag with large datasets. Our tech stack (React + edge computing) ensures instant responsiveness regardless of data volume.",
                icon: Zap,
                stats: "<2 second load time",
                comparison: "vs 10-30 second loads"
              },
              {
                title: "99.9% Uptime Guarantee",
                description: "AWS-hosted with redundant servers across multiple availability zones. Automatic failover ensures your dashboard is always accessible. Competitors have frequent outages. We offer SLA-backed 99.9% uptime with financial penalties for breaches.",
                icon: Shield,
                stats: "99.9% uptime SLA",
                comparison: "vs no uptime guarantee"
              },
              {
                title: "Advanced Security",
                description: "SSL encryption, two-factor authentication, role-based permissions, IP whitelisting, and audit logs. ISO 27001 certified data centers. Competitors have basic security. We protect your operational data with bank-level security architecture.",
                icon: Lock,
                stats: "ISO 27001 certified",
                comparison: "vs basic password login"
              },
              {
                title: "Flexible Export & Integration",
                description: "Export any data to Excel/CSV/PDF with one click. RESTful API for third-party integration. Webhook support for external systems. Competitors lock you in with no export options. We believe your data is yours—export anytime, anywhere.",
                icon: Share2,
                stats: "Full API access included",
                comparison: "vs data lock-in"
              },
              {
                title: "White-Label Option",
                description: "For large portfolios (100+ MW), we offer white-labeled dashboards with your branding, domain, and logo. Present to investors under your company name. No competitor offers this—they force their branding on your data.",
                icon: Settings,
                stats: "White-label available",
                comparison: "vs forced vendor branding"
              },
              {
                title: "24/7 Indian Support",
                description: "Phone support in English & Hindi, instant chat, email, and field engineers across India. Resolve issues within hours, not days. Competitors offer email-only support from overseas. We're local, responsive, and committed to your success.",
                icon: Users,
                stats: "24/7 phone + chat support",
                comparison: "vs email-only support"
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

      {/* Dashboard Features & Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Platform Capabilities
            </p>
            <h2 className="mb-5">Powerful Features That Set Us Apart</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Professional-grade tools used by India's leading solar developers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { feature: "Drag-and-Drop Customization", desc: "Build your ideal dashboard", icon: Grid },
              { feature: "Dark Mode Support", desc: "Easy on eyes during night shifts", icon: Monitor },
              { feature: "Multi-Language Support", desc: "English + Hindi + 10 regional", icon: Users },
              { feature: "Smart Search", desc: "Find any metric instantly", icon: Search },
              { feature: "Bookmark Favorites", desc: "Quick access to key views", icon: Target },
              { feature: "Comparison Mode", desc: "Compare multiple plants side-by-side", icon: Layers },
              { feature: "Advanced Filters", desc: "Filter by date, plant, metric", icon: Filter },
              { feature: "Auto-Refresh Toggle", desc: "Pause/resume live updates", icon: RefreshCw },
              { feature: "Full-Screen Widgets", desc: "Maximize any widget to full screen", icon: Maximize2 },
              { feature: "Screenshot & Share", desc: "Share dashboards with team", icon: Share2 },
              { feature: "Scheduled Reports", desc: "Email reports daily/weekly/monthly", icon: Calendar },
              { feature: "Alert Dashboard", desc: "Dedicated view for all alerts", icon: Bell },
              { feature: "Financial Dashboard", desc: "Revenue & ROI tracking", icon: DollarSign },
              { feature: "Maintenance Dashboard", desc: "O&M activity tracking", icon: Settings },
              { feature: "Executive Summary", desc: "High-level KPIs for leadership", icon: TrendingUp },
              { feature: "Engineer Detailed View", desc: "Technical deep-dive for O&M", icon: Activity },
              { feature: "Investor Reports View", desc: "Performance reporting for stakeholders", icon: PieChart },
              { feature: "Geographic Map View", desc: "See all plants on a map", icon: MapPin },
              { feature: "Widget Library", desc: "50+ pre-built widgets", icon: Layers },
              { feature: "Data Export Center", desc: "One-click Excel/CSV export", icon: DownloadIcon }
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

      {/* Why Trust SolarLive */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Track Record of Excellence
            </p>
            <h2 className="mb-5">Why Trust SolarLive as Your Dashboard Partner</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Established leader with proven success in India's solar industry
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "10+", label: "Years in Business", desc: "Since 2015" },
              { number: "2000+", label: "MW Monitored", desc: "Across India" },
              { number: "500+", label: "Plants Connected", desc: "And growing" },
              { number: "99.9%", label: "Uptime Delivered", desc: "SLA guarantee" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl border border-border text-center"
              >
                <p className="text-[48px] font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-[16px] font-bold text-foreground mb-1">{stat.label}</p>
                <p className="text-[14px] text-muted-foreground">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Proven Track Record",
                description: "Monitoring India's largest solar portfolios since 2015—before solar became mainstream. Our platform has processed 10+ billion data points, handled thousands of alerts, and helped clients optimize ₹1000+ crores worth of solar assets.",
                icon: Award
              },
              {
                title: "Trusted by Industry Leaders",
                description: "Adani Green, Azure Power, ReNew Power, NTPC, and 50+ leading developers trust SolarLive. If they trust us with multi-gigawatt portfolios, your plant is in expert hands. We're the preferred choice of India's IPPs.",
                icon: Shield
              },
              {
                title: "Continuous Innovation",
                description: "We release new features every quarter based on customer feedback. Recent additions: AI-powered soiling detection, string-level analytics, and mobile app v3.0. Competitors haven't updated in years—we're constantly improving.",
                icon: Lightbulb
              },
              {
                title: "Customer Success Focus",
                description: "93% customer retention rate—the highest in the industry. Our success team ensures you extract maximum value from the dashboard. Quarterly business reviews, training sessions, and dedicated account managers for large portfolios.",
                icon: Users
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
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
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
              Technical Excellence
            </p>
            <h2 className="mb-5">Dashboard Technical Specifications</h2>
          </div>

          <div className="bg-muted/30 rounded-2xl border border-border p-10">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { spec: "Data Refresh Rate", value: "5 seconds (configurable)" },
                { spec: "Supported Plants", value: "Unlimited (included in all plans)" },
                { spec: "Widget Library", value: "50+ customizable widgets" },
                { spec: "Custom Dashboards", value: "Unlimited per user" },
                { spec: "User Accounts", value: "Unlimited (role-based access)" },
                { spec: "Data Retention", value: "25 years (full granularity)" },
                { spec: "API Access", value: "RESTful API with documentation" },
                { spec: "Mobile Apps", value: "iOS 12+ & Android 8+" },
                { spec: "Web Browsers", value: "Chrome, Safari, Firefox, Edge" },
                { spec: "Load Time", value: "<2 seconds (optimized)" },
                { spec: "Uptime SLA", value: "99.9% guaranteed" },
                { spec: "Security", value: "SSL, 2FA, role-based permissions" },
                { spec: "Data Centers", value: "AWS Mumbai (ISO 27001)" },
                { spec: "Export Formats", value: "Excel, CSV, PDF, JSON" },
                { spec: "Language Support", value: "English, Hindi + 10 regional" },
                { spec: "Themes", value: "Light & dark mode" },
                { spec: "White-Label", value: "Available for 100+ MW portfolios" },
                { spec: "Integration", value: "SCADA, ERP, DMS compatible" }
              ].map((spec, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-6 border-b border-border last:border-0">
                  <Monitor className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
            <h2 className="text-white mb-6">Experience India's Best Solar Dashboard</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 500+ plants monitoring 2000+ MW with SolarLive's award-winning platform
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request Live Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  Schedule Dashboard Tour
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-[13px] text-white/50 mb-4">Trusted by India's Leading Solar Developers</p>
              <div className="flex items-center justify-center gap-8 text-white/40 text-[12px] font-medium">
                <span>Adani Green Energy</span>
                <span>•</span>
                <span>Azure Power</span>
                <span>•</span>
                <span>ReNew Power</span>
                <span>•</span>
                <span>NTPC Renewable</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}