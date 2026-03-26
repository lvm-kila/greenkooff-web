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
      "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1400",
    badge: "OFERTA",
  },
  {
    id: 2,
    title: "Pizza Familiar + Bebida",
    description: "Pizza familiar 8 porciones (pepperoni o napolitana) + bebida 1.5L.",
    price: "$12.990",
    image:
      "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1400",
    badge: "OFERTA",
  },
  {
    id: 3,
    title: "Completo Italiano + Bebida",
    description: "Pan suave, vienesa premium, palta, tomate, mayo casera y bebida lata.",
    price: "$4.490",
    image:
      "https://images.pexels.com/photos/4518656/pexels-photo-4518656.jpeg?auto=compress&cs=tinysrgb&w=1400",
    badge: "OFERTA",
  },
  {
    id: 4,
    title: "Waffle Nutella + toppings",
    description: "Waffle recién hecho con Nutella, frutilla, plátano y chips de chocolate.",
    price: "$5.290",
    image:
      "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=1400",
    badge: "OFERTA",
  },
];
