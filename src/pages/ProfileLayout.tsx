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
          <div className="mb-8 bg-card/95 backdrop-blur-xl border border-red-primary/20 rounded-2xl p-2 shadow-lg">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-6 py-3 rounded-xl transition-all flex-1 justify-center ${
                      isActive
                        ? "bg-gradient-accent text-white shadow-lg glow-red"
                        : "text-foreground/70 hover:text-foreground hover:bg-red-primary/5"
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
