import Link from "next/link";

export default function AuthCard({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <main className="section-shell">
      <div className="mx-auto max-w-xl px-4 md:px-8">
        <div className="card-premium">
          <Link href="/" className="text-sm font-medium text-blue-700 hover:underline">
            ← Volver al inicio
          </Link>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900">{title}</h1>
          <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
          <div className="mt-6">{children}</div>
          {footer ? <div className="mt-5 border-t border-slate-200 pt-4 text-sm text-slate-600">{footer}</div> : null}
        </div>
      </div>
    </main>
  );
}
