export type ClientCategory = "inmobiliaria" | "turismo";

export type SocialLinks = {
  whatsapp: string;
  facebook: string;
  instagram: string;
};

export type CatalogImage = {
  src: string;
  alt: string;
};

export type BasePublication = {
  slug: string;
  category: ClientCategory;
  title: string;
  badge: string;
  price: string;
  shortDescription: string;
  longDescription: string;
  locationLabel: string;
  gallery: CatalogImage[];
  socials: SocialLinks;
  ctaLabel: string;
  relatedHint: string;
};

export type RealEstatePublication = BasePublication & {
  category: "inmobiliaria";
  propertyType: string;
  specs: {
    m2: string;
    bedrooms: string;
    bathrooms: string;
    parking: string;
    extra: string;
  };
  featured: string[];
  connectivity: string[];
  idealFor: string[];
};

export type TourismPublication = BasePublication & {
  category: "turismo";
  duration: string;
  destination: string;
  highlights: string[];
  includes: string[];
  experienceLevel: string;
  idealFor: string[];
  recommendations: string[];
  bestSeason: string;
};

export type ClientPublication = RealEstatePublication | TourismPublication;

const socialTemplate = {
  whatsapp: "https://wa.me/56912345678?text=Hola%20GVC%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n",
  facebook: "https://www.facebook.com/gvcchile",
  instagram: "https://www.instagram.com/gvcchile",
} satisfies SocialLinks;

export const clientCategories: Array<{ key: ClientCategory; label: string; description: string }> = [
  {
    key: "inmobiliaria",
    label: "Inmobiliaria",
    description: "Propiedades premium para compra, inversión o renta corporativa.",
  },
  {
    key: "turismo",
    label: "Turismo",
    description: "Programas curados para viajeros que buscan experiencias memorables en Chile.",
  },
];

