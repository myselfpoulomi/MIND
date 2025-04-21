import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-mind-purple-light/20 to-mind-blue-light/20 border-t py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-5 w-5 text-mind-purple" />
              <span className="text-lg font-bold text-mind-purple">MIND</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Supporting mental health awareness and providing tools for wellbeing.
            </p>
          </div>

          <FooterColumn
            title="Resources"
            links={[
              { label: "Yoga & Meditation", to: "/yoga-meditation" },
              { label: "Music Therapy", to: "/music" },
              { label: "Wellness Goals", to: "/todo" },
              { label: "Emergency Support", to: "/emergency" },
            ]}
          />

          <FooterColumn
            title="Company"
            links={[
              { label: "About Us", to: "/about" },
              { label: "Our Team", to: "/team" },
              { label: "Careers", to: "/careers" },
              { label: "Contact Us", to: "/contact" },
            ]}
          />

          <FooterColumn
            title="Legal"
            links={[
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms of Service", to: "/terms" },
              { label: "Cookie Policy", to: "/cookies" },
            ]}
          />
        </div>

        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MIND. All rights reserved.</p>
          <p className="mt-1">
            In case of emergency, please call your local emergency services or a mental health hotline directly.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              className="text-sm text-muted-foreground hover:text-mind-purple transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
