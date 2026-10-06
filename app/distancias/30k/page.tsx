"use client"

import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Check,
  Clock,
  Download,
  Droplets,
  ExternalLink,
  Flame,
  Mountain,
  Navigation,
  ShieldCheck,
  Smartphone,
  Utensils,
  Wind,
} from "lucide-react"

export default function ThirtyKPage() {
  return (
    <main className="min-h-screen bg-[#F2E7E7] text-[#331010]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[80vh] overflow-hidden bg-[#331010]">

        <img
          src="/30k-los-dos-gigantes.png"
          alt="Los Dos Gigantes Ultra Trail 30K"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex min-h-[80vh] items-end px-6 pb-16 md:px-12 lg:px-20">
          <div className="max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#E74238]">
              Los Dos Gigantes Ultra Trail
            </p>

            <h1 className="text-7xl font-bold leading-none text-white md:text-9xl">
              30K
            </h1>

            <p className="mt-5 max-w-3xl text-xl font-medium uppercase tracking-[0.08em] text-white md:text-3xl">
              Senderos de alta montaña que unen dos gigantes
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================
          DATOS PRINCIPALES
      ========================================================= */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-2 gap-px overflow-hidden border border-[#331010]/10 bg-[#331010]/10 md:grid-cols-3 lg:grid-cols-6">

            <DataCard
              label="Distancia"
              value="31 km"
              icon={<Navigation size={20} />}
            />

            <DataCard
              label="Desnivel positivo"
              value="1.400+ m"
              icon={<ArrowUp size={20} />}
            />

            <DataCard
              label="Desnivel negativo"
              value="1.160- m"
              icon={<ArrowDown size={20} />}
            />

            <DataCard
              label="Punto más alto"
              value="4.840 msnm"
              icon={<Mountain size={20} />}
            />

            <DataCard
              label="Punto más bajo"
              value="4.220 msnm"
              icon={<ArrowDown size={20} />}
            />

            <DataCard
              label="Tiempo máximo"
              value="7h 30"
              icon={<Clock size={20} />}
            />

          </div>
        </div>
      </section>


      {/* =========================================================
          LA EXPERIENCIA
      ========================================================= */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">

          <SectionTitle
            eyebrow="La experiencia"
            title="Entre dos gigantes"
          />

          <p className="text-lg leading-relaxed text-[#331010]/80 md:text-xl">
            31 kilómetros de alta montaña entre paisajes volcánicos,
            ascensos exigentes y descensos que ponen a prueba cada decisión.
            El recorrido atraviesa el territorio del Chimborazo y conecta
            algunos de sus escenarios más extremos.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-[#331010]/80 md:text-xl">
            Aquí la distancia no se mide solamente en kilómetros. Se mide
            en altura, terreno, clima y capacidad para mantenerte en movimiento
            hasta la meta.
          </p>

        </div>
      </section>


      {/* =========================================================
          EL RECORRIDO EN DETALLE
      ========================================================= */}
      <section className="bg-[#331010] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="El recorrido en detalle"
            title="30 kilómetros de alta montaña"
            light
          />

          {/* PESTAÑAS VISUALES */}
          <div className="mb-10 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#E74238] px-5 py-2 text-sm font-semibold uppercase tracking-wider">
              Perfil
            </span>

            <span className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-white/70">
              Mapa
            </span>

            <span className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-white/70">
              KM a KM
            </span>
          </div>

          {/* PERFIL */}
          <div className="overflow-hidden rounded-lg bg-white p-4 md:p-8">

            <img
              src="/30k-perfil.png"
              alt="Perfil de elevación 30K Los Dos Gigantes Ultra Trail"
              className="h-auto w-full"
            />

          </div>

          <p className="mt-4 text-sm text-white/60">
            Perfil de elevación del recorrido 30K.
          </p>

        </div>
      </section>


      {/* =========================================================
          TRAMOS DE DIFICULTAD
      ========================================================= */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="Dificultad"
            title="Los grandes ascensos"
          />

          <div className="grid gap-6 md:grid-cols-3">

            <DifficultyCard
              number="01"
              difficulty="5 / 5"
              slope="9%"
              elevation="566 m+"
            />

            <DifficultyCard
              number="02"
              difficulty="5 / 5"
              slope="10%"
              elevation="370 m+"
            />

            <DifficultyCard
              number="03"
              difficulty="4 / 5"
              slope="7%"
              elevation="285 m+"
            />

          </div>

        </div>
      </section>


      {/* =========================================================
          ABASTOS
      ========================================================= */}
      <section className="bg-[#2F3F2F] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="Abastos"
            title="Lo que encontrarás en ruta"
            light
          />

          <div className="grid gap-5 lg:grid-cols-3">

            {/* ABASTO 1 */}
            <AidStation
              number="01"
              km="KM 5"
              distance="Desde la salida"
              detail="390 m+"
              items={[
                {
                  icon: <Droplets size={21} />,
                  text: "Agua",
                },
                {
                  icon: <span className="text-xl">🍎</span>,
                  text: "Fruta",
                },
              ]}
            />

            {/* ABASTO 2 */}
            <AidStation
              number="02"
              km="KM 13"
              distance="Desde abasto 1"
              detail="8 km · 220 m+"
              special
              items={[
                {
                  icon: <Utensils size={21} />,
                  text: "Comida caliente",
                },
                {
                  icon: <span className="text-xl">🥤</span>,
                  text: "Gaseosa",
                },
                {
                  icon: <Droplets size={21} />,
                  text: "Agua",
                },
                {
                  icon: <span className="text-xl">🍎</span>,
                  text: "Fruta",
                },
                {
                  icon: <span className="text-xl">🥨</span>,
                  text: "Salado · dulce",
                },
                {
                  icon: <Flame size={21} />,
                  text: "Hidratante",
                },
              ]}
            />

            {/* ABASTO 3 */}
            <AidStation
              number="03"
              km="KM 26"
              distance="Desde abasto 2"
              detail="13 km · 700 m+"
              items={[
                {
                  icon: <Droplets size={21} />,
                  text: "Agua",
                },
                {
                  icon: <span className="text-xl">🍎</span>,
                  text: "Fruta",
                },
                {
                  icon: <Utensils size={21} />,
                  text: "Sánduches",
                },
                {
                  icon: <Flame size={21} />,
                  text: "Hidratante",
                },
              ]}
            />

          </div>

          <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-5 text-sm text-white/75">
            <strong className="text-white">KM 26 → META:</strong>{" "}
            5 km finales con 470 m de desnivel negativo.
          </div>

        </div>
      </section>


      {/* =========================================================
          SALIDA Y CORTE
      ========================================================= */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">

          <div className="rounded-lg bg-[#331010] p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E74238]">
              Salida
            </p>

            <p className="mt-4 text-5xl font-bold">
              5:30 AM
            </p>

            <p className="mt-3 text-white/70">
              Hora oficial de salida 30K.
            </p>
          </div>

          <div className="rounded-lg border border-[#E74238] bg-white p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E74238]">
              Tiempo de corte
            </p>

            <p className="mt-4 text-5xl font-bold text-[#331010]">
              3h 45
            </p>

            <p className="mt-3 text-[#331010]/70">
              Corte en el segundo abasto · KM 13.
            </p>

            <div className="mt-6 border-t border-[#331010]/10 pt-5">
              <p className="text-sm font-semibold text-[#331010]">
                Hora límite: 9:15 AM
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[#331010]/70">
                El corredor deberá llegar al segundo abasto antes de las
                9:15 AM. Al superar el límite establecido se procederá
                conforme al protocolo de retiro de la organización.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          MATERIAL OBLIGATORIO
      ========================================================= */}
      <section className="bg-[#F2E7E7] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="Material obligatorio"
            title="Prepárate para la montaña"
          />

          <div className="grid gap-3 md:grid-cols-2">

            {[
              "Mochila de trail que permita transportar el material obligatorio.",
              "Reserva alimentaria de 800 kcal.",
              "Depósito de agua mínimo de 1,5 litros.",
              "Jacket con capucha impermeable.",
              "Lámpara frontal de mínimo 200 lúmenes con baterías extra.",
              "Zapatos adecuados para trail running. Recomendación: taco de 5 mm.",
              "Capa térmica / pantalón lycra.",
              "Dispositivo GPS (reloj, teléfono, etc.) con la ruta cargada.",
              "Dorsal de competición colocado en la parte frontal y visible.",
              "Manta térmica de supervivencia.",
              "Guantes.",
              "Buff para protección del cuello.",
              "Teléfono celular con saldo.",
              "Silbato.",
              "Vaso personal de silicona plegable.",
              "Plato personal de silicona plegable.",
              "Utensilios personales.",
              "Banda elástica adhesiva.",
              "Bolsito entregado en el kit para depositar la basura generada durante la carrera.",
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-3 rounded-md border border-[#331010]/10 bg-white p-4"
              >
                <Check
                  size={20}
                  className="mt-0.5 shrink-0 text-[#E74238]"
                />

                <span className="text-sm leading-relaxed">
                  {item}
                </span>
              </div>
            ))}

          </div>


          {/* ATENCIÓN */}
          <div className="mt-8 rounded-lg border-l-4 border-[#E74238] bg-[#331010] p-6 text-white md:p-8">

            <div className="flex gap-4">

              <ShieldCheck
                size={28}
                className="mt-1 shrink-0 text-[#E74238]"
              />

              <div>

                <h3 className="text-lg font-bold uppercase tracking-wide">
                  Atención
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Si alguno de nuestros voluntarios o miembros del staff de
                  Los Dos Gigantes identifica que un participante no utiliza
                  el bolso destinado para la basura, será descalificado.
                  De igual manera, si se identifica que algún corredor
                  arroja basura durante el recorrido, será descalificado.
                </p>

                <p className="mt-4 font-semibold text-white">
                  El corredor que no presente el material obligatorio
                  no podrá salir.
                </p>

              </div>

            </div>

          </div>


          {/* EMERGENCIAS */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div className="rounded-lg border border-[#331010]/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E74238]">
                Emergencias
              </p>

              <p className="mt-2 text-3xl font-bold">
                911
              </p>
            </div>

            <div className="rounded-lg border border-[#331010]/10 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E74238]">
                Organización
              </p>

              <p className="mt-2 text-3xl font-bold">
                098 212 1157
              </p>
            </div>

          </div>


          {/* RESERVA */}
          <div className="mt-8 rounded-lg bg-[#2F3F2F] p-6 text-white md:p-8">

            <h3 className="text-lg font-bold">
              Protección de la Reserva
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Los Dos Gigantes Ultra Trail se desarrollará en la Reserva de
              Producción de Fauna Chimborazo. Al ser un área protegida,
              el evento se acoge a los lineamientos y prohibiciones para
              la conservación y protección de los espacios donde se
              desarrolla la competencia.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Promovemos el uso mínimo de plásticos y evitamos vasos,
              fundas y otros elementos que puedan afectar el ecosistema.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          MATERIAL ALTAMENTE RECOMENDABLE
      ========================================================= */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="Material altamente recomendable"
            title="Elementos para enfrentar la montaña"
          />

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Pantalón impermeable",
              "Segundo frontal",
              "Gorra",
              "Badana larga multiuso",
              "Guantes impermeables",
              "Gafas de sol",
              "Crema solar",
              "Bastones de trail",
            ].map((item) => (
              <RecommendationCard key={item} text={item} />
            ))}

          </div>


          <div className="mt-12">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E74238]">
              Material recomendado opcional
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-2">

              <RecommendationCard text="Vaselina / crema anti-rozaduras" />

              <RecommendationCard text="Mínimo $10 para imprevistos" />

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          TERRENO Y CONDICIONES
      ========================================================= */}
      <section className="bg-[#331010] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="Terreno y condiciones"
            title="El recorrido sobre el terreno"
            light
          />

          <div className="grid gap-8 lg:grid-cols-2">

            {/* TIPO DE VÍA */}
            <div>

              <h3 className="mb-5 text-xl font-bold">
                Tipo de vía
              </h3>

              <div className="space-y-3">

                <TerrainRow
                  name="Fuera de vías conocidas"
                  distance="19,9 km"
                />

                <TerrainRow
                  name="Senda"
                  distance="5,11 km"
                />

                <TerrainRow
                  name="Sendero de montaña"
                  distance="4,07 km"
                />

                <TerrainRow
                  name="Carretera"
                  distance="1,06 km"
                />

                <TerrainRow
                  name="Calle"
                  distance="897 m"
                />

                <TerrainRow
                  name="Sendero"
                  distance="250 m"
                />

              </div>

            </div>


            {/* SUPERFICIES */}
            <div>

              <h3 className="mb-5 text-xl font-bold">
                Superficies
              </h3>

              <div className="space-y-3">

                <TerrainRow
                  name="Desconocido"
                  distance="19,9 km"
                />

                <TerrainRow
                  name="Pista no pavimentada"
                  distance="5,36 km"
                />

                <TerrainRow
                  name="Pista alpina"
                  distance="4,07 km"
                />

                <TerrainRow
                  name="Camino de grava"
                  distance="1,06 km"
                />

                <TerrainRow
                  name="Camino natural"
                  distance="897 m"
                />

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          DATOS CLAVE
      ========================================================= */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="Datos clave"
            title="Todo lo esencial"
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            <KeyData
              label="Distancia real"
              value="31 km"
            />

            <KeyData
              label="Desnivel positivo"
              value="1.400+ m"
            />

            <KeyData
              label="Desnivel negativo"
              value="1.160- m"
            />

            <KeyData
              label="Tiempo máximo"
              value="7h 30"
            />

          </div>

        </div>
      </section>


      {/* =========================================================
          GPX
      ========================================================= */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="rounded-lg bg-[#2F3F2F] p-8 text-white md:flex md:items-center md:justify-between md:p-10">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E74238]">
                Recorrido
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Consulta la ruta 30K
              </h2>

              <p className="mt-2 text-sm text-white/70">
                Abre el recorrido completo en Komoot.
              </p>

            </div>

            <a
              href="https://www.komoot.com/es-es/tour/3324492905?share_token=a4p4wBDKGBUVL3VF8ZkyV2XFMYVt3PNfrGXUQlO68O4pAZK19b&ref=wtd&t_s=referral&t_cid=route_share&t_ref_username=5958915167242"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-3 rounded-md bg-[#E74238] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#d73830] md:mt-0"
            >
              <Download size={18} />
              Ver ruta en Komoot
              <ExternalLink size={16} />
            </a>

          </div>

        </div>
      </section>


      {/* =========================================================
          INSCRIPCIÓN
      ========================================================= */}
      <section className="bg-[#E74238] px-6 py-20 text-white md:px-12 lg:px-20">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em]">
            Los Dos Gigantes Ultra Trail
          </p>

          <h2 className="mt-4 text-5xl font-bold md:text-7xl">
            ¿Listo para los 30K?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Prepárate para atravesar la alta montaña y enfrentar
            el recorrido que une dos gigantes.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdO62MyFEKPG21uSatdoIG62pdWmV-PzhLDEQU9EjGE_UVRkg/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#331010] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-black"
          >
            Inscríbete
            <ArrowRight size={18} />
          </a>

        </div>

      </section>

    </main>
  )
}


/* =============================================================
   COMPONENTES
============================================================= */

function SectionTitle({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string
  title: string
  light?: boolean
}) {
  return (
    <div className="mb-10">

      <p
        className={`text-sm font-semibold uppercase tracking-[0.25em] ${
          light ? "text-[#E74238]" : "text-[#E74238]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-3 text-4xl font-bold md:text-5xl ${
          light ? "text-white" : "text-[#331010]"
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
  icon,
}: {
  label: string
  value: string
  icon: React.ReactNode
}) {
  return (
    <div className="bg-white p-5 md:p-6">

      <div className="mb-4 text-[#E74238]">
        {icon}
      </div>

      <p className="text-xs font-semibold uppercase tracking-wider text-[#331010]/50">
        {label}
      </p>

      <p className="mt-2 text-xl font-bold md:text-2xl">
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
    <div className="border border-[#331010]/10 bg-white p-7">

      <div className="flex items-start justify-between">

        <span className="text-sm font-bold text-[#E74238]">
          #{number}
        </span>

        <span className="rounded-full bg-[#331010] px-3 py-1 text-xs font-semibold text-white">
          Dificultad {difficulty}
        </span>

      </div>

      <div className="mt-8">

        <p className="text-xs font-semibold uppercase tracking-widest text-[#331010]/50">
          Pendiente media
        </p>

        <p className="mt-1 text-4xl font-bold">
          {slope}
        </p>

      </div>

      <div className="mt-6 border-t border-[#331010]/10 pt-5">

        <p className="text-xs font-semibold uppercase tracking-widest text-[#331010]/50">
          Desnivel positivo
        </p>

        <p className="mt-1 text-xl font-bold">
          {elevation}
        </p>

      </div>

    </div>
  )
}


function AidStation({
  number,
  km,
  distance,
  detail,
  items,
  special = false,
}: {
  number: string
  km: string
  distance: string
  detail: string
  items: {
    icon: React.ReactNode
    text: string
  }[]
  special?: boolean
}) {
  return (
    <div
      className={`rounded-lg p-6 ${
        special
          ? "bg-[#E74238] text-white"
          : "bg-white text-[#331010]"
      }`}
    >

      <div className="flex items-start justify-between">

        <div>

          <p
            className={`text-xs font-semibold uppercase tracking-widest ${
              special ? "text-white/70" : "text-[#E74238]"
            }`}
          >
            Abasto {number}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {km}
          </h3>

        </div>

        {special && (
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
            Especial
          </span>
        )}

      </div>

      <div
        className={`mt-5 border-t pt-4 ${
          special ? "border-white/20" : "border-[#331010]/10"
        }`}
      >

        <p className="text-sm">
          <strong>{distance}</strong>
        </p>

        <p
          className={`mt-1 text-sm ${
            special ? "text-white/70" : "text-[#331010]/60"
          }`}
        >
          {detail}
        </p>

      </div>

      <div className="mt-6 grid grid-cols-2 gap-2">

        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 rounded-md p-2 text-sm ${
              special
                ? "bg-white/10"
                : "bg-[#F2E7E7]"
            }`}
          >
            {item.icon}
            <span>{item.text}</span>
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
    <div className="flex items-center gap-3 rounded-md border border-[#331010]/10 bg-white p-4">

      <Wind
        size={18}
        className="shrink-0 text-[#E74238]"
      />

      <span className="text-sm">
        {text}
      </span>

    </div>
  )
}


function TerrainRow({
  name,
  distance,
}: {
  name: string
  distance: string
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 py-3">

      <span className="text-sm text-white/70">
        {name}
      </span>

      <span className="font-semibold">
        {distance}
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
    <div className="border border-[#331010]/10 bg-white p-6">

      <p className="text-xs font-semibold uppercase tracking-widest text-[#E74238]">
        {label}
      </p>

      <p className="mt-3 text-3xl font-bold">
        {value}
      </p>

    </div>
  )
}