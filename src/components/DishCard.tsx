import { Plus, Minus, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Dish } from "@/data/mockDishes";

interface DishCardProps {
  dish: Dish;
  isSelected: boolean;
  selectedCount: number;
  onAddDish: (dishId: number) => void;
  onRemoveDish: (dishId: number) => void;
  onViewIngredients: (dish: Dish) => void;
}

const DishCard = ({ 
  dish, 
  isSelected, 
  selectedCount, 
  onAddDish, 
  onRemoveDish, 
  onViewIngredients 
}: DishCardProps) => {
  return (
    <Card className="overflow-hidden bg-card border border-border shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={dish.image || "src/assets/kadhai-paneer.jpg"}
          alt={dish.name}
          className="w-full h-32 object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge 
            variant={dish.type === "VEG" ? "secondary" : "destructive"}
            className={`text-xs font-medium ${
              dish.type === "VEG" 
                ? "bg-success text-success-foreground" 
                : "bg-orange text-orange-foreground"
            }`}
          >
            {dish.type}
          </Badge>
        </div>
        {isSelected && selectedCount > 0 && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-primary text-primary-foreground">
              {selectedCount}
            </Badge>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-card-foreground mb-2 line-clamp-1">
          {dish.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {dish.description}
        </p>
        
        <div className="flex items-center gap-2">
          <Button
            onClick={() => onViewIngredients(dish)}
            variant="outline"
            size="sm"
            className="flex-1 text-xs"
          >
            <Eye className="w-3 h-3 mr-1" />
            Ingredient
          </Button>
          
          <div className="flex items-center gap-1">
            {isSelected && selectedCount > 0 && (
              <Button
                onClick={() => onRemoveDish(dish.id)}
                size="sm"
                variant="outline"
                className="w-8 h-8 p-0 rounded-full"
              >
                <Minus className="w-3 h-3" />
              </Button>
            )}
            
            <Button
              onClick={() => onAddDish(dish.id)}
              size="sm"
              className="w-8 h-8 p-0 rounded-full bg-primary hover:bg-primary-hover"
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DishCard;