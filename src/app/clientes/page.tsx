import type { Metadata } from "next";
import ClientesCatalogView from "../../components/clientes/ClientesCatalogView";

export const metadata: Metadata = {
  title: "Clientes | GVC",
  description:
    "Catálogo demo premium de verticales inmobiliaria y turismo para experiencias comerciales digitales de alto estándar.",
  openGraph: {
    title: "Clientes | GVC",
    description:
      "Explora catálogos demo premium de inmobiliaria y turismo, diseñados para marcas que exigen experiencia digital de alto nivel.",
    url: "/clientes",
  },
};

export default function ClientesPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-12 md:px-8 md:pt-16">
        <div className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-gradient-to-br from-[#0f2850] via-[#13356f] to-[#1a3b72] p-7 text-white shadow-[0_38px_70px_-44px_rgba(11,31,71,0.95)] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">Catálogo especializado</p>
          <h1 className="mt-2 text-3xl font-semibold md:text-4xl">Clientes</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-100 md:text-base">
            Esta sección presenta verticales demo diseñadas para rubros exigentes. Cada publicación combina contenido comercial, estructura de ecommerce y experiencia premium alineada al ecosistema GVC.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Diseño premium",
              "Experiencia ecommerce",
              "Copy comercial curado",
              "Rutas desacopladas de suscripción",
            ].map((badge) => (
              <span key={badge} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-blue-50 backdrop-blur">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ClientesCatalogView />
    </>
  );
}
