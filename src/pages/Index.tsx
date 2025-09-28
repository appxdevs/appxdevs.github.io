import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import GameGrid from "@/components/GameGrid";
import { games } from "@/data/games";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={handleSearch} />
      <HeroSection />
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <GameGrid 
        games={games}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Index;
