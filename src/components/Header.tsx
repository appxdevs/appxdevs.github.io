import { Search, Menu, User, Trophy, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import playGameLogo from "@/assets/play-game-logo.png";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="relative z-50 border-b border-border/50 bg-card/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src={playGameLogo} 
                alt="Play-Game Logo" 
                className="h-10 w-10 transition-smooth hover:scale-110 glow-primary"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                Play-Game
              </h1>
              <p className="text-xs text-muted-foreground">Unlimited Gaming Fun</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 bg-muted/50 border-border/50 focus:border-primary transition-smooth"
              />
            </form>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary transition-smooth">
              <Trophy className="h-4 w-4 mr-2" />
              Leaderboard
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary transition-smooth">
              <Info className="h-4 w-4 mr-2" />
              About
            </Button>
            <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10 transition-smooth">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/50">
            <nav className="flex flex-col gap-2">
              <Button variant="ghost" size="sm" className="justify-start text-foreground hover:text-primary transition-smooth">
                <Trophy className="h-4 w-4 mr-2" />
                Leaderboard
              </Button>
              <Button variant="ghost" size="sm" className="justify-start text-foreground hover:text-primary transition-smooth">
                <Info className="h-4 w-4 mr-2" />
                About
              </Button>
              <Button variant="outline" size="sm" className="justify-start border-primary/50 hover:bg-primary/10 transition-smooth">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;