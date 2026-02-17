import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { BookOpen, ArrowRight, Clock, User, Tag, TrendingUp, Zap, Brain, Sun, Activity, Calendar } from "lucide-react";

export function ArticlesPage() {
  const featuredArticle = {
    title: "The ROI of Predictive Maintenance in Solar: 40% Downtime Reduction Explained",
    excerpt: "Deep dive into how machine learning models predict equipment failures 60-90 days in advance—case study analysis of 150 MW portfolio achieving ₹4.2 crore annual savings through proactive maintenance strategies.",
    author: "Dr. Rajesh Kumar",
    role: "Chief Technology Officer",
    date: "February 10, 2025",
    readTime: "12 min read",
    category: "Predictive Analytics",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
    tags: ["AI & ML", "O&M Optimization", "Cost Reduction"]
  };

  const articles = [
    {
      title: "Complete Guide to SCADA Integration: DNP3 vs IEC 61850 for Solar Plants",
      excerpt: "Technical comparison of SCADA protocols for grid compliance—when to use DNP3, IEC 61850, or Modbus, with real-world commissioning insights from 500+ MW deployments.",
      author: "Anil Sharma",
      role: "Senior Integration Engineer",
      date: "February 8, 2025",
      readTime: "15 min read",
      category: "Grid Integration",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800",
      tags: ["SCADA", "Grid Compliance", "Technical Guide"]
    },
    {
      title: "Soiling Loss Detection: Why 2-3% Sensitivity Matters More Than You Think",
      excerpt: "How detecting soiling losses earlier changes cleaning economics—calculation methodology, ROI optimization strategies, and rain forecast integration best practices.",
      author: "Priya Mehta",
      role: "Performance Analytics Lead",
      date: "February 5, 2025",
      readTime: "10 min read",
      category: "Performance Optimization",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
      tags: ["Soiling", "Cleaning Optimization", "Cost Savings"]
    },
    {
      title: "String-Level Monitoring: Finding the Hidden 5% Performance Loss",
      excerpt: "Step-by-step guide to identifying underperforming strings, bypass diode failures, and junction box issues—with thermal imaging correlation techniques and repair prioritization frameworks.",
      author: "Vikram Singh",
      role: "Field Operations Manager",
      date: "February 3, 2025",
      readTime: "18 min read",
      category: "Troubleshooting",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800",
      tags: ["String Analysis", "PR Improvement", "Diagnostics"]
    },
    {
      title: "Energy Forecasting Accuracy: 90%+ Forecast Compliance for Day-Ahead Market",
      excerpt: "Technical deep-dive into weather-based generation forecasting models—feature engineering, ensemble methods, and achieving SLDC compliance to avoid deviation penalties.",
      author: "Dr. Sunita Reddy",
      role: "AI Research Scientist",
      date: "January 30, 2025",
      readTime: "20 min read",
      category: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      tags: ["Forecasting", "Grid Compliance", "Machine Learning"]
    },
    {
      title: "Maintenance Intelligence: Moving from Calendar-Based to ROI-Based O&M",
      excerpt: "How AI-driven maintenance scheduling reduced O&M costs by 30%—decision framework for cleaning, inspections, and preventive maintenance with weather integration.",
      author: "Ramesh Gupta",
      role: "O&M Optimization Specialist",
      date: "January 28, 2025",
      readTime: "14 min read",
      category: "Operations",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      tags: ["Maintenance", "Cost Reduction", "Operations"]
    },
    {
      title: "Inverter Health Monitoring: 10 Early Warning Signs of Failure",
      excerpt: "Pattern recognition guide for inverter degradation—temperature trends, efficiency drops, fault frequency analysis, and maintenance intervention timing strategies.",
      author: "Amit Patel",
      role: "Equipment Reliability Engineer",
      date: "January 25, 2025",
      readTime: "12 min read",
      category: "Equipment Health",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
      tags: ["Inverters", "Predictive Maintenance", "Reliability"]
    },
    {
      title: "Performance Ratio Deep Dive: Why Your 78% PR is Actually a Problem",
      excerpt: "Benchmarking analysis across 1000+ plants—understanding PR losses, identifying improvement opportunities, and achieving 82%+ PR through systematic optimization.",
      author: "Kavita Deshmukh",
      role: "Performance Analysis Manager",
      date: "January 22, 2025",
      readTime: "16 min read",
      category: "Performance Optimization",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800",
      tags: ["Performance Ratio", "Benchmarking", "Optimization"]
    },
    {
      title: "Multi-Site Portfolio Management: Operating 200 MW from One Control Room",
      excerpt: "Architectural patterns for centralized monitoring—alarm consolidation strategies, cross-site benchmarking, and team coordination best practices for utility-scale portfolios.",
      author: "Sanjay Malhotra",
      role: "Portfolio Operations Director",
      date: "January 20, 2025",
      readTime: "15 min read",
      category: "Portfolio Management",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800",
      tags: ["Multi-Site", "Portfolio", "Operations"]
    },
    {
      title: "Voice Summary & Mobile Monitoring: The Future of On-the-Go O&M",
      excerpt: "How audio briefings and mobile-first interfaces change field operations—workflow optimization for site managers, technicians, and portfolio operators.",
      author: "Neha Kapoor",
      role: "Product Innovation Lead",
      date: "January 18, 2025",
      readTime: "10 min read",
      category: "Digital Transformation",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
      tags: ["Mobile", "Voice AI", "Field Operations"]
    }
  ];

  const categories = [
    { name: "All Articles", count: 45, icon: BookOpen },
    { name: "Predictive Analytics", count: 12, icon: Brain },
    { name: "Performance Optimization", count: 15, icon: TrendingUp },
    { name: "Grid Integration", count: 8, icon: Zap },
    { name: "Operations", count: 10, icon: Activity }
  ];

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
            <div className="inline-flex items-center gap-2 mb-5 bg-primary/20 border border-primary/30 text-white text-[10px] font-bold tracking-wider px-4 py-2 rounded-full backdrop-blur-sm">
              <BookOpen className="w-3 h-3" />
              INSIGHTS & EXPERTISE
            </div>
            
            <h1 className="mb-6">Articles & Blog</h1>
            <p className="text-[18px] text-white/70 leading-relaxed">
              In-depth technical guides, industry insights, and best practices from solar monitoring experts—everything from predictive maintenance algorithms to SCADA integration protocols.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-10 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all ${
                  idx === 0
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px]">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-gradient-to-b from-white to-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
              <p className="text-[11px] font-bold text-primary uppercase tracking-wider">Featured Article</p>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
            </div>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 bg-white border border-primary/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <ImageWithFallback
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <div className="bg-primary px-3 py-1.5 rounded-full">
                  <p className="text-[11px] font-bold text-white uppercase tracking-wider">
                    {featuredArticle.category}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4 text-[13px] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {featuredArticle.readTime}
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {featuredArticle.date}
                </div>
              </div>

              <h2 className="text-[32px] font-bold text-foreground leading-tight mb-4">
                {featuredArticle.title}
              </h2>
              
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredArticle.tags.map((tag, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    <p className="text-[11px] font-semibold text-primary">{tag}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-foreground">{featuredArticle.author}</p>
                  <p className="text-[12px] text-muted-foreground">{featuredArticle.role}</p>
                </div>
              </div>

              <Button size="lg" asChild className="w-full">
                <Link to="#" className="inline-flex items-center justify-center gap-2">
                  Read Full Article
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-[28px] font-bold text-foreground mb-2">Recent Articles</h2>
            <p className="text-[15px] text-muted-foreground">Technical insights and best practices from our team</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white border border-primary/10 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-foreground/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <p className="text-[10px] font-bold text-primary uppercase tracking-wider">
                        {article.category}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-[12px] text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </div>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-[18px] font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-[14px] text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, tIdx) => (
                      <div key={tIdx} className="bg-muted px-2.5 py-1 rounded-full">
                        <p className="text-[10px] font-semibold text-muted-foreground">{tag}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-foreground">{article.author}</p>
                      </div>
                    </div>
                    <Link 
                      to="#"
                      className="text-[13px] font-semibold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="h-12 px-10">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-foreground to-[#0A0F1E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(214,117,6,0.15),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-white mb-4">Stay Updated with Latest Insights</h2>
            <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get weekly technical articles and industry insights delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 px-6 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" className="h-12 px-10 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}