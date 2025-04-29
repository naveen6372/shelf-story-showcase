
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { DashboardLayout } from './components/dashboard/DashboardLayout';

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LogoutPage from "./pages/LogoutPage";
import ExplorePage from "./pages/ExplorePage";
import FeaturesPage from "./pages/FeaturesPage";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import DashboardCaseStudies from "./pages/dashboard/DashboardCaseStudies";
import DashboardNewCaseStudy from "./pages/dashboard/DashboardNewCaseStudy";
import DashboardTheme from "./pages/dashboard/DashboardTheme";
import DashboardAnalytics from "./pages/dashboard/DashboardAnalytics";
import DashboardSettings from "./pages/dashboard/DashboardSettings";
import PortfolioHome from "./pages/portfolio/PortfolioHome";
import PortfolioAbout from "./pages/portfolio/PortfolioAbout";
import CaseStudyDetail from "./pages/portfolio/CaseStudyDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            
            {/* Dashboard routes - Protected */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<DashboardOverview />} />
              <Route path="case-studies" element={<DashboardCaseStudies />} />
              <Route path="case-studies/new" element={<DashboardNewCaseStudy />} />
              <Route path="theme" element={<DashboardTheme />} />
              <Route path="analytics" element={<DashboardAnalytics />} />
              <Route path="settings" element={<DashboardSettings />} />
            </Route>
            
            {/* Portfolio routes */}
            <Route path="/:username" element={<PortfolioHome />} />
            <Route path="/:username/about" element={<PortfolioAbout />} />
            <Route path="/:username/:slug" element={<CaseStudyDetail />} />
            
            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
