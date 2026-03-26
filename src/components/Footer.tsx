export default function Footer() {
  return (
    <footer className="bg-black py-10 text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-8">
        <div>
          <p className="text-2xl font-black text-emerald-500">Greenkooff</p>
          <p className="mt-2 text-sm">Comida rápida con promociones reales en Los Andes.</p>
        </div>

        <div>
          <p className="font-bold text-white">Navegación</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#inicio" className="hover:text-emerald-400">
                Inicio
              </a>
            </li>
            <li>
              <a href="#promociones" className="hover:text-emerald-400">
                Promociones
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-emerald-400">
                Menú
              </a>
            </li>
            <li>
              <a href="#ubicacion" className="hover:text-emerald-400">
                Ubicación
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-white">Contacto</p>
          <p className="mt-3 text-sm">📍 O&apos;Higgins 400, Los Andes</p>
          <p className="mt-2 text-sm">📱 +56 9 1234 5678</p>
          <div className="mt-4 flex gap-3 text-sm">
            <a href="#" className="hover:text-emerald-400">
              Instagram
            </a>
            <a href="#" className="hover:text-emerald-400">
              Facebook
            </a>
            <a href="#" className="hover:text-emerald-400">
              TikTok
            </a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-zinc-500">© 2026 Greenkooff. Todos los derechos reservados.</p>
    </footer>
  );
}
