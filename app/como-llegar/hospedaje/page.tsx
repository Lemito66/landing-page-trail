import Link from "next/link";

const HOTELES = [
  {
    nombre: "ACHIMAMA",
    servicios: "Alojamiento · Artesanías / productos locales",
    beneficio: "Descuento del 10% al 20% en el total, o un souvenir local de bienvenida.",
    whatsapp: "593998926345",
    whatsappDisplay: "099 892 6345",
  },
  {
    nombre: "San Marcos Inn",
    servicios: "Alojamiento",
    beneficio: "Check-in temprano o check-out tarde sin costo.",
    whatsapp: "593990884746",
    whatsappDisplay: "099 088 4746",
  },
  {
    nombre: "Kantu Andina",
    servicios: "Alojamiento · Gastronomía",
    beneficio: "Desayuno andino, recorrido guiado o fogata incluidos.",
    whatsapp: "593995475403",
    whatsappDisplay: "099 547 5403",
  },
  {
    nombre: "Finca Castillo de Altura",
    servicios: "Alojamiento · Gastronomía",
    beneficio: "Check-in/check-out flexible y una actividad gratis incluida.",
    whatsapp: "593984784330",
    whatsappDisplay: "098 478 4330",
  },
  {
    nombre: "Chakra Andina",
    servicios: "Alojamiento · Gastronomía · Tours y cabalgatas",
    beneficio: "Tarifas especiales para grupos y familias, más una actividad gratis.",
    whatsapp: "593991473863",
    whatsappDisplay: "099 147 3863",
  },
  {
    nombre: "Dream Garden Hotel",
    servicios: "Alojamiento",
    beneficio: "Descuento del 10% al 20% y check-in/check-out flexible.",
    whatsapp: "593969143860",
    whatsappDisplay: "096 914 3860",
  },
  {
    nombre: "Huayra Glamp",
    servicios: "Alojamiento (glamping)",
    beneficio: "Descuento del 10% al 20% en el total.",
    whatsapp: "593969143860",
    whatsappDisplay: "096 914 3860",
  },
  {
    nombre: "La Caracola",
    servicios: "Alojamiento",
    beneficio: "Descuento, souvenir de bienvenida y check-in/check-out flexible.",
    whatsapp: "593987414130",
    whatsappDisplay: "098 741 4130",
  },
];

export default function HospedajePage() {
  return (
    <main className="min-h-screen bg-[#F2E7E7] text-[#331010]">

      {/* HERO */}
      <section
        className="relative min-h-[40vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: "url('/los-dos-gigantes.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <nav className="absolute top-0 left-0 right-0 z-20 flex justify-end px-6 md:px-12 py-6">
          <div className="flex items-center gap-5 md:gap-7 text-white text-sm md:text-base">
            <Link href="/los-dos-gigantes" className="hover:text-[#E74238] transition">
              Los Dos Gigantes
            </Link>
            <Link href="/como-llegar" className="text-[#E74238] font-semibold">
              Cómo llegar
            </Link>
            <Link href="/contactos" className="hover:text-[#E74238] transition">
              Contactos
            </Link>
          </div>
        </nav>

        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 pb-14 md:pb-16">
          <p className="text-[#E74238] uppercase tracking-[0.28em] text-xs md:text-sm font-semibold mb-5">
            San Juan · Hospedaje
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Dónde quedarte
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Opciones de hospedaje aliadas, cerca de las salidas de la carrera.
          </p>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <p className="text-lg md:text-xl leading-relaxed text-[#331010]/85 max-w-3xl">
          Estos negocios de San Juan se han sumado como aliados de Los Dos
          Gigantes Ultra Trail y ofrecen beneficios especiales para quienes
          lleguen a la carrera. Contáctalos directamente por WhatsApp para
          reservar y confirmar disponibilidad.
        </p>
      </section>

      {/* LISTADO */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-6">
          {HOTELES.map((hotel) => (
            <div
              key={hotel.nombre}
              className="bg-white/60 border border-[#331010]/10 rounded-xl p-7 md:p-8 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-2">{hotel.nombre}</h3>

              <p className="text-sm uppercase tracking-wider text-[#E74238] font-semibold mb-4">
                {hotel.servicios}
              </p>

              <p className="text-base leading-relaxed text-[#331010]/75 mb-6 flex-grow">
                {hotel.beneficio}
              </p>

              <a
                href={`https://wa.me/${hotel.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#331010] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#E74238] transition"
              >
                WhatsApp {hotel.whatsappDisplay}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CIERRE */}
      <section className="bg-[#331010] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl font-bold italic leading-relaxed mb-8">
            Reserva con anticipación, los cupos son limitados.
          </p>
          <Link
            href="/como-llegar"
            className="inline-block border border-white/30 text-white px-7 py-4 rounded-md font-semibold hover:bg-white hover:text-[#331010] transition"
          >
            Volver a Cómo llegar
          </Link>
        </div>
      </section>

    </main>
  );
}