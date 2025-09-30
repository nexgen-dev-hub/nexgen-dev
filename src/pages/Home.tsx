import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Building2,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";
// import heroImage from "@/assets/hero-construction.jpg";
import heroImage from "@/assets/hero1.jpg";
import heroVideo from "@/assets/video.mp4";
import hotelImage from "@/assets/homeimg.jpg";

const Home = () => {
  const statsRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="pt-20">
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={heroImage}
            className="w-full h-full object-cover absolute inset-0"
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-background/10" />
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="">
            <div className="fade-in">
              <h1 className="heading-hero mb-6">
                Building the Future with
                <span className="block">Innovative Construction</span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="btn-hero group flex items-center"
                >
                  View Our Projects
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="btn-accent flex items-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" ref={statsRef}>
            {[
              { number: "$1B+", label: "Projects Completed", icon: Building2 },
              {
                number: "40+",
                label: "Years of Collective Experience",
                icon: Clock,
              },
              { number: "20%", label: "Cost Reduction", icon: TrendingUp },
              {
                number: "35%",
                label: "Faster Than Traditional Wood Construction",
                icon: Shield,
              },
            ].map((stat, index) => (
              <div key={index} className="scale-in text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="heading-section">
                Proven Track Record of Excellence
              </h2>
              <p className="text-professional mb-6">
                Atlanta-based Real Estate Developer and General Contractor
                having cumulatively executed projects worth over $1B in the past
                40 years. Our proprietary systems and technology gives us a
                clear-cut advantage.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Proprietary NexGen Systems",
                  "20% lower construction costs than traditional methods",
                  "35% faster project delivery times",
                  "Non combustible, earthquake resistant , waterproof concrete structures",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </div>
            <div className="fade-in">
              <img
                src={hotelImage}
                alt="NexGen Hotel Project"
                className="rounded-xl max-h-[600px] shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategy Preview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">Strategic Investment Approach</h2>
            <p className="text-professional max-w-3xl mx-auto">
              Our targeted investment strategy focuses on developing mixed-use,
              multifamily, limited service and extended stay hotels in
              high-growth markets, using our time and cost advantaged
              construction methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Target Markets",
                description:
                  "High-growth U.S. markets with limited competitive supply",
                icon: "🎯",
              },
              {
                title: "Development Focus",
                description:
                  "Ground up construction of limited service, mixed use, multi family in under supplied markets",
                icon: "🏗️",
              },
              // {
              //   title: "Portfolio Build",
              //   description:
              //     "10–20 hotels over 4–6 years with standardized processes",
              //   icon: "📊",
              // },
              {
                title: "Capital Structure",
                description:
                  "Mix of equity and construction financing with JV partnerships",
                icon: "💼",
              },
            ].map((item, index) => (
              <div key={index} className="card-feature scale-in">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-professional">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Build Your Vision?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how our innovative construction technology can bring
              your project to life faster and more cost-effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-accent">
                Start Your Project
              </Link>
              <Link
                to="/technologies"
                className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Explore Our Technology
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
