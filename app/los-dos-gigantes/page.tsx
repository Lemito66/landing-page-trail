import Link from "next/link";

export default function LosDosGigantesPage() {
  return (
    <main className="bg-[#F2E7E7] text-[#331010]">

      {/* =========================
          HERO
      ========================= */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-end"
        style={{
          backgroundImage: "url('/los-dos-gigantes.jpg')",
        }}
      >

        {/* Oscurecimiento de la fotografía */}
        <div className="absolute inset-0 bg-black/40"></div>


        {/* =========================
            NAVEGACIÓN SUPERIOR
        ========================= */}
        <div className="absolute top-6 right-6 z-30 flex items-center gap-3">

          {/* INICIO */}
          <Link
            href="/"
            className="border border-white/70 text-white px-5 py-2 rounded-full text-sm tracking-wide hover:bg-white hover:text-[#331010] transition"
          >
            Inicio
          </Link>


          {/* DISTANCIAS */}
          <div className="relative group">

            <button
              className="border border-white/70 text-white px-5 py-2 rounded-full text-sm tracking-wide hover:bg-white hover:text-[#331010] transition"
            >
              Distancias ▾
            </button>


            {/* MENÚ DESPLEGABLE */}
            <div className="absolute right-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

              <div className="bg-[#331010]/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10">

                <Link
                  href="/distancias/5k"
                  className="block px-5 py-4 text-white hover:bg-[#E74238] transition"
                >
                  <span className="block font-semibold">
                    5K
                  </span>
                  <span className="block text-sm text-white/70">
                    El primer encuentro
                  </span>
                </Link>


                <Link
                  href="/distancias/10k"
                  className="block px-5 py-4 text-white hover:bg-[#E74238] transition"
                >
                  <span className="block font-semibold">
                    10K
                  </span>
                  <span className="block text-sm text-white/70">
                    El desafío
                  </span>
                </Link>


                <Link
                  href="/distancias/20k"
                  className="block px-5 py-4 text-white hover:bg-[#E74238] transition"
                >
                  <span className="block font-semibold">
                    20K
                  </span>
                  <span className="block text-sm text-white/70">
                    Resistencia
                  </span>
                </Link>


                <Link
                  href="/distancias/30k"
                  className="block px-5 py-4 text-white hover:bg-[#E74238] transition"
                >
                  <span className="block font-semibold">
                    30K
                  </span>
                  <span className="block text-sm text-white/70">
                    Los Dos Gigantes
                  </span>
                </Link>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            TEXTO HERO
        ========================= */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-16 md:pb-20 text-white">

          <p className="uppercase tracking-[0.3em] text-sm mb-4">
            Los Dos Gigantes Ultra Trail
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-5">
            Entre el Sol y la Sombra
          </h1>

          <p className="text-xl md:text-2xl font-light mb-6">
            El último desafío del año.
          </p>

          <p className="max-w-3xl text-lg md:text-xl font-light leading-relaxed">
            Una experiencia de alta montaña en el corazón de la
            Reserva de Producción de Fauna Chimborazo. Cuatro distancias,
            cuatro formas de desafiarte y un territorio donde el deporte,
            la naturaleza y la montaña se encuentran.
          </p>

        </div>

      </section>


      {/* =========================
          DESCRIPCIÓN
      ========================= */}
      <section className="py-20 md:py-28">

        <div className="max-w-5xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-sm text-[#E74238] mb-6">
            Los Dos Gigantes Ultra Trail
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
            Un encuentro
            <br />
            con la montaña.
          </h2>

          <div className="max-w-4xl space-y-6 text-lg md:text-xl leading-relaxed">

            <p>
              Los Dos Gigantes Ultra Trail nace en uno de los territorios
              de montaña más emblemáticos del Ecuador: la Reserva de
              Producción de Fauna Chimborazo.
            </p>

            <p>
              Una experiencia que conecta deporte, naturaleza, turismo
              y territorio en un escenario de alta montaña, donde cada
              distancia representa una manera diferente de encontrarse
              con la montaña.
            </p>

            <p>
              Desde los primeros pasos sobre los 4.000 metros sobre el
              nivel del mar hasta los terrenos volcánicos, arenales,
              rocas y lagunas de altura, el recorrido invita a descubrir
              un paisaje que cambia constantemente.
            </p>

            <p>
              Aquí la montaña no es solamente el escenario.
              Es parte de la experiencia.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          DISTANCIAS
      ========================= */}
      <section className="bg-[#331010] text-white py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-sm text-[#E74238] mb-6">
            Elige tu desafío
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            Cuatro distancias.
            <br />
            Cuatro formas de desafiarte.
          </h2>


          <div className="grid md:grid-cols-2 gap-5">


            {/* 5K */}
            <Link
              href="/distancias/5k"
              className="group border border-white/15 rounded-2xl p-7 hover:bg-[#E74238] transition"
            >

              <p className="text-4xl font-bold mb-3">
                5K
              </p>

              <h3 className="text-2xl font-semibold mb-3">
                El primer encuentro
              </h3>

              <p className="text-white/70 group-hover:text-white/90 leading-relaxed">
                Una primera aproximación a la alta montaña.
              </p>

            </Link>


            {/* 10K */}
            <Link
              href="/distancias/10k"
              className="group border border-white/15 rounded-2xl p-7 hover:bg-[#E74238] transition"
            >

              <p className="text-4xl font-bold mb-3">
                10K
              </p>

              <h3 className="text-2xl font-semibold mb-3">
                El desafío
              </h3>

              <p className="text-white/70 group-hover:text-white/90 leading-relaxed">
                Una distancia donde la montaña comienza a exigir más.
              </p>

            </Link>


            {/* 20K */}
            <Link
              href="/distancias/20k"
              className="group border border-white/15 rounded-2xl p-7 hover:bg-[#E74238] transition"
            >

              <p className="text-4xl font-bold mb-3">
                20K
              </p>

              <h3 className="text-2xl font-semibold mb-3">
                Resistencia
              </h3>

              <p className="text-white/70 group-hover:text-white/90 leading-relaxed">
                Una distancia para descubrir hasta dónde puede llevarte tu resistencia.
              </p>

            </Link>


            {/* 30K */}
            <Link
              href="/distancias/30k"
              className="group border border-white/15 rounded-2xl p-7 hover:bg-[#E74238] transition"
            >

              <p className="text-4xl font-bold mb-3">
                30K
              </p>

              <h3 className="text-2xl font-semibold mb-3">
                Los Dos Gigantes
              </h3>

              <p className="text-white/70 group-hover:text-white/90 leading-relaxed">
                El recorrido que conecta el Carihuairazo y el Chimborazo.
              </p>

            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          INSCRIPCIÓN
      ========================= */}
      <section className="py-20 md:py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-lg md:text-xl leading-relaxed mb-10">
            El último desafío del año comienza aquí.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdO62MyFEKPG21uSatdoIG62pdWmV-PzhLDEQU9EjGE_UVRkg/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-9 py-4 rounded-full bg-[#E74238] text-white font-medium hover:bg-[#331010] transition"
          >
            Inscríbete ahora
          </a>

        </div>

      </section>

    </main>
  );
}