import { Link, useLocation } from "react-router-dom";
import { Container, User, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "صفحه اصلی" },
    { path: "/services", label: "سرویس‌ها" },
    { path: "/profile", label: "پروفایل" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Container className="w-8 h-8 text-neon-blue group-hover:animate-glow-pulse transition-all" />
              <div className="absolute inset-0 glow-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold text-glow-blue">ContainerShop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? "text-neon-blue"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-blue glow-neon-blue" />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Button */}
          <div className="hidden md:block">
            <Link to="/login">
              <Button variant="outline" className="gap-2 glow-neon-blue border-neon-blue/50 hover:bg-neon-blue/10">
                <User className="w-4 h-4" />
                ورود / ثبت‌نام
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-slide-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? "text-neon-blue bg-neon-blue/10"
                    : "text-foreground/70 hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full gap-2 border-neon-blue/50">
                <User className="w-4 h-4" />
                ورود / ثبت‌نام
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
