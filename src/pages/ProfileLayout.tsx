import { Outlet, NavLink, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContainers from "@/components/FloatingContainers";
import { LayoutDashboard, Settings, Container } from "lucide-react";

const ProfileLayout = () => {
  const location = useLocation();
  
  const tabs = [
    { title: "داشبورد", path: "/profile", icon: LayoutDashboard },
    { title: "مدیریت سرویس‌ها", path: "/profile/services", icon: Container },
    { title: "مدیریت حساب", path: "/profile/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingContainers />
      <Navbar />
      
      <div className="pt-28 pb-24 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Navigation Tabs */}
          <div className="mb-8 bg-gradient-to-b from-card via-card/95 to-card/80 backdrop-blur-xl border border-neon-blue/20 rounded-2xl p-2 shadow-lg shadow-neon-blue/5">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-6 py-3 rounded-xl transition-all flex-1 justify-center ${
                      isActive
                        ? "bg-gradient-neon text-primary-foreground shadow-lg shadow-neon-blue/20"
                        : "text-foreground/70 hover:text-foreground hover:bg-neon-blue/5"
                    }`
                  }
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.title}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Content */}
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfileLayout;
