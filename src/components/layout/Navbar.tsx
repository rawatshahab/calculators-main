
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Calculators", path: "/calculators" },
  { name: "Jobs", path: "/jobs" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight transition-all duration-300 hover:opacity-80"
        >
          <img 
          
            src="/uploads/3f672efc-bd59-45dd-88f0-aa4de10c1f61.png" 
            alt="ToDo Logo" 
            className="h-8 w-auto" 
          />
          <span>Calculator</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-primary",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <Link
              to="/sign-in"
              className="px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary"
            >
              Sign In
            </Link>
            <Button variant="default" asChild>
              <Link to="/sign-up">Join Us</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 space-y-6">
          {NavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-base font-medium transition-all duration-300",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-4">
            <Link
              to="/sign-in"
              className="w-full px-4 py-2 text-center text-foreground border border-border rounded-lg"
            >
              Sign In
            </Link>
            <Button variant="default" asChild className="w-full">
              <Link to="/sign-up">Join Us</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
