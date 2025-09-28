import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";
import { Game } from "./GameCard";

interface GameModalProps {
  game: Game | null;
  isOpen: boolean;
  onClose: () => void;
}

const GameModal = ({ game, isOpen, onClose }: GameModalProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!game) return null;

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={`p-0 border-primary/50 ${
          isFullscreen 
            ? "max-w-[100vw] max-h-[100vh] h-[100vh] w-[100vw] rounded-none" 
            : "max-w-6xl max-h-[90vh] h-[80vh]"
        }`}
      >
        <DialogHeader className="px-6 py-4 border-b border-border/50 flex-row items-center justify-between">
          <DialogTitle className="text-lg font-semibold">
            {game.title}
          </DialogTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="h-8 w-8 p-0"
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="flex-1 relative">
          {game.gameUrl ? (
            <iframe
              src={game.gameUrl}
              title={game.title}
              className="w-full h-full border-0"
              allow="gamepad; microphone; camera; fullscreen"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              loading="lazy"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-muted">
              <div className="text-center">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="text-xl font-semibold mb-2">Game Coming Soon</h3>
                <p className="text-muted-foreground">
                  This game will be available soon!
                </p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GameModal;