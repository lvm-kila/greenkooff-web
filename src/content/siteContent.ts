export const BRAND = {
  name: "GVC",
  tagline: "Escala ventas con marketing, automatización y tecnología.",
  whatsappNumber: "56912345678",
  whatsappMessage: "Hola GVC, quiero escalar mis ventas con una estrategia digital.",
  location: "Chile",
  email: "contacto@gvc.cl",
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

export const TRUST_BADGES = ["+120 empresas asesoradas", "Estrategia B2B para Chile", "Implementación en 15 días"]; 

export const STATS = [
  { value: "+37%", label: "Leads calificados" },
  { value: "-42%", label: "Tiempo de respuesta" },
  { value: "3.2x", label: "Pipeline comercial" },
];

export const SERVICES = [
  {
    title: "Marketing Digital",
    description: "Estrategias de adquisición para atraer demanda y convertirla en oportunidades reales.",
    icon: "megaphone",
    capabilities: ["Redes sociales", "Meta Ads", "Google Ads", "Email marketing", "Embudos de ventas"],
  },
  {
    title: "Desarrollo Web",
    description: "Plataformas comerciales orientadas a conversión, rendimiento y escalabilidad.",
    icon: "layout",
    capabilities: ["Páginas web", "Landing pages", "Ecommerce", "SEO", "Hosting y dominios"],
  },
  {
    title: "Automatización",
    description: "Flujos conectados para vender más rápido y operar con menos fricción.",
    icon: "spark",
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
    description: "Arquitectura digital para modernizar procesos, datos e integraciones críticas.",
    icon: "chip",
    capabilities: ["Desarrollo software", "Sistemas web", "Digitalización de empresas", "Integraciones API", "Escalabilidad cloud"],
  },
];

export const BENEFITS = [
  "Enfoque en ventas y rentabilidad, no solo alcance",
  "Automatización comercial para acelerar cierre",
  "Visión integrada entre marketing, web y operación",
  "Estrategia escalable según etapa de crecimiento",
  "Acompañamiento experto y decisiones basadas en datos",
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
  badge?: string;
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
    badge: "Base sólida",
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
    badge: "Más elegido",
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
    badge: "Escalable",
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
  { title: "Diagnóstico", text: "Mapeamos oferta, canales y fricciones para detectar oportunidades de venta.", icon: "01" },
  { title: "Estrategia", text: "Definimos objetivos, mix de canales y arquitectura digital por etapa.", icon: "02" },
  { title: "Implementación", text: "Lanzamos campañas, landings y automatizaciones con foco en ejecución ágil.", icon: "03" },
  { title: "Optimización", text: "Medimos KPIs, iteramos y escalamos lo que ya está entregando resultado.", icon: "04" },
];

export const TESTIMONIALS = [
  {
    company: "Empresa de servicios B2B",
    quote: "Mejoramos la tasa de respuesta comercial y aumentamos reuniones en 8 semanas.",
    person: "Gerencia Comercial",
  },
  {
    company: "Pyme Ecommerce",
    quote: "Pasamos de gestión manual a un embudo automatizado con reportes semanales.",
    person: "Fundador",
  },
  {
    company: "Consultora tecnológica",
    quote: "Ordenamos campañas y sitio web, logrando leads de mejor calidad.",
    person: "Directora de Marketing",
  },
];

export const FAQS = [
  {
    question: "¿Existe permanencia mínima?",
    answer: "Operamos por ciclos mensuales con roadmap trimestral sugerido para consolidar resultados.",
  },
  {
    question: "¿Cómo se paga el servicio?",
    answer: "Aceptamos pago mensual con tarjeta o transferencia con documentación comercial.",
  },
  {
    question: "¿Incluyen inversión publicitaria?",
    answer: "No. El presupuesto de pauta se acuerda y se paga directamente en Meta o Google.",
  },
  {
    question: "¿Cuándo comienzan a verse resultados?",
    answer: "Generalmente entre la semana 4 y 8 ya se observan señales de mejora en KPIs comerciales.",
  },
  {
    question: "¿Puedo escalar de plan?",
    answer: "Sí. Puedes cambiar de plan en cualquier momento según volumen, canales o necesidades de automatización.",
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
