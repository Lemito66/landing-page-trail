import Link from "next/link";

const distancias = [
  {
    distancia: "5K",
    titulo: "El primer encuentro",
    imagen: "/5k-los-dos-gigantes.jpg",
    href: "/distancias/5k",
  },
  {
    distancia: "10K",
    titulo: "El desafío de la altura",
    imagen: "/10k-los-dos-gigantes.png",
    href: "/distancias/10k",
  },
  {
    distancia: "20K",
    titulo: "La resistencia",
    imagen: "/20k-los-dos-gigantes.png",
    href: "/distancias/20k",
  },
  {
    distancia: "30K",
    titulo: "Entre los dos gigantes",
    imagen: "/30k-los-dos-gigantes.png",
    href: "/distancias/30k",
  },
];

export default function DistanciasPage() {
  return (
    <main className="min-h-screen bg-[#F2E7E7] text-[#331010]">

      {/* BOTÓN INICIO */}
      <div className="absolute right-6 top-6 z-20 md:right-12 md:top-8 lg:right-20">
        <Link
          href="/"
          className="inline-flex items-center border border-[#331010]/30 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#331010] hover:text-[#F2E7E7]"
        >
          Inicio
        </Link>
      </div>

      {/* ENCABEZADO */}
      <section className="px-6 pt-32 pb-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#E74238]">
            Los Dos Gigantes Ultra Trail
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Distancias
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#331010]/75 md:text-xl">
            Cuatro formas de desafiar la alta montaña.
            Conoce cada recorrido y encuentra tu desafío.
          </p>
        </div>
      </section>

      {/* CUADRÍCULA */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {distancias.map((distancia) => (
            <Link
              key={distancia.distancia}
              href={distancia.href}
              className="group relative overflow-hidden rounded-sm"
            >
              {/* IMAGEN */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={distancia.imagen}
                  alt={`Los Dos Gigantes Ultra Trail ${distancia.distancia}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* OSCURECIMIENTO */}
                <div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/45" />

                {/* INFORMACIÓN */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                    Los Dos Gigantes
                  </p>

                  <h2 className="mt-1 text-5xl font-bold text-white md:text-6xl">
                    {distancia.distancia}
                  </h2>

                  <p className="mt-2 text-lg text-white md:text-xl">
                    {distancia.titulo}
                  </p>

                  <div className="mt-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    <span>Conoce el perfil</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}