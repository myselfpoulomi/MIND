import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  HeartHandshake,
  Heart,
  Home,
  Music,
  List,
  Calendar,
  MessageCircle,
  Phone,
  Info,
  User,
} from "lucide-react";
import {useNavigate} from "react-router-dom"

const Navbar = ({session}) => {
  const navigation = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const hanldeLogout = ()=>{
    if(session){
      localStorage.removeItem("session");
      setRefetch((prev)=>!prev);
    }
  }

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <HeartHandshake className="h-8 w-8 text-[#8e89bd]" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-[#8e89bd] to-[#7e79a7] bg-clip-text text-transparent">
                MIND
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#7f76c4] px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-[#7f76c4] px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>
              <Link
                to="/meditation"
                className="text-gray-700 hover:text-[#7f76c4] px-3 py-2 rounded-md text-sm font-medium"
              >
                Meditation
              </Link>
              <Link
                to="/music"
                className="text-gray-700 hover:text-[#7f76c4] px-3 py-2 rounded-md text-sm font-medium"
              >
                Music
              </Link>
              <Link
                to="/todos"
                className="text-gray-700 hover:text-[#7f76c4] px-3 py-2 rounded-md text-sm font-medium"
              >
                Tasks
              </Link>
              <Link
                to="/appointments"
                className="text-gray-700 hover:text-[#7f76c4] px-3 py-2 rounded-md text-sm font-medium"
              >
                Appointments
              </Link>
              <Link
                to="/support"
                className="text-gray-700 hover:text-[#7f76c4] px-3 py-2 rounded-md text-sm font-medium"
              >
                Support
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#7f76c4] px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-2">
            {/* <Button
            onClick={hanldeLogoutLogin}
              variant="outline"
              asChild
              className="border-[#9B91E3] text-[#7f76c4] hover:bg-[#edeaff] px-8"
            >
              {session ? "Logout" : "Login"}
            </Button> */}
            <Button
              variant="default"
              asChild
              className="bg-[#9B91E3] hover:bg-[#7f76c4]"
            >
              <Link to="/subscription">Try Premium</Link>
            </Button>

            <Button size="lg" variant="outline" asChild
              onClick={hanldeLogout}
            >
              <Link to={session?"/":"/login"}>{session?"Logout":"Login"}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-mind-purple hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-white`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-700 hover:text-[#7f76c4] block px-3 py-2 rounded-md text-base font-medium"
          >
            <div className="flex items-center">
              <Home className="mr-2 h-5 w-5" />
              Home
            </div>
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-[#7f76c4] block px-3 py-2 rounded-md text-base font-medium"
          >
            <div className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              Dashboard
            </div>
          </Link>
          <Link
            to="/meditation"
            className="text-gray-700 hover:text-[#7f76c4] block px-3 py-2 rounded-md text-base font-medium"
          >
            <div className="flex items-center">
              <Heart className="mr-2 h-5 w-5" />
              Meditation
            </div>
          </Link>
          <Link
            to="/music"
            className="text-gray-700 hover:text-[#7f76c4] block px-3 py-2 rounded-md text-base font-medium"
          >
            <div className="flex items-center">
              <Music className="mr-2 h-5 w-5" />
              Music
            </div>
          </Link>
          <Link
            to="/todos"
            className="text-gray-700 hover:text-[#7f76c4] block px-3 py-2 rounded-md text-base font-medium"
          >
            <div className="flex items-center">
              <List className="mr-2 h-5 w-5" />
              Tasks
            </div>
          </Link>
          <Link
            to="/appointments"
            className="text-gray-700 hover:text-[#7f76c4] block px-3 py-2 rounded-md text-base font-medium"
          >
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Appointments
            </div>
          </Link>
          <Link
            to="/support"
            className="text-gray-700 hover:text-[#7f76c4] block px-3 py-2 rounded-md text-base font-medium"
          >
            <div className="flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Support
            </div>
          </Link>
          <Link
            to="/emergency"
            className="text-gray-700 hover:text-[#7f76c4] block px-3 py-2 rounded-md text-base font-medium"
          >
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Emergency
            </div>
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-[#7f76c4] block px-3 py-2 rounded-md text-base font-medium"
          >
            <div className="flex items-center">
              <Info className="mr-2 h-5 w-5" />
              About
            </div>
          </Link>

          


          <div className="mt-4 space-y-2">
          
            <Link to="/subscription">
              <Button className="w-full text-white bg-[#9B91E3] hover:bg-[#7f76c4]">
                Try Premium
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
