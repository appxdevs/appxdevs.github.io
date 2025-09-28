import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Users, Star, Shield, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Gamepad2 className="h-8 w-8 text-primary" />,
      title: "Unlimited Games",
      description: "Access hundreds of games across multiple categories without any limits."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Multiplayer Support",
      description: "Play with friends in our selection of multiplayer and social games."
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "High Quality",
      description: "All games are carefully selected for quality and entertainment value."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safe & Secure",
      description: "Play games safely with our internal proxy system and security measures."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Fast Loading",
      description: "Games load quickly and run smoothly for the best gaming experience."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={() => {}} />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            About Play-Game
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Your Ultimate Gaming Destination
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Play-Game is a revolutionary gaming platform that brings you unlimited access to 
            the best games on the web. From classic arcade games to modern puzzles, 
            we've got something for every gamer.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-card/50 rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We believe that great games should be accessible to everyone. That's why we've created 
              Play-Game - a platform where you can enjoy premium gaming experiences for free, 
              without downloads, installations, or complicated setups.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Games Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">7</div>
                <div className="text-sm text-muted-foreground">Game Categories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Free to Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;