type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionTitle({ eyebrow, title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="inline-flex items-center gap-2 rounded-full border border-[#1a3b72]/15 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a3b72] shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-[#b8833b]" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-slate-900 md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
