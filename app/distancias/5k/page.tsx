"use client"

import { useState } from "react"

const KOMOOT_URL = "https://www.komoot.com/es-es/tour/3362846588"
const START_URL = "https://maps.app.goo.gl/Fqvdhk7Cda7AUaSV7"
const REGISTRATION_URL = "https://forms.gle/ncoJiAq5g4qpDFLTA"

const stats = [
  ["7,56 km", "Distancia real"],
  ["+300 m", "Desnivel positivo"],
  ["−300 m", "Desnivel negativo"],
  ["4.550 m", "Altitud máxima aprox."],
  ["08:30", "Hora de salida"],
  ["2 h 30 min", "Tiempo máximo"],
]

const stages = [
  {
    number: "01",
    title: "La entrada a la alta montaña",
    distance: "Km 0–1,16",
    detail:
      "La ruta comienza en el ingreso a la Reserva de Producción de Fauna Chimborazo. Durante los primeros 1,16 km te adentras en el sendero y empiezas a adaptar el ritmo a la altitud y al terreno.",
    terrain: "Sendero de montaña",
  },
  {
    number: "02",
    title: "El ascenso de arenal y roca",
    distance: "Ascenso · +160 m aprox.",
    detail:
      "Llega el tramo más exigente: una subida entre arenal y roca volcánica, con el Chimborazo acompañándote de frente. Avanza con pasos cortos, regula la respiración y evita salir demasiado rápido.",
    terrain: "Arenal y roca volcánica",
  },
  {
    number: "03",
    title: "Un respiro en el camino carrozable",
    distance: "Cerca de 2 km",
    detail:
      "Al coronar la subida, el recorrido continúa por un camino carrozable de terreno más compacto. Aprovecha este tramo para recuperar el control del esfuerzo y mantener una hidratación constante.",
    terrain: "Camino compacto",
  },
  {
    number: "04",
    title: "Descenso sobre arenal",
    distance: "1,48 km · −170 m aprox.",
    detail:
      "Un descenso arenoso que invita a disfrutar, pero requiere atención: el suelo puede desplazarse bajo los pies. Mantén el control, mira unos metros adelante y adapta la velocidad a las condiciones.",
    terrain: "Arenal",
  },
  {
    number: "05",
    title: "El último ascenso hacia la meta",
    distance: "1,95 km · +110 m aprox.",
    detail:
      "El tramo final vuelve a combinar arenal y roca. Con el Chimborazo a tu flanco derecho, administra la energía que queda y disfruta el momento de conquistar tu primera experiencia de carrera en altura.",
    terrain: "Terreno mixto: arenal y roca",
  },
]

const requiredEquipment = [
  "Mochila de trail que permita transportar el material obligatorio",
  "Depósito de agua de mínimo 1 litro",
  "Chaqueta cortavientos con capucha",
  "Calzado adecuado para trail running",
  "Dorsal colocado en la parte frontal y claramente visible",
  "Silbato",
  "Vaso personal plegable de silicona",
  "Bolso del kit para guardar los residuos generados",
]

const recommendedEquipment = [
  "Chompa impermeable",
  "Capa térmica o pantalón tipo lycra",
  "Dispositivo GPS (reloj o teléfono) con la ruta cargada",
  "Manta térmica de supervivencia",
  "Teléfono celular con saldo",
  "Banda elástica adhesiva",
  "Visera",
  "Buff",
  "Guantes",
]

