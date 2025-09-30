import { useEffect } from "react";
import {
  CheckCircle,
  Clock,
  DollarSign,
  Shield,
  Zap,
  Building,
} from "lucide-react";
import constructionTech from "@/assets/main/1.jpg";
import constructionTech2 from "@/assets/main/11.jpg";
import constructionTech3 from "@/assets/30.jpg";
import constructionTech4 from "@/assets/32.jpg";
import hotelProject from "@/assets/main/2.jpg";

const Construction = () => {
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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="heading-hero mb-6">
              Advanced Construction Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Revolutionary concrete construction technology delivering superior
              quality at unprecedented speed and cost efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Construction Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="heading-section">
                Revolutionizing Construction Standards
              </h2>
              <p className="text-professional mb-8">
                Our proprietary construction methods combine four decades of
                expertise with cutting-edge technology to deliver concrete
                structures that meet the highest institutional standards while
                dramatically reducing costs and timelines.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: DollarSign,
                    metric: "20%",
                    label: "Cost Reduction",
                    description:
                      "Lower construction costs vs traditional methods",
                  },
                  {
                    icon: Clock,
                    metric: "35%",
                    label: "Faster Delivery",
                    description: "Reduced construction timeline",
                  },
                  {
                    icon: Shield,
                    metric: "100%",
                    label: "Quality Assured",
                    description: "Institutional-grade concrete structures",
                  },
                  {
                    icon: Building,
                    metric: "$1B+",
                    label: "Proven Track Record",
                    description: "Successfully completed projects",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="card-elevated text-center scale-in"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {stat.metric}
                    </div>
                    <div className="text-sm font-medium text-secondary mb-2">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in">
              <img
                src={constructionTech}
                alt="Advanced Construction Technology"
                className="rounded-xl max-h-[650px] shadow-elevated w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FORSA PLUS Technology */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">NexGen System</h2>
            <p className="text-professional max-w-3xl mx-auto">
              Our proprietary NexGen system represents the future of concrete
              construction, enabling simultaneous casting of walls and decks
              while ensuring precision and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Simultaneous Casting",
                description:
                  "Advanced formwork enables simultaneous casting of walls and decks, significantly reducing construction time and labor costs while maintaining structural integrity.",
                benefits: [
                  "Reduced labor requirements",
                  "Faster project completion",
                  "Lower overall costs",
                  "Improved structural continuity",
                ],
              },
              {
                icon: CheckCircle,
                title: "Precision Engineering",
                description:
                  "Tight tolerances and high-quality finishes eliminate costly rework, delivering concrete structures that meet international standards from the first pour.",
                benefits: [
                  "Minimal rework required",
                  "Consistent quality output",
                  "International standards compliance",
                  "Reduced material waste",
                ],
              },
              {
                icon: Shield,
                title: "Seismic Resilience",
                description:
                  "Earthquake-resistant concrete structures provide enhanced safety and longevity, ensuring our buildings can withstand natural disasters and extreme conditions.",
                benefits: [
                  "Enhanced structural integrity",
                  "Earthquake resistance",
                  "Long-term durability",
                  "Insurance cost benefits",
                ],
              },
            ].map((feature, index) => (
              <div key={index} className="card-feature scale-in">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">Our Construction Process</h2>
            <p className="text-professional max-w-3xl mx-auto">
              Streamlined methodology that ensures quality, efficiency, and
              cost-effectiveness from project initiation to completion.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Project Planning & Design",
                description:
                  "Comprehensive project analysis, site evaluation, and detailed engineering design using our standardized processes to optimize efficiency and cost-effectiveness.",
                features: [
                  "Site analysis and preparation",
                  "Structural engineering design",
                  "Material procurement planning",
                  "Timeline optimization",
                ],
                image: constructionTech2,
              },
              {
                step: "02",
                title: "NEXGEN Implementation",
                description:
                  "Deployment of our proprietary aluminum formwork system, enabling rapid and precise concrete construction with superior quality control throughout the process.",
                features: [
                  "Formwork system setup",
                  "Quality control protocols",
                  "Simultaneous wall/deck casting",
                  "Real-time progress monitoring",
                ],
                image: constructionTech3,
              },
              {
                step: "03",
                title: "Quality Assurance & Delivery",
                description:
                  "Rigorous quality inspections, final finishing work, and project handover ensuring all structures meet institutional standards and client expectations.",
                features: [
                  "Comprehensive quality testing",
                  "Final inspections",
                  "Client walkthrough",
                  "Documentation delivery",
                ],
                image: constructionTech4,
              },
            ].map((process, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  } slide-in-left`}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent-foreground">
                        {process.step}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-primary">
                      {process.title}
                    </h3>
                  </div>
                  <p className="text-professional mb-6">
                    {process.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {process.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  } fade-in`}
                >
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-border">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img
                        src={process.image}
                        alt="Advanced Construction Technology"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">
              Construction Excellence in Action
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              See how our advanced construction methods deliver superior results
              across diverse project types and market conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img
                src={hotelProject}
                alt="Completed Hotel Project"
                className="rounded-xl shadow-elevated w-full"
              />
            </div>
            <div className="slide-in-left">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Construction Portfolio
              </h3>
              <p className="text-professional mb-6">
                Our construction methods enable the development of high-quality
                projects in any market, delivering institutional-grade
                properties at competitive costs.
              </p>
              <div className="space-y-4">
                {[
                  "Concrete construction at wood-like costs",
                  "Enhanced structural integrity and durability",
                  "Reduced construction timelines by 50%",
                  "Premium valuation multiples at sale",
                  "Earthquake-resistant design standards",
                  "Institutional investor alignment",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-professional">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Experience the Future of Construction
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Discover how our proprietary NEXGEN technology can revolutionize
              your next construction project with superior quality and
              efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-accent">
                Schedule Consultation
              </a>
              <a
                href="/projects"
                className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Construction;
