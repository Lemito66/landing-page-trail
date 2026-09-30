import Link from "next/link";

export default function TreintaKPage() {
  return (
    <main className="bg-[#F2E7E7] text-[#331010]">

      {/* =========================
          HERO
      ========================= */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-end animate-[zoomIn_2s_ease-out]"
        style={{
          backgroundImage: "url('/30k-los-dos-gigantes.png')",
        }}
      >
        {/* Oscurecimiento */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* =========================
            NAVEGACIÓN
        ========================= */}
        <div className="absolute top-6 right-6 z-30 flex items-center gap-3">

          {/* LOS DOS GIGANTES */}
          <Link
            href="/los-dos-gigantes"
            className="border border-white/70 text-white px-5 py-2 rounded-full text-sm tracking-wide hover:bg-white hover:text-[#331010] transition"
          >
            Los Dos Gigantes
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
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-16 md:pb-20 text-white animate-[fadeUp_0.9s_ease-out]">

          <p className="uppercase tracking-[0.3em] text-sm mb-4">
            30K · Alta montaña
          </p>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
            30K
          </h1>

          <h2 className="text-3xl md:text-5xl font-light mb-6">
            Los Dos Gigantes.
          </h2>

          <p className="max-w-2xl text-lg md:text-xl font-light leading-relaxed">
            Un sendero entre gigantes. Un territorio que guarda memoria.
            Un encuentro con la Pachamama que comienza en el Carihuairazo
            y encuentra su destino bajo la presencia del Chimborazo.
          </p>

        </div>
      </section>


      {/* =========================
          DESCRIPCIÓN
      ========================= */}
      <section className="py-20 md:py-28 animate-[fadeUp_0.9s_ease-out]">

        <div className="max-w-5xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-sm text-[#E74238] mb-6">
            30K · El recorrido
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
            Dos gigantes.
            <br />
            Un solo territorio.
          </h2>

          <div className="max-w-4xl space-y-6 text-lg md:text-xl leading-relaxed">

            <p>
              La 30K es la distancia que da nombre a esta historia.
              Un recorrido que conecta dos de los grandes referentes de
              la montaña andina: el <strong>Carihuairazo</strong> y el
              <strong> Chimborazo</strong>.
            </p>

            <p>
              Pero este sendero no es solamente una línea trazada sobre
              el territorio. Es un camino que atraviesa un paisaje donde
              la montaña, el viento, la tierra y el silencio forman parte
              de una misma experiencia.
            </p>

            <p>
              Para la cosmovisión andina, las montañas son <strong>Apus</strong>:
              presencias que habitan y protegen el territorio. La
              <strong> Pachamama</strong> no es solamente el lugar por donde
              caminamos; es la tierra que nos sostiene, el espacio que
              compartimos y el territorio que debemos respetar.
            </p>

            <p>
              Correr estos senderos es entrar en ese territorio con
              humildad. Cada paso se convierte en una forma de conexión:
              con la montaña, con quienes caminaron antes y con quienes
              continuarán recorriendo estos caminos después de nosotros.
            </p>

            <p>
              El recorrido atraviesa terrenos propios de la alta montaña:
              <strong>
                {" "}
                arenal, piedra, roca volcánica, lodo y condiciones
                variables propias del territorio andino
              </strong>
              . Aquí el sendero cambia, el clima cambia y la montaña marca
              su propio ritmo.
            </p>

            <p>
              La 30K no busca solamente llevarte de un punto a otro.
              Te invita a recorrer un territorio que tiene historia,
              identidad y significado.
            </p>

            <p className="text-2xl md:text-3xl font-bold italic leading-relaxed pt-4">
              Porque entre el Carihuairazo y el Chimborazo no solamente
              existen kilómetros.
              <br />
              Existe un territorio que merece ser vivido y respetado.
            </p>

          </div>
        </div>

      </section>


      {/* =========================
          TERRENO
      ========================= */}
      <section className="bg-[#331010] text-white py-20 md:py-24 animate-[fadeUp_0.9s_ease-out]">

        <div className="max-w-6xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-sm text-[#E74238] mb-6">
            Terreno
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-10">
            La montaña pone sus leyes.
          </h2>

          <p className="max-w-4xl text-lg md:text-xl leading-relaxed text-white/85">
            El sendero atraviesa diferentes superficies y condiciones
            propias de la alta montaña. Arenal, piedra, roca volcánica,
            lodo y otros terrenos variables forman parte de una experiencia
            donde cada tramo exige adaptación y respeto por el territorio.
          </p>

        </div>

      </section>


      {/* =========================
          PRÓXIMAMENTE
      ========================= */}
      <section className="py-24 md:py-32 animate-[fadeUp_0.9s_ease-out]">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-[#E74238] mb-6">
            Información de carrera
          </p>

          <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
            PRÓXIMAMENTE
          </h2>

          <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-[#331010]/75">
            Los datos técnicos, altimetría, distancia definitiva,
            desnivel y demás información específica de esta distancia
            serán publicados próximamente.
          </p>

        </div>

      </section>


      {/* =========================
          BOTONES
      ========================= */}
      <section className="pb-24 animate-[fadeUp_0.9s_ease-out]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            {/* PUNTO DE PARTIDA */}
            <a
              href="https://maps.app.goo.gl/BfrEjQZJeGmTtHPk9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-[#331010] text-white font-medium hover:bg-[#E74238] transition"
            >
              Punto de partida
            </a>

            {/* INSCRIPCIÓN */}
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