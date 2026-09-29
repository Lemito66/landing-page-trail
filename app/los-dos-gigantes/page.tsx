import Link from "next/link"

export default function LosDosGigantesPage() {
  return (
    <main className="min-h-screen">

      {/* PORTADA */}
      <section
        className="relative min-h-[90vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/los-dos-gigantes.jpg')",
        }}
      >

        {/* Capa oscura sobre la fotografía */}
        <div className="absolute inset-0 bg-black/55" />

        {/* BOTÓN INICIO */}
        <Link
          href="/"
          className="absolute top-6 right-6 z-20 bg-[#331010]/85 text-white px-5 py-2 text-xs font-semibold tracking-[0.2em] uppercase border border-white/20 hover:bg-[#E74238] transition-colors"
        >
          Inicio
        </Link>

        {/* Contenido */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-white">

          <p className="text-[#E74238] font-semibold tracking-[0.25em] uppercase text-sm mb-6">
            Los Dos Gigantes Ultra Trail
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Entre el Sol
            <br />
            y la Sombra
          </h1>

          <p className="text-2xl md:text-3xl font-light mb-8">
            El último desafío del año.
          </p>

          <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-white/90">
            Una carrera de alta montaña en el corazón de los Andes
            ecuatorianos, donde todas las distancias se corren por encima
            de los 4.000 m s. n. m.
          </p>

        </div>
      </section>

      {/* PRESENTACIÓN */}
      <section className="bg-[#F2E7E7] text-[#331010]">
        <div className="max-w-5xl mx-auto px-6 py-24">

          <p className="text-[#E74238] font-semibold tracking-[0.25em] uppercase text-sm mb-5">
            Una experiencia de alta montaña
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
            Un encuentro con la montaña,
            <br />
            la tierra y los Andes.
          </h2>

          <div className="max-w-4xl space-y-6 text-lg md:text-xl leading-relaxed">

            <p>
              Los Dos Gigantes Ultra Trail no es una carrera más.
              Es un encuentro con la montaña, con la tierra y con la fuerza
              de los Andes. Una conexión con la Pachamama y con un territorio
              profundo donde lo ancestral y lo natural siguen hablando a través
              de cada sendero.
            </p>

            <p>
              Es una carrera de alta montaña donde todas las distancias se
              desarrollan por encima de los 4.000 m s. n. m., dentro de la
              Reserva de Producción de Fauna Chimborazo.
            </p>

            <p>
              Aquí no vienes solamente a correr. Vienes a desafiarte en un
              territorio donde la montaña marca el ritmo y cada paso exige
              cuerpo, mente y capacidad para adaptarte.
            </p>

            <p>
              Arena, roca volcánica, páramo, senderos de alta montaña y un
              clima que puede cambiar en minutos forman parte de una experiencia
              donde los paisajes se transforman mientras avanzas.
            </p>

            <p>
              El viento, el frío, la niebla, la lluvia o el sol pueden convertirse
              en parte del desafío. La montaña pone sus propias reglas.
            </p>

          </div>

          {/* BOTÓN DE INSCRIPCIÓN */}
          <div className="mt-12">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdO62MyFEKPG21uSatdoIG62pdWmV-PzhLDEQU9EjGE_UVRkg/viewform?usp=send_form"
              className="inline-flex items-center justify-center bg-[#E74238] text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#331010] transition-colors"
            >
              Inscríbete ahora
            </a>
          </div>

        </div>
      </section>

    </main>
  )
}