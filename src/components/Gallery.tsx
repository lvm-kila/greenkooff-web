import { galleryImages } from "../data/gallery";

export default function Gallery() {
  return (
    <section id="galeria" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-red-600">Galería</p>
        <h2 className="mt-2 text-3xl font-black text-zinc-900 md:text-4xl">Así se vive Greenkooff</h2>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {galleryImages.map((image, idx) => (
            <div key={`${image}-${idx}`} className="overflow-hidden rounded-xl">
              <img
                src={image}
                alt={`Comida Greenkooff ${idx + 1}`}
                className="h-36 w-full object-cover transition duration-500 hover:scale-110 md:h-48"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
