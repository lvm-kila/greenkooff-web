import { WHATSAPP_URL } from "../content/siteContent";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-300 transition hover:-translate-y-1 hover:bg-orange-600"
    >
      WhatsApp
    </a>
  );
}
