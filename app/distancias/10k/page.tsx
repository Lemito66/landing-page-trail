"use client"

import Link from "next/link"

const KOMOOT_URL = "https://www.komoot.com/es-es/tour/3356773629"
const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdO62MyFEKPG21uSatdoIG62pdWmV-PzhLDEQU9EjGE_UVRkg/viewform?usp=send_form"

const stats = [
  ["11,2 km", "Distancia real"],
  ["330 m+", "Desnivel positivo"],
  ["330 m−", "Desnivel negativo"],
  ["4.360 m", "Altura máxima"],
  ["4.050 m", "Altura mínima"],
  ["3 horas", "Tiempo máximo"],
]

const required = [
  "Mochila de trail que permita transportar el material obligatorio",
  "Depósito de agua de mínimo 1 litro",
  "Chaqueta tipo cortavientos con capucha",
  "Calzado adecuado para trail running",
  "Capa térmica o pantalón lycra",
  "Dispositivo GPS (reloj o teléfono) con la ruta cargada",
  "Dorsal colocado en la parte frontal y visible",
  "Manta térmica de supervivencia",
  "Teléfono celular con saldo",
  "Silbato",
  "Vaso personal plegable de silicona",
  "Banda elástica adhesiva",
  "Bolso del kit para guardar la basura generada durante la carrera",
]

const recommended = [
  "Luz frontal",
  "Gorra",
  "Badana larga multiuso",
  "Guantes impermeables",
  "Gafas de sol",
  "Crema solar",
  "Bastones de trail",
]

