import { useEffect } from "react";
import {
  CheckCircle,
  Zap,
  Shield,
  Clock,
  DollarSign,
  Building2,
  Globe,
  TrendingUp,
} from "lucide-react";
import constructionTech from "@/assets/main/4.jpg";

const Technologies = () => {
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
              Cutting-Edge Construction Technology
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Proprietary NexGen system and advanced construction methodologies
              that redefine industry standards for quality, speed, and cost
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="heading-section">
                Revolutionary Construction Innovation
              </h2>
              <p className="text-professional mb-6">
                Our proprietary construction technology combines decades of
                engineering expertise with state-of-the-art aluminum formwork
                systems to deliver concrete structures that exceed industry
                standards while dramatically reducing costs and timelines.
              </p>
              <p className="text-professional mb-8">
                The NexGen system enables us to deliver high-quality concrete
                hotel shells at cost parity or lower than traditional wood
                construction, while providing superior structural integrity and
                institutional-grade quality.
              </p>

              <div className="space-y-4">
                {[
                  "Simultaneous wall and deck casting capability",
                  "Tight tolerances eliminating costly rework",
                  "Earthquake-resistant structural design",
                  "Global procurement network optimization",
                  "Streamlined construction processes",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in">
              <img
                src={constructionTech}
                alt="NexGen Technology"
                className="rounded-xl shadow-elevated max-h-[650px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">Core Technology Components</h2>
            <p className="text-professional max-w-3xl mx-auto">
              Our integrated technology platform combines multiple innovations
              to create a comprehensive construction solution that outperforms
              traditional methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "NexGen System",
                description:
                  "Advanced aluminum formwork system enabling simultaneous casting of walls and decks with precision engineering and rapid deployment capabilities.",
                benefits: [
                  "Reduced construction time by 50%",
                  "Superior surface finish quality",
                  "Reusable system components",
                  "Precise dimensional accuracy",
                ],
              },
              {
                icon: Shield,
                title: "Seismic Engineering",
                description:
                  "Earthquake-resistant concrete structures designed to withstand extreme conditions while maintaining structural integrity and occupant safety.",
                benefits: [
                  "Enhanced seismic resistance",
                  "Improved building longevity",
                  "Insurance cost advantages",
                  "Code compliance assurance",
                ],
              },
              {
                icon: Zap,
                title: "Rapid Construction Method",
                description:
                  "Streamlined construction processes that accelerate project delivery without compromising quality or structural performance standards.",
                benefits: [
                  "50% faster completion times",
                  "Reduced labor requirements",
                  "Weather-resistant construction",
                  "Parallel work stream optimization",
                ],
              },
              {
                icon: DollarSign,
                title: "Cost Optimization Platform",
                description:
                  "Integrated cost management system leveraging global procurement networks and standardized processes to minimize project expenses.",
                benefits: [
                  "30% cost reduction vs traditional",
                  "Global supplier network access",
                  "Material waste minimization",
                  "Economies of scale benefits",
                ],
              },
              {
                icon: Globe,
                title: "Global Procurement Network",
                description:
                  "Strategic partnerships with international suppliers ensuring consistent material quality and competitive pricing across all project locations.",
                benefits: [
                  "Consistent material quality",
                  "Competitive pricing advantage",
                  "Supply chain reliability",
                  "Quality assurance protocols",
                ],
              },
              {
                icon: TrendingUp,
                title: "Quality Control Systems",
                description:
                  "Comprehensive quality management protocols ensuring every project meets institutional standards and exceeds client expectations.",
                benefits: [
                  "Zero-defect construction goals",
                  "Real-time quality monitoring",
                  "Standardized inspection processes",
                  "Continuous improvement protocols",
                ],
              },
            ].map((tech, index) => (
              <div key={index} className="card-feature scale-in">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <tech.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground mb-6">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.benefits.map((benefit, benefitIndex) => (
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

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">Technical Performance Metrics</h2>
            <p className="text-professional max-w-3xl mx-auto">
              Quantifiable advantages that demonstrate the superior performance
              of our construction technology across key project parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                metric: "35%",
                title: "Time Reduction",
                description:
                  "Faster project delivery compared to traditional construction methods",
                details: [
                  "Simultaneous casting capability",
                  "Reduced curing time requirements",
                  "Parallel construction workflows",
                  "Weather-independent processes",
                ],
              },
              {
                icon: DollarSign,
                metric: "20%",
                title: "Cost Savings",
                description:
                  "Lower total construction costs while maintaining superior quality",
                details: [
                  "Reduced labor requirements",
                  "Material waste minimization",
                  "Efficient procurement networks",
                  "Economies of scale benefits",
                ],
              },
              {
                icon: Shield,
                metric: "100%",
                title: "Quality Assurance",
                description:
                  "Institutional-grade concrete structures meeting international standards",
                details: [
                  "Zero-defect construction goals",
                  "Precision tolerance achievement",
                  "Comprehensive quality testing",
                  "Long-term durability guarantee",
                ],
              },
              {
                icon: Building2,
                metric: "9.0+",
                title: "Seismic Rating",
                description:
                  "Enhanced earthquake resistance exceeding building code requirements",
                details: [
                  "Advanced structural engineering",
                  "Reinforced concrete design",
                  "Dynamic load resistance",
                  "Safety factor optimization",
                ],
              },
            ].map((metric, index) => (
              <div key={index} className="card-elevated text-center scale-in">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {metric.metric}
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-3">
                  {metric.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {metric.description}
                </p>
                <ul className="space-y-1 text-left">
                  {metric.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">
              Competitive Technology Advantages
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Our proprietary technology stack provides significant competitive
              advantages that position NexGen as the preferred construction
              partner for institutional investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Concrete at Wood-Like Costs",
                description:
                  "Revolutionary cost structure that makes concrete construction economically viable in secondary markets where traditional methods are prohibitively expensive.",
                advantages: [
                  "Proprietary construction methodology reduces material costs",
                  "Global procurement network ensures competitive pricing",
                  "Streamlined processes eliminate cost inefficiencies",
                  "Standardized approach enables economies of scale",
                ],
              },
              {
                title: "Institutional Investor Alignment",
                description:
                  "Construction quality and methodology specifically designed to meet institutional investment criteria and maximize long-term value creation.",
                advantages: [
                  "Concrete construction attracts premium valuations",
                  "Enhanced durability reduces maintenance costs",
                  "Standardized quality meets REIT requirements",
                  "Portfolio approach enables bulk sale premiums",
                ],
              },
              {
                title: "Market Differentiation",
                description:
                  "Unique technology capabilities that enable development in markets previously considered unfeasible due to traditional construction cost constraints.",
                advantages: [
                  "Access to supply-constrained secondary markets",
                  "First-mover advantage in targeted geographies",
                  "Higher barrier to entry for competitors",
                  "Scalable technology platform for growth",
                ],
              },
              {
                title: "Risk Mitigation Technology",
                description:
                  "Advanced construction methods that significantly reduce project risks while ensuring consistent quality and timeline performance.",
                advantages: [
                  "Weather-resistant construction processes",
                  "Reduced dependency on skilled labor",
                  "Standardized quality control protocols",
                  "Proven track record of successful delivery",
                ],
              },
            ].map((advantage, index) => (
              <div key={index} className="card-elevated slide-in-left">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {advantage.description}
                </p>
                <ul className="space-y-3">
                  {advantage.advantages.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Pipeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">Continuous Innovation Pipeline</h2>
            <p className="text-professional max-w-3xl mx-auto">
              Our commitment to technological advancement ensures we maintain
              our competitive edge through ongoing research, development, and
              implementation of next-generation construction innovations.
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-professional p-8 fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Research & Development
                </h3>
                <p className="text-sm text-muted-foreground">
                  Continuous investment in construction technology research,
                  material science advancements, and process optimization
                  methodologies.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Global Partnerships
                </h3>
                <p className="text-sm text-muted-foreground">
                  Strategic alliances with international technology providers,
                  material suppliers, and construction innovation leaders.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Future Implementation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Roadmap for implementing emerging technologies including
                  automation, AI-driven quality control, and sustainable
                  construction methods.
                </p>
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
              Partner with Technology Leaders
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Leverage our proprietary construction technology to achieve
              superior project outcomes with reduced costs, faster delivery, and
              institutional-grade quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-accent">
                Technology Consultation
              </a>
              <a
                href="/projects"
                className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                See Technology in Action
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
