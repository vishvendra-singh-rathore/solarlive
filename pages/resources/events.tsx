import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { Calendar, ArrowRight, MapPin, Clock, Users, Video, ExternalLink, CheckCircle } from "lucide-react";

export function EventsPage() {
  const upcomingEvents = [
    {
      type: "Webinar",
      title: "AI-Powered Predictive Maintenance: Live Demo & Q&A",
      date: "February 20, 2025",
      time: "3:00 PM - 4:30 PM IST",
      format: "Online",
      attendees: "250+ registered",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      description: "Live demonstration of predictive maintenance AI identifying equipment failures 60-90 days in advance, with real-world case study from 150 MW portfolio. Interactive Q&A with our AI team.",
      topics: [
        "Failure prediction algorithms explained",
        "Reading AI confidence scores",
        "Case study: 40% downtime reduction",
        "Implementation roadmap"
      ],
      speaker: {
        name: "Dr. Rajesh Kumar",
        role: "Chief Technology Officer",
        company: "SolarLive"
      },
      registrationOpen: true
    },
    {
      type: "Workshop",
      title: "SCADA Integration Masterclass: DNP3 & IEC 61850",
      date: "February 25, 2025",
      time: "10:00 AM - 5:00 PM IST",
      format: "Hybrid (Online + Bangalore Office)",
      attendees: "50 seats available",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800",
      description: "Full-day hands-on workshop covering SCADA protocol implementation, SLDC integration, point mapping, and commissioning workflows. Bring your laptop for practical exercises.",
      topics: [
        "DNP3 Level 3 certification requirements",
        "IEC 61850 MMS configuration",
        "SLDC coordination & approval process",
        "Live protocol analyzer demonstration",
        "Troubleshooting common issues"
      ],
      speaker: {
        name: "Anil Sharma",
        role: "Senior Integration Engineer",
        company: "SolarLive"
      },
      registrationOpen: true
    },
    {
      type: "Webinar",
      title: "Portfolio Management Best Practices for 100+ MW",
      date: "March 5, 2025",
      time: "2:00 PM - 3:30 PM IST",
      format: "Online",
      attendees: "300+ registered",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800",
      description: "Learn how utility-scale operators manage multi-site portfolios using centralized dashboards, automated benchmarking, and unified alarm management across 10+ plants.",
      topics: [
        "Centralized monitoring architecture",
        "Cross-site benchmarking methodology",
        "Crew optimization across portfolio",
        "Fleet-level analytics & reporting"
      ],
      speaker: {
        name: "Sanjay Malhotra",
        role: "Portfolio Operations Director",
        company: "Leading IPP"
      },
      registrationOpen: true
    }
  ];

  const pastEvents = [
    {
      type: "Conference",
      title: "REI Expo 2024: Solar Monitoring Innovation Showcase",
      date: "December 10, 2024",
      location: "India Expo Centre, Greater Noida",
      attendees: "5,000+ attendees",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      recordingAvailable: true
    },
    {
      type: "Webinar",
      title: "Soiling Loss Economics: Optimizing Cleaning ROI",
      date: "January 15, 2025",
      attendees: "420 attendees",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
      recordingAvailable: true
    },
    {
      type: "Workshop",
      title: "String-Level Analytics: Finding Hidden Performance Issues",
      date: "January 22, 2025",
      location: "SolarLive Bangalore Office",
      attendees: "35 attendees",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800",
      recordingAvailable: false
    },
    {
      type: "Webinar",
      title: "Energy Forecasting for Grid Compliance",
      date: "January 29, 2025",
      attendees: "380 attendees",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      recordingAvailable: true
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
              <Calendar className="w-3 h-3" />
              EVENTS & WEBINARS
            </div>
            
            <h1 className="mb-6">Events & Webinars</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              Join our webinars, workshops, and industry events to learn from experts, see live demos, and network with solar monitoring professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-[32px] font-bold text-foreground mb-2">Upcoming Events</h2>
            <p className="text-[15px] text-muted-foreground">Register for our latest webinars and workshops</p>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-[300px,1fr] gap-8 bg-white border border-primary/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary px-3 py-1.5 rounded-full">
                      <p className="text-[11px] font-bold text-white uppercase tracking-wider">
                        {event.type}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-[24px] font-bold text-foreground leading-tight mb-4">
                    {event.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-6 text-[14px] text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.format}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      {event.attendees}
                    </div>
                  </div>

                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Topics */}
                  <div className="mb-6">
                    <p className="text-[13px] font-bold text-foreground uppercase tracking-wider mb-3">
                      What You'll Learn
                    </p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {event.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-[13px] text-muted-foreground">{topic}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Speaker */}
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-foreground">{event.speaker.name}</p>
                        <p className="text-[12px] text-muted-foreground">{event.speaker.role}</p>
                      </div>
                    </div>

                    {event.registrationOpen && (
                      <Button size="lg" asChild>
                        <Link to="/contact" className="inline-flex items-center gap-2">
                          Register Now
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-[32px] font-bold text-foreground mb-2">Past Events</h2>
            <p className="text-[15px] text-muted-foreground">Watch recordings from our previous sessions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-primary/10 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  {event.recordingAvailable && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer hover:bg-black/50 transition-colors">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Video className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <div className="bg-foreground/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <p className="text-[11px] font-bold text-primary uppercase tracking-wider">
                        {event.type}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-[18px] font-bold text-foreground leading-tight mb-3">
                    {event.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 mb-4 text-[13px] text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.date}
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </div>
                    )}
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {event.attendees}
                    </div>
                  </div>

                  {event.recordingAvailable ? (
                    <Button variant="outline" className="w-full">
                      <Video className="w-4 h-4 mr-2" />
                      Watch Recording
                    </Button>
                  ) : (
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-[13px] text-muted-foreground">Recording not available</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Want to Host a Custom Session?</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              We offer private training sessions and custom workshops for teams and organizations
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Request Custom Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-10 text-[15px] bg-transparent border-white/30 text-white hover:bg-white/10">
                <Link to="#" className="inline-flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  View All Past Recordings
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
