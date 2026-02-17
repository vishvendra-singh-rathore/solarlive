import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../components/ui/button";
import logoImage from "figma:asset/56f784bec4e2d9f02946dbd0ae195a9643787897.png";

export function StandalonePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", path: "/solutions" },
    { label: "Products", path: "/products" },
    { label: "AI Insights", path: "/ai" },
    { label: "Resources", path: "/resources" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== HEADER START ==================== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/98 backdrop-blur-sm shadow-sm" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <motion.img 
                src={logoImage} 
                alt="SolarLive" 
                className="h-11 w-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-[15px] font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="outline"
                  asChild
                  className="text-[14px] font-medium text-primary border-primary hover:bg-primary/[0.05] hover:text-primary hover:border-primary rounded-md px-5 h-9"
                >
                  <Link to="/login">Login</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button 
                  asChild 
                  className="text-[14px] font-medium px-6 h-9 rounded-md shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link to="/contact">Request Demo</Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile menu panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex justify-end mb-6">
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </motion.button>
                </div>

                {/* Mobile nav items */}
                <div className="space-y-2">
                  {navLinks.map((link, idx) => (
                    <motion.div 
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 text-[15px] font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Mobile CTA Buttons */}
                <motion.div 
                  className="pt-6 space-y-3 border-t border-border mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button 
                    variant="outline" 
                    asChild 
                    className="w-full border-primary text-primary hover:bg-primary/[0.05]"
                  >
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Request Demo
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* ==================== HEADER END ==================== */}

      {/* ==================== PAGE CONTENT START ==================== */}
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
                Standalone Page Example
              </p>
              <h1 className="mb-6">This Page Has Its Own Header</h1>
              <p className="text-[18px] text-white/70 leading-relaxed">
                This is a completely standalone file with the header built directly into it. Perfect for independent pages or external implementations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="mb-6">Your Content Here</h2>
              <p className="text-[16px] text-muted-foreground leading-relaxed mb-8">
                Add your page content below. The header above is self-contained and will work independently of the Layout component.
              </p>

              {/* Example Content Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-[20px] font-bold mb-3">Feature One</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">
                    This standalone file includes the complete SolarLive header with logo, navigation, and CTA buttons.
                  </p>
                </div>
                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="text-[20px] font-bold mb-3">Feature Two</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">
                    Mobile responsive with slide-out menu and smooth animations throughout.
                  </p>
                </div>
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
              <h2 className="text-white mb-6">Ready to Get Started?</h2>
              <p className="text-[17px] text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                Contact us today to learn more about SolarLive solutions
              </p>
              <Button size="lg" asChild className="h-12 px-10 text-[15px]">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
      {/* ==================== PAGE CONTENT END ==================== */}
    </div>
  );
}
