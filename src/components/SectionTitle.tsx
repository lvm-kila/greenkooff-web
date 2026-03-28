type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionTitle({ eyebrow, title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
