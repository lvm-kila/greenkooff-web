type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionTitle({ eyebrow, title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}
