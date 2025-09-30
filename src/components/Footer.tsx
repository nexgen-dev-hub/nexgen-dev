import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-full h-44 rounded-xl flex items-center ">
                <img
                  src="/logof.png"
                  alt="NexGen Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent-foreground" />
              </div> */}
              {/* <div>
                <h3 className="text-lg font-bold">NexGen</h3>
                <p className="text-sm opacity-80">Southern Developers</p>
              </div> */}
            </div>
            {/* <p className="text-sm opacity-80 leading-relaxed">
              Atlanta-based general contractor with over $1B in completed
              projects, specializing in proprietary concrete construction
              technology.
            </p> */}
          </div>
          <div></div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Our Projects", path: "/projects" },
                { label: "About Us", path: "/about" },
                { label: "Construction", path: "/construction" },
                { label: "Technologies", path: "/technologies" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          {/* <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>General Construction</li>
              <li>Hotel Development</li>
              <li>Residential Projects</li>
              <li>Commercial Buildings</li>
              <li>Renovation Services</li>
              <li>Property Development</li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm opacity-80">
                  Atlanta, Georgia, USA
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm opacity-80">404-543-7111</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm opacity-80">
                  info@nexgensouthern.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © 2024 NexGen Southern Developers. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 text-sm opacity-80">
              <Link
                to="/privacy"
                className="hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:opacity-100 transition-opacity"
              >
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
