"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ClientPublication } from "../../content/clientCatalog";
import { CLIENTES_CART_KEY, type CartItem, toCartItem } from "../../lib/clientes/cart";

type ClientesCartContextValue = {
  items: CartItem[];
  addItem: (item: ClientPublication) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  count: number;
  lastAddedId?: string;
};

const ClientesCartContext = createContext<ClientesCartContextValue | undefined>(undefined);

export function ClientesCartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [lastAddedId, setLastAddedId] = useState<string>();

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CLIENTES_CART_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        setItems(parsed);
      }
    } catch {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CLIENTES_CART_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: ClientPublication) => {
    const normalized = toCartItem(item);
    setItems((prev) => {
      const existing = prev.find((entry) => entry.id === normalized.id);
      if (existing) {
        return prev.map((entry) => (entry.id === normalized.id ? { ...entry, quantity: entry.quantity + 1 } : entry));
      }
      return [normalized, ...prev];
    });
    setLastAddedId(normalized.id);
    window.setTimeout(() => setLastAddedId(undefined), 1600);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((entry) => entry.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const count = useMemo(() => items.reduce((acc, item) => acc + item.quantity, 0), [items]);

  return (
    <ClientesCartContext.Provider value={{ items, addItem, removeItem, clearCart, count, lastAddedId }}>
      {children}
    </ClientesCartContext.Provider>
  );
}

export function useClientesCart() {
  const context = useContext(ClientesCartContext);
  if (!context) {
    throw new Error("useClientesCart debe usarse dentro de ClientesCartProvider");
  }
  return context;
}
