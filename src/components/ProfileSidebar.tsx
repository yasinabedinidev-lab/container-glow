import { User, Settings, Container, LogOut, Home } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "داشبورد", url: "/profile", icon: Home },
  { title: "سرویس‌های من", url: "/profile/services", icon: Container },
  { title: "تنظیمات", url: "/profile/settings", icon: Settings },
];

export function ProfileSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar
      className={open ? "w-64" : "w-16"}
      collapsible="icon"
    >
      <SidebarContent className="bg-card/50 backdrop-blur-sm border-r border-border/50">
        {/* User Profile Header */}
        {open && (
          <div className="p-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-neon flex items-center justify-center glow-neon-blue">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">کاربر نمونه</p>
                <p className="text-xs text-foreground/60 truncate">09123456789</p>
              </div>
            </div>
          </div>
        )}

        <SidebarGroup>
          {open && <SidebarGroupLabel className="px-4 py-2 text-foreground/60">منوی کاربری</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                          isActive
                            ? "bg-neon-blue/10 text-neon-blue border-r-2 border-neon-blue"
                            : "text-foreground/70 hover:bg-accent/50 hover:text-foreground"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5 shrink-0" />
                      {open && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout Button */}
        <div className="mt-auto p-4 border-t border-border/50">
          <Button
            variant="outline"
            className={`w-full gap-2 border-destructive/50 text-destructive hover:bg-destructive/10 ${!open && 'px-2'}`}
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {open && <span>خروج</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
