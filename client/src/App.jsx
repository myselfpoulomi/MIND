import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Meditation from "./pages/Meditation";
import Music from "./pages/Music";
import Todos from "./pages/Todos";
import Appointments from "./pages/Appointments";
import Support from "./pages/Support";
import Emergency from "./pages/Emergency";
import About from "./pages/About";
import Subscription from "./pages/Subscription";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import PremiumOnly from "./pages/PremiumOnly";

import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [session, setSession] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const sessionResult = localStorage.getItem("session");

  useEffect(() => {
    if (sessionResult) setSession(sessionResult);
  }, [sessionResult, refetch]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Home page always accessible */}
            <Route
              path="/"
              element={<Index session={session} setRefetch={setRefetch} />}
            />

            {/* Login page: redirect if already logged in */}
            <Route
              path="/login"
              element={
                session ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Login setRefetch={setRefetch} />
                )
              }
            />

            {/* Protected Routes */}
            {session ? (
              <>
                <Route
                  path="/dashboard"
                  element={
                    <Dashboard session={session} setRefetch={setRefetch} />
                  }
                />
                <Route
                  path="/meditation"
                  element={
                    <Meditation session={session} setRefetch={setRefetch} />
                  }
                />
                <Route
                  path="/music"
                  element={<Music session={session} setRefetch={setRefetch} />}
                />
                <Route
                  path="/todos"
                  element={<Todos session={session} setRefetch={setRefetch} />}
                />
                <Route
                  path="/appointments"
                  element={
                    localStorage.getItem("userType") === "premium" ? (
                      <Appointments session={session} setRefetch={setRefetch} />
                    ) : (
                      <PremiumOnly />
                    )
                  }
                />
                <Route
                  path="/support"
                  element={
                    <Support session={session} setRefetch={setRefetch} />
                  }
                />
                <Route
                  path="/emergency"
                  element={
                    <Emergency session={session} setRefetch={setRefetch} />
                  }
                />
                <Route
                  path="/about"
                  element={<About session={session} setRefetch={setRefetch} />}
                />
                <Route
                  path="/subscription"
                  element={
                    <Subscription session={session} setRefetch={setRefetch} />
                  }
                />
                <Route path="*" element={<NotFound />} />
              </>
            ) : (
              <>
                {/* If no session and trying to access protected routes, redirect */}
                <Route
                  path="/dashboard"
                  element={<Navigate to="/login" replace />}
                />
                <Route
                  path="/meditation"
                  element={<Navigate to="/login" replace />}
                />
                <Route
                  path="/music"
                  element={<Navigate to="/login" replace />}
                />
                <Route
                  path="/todos"
                  element={<Navigate to="/login" replace />}
                />
                <Route
                  path="/appointments"
                  element={<Navigate to="/login" replace />}
                />
                <Route
                  path="/support"
                  element={<Navigate to="/login" replace />}
                />
                <Route
                  path="/emergency"
                  element={<Navigate to="/login" replace />}
                />
                <Route
                  path="/about"
                  element={<Navigate to="/login" replace />}
                />
                <Route
                  path="/subscription"
                  element={<Navigate to="/login" replace />}
                />
                <Route path="*" element={<NotFound />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
