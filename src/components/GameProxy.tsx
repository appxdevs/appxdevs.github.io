import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Maximize2, Minimize2, ExternalLink } from "lucide-react";
import { Game } from "./GameCard";

interface GameProxyProps {
  game: Game | null;
  isOpen: boolean;
  onClose: () => void;
}

const GameProxy = ({ game, isOpen, onClose }: GameProxyProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);

  if (!game) return null;

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const openInNewTab = () => {
    if (game.gameUrl) {
      window.open(game.gameUrl, '_blank');
    }
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
              onClick={openInNewTab}
              className="h-8 w-8 p-0"
              title="Open in new tab"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="h-8 w-8 p-0"
              title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
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
              title="Close"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="flex-1 relative">
          {isLoading && (
            <div className="absolute inset-0 bg-muted flex items-center justify-center z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading {game.title}...</p>
              </div>
            </div>
          )}
          
          {game.gameUrl ? (
            <iframe
              src={game.gameUrl}
              title={game.title}
              className="w-full h-full border-0"
              onLoad={handleIframeLoad}
              allow="autoplay; fullscreen; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write"
              sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin allow-downloads"
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

export default GameProxy;