import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Crown } from "lucide-react";

const Leaderboard = () => {
  const topPlayers = [
    { rank: 1, name: "GameMaster2024", score: 15420, games: 28, icon: <Crown className="h-5 w-5 text-yellow-500" /> },
    { rank: 2, name: "ProGamer", score: 14890, games: 25, icon: <Trophy className="h-5 w-5 text-gray-400" /> },
    { rank: 3, name: "PixelHero", score: 13750, games: 22, icon: <Medal className="h-5 w-5 text-amber-600" /> },
    { rank: 4, name: "ArcadeKing", score: 12980, games: 20, icon: <Award className="h-5 w-5 text-blue-500" /> },
    { rank: 5, name: "RetroGamer", score: 11540, games: 18, icon: <Award className="h-5 w-5 text-green-500" /> },
    { rank: 6, name: "SpeedRunner", score: 10980, games: 16, icon: <Award className="h-5 w-5 text-purple-500" /> },
    { rank: 7, name: "PuzzleSolver", score: 9870, games: 15, icon: <Award className="h-5 w-5 text-pink-500" /> },
    { rank: 8, name: "ActionHero", score: 8950, games: 14, icon: <Award className="h-5 w-5 text-indigo-500" /> },
  ];

  const categories = [
    { name: "Arcade", leader: "ArcadeKing", score: 2450 },
    { name: "Puzzle", leader: "PuzzleSolver", score: 1980 },
    { name: "Adventure", leader: "RetroGamer", score: 1750 },
    { name: "Action", leader: "ActionHero", score: 1680 },
    { name: "Multiplayer", leader: "ProGamer", score: 2240 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={() => {}} />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Leaderboard
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Top Players
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See who's leading the pack in our gaming community. Compete for the top spot!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Global Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPlayers.map((player) => (
                    <div
                      key={player.rank}
                      className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                        player.rank <= 3 
                          ? 'bg-primary/5 border border-primary/20' 
                          : 'bg-muted/50 hover:bg-muted/80'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className={`font-bold text-lg ${
                            player.rank === 1 ? 'text-yellow-500' :
                            player.rank === 2 ? 'text-gray-400' :
                            player.rank === 3 ? 'text-amber-600' :
                            'text-muted-foreground'
                          }`}>
                            #{player.rank}
                          </span>
                          {player.icon}
                        </div>
                        <div>
                          <p className="font-semibold">{player.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {player.games} games played
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{player.score.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Category Leaders */}
          <div>
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Category Leaders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categories.map((category) => (
                    <div key={category.name} className="p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{category.name}</span>
                        <Trophy className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {category.leader}
                      </div>
                      <div className="text-sm font-semibold">
                        {category.score.toLocaleString()} pts
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Join Competition */}
            <Card className="mt-6 border-border/50">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Join the Competition!</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Play games to earn points and climb the leaderboard.
                </p>
                <Badge className="bg-primary text-primary-foreground">
                  Sign up to compete
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Leaderboard;