export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  mealType: "STARTER" | "MAIN COURSE" | "DESSERT" | "SIDES";
  type: "VEG" | "NON-VEG";
  ingredients: Ingredient[];
}

export const dishes: Dish[] = [
  // STARTER dishes
  {
    id: 1,
    name: "Tandoori Chicken",
    description: "Succulent chicken marinated in yogurt and spices, cooked in tandoor",
    image: "src/assets/tandoori-chicken.jpg",
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Ginger-Garlic Paste", quantity: "2 tbsp" },
      { name: "Tandoori Masala", quantity: "3 tbsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Lemon Juice", quantity: "2 tbsp" }
    ]
  },
  {
    id: 2,
    name: "Paneer Tikka",
    description: "Grilled cubes of paneer marinated in spicy yogurt mixture",
    image: "src/assets/kadhai-paneer.jpg",
    mealType: "STARTER", 
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "300g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Bell Peppers", quantity: "2 medium" },
      { name: "Onion", quantity: "1 large" },
      { name: "Garam Masala", quantity: "1 tsp" }
    ]
  },
  {
    id: 3,
    name: "Chicken Wings",
    description: "Crispy chicken wings with spicy coating and herbs",
    image: "src/assets/tandoori-chicken.jpg",
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken Wings", quantity: "1kg" },
      { name: "Hot Sauce", quantity: "1/4 cup" },
      { name: "Butter", quantity: "3 tbsp" },
      { name: "Garlic Powder", quantity: "1 tsp" },
      { name: "Paprika", quantity: "1 tbsp" }
    ]
  },

  // MAIN COURSE dishes
  {
    id: 4,
    name: "Dal Makhani",
    description: "Rich and creamy black lentil curry slow-cooked with butter and cream",
    image: "src/assets/dal-makhani.jpg",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Black Urad Dal", quantity: "1 cup" },
      { name: "Kidney Beans", quantity: "1/4 cup" },
      { name: "Tomato Puree", quantity: "1/2 cup" },
      { name: "Heavy Cream", quantity: "1/4 cup" },
      { name: "Butter", quantity: "3 tbsp" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" }
    ]
  },
  {
    id: 5,
    name: "Kadhai Paneer",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes",
    image: "src/assets/kadhai-paneer.jpg", 
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "400g" },
      { name: "Bell Peppers", quantity: "2 large" },
      { name: "Onions", quantity: "2 medium" },
      { name: "Tomatoes", quantity: "3 medium" },
      { name: "Kadhai Masala", quantity: "2 tbsp" },
      { name: "Ginger", quantity: "1 inch piece" }
    ]
  },
  {
    id: 6,
    name: "Chicken Curry",
    description: "Traditional chicken curry with aromatic spices and rich gravy",
    image: "src/assets/tandoori-chicken.jpg",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "750g" },
      { name: "Onions", quantity: "3 medium" },
      { name: "Tomatoes", quantity: "4 medium" },
      { name: "Coconut Milk", quantity: "1 cup" },
      { name: "Curry Powder", quantity: "3 tbsp" },
      { name: "Turmeric", quantity: "1 tsp" }
    ]
  },

  // DESSERT dishes
  {
    id: 7,
    name: "Gulab Jamun",
    description: "Soft milk dumplings in sweet rose-flavored syrup",
    image: "src/assets/cabbage-rolls.jpg",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Milk Powder", quantity: "1 cup" },
      { name: "All-purpose Flour", quantity: "2 tbsp" },
      { name: "Sugar", quantity: "2 cups" },
      { name: "Rose Water", quantity: "1 tsp" },
      { name: "Cardamom", quantity: "4 pods" },
      { name: "Ghee", quantity: "For frying" }
    ]
  },
  {
    id: 8,
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake with creamy frosting",
    image: "src/assets/cabbage-rolls.jpg",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Dark Chocolate", quantity: "200g" },
      { name: "Flour", quantity: "1.5 cups" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Eggs", quantity: "3 large" },
      { name: "Butter", quantity: "1/2 cup" },
      { name: "Cocoa Powder", quantity: "1/4 cup" }
    ]
  },

  // SIDES dishes
  {
    id: 9,
    name: "Cabbage Rolls",
    description: "Cabbage leaves stuffed with spiced rice and vegetables",
    image: "src/assets/cabbage-rolls.jpg",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Cabbage Leaves", quantity: "12 large" },
      { name: "Basmati Rice", quantity: "1 cup" },
      { name: "Mixed Vegetables", quantity: "1 cup" },
      { name: "Tomato Sauce", quantity: "1/2 cup" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Coriander", quantity: "2 tbsp" }
    ]
  },
  {
    id: 10,
    name: "Naan Bread",
    description: "Soft and fluffy Indian flatbread perfect for dipping",
    image: "src/assets/cabbage-rolls.jpg",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "All-purpose Flour", quantity: "2 cups" },
      { name: "Yogurt", quantity: "1/4 cup" },
      { name: "Baking Powder", quantity: "1 tsp" },
      { name: "Salt", quantity: "1 tsp" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Water", quantity: "As needed" }
    ]
  },
  {
    id: 11,
    name: "Garlic Rice",
    description: "Fragrant basmati rice cooked with garlic and herbs",
    image: "src/assets/cabbage-rolls.jpg",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Garlic Cloves", quantity: "8 pieces" },
      { name: "Bay Leaves", quantity: "2 pieces" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Ghee", quantity: "2 tbsp" },
      { name: "Salt", quantity: "To taste" }
    ]
  }
];