import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { useState, useEffect } from "react";
import { 
  ArrowRight,
  AlertCircle,
  Database,
  Brain,
  TrendingUp,
  Pause,
  Play,
  Zap,
  Shield,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import howWeWorkStep1 from "figma:asset/cefd731eddf521ade66ea16e1d8e01093e5a3001.png";
import howWeWorkStep2 from "figma:asset/2c840412b212439198fbf994001ff1d202aa584f.png";
import howWeWorkStep3 from "figma:asset/09ecca83c56e10827fa852eafe856be89a8daa0b.png";
import howWeWorkStep4 from "figma:asset/d476e1e14e9e0e6253147cc2873890d525fda002.png";

export function HeroWithSlideshow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      step: "01",
      phase: "Monitor",
      title: "Real-Time Visibility",
      description: "Sub-second data refresh across every inverter, string, and sensor.",
      illustration: howWeWorkStep1,
      icon: AlertCircle,
      accent: "from-red-500 to-orange-500"
    },
    {
      step: "02",
      phase: "Connect",
      title: "Unified Data Platform",
      description: "100+ inverter brands. Any protocol. One dashboard.",
      illustration: howWeWorkStep2,
      icon: Database,
      accent: "from-blue-500 to-cyan-500"
    },
    {
      step: "03",
      phase: "Analyze",
      title: "AI-Driven Intelligence",
      description: "Predict failures before they happen. Trained on 500+ MW of data.",
      illustration: howWeWorkStep3,
      icon: Brain,
      accent: "from-purple-500 to-pink-500"
    },
    {
      step: "04",
      phase: "Optimize",
      title: "Measurable Results",
      description: "15% yield improvement. 40% less downtime. ROI in months.",
      illustration: howWeWorkStep4,
      icon: TrendingUp,
      accent: "from-green-500 to-emerald-500"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((current) => (current + 1) % steps.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isPlaying, steps.length]);

  const currentStep = steps[activeStep];

  return (
    <section className="relative bg-gradient-to-br from-white via-slate-50/30 to-white overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(214, 117, 6, 0.08) 0%, transparent 70%)",
            filter: "blur(80px)"
          }}
        />
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(#0F172A 1px, transparent 1px),
              linear-gradient(90deg, #0F172A 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12 items-center">
          
          {/* Left Column - 60% - Clear, Compact Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-full">
              <motion.div 
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[10px] font-bold text-foreground uppercase tracking-[0.15em]">
                Solar Monitoring Platform
              </span>
            </div>

            {/* Headline - Clear & Simple */}
            <div className="space-y-4">
              <h1 className="text-[38px] lg:text-[46px] text-foreground leading-[1.12] tracking-tight font-bold">
                Solar Monitoring Platform<br />
                That Turns{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">Data Into Decisions</span>
                  <motion.div
                    className="absolute bottom-1.5 left-0 right-0 h-2.5 bg-primary/10 -z-0 rounded"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </span>
              </h1>
              
              <p className="text-[17px] text-muted-foreground leading-[1.65] max-w-[540px]">
                See which inverter is down, which string is weak, and what needs fixing—all in one screen. Real-time alerts mean you catch problems before they cost lakhs in lost generation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" asChild className="h-12 px-7 text-[15px] font-semibold">
                <Link to="/contact" className="flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-7 text-[15px] font-semibold">
                <Link to="/solutions">
                  Explore Platform
                </Link>
              </Button>
            </div>

            {/* Compact Stats */}
            <div className="flex items-center gap-8 pt-6 border-t border-border/50">
              {[
                { value: "500+", label: "MW Live", icon: Zap },
                { value: "99.8%", label: "Uptime", icon: Shield },
                { value: "+15%", label: "Yield", icon: TrendingUp }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-[19px] font-bold text-foreground leading-none mb-1">{stat.value}</div>
                    <div className="text-[11px] text-muted-foreground uppercase tracking-wide font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - 40% - Compact Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Slideshow Card - Compact & Simple */}
            <div className="relative bg-white border border-border rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300">
              
              {/* Auto-play status indicator - Top right */}
              <motion.div 
                className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2 py-1 bg-white/95 backdrop-blur-sm rounded-full border border-border/50 shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={isPlaying ? {
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.6, 1]
                  } : {}}
                  transition={isPlaying ? { duration: 1.5, repeat: Infinity } : {}}
                />
                <span className="text-[9px] font-bold text-foreground uppercase tracking-wider">
                  {isPlaying ? 'Playing' : 'Paused'}
                </span>
              </motion.div>

              {/* Progress bars with glow effect when playing */}
              <div className="flex h-0.5 bg-border/30 relative">
                {isPlaying && (
                  <motion.div 
                    className="absolute inset-0 bg-primary/20 blur-sm"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
                {steps.map((step, idx) => (
                  <div key={idx} className="flex-1 relative overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      style={{
                        width: idx === activeStep ? `${progress}%` : idx < activeStep ? '100%' : '0%'
                      }}
                      animate={idx === activeStep && isPlaying ? {
                        boxShadow: ['0 0 2px rgba(214, 117, 6, 0.3)', '0 0 4px rgba(214, 117, 6, 0.6)', '0 0 2px rgba(214, 117, 6, 0.3)']
                      } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="p-4"
                >
                  {/* Image - Compact with hover scale */}
                  <motion.div 
                    className="relative rounded-lg overflow-hidden mb-4 bg-muted/20 group/img cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    <div className="relative w-full" style={{ paddingBottom: '52%' }}>
                      <motion.img
                        src={currentStep.illustration}
                        alt={currentStep.title}
                        className="absolute inset-0 w-full h-full object-contain"
                        initial={{ scale: 1.03 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/[0.03] to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>

                  {/* Content - Simple & Clear */}
                  <div className="space-y-2.5">
                    {/* Phase with icon - Enhanced */}
                    <motion.div 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <motion.div 
                        className={`w-7 h-7 rounded-lg bg-gradient-to-br ${currentStep.accent} flex items-center justify-center shadow-sm`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <currentStep.icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                      </motion.div>
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <span className="font-mono font-bold text-muted-foreground">{currentStep.step}</span>
                        <motion.span 
                          className="text-border"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >•</motion.span>
                        <span className="font-bold text-primary uppercase tracking-wide">{currentStep.phase}</span>
                      </div>
                    </motion.div>

                    {/* Title with animated entrance */}
                    <motion.h3 
                      className="text-[17px] font-bold text-foreground leading-tight"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      {currentStep.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-[13px] text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {currentStep.description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Enhanced Controls */}
              <div className="px-4 pb-4">
                <div className="flex items-center justify-center gap-3 border-t border-border/50 pt-3">
                  
                  {/* Previous */}
                  <motion.button
                    onClick={() => {
                      setActiveStep((current) => (current - 1 + steps.length) % steps.length);
                      setProgress(0);
                    }}
                    className="w-9 h-9 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors relative overflow-hidden group/btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-4 h-4 text-foreground group-hover/btn:text-primary transition-colors relative z-10" strokeWidth={2.5} />
                    <div className="absolute inset-0 bg-primary/5 scale-0 group-hover/btn:scale-100 transition-transform duration-300 rounded-lg" />
                  </motion.button>
                  
                  {/* Dots with micro-interactions */}
                  <div className="flex items-center gap-1.5">
                    {steps.map((step, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => {
                          setActiveStep(idx);
                          setProgress(0);
                        }}
                        className={`rounded-full transition-all ${
                          idx === activeStep 
                            ? 'w-6 h-2 bg-primary shadow-sm shadow-primary/20' 
                            : 'w-2 h-2 bg-border hover:bg-muted-foreground/40'
                        }`}
                        whileHover={{ scale: 1.2, y: -1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Next */}
                  <motion.button
                    onClick={() => {
                      setActiveStep((current) => (current + 1) % steps.length);
                      setProgress(0);
                    }}
                    className="w-9 h-9 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors relative overflow-hidden group/btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Next"
                  >
                    <ChevronRight className="w-4 h-4 text-foreground group-hover/btn:text-primary transition-colors relative z-10" strokeWidth={2.5} />
                    <div className="absolute inset-0 bg-primary/5 scale-0 group-hover/btn:scale-100 transition-transform duration-300 rounded-lg" />
                  </motion.button>

                  {/* Play/Pause - Enhanced with visual feedback */}
                  <motion.button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-9 h-9 rounded-lg bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors ml-1 relative"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    animate={isPlaying ? {
                      boxShadow: [
                        '0 0 0 0 rgba(214, 117, 6, 0.4)',
                        '0 0 0 4px rgba(214, 117, 6, 0)',
                        '0 0 0 0 rgba(214, 117, 6, 0)'
                      ]
                    } : {}}
                    transition={isPlaying ? { duration: 2, repeat: Infinity } : {}}
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    <motion.div
                      animate={{ rotate: isPlaying ? 0 : 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5 text-white" fill="white" />
                      ) : (
                        <Play className="w-3.5 h-3.5 text-white ml-0.5" fill="white" />
                      )}
                    </motion.div>
                  </motion.button>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}