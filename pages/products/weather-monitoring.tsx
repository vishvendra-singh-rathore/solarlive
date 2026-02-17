import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Cloud, ArrowRight, Check, Sun, Wind, Droplets, Thermometer, Gauge, Eye, BarChart3, Shield, Award, Settings, Download, Radio, Satellite, CloudRain, CloudSnow, CloudSun, TrendingUp, Clock, Database, Target, Zap, Activity } from "lucide-react";

export function WeatherMonitoringPage() {
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
              <Cloud className="w-3 h-3" />
              PRECISION WEATHER INTELLIGENCE
            </div>
            
            <h1 className="mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Weather Monitoring System (WMS)
            </h1>
            <p className="text-[20px] text-white/70 leading-relaxed mb-10">
              Industrial-grade meteorological sensors and satellite-integrated weather data platform for accurate solar performance analysis, yield forecasting, and climate-normalized reporting.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Sun, metric: "±2%", label: "Accuracy", sublabel: "ISO certified" },
                { icon: Gauge, metric: "1 sec", label: "Sampling Rate", sublabel: "Real-time data" },
                { icon: Wind, metric: "8 Sensors", label: "Measurements", sublabel: "Complete weather" },
                { icon: Thermometer, metric: "-40 to 85°C", label: "Range", sublabel: "Extreme conditions" }
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

      {/* What is WMS */}
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
                  <Cloud className="w-6 h-6 text-primary" />
                </div>
                <span className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  Understanding WMS
                </span>
              </div>
              <h2 className="mb-6">What is a Weather Monitoring System?</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                A <strong className="text-foreground">Weather Monitoring System (WMS)</strong> is the meteorological intelligence backbone of your solar power plant. It measures real-time environmental conditions—solar irradiance, temperature, wind speed, humidity, rainfall—that directly impact solar energy generation.
              </p>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                WMS is not just about knowing if it's sunny or cloudy. It provides <strong className="text-foreground">high-precision data</strong> that enables accurate performance ratio calculations, yield forecasting, soiling detection, and weather-normalized reporting—essential for understanding your plant's true performance independent of weather variations.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: "Accurate Performance Analysis", desc: "Calculate true PR by accounting for weather losses" },
                  { label: "Yield Forecasting", desc: "Predict generation based on weather forecasts" },
                  { label: "Soiling Detection", desc: "Identify when panels need cleaning" },
                  { label: "Compliance Reporting", desc: "Weather-normalized reports for lenders & investors" }
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
                  src="https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200"
                  alt="Weather Monitoring Station"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why WMS is Critical */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Mission-Critical Data
            </p>
            <h2 className="mb-5">Why Weather Monitoring is Essential for Solar</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Weather data is the missing link between generated power and plant performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Accurate Performance Ratio",
                description: "Without irradiance data, you can't calculate true Performance Ratio (PR). A plant generating 80% might be excellent in cloudy conditions or terrible in full sun—you won't know without weather data.",
                impact: "±15% PR accuracy"
              },
              {
                icon: TrendingUp,
                title: "Energy Yield Forecasting",
                description: "Predict tomorrow's generation based on weather forecasts. Essential for grid scheduling, power trading, and meeting PPA commitments. Avoid deviation charges and optimize revenue.",
                impact: "90%+ forecast accuracy"
              },
              {
                icon: Droplets,
                title: "Soiling Loss Detection",
                description: "Compare actual vs expected generation based on irradiance. Detect when dust/soiling reduces output by 5-20%, triggering timely cleaning to maximize energy yield and ROI.",
                impact: "Save 5-15% annual losses"
              },
              {
                icon: Database,
                title: "Weather-Normalized Reporting",
                description: "Investors and lenders demand weather-normalized performance reports. Show that low generation was due to cloudy weather, not equipment failure—protecting your reputation and compliance.",
                impact: "Required for financing"
              },
              {
                icon: Shield,
                title: "Equipment Protection",
                description: "High wind alerts protect trackers from storm damage. Temperature data prevents inverter overheating. Rain alerts pause O&M activities. Weather intelligence protects your equipment investment.",
                impact: "Prevent crore-level damage"
              },
              {
                icon: BarChart3,
                title: "Benchmarking & Analytics",
                description: "Compare your plant against regional benchmarks or sister sites using weather-normalized metrics. Identify underperformance that's masked by weather variations—enabling data-driven O&M.",
                impact: "Industry-standard reporting"
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

      {/* How WMS Works - Visual Flow */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              System Architecture
            </p>
            <h2 className="mb-5">How SolarLive WMS Works</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              From on-site sensors to actionable weather intelligence
            </p>
          </div>

          {/* Visual Infographic Flow */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[31px] top-16 bottom-16 w-0.5 bg-primary/20 hidden md:block" />
              
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    icon: Sun,
                    title: "On-Site Sensor Installation",
                    description: "Industrial-grade weather sensors mounted at your plant site measure real-time meteorological conditions. Pyranometers for irradiance, anemometers for wind, PT100 RTDs for temperature, rain gauges, and humidity sensors.",
                    details: ["ISO 9060 Class A pyranometers", "±3% irradiance accuracy", "Wind speed: 0.3-75 m/s range", "Temperature: -40°C to +80°C"]
                  },
                  {
                    step: "2",
                    icon: Radio,
                    title: "Real-Time Data Collection",
                    description: "Weather sensors connect to data loggers that sample measurements every 1 second and transmit averaged data every minute. Analog signals (4-20mA/0-10V) are digitized and buffered locally for reliability.",
                    details: ["1-second sampling rate", "1-minute data transmission", "Local buffering for offline periods", "RS485/Modbus connectivity"]
                  },
                  {
                    step: "3",
                    icon: Satellite,
                    title: "Satellite Data Integration",
                    description: "SolarLive integrates satellite weather data from NASA POWER, Meteosat, and other sources. This provides historical weather archives, regional forecasts, and backup data when on-site sensors fail.",
                    details: ["NASA POWER API integration", "Historical weather archive", "7-day weather forecasts", "Satellite irradiance backup"]
                  },
                  {
                    step: "4",
                    icon: Database,
                    title: "Data Processing & Analytics",
                    description: "Weather data is processed with quality checks, outlier removal, and sensor drift compensation. Analytics engines calculate POA irradiance, temperature-corrected PR, soiling ratios, and weather-normalized performance metrics.",
                    details: ["Automated quality checks", "Sensor drift compensation", "POA irradiance calculation", "Weather-normalized metrics"]
                  },
                  {
                    step: "5",
                    icon: Eye,
                    title: "Visualization & Alerts",
                    description: "Weather data is visualized on dashboards alongside generation data. Alerts trigger for high wind (tracker protection), extreme temperature (inverter cooling), heavy rain (O&M safety), and low irradiance (soiling detection).",
                    details: ["Real-time weather widgets", "Weather vs generation overlay", "Configurable weather alerts", "Forecast integration"]
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative flex gap-6 items-start"
                  >
                    {/* Step Circle */}
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-[24px] font-bold shadow-lg z-10">
                      {item.step}
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1 bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[20px] font-bold text-foreground mb-2">{item.title}</h3>
                          <p className="text-[15px] text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-[13px] text-foreground">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Professional Installation
            </p>
            <h2 className="mb-5">WMS Installation & Commissioning</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Expert installation completed in 1-2 days with full calibration and validation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Installation Steps */}
            <div className="space-y-6">
              {[
                {
                  step: "Step 1",
                  title: "Site Survey & Sensor Placement",
                  description: "Our meteorologists assess your site to determine optimal sensor placement. Pyranometers must match module tilt/azimuth, anemometers need clear airflow, and sensors must avoid shading or reflections—critical for data accuracy.",
                  duration: "0.5 day"
                },
                {
                  step: "Step 2",
                  title: "Hardware Installation & Mounting",
                  description: "Install weather station masts (2-10 meters height), mount sensors with precise leveling, run cabling with IP67 connectors, install data loggers in control rooms, and ensure proper grounding for lightning protection.",
                  duration: "1 day"
                },
                {
                  step: "Step 3",
                  title: "Calibration & Validation",
                  description: "Verify sensor accuracy against reference instruments, calibrate analog inputs, validate data ranges, and perform sun-tracking checks for pyranometers. Ensures ±3% irradiance accuracy and reliable long-term measurements.",
                  duration: "0.5 day"
                },
                {
                  step: "Step 4",
                  title: "System Integration & Testing",
                  description: "Connect weather data to SolarLive RMS platform, configure POA irradiance calculations, set up weather alerts, integrate satellite data backup, and validate data transmission. Test all sensors under real conditions.",
                  duration: "0.5 day"
                },
                {
                  step: "Step 5",
                  title: "Documentation & Training",
                  description: "Provide sensor calibration certificates (IEC 61724 compliant), installation documentation, O&M manuals, and train your team on dashboard usage, sensor maintenance, and troubleshooting. Include annual recalibration schedule.",
                  duration: "0.5 day"
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-[11px] text-primary font-bold uppercase tracking-wider bg-primary/10 px-3 py-1.5 rounded-full">
                      {step.step}
                    </span>
                    <span className="text-[13px] text-muted-foreground font-medium">{step.duration}</span>
                  </div>
                  <h3 className="text-[18px] font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Installation Image & Info */}
            <div className="sticky top-24">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1000"
                  alt="Weather Station Installation"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-border">
                <h3 className="text-[18px] font-bold text-foreground mb-6">Installation Includes</h3>
                <div className="space-y-3">
                  {[
                    "ISO 9060 Class A pyranometer (GHI/POA)",
                    "Back-of-module temperature sensor",
                    "Ambient temperature sensor (PT100)",
                    "Anemometer (wind speed & direction)",
                    "Relative humidity sensor",
                    "Rain gauge (optional)",
                    "Weather station mast (2-10m)",
                    "Data logger with Modbus output",
                    "Satellite data integration",
                    "Calibration certificates (IEC 61724)",
                    "1-year warranty + annual recalibration",
                    "O&M training for site team"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-[15px] text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Data WMS Provides */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Comprehensive Meteorological Data
            </p>
            <h2 className="mb-5">What Data Does SolarLive WMS Measure?</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              15+ weather parameters tracked with research-grade accuracy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Solar Irradiance",
                icon: Sun,
                color: "primary",
                metrics: [
                  "Global Horizontal Irradiance (GHI)",
                  "Plane of Array Irradiance (POA)",
                  "Diffuse Horizontal Irradiance (DHI)",
                  "Direct Normal Irradiance (DNI)",
                  "Spectral irradiance (optional)",
                  "Cumulative daily irradiation (kWh/m²)"
                ]
              },
              {
                category: "Temperature Sensors",
                icon: Thermometer,
                color: "primary",
                metrics: [
                  "Ambient air temperature (°C)",
                  "Module back-surface temperature",
                  "Panel temperature (infrared)",
                  "Inverter temperature (optional)",
                  "Min/max daily temperature",
                  "Degree heating/cooling days"
                ]
              },
              {
                category: "Wind & Atmospheric",
                icon: Wind,
                color: "primary",
                metrics: [
                  "Wind speed (m/s)",
                  "Wind direction (degrees)",
                  "Wind gusts (peak speed)",
                  "Atmospheric pressure (mBar)",
                  "Air density (kg/m³)",
                  "Beaufort scale classification"
                ]
              },
              {
                category: "Humidity & Precipitation",
                icon: Droplets,
                color: "primary",
                metrics: [
                  "Relative humidity (%)",
                  "Absolute humidity (g/m³)",
                  "Dew point temperature",
                  "Rainfall amount (mm)",
                  "Rainfall intensity (mm/hr)",
                  "Snowfall detection (optional)"
                ]
              },
              {
                category: "Calculated Metrics",
                icon: BarChart3,
                color: "primary",
                metrics: [
                  "Soiling ratio (expected vs actual)",
                  "Temperature-corrected PR",
                  "Weather-normalized generation",
                  "Clearness index (cloud cover proxy)",
                  "Sun elevation & azimuth angles",
                  "Day length & sunrise/sunset times"
                ]
              },
              {
                category: "Forecasts & Alerts",
                icon: CloudSun,
                color: "primary",
                metrics: [
                  "7-day weather forecast",
                  "Hourly generation forecast",
                  "High wind alerts (tracker safety)",
                  "Extreme temperature warnings",
                  "Heavy rain/storm alerts",
                  "Low irradiance notifications"
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
                  {category.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-[14px] text-foreground leading-relaxed">{metric}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SolarLive WMS */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Industry-Leading Accuracy
            </p>
            <h2 className="mb-5">Why SolarLive WMS is the Best Choice</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Research-grade sensors with enterprise reliability and expert installation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "ISO 9060 Class A Sensors",
                description: "We use only Tier-1 pyranometers (Kipp & Zonen, Hukseflux, EKO) with ISO 9060 Class A certification. ±3% accuracy ensures reliable performance ratio calculations—critical for investor reporting and performance guarantees.",
                icon: Award,
                stats: "±3% irradiance accuracy"
              },
              {
                title: "IEC 61724 Compliance",
                description: "Our weather stations are designed per IEC 61724-1:2017 standards—the global benchmark for solar monitoring. Ensures your performance data is accepted by lenders, insurance companies, and international investors.",
                icon: Shield,
                stats: "IEC 61724-1:2017 certified"
              },
              {
                title: "Dual GHI + POA Measurement",
                description: "Unlike basic systems with only GHI sensors, we install POA (Plane of Array) pyranometers matching your module tilt/azimuth. Provides accurate irradiance on panel surface—essential for PR calculations and soiling detection.",
                icon: Target,
                stats: "POA + GHI dual measurement"
              },
              {
                title: "Expert Meteorologist Installation",
                description: "Our installation team includes trained meteorologists who understand sensor placement criticality. Proper leveling, shading analysis, and cable routing ensures long-term measurement accuracy—not just plug-and-play.",
                icon: Settings,
                stats: "Meteorologist-led installation"
              },
              {
                title: "Satellite Data Backup",
                description: "Integrated with NASA POWER, Meteosat, and Solcast APIs. When on-site sensors fail or during maintenance, satellite data automatically fills gaps—ensuring zero data loss for reporting and analytics.",
                icon: Satellite,
                stats: "Zero data loss guarantee"
              },
              {
                title: "Advanced Soiling Analytics",
                description: "Our algorithms compare expected vs actual generation based on irradiance, detecting soiling losses as small as 2-3%. Automated alerts trigger cleaning schedules—saving 5-15% annual yield losses from dust accumulation.",
                icon: Droplets,
                stats: "2-3% soiling detection"
              },
              {
                title: "Annual Recalibration Service",
                description: "Sensors drift over time (±1-2% per year). We provide annual recalibration against NABL-certified reference instruments, maintaining long-term accuracy—unlike competitors who skip this critical maintenance.",
                icon: Clock,
                stats: "Annual recalibration included"
              },
              {
                title: "Weather-Normalized Reports",
                description: "Automated reports showing actual vs expected generation, weather-normalized PR, and performance benchmarking. Export-ready formats for lenders, investors, and regulatory submissions—saving weeks of manual analysis.",
                icon: BarChart3,
                stats: "Automated compliance reports"
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
                    <p className="text-[15px] text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-[13px] font-bold text-primary">{reason.stats}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[11px] text-primary font-bold uppercase tracking-widest mb-4">
              Tangible Value
            </p>
            <h2 className="mb-5">How Users Benefit from SolarLive WMS</h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              Quantifiable improvements in operations, revenue, and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { benefit: "Accurate Performance Analysis", desc: "Calculate true PR within ±1% accuracy" },
              { benefit: "Soiling Loss Detection", desc: "Save 5-15% yield from timely cleaning" },
              { benefit: "Generation Forecasting", desc: "90%+ accuracy for grid scheduling" },
              { benefit: "Weather-Normalized Reports", desc: "Investor-ready compliance documentation" },
              { benefit: "Tracker Protection", desc: "High wind alerts prevent damage" },
              { benefit: "O&M Optimization", desc: "Schedule maintenance around weather" },
              { benefit: "Benchmarking Analytics", desc: "Compare against industry standards" },
              { benefit: "Regulatory Compliance", desc: "Meet MNRE/IEC reporting standards" },
              { benefit: "PPA Verification", desc: "Prove weather losses for deviations" },
              { benefit: "Insurance Claims", desc: "Weather data for loss verification" },
              { benefit: "Asset Valuation", desc: "Weather-normalized P50/P90 reports" },
              { benefit: "Grid Integration", desc: "Forecast for grid stability" }
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
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[15px] font-semibold text-foreground mb-1">{item.benefit}</p>
                    <p className="text-[13px] text-muted-foreground">{item.desc}</p>
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
              Technical Details
            </p>
            <h2 className="mb-5">WMS Technical Specifications</h2>
          </div>

          <div className="bg-white rounded-2xl border border-border p-10">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { spec: "Pyranometer Class", value: "ISO 9060 Class A (±3% accuracy)" },
                { spec: "Irradiance Range", value: "0-1500 W/m² (GHI/POA/DNI)" },
                { spec: "Temperature Sensor", value: "PT100 RTD (±0.15°C accuracy)" },
                { spec: "Temperature Range", value: "-40°C to +80°C" },
                { spec: "Wind Speed Range", value: "0.3 to 75 m/s" },
                { spec: "Wind Speed Accuracy", value: "±0.3 m/s or ±3% (whichever greater)" },
                { spec: "Humidity Sensor", value: "Capacitive (±2% RH accuracy)" },
                { spec: "Humidity Range", value: "0-100% RH" },
                { spec: "Rain Gauge", value: "Tipping bucket (0.2mm resolution)" },
                { spec: "Data Sampling", value: "1-second interval" },
                { spec: "Data Transmission", value: "1-minute averaged data" },
                { spec: "Communication Protocol", value: "Modbus RTU/TCP, RS485" },
                { spec: "Calibration Standard", value: "IEC 61724-1:2017 compliant" },
                { spec: "Sensor Warranty", value: "5 years (hardware)" },
                { spec: "Recalibration", value: "Annual (included for 3 years)" },
                { spec: "Weather Forecasts", value: "7-day hourly forecasts" },
                { spec: "Satellite Integration", value: "NASA POWER, Meteosat, Solcast" },
                { spec: "Environmental Rating", value: "IP65-IP67 (outdoor rated)" }
              ].map((spec, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-6 border-b border-border last:border-0">
                  <Gauge className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
            <h2 className="text-white mb-6">Deploy Research-Grade Weather Monitoring</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              ISO 9060 Class A sensors with IEC 61724 compliance—installed by meteorologists
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request Site Survey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/resources/data-sheets" className="inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Datasheet
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-[13px] text-white/50 mb-4">Sensors from World-Leading Manufacturers</p>
              <div className="flex items-center justify-center gap-8 text-white/40 text-[12px] font-medium">
                <span>Kipp & Zonen</span>
                <span>•</span>
                <span>Hukseflux</span>
                <span>•</span>
                <span>EKO Instruments</span>
                <span>•</span>
                <span>Campbell Scientific</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}