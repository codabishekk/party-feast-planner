import { Button } from "@/components/ui/button";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "STARTER", label: "Starter" },
  { id: "MAIN COURSE", label: "Main Course" },
  { id: "DESSERT", label: "Dessert" },
  { id: "SIDES", label: "Sides" },
];

const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          variant={activeCategory === category.id ? "default" : "secondary"}
          className={`
            whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all duration-300
            ${activeCategory === category.id 
              ? "bg-primary text-primary-foreground shadow-md" 
              : "bg-secondary text-secondary-foreground hover:bg-primary/10"
            }
          `}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default CategoryTabs;