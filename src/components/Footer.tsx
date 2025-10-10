import { Container, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    services: [
      { label: "سرویس‌ها", path: "/services" },
      { label: "قیمت‌گذاری", path: "/services" },
      { label: "مستندات", path: "#" },
    ],
    company: [
      { label: "درباره ما", path: "#" },
      { label: "وبلاگ", path: "#" },
      { label: "تماس با ما", path: "/support" },
    ],
    support: [
      { label: "پشتیبانی", path: "/support" },
      { label: "سوالات متداول", path: "#" },
      { label: "راهنما", path: "#" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border/50 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-blue/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-2 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 border border-neon-blue/30">
                <Container className="w-6 h-6 text-neon-blue" />
              </div>
              <div>
                <span className="text-lg font-bold text-neon-blue">
                  ContainerShop
                </span>
                <p className="text-[10px] text-neon-cyan/70">Platform as a Service</p>
              </div>
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed">
              پلتفرم حرفه‌ای ارائه سرویس‌های Docker و Container با بهترین کیفیت و پشتیبانی ۲۴/۷
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Github, link: "#" },
                { icon: Twitter, link: "#" },
                { icon: Linkedin, link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="p-2 rounded-lg bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-cyan hover:text-neon-blue transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-bold text-foreground mb-4">سرویس‌ها</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-foreground/60 hover:text-neon-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">شرکت</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-foreground/60 hover:text-neon-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-foreground/60">
                <Mail className="w-4 h-4 text-neon-cyan" />
                <span>support@containershop.ir</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/60">
                <Phone className="w-4 h-4 text-neon-cyan" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-foreground/60">
                <MapPin className="w-4 h-4 text-neon-cyan mt-1" />
                <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} ContainerShop. تمامی حقوق محفوظ است.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-foreground/60 hover:text-neon-cyan transition-colors">
                حریم خصوصی
              </Link>
              <Link to="#" className="text-sm text-foreground/60 hover:text-neon-cyan transition-colors">
                شرایط استفاده
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-neon-blue/10 blur-3xl" />
    </footer>
  );
};

export default Footer;
