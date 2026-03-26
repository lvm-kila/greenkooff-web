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
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    name: "Burgers",
    image:
      "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    name: "Completos",
    image:
      "https://images.pexels.com/photos/4518656/pexels-photo-4518656.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    name: "Bebidas",
    image:
      "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    name: "Waffles / Postres",
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];
