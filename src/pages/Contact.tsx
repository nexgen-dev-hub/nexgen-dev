import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .scale-in"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description:
          "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="heading-hero mb-6">
              Contact NexGen Southern Developers
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to discuss your construction project? Get in touch with our
              team to learn how our innovative technology can deliver superior
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="slide-in-left">
              <h2 className="heading-section mb-8">Get in Touch</h2>
              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "Office Location",
                    info: "Atlanta, Georgia, USA",
                    description:
                      "Headquarters serving clients across the Americas",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    info: "404-543-7111",
                    description: "Call us for immediate assistance",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    info: "info@nexgensouthern.com",
                    description: "Send us your project details",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    info: "Monday - Friday: 8:00 AM - 6:00 PM EST",
                    description:
                      "Weekend consultations available by appointment",
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {contact.info}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose NexGen */}
              <div className="mt-12 card-elevated">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why Choose NexGen?
                </h3>
                <div className="space-y-3">
                  {[
                    "40+ years of construction expertise",
                    "Proprietary FORSA PLUS technology",
                    "30% cost reduction guarantee",
                    "50% faster project delivery",
                    "Institutional-grade quality standards",
                    "Comprehensive project management",
                  ].map((reason, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in">
              <div className="card-elevated">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Start Your Project
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="hotel-development">
                        Hotel Development
                      </option>
                      <option value="residential">
                        Residential Construction
                      </option>
                      <option value="commercial">Commercial Building</option>
                      <option value="renovation">Renovation Project</option>
                      <option value="consultation">
                        Technology Consultation
                      </option>
                      <option value="partnership">
                        Investment Partnership
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-secondary mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                      placeholder="Please describe your project requirements, timeline, and any specific questions you have about our construction technology..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-hero group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">Our Service Areas</h2>
            <p className="text-professional max-w-3xl mx-auto">
              We serve clients across multiple markets with our proven
              construction technology and extensive project management
              capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                region: "Southeast United States",
                markets: [
                  "Atlanta, Georgia (Headquarters)",
                  "Florida Markets",
                  "North Carolina",
                  "South Carolina",
                  "Tennessee",
                ],
                focus:
                  "Primary market focus with extensive local partnerships and regulatory expertise",
              },
              {
                region: "Secondary US Markets",
                markets: [
                  "Texas Markets",
                  "Virginia",
                  "Kentucky",
                  "Alabama",
                  "Mississippi",
                ],
                focus:
                  "Strategic expansion into high-growth secondary markets with limited hotel supply",
              },
              {
                region: "International Projects",
                markets: [
                  "Mexico (Completed)",
                  "Jamaica (Completed)",
                  "Caribbean Region",
                  "Central America",
                  "Future Expansion",
                ],
                focus:
                  "Selective international projects leveraging our proven construction methods",
              },
            ].map((area, index) => (
              <div key={index} className="card-feature scale-in">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {area.region}
                </h3>
                <ul className="space-y-2 mb-4">
                  {area.markets.map((market, marketIndex) => (
                    <li
                      key={marketIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {market}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground">{area.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">Frequently Asked Questions</h2>
            <p className="text-professional">
              Common questions about our construction technology and project
              processes.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question:
                  "How does the FORSA PLUS system reduce construction costs?",
                answer:
                  "Our proprietary FORSA PLUS aluminum formwork system enables simultaneous casting of walls and decks, reducing labor requirements and construction time by 50%. Combined with our global procurement network and streamlined processes, we achieve 30% cost savings compared to traditional methods.",
              },
              {
                question:
                  "What types of projects are best suited for your technology?",
                answer:
                  "Our technology is ideal for concrete construction projects including hotels, residential developments, commercial buildings, and mixed-use properties. We specialize in extended-stay hotels and have particular expertise in secondary market developments.",
              },
              {
                question:
                  "How long does a typical project take from start to finish?",
                answer:
                  "Our advanced construction methods reduce typical project timelines by 50%. A standard 120-unit hotel project can be completed in 8-12 months compared to 16-24 months with traditional methods, depending on size and complexity.",
              },
              {
                question: "Do you work with investment partners?",
                answer:
                  "Yes, we actively partner with institutional investors, REITs, private equity firms, and joint venture partners. Our standardized approach and proven track record make us an attractive partner for portfolio-scale development.",
              },
              {
                question: "What markets do you serve?",
                answer:
                  "We primarily serve the Southeast United States from our Atlanta headquarters, with expansion into strategic secondary markets. We also have experience with international projects in Mexico, Jamaica, and the Caribbean region.",
              },
            ].map((faq, index) => (
              <div key={index} className="card-elevated fade-in">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
