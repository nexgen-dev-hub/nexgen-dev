import { useEffect } from "react";
import { CheckCircle, Award, Globe, TrendingUp } from "lucide-react";
import teamImage from "@/assets/main/9.jpg";
import staff from "@/assets/asman.jpg";
import staff2 from "@/assets/manish.jpg";
import staff3 from "@/assets/rajinder.jpeg";
import staff4 from "@/assets/macky.jpg";
import staff5 from "@/assets/ankit.jpg";
import staff6 from "@/assets/Scott.jpg";
import staff7 from "@/assets/viral.jpg";

const About = () => {
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
              About NexGen Southern Developers
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              NexGen is a successful Atlanta-based general contractor with a
              proven track record of execution with partners having completed
              over $1B projects over the past 40 years.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="heading-section">Our Story</h2>
              <p className="text-professional mb-6">
                NexGen is a successful Atlanta-based general contractor with a
                proven track record of execution with partners having completed
                over $1B projects over the past 40 years.
              </p>
              <p className="text-professional mb-6">
                Recently, the company acquired the intellectual property for a
                proprietary concrete construction technology that enables the
                delivery of high-quality concrete structures at approximately
                30% lower cost and in 50% less time than traditional methods.
              </p>
              <p className="text-professional mb-8">
                Leveraging this competitive advantage, NexGen is pursuing a
                targeted investment strategy to develop a portfolio of
                extended-stay hotels in supply constrained opportunities in key
                states - traditionally unavailable to developers due to cost
                constraints.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    $1B+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    40+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in">
              <img
                src={teamImage}
                alt="NexGen Executive Team"
                className="rounded-xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Leadership Team */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">Leadership Team</h2>
            <p className="text-professional max-w-3xl mx-auto">
              Our experienced leadership team brings decades of construction,
              development, and investment expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                name: "Saman Afkhami",
                role: "Managing Partner",
                experience:
                  "Driving efficiency and excellence in every project",
                background:
                  "Over 15 years in manufacturing and logistics, with deep family roots in construction and shipping. Saman specializes in streamlining supply chains and accelerating timelines. Former VP at Turner Construction, he brings proven leadership in delivering complex builds. His strong work ethic and operational vision drive results at scale.",
                image: staff,
              },
              {
                name: "Manish Patel",
                role: "Partner",
                experience: "20+ years in construction technology",
                background:
                  "A hands-on entrepreneur with ventures across hospitality, entertainment, and manufacturing. Manish has led the design, construction, and operation of nightclubs, restaurants, and hotels. With a portfolio exceeding several hundred million dollars, he excels in sourcing capital and building high-performance teams.",
                image: staff2,
              },
              {
                name: "Rajinderpaul Mahal",
                role: "Partner",
                experience:
                  "Blending healthcare precision with real estate growth",
                background:
                  "Rajinderpaul brings dual expertise in public health and real estate, with a focus on socially impactful development. A former dentist and MPH, she led public health initiatives in NYC and operations at a major medical center. Her real estate portfolio includes ground-up builds and value-add projects. She combines precision, service, and investment acumen.",
                image: staff3,
              },
              {
                name: "Macky Pannu",
                role: "SVP Investments",
                experience:
                  "Transforming opportunities into high-performing investments",
                background:
                  "Macky has managed over $750M in real estate transactions, from acquisition to exit. His experience spans capital raising, underwriting, and operational leadership. A strategic thinker and serial entrepreneur, he has scaled multiple ventures across industries. Macky excels in creating value through disciplined investment and execution.",
                image: staff4,
              },
              {
                name: "Ankit Patel",
                role: "Senior Development Advisor",
                experience:
                  "Delivering large-scale projects with precision and growth",
                background:
                  "With over $900M in construction oversight, Ankit is an expert in development execution. His tenure at InTown Suites sharpened his skills in managing complex, budget-sensitive projects. He leads teams across planning, permitting, and delivery. Ankit’s approach blends financial rigor with hands-on project leadership.",
                image: staff5,
              },
              {
                name: "Scott Ryan",
                role: "Head of Construction, G.C.",
                experience:
                  "Building with integrity, innovation, and experience",
                background:
                  "Scott brings 40+ years of construction leadership across the Southeast U.S. As a licensed Class A General Contractor, he’s built senior living, medical, hospitality, and multifamily assets. Former AGC President and founder of Cotter Ryan, he champions quality, innovation, and strong industry relationships. A graduate of UF’s College of Building Construction.",
                image: staff6,
              },
              {
                name: "Viral Patel",
                role: "Asset Management",
                experience:
                  "Maximizing value through strategic asset oversight",
                background:
                  "Viral has developed and managed over $100M in hotel assets, leading Able Management since 1997. He’s executed complex deals, renovations, and ground-up builds, earning top brand partnerships with Marriott, Hilton, and IHG. With a background in engineering and operations, Viral delivers strong investor returns through disciplined asset strategies.",
                image: staff7,
              },
            ].map((leader, index) => (
              <div
                key={index}
                className="relative group perspective hover:cursor-pointer"
              >
                {/* FRONT */}
                <div className="card-elevated text-center transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                  <div className="w-24 h-24 bg-gradient-professional rounded-full mx-auto mb-4 flex items-center justify-center">
                    {leader?.image ? (
                      <img
                        className="rounded-full h-24 w-24 object-cover"
                        src={leader.image}
                        alt={leader.name}
                      />
                    ) : (
                      <span className="text-2xl font-bold text-black">
                        {leader.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">{leader.role}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {leader.experience}
                  </p>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 bg-white text-black rounded-lg p-4 text-sm shadow-lg transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:rotate-y-180 transform-style-preserve-3d backface-hidden">
                  <p className="font-semibold mb-2">{leader.name}</p>
                  <p className="text-muted-foreground">{leader.background}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Metrics */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">Portfolio Metrics – High Level</h2>
            <p className="text-professional max-w-4xl mx-auto">
              NexGen Southern Developers' portfolio approach is built to create
              lasting value through disciplined growth, strategic brand
              partnerships, and a focus on delivering assets that meet the
              highest institutional standards.
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-professional p-8 mb-8 fade-in">
            <p className="text-professional mb-6">
              By combining our cost-advantaged concrete construction method with
              a scalable, repeatable development model, NexGen can efficiently
              build a collection of high-quality hotels that attract strong
              buyer demand, deliver consistent performance, and position
              investors to benefit from a premium portfolio sale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  metric: "Development Phase",
                  value: "4–6 years to full portfolio",
                },
                {
                  metric: "Hold Period",
                  value: "3–5 years from first project launch",
                },
                {
                  metric: "Exit Premium",
                  value:
                    "Institutional-grade concrete-built hotels command higher multiples",
                },
                {
                  metric: "Capital Structure",
                  value:
                    "Equity + construction financing with potential JV partnerships",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="font-semibold text-primary mb-2">
                    {item.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* NexGen Approach */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">The NexGen Approach</h2>
            <p className="text-professional max-w-3xl mx-auto">
              Our innovative methodology combines proven construction expertise
              with cutting-edge technology to deliver exceptional results for
              our clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Proven Excellence",
                description:
                  "Four decades of successful project delivery with institutional-quality standards and uncompromising attention to detail.",
              },
              {
                icon: TrendingUp,
                title: "Cost Innovation",
                description:
                  "Proprietary construction methods that reduce costs by 20% while maintaining superior quality and durability.",
              },
              {
                icon: CheckCircle,
                title: "Speed Advantage",
                description:
                  "Advanced formwork systems enable 35% faster construction timelines without sacrificing structural integrity.",
              },
              {
                icon: Globe,
                title: "Market Focus",
                description:
                  "Strategic targeting of high-growth markets with limited supply and strong investment potential.",
              },
            ].map((approach, index) => (
              <div key={index} className="card-feature scale-in">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <approach.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {approach.title}
                </h3>
                <p className="text-muted-foreground">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in mb-16">
            <h2 className="heading-section text-center mb-8">
              Investment Strategy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Target Markets",
                description:
                  "High-growth secondary and tertiary U.S. markets with limited competitive supply and strong hotel brand penetration opportunities",
                icon: "🎯",
              },
              {
                title: "Development Focus",
                description:
                  "Ground-up construction of limited service hotels in secondary markets using our proprietary construction technology",
                icon: "🏗️",
              },
              {
                title: "Portfolio Build",
                description:
                  "Assemble a portfolio of 10–20 hotels over a 4–6 year horizon, standardizing design and development process to maximize speed-to-market and economies of scale",
                icon: "📊",
              },
              {
                title: "Capital Structure",
                description:
                  "Utilize a mix of equity and construction financing to optimize returns, potential for programmatic joint ventures with hospitality-focused private equity or institutional capital",
                icon: "💼",
              },
            ].map((strategy, index) => (
              <div key={index} className="card-elevated slide-in-left">
                <div className="text-4xl mb-4">{strategy.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {strategy.title}
                </h3>
                <p className="text-muted-foreground">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Risk Management */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">Risk Mitigation & Management</h2>
            <p className="text-professional max-w-3xl mx-auto">
              Our comprehensive risk management approach ensures project success
              and investor protection through proven methodologies and strategic
              planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Construction Risk",
                points: [
                  "Proven construction methodology with 40+ years of experience",
                  "Proprietary NexGen system reduces construction complexity",
                  "Pre-qualified contractor network and supply chain partnerships",
                  "Comprehensive insurance and bonding requirements",
                ],
              },
              {
                title: "Market Risk",
                points: [
                  "Focus on supply-constrained markets",
                  "Partnership with established hotel brands",
                  "Detailed market analysis and feasibility studies",
                  "Flexible exit strategies including sale or hold options",
                ],
              },
              {
                title: "Exit Liquidity",
                points: [
                  "Institutional-quality concrete construction attracts premium buyers",
                  "Standardized portfolio approach enhances marketability",
                  "Established relationships with REITs and private equity",
                  "Multiple exit pathways including individual or portfolio sales",
                ],
              },
            ].map((risk, index) => (
              <div key={index} className="card-elevated scale-in">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {risk.title}
                </h3>
                <ul className="space-y-3">
                  {risk.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
