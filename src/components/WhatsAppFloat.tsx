import { WHATSAPP_URL } from "../content/siteContent";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_18px_35px_-20px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:border-green-200 hover:text-green-700"
    >
      <span className="h-2 w-2 rounded-full bg-green-500" />
      WhatsApp
    </a>
  );
}
