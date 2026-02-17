import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "contact@solarlive.com",
      secondary: "support@solarlive.com",
      gradient: "from-blue-50 to-blue-100/50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "24/7 Support Available",
      gradient: "from-green-50 to-green-100/50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Genex Technocrats LLP",
      secondary: "Global Energy Innovation Hub, India",
      gradient: "from-purple-50 to-purple-100/50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(214,117,6,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-[1.08] tracking-tight">
              Let's Transform Your Solar Operations
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connect with our team to discuss how SolarLive can optimize your solar assets and drive operational excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 bg-gradient-to-br ${method.gradient} rounded-2xl border-2 border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300`}
              >
                <div className={`w-14 h-14 ${method.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <method.icon className={`w-7 h-7 ${method.iconColor}`} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {method.title}
                </h3>
                <p className="text-base font-semibold text-foreground/90 mb-1">
                  {method.primary}
                </p>
                <p className="text-sm text-muted-foreground">
                  {method.secondary}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white p-10 rounded-2xl border-2 border-border shadow-sm">
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full h-12 text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full h-12 text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-12 text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                      Company *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full h-12 text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-12 text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full text-base resize-none"
                      placeholder="Tell us about your solar operations and requirements..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12 text-base">
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    By submitting this form, you agree to our privacy policy and consent to be contacted by SolarLive.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Demo CTA */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Schedule a Demo
                </h3>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  See SolarLive in action. Our solutions engineers will walk you through the platform and answer all your questions.
                </p>
                <Button variant="outline" className="w-full h-12 text-base border-2 border-primary text-primary hover:bg-primary/5">
                  Book a Demo Call
                </Button>
              </div>

              {/* Support Info */}
              <div className="p-8 rounded-2xl bg-white border-2 border-border">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-green-600" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Technical Support
                </h3>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  Already a customer? Our support team is available 24/7 to help with any technical issues.
                </p>
                <Button variant="outline" className="w-full h-12 text-base border-2">
                  Access Support Portal
                </Button>
              </div>

              {/* Response Time */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-1">
                      Quick Response
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 2-4 business hours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Global Presence</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We're Everywhere You Are
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Operating across 25+ countries with local support teams
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { region: "Asia Pacific", locations: "India, Singapore, Australia", icon: Globe },
              { region: "Middle East", locations: "UAE, Saudi Arabia, Qatar", icon: Globe },
              { region: "Africa", locations: "South Africa, Kenya, Egypt", icon: Globe }
            ].map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border-2 border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <region.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {region.region}
                </h3>
                <p className="text-base text-muted-foreground">{region.locations}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
