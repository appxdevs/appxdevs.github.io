import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Github, 
  Twitter, 
  Mail, 
  Heart,
  Home,
  Info,
  Trophy,
  User,
  Shield,
  HelpCircle
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: "/", icon: <Home className="h-4 w-4" />, label: "Home" },
    { to: "/about", icon: <Info className="h-4 w-4" />, label: "About" },
    { to: "/leaderboard", icon: <Trophy className="h-4 w-4" />, label: "Leaderboard" },
  ];

  const accountLinks = [
    { to: "/login", icon: <User className="h-4 w-4" />, label: "Login" },
    { to: "/register", icon: <User className="h-4 w-4" />, label: "Sign Up" },
  ];

  const supportLinks = [
    { to: "/privacy", icon: <Shield className="h-4 w-4" />, label: "Privacy Policy" },
    { to: "/terms", icon: <Shield className="h-4 w-4" />, label: "Terms of Service" },
    { to: "/help", icon: <HelpCircle className="h-4 w-4" />, label: "Help & Support" },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                  Play-Game
                </h3>
                <p className="text-xs text-muted-foreground">Unlimited Gaming Fun</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your ultimate destination for free online games. Play, compete, and have fun!
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              {accountLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Play-Game. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with 
              <Heart className="h-4 w-4 text-red-500" />
              for gamers everywhere
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;