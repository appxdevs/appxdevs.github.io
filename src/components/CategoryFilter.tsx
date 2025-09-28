import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Gamepad2, 
  Users, 
  Zap, 
  Monitor, 
  Mountain, 
  Puzzle, 
  Trophy, 
  Car, 
  Sword, 
  Ghost,
  Square,
  Sparkles
} from "lucide-react";

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  count?: number;
}

const categories: Category[] = [
  { id: "all", name: "All", icon: <Gamepad2 className="h-4 w-4" />, count: 15 },
  { id: "arcade", name: "Arcade", icon: <Monitor className="h-4 w-4" />, count: 5 },
  { id: "puzzle", name: "Puzzle", icon: <Puzzle className="h-4 w-4" />, count: 2 },
  { id: "adventure", name: "Adventure", icon: <Mountain className="h-4 w-4" />, count: 3 },
  { id: "action", name: "Action", icon: <Zap className="h-4 w-4" />, count: 1 },
  { id: "multiplayer", name: "Multiplayer", icon: <Users className="h-4 w-4" />, count: 3 },
  { id: "idle", name: "Idle", icon: <Sparkles className="h-4 w-4" />, count: 1 }
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "secondary"}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className={`
                relative transition-bounce hover:scale-105
                ${selectedCategory === category.id 
                  ? "glow-primary bg-primary hover:bg-primary/90" 
                  : "bg-card hover:bg-card/80 border-border/50"
                }
              `}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
              {category.count && (
                <Badge 
                  variant="secondary" 
                  className={`ml-2 text-xs ${
                    selectedCategory === category.id 
                      ? "bg-primary-foreground/20 text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {category.count}
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
export { categories };