export const clientCatalog: Record<ClientCategory, ClientPublication[]> = {
  inmobiliaria: [
    {
      slug: "departamento-ejecutivo-nueva-las-condes",
      category: "inmobiliaria",
      title: "Departamento Ejecutivo Nueva Las Condes",
      badge: "Destacado",
      price: "$258.000.000 CLP",
      shortDescription: "Piso alto con terminaciones de autor, ideal para ejecutivos que priorizan ubicación y diseño.",
      longDescription:
        "Ubicado en un sector estratégico de Santiago, este departamento combina arquitectura contemporánea, iluminación natural y una distribución pensada para una vida urbana eficiente. El edificio cuenta con conserjería 24/7, lounge de negocios y gimnasio boutique, convirtiéndolo en una opción sólida tanto para residencia principal como para arriendo ejecutivo de alto estándar.",
      locationLabel: "Santiago · Nueva Las Condes",
      propertyType: "Departamento",
      specs: {
        m2: "92 m²",
        bedrooms: "2 dormitorios",
        bathrooms: "2 baños",
        parking: "1 estacionamiento",
        extra: "Terraza panorámica + bodega",
      },
      featured: ["Cocina integrada con cubierta de cuarzo", "Climatización por zonas", "Acceso controlado con biometría"],
      connectivity: ["A 6 min caminando de Metro Manquehue", "Conexión directa a Apoquindo y Vespucio", "Oferta gastronómica y servicios premium en el entorno"],
      idealFor: ["Ejecutivos con agenda híbrida", "Inversionistas en renta corporativa", "Parejas profesionales"],
      gallery: [
        { src: "https://source.unsplash.com/1600x1000/?las-condes,apartment,luxury&sig=101", alt: "Living principal con vista urbana en Las Condes" },
        { src: "https://source.unsplash.com/1600x1000/?office,boutique,corporate,interior&sig=104", alt: "Dormitorio principal con iluminación natural" },
      ],
      socials: socialTemplate,
      ctaLabel: "Agendar visita ejecutiva",
      relatedHint: "Departamento premium",
    },
    {
      slug: "casa-familiar-los-bravos-chicureo",
      category: "inmobiliaria",
      title: "Casa Familiar Los Bravos Chicureo",
      badge: "Nuevo",
      price: "$486.000.000 CLP",
      shortDescription: "Casa mediterránea con jardín consolidado y programa completo para vida familiar de alto estándar.",
      longDescription:
        "Proyecto residencial de líneas limpias en condominio consolidado de Chicureo. Destaca por su amplitud interior, cocina full equipada y quincho de diseño integrado al jardín. El entorno privilegiado permite combinar tranquilidad, seguridad y cercanía a colegios, autopistas y servicios clave para una rutina familiar dinámica.",
      locationLabel: "Chicureo · Sector Los Bravos",
      propertyType: "Casa",
      specs: {
        m2: "268 m² construidos / 640 m² terreno",
        bedrooms: "4 dormitorios",
        bathrooms: "4 baños",
        parking: "3 estacionamientos",
        extra: "Jardín + piscina + quincho",
      },
      featured: ["Suite principal con walk-in closet", "Sala de estar independiente", "Riego automático en todo el jardín"],
      connectivity: ["Salida rápida a Radial Nororiente", "A 12 min de colegios bilingües", "Centros comerciales y clínicas cercanas"],
      idealFor: ["Familias con hijos en edad escolar", "Traslado desde comunas urbanas", "Vida indoor-outdoor"],
      gallery: [
        { src: "https://source.unsplash.com/1600x1000/?modern,house,garden,chile&sig=102", alt: "Fachada de casa mediterránea en Chicureo" },
        { src: "https://source.unsplash.com/1600x1000/?modern,house,garden,chile&sig=102", alt: "Jardín con piscina y terraza cubierta" },
      ],
      socials: socialTemplate,
      ctaLabel: "Solicitar visita privada",
      relatedHint: "Casa familiar",
    },
    {
      slug: "parcela-vina-boutique-los-andes",
      category: "inmobiliaria",
      title: "Parcela Viña Boutique Cordillera",
      badge: "Inversión",
      price: "$179.000.000 CLP",
      shortDescription: "Parcela productiva en entorno vitivinícola con alto potencial para proyecto residencial o turístico.",
      longDescription:
        "Emplazada entre Los Andes y San Felipe, esta parcela ofrece un escenario natural privilegiado con acceso pavimentado y factibilidad de servicios. Su topografía armónica permite proyectar una residencia principal, segunda vivienda o desarrollo de hospitality de baja densidad. Una alternativa de inversión respaldada por la creciente demanda de destinos de escapada cerca de Santiago.",
      locationLabel: "Los Andes · Valle de Aconcagua",
      propertyType: "Parcela",
      specs: {
        m2: "5.200 m²",
        bedrooms: "Factible 3-5 dormitorios",
        bathrooms: "Factible 2-4 baños",
        parking: "Amplio sector para estacionamientos",
        extra: "Jardín nativo + bodega exterior",
      },
      featured: ["Vista limpia a cordillera", "Agua de pozo inscrita", "Cierre perimetral y portón eléctrico"],
      connectivity: ["A 75 min de Santiago", "Conexión directa a Ruta 57", "Circuitos enoturísticos y gastronómicos próximos"],
      idealFor: ["Inversionistas en hospitality", "Familias que buscan segunda vivienda", "Proyectos de retiro con plusvalía"],
      gallery: [
        { src: "https://source.unsplash.com/1600x1000/?vineyard,valley,mountains,chile&sig=103", alt: "Terreno con vista al valle y viñedos" },
        { src: "https://source.unsplash.com/1600x1000/?vineyard,valley,mountains,chile&sig=103", alt: "Acceso principal de parcela en Aconcagua" },
      ],
      socials: socialTemplate,
      ctaLabel: "Evaluar factibilidad",
      relatedHint: "Parcela premium",
    },
    {
      slug: "oficina-boutique-providencia-financiero",
      category: "inmobiliaria",
      title: "Oficina Boutique Distrito Providencia",
      badge: "Corporativo",
      price: "$214.000.000 CLP",
      shortDescription: "Espacio corporativo flexible para estudios, consultoras y equipos comerciales de alto desempeño.",
      longDescription:
        "Oficina de imagen premium en pleno eje empresarial de Providencia. Incluye recepción, dos privados, sala colaborativa y kitchenette ejecutiva. El edificio dispone de control de acceso inteligente, estacionamientos de visita y excelente conectividad para reuniones presenciales e híbridas. Una ubicación que proyecta confianza de marca desde el primer contacto.",
      locationLabel: "Providencia · Metro Tobalaba",
      propertyType: "Oficina",
      specs: {
        m2: "118 m²",
        bedrooms: "2 privados + 1 sala reuniones",
        bathrooms: "2 baños",
        parking: "2 estacionamientos",
        extra: "Bodega documental + climatización central",
      },
      featured: ["Plantas libres modulables", "Conectividad de fibra óptica", "Lobby corporativo renovado"],
      connectivity: ["A pasos de Metro y ciclovías", "Cercano a bancos y notarías", "Acceso inmediato a Costanera Center"],
      idealFor: ["Consultoras estratégicas", "Equipos legales o financieros", "Estudios creativos de nivel premium"],
      gallery: [
        { src: "https://source.unsplash.com/1600x1000/?office,boutique,corporate,interior&sig=104", alt: "Espacio de oficina moderna en Providencia" },
        { src: "https://source.unsplash.com/1600x1000/?office,boutique,corporate,interior&sig=104", alt: "Sala de reuniones con estilo corporativo" },
      ],
      socials: socialTemplate,
      ctaLabel: "Coordinar tour empresarial",
      relatedHint: "Oficina premium",
    },
    {
      slug: "depto-vista-bahia-vina-mar",
      category: "inmobiliaria",
      title: "Departamento Vista Bahía Viña del Mar",
      badge: "Premium",
      price: "$332.000.000 CLP",
      shortDescription: "Departamento en primera línea con terraza panorámica y programa ideal para renta estacional alta.",
      longDescription:
        "Una propuesta de alto impacto visual frente al mar de Viña del Mar. El departamento integra living-comedor ampliado, cocina contemporánea y espacios de descanso orientados a la bahía. El edificio suma amenities premium: piscina temperada, spa y servicio de administración para renta temporal. Excelente alternativa para lifestyle costero con retorno potencial.",
      locationLabel: "Viña del Mar · Reñaca Norte",
      propertyType: "Departamento",
      specs: {
        m2: "136 m²",
        bedrooms: "3 dormitorios",
        bathrooms: "3 baños",
        parking: "2 estacionamientos",
        extra: "Terraza envolvente + bodega",
      },
      featured: ["Vista al mar 180°", "Ventanas termopanel", "Acceso directo a playa y costanera"],
      connectivity: ["A 10 min del centro de Viña", "Cercano a restaurantes y clubes", "Conectividad expedita a Concón"],
      idealFor: ["Familias con segunda vivienda", "Inversionistas en renta estival", "Clientes internacionales"],
      gallery: [
        { src: "https://source.unsplash.com/1600x1000/?ocean,apartment,balcony,view&sig=105", alt: "Terraza con vista al mar en Viña del Mar" },
        { src: "https://source.unsplash.com/1600x1000/?ocean,apartment,balcony,view&sig=105", alt: "Living con ventanales panorámicos" },
      ],
      socials: socialTemplate,
      ctaLabel: "Reservar visita en terreno",
      relatedHint: "Vista al mar",
    },
  ],
  turismo: [
    {
      slug: "atacama-lux-explorer-4d3n",
      category: "turismo",
      title: "Atacama Lux Explorer 4D/3N",
      badge: "Más reservado",
      price: "$689.000 CLP por persona",
      shortDescription: "Programa boutique en San Pedro con expediciones privadas y hotelería de diseño desértico.",
      longDescription:
        "Un itinerario premium diseñado para descubrir la inmensidad de San Pedro de Atacama con comodidad superior. Incluye amanecer en géiseres, sunset en Valle de la Luna y experiencias astronómicas guiadas por especialistas locales. Ideal para viajeros que buscan aventura curada, logística impecable y momentos memorables en uno de los paisajes más icónicos de Chile.",
      locationLabel: "San Pedro de Atacama",
      duration: "4 días / 3 noches",
      destination: "Región de Antofagasta",
      highlights: ["Hotel boutique con spa", "Excursión astronómica premium", "Traslados aeropuerto-hotel"],
      includes: ["Alojamiento con desayuno", "Traslados en 4x4", "2 excursiones privadas", "Cocktail de bienvenida"],
      experienceLevel: "Confort + aventura moderada",
      idealFor: ["Parejas viajeras", "Fotógrafos de paisajes", "Viajes de celebración"],
      recommendations: ["Llevar abrigo térmico para noches frías", "Hidratarse constantemente por altura", "Reservar con 30 días de anticipación"],
      bestSeason: "Marzo a junio y septiembre a noviembre",
      gallery: [
        { src: "https://source.unsplash.com/1600x1000/?san-pedro-de-atacama,desert,chile&sig=201", alt: "Paisaje desértico de San Pedro de Atacama" },
        { src: "https://source.unsplash.com/1600x1000/?san-pedro-de-atacama,desert,chile&sig=201", alt: "Cielo estrellado en excursión nocturna" },
      ],
      socials: socialTemplate,
      ctaLabel: "Cotizar programa",
      relatedHint: "Norte premium",
    },
    {
      slug: "torres-del-paine-signature-5d4n",
      category: "turismo",
      title: "Torres del Paine Signature 5D/4N",
      badge: "Escapada premium",
      price: "$1.290.000 CLP por persona",
      shortDescription: "Ruta escénica en Patagonia con lodge de alta gama, navegación y trekking asistido.",
      longDescription:
        "Programa diseñado para recorrer los hitos más emblemáticos de Torres del Paine con guía especializado y tiempos bien equilibrados entre exploración y descanso. Incluye navegación por Lago Grey, senderos panorámicos de baja y media exigencia, y gastronomía regional en lodge premium. Perfecto para quienes quieren vivir la Patagonia con confort y organización experta.",
      locationLabel: "Parque Nacional Torres del Paine",
      duration: "5 días / 4 noches",
      destination: "Región de Magallanes",
      highlights: ["Lodge con vista a macizos", "Navegación por glaciares", "Guía bilingüe certificado"],
      includes: ["Alojamiento régimen media pensión", "Traslados desde Puerto Natales", "Seguro de asistencia", "Excursiones guiadas"],
      experienceLevel: "Aventura controlada",
      idealFor: ["Viajeros internacionales", "Equipos ejecutivos en retiro", "Amantes de la naturaleza"],
      recommendations: ["Usar ropa por capas", "Calzado de trekking impermeable", "Cámara con batería extra"],
      bestSeason: "Octubre a abril",
      gallery: [
        { src: "https://source.unsplash.com/1600x1000/?torres-del-paine,patagonia,chile&sig=202", alt: "Macizos de Torres del Paine en amanecer" },
        { src: "https://source.unsplash.com/1600x1000/?torres-del-paine,patagonia,chile&sig=202", alt: "Navegación en lago glaciar patagónico" },
      ],
      socials: socialTemplate,
      ctaLabel: "Reservar cupo preferente",
      relatedHint: "Patagonia",
    },
    {
      slug: "pucon-villarrica-adventure-4d3n",
      category: "turismo",
      title: "Pucón & Villarrica Adventure 4D/3N",
      badge: "Aventura",
      price: "$549.000 CLP por persona",
      shortDescription: "Naturaleza activa en la Araucanía con termas, lagos y excursiones guiadas.",
      longDescription:
        "Una propuesta dinámica para vivir Pucón y Villarrica combinando deporte, bienestar y paisajes del sur de Chile. El programa considera ascenso guiado en rutas seguras, navegación en lago y sesión de descanso en termas naturales. Todo coordinado con operadores certificados para entregar una experiencia segura, entretenida y de alto valor percibido.",
      locationLabel: "Pucón y Villarrica",
      duration: "4 días / 3 noches",
      destination: "Región de La Araucanía",
      highlights: ["Hotel con vista al lago", "Termas premium incluidas", "Excursiones outdoor asistidas"],
      includes: ["Alojamiento + desayuno buffet", "Traslados internos", "Entrada a termas", "Guía de aventura"],
      experienceLevel: "Activo-intermedio",
      idealFor: ["Grupos de amigos", "Parejas activas", "Viajeros de fin de semana largo"],
      recommendations: ["Llevar mochila liviana de trekking", "Considerar traje de baño para termas", "Consultar nivel físico previo"],
      bestSeason: "Todo el año (verano e invierno con enfoques distintos)",
      gallery: [
        { src: "https://source.unsplash.com/1600x1000/?pucon,villarrica,volcano,lake,chile&sig=203", alt: "Volcán Villarrica y lago al atardecer" },
        { src: "https://source.unsplash.com/1600x1000/?pucon,villarrica,volcano,lake,chile&sig=203", alt: "Termas naturales en entorno boscoso" },
      ],
      socials: socialTemplate,
      ctaLabel: "Solicitar itinerario completo",
      relatedHint: "Sur activo",
    },
    {
      slug: "valle-elqui-wellness-sky-3d2n",
      category: "turismo",
      title: "Valle del Elqui Wellness & Sky 3D/2N",
      badge: "Retiro",
      price: "$429.000 CLP por persona",
      shortDescription: "Experiencia de descanso consciente entre viñedos, cielo limpio y spa de montaña.",
      longDescription:
        "Programa enfocado en desconexión premium en el Valle del Elqui. Incluye alojamiento boutique, visita a viña de autor y sesión de observación astronómica en uno de los cielos más limpios del planeta. El ritmo del viaje está pensado para bajar revoluciones y reconectar con bienestar, naturaleza y gastronomía local.",
      locationLabel: "Valle del Elqui · Vicuña",
      duration: "3 días / 2 noches",
      destination: "Región de Coquimbo",
      highlights: ["Hotel wellness boutique", "Tour en viña premium", "Noche astronómica guiada"],
      includes: ["Alojamiento con desayuno saludable", "Traslados locales", "Degustación premium", "Sesión de spa"],
      experienceLevel: "Relajado",
      idealFor: ["Escapadas de pareja", "Viajes de aniversario", "Work-life reset"],
      recommendations: ["Llevar ropa liviana de día y abrigo nocturno", "Reservar masajes con anticipación", "Planificar traslado desde La Serena"],
      bestSeason: "Septiembre a mayo",
      gallery: [
        { src: "https://source.unsplash.com/1600x1000/?valle-del-elqui,vineyard,chile&sig=204", alt: "Viñedos y cerros del Valle del Elqui" },
        { src: "https://source.unsplash.com/1600x1000/?valle-del-elqui,vineyard,chile&sig=204", alt: "Experiencia de observación astronómica" },
      ],
      socials: socialTemplate,
      ctaLabel: "Cotizar escapada",
      relatedHint: "Wellness",
    },
    {
      slug: "chiloe-cultura-sabores-4d3n",
      category: "turismo",
      title: "Chiloé Cultura & Sabores 4D/3N",
      badge: "Experiencia local",
      price: "$598.000 CLP por persona",
      shortDescription: "Ruta patrimonial y gastronómica por Chiloé con hospedaje de encanto y navegación insular.",
      longDescription:
        "Una inmersión cuidadosamente diseñada en la cultura chilota: palafitos, iglesias patrimoniales, mercados costeros y cocina de mar con sello local. El programa combina historia, paisaje y hospitalidad en formato boutique, con acompañamiento experto y tiempos adecuados para disfrutar cada destino sin prisa.",
      locationLabel: "Chiloé · Castro y Dalcahue",
      duration: "4 días / 3 noches",
      destination: "Región de Los Lagos",
      highlights: ["Hotel boutique en palafito", "Navegación por canales interiores", "Ruta gastronómica de autor"],
      includes: ["Alojamiento + desayuno", "Traslados terrestres y marítimos", "2 excursiones culturales", "Cena de despedida"],
      experienceLevel: "Cultural-relajado",
      idealFor: ["Viajeros culturales", "Foodies", "Parejas y grupos pequeños"],
      recommendations: ["Llevar chaqueta impermeable", "Calzado cómodo para caminatas", "Agenda flexible por clima insular"],
      bestSeason: "Noviembre a marzo",
      gallery: [
        { src: "https://source.unsplash.com/1600x1000/?chiloe,palafitos,chile&sig=205", alt: "Palafitos tradicionales de Chiloé" },
        { src: "https://source.unsplash.com/1600x1000/?chiloe,palafitos,chile&sig=205", alt: "Mercado costero y gastronomía chilota" },
      ],
      socials: socialTemplate,
      ctaLabel: "Reservar programa cultural",
      relatedHint: "Islas del sur",
    },
  ],
};

export const allClientPublications = [...clientCatalog.inmobiliaria, ...clientCatalog.turismo];

export function isClientCategory(value: string): value is ClientCategory {
  return value === "inmobiliaria" || value === "turismo";
}

export function getCategoryPublications(category: ClientCategory) {
  return clientCatalog[category];
}

export function getClientPublication(category: ClientCategory, slug: string) {
  return clientCatalog[category].find((item) => item.slug === slug);
}

export function getRelatedPublications(category: ClientCategory, slug: string, limit = 3) {
  return clientCatalog[category].filter((item) => item.slug !== slug).slice(0, limit);
}
