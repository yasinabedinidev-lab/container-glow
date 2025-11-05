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
      
      <div className="pt-24 pb-20">
        <SidebarProvider defaultOpen={true}>
          <div className="flex w-full min-h-[calc(100vh-176px)] flex-row-reverse">
            <ProfileSidebar />
            
            <main className="flex-1 relative">
              <div className="container mx-auto max-w-6xl px-4 py-8">
                <Outlet />
              </div>
            </main>
          </div>
        </SidebarProvider>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfileLayout;
