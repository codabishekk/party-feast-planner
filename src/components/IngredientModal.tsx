import { X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Dish } from "@/data/mockDishes";

interface IngredientModalProps {
  dish: Dish | null;
  isOpen: boolean;
  onClose: () => void;
}

const IngredientModal = ({ dish, isOpen, onClose }: IngredientModalProps) => {
  if (!dish) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-card border border-border">
        <DialogHeader className="relative pb-4">
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="absolute left-0 top-0 w-8 h-8 p-0 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <DialogTitle className="text-center text-lg font-semibold">
            Ingredient list
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <Badge 
              className={`absolute top-3 right-3 ${
                dish.type === "VEG" 
                  ? "bg-success text-success-foreground" 
                  : "bg-orange text-orange-foreground"
              }`}
            >
              {dish.type}
            </Badge>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-card-foreground mb-2">
              {dish.name}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {dish.description}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-card-foreground mb-3">Ingredients</h3>
            <p className="text-xs text-muted-foreground mb-3">For 2 people</p>
            
            <div className="space-y-2">
              {dish.ingredients.map((ingredient, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                >
                  <span className="text-sm text-card-foreground">
                    {ingredient.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {ingredient.quantity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default IngredientModal;