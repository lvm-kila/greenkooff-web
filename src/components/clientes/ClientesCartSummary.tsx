"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useClientesCart } from "./ClientesCartContext";

export default function ClientesCartSummary() {
  const [open, setOpen] = useState(false);
  const { items, count, removeItem, clearCart } = useClientesCart();

  return (
    <div className="fixed bottom-5 right-4 z-40 md:right-8">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-[#1a3b72]/20 bg-white/95 px-4 py-2 text-sm font-semibold text-[#1a3b72] shadow-[0_20px_45px_-34px_rgba(11,31,71,0.76)] backdrop-blur transition hover:-translate-y-0.5"
        onClick={() => setOpen((prev) => !prev)}
      >
        Carrito clientes
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#1a3b72] px-1.5 text-[11px] text-white">{count}</span>
      </button>

      {open && (
        <div className="mt-3 w-[min(92vw,380px)] rounded-3xl border border-slate-200/85 bg-white/95 p-4 shadow-[0_26px_65px_-44px_rgba(11,31,71,0.74)] backdrop-blur">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900">Items demo ({count})</p>
            <button type="button" onClick={clearCart} className="text-xs font-semibold text-slate-500 hover:text-[#1a3b72]">
              Vaciar
            </button>
          </div>

          {items.length === 0 ? (
            <p className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-3 py-4 text-sm text-slate-500">Aún no agregas publicaciones.</p>
          ) : (
            <ul className="max-h-72 space-y-2 overflow-auto pr-1">
              {items.map((item) => (
                <li key={item.id} className="rounded-2xl border border-slate-200 bg-white p-2.5">
                  <div className="flex gap-2.5">
                    <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-slate-200">
                      {item.image && <Image src={item.image} alt={item.title} fill className="object-cover" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.price}</p>
                      <div className="mt-1 flex items-center justify-between gap-2">
                        <Link href={`/clientes/${item.category}/${item.slug}`} className="text-[11px] font-semibold text-[#1a3b72]">
                          Ver detalle
                        </Link>
                        <button type="button" onClick={() => removeItem(item.id)} className="text-[11px] text-slate-500 hover:text-rose-600">
                          Quitar
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
