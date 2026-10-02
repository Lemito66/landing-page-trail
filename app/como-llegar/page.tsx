  import Link from "next/link";

  export default function ComoLlegarPage() {
    return (
      <main className="min-h-screen bg-[#F2E7E7] text-[#331010]">

        {/* HERO */}
        <section
          className="relative min-h-[78vh] bg-cover bg-center flex items-end"
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
                className="text-[#E74238] font-semibold"
              >
                Cómo llegar
              </Link>

              <Link
                href="/contactos"
                className="hover:text-[#E74238] transition"
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
              Cómo llegar
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
              El camino también es parte de la experiencia.
            </p>

          </div>
        </section>

        {/* INTRODUCCIÓN */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <p className="text-sm uppercase tracking-[0.28em] text-[#E74238] font-semibold mb-5">
            El territorio
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10 max-w-4xl">
            Llegar a la montaña
          </h2>

          <div className="max-w-4xl space-y-6 text-lg md:text-xl leading-relaxed text-[#331010]/85">

            <p>
              Los Dos Gigantes Ultra Trail se desarrolla en el territorio de
              alta montaña de la Reserva de Producción de Fauna Chimborazo,
              en el entorno del Chimborazo y sus comunidades.
            </p>

            <p>
              Llegar hasta este territorio también es parte de la experiencia.
              El camino nos lleva fuera del ritmo habitual de la ciudad y nos
              acerca a un paisaje donde la altura, la naturaleza y la montaña
              comienzan a formar parte del desafío.
            </p>

            <p>
              Por eso, antes de pensar en la línea de salida, queremos que
              conozcas el territorio que vas a recorrer.
            </p>

          </div>
        </section>

        {/* RESERVA */}
        <section className="bg-[#331010] text-white py-20 md:py-28">

          <div className="max-w-6xl mx-auto px-6 md:px-12">

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-start">

              <div>

                <p className="text-[#E74238] uppercase tracking-[0.28em] text-sm font-semibold mb-6">
                  El escenario
                </p>

                <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] mb-8">
                  Reserva de
                  <br />
                  Producción
                  <br />
                  Faunística
                </h2>

                <div className="space-y-5 text-lg md:text-xl leading-relaxed text-white/80">

                  <p>
                    La Reserva de Producción de Fauna Chimborazo es uno de los
                    grandes territorios naturales de los Andes ecuatorianos.
                    Fue creada en 1987 para conservar el ecosistema de páramo,
                    proteger su biodiversidad y mantener los hábitats de especies
                    propias de la alta montaña.
                  </p>

                  <p>
                    Se extiende por las provincias de Chimborazo, Tungurahua y
                    Bolívar, con una superficie aproximada de
                    <strong className="text-white"> 58.560 hectáreas</strong> y
                    un rango altitudinal que alcanza los
                    <strong className="text-white"> 6.310 metros sobre el nivel del mar</strong>.
                  </p>

                  <p>
                    Su paisaje está marcado por el páramo, arenales, humedales,
                    lagunas y grandes formaciones volcánicas. El Chimborazo y el
                    Carihuairazo forman parte de este territorio, junto a una
                    biodiversidad que incluye vicuñas, venados y diversas especies
                    de aves y mamíferos.
                  </p>

                </div>

              </div>

              {/* DATOS */}
              <div className="grid grid-cols-2 gap-px bg-white/15 border border-white/10">

                <div className="bg-[#331010] p-6 md:p-8">
                  <p className="text-[#E74238] text-3xl md:text-4xl font-bold">
                    58.560
                  </p>
                  <p className="text-white/60 text-sm uppercase tracking-wider mt-2">
                    hectáreas
                  </p>
                </div>

                <div className="bg-[#331010] p-6 md:p-8">
                  <p className="text-[#E74238] text-3xl md:text-4xl font-bold">
                    6.310
                  </p>
                  <p className="text-white/60 text-sm uppercase tracking-wider mt-2">
                    m s. n. m.
                  </p>
                </div>

                <div className="bg-[#331010] p-6 md:p-8">
                  <p className="text-white text-xl md:text-2xl font-bold">
                    3 provincias
                  </p>
                  <p className="text-white/60 text-sm uppercase tracking-wider mt-2">
                    Chimborazo · Tungurahua · Bolívar
                  </p>
                </div>

                <div className="bg-[#331010] p-6 md:p-8">
                  <p className="text-white text-xl md:text-2xl font-bold">
                    Alta montaña
                  </p>
                  <p className="text-white/60 text-sm uppercase tracking-wider mt-2">
                    Páramo · volcán · humedales
                  </p>
                </div>

              </div>

            </div>

            {/* VOLCANES + FAUNA + LAGUNAS */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">

              <div className="border-t border-white/20 pt-6">
                <p className="text-[#E74238] uppercase tracking-wider text-xs font-semibold mb-3">
                  Volcanes
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  Dos gigantes
                </h3>

                <p className="text-white/65 leading-relaxed">
                  El Chimborazo y el Carihuairazo son dos de las grandes
                  referencias volcánicas de este territorio y protagonistas
                  de la historia de Los Dos Gigantes.
                </p>
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-[#E74238] uppercase tracking-wider text-xs font-semibold mb-3">
                  Fauna
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  Vida de altura
                </h3>

                <p className="text-white/65 leading-relaxed">
                  La reserva protege ecosistemas de páramo y es hábitat de
                  especies como la vicuña y el venado, además de registrar
                  diversas especies de aves y mamíferos.
                </p>
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-[#E74238] uppercase tracking-wider text-xs font-semibold mb-3">
                  Humedales y lagunas
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  Agua en la altura
                </h3>

                <p className="text-white/65 leading-relaxed">
                  Entre los sitios de visita identificados dentro de la
                  reserva se encuentran Pato Cocha y Siete Cochas, parte
                  del paisaje de humedales y cuerpos de agua de este
                  territorio andino.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ACCESOS */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <p className="text-sm uppercase tracking-[0.28em] text-[#E74238] font-semibold mb-5">
            Accesos
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Encuentra el camino
          </h2>

          <p className="text-lg md:text-xl text-[#331010]/75 max-w-3xl leading-relaxed mb-14">
            Hemos preparado las principales rutas de acceso para que puedas
            planificar tu llegada con anticipación.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">

            <div className="bg-white/60 border border-[#331010]/10 p-8 md:p-10 rounded-xl">

              <p className="text-[#E74238] text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                Acceso principal
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mb-5">
                Desde Riobamba
              </h3>

              <p className="text-lg leading-relaxed text-[#331010]/75 mb-8">
                El acceso general hacia la Reserva de Producción de Fauna
                Chimborazo se realiza desde Riobamba. Planifica tu salida
                con anticipación y considera las condiciones de la vía y
                el clima de montaña.
              </p>

              <a
                href="https://maps.app.goo.gl/ky6RJWmvWoYc7pbq5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#331010] text-white px-7 py-4 rounded-md font-semibold hover:bg-[#E74238] transition"
              >
                Riobamba → Reserva
              </a>

            </div>

            <div className="bg-[#331010] text-white p-8 md:p-10 rounded-xl">

              <p className="text-[#E74238] text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                Acceso recomendado
              </p>

              <h3 className="text-3xl md:text-4xl font-bold mb-5">
                Desde La Parroquia de San Juan
              </h3>

              <p className="text-lg leading-relaxed text-white/70 mb-8">
                La Parroquia de San Juan es el punto más cercano recomendado para quienes
                necesitan hospedaje antes de la carrera y desean estar cerca
                de los accesos a las diferentes distancias.
              </p>

              <a
                href="https://maps.app.goo.gl/Cr1TbQmg8CtvhHga7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#E74238] text-white px-7 py-4 rounded-md font-semibold hover:bg-black transition"
              >
                San Juan → Reserva
              </a>

            </div>

          </div>

          {/* HOSPEDAJE */}
          <div className="bg-[#E74238] text-white rounded-xl p-8 md:p-10">

            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">

              <div>

                <p className="text-white/70 text-sm uppercase tracking-[0.2em] font-semibold mb-3">
                  Recomendación
                </p>

                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Hospedaje en la Parroquia de San Juan
                </h3>

                <p className="text-lg leading-relaxed text-white/90 max-w-3xl">
                  Recomendamos considerar San Juan como punto de hospedaje
                  previo a la carrera. Su ubicación permite estar más cerca
                  de los accesos hacia las salidas de las diferentes
                  distancias y facilita la logística del día de competencia.
                </p>
              <Link
                href="/como-llegar/hospedaje"
                className="inline-block bg-white text-[#E74238] px-7 py-4 rounded-md font-semibold mt-6 hover:bg-[#331010] hover:text-white transition"
              >
                Ver opciones de hospedaje
              </Link>
              </div>

              <div className="text-6xl md:text-7xl font-bold italic">
                SNJ
              </div>

            </div>

          </div>

        </section>

        {/* 5K · 10K · 20K */}
        <section className="bg-[#331010] text-white py-20 md:py-28">

          <div className="max-w-6xl mx-auto px-6 md:px-12">

            <p className="text-[#E74238] uppercase tracking-[0.28em] text-sm font-semibold mb-5">
              5K · 10K · 20K
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Una misma salida.
              <br />
              Un mismo punto de llegada.
            </h2>

            <p className="text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-14">
              Las distancias 5K, 10K y 20K parten y llegan al mismo punto.
              Esto facilita la logística para corredores, acompañantes y
              equipos que permanecerán en la zona durante la jornada.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              {["5K", "10K", "20K"].map((distance) => (
                <div
                  key={distance}
                  className="border border-white/15 rounded-xl p-7"
                >
                  <p className="text-[#E74238] text-4xl font-bold mb-3">
                    {distance}
                  </p>

                  <p className="text-white/60 mb-6">
                    Salida y llegada
                  </p>

                  <a
                    href="https://maps.app.goo.gl/S9AVWfima6fqwpPe6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-[#331010] px-5 py-3 rounded-md font-semibold hover:bg-[#E74238] hover:text-white transition"
                  >
                    Ver ubicación
                  </a>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* 30K */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <p className="text-sm uppercase tracking-[0.28em] text-[#E74238] font-semibold mb-5">
            30K · Los Dos Gigantes
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Del Carihuairazo
            <br />
            al Chimborazo.
          </h2>

          <p className="text-lg md:text-xl text-[#331010]/75 max-w-3xl leading-relaxed mb-14">
            La distancia madre tiene una logística diferente. Su salida se
            encuentra en Patococha y el recorrido conecta el territorio del
            Carihuairazo con el entorno del Chimborazo.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">

            <div className="bg-white/60 border border-[#331010]/10 rounded-xl p-8 md:p-10">

              <p className="text-[#E74238] text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                Acceso
              </p>

              <h3 className="text-3xl font-bold mb-4">
                Riobamba → Patococha
              </h3>

              <p className="text-lg leading-relaxed text-[#331010]/75 mb-8">
                Esta es la ruta de acceso recomendada desde Riobamba hacia
                el punto de salida de los 30K.
              </p>

              <a
                href="https://maps.app.goo.gl/4CtRW9XfLjYGkAyH9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#331010] text-white px-7 py-4 rounded-md font-semibold hover:bg-[#E74238] transition"
              >
                Ver ruta en Google Maps
              </a>

            </div>

            <div className="bg-[#331010] text-white rounded-xl p-8 md:p-10">

              <p className="text-[#E74238] text-sm uppercase tracking-[0.2em] font-semibold mb-4">
                Acceso
              </p>

              <h3 className="text-3xl font-bold mb-4">
                Parroquia de San Juan → Patococha
              </h3>

              <p className="text-lg leading-relaxed text-white/70 mb-8">
                Si te hospedas en la Parroquia de San Juan, esta es la ruta hacia el punto
                de salida de la distancia 30K.
              </p>

              <a
                href="https://maps.app.goo.gl/JNSxseoWE2Vy7cZH6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#E74238] text-white px-7 py-4 rounded-md font-semibold hover:bg-black transition"
              >
                Ver ruta en Google Maps
              </a>

            </div>

          </div>

          {/* CUNUYACU */}
          <div className="border-2 border-[#E74238] rounded-xl p-8 md:p-12 mt-8">

            <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-start">

              <div className="text-5xl md:text-7xl font-bold italic text-[#E74238]">
                30K
              </div>

              <div>

                <p className="text-[#E74238] text-sm uppercase tracking-[0.2em] font-semibold mb-3">
                  Abasto especial
                </p>

                <h3 className="text-3xl md:text-4xl font-bold mb-5">
                  Comunidad Cunuyacu
                </h3>

                <p className="text-lg md:text-xl leading-relaxed text-[#331010]/75 mb-6">
                  En el recorrido de los 30K existirá un punto de abasto
                  especial en la comunidad de Cunuyacu. Este punto será
                  accesible para familiares y equipos que deseen brindar
                  apoyo a sus corredores en este sector.
                </p>

                <p className="text-base leading-relaxed text-[#331010]/65 mb-8">
                  La organización comunicará oportunamente las condiciones
                  y disposiciones para el acceso y apoyo externo durante la
                  competencia.
                </p>

                <a
                  href="https://maps.app.goo.gl/dX6yeQpADWAcAytU6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#331010] text-white px-7 py-4 rounded-md font-semibold hover:bg-[#E74238] transition"
                >
                  Ver Cunuyacu en Google Maps
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* RECOMENDACIONES */}
        <section className="bg-[#E74238] text-white py-20 md:py-24">

          <div className="max-w-6xl mx-auto px-6 md:px-12">

            <p className="text-white/70 uppercase tracking-[0.28em] text-sm font-semibold mb-5">
              Antes de llegar
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mb-12">
              Llega preparado.
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div>
                <div className="text-4xl font-bold mb-4">
                  01
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  Planifica
                </h3>

                <p className="text-white/85 leading-relaxed">
                  Revisa tu ruta, calcula tu tiempo de traslado y procura
                  llegar con suficiente anticipación.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold mb-4">
                  02
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  Prepárate para la altura
                </h3>

                <p className="text-white/85 leading-relaxed">
                  Todas las distancias se desarrollan en territorio de alta
                  montaña. El frío, viento, sol, niebla y cambios de clima
                  forman parte del entorno.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold mb-4">
                  03
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  Respeta el territorio
                </h3>

                <p className="text-white/85 leading-relaxed">
                  Utiliza los accesos autorizados, respeta las comunidades,
                  no dejes residuos y recuerda que estás entrando en un
                  territorio natural protegido.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* CIERRE */}
        <section className="bg-[#331010] text-white py-20 md:py-24">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <p className="text-2xl md:text-4xl font-bold italic leading-relaxed">
              Llegar también significa entrar en un territorio
              <br className="hidden md:block" />
              que merece ser vivido y respetado.
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