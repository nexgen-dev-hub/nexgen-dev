import { useEffect } from "react";
import {
  Calendar,
  MapPin,
  Building,
  Users,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import soon1 from "@/assets/coming-soon.jpg";
import soon2 from "@/assets/soonp.jpg";
import soon from "@/assets/soon.jpg";
import hotelProject12 from "@/assets/project12.jpeg";
import hotelProject11 from "@/assets/project11.jpeg";
import hotelProject3 from "@/assets/25.jpg";
import sandy from "@/assets/Sandy lake towers.png";
import surgery from "@/assets/Premier3.jpg";
import gp1 from "@/assets/GP1-Elevation.jpg";
import gp2 from "@/assets/GP2.jpg";
import soho from "@/assets/Soho-Elevation.jpg";
import townplace from "@/assets/townplace.jpg";
import home2 from "@/assets/home2.jpg";

const Projects = () => {
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

  const projects = [
    {
      title: "Home 2 Suites by Hilton",
      location: "Fayettville Ga.",
      year: "2025",
      type: "117 Rooms",
      description:
        "Bringing modern comfort to Fayetteville with 117 spacious rooms designed for today’s traveler.",
      features: [
        "$17 million",
        "Thriving location",
        "Institutional grade construction",
        "Premium finishes",
      ],
      image: soon2,
      status: "In Progress",
    },
    {
      title: "Towneplace by Marriott",
      location: "Flowery Branch, Ga 30542",
      year: "2025",
      type: "89 rooms",
      description:
        "Delivering 89 contemporary suites in Flowery Branch, blending convenience with long-stay comfort.",
      features: [
        "$17 million",
        "Dynamic location",
        "Resilient concrete construction",
        "Premium finishes",
      ],
      image: soon,
      status: "In Progress",
    },
    {
      title: "Sandy Lake Towers",
      location: "Orlando, FL",
      year: "2022",
      type: "20 Stories / 2 Towers",
      description:
        "Enriching the local community fabric in Florida with the creation of 110 stylish, resilient concrete residences offering luxury living by the coast.",
      features: [
        "$42 million",
        "Coastal location",
        "Resilient concrete construction",
        "Premium finishes",
      ],
      image: sandy,
      status: "Completed",
    },
    {
      title: "Premier Surgery Center",
      location: "Tavares, FL",
      year: "2022",
      type: "20,000 sf shell and sitework",
      description:
        "A state of the art surgery center designed for efficiency, comfort, and patient care.",
      features: [
        "$4 million",
        "Vibrant location",
        "Resilient concrete construction",
        "Modern finishes",
      ],
      image: surgery,
      status: "Completed",
    },
    // {
    //   title: "The Landings at Prescott Valley",
    //   location: "Prescott Valley, AZ",
    //   year: "2022",
    //   type: "118 units / sitework",
    //   description:
    //     "Enriching the local community fabric in Florida with the creation of 110 stylish, resilient concrete residences offering luxury living by the coast.",
    //   features: [
    //     "$15 million",
    //     "Coastal location",
    //     "Resilient concrete construction",
    //     "Premium finishes",
    //   ],
    //   image: hotelProject3,
    //   status: "Completed",
    // },
    {
      title: "Golden Pond - Independent Living",
      location: "Winter Garden, FL",
      year: "2022",
      type: "46 units / sitework",
      description:
        "Enriching the local community fabric in Florida with the creation of 110 stylish, resilient concrete residences offering luxury living by the coast.",
      features: [
        "$9 million",
        "Coastal location",
        "Resilient concrete construction",
        "Premium finishes",
      ],
      image: gp1,
      status: "Completed",
    },
    // {
    //   title: "Golden Pond - Assited Living",
    //   location: "Winter Garden, FL",
    //   year: "2022",
    //   type: "60 units / sitework",
    //   description:
    //     "Enriching the local community fabric in Florida with the creation of 110 stylish, resilient concrete residences offering luxury living by the coast.",
    //   features: [
    //     "$7.5 million",
    //     "Coastal location",
    //     "Resilient concrete construction",
    //     "Premium finishes",
    //   ],
    //   image: gp2,
    //   status: "Completed",
    // },
    {
      title: "Soho Residences",
      location: "Kissimmee, FL",
      year: "2022",
      type: "75 units",
      description:
        "Enriching the local community fabric in Florida with the creation of 110 stylish, resilient concrete residences offering luxury living by the coast.",
      features: [
        "$14.825 million",
        "Coastal location",
        "Resilient concrete construction",
        "Premium finishes",
      ],
      image: soho,
      status: "In Progress",
    },
    {
      title: "700-Unit Residential Complex",
      location: "Mexico",
      year: "2020",
      type: "Residential Development",
      description:
        "Transforming the local landscape with a secure and comfortable 700-unit residential development in Mexico, built with durable concrete using our proprietary construction methods.",
      features: [
        "700 residential units",
        "Durable concrete construction",
        "Community amenities",
        "Security infrastructure",
      ],
      image: hotelProject11,
      status: "Completed",
    },
    {
      title: "120-Unit Concrete Homes",
      location: "Jamaica",
      year: "2021",
      type: "Community Development",
      description:
        "Enhancing a community in Jamaica with the construction of 120 modern, concrete-based living spaces that contribute to sustainable development and improved living standards.",
      features: [
        "120 modern concrete homes",
        "Sustainable development focus",
        "Community enhancement",
        "Local economic impact",
      ],
      image: hotelProject12,
      status: "Completed",
    },
    // {
    //   title: "110 Luxury Residences",
    //   location: "Florida, USA",
    //   year: "2022",
    //   type: "Luxury Development",
    //   description:
    //     "Enriching the local community fabric in Florida with the creation of 110 stylish, resilient concrete residences offering luxury living by the coast.",
    //   features: [
    //     "110 luxury residences",
    //     "Coastal location",
    //     "Resilient concrete construction",
    //     "Premium finishes",
    //   ],
    //   image: hotelProject3,
    //   status: "Completed",
    // },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="heading-hero mb-6">Our Project Portfolio</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Proven track record of successful construction projects across the
              Americas, demonstrating our expertise in delivering high-quality
              concrete structures.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "$1B+", label: "Total Project Value", icon: Building },
              { number: "930+", label: "Units Delivered", icon: Users },
              { number: "3", label: "Countries", icon: MapPin },
              { number: "40+", label: "Years Experience", icon: Calendar },
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

      {/* Selected Projects */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">Selected Past Projects</h2>
            <p className="text-professional max-w-3xl mx-auto">
              Showcase of our successful construction projects demonstrating our
              expertise in concrete construction across diverse markets and
              project types.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  } fade-in`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl h-[350px] shadow-elevated w-full object-cover"
                  />
                </div>
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  } slide-in-left`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                    <span className="text-muted-foreground">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-6 mb-4 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <p className="text-professional mb-6">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {project.features.map((feature, featureIndex) => (
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
                  {/* <button className="btn-outline group">
                    View Project Details
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">Market Opportunity</h2>
            <p className="text-professional max-w-3xl mx-auto">
              The markets in the United States present significant opportunities
              for housing and hotel development, driven by economic expansion
              and limited supply
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Market Challenges
              </h3>
              <div className="space-y-6">
                <div className="card-elevated">
                  <h4 className="font-semibold text-primary mb-3">
                    Traditional Developer Constraints
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    High Construction Cost
                  </p>
                </div>
                <div className="card-elevated">
                  <h4 className="font-semibold text-primary mb-3">
                    Quality Compromises
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Cost pressures often force developers to compromise on
                    construction quality, limiting institutional buyer interest
                    and long-term value creation.
                  </p>
                </div>
                <div className="card-elevated">
                  <h4 className="font-semibold text-primary mb-3">
                    Supply Constraints
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Limited supply of modern, brand-aligned hotels creates
                    opportunities for developers who can overcome traditional
                    cost barriers.
                  </p>
                </div>
              </div>
            </div>
            <div className="fade-in">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 border border-border">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  NexGen's Solution
                </h3>
                <div className="space-y-4">
                  {[
                    "Proprietary construction method enables concrete at or below wood like costs",
                    "Superior structural quality attracts institutional investors",
                    "35% faster construction timelines reduce market risk",
                    "Standardized processes enable portfolio-scale development",
                    "Enhanced durability provides long-term value creation",
                  ].map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partnerships */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">
              Trusted Partnerships and Collaborations
            </h2>
            <p className="text-professional max-w-3xl mx-auto">
              Strategic alliances with leading industry partners enable us to
              deliver exceptional results while maintaining our competitive
              advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Hotel Brands",
                description:
                  "Partnerships with established hotel brands for consistent quality and market recognition.",
                partners: [
                  "Major extended-stay brands",
                  "Limited service hotel operators",
                  "Franchise development partners",
                  "Brand standard compliance",
                ],
              },
              {
                category: "Financial Partners",
                description:
                  "Relationships with institutional investors and financial partners for optimal capital structure.",
                partners: [
                  "REITs and institutional buyers",
                  "Construction financing providers",
                  "Private equity partnerships",
                  "Joint venture opportunities",
                ],
              },
              {
                category: "Technology Suppliers",
                description:
                  "Global network of technology and material suppliers ensuring consistent quality and competitive costs.",
                partners: [
                  "NexGen system providers",
                  "International material suppliers",
                  "Construction equipment partners",
                  "Quality assurance providers",
                ],
              },
            ].map((partnership, index) => (
              <div key={index} className="card-feature scale-in">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {partnership.category}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {partnership.description}
                </p>
                <ul className="space-y-2">
                  {partnership.partners.map((partner, partnerIndex) => (
                    <li
                      key={partnerIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {partner}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-section">Future Development Pipeline</h2>
            <p className="text-professional max-w-3xl mx-auto">
              Our strategic development pipeline focuses on high-growth
              secondary markets with strong fundamentals and limited competitive
              supply.
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-professional p-8 fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  15-20
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  Hotels Planned
                </div>
                <p className="text-xs text-muted-foreground">
                  Portfolio assembly over 4-6 year horizon
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3-5</div>
                <div className="text-sm text-muted-foreground mb-3">
                  Multifamily Developments
                </div>
                <p className="text-xs text-muted-foreground">
                  Timeline for full portfolio completion
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1-2</div>
                <div className="text-sm text-muted-foreground mb-3">
                  Single Family Communities
                </div>
                <p className="text-xs text-muted-foreground">
                  From first project launch to exit
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  Premium
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  Exit Valuation
                </div>
                <p className="text-xs text-muted-foreground">
                  Institutional-grade concrete construction commands higher
                  multiples
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
              Join Our Success Story
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Partner with us to develop your next project using our proven
              construction methods and extensive experience in delivering
              exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-accent">
                Discuss Your Project
              </a>
              <a
                href="/technologies"
                className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Learn Our Methods
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
