export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  badge: "Más vendido" | "Nuevo" | "Favorito";
};

export const products: Product[] = [
  {
    id: 1,
    name: "Burger doble queso",
    description: "Doble medallón, cheddar fundido, pepinillos y salsa de la casa.",
    price: "$6.990",
    image:
      "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1400",
    badge: "Más vendido",
  },
  {
    id: 2,
    name: "Pizza pepperoni",
    description: "Masa artesanal, salsa de tomate, mozzarella y pepperoni americano.",
    price: "$10.990",
    image:
      "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=1400",
    badge: "Favorito",
  },
  {
    id: 3,
    name: "Completo italiano",
    description: "Vienesa premium con palta fresca, tomate y mayo artesanal.",
    price: "$3.990",
    image:
      "https://images.pexels.com/photos/4518656/pexels-photo-4518656.jpeg?auto=compress&cs=tinysrgb&w=1400",
    badge: "Más vendido",
  },
  {
    id: 4,
    name: "Papas fritas",
    description: "Porción grande, crujientes por fuera y suaves por dentro.",
    price: "$2.990",
    image:
      "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1400",
    badge: "Favorito",
  },
  {
    id: 5,
    name: "Waffle Nutella",
    description: "Waffle caliente con Nutella, azúcar flor y fruta fresca.",
    price: "$4.990",
    image:
      "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1400",
    badge: "Nuevo",
  },
  {
    id: 6,
    name: "Milkshake",
    description: "Batido cremoso de vainilla, chocolate o frutilla.",
    price: "$3.490",
    image:
      "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1400",
    badge: "Nuevo",
  },
];
