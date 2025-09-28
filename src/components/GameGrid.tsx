import { useState } from "react";
import GameCard, { Game } from "./GameCard";
import GameProxy from "./GameProxy";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface GameGridProps {
  games: Game[];
  searchQuery?: string;
  selectedCategory?: string;
}

const GameGrid = ({ games, searchQuery = "", selectedCategory = "all" }: GameGridProps) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Filter games based on search and category
  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Show only first 12 games initially, unless showAll is true
  const displayedGames = showAll ? filteredGames : filteredGames.slice(0, 12);
  const hasMoreGames = filteredGames.length > 12;

  const handlePlayGame = (game: Game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Results Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">
            {searchQuery ? (
              <>
                Search Results for "<span className="text-primary">{searchQuery}</span>"
              </>
            ) : selectedCategory === "all" ? (
              "All Games"
            ) : (
              `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Games`
            )}
          </h2>
          <p className="text-muted-foreground">
            {filteredGames.length} {filteredGames.length === 1 ? "game" : "games"} found
          </p>
        </div>

        {/* Games Grid */}
        {filteredGames.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold mb-2">No games found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or browse different categories
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {displayedGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onPlay={handlePlayGame}
                />
              ))}
            </div>

            {/* Load More Button */}
            {hasMoreGames && !showAll && (
              <div className="text-center mt-8">
                <Button
                  onClick={() => setShowAll(true)}
                  variant="outline"
                  size="lg"
                  className="border-primary/50 hover:bg-primary/10 transition-smooth"
                >
                  <ChevronDown className="h-4 w-4 mr-2" />
                  Show {filteredGames.length - 12} More Games
                </Button>
              </div>
            )}
          </>
        )}

        {/* Game Proxy */}
        <GameProxy 
          game={selectedGame}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedGame(null);
          }}
        />
      </div>
    </div>
  );
};

export default GameGrid;