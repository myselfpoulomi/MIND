import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/dashboard";
import Meditation from "./pages/meditation";
import Music from "./pages/music";
import Todos from "./pages/todos";
import Appointments from "./pages/appointments";
import Support from "./pages/support";
import Emergency from "./pages/emergency";
import About from "./pages/about";
import Subscription from "./pages/subscription";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/music" element={<Music />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/support" element={<Support />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/about" element={<About />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
