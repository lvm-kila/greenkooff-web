"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  clientCategories,
  getCategoryPublications,
  type ClientCategory,
  type ClientPublication,
} from "../../content/clientCatalog";
import AddToCartButton from "./AddToCartButton";

function cardHighlights(item: ClientPublication) {
  if (item.category === "inmobiliaria") {
    return [item.specs.m2, item.specs.bedrooms, item.specs.bathrooms];
  }
  return [item.duration, item.experienceLevel, item.highlights[0] ?? "Experiencia curada"];
}

export default function ClientesCatalogView({ initialCategory = "inmobiliaria" }: { initialCategory?: ClientCategory }) {
  const [activeCategory, setActiveCategory] = useState<ClientCategory>(initialCategory);
  const publications = useMemo(() => getCategoryPublications(activeCategory), [activeCategory]);

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-20 md:px-8 lg:grid-cols-[260px_1fr]">
      <aside className="h-fit rounded-[28px] border border-slate-200/80 bg-white/90 p-4 shadow-[0_24px_55px_-34px_rgba(11,31,71,0.52)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Verticales</p>
        <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-1">
          {clientCategories.map((category) => {
            const active = category.key === activeCategory;
            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                className={`rounded-2xl border px-4 py-3 text-left transition ${
                  active
                    ? "border-[#1a3b72]/40 bg-gradient-to-br from-[#1a3b72] to-[#0f2850] text-white shadow-[0_20px_40px_-30px_rgba(11,31,71,0.8)]"
                    : "border-slate-200 bg-white text-slate-700 hover:border-[#1a3b72]/25 hover:text-[#1a3b72]"
                }`}
              >
                <p className="text-sm font-semibold">{category.label}</p>
                <p className={`mt-1 text-xs leading-5 ${active ? "text-blue-100" : "text-slate-500"}`}>{category.description}</p>
              </button>
            );
          })}
        </div>
      </aside>

      <div className="space-y-4">
        <div className="rounded-3xl border border-slate-200/80 bg-white/85 px-5 py-4 shadow-[0_20px_45px_-34px_rgba(11,31,71,0.5)]">
          <p className="text-sm text-slate-600">
            Mostrando <span className="font-semibold text-slate-900">{publications.length}</span> publicaciones en <span className="font-semibold text-[#1a3b72]">{activeCategory === "inmobiliaria" ? "Inmobiliaria" : "Turismo"}</span>.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {publications.map((item) => (
            <article key={item.slug} className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/95 shadow-[0_25px_55px_-35px_rgba(11,31,71,0.6)] transition duration-300 hover:-translate-y-1">
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.gallery[0]?.src ?? "/clientes/inmobiliaria-premium-1.svg"}
                  alt={item.gallery[0]?.alt ?? item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full border border-white/35 bg-[#0f2850]/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">{item.badge}</span>
              </div>

              <div className="p-4">
                <p className="text-sm font-semibold text-[#1a3b72]">{item.price}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500">{item.locationLabel}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.shortDescription}</p>

                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {cardHighlights(item).map((highlight) => (
                    <li key={`${item.slug}-${highlight}`} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex gap-2">
                  <Link href={`/clientes/${item.category}/${item.slug}`} className="btn-secondary flex-1 px-3 py-2 text-xs">
                    Ver detalle
                  </Link>
                  <AddToCartButton item={item} className="btn-primary flex-1 px-3 py-2 text-xs" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
