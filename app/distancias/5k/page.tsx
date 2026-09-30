import Link from "next/link";

export default function CincoKPage() {
  return (
    <main className="bg-[#F2E7E7] text-[#331010]">

      {/* =========================
          HERO
      ========================= */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-end animate-[zoomIn_2s_ease-out]"
        style={{
          backgroundImage: "url('/5k-los-dos-gigantes.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>

        {/* NAVEGACIÓN */}
        <div className="absolute top-6 right-6 z-30 flex items-center gap-3">

          <Link
            href="/los-dos-gigantes"
            className="border border-white/70 text-white px-5 py-2 rounded-full text-sm tracking-wide hover:bg-white hover:text-[#331010] transition"
          >
            Los Dos Gigantes
          </Link>

          <div className="relative group">

            <button
              className="border border-white/70 text-white px-5 py-2 rounded-full text-sm tracking-wide hover:bg-white hover:text-[#331010] transition"
            >
              Distancias ▾
            </button>

            <div className="absolute right-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <div className="bg-[#331010]/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10">

                <Link
                  href="/distancias/5k"
                  className="block px-5 py-4 text-white hover:bg-[#E74238] transition"
                >
                  <span className="block font-semibold">5K</span>
                  <span className="block text-sm text-white/70">
                    El primer encuentro
                  </span>
                </Link>

                <Link
                  href="/distancias/10k"
                  className="block px-5 py-4 text-white hover:bg-[#E74238] transition"
                >
                  <span className="block font-semibold">10K</span>
                  <span className="block text-sm text-white/70">
                    El desafío
                  </span>
                </Link>

                <Link
                  href="/distancias/20k"
                  className="block px-5 py-4 text-white hover:bg-[#E74238] transition"
                >
                  <span className="block font-semibold">20K</span>
                  <span className="block text-sm text-white/70">
                    Resistencia
                  </span>
                </Link>

                <Link
                  href="/distancias/30k"
                  className="block px-5 py-4 text-white hover:bg-[#E74238] transition"
                >
                  <span className="block font-semibold">30K</span>
                  <span className="block text-sm text-white/70">
                    Los Dos Gigantes
                  </span>
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* TEXTO HERO */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-16 md:pb-20 text-white animate-[fadeUp_0.9s_ease-out]">

          <p className="uppercase tracking-[0.3em] text-sm mb-4">
            5K · Alta montaña
          </p>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
            5K
          </h1>

          <h2 className="text-3xl md:text-5xl font-light mb-6">
            El primer encuentro.
          </h2>

          <p className="max-w-2xl text-lg md:text-xl font-light leading-relaxed">
            Una primera aproximación a la alta montaña. Arena, roca y más
            de 4.000 metros sobre el nivel del mar.
          </p>

        </div>
      </section>


      {/* =========================
          DESCRIPCIÓN
      ========================= */}
      <section className="py-20 md:py-28 animate-[fadeUp_0.9s_ease-out]">

        <div className="max-w-5xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-sm text-[#E74238] mb-6">
            5K · El recorrido
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
            Tu primer encuentro
            <br />
            con la montaña.
          </h2>

          <div className="max-w-4xl space-y-6 text-lg md:text-xl leading-relaxed">

            <p>
              La 5K es una primera aproximación a la alta montaña de
              Los Dos Gigantes. Un recorrido que comienza por encima
              de los 4.000 metros sobre el nivel del mar y permite
              experimentar el terreno característico del entorno del
              Chimborazo.
            </p>

            <p>
              La distancia real es de <strong>7,56 kilómetros</strong>,
              con un recorrido que combina <strong>arenal y roca</strong>.
              La subida exige encontrar el ritmo adecuado mientras la
              altitud comienza a hacerse protagonista.
            </p>

            <p>
              El punto más alto alcanza los <strong>4.558 metros</strong>
              sobre el nivel del mar. Desde allí comienza un descenso
              rápido sobre terreno arenoso antes de enfrentar el tramo
              final de subida.
            </p>

            <p>
              Es una distancia pensada para descubrir cómo se siente
              correr en alta montaña, donde cada paso tiene un ritmo
              diferente y el paisaje se convierte en parte del desafío.
            </p>

            <p>
              Una distancia corta en kilómetros, pero enorme en
              experiencia.
            </p>

          </div>
        </div>

      </section>


      {/* =========================
          DATOS TÉCNICOS
      ========================= */}
      <section className="bg-[#331010] text-white py-20 md:py-24 animate-[fadeUp_0.9s_ease-out]">

        <div className="max-w-6xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-sm text-[#E74238] mb-6">
            Datos técnicos
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

            <div>
              <p className="text-white/60 text-sm uppercase tracking-wide">
                Distancia
              </p>
              <p className="text-3xl font-bold mt-2">
                7,56 km
              </p>
            </div>

            <div>
              <p className="text-white/60 text-sm uppercase tracking-wide">
                Punto más alto
              </p>
              <p className="text-3xl font-bold mt-2">
                4.558 m
              </p>
            </div>

            <div>
              <p className="text-white/60 text-sm uppercase tracking-wide">
                Punto más bajo
              </p>
              <p className="text-3xl font-bold mt-2">
                4.269 m
              </p>
            </div>

            <div>
              <p className="text-white/60 text-sm uppercase tracking-wide">
                Desnivel positivo
              </p>
              <p className="text-3xl font-bold mt-2">
                +300 m
              </p>
            </div>

            <div>
              <p className="text-white/60 text-sm uppercase tracking-wide">
                Desnivel negativo
              </p>
              <p className="text-3xl font-bold mt-2">
                -304 m
              </p>
            </div>

            <div>
              <p className="text-white/60 text-sm uppercase tracking-wide">
                Dificultad
              </p>
              <p className="text-3xl font-bold mt-2">
                Media - Baja
              </p>
            </div>

          </div>

          <div className="mt-12 border-t border-white/10 pt-8">

            <p className="text-white/60 text-sm uppercase tracking-wide">
              Terreno
            </p>

            <p className="text-xl mt-2">
              Arenal · Roca
            </p>

            <p className="text-white/60 text-sm uppercase tracking-wide mt-8">
              Hora de salida
            </p>

            <p className="text-xl mt-2">
              Próximamente
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          BOTONES
      ========================= */}
      <section className="py-24 animate-[fadeUp_0.9s_ease-out]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="https://maps.app.goo.gl/Kz3qXTe25C1JAehr8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-[#331010] text-white font-medium hover:bg-[#E74238] transition"
            >
              Punto de partida
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdO62MyFEKPG21uSatdoIG62pdWmV-PzhLDEQU9EjGE_UVRkg/viewform?usp=send_form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-[#E74238] text-white font-medium hover:bg-[#331010] transition"
            >
              Inscríbete ahora
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          ANIMACIONES
      ========================= */}
      <style>{`

        @keyframes zoomIn {

          from {
            opacity: 0;
            background-size: 105%;
          }

          to {
            opacity: 1;
            background-size: 100%;
          }

        }

        @keyframes fadeUp {

          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

      `}</style>

    </main>
  );
}