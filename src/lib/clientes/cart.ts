import type { ClientPublication } from "../../content/clientCatalog";

export const CLIENTES_CART_KEY = "gvc-clientes-cart-v1";

export type CartItem = {
  id: string;
  slug: string;
  category: ClientPublication["category"];
  title: string;
  price: string;
  locationLabel: string;
  image: string;
  quantity: number;
};

export function toCartItem(item: ClientPublication): CartItem {
  return {
    id: `${item.category}:${item.slug}`,
    slug: item.slug,
    category: item.category,
    title: item.title,
    price: item.price,
    locationLabel: item.locationLabel,
    image: item.gallery[0]?.src ?? "",
    quantity: 1,
  };
}
