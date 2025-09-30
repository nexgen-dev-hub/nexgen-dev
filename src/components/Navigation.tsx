import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Our Projects" },
    { path: "/about", label: "About Us" },
    { path: "/construction", label: "Construction" },
    { path: "/technologies", label: "Technologies" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#061B39] backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-48 h-16 bg-gradient-professional rounded-xl flex items-center justify-center">
              <img
                src="/finallogo.png"
                alt="NexGen Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
                  "hover:text-white",
                  isActive(item.path) ? "text-white" : "text-white/70"
                )}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
                )}
              </Link>
            ))}
            <Link to="/contact" className="btn-accent">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:text-white/80 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-[#061B39]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 rounded-lg text-base font-medium transition-colors",
                    isActive(item.path)
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="btn-accent w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { path: "/", label: "Home" },
//     { path: "/projects", label: "Our Projects" },
//     { path: "/about", label: "About Us" },
//     { path: "/construction", label: "Construction" },
//     { path: "/technologies", label: "Technologies" },
//     { path: "/contact", label: "Contact Us" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3">
//             <div className="w-48 h-24 bg-gradient-professional rounded-xl flex items-center justify-center">
//               <img
//                 src="/logooo.png"
//                 alt="NexGen Logo"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             {/* <div>
//               <h1 className="text-xl font-bold text-primary">NexGen</h1>
//               <p className="text-sm text-secondary">Southern Developers</p>
//             </div> */}
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={cn(
//                   "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
//                   "hover:text-primary",
//                   isActive(item.path) ? "text-primary" : "text-muted-foreground"
//                 )}
//               >
//                 {item.label}
//                 {isActive(item.path) && (
//                   <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
//                 )}
//               </Link>
//             ))}
//             <Link to="/contact" className="btn-accent">
//               Get Quote
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden border-t border-border bg-background">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className={cn(
//                     "block px-3 py-2 rounded-lg text-base font-medium transition-colors",
//                     isActive(item.path)
//                       ? "bg-primary/10 text-primary"
//                       : "text-muted-foreground hover:text-primary hover:bg-muted"
//                   )}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//               <div className="pt-4">
//                 <Link
//                   to="/contact"
//                   className="btn-accent w-full text-center"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Get Quote
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;
