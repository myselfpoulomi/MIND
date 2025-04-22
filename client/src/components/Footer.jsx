import { Link } from "react-router-dom";
import { HeartHandshake } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white backdrop-blur-md pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <HeartHandshake className="h-8 w-8  text-[#8e89bd]" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-[#8e89bd] to-[#7b779e] bg-clip-text text-transparent">
                MIND
              </span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Helping you understand, track, and improve your mental wellbeing through awareness and support.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
              Features
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/meditation" className="text-gray-600 hover:text-mind-purple text-sm">
                  Meditation & Yoga
                </Link>
              </li>
              <li>
                <Link to="/music" className="text-gray-600 hover:text-mind-purple text-sm">
                  Calming Music
                </Link>
              </li>
              <li>
                <Link to="/todos" className="text-gray-600 hover:text-mind-purple text-sm">
                  Mental Wellness Tasks
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-gray-600 hover:text-mind-purple text-sm">
                  Professional Appointments
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/support" className="text-gray-600 hover:text-mind-purple text-sm">
                  Chat Support
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-gray-600 hover:text-mind-purple text-sm">
                  Emergency Contacts
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-mind-purple text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-mind-purple text-sm">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
              About
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-mind-purple text-sm">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-600 hover:text-mind-purple text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="text-gray-600 hover:text-mind-purple text-sm">
                  Premium Plans
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-mind-purple text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-center text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} MIND. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
