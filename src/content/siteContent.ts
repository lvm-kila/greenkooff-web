export const BRAND = {
  name: "Impulsa360",
  tagline:
    "Impulsamos tu empresa con marketing digital, diseño, automatización y tecnología para aumentar tus ventas.",
  whatsappNumber: "56912345678",
  whatsappMessage: "Hola Impulsa360, quiero impulsar mis ventas con sus planes.",
  location: "Chile",
};

export const WHATSAPP_URL = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(BRAND.whatsappMessage)}`;

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Comparativa", href: "#comparativa" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export const TRUST_BADGES = ["+120 empresas asesoradas", "Equipo senior B2B", "Implementación en todo Chile"];

export const STATS = [
  { value: "35%", label: "Incremento promedio de conversiones" },
  { value: "72h", label: "Para lanzar campañas iniciales" },
  { value: "98%", label: "Clientes que renuevan el servicio" },
];

export const SERVICES = [
  {
    title: "Marketing Digital",
    description: "Estrategias para atraer demanda calificada y convertirla en ventas medibles.",
    icon: "📈",
    capabilities: ["Redes sociales", "Meta Ads", "Google Ads", "Email marketing", "Embudos de ventas"],
  },
  {
    title: "Desarrollo Web",
    description: "Sitios y plataformas orientadas a conversión, rendimiento y escalabilidad.",
    icon: "💻",
    capabilities: ["Páginas web", "Landing pages", "Ecommerce", "SEO", "Hosting y dominios"],
  },
  {
    title: "Automatización",
    description: "Sistemas conectados para vender y responder más rápido con menos fricción.",
    icon: "🤖",
    capabilities: [
      "Chatbots WhatsApp",
      "Automatización de ventas",
      "CRM",
      "Formularios automáticos",
      "Integración de sistemas",
    ],
  },
  {
    title: "Tecnología",
    description: "Soluciones digitales a medida para empresas que buscan modernizar su operación.",
    icon: "⚙️",
    capabilities: [
      "Desarrollo software",
      "Sistemas web",
      "Automatización de procesos",
      "Digitalización de empresas",
      "Integraciones API",
    ],
  },
];

export const BENEFITS = [
  "Enfoque en ventas, no solo en alcance",
  "Automatización para reducir tiempos operativos",
  "Presencia digital sólida y coherente",
  "Estrategia escalable por etapa de crecimiento",
  "Soporte experto por WhatsApp y correo",
];

export type PlanSlug = "emprendedor" | "pyme-crecimiento" | "premium";

export type Plan = {
  slug: PlanSlug;
  name: string;
  subtitle: string;
  price: string;
  audience: string;
  objective: string;
  highlighted?: boolean;
  includes: string[];
  expectedBenefits: string[];
};

export const PLANS: Plan[] = [
  {
    slug: "emprendedor",
    name: "Plan Emprendedor",
    subtitle: "Presencia digital y generación de clientes",
    price: "$149.990 / mes",
    audience: "Ideal para emprendedores y pequeñas empresas que quieren comenzar a vender online.",
    objective: "Presencia digital y generación de clientes",
    includes: [
      "Diseño de 6 publicaciones mensuales para redes sociales",
      "Administración de Instagram o Facebook",
      "Respuesta básica a mensajes",
      "Diseño de 1 banner o flyer mensual",
      "Asesoría de marketing mensual",
      "Configuración de WhatsApp Business",
      "Reporte mensual de resultados",
      "Soporte por correo o WhatsApp",
    ],
    expectedBenefits: ["Iniciar presencia profesional", "Aumentar consultas por redes", "Ordenar comunicación comercial"],
  },
  {
    slug: "pyme-crecimiento",
    name: "Plan Pyme Crecimiento",
    subtitle: "Aumentar ventas y clientes",
    price: "$299.990 / mes",
    audience: "Ideal para empresas que quieren aumentar ventas y publicidad.",
    objective: "Aumentar ventas y clientes",
    highlighted: true,
    includes: [
      "Diseño de 12 publicaciones mensuales",
      "Administración de Instagram y Facebook",
      "Creación de campañas publicitarias (Meta Ads)",
      "Diseño de historias y reels",
      "Diseño de 2 banners o flyers mensuales",
      "Optimización de perfil empresa",
      "Configuración embudo de ventas básico",
      "Reporte quincenal",
      "Soporte prioritario",
    ],
    expectedBenefits: ["Escalar captación de leads", "Mejorar rendimiento de anuncios", "Más consistencia comercial"],
  },
  {
    slug: "premium",
    name: "Plan Empresa / Premium",
    subtitle: "Escalar ventas y automatizar marketing",
    price: "$499.990 / mes",
    audience: "Ideal para empresas que quieren automatizar ventas y crecer fuerte.",
    objective: "Escalar ventas y automatizar marketing",
    includes: [
      "Diseño de 20 publicaciones mensuales",
      "Administración de redes sociales",
      "Publicidad en Facebook e Instagram Ads",
      "Diseño de reels y contenido video",
      "Landing page o página de ventas",
      "Automatización WhatsApp / chatbot",
      "Email marketing",
      "Embudo de ventas",
      "Reporte semanal",
      "Reunión estratégica mensual",
      "Soporte prioritario",
    ],
    expectedBenefits: ["Automatizar respuesta comercial", "Escalar ventas con datos", "Alinear marketing y operación"],
  },
];

export const COMPARISON_HEADERS = ["Publicaciones/mes", "Gestión de redes", "Meta Ads", "Landing page", "Automatización", "Reporte"];

export const COMPARISON_ROWS = [
  { label: "Plan Emprendedor", values: ["6", "1 red", "No", "No", "WhatsApp Business", "Mensual"] },
  { label: "Plan Pyme Crecimiento", values: ["12", "2 redes", "Sí", "No", "Embudo básico", "Quincenal"] },
  { label: "Plan Empresa / Premium", values: ["20", "Completa", "Sí", "Sí", "Chatbot + CRM", "Semanal"] },
];

export const PROCESS_STEPS = [
  { title: "Diagnóstico", text: "Analizamos tus canales, oferta y proceso comercial para detectar brechas de venta." },
  { title: "Estrategia", text: "Definimos plan de acción, objetivos, canales y automatizaciones prioritarias." },
  { title: "Implementación", text: "Lanzamos campañas, activos digitales y flujos para acelerar captación y cierre." },
  { title: "Optimización", text: "Medimos KPIs, ajustamos tácticas y escalamos lo que mejor convierte." },
];

export const TESTIMONIALS = [
  {
    company: "Empresa de servicios B2B",
    quote: "Placeholder editable: mejoramos la tasa de respuesta comercial y aumentamos reuniones en 8 semanas.",
    person: "Gerencia Comercial",
  },
  {
    company: "Pyme Ecommerce",
    quote: "Placeholder editable: pasamos de una gestión manual a un embudo automatizado con reportes semanales.",
    person: "Fundador",
  },
  {
    company: "Consultora tecnológica",
    quote: "Placeholder editable: ordenamos campañas y sitio web, logrando leads de mejor calidad.",
    person: "Directora de Marketing",
  },
];

export const FAQS = [
  {
    question: "¿Existe permanencia mínima?",
    answer: "Trabajamos por ciclos mensuales con planificación trimestral recomendada para consolidar resultados.",
  },
  {
    question: "¿Cómo se paga el servicio?",
    answer: "Aceptamos pago mensual con tarjeta y transferencia. Emitimos respaldo comercial según necesidad.",
  },
  {
    question: "¿Incluyen inversión publicitaria?",
    answer: "No. El presupuesto de pauta se define junto al cliente y se paga directamente en plataformas de anuncios.",
  },
  {
    question: "¿Cuándo comienzan a verse resultados?",
    answer: "Depende del punto de partida, pero normalmente en las primeras 4 a 8 semanas ya hay señales medibles.",
  },
  {
    question: "¿Puedo escalar de plan?",
    answer: "Sí. Puedes subir de plan cuando tu operación necesite más volumen, automatización o soporte estratégico.",
  },
];

export const PLAN_FAQS: Record<PlanSlug, { question: string; answer: string }[]> = {
  emprendedor: [
    { question: "¿Este plan incluye campañas pagadas?", answer: "No, se enfoca en base orgánica y orden comercial inicial." },
    { question: "¿Sirve si recién comienzo?", answer: "Sí, está diseñado para dar estructura digital desde cero." },
  ],
  "pyme-crecimiento": [
    { question: "¿Incluye optimización continua de anuncios?", answer: "Sí, con seguimiento quincenal y ajustes estratégicos." },
    { question: "¿Qué redes gestionan?", answer: "Instagram y Facebook con contenido planificado." },
  ],
  premium: [
    { question: "¿Incluye automatización y chatbot?", answer: "Sí, incluye implementación de chatbot y flujos comerciales." },
    { question: "¿Qué nivel de acompañamiento tiene?", answer: "Soporte prioritario y reunión estratégica mensual." },
  ],
};
