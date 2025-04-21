import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import YogaMeditation from "./pages/YogaMeditation";
import MusicPlayer from "./pages/MusicPlayer";
import ToDoList from "./pages/ToDoList";
import ChatSupport from "./pages/ChatSupport";
import Support from "./pages/Support";
import About from "./pages/About";
import Subscription from "./pages/Subscription";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/yoga-meditation" element={<YogaMeditation />} />
            <Route path="/music" element={<MusicPlayer />} />
            <Route path="/todo" element={<ToDoList />} />
            <Route path="/chat" element={<ChatSupport />} />
            <Route path="/emergencysupport" element={<Support />} />
            <Route path="/about" element={<About />} />
            <Route path="/subscription" element={<Subscription />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

