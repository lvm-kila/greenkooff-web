"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  categoryFallbackImage,
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
  const fallbackImage = categoryFallbackImage[activeCategory];

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-20 md:px-8 lg:grid-cols-[250px_1fr]">
      <aside className="h-fit rounded-[26px] border border-slate-200/80 bg-white/92 p-4 shadow-[0_24px_55px_-36px_rgba(11,31,71,0.52)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Verticales</p>
        <div className="mt-3 grid grid-cols-2 gap-2.5 lg:grid-cols-1">
          {clientCategories.map((category) => {
            const active = category.key === activeCategory;
            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                className={`rounded-2xl border px-3.5 py-2.5 text-left transition duration-300 ${
                  active
                    ? "border-[#1a3b72]/35 bg-gradient-to-br from-[#1a3b72] to-[#0f2850] text-white shadow-[0_20px_36px_-32px_rgba(11,31,71,0.8)]"
                    : "border-slate-200 bg-white text-slate-700 hover:border-[#1a3b72]/30 hover:bg-slate-50/70 hover:text-[#1a3b72]"
                }`}
              >
                <p className="text-sm font-semibold">{category.label}</p>
                <p className={`mt-1 text-[11px] leading-5 ${active ? "text-blue-100" : "text-slate-500"}`}>{category.description}</p>
              </button>
            );
          })}
        </div>
      </aside>

      <div className="space-y-4">
        <div className="rounded-3xl border border-slate-200/80 bg-white/88 px-5 py-3.5 shadow-[0_20px_45px_-38px_rgba(11,31,71,0.5)]">
          <p className="text-sm text-slate-600/95">
            Mostrando <span className="font-semibold text-slate-900">{publications.length}</span> publicaciones en <span className="font-semibold text-[#1a3b72]">{activeCategory === "inmobiliaria" ? "Inmobiliaria" : "Turismo"}</span>.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {publications.map((item) => (
            <article key={item.slug} className="group overflow-hidden rounded-[26px] border border-slate-200/80 bg-white/95 shadow-[0_24px_50px_-38px_rgba(11,31,71,0.58)] transition duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.gallery[0]?.src ?? fallbackImage.src}
                  alt={item.gallery[0]?.alt ?? fallbackImage.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f44]/25 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full border border-white/35 bg-[#0f2850]/72 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-white backdrop-blur">{item.badge}</span>
              </div>

              <div className="p-4">
                <p className="text-sm font-semibold tracking-[0.01em] text-[#1a3b72]">{item.price}</p>
                <h3 className="mt-1 text-[15px] font-semibold leading-6 text-slate-900">{item.title}</h3>
                <p className="mt-0.5 text-xs text-slate-500">{item.locationLabel}</p>
                <p className="mt-2.5 text-sm leading-6 text-slate-600">{item.shortDescription}</p>

                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {cardHighlights(item).map((highlight) => (
                    <li key={`${item.slug}-${highlight}`} className="rounded-full border border-slate-200/90 bg-slate-50 px-2.5 py-1 text-[10px] font-medium tracking-[0.02em] text-slate-600">
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex gap-2">
                  <Link href={`/clientes/${item.category}/${item.slug}`} className="btn-secondary btn-secondary-compact flex-1">
                    Ver detalle
                  </Link>
                  <AddToCartButton item={item} className="btn-primary btn-primary-compact flex-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
