import { motion } from "motion/react";
import { useState } from "react";
import { Home, Building2, Zap, Database, TrendingUp, Activity, Settings, FileText } from "lucide-react";
import heroImage from "figma:asset/ce9e590f8c289eebce553ec220cccf27759a31fd.png";

export function NetworkHeroVisualization() {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  // Three main installation zones
  const installationZones = [
    {
      id: "residential",
      x: "25%",
      y: "70%",
      label: "Residential Solar",
      description: "Rooftop installations for homes and housing complexes",
      icon: Home,
      stats: { installations: "5,000+", capacity: "150 MW" }
    },
    {
      id: "commercial",
      x: "50%",
      y: "75%",
      label: "Commercial & Industrial",
      description: "C&I rooftops and ground-mount installations",
      icon: Building2,
      stats: { installations: "2,500+", capacity: "800 MW" }
    },
    {
      id: "solar-plants",
      x: "75%",
      y: "70%",
      label: "Utility-Scale Solar Plants",
      description: "Large-scale solar farms and floating solar installations",
      icon: Zap,
      stats: { installations: "150+", capacity: "1.5 GW" }
    }
  ];

  // Floating feature icons around the cloud
  const featureIcons = [
    { id: "analytics", x: "20%", y: "35%", icon: TrendingUp, label: "Real-time Analytics" },
    { id: "monitoring", x: "15%", y: "45%", icon: Activity, label: "Performance Monitoring" },
    { id: "database", x: "80%", y: "40%", icon: Database, label: "Cloud Database" },
    { id: "settings", x: "85%", y: "48%", icon: Settings, label: "Remote Control" },
  ];

  return (
    <div className="relative w-full h-full min-h-[900px] flex flex-col items-center justify-center py-16">
      {/* Main Hero Image Section */}
      <div className="relative w-full max-w-6xl mx-auto px-6">
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main 3D Rendered Image with rounded container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={heroImage}
              alt="SolarLive Cloud connecting residential, commercial, and utility-scale solar"
              className="w-full h-auto object-cover"
            />

            {/* Subtle vignette for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none rounded-3xl" />

            {/* Central Cloud Hub Indicator - Subtle */}
            <motion.div
              className="absolute cursor-pointer"
              style={{
                left: "50%",
                top: "22%",
                transform: "translate(-50%, -50%)"
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1]
              }}
              onHoverStart={() => setHoveredZone("cloud-hub")}
              onHoverEnd={() => setHoveredZone(null)}
              whileHover={{ scale: 1.05 }}
            >
              {/* Subtle pulsing ring around cloud */}
              <motion.div
                className="absolute inset-0 w-24 h-24 -translate-x-12 -translate-y-12 rounded-full"
                style={{
                  border: "1px solid rgba(214, 117, 6, 0.2)",
                }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Tooltip for cloud hub */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-8 whitespace-nowrap pointer-events-none z-50"
                initial={{ opacity: 0, y: -5 }}
                animate={{
                  opacity: hoveredZone === "cloud-hub" ? 1 : 0,
                  y: hoveredZone === "cloud-hub" ? 0 : -5
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative">
                  <div className="bg-black/95 backdrop-blur-xl rounded-xl px-6 py-3 shadow-2xl">
                    <div className="font-semibold text-white text-sm tracking-wide mb-1">
                      SolarLive Cloud Hub
                    </div>
                    <div className="text-[11px] text-white/70 font-light tracking-wide">
                      Central intelligence platform processing 1B+ data points daily
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D67506] to-transparent rounded-full" />
                </div>
              </motion.div>
            </motion.div>

            {/* Interactive Installation Zones - Small Sun Design */}
            {installationZones.map((zone, index) => (
              <motion.div
                key={zone.id}
                className="absolute cursor-pointer"
                style={{
                  left: zone.x,
                  top: zone.y,
                  transform: "translate(-50%, -50%)"
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1 + index * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onHoverStart={() => setHoveredZone(zone.id)}
                onHoverEnd={() => setHoveredZone(null)}
                whileHover={{ scale: 1.3 }}
              >
                {/* Expanding rings on hover only */}
                <motion.div
                  className="absolute inset-0 w-16 h-16 -translate-x-8 -translate-y-8 rounded-full"
                  style={{
                    border: "1px solid rgba(214, 117, 6, 0.3)",
                  }}
                  animate={{
                    scale: hoveredZone === zone.id ? [1, 2] : 1,
                    opacity: hoveredZone === zone.id ? [0.5, 0] : 0
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: hoveredZone === zone.id ? Infinity : 0,
                    ease: "easeOut"
                  }}
                />
                
                {/* Small sun indicator - minimal */}
                <motion.div
                  className="w-6 h-6 rounded-full flex items-center justify-center relative z-10"
                  style={{
                    background: "radial-gradient(circle, rgba(214, 117, 6, 0.7) 0%, rgba(214, 117, 6, 0.4) 50%, rgba(214, 117, 6, 0) 100%)",
                    boxShadow: "0 0 12px rgba(214, 117, 6, 0.4)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 12px rgba(214, 117, 6, 0.4)",
                      "0 0 18px rgba(214, 117, 6, 0.6)",
                      "0 0 12px rgba(214, 117, 6, 0.4)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Center bright dot */}
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </motion.div>

                {/* Detailed tooltip card - only visible on hover */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 whitespace-nowrap pointer-events-none z-50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredZone === zone.id ? 1 : 0,
                    y: hoveredZone === zone.id ? 0 : 10
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="relative">
                    {/* Glass card with stats */}
                    <div className="bg-black/95 backdrop-blur-xl rounded-xl px-6 py-4 min-w-[280px] shadow-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#D67506]/20 rounded-lg flex items-center justify-center">
                          <zone.icon className="w-5 h-5 text-[#D67506]" />
                        </div>
                        <div className="font-semibold text-white text-sm tracking-wide">
                          {zone.label}
                        </div>
                      </div>
                      <div className="text-[10px] text-white/60 font-light tracking-wide mb-3 leading-relaxed">
                        {zone.description}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <div>
                          <div className="text-[9px] text-white/50 uppercase tracking-wider mb-1">Installations</div>
                          <div className="text-xs font-bold text-[#D67506]">{zone.stats.installations}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[9px] text-white/50 uppercase tracking-wider mb-1">Capacity</div>
                          <div className="text-xs font-bold text-[#D67506]">{zone.stats.capacity}</div>
                        </div>
                      </div>
                    </div>
                    {/* Accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D67506] to-transparent rounded-full" />
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Floating Feature Icons - More subtle */}
            {featureIcons.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="absolute cursor-pointer"
                style={{
                  left: feature.x,
                  top: feature.y,
                  transform: "translate(-50%, -50%)"
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.5 + index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                onHoverStart={() => setHoveredZone(feature.id)}
                onHoverEnd={() => setHoveredZone(null)}
                whileHover={{ scale: 1.3 }}
              >
                {/* Subtle glowing point */}
                <motion.div
                  className="w-6 h-6 rounded-full flex items-center justify-center relative z-10"
                  style={{
                    background: "radial-gradient(circle, rgba(214, 117, 6, 0.7) 0%, rgba(214, 117, 6, 0.4) 50%, rgba(214, 117, 6, 0) 100%)",
                    boxShadow: "0 0 12px rgba(214, 117, 6, 0.4)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 12px rgba(214, 117, 6, 0.4)",
                      "0 0 18px rgba(214, 117, 6, 0.6)",
                      "0 0 12px rgba(214, 117, 6, 0.4)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  {/* Center bright dot */}
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </motion.div>

                {/* Mini tooltip */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 whitespace-nowrap pointer-events-none z-50"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{
                    opacity: hoveredZone === feature.id ? 1 : 0,
                    y: hoveredZone === feature.id ? 0 : 5
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-black/95 backdrop-blur-xl rounded-lg px-3 py-1.5 shadow-xl">
                    <div className="text-white text-[10px] font-medium tracking-wide">
                      {feature.label}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Animated data flow particles - more subtle */}
            {installationZones.map((zone, i) => (
              <motion.div
                key={`flow-${zone.id}`}
                className="absolute w-1 h-1 rounded-full pointer-events-none"
                style={{
                  left: zone.x,
                  top: "25%",
                  background: "radial-gradient(circle, rgba(214, 117, 6, 0.8) 0%, rgba(214, 117, 6, 0) 70%)",
                  filter: "blur(0.5px)"
                }}
                animate={{
                  y: [0, 320],
                  opacity: [0, 0.6, 0.6, 0],
                  scale: [0.5, 1, 1, 0.3]
                }}
                transition={{
                  duration: 3.5,
                  delay: i * 0.8,
                  repeat: Infinity,
                  ease: "easeIn"
                }}
              />
            ))}
          </div>

          {/* Minimal caption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-6 text-center"
          >
            <p className="text-xs text-muted-foreground font-light tracking-wider uppercase">
              Unified platform for residential, commercial & utility-scale solar
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}