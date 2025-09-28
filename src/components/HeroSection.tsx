import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users } from "lucide-react";
import playGameLogo from "@/assets/play-game-logo.png";

const HeroSection = () => {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Logo */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <img 
                src={playGameLogo} 
                alt="Play-Game" 
                className="h-20 w-20 glow-primary animate-pulse"
              />
            </div>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Play-Game
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-4">
            Unlimited Gaming Adventures
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover thousands of unblocked games. From action-packed adventures to mind-bending puzzles, 
            find your next gaming obsession right here.
          </p>

          {/* Hero Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">156+</div>
              <div className="text-sm text-muted-foreground">Games Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">50K+</div>
              <div className="text-sm text-muted-foreground">Players Online</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary">4.8</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>

          {/* Hero Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="glow-primary transition-bounce hover:scale-105 text-lg px-8 py-3"
            >
              <Play className="h-5 w-5 mr-2" />
              Start Playing Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 transition-smooth text-lg px-8 py-3"
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              View Popular Games
            </Button>
          </div>

          {/* Quick Features */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              No Downloads Required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              100% Free to Play
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              Play Anywhere
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;