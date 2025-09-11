import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface VegFilterProps {
  vegOnly: boolean;
  onVegOnlyChange: (checked: boolean) => void;
}

const VegFilter = ({ vegOnly, onVegOnlyChange }: VegFilterProps) => {
  return (
    <div className="flex items-center justify-between bg-card p-4 rounded-xl shadow-sm border border-border mb-6">
      <Label htmlFor="veg-filter" className="text-sm font-medium">
        Show only vegetarian dishes
      </Label>
      <Switch
        id="veg-filter"
        checked={vegOnly}
        onCheckedChange={onVegOnlyChange}
        className="data-[state=checked]:bg-success"
      />
    </div>
  );
};

export default VegFilter;