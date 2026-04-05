import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "../../../../components/clientes/AddToCartButton";
import {
  allClientPublications,
  getClientPublication,
  getRelatedPublications,
  isClientCategory,
  type ClientCategory,
} from "../../../../content/clientCatalog";

type DetailPageProps = {
  params: {
    categoria: string;
    slug: string;
  };
};

export function generateStaticParams() {
  return allClientPublications.map((item) => ({ categoria: item.category, slug: item.slug }));
}

export function generateMetadata({ params }: DetailPageProps): Metadata {
  if (!isClientCategory(params.categoria)) {
    return {};
  }

  const publication = getClientPublication(params.categoria, params.slug);
  if (!publication) {
    return {};
  }

  return {
    title: `${publication.title} | Clientes GVC`,
    description: publication.shortDescription,
    openGraph: {
      title: `${publication.title} | Clientes GVC`,
      description: publication.shortDescription,
      url: `/clientes/${params.categoria}/${params.slug}`,
    },
  };
}

function sectionTitle(title: string) {
  return <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">{title}</h2>;
}

function categoryLabel(category: ClientCategory) {
  return category === "inmobiliaria" ? "Inmobiliaria" : "Turismo";
}

export default function ClienteDetailPage({ params }: DetailPageProps) {
  if (!isClientCategory(params.categoria)) {
    notFound();
  }

  const publication = getClientPublication(params.categoria, params.slug);
  if (!publication) {
    notFound();
  }

  const related = getRelatedPublications(params.categoria, publication.slug, 3);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-10 md:px-8 md:pt-12">
      <nav className="mb-5 flex items-center gap-2 text-xs font-medium text-slate-500">
        <Link href="/" className="hover:text-[#1a3b72]">Inicio</Link>
        <span>•</span>
        <Link href="/clientes" className="hover:text-[#1a3b72]">Clientes</Link>
        <span>•</span>
        <span className="text-[#1a3b72]">{categoryLabel(publication.category)}</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <article className="space-y-6">
          <header className="rounded-[30px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_56px_-35px_rgba(11,31,71,0.6)]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#1a3b72]/25 bg-[#1a3b72]/10 px-3 py-1 text-xs font-semibold text-[#1a3b72]">{categoryLabel(publication.category)}</span>
              <span className="rounded-full border border-amber-300/40 bg-amber-100/70 px-3 py-1 text-xs font-semibold text-amber-900">{publication.badge}</span>
            </div>
            <h1 className="mt-3 text-2xl font-semibold text-slate-900 md:text-4xl">{publication.title}</h1>
            <p className="mt-2 text-base font-semibold text-[#1a3b72] md:text-lg">{publication.price}</p>
            <p className="text-sm text-slate-500">{publication.locationLabel}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{publication.shortDescription}</p>
          </header>

          <div className="grid gap-3 sm:grid-cols-2">
            {publication.gallery.map((image) => (
              <div key={image.src + image.alt} className="relative h-60 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_45px_-35px_rgba(11,31,71,0.7)]">
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-6">
            {sectionTitle("Descripción")}
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{publication.longDescription}</p>
          </div>

          {publication.category === "inmobiliaria" ? (
            <>
              <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-6">
                {sectionTitle("Características destacadas")}
                <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                  {[
                    publication.specs.m2,
                    publication.specs.bedrooms,
                    publication.specs.bathrooms,
                    publication.specs.parking,
                    publication.specs.extra,
                  ].map((item) => (
                    <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-6">
                {sectionTitle("Entorno y conectividad")}
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {publication.connectivity.map((item) => (
                    <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-6">
                {sectionTitle("Ideal para")}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {publication.idealFor.map((item) => (
                    <li key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">{item}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-6">
                {sectionTitle("Qué incluye")}
                <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                  {publication.includes.map((item) => (
                    <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-6">
                {sectionTitle("Ideal para")}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {publication.idealFor.map((item) => (
                    <li key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-6">
                {sectionTitle("Recomendaciones del viaje")}
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {publication.recommendations.map((item) => (
                    <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">{item}</li>
                  ))}
                </ul>
                <p className="mt-4 rounded-xl border border-[#1a3b72]/20 bg-[#1a3b72]/5 px-3 py-2 text-sm font-semibold text-[#1a3b72]">Mejor temporada: {publication.bestSeason}</p>
              </div>
            </>
          )}
        </article>

        <aside className="h-fit rounded-[28px] border border-slate-200/80 bg-white/95 p-5 shadow-[0_24px_56px_-36px_rgba(11,31,71,0.6)] lg:sticky lg:top-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Resumen comercial</p>
          <p className="mt-2 text-2xl font-semibold text-[#1a3b72]">{publication.price}</p>
          <p className="text-sm text-slate-500">{publication.locationLabel}</p>

          <div className="mt-4 space-y-2">
            <AddToCartButton item={publication} className="btn-primary w-full" />
            <a href={publication.socials.whatsapp} className="btn-secondary w-full" target="_blank" rel="noreferrer">{publication.ctaLabel}</a>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Redes y contacto</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <a href={publication.socials.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-slate-700 hover:text-[#1a3b72]">WhatsApp</a>
              <a href={publication.socials.facebook} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-slate-700 hover:text-[#1a3b72]">Facebook</a>
              <a href={publication.socials.instagram} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-slate-700 hover:text-[#1a3b72]">Instagram</a>
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Publicaciones relacionadas</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <article key={item.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-[0_20px_45px_-35px_rgba(11,31,71,0.6)]">
              <div className="relative h-40">
                <Image src={item.gallery[0]?.src ?? "/clientes/turismo-premium-1.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold text-[#1a3b72]">{item.relatedHint}</p>
                <h3 className="mt-1 text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{item.price}</p>
                <Link href={`/clientes/${item.category}/${item.slug}`} className="mt-3 inline-flex text-xs font-semibold text-[#1a3b72]">Ver publicación →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
