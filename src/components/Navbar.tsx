import { Link, useLocation } from "react-router-dom";
import { Container, User, Menu, X, Sparkles, LogOut, Settings, Headphones } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Notifications from "./Notifications";
import BlogDropdown from "./BlogDropdown";
import { ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import ThemeToggle from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const userName = "yasin abedini";

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
      <div className="bg-card/95 backdrop-blur-xl border border-border shadow-2xl rounded-2xl max-w-7xl mx-auto overflow-hidden">
        <div className="px-6 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative p-2 rounded-xl bg-gradient-to-br from-red-primary/20 to-red-dark/20 group-hover:from-red-primary/30 group-hover:to-red-dark/30 transition-all border border-red-primary/30">
              <Container className="w-7 h-7 text-red-primary group-hover:animate-glow-pulse transition-all" />
              <div className="absolute inset-0 glow-red opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <Sparkles className="w-3 h-3 text-red-light absolute -top-1 -right-1 animate-glow-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-red-primary">DockerCity</span>
              <span className="text-[10px] text-foreground/50">Platform as a Service</span>
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
                  className="relative px-4 py-2 text-sm font-medium transition-all rounded-lg text-foreground/70 hover:text-red-primary hover:bg-red-primary/5 group"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all rounded-lg group ${
                    isActive(item.path)
                      ? "text-red-primary bg-red-primary/10"
                      : "text-foreground/70 hover:text-red-primary hover:bg-red-primary/5"
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-red-primary rounded-full glow-red" />
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
              <Button variant="ghost" size="icon" className="relative hover:bg-red-primary/10 transition-all">
                <ShoppingCart className="w-5 h-5 text-red-primary" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-primary text-white text-xs border-none">
                  0
                </Badge>
              </Button>
            </Link>
            
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="gap-2 px-3 py-2 h-auto hover:bg-red-primary/10 transition-all border border-red-primary/20 bg-card/50 backdrop-blur-sm hover:border-red-primary/40 rounded-lg group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-primary to-red-dark flex items-center justify-center shadow-md text-white font-bold text-sm">
                      Y
                    </div>
                    <span className="text-sm text-foreground">{userName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-64 p-0 bg-card/95 backdrop-blur-lg border-red-primary/30 shadow-2xl"
                >
                  <div className="p-4 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-primary to-red-dark flex items-center justify-center text-white font-bold">
                        Y
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate">{userName}</p>
                        <p className="text-xs text-foreground/60 truncate">09123456789</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-red-primary/5 transition-all">
                        <User className="w-4 h-4 text-red-primary" />
                        <span>پنل کاربری</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/profile/settings" className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-red-primary/5 transition-all">
                        <Settings className="w-4 h-4 text-red-primary" />
                        <span>تنظیمات</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/support" className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-red-primary/5 transition-all">
                        <Headphones className="w-4 h-4 text-red-primary" />
                        <span>پشتیبانی</span>
                      </Link>
                    </DropdownMenuItem>
                  </div>
                  
                  <div className="border-t border-border/50 p-2">
                    <DropdownMenuItem 
                      className="flex items-center gap-3 px-4 py-2 cursor-pointer text-destructive hover:bg-destructive/10 focus:text-destructive transition-all"
                      onClick={() => {
                        // TODO: Add logout logic
                        setIsLoggedIn(false);
                      }}
                    >
                      <LogOut className="w-4 h-4" />
                      <span>خروج از حساب</span>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button className="gap-2 bg-gradient-red-dark hover:opacity-90 text-white glow-red shadow-lg transition-all">
                  <User className="w-4 h-4" />
                  ورود / ثبت‌نام
                </Button>
              </Link>
            )}
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
                      ? "text-red-primary bg-red-primary/10"
                      : "text-foreground/70 hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full gap-2 border-red-primary/50 text-red-primary hover:bg-red-primary/10">
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