export default function TenKPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F2E7E7] text-[#331010]">
      {/* HERO */}
      <section className="relative isolate flex min-h-[76vh] items-end overflow-hidden bg-[#331010] text-white">
        <img src="/10k-los-dos-gigantes.png" alt="Paisaje de alta montaña del Chimborazo" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#331010] via-[#331010]/55 to-black/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#331010]/70 via-transparent to-transparent" />
        <Link href="/" className="absolute right-5 top-5 z-20 border border-white/55 bg-[#331010]/40 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur transition hover:bg-white hover:text-[#331010] md:right-10 md:top-8">Inicio</Link>
        <div className="mx-auto w-full max-w-7xl px-6 pb-14 pt-32 md:px-12 md:pb-20 lg:px-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#E74238] md:text-sm">Los Dos Gigantes Ultra Trail · Entre el sol y la sombra</p>
          <h1 className="max-w-4xl text-7xl font-black leading-[0.88] tracking-tight sm:text-8xl md:text-9xl">10<span className="text-[#E74238]">K</span></h1>
          <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed md:text-3xl">La altura cambia las reglas. La montaña marca el ritmo.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={REGISTRATION_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#E74238] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.18em] transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#331010]">Inscríbete ahora ↗</a>
            <a href="#recorrido" className="inline-flex items-center justify-center gap-3 border border-white/60 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] backdrop-blur transition duration-300 hover:bg-white hover:text-[#331010]">Explora el recorrido ↓</a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-full bg-[#E74238]" />
      </section>

      {/* DATOS PRINCIPALES */}
      <section className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-2 border border-[#331010]/10 bg-white shadow-xl shadow-[#331010]/10 md:grid-cols-3 lg:grid-cols-6">
          {stats.map(([value, label], i) => <div key={label} className={`group px-4 py-6 transition-colors duration-300 hover:bg-[#331010] md:px-5 md:py-7 ${i ? "border-l border-[#331010]/10" : ""}`}>
            <p className="text-2xl font-black tracking-tight text-[#E74238] transition-colors group-hover:text-white md:text-3xl">{value}</p>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#331010]/65 transition-colors group-hover:text-white/70 md:text-xs">{label}</p>
          </div>)}
        </div>
      </section>

      {/* LA EXPERIENCIA */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E74238]">La experiencia</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">Aprende a correr <span className="block text-[#E74238]">en altura.</span></h2>
          <div className="mt-7 h-1 w-20 bg-[#E74238]" />
        </div>
        <div className="space-y-5 text-base leading-8 text-[#331010]/80 md:text-lg">
          <p><strong className="text-[#331010]">11,2 kilómetros para descubrir que en la alta montaña todo se siente diferente.</strong> El Chimborazo te acompaña durante la ruta mientras avanzas por paisajes abiertos hasta entrar en un bosque de <em>polylepis</em>, un rincón andino que cambia el carácter del recorrido.</p>
          <p>Después llega el ascenso, con una pendiente cercana al 13 %, y la montaña vuelve a abrirse ante ti: un inmenso arenal donde correrás durante casi cuatro kilómetros con el Chimborazo frente a tus ojos. El paisaje impone amplitud y respeto; cada paso se convierte en una forma de encontrarte con este territorio ancestral.</p>
          <p>La ruta termina con un último ascenso de aproximadamente 1,22 km hacia la meta. No es solo una distancia para correr rápido: es una oportunidad para dosificar el esfuerzo, escuchar el cuerpo y descubrir cómo responde cuando el aire es distinto.</p>
        </div>
      </section>

      {/* PERFIL Y MAPA */}
      <section id="recorrido" className="bg-[#331010] py-20 text-[#F2E7E7] md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E74238]">Conoce el recorrido</p>
              <h2 className="mt-4 text-4xl font-black md:text-6xl">El perfil del 10K</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/70">Altura, senderos y un paisaje que cambia a cada paso. Estudia el perfil antes de llegar a la línea de salida.</p>
            </div>
            <a href={KOMOOT_URL} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-3 border border-white/45 px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] transition hover:bg-white hover:text-[#331010]">Ver ruta en Komoot ↗</a>
          </div>
          <div className="mt-10 overflow-hidden border border-white/15 bg-white p-3 shadow-2xl shadow-black/20 md:p-5">
            <img src="/30k-perfil.png" alt="Perfil de ruta de Los Dos Gigantes Ultra Trail 10K" className="h-auto w-full transition duration-700 hover:scale-[1.015]" />
          </div>
          <p className="mt-5 border-l-2 border-[#E74238] pl-5 text-sm leading-relaxed text-white/70">Lleva el recorrido cargado en tu dispositivo GPS y revisa la ruta antes de la salida.</p>
        </div>
      </section>

      {/* ABASTO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E74238]">Hidratación en ruta</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">Un abasto bien gestionado, marca la diferencia.</h2>
          <p className="mt-5 text-base leading-relaxed text-[#331010]/70 md:text-lg">En el kilómetro 5, antes del ascenso principal, encontrarás un punto para reponer líquidos y energía. Lleva tu propia reserva de agua y administra lo que necesitas para continuar.</p>
        </div>
        <div className="mt-10 grid gap-0 overflow-hidden border border-[#331010]/10 bg-white md:grid-cols-[0.65fr_1.35fr]">
          <div className="flex min-h-52 flex-col justify-between bg-[#2F3F2F] p-7 text-white md:p-9">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/65">Punto de abasto</span>
            <div><p className="text-6xl font-black text-[#E74238]">KM 5</p><p className="mt-2 text-lg font-semibold">Antes del ascenso principal</p></div>
          </div>
          <div className="p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E74238]">Disponible</p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Agua", "Gaseosa", "Hidratante", "Snacks"].map((item) => <div key={item} className="border border-[#331010]/10 bg-[#F2E7E7]/60 px-4 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#E74238]"><span className="text-sm font-bold">{item}</span></div>)}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#331010]/65">Aprovecha este punto antes de iniciar la subida. No dependas exclusivamente del abasto para hidratarte.</p>
          </div>
        </div>
      </section>

      {/* SALIDA Y EMERGENCIAS */}
      <section className="bg-[#E9DEDE] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 md:px-12 lg:px-20">
          {[["Salida", "08:00", "Hora de partida del 10K"], ["Tiempo máximo", "3 horas", "Gestiona tu esfuerzo durante todo el recorrido"], ["Emergencias", "911", "Organización: 098 2121 157"]].map(([label, value, detail]) => <div key={label} className="border-t-4 border-[#E74238] bg-white p-7 shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E74238]">{label}</p><p className="mt-3 text-4xl font-black">{value}</p><p className="mt-2 text-sm text-[#331010]/65">{detail}</p></div>)}
        </div>
      </section>

      {/* MATERIAL OBLIGATORIO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E74238]">Prepárate para la montaña</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Equipo obligatorio</h2>
            <p className="mt-6 leading-relaxed text-[#331010]/70">Las condiciones de alta montaña pueden cambiar rápidamente. Todo corredor debe presentarse con el material exigido para tomar la salida con seguridad.</p>
            <div className="mt-8 border-l-4 border-[#E74238] bg-white p-5"><p className="font-bold">Importante</p><p className="mt-2 text-sm leading-relaxed text-[#331010]/70">Los corredores deben usar el vaso personal plegable y guardar sus residuos en el bolso del kit para reducir el uso de plásticos y proteger la Reserva.</p></div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {required.map((item, i) => <div key={item} className="group flex gap-3 border border-[#331010]/10 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#E74238] hover:shadow-lg"><span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#331010] text-xs font-black text-white transition-colors group-hover:bg-[#E74238]">{String(i + 1).padStart(2, "0")}</span><p className="text-sm leading-relaxed">{item}</p></div>)}
          </div>
        </div>
      </section>

      {/* RECOMENDADO Y CONSERVACIÓN */}
      <section className="bg-[#2F3F2F] py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-2 lg:px-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E74238]">Recomendado</p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">Equipo altamente recomendable</h2>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {recommended.map((item) => <div key={item} className="border border-white/15 bg-white/5 p-4 text-sm transition hover:bg-white/10"><span className="mr-2 text-[#E74238]">✦</span>{item}</div>)}
            </div>
          </div>
          <div className="border border-white/15 bg-[#331010]/40 p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E74238]">Respeto por el territorio</p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">La montaña no deja basura.</h2>
            <p className="mt-5 leading-relaxed text-white/75">Los Dos Gigantes Ultra Trail se desarrolla en la Reserva de Producción de Fauna Chimborazo. Nos acogemos a sus lineamientos y prohibiciones para conservar y proteger este ecosistema.</p>
            <p className="mt-4 leading-relaxed text-white/75">Cada participante debe guardar los residuos generados durante la carrera en el bolso entregado en el kit. Arrojar basura o incumplir esta norma podrá ser motivo de descalificación conforme a las reglas del evento.</p>
            <div className="mt-6 border-t border-white/15 pt-5 text-sm font-bold uppercase tracking-[0.12em] text-[#E74238]">Mínimo uso de plásticos · Máximo respeto por la montaña</div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative isolate overflow-hidden bg-[#331010] px-6 py-20 text-center text-white md:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#E74238]/20 via-[#331010] to-[#331010]" />
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#E74238]">Los Dos Gigantes Ultra Trail</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">Tu primer gran encuentro con la altura.</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/70">Prepárate, estudia la ruta y descubre cómo se siente correr bajo la presencia del Chimborazo.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={REGISTRATION_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#E74238] px-8 py-4 text-sm font-extrabold uppercase tracking-[0.18em] transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#331010]">Inscríbete ↗</a>
          <a href={KOMOOT_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] transition duration-300 hover:bg-white hover:text-[#331010]">Ver ruta / GPX ↗</a>
        </div>
        <p className="mt-8 text-xs text-white/45">Emergencias: 911 · Organización: 098 2121 157</p>
      </section>
    </main>
  )
}
