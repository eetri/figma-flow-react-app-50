
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Pages
import AkhtiyarScreen from "./pages/AkhtiyarScreen";
import ProjectForm from "./pages/ProjectForm";
import ProjectDetail from "./pages/ProjectDetail";
import RecentProjects from "./pages/RecentProjects";
import RecentDiscussions from "./pages/RecentDiscussions";
import OpenDiscussionPage from "./pages/OpenDiscussionPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AkhtiyarScreen />} />
            <Route path="add-project" element={<ProjectForm />} />
            <Route path="project-detail/:id" element={<ProjectDetail />} />
            <Route path="recent-projects" element={<RecentProjects />} />
            <Route path="recent-discussions" element={<RecentDiscussions />} />
            <Route path="open-discussion/:id" element={<OpenDiscussionPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
