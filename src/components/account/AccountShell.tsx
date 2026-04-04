import Link from "next/link";

const links = [
  { href: "/mi-cuenta", label: "Resumen" },
  { href: "/mi-cuenta/suscripcion", label: "Suscripción" },
  { href: "/mi-cuenta/pagos", label: "Pagos" },
];

export default function AccountShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="section-shell">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="btn-secondary px-4 py-2">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </main>
  );
}
