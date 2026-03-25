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
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1000&q=80",
    badge: "Más vendido",
  },
  {
    id: 2,
    name: "Pizza pepperoni",
    description: "Masa artesanal, salsa de tomate, mozzarella y pepperoni americano.",
    price: "$10.990",
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=1000&q=80",
    badge: "Favorito",
  },
  {
    id: 3,
    name: "Completo italiano",
    description: "Vienesa premium con palta fresca, tomate y mayo artesanal.",
    price: "$3.990",
    image:
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=1000&q=80",
    badge: "Más vendido",
  },
  {
    id: 4,
    name: "Papas fritas",
    description: "Porción grande, crujientes por fuera y suaves por dentro.",
    price: "$2.990",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=80",
    badge: "Favorito",
  },
  {
    id: 5,
    name: "Waffle Nutella",
    description: "Waffle caliente con Nutella, azúcar flor y fruta fresca.",
    price: "$4.990",
    image:
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1000&q=80",
    badge: "Nuevo",
  },
  {
    id: 6,
    name: "Milkshake",
    description: "Batido cremoso de vainilla, chocolate o frutilla.",
    price: "$3.490",
    image:
      "https://images.unsplash.com/photo-1579954115563-e72bf1381629?auto=format&fit=crop&w=1000&q=80",
    badge: "Nuevo",
  },
];