export default function FiveKPage() {
  const [openStage, setOpenStage] = useState("01")
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [showRecommended, setShowRecommended] = useState(false)

  const toggleItem = (item: string) => {
    setCheckedItems((current) =>
      current.includes(item)
        ? current.filter((value) => value !== item)
        : [...current, item]
    )
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#F2E7E7] text-[#331010]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#331010] text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#E74238]/25 via-[#331010] to-[#171010]" />
        <div className="absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full border border-white/10 md:h-[30rem] md:w-[30rem]" />
        <div className="absolute -right-8 top-24 -z-10 h-56 w-56 rounded-full border border-white/10 md:h-[25rem] md:w-[25rem]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-20 lg:py-28">
          <div>
            <a href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/65 transition hover:text-white">
              <span aria-hidden="true">←</span> Inicio CHES
            </a>
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.35em] text-[#E74238]">
              Los Dos Gigantes Ultra Trail · 13 diciembre 2026
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              5K
              <span className="mt-3 block text-[#F2E7E7]">El primer encuentro</span>
              <span className="block text-[#E74238]">con la altura.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
              Una distancia corta en kilómetros, enorme en experiencia. A más de
              4.000 metros, el arenal, la roca volcánica y la presencia del
              Chimborazo convierten cada paso en un desafío distinto.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={REGISTRATION_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#E74238] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#331010]">
                Inscríbete · $30 ↗
              </a>
              <a href="#recorrido" className="inline-flex items-center justify-center border border-white/35 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] transition hover:bg-white hover:text-[#331010]">
                Explorar recorrido ↓
              </a>
            </div>
          </div>
          <div className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E74238]">Tu desafío en cifras</p>
            <div className="mt-6 grid grid-cols-2 gap-5">
              <div>
                <p className="text-3xl font-black md:text-4xl">7,56</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">Kilómetros</p>
              </div>
              <div>
                <p className="text-3xl font-black md:text-4xl">4.550 m</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">Altitud máxima aprox.</p>
              </div>
              <div>
                <p className="text-3xl font-black md:text-4xl">+300 m</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">Desnivel positivo</p>
              </div>
              <div>
                <p className="text-3xl font-black md:text-4xl">2:30 h</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">Tiempo máximo</p>
              </div>
            </div>
            <p className="mt-7 border-t border-white/15 pt-5 text-sm leading-6 text-white/65">
              Salida: 08:30 · Abasto de líquidos en el km 2,78
            </p>
          </div>
        </div>
      </section>

      {/* DATOS TÉCNICOS */}
      <section className="relative z-10 mx-auto -mt-1 max-w-7xl px-5 py-8 md:px-10">
        <div className="grid grid-cols-2 border border-[#331010]/10 bg-white shadow-xl shadow-[#331010]/10 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map(([value, label], index) => (
            <div key={label} className={`group px-4 py-6 transition-colors duration-300 hover:bg-[#331010] md:px-5 md:py-7 ${index % 2 ? "border-l border-[#331010]/10" : ""}`}>
              <p className="text-2xl font-black tracking-tight text-[#E74238] transition-colors group-hover:text-white md:text-3xl">{value}</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#331010]/65 transition-colors group-hover:text-white/70 md:text-xs">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E74238]">La experiencia 5K</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            La montaña marca el ritmo.
          </h2>
          <div className="mt-7 h-1 w-20 bg-[#E74238]" />
          <p className="mt-7 text-lg font-semibold leading-8">
            Diseñada para quienes quieren descubrir el trail de altura sin
            subestimar la montaña.
          </p>
        </div>
        <div className="space-y-5 text-base leading-8 text-[#331010]/80 md:text-lg">
          <p>
            El 5K es una primera aproximación a la alta montaña de Los Dos
            Gigantes. La ruta empieza en el ingreso a la Reserva de Producción
            de Fauna Chimborazo, por encima de los 4.000 metros sobre el nivel
            del mar, y te introduce en el terreno característico del entorno
            del gigante de los Andes.
          </p>
          <p>
            A lo largo de 7,56 kilómetros encontrarás senderos de arenal, roca
            volcánica y un tramo de camino compacto. El ascenso principal exige
            paciencia y pasos firmes; después, el descenso sobre arena pone a
            prueba el control y la atención.
          </p>
          <p>
            La chuquiragua —planta emblemática de los páramos andinos—, los
            amplios espacios abiertos y el Chimborazo como presencia constante
            convierten la ruta en algo más que una distancia corta. Es una
            experiencia para aprender a dosificar el esfuerzo, escuchar al
            cuerpo y respetar el entorno.
          </p>
        </div>
      </section>

      {/* RECORRIDO INTERACTIVO */}
      <section id="recorrido" className="bg-[#331010] py-16 text-[#F2E7E7] md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E74238]">Explora cada tramo</p>
              <h2 className="mt-4 text-4xl font-black md:text-6xl">Así se vive el 5K.</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/65">
                Abre cada etapa para conocer el terreno y el desafío que te espera.
              </p>
            </div>
            <a href={KOMOOT_URL} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-3 border border-white/40 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] transition hover:bg-white hover:text-[#331010]">
              Ver ruta en Komoot ↗
            </a>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-3">
              {stages.map((stage) => {
                const isOpen = openStage === stage.number
                return (
                  <button
                    key={stage.number}
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenStage(isOpen ? "" : stage.number)}
                    className={`w-full border p-5 text-left transition duration-300 ${isOpen ? "border-[#E74238] bg-white/10" : "border-white/15 bg-white/[0.03] hover:border-white/40"}`}
                  >
                    <span className="flex items-start gap-4">
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center text-sm font-black ${isOpen ? "bg-[#E74238] text-white" : "bg-white/10 text-white/70"}`}>{stage.number}</span>
                      <span className="flex-1">
                        <span className="block text-base font-bold md:text-lg">{stage.title}</span>
                        <span className="mt-1 block text-xs uppercase tracking-[0.13em] text-white/50">{stage.distance}</span>
                      </span>
                      <span className="text-xl text-[#E74238]" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </span>
                    {isOpen && (
                      <span className="mt-4 block border-t border-white/15 pt-4 text-sm leading-7 text-white/75">
                        {stage.detail}
                        <span className="mt-3 block text-xs font-bold uppercase tracking-[0.15em] text-[#E74238]">Terreno: {stage.terrain}</span>
                      </span>
                    )}
                  </button>
                )
              })}
            </div>

            <div className="border border-white/15 bg-white/[0.04] p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E74238]">Perfil altimétrico</p>
              <h3 className="mt-3 text-2xl font-black md:text-3xl">Conoce el desnivel antes de salir.</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Revisa el perfil de la ruta y carga el recorrido en tu dispositivo GPS antes del evento.
              </p>
              <div className="mt-6 overflow-hidden border border-[#331010]/10 bg-white p-3">
                <img
                  src="/5k-perfil.png"
                  alt="Perfil altimétrico de la distancia 5K de Los Dos Gigantes Ultra Trail"
                  className="h-auto w-full"
                  onError={(event) => {
                    event.currentTarget.style.display = "none"
                  }}
                />
                <p className="p-4 text-sm text-[#331010]/70">
                  Si el perfil no aparece, verifica que el archivo esté en la carpeta public y se llame exactamente <strong>5k-perfil.png</strong>.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="border border-white/10 p-4">
                  <p className="text-2xl font-black text-[#E74238]">4.250 m</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/55">Altitud mínima aprox.</p>
                </div>
                <div className="border border-white/10 p-4">
                  <p className="text-2xl font-black text-[#E74238]">4.558 m</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/55">Punto más alto informado</p>
                </div>
              </div>
              <a href={START_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center border border-white/30 px-5 py-4 text-sm font-bold uppercase tracking-[0.13em] transition hover:bg-white hover:text-[#331010]">
                Ver salida en Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABASTO Y LOGÍSTICA */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E74238]">Planifica tu esfuerzo</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Un abasto en el camino.</h2>
            <p className="mt-5 leading-8 text-[#331010]/75">
              Encontrarás un punto de abasto aproximadamente en el kilómetro
              2,78 con líquidos hidratantes. Lleva al menos un litro de agua
              desde la salida y no dependas únicamente del abasto para mantener
              tu hidratación.
            </p>
          </div>
          <div className="grid gap-0 border border-[#331010]/10 bg-white sm:grid-cols-2">
            <div className="bg-[#2F3F2F] p-7 text-white md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Punto de abasto</p>
              <p className="mt-3 text-5xl font-black text-[#E74238]">KM 2,78</p>
              <p className="mt-3 text-sm leading-6 text-white/70">Líquidos hidratantes</p>
            </div>
            <div className="p-7 md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E74238]">Datos de carrera</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div><dt className="text-[#331010]/55">Salida</dt><dd className="mt-1 text-xl font-black">08:30</dd></div>
                <div><dt className="text-[#331010]/55">Tiempo máximo</dt><dd className="mt-1 text-xl font-black">2 h 30 min</dd></div>
                <div><dt className="text-[#331010]/55">Inscripción</dt><dd className="mt-1 text-xl font-black">$30</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPO INTERACTIVO */}
      <section className="bg-[#E9DEDE] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E74238]">Antes de la salida</p>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">Tu equipo, listo.</h2>
            <p className="mt-5 leading-7 text-[#331010]/70">
              Marca los elementos que ya tienes preparados. Esta lista funciona como una comprobación visual en esta página; no sustituye la revisión del material por la organización.
            </p>
          </div>

          <div className="mt-8 border border-[#331010]/10 bg-white p-5 md:p-8">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <h3 className="text-2xl font-black">Material obligatorio</h3>
              <span className="text-sm font-bold text-[#E74238]">{checkedItems.filter((item) => requiredEquipment.includes(item)).length} de {requiredEquipment.length} listos</span>
            </div>
            <div className="mt-5 h-2 overflow-hidden bg-[#F2E7E7]">
              <div className="h-full bg-[#E74238] transition-all duration-300" style={{ width: `${(checkedItems.filter((item) => requiredEquipment.includes(item)).length / requiredEquipment.length) * 100}%` }} />
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {requiredEquipment.map((item) => {
                const checked = checkedItems.includes(item)
                return (
                  <label key={item} className={`flex cursor-pointer items-start gap-3 border p-4 transition ${checked ? "border-[#2F3F2F] bg-[#2F3F2F]/5" : "border-[#331010]/10 hover:border-[#E74238]"}`}>
                    <input type="checkbox" checked={checked} onChange={() => toggleItem(item)} className="mt-1 h-4 w-4 accent-[#E74238]" />
                    <span className={`text-sm leading-6 ${checked ? "text-[#331010]/55 line-through" : "text-[#331010]"}`}>{item}</span>
                  </label>
                )
              })}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button type="button" onClick={() => setCheckedItems((current) => [...new Set([...current, ...requiredEquipment])])} className="bg-[#331010] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#E74238]">Marcar todo</button>
              <button type="button" onClick={() => setCheckedItems([])} className="border border-[#331010]/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition hover:border-[#E74238]">Limpiar lista</button>
              <button type="button" onClick={() => setShowRecommended((value) => !value)} aria-expanded={showRecommended} className="border border-[#331010]/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition hover:border-[#E74238]">{showRecommended ? "Ocultar recomendado" : "Ver equipo recomendado"}</button>
            </div>
            {showRecommended && (
              <div className="mt-8 border-t border-[#331010]/10 pt-6">
                <h4 className="text-xl font-black">Equipo recomendado</h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {recommendedEquipment.map((item) => (
                    <div key={item} className="border border-[#331010]/10 bg-[#F2E7E7]/50 p-4 text-sm leading-6">
                      <span className="mr-2 text-[#E74238]">✦</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SEGURIDAD Y CONSERVACIÓN */}
      <section className="bg-[#2F3F2F] py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-2 lg:px-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E74238]">Corre con criterio</p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">La altura no se improvisa.</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-white/75">
              <p><strong className="text-white">Regula el esfuerzo.</strong> A más de 4.000 m s. n. m., corre a una intensidad que te permita controlar la respiración. No compitas contra el ritmo de otras personas.</p>
              <p><strong className="text-white">Hidrátate desde el inicio.</strong> Lleva el mínimo exigido de un litro de agua y bebe de forma regular; no esperes a tener mucha sed ni dependas solo del punto de abasto.</p>
              <p><strong className="text-white">Prepárate para cambios de clima.</strong> Puede haber sol intenso, ambiente seco, lluvia, nieve o viento fuerte. Lleva las capas recomendadas y protege la piel del sol.</p>
              <p><strong className="text-white">Atiende las señales del cuerpo.</strong> Si aparecen mareo intenso, confusión, dificultad respiratoria inusual o un deterioro importante, detente y solicita asistencia al personal de carrera.</p>
              <p><strong className="text-white">Respeta la Reserva.</strong> No arrojes residuos, permanece en la ruta señalizada y evita dañar la vegetación o molestar a la fauna.</p>
            </div>
          </div>
          <div className="border border-white/15 bg-[#331010]/35 p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E74238]">El territorio importa</p>
            <h3 className="mt-4 text-3xl font-black">Deja solo tus huellas.</h3>
            <p className="mt-5 leading-7 text-white/70">
              La ruta se desarrolla en la Reserva de Producción de Fauna Chimborazo. Guarda todos tus residuos en el bolso entregado en el kit, utiliza tu vaso personal y sigue las instrucciones de la organización para reducir el impacto sobre este ecosistema.
            </p>
            <div className="mt-7 border-t border-white/15 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Emergencias</p>
              <p className="mt-2 text-3xl font-black">911</p>
              <p className="mt-2 text-sm text-white/70">Organización: 098 2121 157</p>
            </div>
          </div>
        </div>
      </section>

      {/* KIT E INSCRIPCIÓN */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E74238]">Tu inscripción incluye</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">Llega listo al desafío.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-[#331010]/70">
              Además de tu participación en el 5K, recibirás el kit del corredor y contarás con servicios de apoyo durante la experiencia.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Bolso del corredor", "Camiseta", "Dorsal de competición", "Seguridad en ruta", "Punto de abasto", "Fotografía"].map((item) => (
                <div key={item} className="flex items-center gap-3 border border-[#331010]/10 bg-white p-4">
                  <span className="flex h-8 w-8 items-center justify-center bg-[#2F3F2F] text-sm text-white">✓</span>
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[#331010] p-7 text-white md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E74238]">Inscripciones abiertas</p>
              <p className="mt-4 text-6xl font-black">$30</p>
              <p className="mt-2 text-sm text-white/60">Distancia 5K · Los Dos Gigantes Ultra Trail</p>
              <p className="mt-6 leading-7 text-white/70">Tu primer encuentro con la altura empieza aquí. Prepárate con tiempo, revisa el material y estudia la ruta.</p>
            </div>
            <div className="mt-8 space-y-3">
              <a href={REGISTRATION_URL} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center bg-[#E74238] px-6 py-4 text-sm font-extrabold uppercase tracking-[0.15em] transition hover:bg-white hover:text-[#331010]">Inscribirme al 5K ↗</a>
              <a href={KOMOOT_URL} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center border border-white/30 px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] transition hover:bg-white hover:text-[#331010]">Revisar ruta en Komoot ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative isolate overflow-hidden bg-[#331010] px-6 py-20 text-center text-white md:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#E74238]/20 via-[#331010] to-[#331010]" />
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#E74238]">Los Dos Gigantes Ultra Trail</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">Una distancia corta. Una experiencia que se queda contigo.</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/70">El Chimborazo te espera. Corre con respeto, escucha a la montaña y conquista tu primer desafío en altura.</p>
        <a href={REGISTRATION_URL} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center justify-center bg-[#E74238] px-8 py-4 text-sm font-extrabold uppercase tracking-[0.18em] transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#331010]">Inscríbete al 5K ↗</a>
      </section>
    </main>
  )
}
