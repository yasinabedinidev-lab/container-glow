import { Link, useLocation } from "react-router-dom";
import { Container, User, Menu, X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Notifications from "./Notifications";
import BlogDropdown from "./BlogDropdown";
import { ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "صفحه اصلی" },
    { path: "/services", label: "سرویس‌ها" },
    { path: "https://n8n.containershop.ir", label: "n8n", external: true },
    { path: "/support", label: "پشتیبانی" },
    { path: "/profile", label: "پروفایل" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-gradient-to-b from-card via-card/95 to-card/80 backdrop-blur-xl border border-neon-blue/20 shadow-2xl shadow-neon-blue/10 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-cyan/5 pointer-events-none rounded-2xl" />
        <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative p-2 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 group-hover:from-neon-blue/30 group-hover:to-neon-cyan/30 transition-all border border-neon-blue/30">
              <Container className="w-7 h-7 text-neon-blue group-hover:animate-glow-pulse transition-all" />
              <div className="absolute inset-0 glow-neon-blue opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <Sparkles className="w-3 h-3 text-neon-cyan absolute -top-1 -right-1 animate-glow-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-neon-blue">DockerCity</span>
              <span className="text-[10px] text-neon-cyan/70">Platform as a Service</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => 
              item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-4 py-2 text-sm font-medium transition-all rounded-lg text-foreground/70 hover:text-neon-cyan hover:bg-neon-cyan/5 group"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all rounded-lg group ${
                    isActive(item.path)
                      ? "text-neon-blue bg-neon-blue/10"
                      : "text-foreground/70 hover:text-neon-cyan hover:bg-neon-cyan/5"
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-neon-blue rounded-full glow-neon-blue" />
                  )}
                </Link>
              )
            )}
            <BlogDropdown />
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Notifications />
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative hover:bg-neon-cyan/10 transition-all">
                <ShoppingCart className="w-5 h-5 text-neon-blue" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-neon-cyan text-xs border-none">
                  0
                </Badge>
              </Button>
            </Link>
            <Link to="/login">
              <Button className="gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-blue/80 hover:to-neon-cyan/80 text-primary-foreground glow-neon-blue shadow-lg transition-all">
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
            {navItems.map((item) => 
              item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-medium transition-all text-foreground/70 hover:bg-secondary"
                >
                  {item.label}
                </a>
              ) : (
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
              )
            )}
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full gap-2 border-neon-blue/50">
                <User className="w-4 h-4" />
                ورود / ثبت‌نام
              </Button>
            </Link>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
