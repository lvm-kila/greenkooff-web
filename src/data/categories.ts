export type Category = {
  id: number;
  name: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: 1,
    name: "Pizzas",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Burgers",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Completos",
    image:
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Bebidas",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Waffles / Postres",
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80",
  },
];
