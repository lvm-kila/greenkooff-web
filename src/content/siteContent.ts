export const BRAND = {
  name: "GVC",
  tagline: "Arquitectura comercial premium para crecimiento sostenible.",
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

export const TRUST_BADGES = ["+120 empresas acompañadas", "Operación B2B orientada a revenue", "Implementación estratégica desde 15 días"];

export const STATS = [
  { value: "+37%", label: "Leads calificados" },
  { value: "-42%", label: "Tiempo a primer contacto" },
  { value: "3.2x", label: "Pipeline de oportunidades" },
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
  valuePillar: string;
  deliveryModel: string;
  includes: string[];
  expectedBenefits: string[];
};

export const PLANS: Plan[] = [
  {
    slug: "emprendedor",
    name: "Plan Emprendedor",
    subtitle: "Presencia digital y generación de clientes",
    price: "$249.990 / mes",
    audience: "Ideal para emprendedores y pequeñas empresas que quieren comenzar a vender online.",
    objective: "Presencia digital y generación de clientes",
    badge: "Base sólida",
    valuePillar: "Fundamentos comerciales y presencia profesional",
    deliveryModel: "Gestión mensual + asesoría estratégica",
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
    price: "$449.990 / mes",
    audience: "Ideal para empresas que quieren aumentar ventas y publicidad.",
    objective: "Aumentar ventas y clientes",
    highlighted: true,
    badge: "Más elegido",
    valuePillar: "Escalamiento de demanda con control de rendimiento",
    deliveryModel: "Gestión quincenal + optimización continua",
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
    price: "$649.990 / mes",
    audience: "Ideal para empresas que quieren automatizar ventas y crecer fuerte.",
    objective: "Escalar ventas y automatizar marketing",
    badge: "Escalable",
    valuePillar: "Orquestación comercial avanzada y automatización",
    deliveryModel: "Cadencia semanal + dirección consultiva",
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

export type ComparisonRow = {
  label: string;
  badge: string;
  positioning: string;
  values: string[];
  highlighted?: boolean;
};

export const COMPARISON_HEADERS = [
  "Cadencia de contenido",
  "Gestión de canales",
  "Activación de pauta",
  "Activos de conversión",
  "Automatización comercial",
  "Ritmo de seguimiento",
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Plan Emprendedor",
    badge: "Base operacional",
    positioning: "Para validar canal digital con orden comercial.",
    values: ["6 publicaciones/mes", "1 red prioritaria", "No", "No", "WhatsApp Business", "Mensual"],
  },
  {
    label: "Plan Pyme Crecimiento",
    badge: "Recomendado",
    positioning: "Para escalar captación con control de inversión.",
    highlighted: true,
    values: ["12 publicaciones/mes", "2 redes coordinadas", "Sí", "No", "Embudo básico", "Quincenal"],
  },
  {
    label: "Plan Empresa / Premium",
    badge: "Expansión estratégica",
    positioning: "Para equipos que integran marketing, ventas y automatización.",
    values: ["20 publicaciones/mes", "Gestión integral", "Sí", "Sí", "Chatbot + CRM", "Semanal"],
  },
];

export const PROCESS_STEPS = [
  { title: "Diagnóstico", text: "Mapeamos oferta, canales y fricciones para detectar oportunidades de venta.", icon: "01" },
  { title: "Estrategia", text: "Definimos objetivos, mix de canales y arquitectura digital por etapa.", icon: "02" },
  { title: "Implementación", text: "Lanzamos campañas, landings y automatizaciones con foco en ejecución ágil.", icon: "03" },
  { title: "Optimización", text: "Medimos KPIs, iteramos y escalamos lo que ya está entregando resultado.", icon: "04" },
];

export type TestimonialCase = {
  company: string;
  sector: string;
  companyType: string;
  role: string;
  challenge: string;
  result: string;
  quote: string;
};

export const TESTIMONIALS: TestimonialCase[] = [
  {
    company: "Grupo logístico industrial",
    sector: "Logística B2B",
    companyType: "Empresa mediana",
    role: "Gerencia Comercial",
    challenge: "Prospección dispersa y baja priorización de oportunidades.",
    result: "Más reuniones calificadas y seguimiento comercial ordenado en 8 semanas.",
    quote: "Pasamos de prospectos dispersos a un flujo comercial priorizado; hoy el equipo comercial invierte tiempo en oportunidades reales.",
  },
  {
    company: "Marca retail omnicanal",
    sector: "Retail",
    companyType: "Empresa en expansión",
    role: "Founder & CEO",
    challenge: "Pauta, CRM y seguimiento sin una lógica unificada.",
    result: "Mayor trazabilidad comercial y mejor coordinación entre marketing y ventas.",
    quote: "Con GVC ordenamos pauta, CRM y seguimiento. El equipo recuperó foco comercial sin perder velocidad operativa.",
  },
  {
    company: "Consultora tecnológica",
    sector: "Servicios tecnológicos",
    companyType: "Consultora especializada",
    role: "Directora de Marketing",
    challenge: "Captación irregular y decisiones sin marco de indicadores.",
    result: "Sistema de captación con KPIs claros para escalar con mayor control.",
    quote: "Redefinimos el sistema de captación completo y hoy trabajamos con indicadores comerciales claros para escalar con control.",
  },
];

export const IMPACT_SIGNALS = [
  {
    label: "Horizonte de impacto",
    value: "4 a 8 semanas",
    detail: "Señales tempranas en velocidad de respuesta, calidad de lead y consistencia del pipeline.",
  },
  {
    label: "Método de ejecución",
    value: "Sprints quincenales",
    detail: "Planificación, implementación y ajustes en ciclos cortos orientados a decisiones de negocio.",
  },
  {
    label: "Gobernanza comercial",
    value: "KPIs accionables",
    detail: "Visibilidad sobre embudo, desempeño de canales y puntos de fricción para mejorar rentabilidad.",
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
