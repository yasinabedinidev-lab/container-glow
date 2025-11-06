import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContainers from "@/components/FloatingContainers";

const ProfileLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingContainers />
      <Navbar />
      
      <div className="pt-28 pb-24 px-4">
        <SidebarProvider defaultOpen={true}>
          <div className="flex w-full min-h-[calc(100vh-208px)] gap-4 flex-row-reverse container mx-auto max-w-7xl">
            <ProfileSidebar />
            
            <main className="flex-1 relative">
              <Outlet />
            </main>
          </div>
        </SidebarProvider>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfileLayout;
