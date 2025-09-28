import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Star, Users, Clock } from "lucide-react";
import { useState } from "react";

export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  rating: number;
  players?: string;
  duration?: string;
  isNew?: boolean;
  isPopular?: boolean;
  gameUrl?: string;
}

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

const GameCard = ({ game, onPlay }: GameCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="group relative overflow-hidden transition-bounce hover:scale-105 glow-card bg-card border-border/50 hover:border-primary/50">
      <div className="relative aspect-[4/3] overflow-hidden">
        {imageError ? (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Play className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Game Thumbnail</p>
            </div>
          </div>
        ) : (
          <img
            src={game.thumbnail}
            alt={game.title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-110"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        )}
        
        {/* Overlay with play button */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
          <Button
            onClick={() => onPlay(game)}
            size="lg"
            className="glow-primary transition-bounce hover:scale-110"
          >
            <Play className="h-5 w-5 mr-2" />
            Play Now
          </Button>
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {game.isNew && (
            <Badge className="bg-success text-success-foreground">
              New
            </Badge>
          )}
          {game.isPopular && (
            <Badge className="bg-accent text-accent-foreground">
              Popular
            </Badge>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-2 right-2">
          <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span>{game.rating}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
          {game.title}
        </h3>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            {game.players && (
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>{game.players}</span>
              </div>
            )}
            {game.duration && (
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{game.duration}</span>
              </div>
            )}
          </div>
          <Badge variant="outline" className="text-xs">
            {game.category}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;