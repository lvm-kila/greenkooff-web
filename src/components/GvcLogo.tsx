type GvcLogoProps = {
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  className?: string;
};

const sizeMap = {
  sm: "h-8",
  md: "h-10",
  lg: "h-14",
};

export default function GvcLogo({ size = "md", withTagline = false, className = "" }: GvcLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 194 72" className={`${sizeMap[size]} w-auto`} aria-label="GVC" role="img">
        <defs>
          <linearGradient id="gvc-grad" x1="6" y1="8" x2="188" y2="68" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#1d4ed8" />
            <stop offset="0.45" stopColor="#0891b2" />
            <stop offset="1" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        <path
          d="M39 12c12.2 0 21.6 4.2 28.4 10.8l-9.4 8.8C53.7 27.1 47.4 24 39.8 24c-13.2 0-22.2 8.8-22.2 18.1 0 9.8 8.7 18.3 22.9 18.3 7.6 0 13.4-2.2 17.5-6.1v-8.6H39.5v-11.2h31.6v24.2C64.1 66.3 53.9 71 40.8 71 18.2 71 3 56.8 3 42c0-16.3 15.6-30 36-30Z"
          fill="url(#gvc-grad)"
        />
        <path d="M77 12h15.5l17 41.4L126.4 12H142l-25.6 58H102L77 12Z" fill="url(#gvc-grad)" />
        <path
          d="M189 23.1 178.6 31c-3.5-4.5-8.6-7.1-15-7.1-11.8 0-20.2 8.2-20.2 18.1 0 10.8 8.6 18.4 20.6 18.4 6.5 0 11.2-2 15.8-7l10.2 8.4C183.2 68 174.7 71 163 71c-22.1 0-35.8-14.8-35.8-29.5 0-16 14.2-29.5 35.8-29.5 11.3 0 19.8 3.4 26 11.1Z"
          fill="url(#gvc-grad)"
        />
        <path d="m103.2 27.8 6.3 15.1 13-30.9h15.3l-22.5 52.3c-1.6 3.6-4.4 6.3-8.5 7.5-3.8 1-7.6.8-11.2-.5l-7.7-2.8 4-10.8 6.2 2.1c1.4.5 2.3.3 2.9-1l3.1-7.1-16-39.7h15.1l9.3 23.8Z" fill="#0ea5e9" opacity=".16"/>
      </svg>
      {withTagline ? <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">Growth • Ventas • Code</span> : null}
    </div>
  );
}
