import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import SearchBar from "@/components/SearchBar";
import CategoryTabs from "@/components/CategoryTabs";
import VegFilter from "@/components/VegFilter";
import DishList from "@/components/DishList";
import IngredientModal from "@/components/IngredientModal";
import SelectedDishesFooter from "@/components/SelectedDishesFooter";
import { dishes, type Dish } from "@/data/mockDishes";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("STARTER");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState<Record<number, number>>({});
  const [currentDish, setCurrentDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  // Filter dishes based on current filters
  const filteredDishes = dishes.filter((dish) => {
    const matchesCategory = dish.mealType === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dish.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVegFilter = !vegOnly || dish.type === "VEG";
    
    return matchesCategory && matchesSearch && matchesVegFilter;
  });

  const handleAddDish = (dishId: number) => {
    setSelectedDishes(prev => ({
      ...prev,
      [dishId]: (prev[dishId] || 0) + 1
    }));
    
    const dish = dishes.find(d => d.id === dishId);
    toast({
      title: "Added to selection",
      description: `${dish?.name} has been added to your party menu`,
    });
  };

  const handleRemoveDish = (dishId: number) => {
    setSelectedDishes(prev => {
      const newCount = (prev[dishId] || 0) - 1;
      if (newCount <= 0) {
        const { [dishId]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [dishId]: newCount };
    });
    
    const dish = dishes.find(d => d.id === dishId);
    toast({
      title: "Removed from selection",
      description: `${dish?.name} has been removed from your party menu`,
      variant: "destructive",
    });
  };

  const handleViewIngredients = (dish: Dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  const handleContinue = () => {
    const totalDishes = Object.values(selectedDishes).reduce((sum, count) => sum + count, 0);
    toast({
      title: "Party menu ready!",
      description: `You have selected ${totalDishes} dishes for your party`,
    });
  };

  const totalSelectedCount = Object.values(selectedDishes).reduce((sum, count) => sum + count, 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6 pb-24">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Party Menu Selection
          </h1>
          <p className="text-muted-foreground">
            Choose delicious dishes for your perfect party
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        {/* Category Tabs */}
        <CategoryTabs 
          activeCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />
        
        {/* Veg Filter */}
        <VegFilter vegOnly={vegOnly} onVegOnlyChange={setVegOnly} />
        
        {/* Dishes Grid */}
        <DishList
          dishes={filteredDishes}
          selectedDishes={selectedDishes}
          onAddDish={handleAddDish}
          onRemoveDish={handleRemoveDish}
          onViewIngredients={handleViewIngredients}
        />
      </div>

      {/* Selected Dishes Footer */}
      <SelectedDishesFooter 
        totalSelected={totalSelectedCount}
        onContinue={handleContinue}
      />

      {/* Ingredient Modal */}
      <IngredientModal
        dish={currentDish}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setCurrentDish(null);
        }}
      />
    </div>
  );
};

export default Index;
