export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  isRecommendedForMealSuggestion: boolean;
}

export interface Dish {
  id: number;
  name: string;
  description: string;
  image: string | null;
  mealType: "STARTER" | "MAIN COURSE" | "DESSERT" | "SIDES";
  type: "VEG" | "NON-VEG";
  categoryId: number;
  category: Category;
  dishType: string;
  forChefit: boolean;
  forParty: boolean;
  nameHi: string;
  nameBn: string;
  ingredients?: Ingredient[]; // Made optional since new data doesn't include it
}

export const dishes: Dish[] = [
  // Main Course dishes with varied images
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/kadhai-paneer.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 1,
    name: "Kadhai Paneer 1"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/butter-chicken.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 2,
    name: "Kadhai Paneer 2"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/palak-paneer.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 3,
    name: "Kadhai Paneer 3"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/chole.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 4,
    name: "Kadhai Paneer 4"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/biryani.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 5,
    name: "Kadhai Paneer 5"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/basmati-rice.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 6,
    name: "Kadhai Paneer 6"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/dal-makhani.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 7,
    name: "Kadhai Paneer 7"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/tandoori-chicken.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 8,
    name: "Kadhai Paneer 8"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/kadhai-paneer.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 9,
    name: "Kadhai Paneer 9"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/butter-chicken.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 10,
    name: "Kadhai Paneer 10"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/palak-paneer.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 11,
    name: "Kadhai Paneer 11"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/chole.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 12,
    name: "Kadhai Paneer 12"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/biryani.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 13,
    name: "Kadhai Paneer 13"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/basmati-rice.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 14,
    name: "Kadhai Paneer 14"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/dal-makhani.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 15,
    name: "Kadhai Paneer 15"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/tandoori-chicken.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 16,
    name: "Kadhai Paneer 16"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/kadhai-paneer.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 17,
    name: "Kadhai Paneer 17"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/butter-chicken.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 18,
    name: "Kadhai Paneer 18"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/palak-paneer.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 19,
    name: "Kadhai Paneer 19"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/chole.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 20,
    name: "Kadhai Paneer 20"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/biryani.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 21,
    name: "Kadhai Paneer 21"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/basmati-rice.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 22,
    name: "Kadhai Paneer 22"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/dal-makhani.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 23,
    name: "Kadhai Paneer 23"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/tandoori-chicken.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 24,
    name: "Kadhai Paneer 24"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/kadhai-paneer.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 25,
    name: "Kadhai Paneer 25"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/butter-chicken.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 26,
    name: "Kadhai Paneer 26"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/palak-paneer.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 27,
    name: "Kadhai Paneer 27"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/chole.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 28,
    name: "Kadhai Paneer 28"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/biryani.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 29,
    name: "Kadhai Paneer 29"
  },
  {
    categoryId: 1,
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "src/assets/basmati-rice.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "CURRY",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 30,
    name: "Kadhai Paneer 30"
  },

  // Additional sample dishes for other categories
  {
    categoryId: 2,
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy vegetable spring rolls served with sweet and sour sauce",
    image: "src/assets/samosas.jpg",
    category: {
      id: 2,
      name: "Chinese",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "APPETIZER",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 31,
    name: "Vegetable Spring Rolls"
  },
  {
    categoryId: 1,
    mealType: "STARTER",
    type: "NON-VEG",
    description: "Succulent chicken marinated in yogurt and spices, cooked in tandoor",
    image: "src/assets/tandoori-chicken.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "GRILLED",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 32,
    name: "Tandoori Chicken"
  },
  {
    categoryId: 1,
    mealType: "DESSERT",
    type: "VEG",
    description: "Traditional Indian sweet made with milk solids in sugar syrup",
    image: "src/assets/gulab-jamun.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "SWEET",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 33,
    name: "Gulab Jamun"
  },
  {
    categoryId: 1,
    mealType: "SIDES",
    type: "VEG",
    description: "Soft and fluffy Indian flatbread perfect for dipping",
    image: "src/assets/roti.jpg",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    },
    dishType: "BREAD",
    forChefit: true,
    forParty: true,
    nameHi: "",
    nameBn: "",
    id: 34,
    name: "Naan Bread"
  }
];