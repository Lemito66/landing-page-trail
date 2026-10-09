"use client"

import type React from "react"
import Image from "next/image"
import {
  Mountain,
  Map,
  Route,
  Clock,
  Droplets,
  Apple,
  Waves,
  Wind,
  ShieldCheck,
  Smartphone,
  Phone,
  Leaf,
  Backpack,
  Utensils,
  Trash2,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
} from "lucide-react"

export default function TwentyKPage() {
  return (
    <main className="min-h-screen bg-[#F2E7E7] text-[#331010]">

      {/* BOTÓN INICIO */}
      <div className="absolute right-6 top-6 z-30 md:right-10 md:top-8">
        <a
          href="/"
          className="inline-flex items-center border border-[#F2E7E7]/40 bg-[#331010]/40 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-[#F2E7E7] backdrop-blur-sm transition-all duration-300 hover:bg-[#F2E7E7] hover:text-[#331010]"
        >
          Inicio
        </a>
      </div>

      {/* HERO */}
      <section className="relative min-h-[72vh] overflow-hidden bg-[#331010]">
        <Image
          src="/20k-los-dos-gigantes.png"
          alt="Los Dos Gigantes Ultra Trail 20K"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#331010] via-[#331010]/45 to-transparent" />

        <div className="relative z-10 flex min-h-[72vh] items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-14 md:px-10 md:pb-20">
            <div className="max-w-4xl">

              <p className="mb-4 text-sm font-medium tracking-[0.35em] text-[#F2E7E7]/80">
                LOS DOS GIGANTES ULTRA TRAIL
              </p>

              <h1 className="text-6xl font-bold tracking-tight text-[#F2E7E7] md:text-8xl">
                20 KM
              </h1>

              <p className="mt-4 text-xl font-light tracking-wide text-[#F2E7E7] md:text-2xl">
                1200 M+
              </p>

              <p className="mt-6 max-w-3xl text-lg font-medium uppercase tracking-[0.12em] text-[#F2E7E7] md:text-2xl">
                Distancia que te llevará hasta la Laguna Cóndor Cocha a 5100 msnm
              </p>

            </div>
          </div>
        </div>
      </section>


      {/* DATOS PRINCIPALES */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">

          <DataCard
            label="Distancia"
            value="21 KM"
          />

          <DataCard
            label="Desnivel positivo"
            value="1200 M+"
          />

          <DataCard
            label="Desnivel negativo"
            value="1060 M-"
          />

          <DataCard
            label="Punto más alto"
            value="5100 MSNM"
          />

          <DataCard
            label="Punto más bajo"
            value="4020 MSNM"
          />

          <DataCard
            label="Tiempo máximo"
            value="5H30"
          />

        </div>
      </section>


      {/* LA EXPERIENCIA */}
      <section className="bg-[#331010] text-[#F2E7E7]">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <SectionTitle
            eyebrow="LA EXPERIENCIA"
            title="El desafío alcanza los 5.100 metros"
            dark
          />

          <div className="mt-10 space-y-7 text-lg font-light leading-relaxed md:text-xl">
            <p>
              <strong className="font-semibold">
                21 kilómetros hasta la Laguna Cóndor Cocha, a 5.100 msnm.
              </strong>{" "}
              Este hito del Chimborazo, ubicado en el sector del segundo refugio,
              convierte a los 20K en una de las distancias de trail running que
              más alto lleva a correr en un evento en Ecuador.
            </p>

            <p>
              La primera mitad invita a correr rápido. Pero el ritmo cambia cuando
              comienza el gran ascenso: una subida de seis kilómetros, más de
              1.000 metros de desnivel positivo y una pendiente media del 16 %.
              Aquí las piernas, la resistencia y la capacidad de gestionar el
              esfuerzo se enfrentan a la altura y a un clima impredecible.
            </p>

            <p>
              <strong className="font-semibold">Después de alcanzar la laguna, llega el vértigo del descenso.</strong>{" "}
              Un sendero de arena rápido, utilizado también por los downhillers,
              exige técnica, control y decisión antes de afrontar los últimos
              kilómetros. En esta montaña, no basta con llegar arriba: también
              hay que saber bajar.
            </p>
          </div>
        </div>
      </section>


      {/* RECORRIDO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

        <SectionTitle
          eyebrow="EL RECORRIDO EN DETALLE"
          title="Conoce el perfil de los 20K"
        />

        <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-sm">

          <div className="relative aspect-[16/8] w-full">
            <Image
              src="/20k-perfil.png"
              alt="Perfil altimétrico 20K"
              fill
              className="object-contain p-4 md:p-8"
            />
          </div>

        </div>


        {/* NAVEGACIÓN PERFIL / MAPA / KM A KM */}
        <div className="mt-8 grid grid-cols-3 gap-2 rounded-xl bg-[#331010] p-2">

          <div className="flex items-center justify-center gap-2 rounded-lg bg-[#E74238] px-3 py-4 text-xs font-semibold tracking-wide text-white md:text-sm">
            <Mountain size={16} />
            PERFIL
          </div>

          <div className="flex items-center justify-center gap-2 rounded-lg px-3 py-4 text-xs font-semibold tracking-wide text-[#F2E7E7] md:text-sm">
            <Map size={16} />
            MAPA
          </div>

          <div className="flex items-center justify-center gap-2 rounded-lg px-3 py-4 text-xs font-semibold tracking-wide text-[#F2E7E7] md:text-sm">
            <Route size={16} />
            KM A KM
          </div>

        </div>

      </section>


      {/* ASCENSO PRINCIPAL */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionTitle
            eyebrow="EL GRAN ASCENSO"
            title="La subida que define los 20K"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <DifficultyCard
              number="01"
              difficulty="DIFICULTAD 5"
              slope="Pendiente media 16 %"
              elevation="+1014 M"
            />
            <div className="flex flex-col justify-center rounded-2xl bg-[#331010] p-8 text-[#F2E7E7]">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#F2E7E7]/60">
                ASCENSO A CÓNDOR COCHA
              </p>
              <p className="mt-4 text-3xl font-bold md:text-4xl">6 KM de subida</p>
              <p className="mt-4 text-sm leading-relaxed text-[#F2E7E7]/75">
                Guarda fuerzas, regula el ritmo y gestiona cada paso. La pendiente,
                el desnivel y los 5.100 msnm convierten este tramo en el gran examen
                físico y mental de la distancia.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ABASTOS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionTitle
          eyebrow="ABASTOS"
          title="Tres puntos para gestionar tu energía"
        />

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#331010]/70">
          Revisa dónde están los puntos de asistencia y planifica tu hidratación y alimentación,
          especialmente antes de iniciar el ascenso prolongado hacia la Laguna Cóndor Cocha.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <AidStation
            title="Abasto 1 · Sector de las minas"
            km="KM 10"
            detail="Punto previo al gran ascenso hacia la laguna. Desde aquí comienza una subida de aproximadamente 6 km y +1.100 m de desnivel. Sal bien abastecido."
            items={[
              <span key="water" className="flex items-center gap-2"><Droplets size={16} />Agua</span>,
              <span key="soda" className="flex items-center gap-2"><Waves size={16} />Gaseosa</span>,
              <span key="hydration" className="flex items-center gap-2"><Waves size={16} />Bebida hidratante</span>,
              <span key="snacks" className="flex items-center gap-2"><Apple size={16} />Snacks</span>,
              <span key="sweet-salty" className="flex items-center gap-2"><Utensils size={16} />Alimentos dulces y salados</span>,
            ]}
          />

          <AidStation
            title="Abasto 2 · Refugio Carrel"
            km="KM 15,5"
            detail="Punto compartido por corredores de 20K y 30K. Desvíate unos metros hasta el abasto y luego retoma tu ruta."
            items={[
              <span key="water" className="flex items-center gap-2"><Droplets size={16} />Agua</span>,
              <span key="soda" className="flex items-center gap-2"><Waves size={16} />Gaseosa</span>,
              <span key="hydration" className="flex items-center gap-2"><Waves size={16} />Bebida hidratante</span>,
              <span key="snacks" className="flex items-center gap-2"><Apple size={16} />Snacks</span>,
              <span key="sweet-salty" className="flex items-center gap-2"><Utensils size={16} />Alimentos dulces y salados</span>,
            ]}
          />

          <AidStation
            title="Abasto 3"
            km="KM 18"
            detail="Punto de asistencia indicado para recuperar fuerzas tras el descenso de la laguna y prepararte para los últimos 5 km de arenal y sendero rápido."
            items={[
              <span key="water" className="flex items-center gap-2"><Droplets size={16} />Agua</span>,
              <span key="soda" className="flex items-center gap-2"><Waves size={16} />Gaseosa</span>,
              <span key="hydration" className="flex items-center gap-2"><Waves size={16} />Bebida hidratante</span>,
              <span key="snacks" className="flex items-center gap-2"><Apple size={16} />Snacks</span>,
              <span key="sweet-salty" className="flex items-center gap-2"><Utensils size={16} />Alimentos dulces y salados</span>,
            ]}
          />
        </div>
      </section>


      {/* SALIDA Y CORTE */}
      <section className="bg-[#2F3F2F] text-[#F2E7E7]">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

              <div className="flex items-center gap-3">
                <Clock size={22} />
                <p className="text-sm font-semibold tracking-[0.2em]">
                  HORA DE SALIDA
                </p>
              </div>

              <p className="mt-6 text-5xl font-bold">
                07:30
              </p>

              <p className="mt-3 text-[#F2E7E7]/70">
                7:30 de la mañana
              </p>

            </div>


            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

              <div className="flex items-center gap-3">
                <AlertTriangle size={22} />
                <p className="text-sm font-semibold tracking-[0.2em]">
                  TIEMPO DE CORTE
                </p>
              </div>

              <p className="mt-6 text-5xl font-bold">
                04:00
              </p>

              <p className="mt-3 leading-relaxed text-[#F2E7E7]/70">
                El corte se realizará en el segundo abasto, en el sector del
                Refugio Carrel (KM 15,5), cuatro horas después de la salida:
                hasta las 11:30. Quien no llegue dentro del tiempo establecido
                deberá retirarse; se retirará su dorsal y se colocará el identificativo
                de retiro ubicado en la parte inferior izquierda.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* EQUIPO OBLIGATORIO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

        <SectionTitle
          eyebrow="EQUIPO OBLIGATORIO"
          title="Lo que debes llevar"
        />

        <div className="mt-12 grid gap-3 md:grid-cols-2">

          {[
            "Mochila de trail para transportar el material obligatorio",
            "Reserva alimentaria",
            "Depósito de agua mínimo 1,5 litros",
            "Jacket con capucha impermeable",
            "Zapatillas adecuadas para trail running · recomendación: taco de 5 mm",
            "Capa térmica / pantalón lycra",
            "Dispositivo GPS (reloj, teléfono, etc.) con la ruta cargada",
            "Dorsal colocado en la parte frontal y visible",
            "Manta térmica de supervivencia",
            "Teléfono celular con saldo",
            "Silbato",
            "Vaso personal plegable de silicona",
            "Venda elástica adhesiva",
            "Bolsa o pouch entregado en el kit para los residuos personales",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl bg-white p-5"
            >
              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-[#E74238]"
              />
              <span className="text-sm leading-relaxed">
                {item}
              </span>
            </div>
          ))}

        </div>

        <div className="mt-8 rounded-xl border border-[#E74238]/30 bg-[#E74238]/5 p-6">

          <div className="flex items-start gap-4">

            <Trash2
              size={24}
              className="mt-1 shrink-0 text-[#E74238]"
            />

            <div>
              <h3 className="font-semibold">
                Política de residuos
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#331010]/70">
                Todo residuo deberá ser colocado en la bolsa destinada
                para este fin. Arrojar residuos durante el recorrido
                o ser identificado por el personal de organización
                con residuos fuera de la bolsa será motivo de
                descalificación.
              </p>

            </div>

          </div>

        </div>

        <div className="mt-4 rounded-xl bg-[#331010] p-6 text-sm leading-relaxed text-[#F2E7E7]">
          Un corredor que no cuente con el material obligatorio
          no podrá tomar la salida.
        </div>

      </section>


      {/* CONSERVACIÓN */}
      <section className="bg-[#F2E7E7]">

        <div className="mx-auto max-w-5xl px-6 pb-20 md:px-10 md:pb-28">

          <div className="rounded-2xl border border-[#2F3F2F]/15 bg-[#2F3F2F]/5 p-8 md:p-10">

            <div className="flex items-start gap-4">

              <Leaf
                size={28}
                className="mt-1 shrink-0 text-[#2F3F2F]"
              />

              <div>

                <h3 className="text-xl font-semibold">
                  Corre dentro de un territorio protegido
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-[#331010]/75">
                  Los Dos Gigantes Ultra Trail se desarrolla dentro
                  de la Reserva de Producción de Fauna Chimborazo.
                  Respetamos las normas de conservación del territorio
                  y reducimos al mínimo el uso de plásticos.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* RECOMENDADO */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

          <SectionTitle
            eyebrow="EQUIPO RECOMENDADO"
            title="Elementos que pueden marcar la diferencia"
          />

          <div className="mt-12 grid gap-4 md:grid-cols-3">

            <RecommendationCard text="Pantalón impermeable" />
            <RecommendationCard text="Frontal" />
            <RecommendationCard text="Gorra" />
            <RecommendationCard text="Badana larga multiuso" />
            <RecommendationCard text="Guantes impermeables" />
            <RecommendationCard text="Gafas de sol" />
            <RecommendationCard text="Crema solar" />
            <RecommendationCard text="Bastones de trail" />

          </div>

        </div>

      </section>


      {/* OPCIONAL */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">

        <SectionTitle
          eyebrow="OPCIONAL"
          title="Para tu estrategia personal"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">

          <RecommendationCard text="Vaselina / crema antirozaduras" />
          <RecommendationCard text="Mínimo $10 para contingencias" />

        </div>

      </section>


      {/* TERRENO */}
      <section className="bg-[#331010] text-[#F2E7E7]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionTitle
            eyebrow="TERRENO"
            title="El terreno también es parte del desafío"
            dark
          />

          <div className="mt-12 max-w-3xl">
            <h3 className="mb-5 text-sm font-semibold tracking-[0.2em]">TIPOS DE CAMINO</h3>
            <div className="space-y-3">
              <TerrainRow label="Fuera de vías conocidas" value="15,5 KM" dark />
              <TerrainRow label="Senda" value="4,21 KM" dark />
              <TerrainRow label="Sendero" value="1,55 KM" dark />
              <TerrainRow label="Calle" value="1,20 KM" dark />
              <TerrainRow label="Carretera" value="269 M" dark />
              <TerrainRow label="Sendero de alpinismo" value="252 M" dark />
            </div>
          </div>
        </div>
      </section>


      {/* DATOS CLAVE */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

        <SectionTitle
          eyebrow="DATOS CLAVE"
          title="La información que necesitas"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">

          <KeyData
            label="Punto más alto"
            value="5100 msnm"
          />

          <KeyData
            label="Punto más bajo"
            value="4020 msnm"
          />

          <KeyData
            label="Tiempo máximo"
            value="5h 30m"
          />

        </div>

      </section>


      {/* EMERGENCIAS */}
      <section className="bg-[#E74238] text-white">

        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">

          <div className="flex items-start gap-5">

            <Phone size={30} className="mt-1 shrink-0" />

            <div>

              <p className="text-sm font-semibold tracking-[0.2em]">
                EMERGENCIAS
              </p>

              <p className="mt-4 text-3xl font-bold">
                911
              </p>

              <p className="mt-2 text-white/90">
                Organización: 098 2121 157
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* RUTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

        <SectionTitle
          eyebrow="RUTA"
          title="Carga el recorrido antes de llegar a la montaña"
        />

        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <h3 className="text-xl font-semibold">
                Ruta 20K en Komoot
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#331010]/65">
                Revisa el recorrido y carga la ruta en tu dispositivo
                GPS antes de iniciar la competencia.
              </p>

            </div>

            <a
              href="https://www.komoot.com/es-es/tour/3334194237"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#331010] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2F3F2F]"
            >
              Ver ruta en Komoot
              <ExternalLink size={16} />
            </a>

          </div>

        </div>

      </section>


      {/* INSCRIPCIONES */}
      <section className="bg-[#2F3F2F] text-[#F2E7E7]">

        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-28">

          <p className="text-sm font-semibold tracking-[0.3em] text-[#F2E7E7]/70">
            LOS DOS GIGANTES ULTRA TRAIL
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            ¿Estás listo para los 20K?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-[#F2E7E7]/80">
            La Laguna Cóndor Cocha te espera a 5.100 msnm.
            Gestiona tu fuerza, conquista el ascenso y desciende con decisión.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdO62MyFEKPG21uSatdoIG62pdWmV-PzhLDEQU9EjGE_UVRkg/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#E74238] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#331010]"
          >
            INSCRÍBETE
            <ChevronRight size={18} />
          </a>

        </div>

      </section>

    </main>
  )
}


/* COMPONENTES */

function SectionTitle({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string
  title: string
  dark?: boolean
}) {
  return (
    <div>
      <p
        className={`text-sm font-semibold tracking-[0.25em] ${
          dark ? "text-[#F2E7E7]/60" : "text-[#E74238]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-4 text-3xl font-bold tracking-tight md:text-5xl ${
          dark ? "text-[#F2E7E7]" : "text-[#331010]"
        }`}
      >
        {title}
      </h2>
    </div>
  )
}


function DataCard({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-xl bg-white p-5">
      <p className="text-xs font-medium uppercase tracking-wider text-[#331010]/50">
        {label}
      </p>

      <p className="mt-3 text-xl font-bold md:text-2xl">
        {value}
      </p>
    </div>
  )
}


function DifficultyCard({
  number,
  difficulty,
  slope,
  elevation,
}: {
  number: string
  difficulty: string
  slope: string
  elevation: string
}) {
  return (
    <div className="rounded-2xl border border-[#331010]/10 bg-[#F2E7E7] p-7">

      <p className="text-sm font-bold tracking-[0.2em] text-[#E74238]">
        ASCENSO {number}
      </p>

      <p className="mt-8 text-3xl font-bold">
        {elevation}
      </p>

      <p className="mt-2 font-semibold">
        {difficulty}
      </p>

      <p className="mt-2 text-sm text-[#331010]/60">
        {slope}
      </p>

    </div>
  )
}


function AidStation({
  title,
  km,
  detail,
  items,
}: {
  title: string
  km: string
  detail: string
  items: React.ReactNode[]
}) {
  return (
    <div className="rounded-2xl bg-white p-7 shadow-sm">

      <p className="text-sm font-semibold tracking-[0.2em] text-[#E74238]">
        {km}
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm text-[#331010]/55">
        {detail}
      </p>

      <div className="mt-7 space-y-3 text-sm">

        {items.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}

      </div>

    </div>
  )
}


function RecommendationCard({
  text,
}: {
  text: string
}) {
  return (
    <div className="rounded-xl border border-[#331010]/10 bg-[#F2E7E7] p-5 text-sm">
      {text}
    </div>
  )
}


function TerrainRow({
  label,
  value,
  dark = false,
}: {
  label: string
  value: string
  dark?: boolean
}) {
  return (
    <div
      className={`flex items-center justify-between border-b py-3 ${
        dark
          ? "border-white/10"
          : "border-[#331010]/10"
      }`}
    >

      <span
        className={
          dark
            ? "text-sm text-[#F2E7E7]/70"
            : "text-sm text-[#331010]/70"
        }
      >
        {label}
      </span>

      <span
        className={
          dark
            ? "text-sm font-semibold text-[#F2E7E7]"
            : "text-sm font-semibold"
        }
      >
        {value}
      </span>

    </div>
  )
}


function KeyData({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl bg-white p-8">

      <p className="text-sm text-[#331010]/50">
        {label}
      </p>

      <p className="mt-4 text-4xl font-bold">
        {value}
      </p>

    </div>
  )
}