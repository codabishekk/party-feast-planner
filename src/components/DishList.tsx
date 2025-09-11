import DishCard from "./DishCard";
import type { Dish } from "@/data/mockDishes";

interface DishListProps {
  dishes: Dish[];
  selectedDishes: Record<number, number>;
  onAddDish: (dishId: number) => void;
  onRemoveDish: (dishId: number) => void;
  onViewIngredients: (dish: Dish) => void;
}

const DishList = ({ 
  dishes, 
  selectedDishes, 
  onAddDish, 
  onRemoveDish, 
  onViewIngredients 
}: DishListProps) => {
  if (dishes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No dishes found matching your criteria
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Try adjusting your search or category filter
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          isSelected={dish.id in selectedDishes}
          selectedCount={selectedDishes[dish.id] || 0}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
};

export default DishList;