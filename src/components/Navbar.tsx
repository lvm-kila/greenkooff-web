const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Promociones", href: "#promociones" },
  { label: "Menú", href: "#menu" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-white md:px-8">
        <a href="#inicio" className="text-2xl font-black tracking-wide text-red-500">
          Greenkooff
        </a>

        <ul className="hidden items-center gap-6 text-sm font-semibold lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-red-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/56912345678?text=Hola%20Greenkooff,%20quiero%20hacer%20un%20pedido"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-red-600 px-4 py-2 text-sm font-bold shadow-lg shadow-red-900/40 transition hover:scale-105 hover:bg-red-500"
        >
          Pedir por WhatsApp
        </a>
      </nav>
    </header>
  );
}
