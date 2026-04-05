"use client";

import { useMemo } from "react";
import type { ClientPublication } from "../../content/clientCatalog";
import { useClientesCart } from "./ClientesCartContext";

type Props = {
  item: ClientPublication;
  className?: string;
};

export default function AddToCartButton({ item, className }: Props) {
  const { addItem, lastAddedId } = useClientesCart();
  const itemId = `${item.category}:${item.slug}`;

  const added = useMemo(() => lastAddedId === itemId, [lastAddedId, itemId]);

  return (
    <button
      type="button"
      onClick={() => addItem(item)}
      className={className ?? "btn-primary w-full"}
      aria-live="polite"
    >
      {added ? "Agregado ✓" : "Agregar al carrito"}
    </button>
  );
}
