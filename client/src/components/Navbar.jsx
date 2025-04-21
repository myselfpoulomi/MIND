import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { AuthDialog } from "./auth/AuthDialoge";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const openAuthDialog = () => setShowAuthDialog(true);
  const closeAuthDialog = () => setShowAuthDialog(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="mr-2">
            {isOpen ? <X /> : <Menu />}
          </Button>
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-mind-purple" />
            <span className="text-xl font-bold tracking-tight text-mind-purple">MIND</span>
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          <Link to="/about" className="text-sm font-medium hover:text-mind-purple transition-colors">
            About
          </Link>
          <Link to="/subscription" className="text-sm font-medium hover:text-mind-purple transition-colors">
            Subscribe
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={openAuthDialog}>
              Login / Sign Up
            </Button>
          </div>
        </nav>
      </div>

      {/* Hamburger Menu Content */}
      <div
        className={cn(
          "absolute top-16 left-0 w-full bg-background border-b overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <nav className="container py-4 flex flex-col space-y-4">
          <Link to="/dashboard" className="text-sm font-medium hover:text-mind-purple transition-colors">
            Dashboard
          </Link>
          <Link to="/yoga-meditation" className="text-sm font-medium hover:text-mind-purple transition-colors">
            Yoga & Meditation
          </Link>
          <Link to="/music" className="text-sm font-medium hover:text-mind-purple transition-colors">
            Music
          </Link>
          <Link to="/todo" className="text-sm font-medium hover:text-mind-purple transition-colors">
            To-Do List
          </Link>
          <Link to="/chat" className="text-sm font-medium hover:text-mind-purple transition-colors">
            Chat & Support
          </Link>
          <Link to="/emergency" className="text-sm font-medium hover:text-mind-purple transition-colors">
            Emergency
          </Link>
        </nav>
      </div>

      <AuthDialog isOpen={showAuthDialog} onClose={closeAuthDialog} />
    </header>
  );
}
