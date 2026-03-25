export type Promotion = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  badge: string;
};

export const promotions: Promotion[] = [
  {
    id: 1,
    title: "Combo Burger Doble + Papas + Bebida",
    description: "Doble carne, cheddar, tocino crocante, papas medianas y bebida de 500 ml.",
    price: "$8.990",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    badge: "OFERTA",
  },
  {
    id: 2,
    title: "Pizza Familiar + Bebida",
    description: "Pizza familiar 8 porciones (pepperoni o napolitana) + bebida 1.5L.",
    price: "$12.990",
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=1200&q=80",
    badge: "OFERTA",
  },
  {
    id: 3,
    title: "Completo Italiano + Bebida",
    description: "Pan suave, vienesa premium, palta, tomate, mayo casera y bebida lata.",
    price: "$4.490",
    image:
      "https://images.unsplash.com/photo-1612392061787-2d078b9d8f1b?auto=format&fit=crop&w=1200&q=80",
    badge: "OFERTA",
  },
  {
    id: 4,
    title: "Waffle Nutella + toppings",
    description: "Waffle recién hecho con Nutella, frutilla, plátano y chips de chocolate.",
    price: "$5.290",
    image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=1200&q=80",
    badge: "OFERTA",
  },
];
