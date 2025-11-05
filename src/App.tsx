import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileLayout from "./pages/ProfileLayout";
import ProfileDashboard from "./pages/ProfileDashboard";
import ProfileServices from "./pages/ProfileServices";
import ProfileSettings from "./pages/ProfileSettings";
import ServiceManagement from "./pages/ServiceManagement";
import Support from "./pages/Support";
import TicketDetail from "./pages/TicketDetail";
import TicketsList from "./pages/TicketsList";
import Cart from "./pages/Cart";
import Invoice from "./pages/Invoice";
import Blog from "./pages/Blog";
import NotificationsPage from "./pages/NotificationsPage";
import Pricing from "./pages/Pricing";
import Documentation from "./pages/Documentation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<ProfileDashboard />} />
            <Route path="services" element={<ProfileServices />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          <Route path="/services/manage/:id" element={<ServiceManagement />} />
          <Route path="/support" element={<Support />} />
          <Route path="/ticket/:id" element={<TicketDetail />} />
          <Route path="/tickets" element={<TicketsList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/documentation" element={<Documentation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
