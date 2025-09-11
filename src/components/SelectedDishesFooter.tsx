import { Button } from "@/components/ui/button";

interface SelectedDishesFooterProps {
  totalSelected: number;
  onContinue: () => void;
}

const SelectedDishesFooter = ({ totalSelected, onContinue }: SelectedDishesFooterProps) => {
  if (totalSelected === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="text-sm">
          <span className="text-muted-foreground">Total Dish Selected: </span>
          <span className="font-semibold text-card-foreground">({totalSelected})</span>
        </div>
        
        <Button 
          onClick={onContinue}
          className="px-8 py-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-full font-medium"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SelectedDishesFooter;