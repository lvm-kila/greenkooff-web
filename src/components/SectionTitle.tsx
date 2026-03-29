type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionTitle({ eyebrow, title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">
        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
