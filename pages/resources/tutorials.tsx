import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Play, ArrowRight, Clock, Eye, BookOpen, Zap, Settings, BarChart3, Smartphone, Brain, Shield } from "lucide-react";

export function TutorialsPage() {
  const featuredVideo = {
    title: "Complete Platform Walkthrough: SolarLive End-to-End Training",
    description: "Comprehensive 45-minute training covering dashboard navigation, alarm configuration, report generation, mobile app usage, and advanced analytics features—perfect for new users.",
    duration: "45:32",
    views: "12,450",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    category: "Platform Training"
  };

  const videoCategories = [
    {
      name: "Getting Started",
      icon: Play,
      count: 8,
      videos: [
        {
          title: "Quick Start Guide: First 15 Minutes with SolarLive",
          duration: "15:20",
          views: "8,240",
          thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
          description: "Essential features tour for new users—dashboard overview, navigation basics, and key metrics explained"
        },
        {
          title: "Setting Up Your Plant Profile & Site Configuration",
          duration: "12:45",
          views: "6,120",
          thumbnail: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800",
          description: "Step-by-step plant configuration—inverter mapping, block definitions, and equipment hierarchy setup"
        },
        {
          title: "Alarm Configuration & Notification Setup",
          duration: "18:30",
          views: "5,890",
          thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
          description: "Configure custom alarms, set thresholds, and manage email/SMS notifications for critical events"
        }
      ]
    },
    {
      name: "Dashboard & Analytics",
      icon: BarChart3,
      count: 12,
      videos: [
        {
          title: "Understanding Performance Ratio & Key Metrics",
          duration: "22:15",
          views: "9,340",
          thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
          description: "Deep dive into PR calculation, CUF analysis, availability metrics, and benchmark comparisons"
        },
        {
          title: "Custom Report Generation & Scheduling",
          duration: "16:40",
          views: "7,230",
          thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
          description: "Create automated daily, weekly, monthly reports—customize templates and schedule email delivery"
        },
        {
          title: "String-Level Analysis & Heatmap Visualization",
          duration: "25:10",
          views: "6,450",
          thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
          description: "Identify underperforming strings using heatmaps, trend analysis, and comparative visualizations"
        }
      ]
    },
    {
      name: "AI Features",
      icon: Brain,
      count: 10,
      videos: [
        {
          title: "Predictive Maintenance: Interpreting AI Failure Warnings",
          duration: "20:35",
          views: "8,120",
          thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
          description: "How to read AI predictions, understand confidence scores, and plan preventive maintenance actions"
        },
        {
          title: "Soiling Detection: Optimizing Cleaning Schedules with AI",
          duration: "17:50",
          views: "6,780",
          thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
          description: "Use AI soiling analysis to determine optimal cleaning timing and maximize ROI"
        },
        {
          title: "Energy Forecasting: Day-Ahead & Monthly Projections",
          duration: "19:20",
          views: "5,940",
          thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
          description: "Understanding forecast accuracy, deviation analysis, and grid scheduling compliance"
        }
      ]
    },
    {
      name: "Mobile App",
      icon: Smartphone,
      count: 6,
      videos: [
        {
          title: "Mobile App Complete Guide: Monitoring On-the-Go",
          duration: "14:25",
          views: "7,560",
          thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
          description: "Full mobile app tour—dashboard, alerts, voice summary, site inspection tools, and offline mode"
        },
        {
          title: "Voice Summary Feature: Daily Audio Briefings",
          duration: "8:15",
          views: "6,340",
          thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800",
          description: "How to use voice summaries for hands-free daily updates and historical playback"
        },
        {
          title: "Site Inspection Workflow: Field Data Collection",
          duration: "16:55",
          views: "4,890",
          thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
          description: "Use mobile app for site inspections—photo capture, notes, GPS tagging, and work order management"
        }
      ]
    },
    {
      name: "SCADA & Integration",
      icon: Shield,
      count: 7,
      videos: [
        {
          title: "SCADA Integration Setup: DNP3 Configuration Step-by-Step",
          duration: "28:40",
          views: "3,240",
          thumbnail: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800",
          description: "Complete DNP3 SCADA setup guide—point mapping, protocol configuration, and SLDC commissioning"
        },
        {
          title: "IEC 61850 Integration for Substation Automation",
          duration: "24:15",
          views: "2,780",
          thumbnail: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800",
          description: "IEC 61850 client/server configuration, GOOSE messaging, and MMS communication setup"
        },
        {
          title: "API Integration Guide: Third-Party System Connectivity",
          duration: "21:30",
          views: "4,120",
          thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
          description: "REST API documentation, authentication, data pull/push workflows, and webhook configuration"
        }
      ]
    },
    {
      name: "Advanced Features",
      icon: Settings,
      count: 9,
      videos: [
        {
          title: "Multi-Site Portfolio Management & Benchmarking",
          duration: "26:45",
          views: "5,670",
          thumbnail: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800",
          description: "Manage 10+ plants from unified dashboard—cross-site comparisons and fleet analytics"
        },
        {
          title: "Custom Dashboard Creation & Widget Configuration",
          duration: "19:10",
          views: "4,340",
          thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
          description: "Build personalized dashboards with drag-and-drop widgets and custom KPI tracking"
        },
        {
          title: "User Management & Role-Based Access Control",
          duration: "15:20",
          views: "3,890",
          thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
          description: "Set up user roles, permissions, and multi-level access control for teams"
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-foreground to-[#0A0F1E] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-5 bg-primary/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <Play className="w-3 h-3" />
              VIDEO LIBRARY
            </div>
            
            <h1 className="mb-6">Video Tutorials</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              Step-by-step video guides covering every SolarLive feature—from quick-start tutorials to advanced SCADA integration and AI analytics configuration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-12 text-center">
            {[
              { metric: "52+", label: "Video Tutorials" },
              { metric: "8+ Hrs", label: "Total Content" },
              { metric: "25K+", label: "Total Views" }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-[28px] font-bold text-primary mb-1">{stat.metric}</p>
                <p className="text-[12px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 bg-gradient-to-b from-white to-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
              <p className="text-[11px] font-bold text-primary uppercase tracking-wider">Featured Tutorial</p>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 bg-white border border-primary/10 rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="relative aspect-video lg:aspect-auto group cursor-pointer">
              <ImageWithFallback
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-full object-cover"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
              </div>
              {/* Duration badge */}
              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <p className="text-[13px] font-bold text-white">{featuredVideo.duration}</p>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full inline-block mb-4">
                <p className="text-[11px] font-bold text-primary uppercase tracking-wider">
                  {featuredVideo.category}
                </p>
              </div>

              <h2 className="text-[32px] font-bold text-foreground leading-tight mb-4">
                {featuredVideo.title}
              </h2>
              
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                {featuredVideo.description}
              </p>

              <div className="flex items-center gap-6 text-[14px] text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {featuredVideo.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {featuredVideo.views} views
                </div>
              </div>

              <Button size="lg" className="w-full">
                <Play className="w-5 h-5 mr-2" fill="white" />
                Watch Tutorial
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {videoCategories.map((category, catIdx) => (
              <div key={catIdx}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-[24px] font-bold text-foreground">{category.name}</h2>
                    <p className="text-[13px] text-muted-foreground">{category.count} tutorials available</p>
                  </div>
                </div>

                {/* Videos Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.videos.map((video, vidIdx) => (
                    <motion.div
                      key={vidIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: vidIdx * 0.1 }}
                      className="group bg-white border border-primary/10 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    >
                      {/* Thumbnail */}
                      <div className="relative aspect-video overflow-hidden">
                        <ImageWithFallback
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Play overlay */}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                          </div>
                        </div>
                        {/* Duration */}
                        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                          <p className="text-[11px] font-bold text-white">{video.duration}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-[16px] font-bold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-[13px] text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                          {video.description}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                          <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
                            <Eye className="w-3.5 h-3.5" />
                            {video.views}
                          </div>
                          <div className="text-[12px] font-semibold text-primary group-hover:underline">
                            Watch Now
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-foreground to-[#0A0F1E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Need Personal Training?</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a live training session with our team for customized platform onboarding
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Schedule Training
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="/resources/downloads">
                  Download User Guide PDF
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
