import Link from "next/link";

export default function ContactosPage() {
  return (
    <main className="min-h-screen bg-[#F2E7E7] text-[#331010]">

      {/* HERO */}
      <section
        className="relative min-h-[50vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: "url('/los-dos-gigantes.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        {/* NAVEGACIÓN */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex justify-end px-6 md:px-12 py-6">
          <div className="flex items-center gap-5 md:gap-7 text-white text-sm md:text-base">

            <Link
              href="/los-dos-gigantes"
              className="hover:text-[#E74238] transition"
            >
              Los Dos Gigantes
            </Link>

            <div className="relative group">
              <button className="hover:text-[#E74238] transition">
                Distancias ▾
              </button>

              <div className="absolute right-0 mt-2 w-44 bg-[#331010] rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">

                <Link
                  href="/distancias/5k"
                  className="block px-4 py-3 hover:bg-[#E74238] transition"
                >
                  5K
                </Link>

                <Link
                  href="/distancias/10k"
                  className="block px-4 py-3 hover:bg-[#E74238] transition"
                >
                  10K
                </Link>

                <Link
                  href="/distancias/20k"
                  className="block px-4 py-3 hover:bg-[#E74238] transition"
                >
                  20K
                </Link>

                <Link
                  href="/distancias/30k"
                  className="block px-4 py-3 hover:bg-[#E74238] transition"
                >
                  30K
                </Link>

              </div>
            </div>

            <Link
              href="/como-llegar"
              className="hover:text-[#E74238] transition"
            >
              Cómo llegar
            </Link>

            <Link
              href="/contactos"
              className="text-[#E74238] font-semibold"
            >
              Contactos
            </Link>

          </div>
        </nav>

        {/* HERO */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 pb-16 md:pb-20">

          <p className="text-[#E74238] uppercase tracking-[0.28em] text-xs md:text-sm font-semibold mb-5">
            Los Dos Gigantes Ultra Trail
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-6">
            Contactos
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
            Escríbenos, síguenos y sé parte de la comunidad.
          </p>

        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">

        <p className="text-sm uppercase tracking-[0.28em] text-[#E74238] font-semibold mb-5">
          Hablemos
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10 max-w-4xl">
          Estamos para ayudarte
        </h2>

        <div className="max-w-4xl space-y-6 text-lg md:text-xl leading-relaxed text-[#331010]/85">
          <p>
            Si tienes preguntas sobre inscripciones, distancias, logística
            o cualquier otro detalle de Los Dos Gigantes Ultra Trail,
            contáctanos por el medio que prefieras.
          </p>
        </div>
      </section>

      {/* CONTACTO DIRECTO */}
      <section className="bg-[#331010] text-white py-20 md:py-28">

        <div className="max-w-6xl mx-auto px-6 md:px-12">

          <p className="text-[#E74238] uppercase tracking-[0.28em] text-sm font-semibold mb-10">
            Contacto directo
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <a
              href="mailto:chimborazoendurance@gmail.com"
              className="bg-white/5 border border-white/15 rounded-xl p-8 md:p-10 hover:bg-white/10 transition"
            >
              <p className="text-[#E74238] text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                Correo electrónico
              </p>
              <p className="text-2xl md:text-3xl font-bold break-all">
                chimborazoendurance@gmail.com
              </p>
            </a>

            <a
              href="https://wa.me/593982121157"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E74238] rounded-xl p-8 md:p-10 hover:bg-black transition"
            >
              <p className="text-white/70 text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                WhatsApp
              </p>
              <p className="text-2xl md:text-3xl font-bold">
                +593 98 212 1157
              </p>
            </a>

          </div>

        </div>
      </section>

      {/* REDES SOCIALES */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">

        <p className="text-sm uppercase tracking-[0.28em] text-[#E74238] font-semibold mb-5">
          Síguenos
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-14">
          Sé parte de la comunidad
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <a
            href="https://www.instagram.com/chimborazoendurance/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/60 border border-[#331010]/10 rounded-xl p-8 md:p-10 hover:bg-white transition"
          >
            <p className="text-[#E74238] text-sm uppercase tracking-[0.2em] font-semibold mb-4">
              Instagram
            </p>
            <p className="text-2xl md:text-3xl font-bold">
              @chimborazoendurance
            </p>
          </a>

          <a
            href="https://www.facebook.com/chimborazoendurance"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/60 border border-[#331010]/10 rounded-xl p-8 md:p-10 hover:bg-white transition"
          >
            <p className="text-[#E74238] text-sm uppercase tracking-[0.2em] font-semibold mb-4">
              Facebook
            </p>
            <p className="text-2xl md:text-3xl font-bold">
              @chimborazoendurance
            </p>
          </a>

          <a
            href="https://www.tiktok.com/@chimborazoendurance"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/60 border border-[#331010]/10 rounded-xl p-8 md:p-10 hover:bg-white transition"
          >
            <p className="text-[#E74238] text-sm uppercase tracking-[0.2em] font-semibold mb-4">
              TikTok
            </p>
            <p className="text-2xl md:text-3xl font-bold">
              @chimborazoendurance
            </p>
          </a>

          <a
            href="https://www.youtube.com/@ChimborazoEnduranceSeries"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/60 border border-[#331010]/10 rounded-xl p-8 md:p-10 hover:bg-white transition"
          >
            <p className="text-[#E74238] text-sm uppercase tracking-[0.2em] font-semibold mb-4">
              YouTube
            </p>
            <p className="text-2xl md:text-3xl font-bold">
              Chimborazo Endurance Series
            </p>
          </a>

        </div>

      </section>

      {/* CIERRE */}
      <section className="bg-[#E74238] text-white py-20 md:py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-2xl md:text-4xl font-bold italic leading-relaxed">
            Nos vemos en la montaña.
          </p>

          <div className="mt-10">
            <Link
              href="/los-dos-gigantes"
              className="inline-block border border-white/30 text-white px-7 py-4 rounded-md font-semibold hover:bg-white hover:text-[#331010] transition"
            >
              Volver a Los Dos Gigantes
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}