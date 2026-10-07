"use client"

import Image from "next/image"
import {
  Mountain,
  Map,
  Route,
  Clock,
  Droplets,
  Apple,
  Soup,
  Sandwich,
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

export default function ThirtyKPage() {
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
          src="/30k-los-dos-gigantes.png"
          alt="Los Dos Gigantes Ultra Trail 30K"
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
                30 KM
              </h1>

              <p className="mt-4 text-xl font-light tracking-wide text-[#F2E7E7] md:text-2xl">
                1400 M+
              </p>

              <p className="mt-6 max-w-3xl text-lg font-medium uppercase tracking-[0.12em] text-[#F2E7E7] md:text-2xl">
                Senderos de alta montaña que unen dos gigantes
              </p>

            </div>
          </div>
        </div>
      </section>


      {/* DATOS PRINCIPALES */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">

          <DataCard
            label="Distancia"
            value="31 KM"
          />

          <DataCard
            label="Desnivel positivo"
            value="1400 M+"
          />

          <DataCard
            label="Desnivel negativo"
            value="1160 M-"
          />

          <DataCard
            label="Punto más alto"
            value="4840 MSNM"
          />

          <DataCard
            label="Tiempo máximo"
            value="7H 30"
          />

        </div>
      </section>


      {/* LA EXPERIENCIA */}
<section className="bg-[#331010] text-[#F2E7E7]">
  <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">

    <SectionTitle
      eyebrow="LA EXPERIENCIA"
      title="Entre dos gigantes de los Andes"
      dark
    />

    <div className="mt-10 space-y-7 text-lg font-light leading-relaxed md:text-xl">

      <p>
        <strong className="font-semibold">
          31 kilómetros entre el Carihuairazo y el Chimborazo.
        </strong>{" "}
        Una travesía de alta montaña que atraviesa arenales,
        roca volcánica, ascensos exigentes y un territorio
        donde el paisaje cambia a cada paso.
      </p>

      <p>
        Correr estos senderos es mucho más que completar una distancia.
        Es entrar en un territorio de profundo valor andino y ancestral,
        donde la montaña forma parte de la historia, la identidad
        y la memoria de quienes han habitado estas tierras.
      </p>

      <p>
        Aquí el desafío deportivo se encuentra con la montaña.
        <strong className="font-semibold">
          {" "}Una experiencia única en Ecuador,
        </strong>{" "}
        entre dos gigantes que representan la fuerza y la grandeza
        de los Andes.
      </p>

    </div>

  </div>
</section>


      {/* RECORRIDO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

        <SectionTitle
          eyebrow="EL RECORRIDO EN DETALLE"
          title="Conoce el perfil de los 30K"
        />

        <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-sm">

          <div className="relative aspect-[16/8] w-full">
            <Image
              src="/30k-perfil.png"
              alt="Perfil altimétrico 30K"
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


      {/* ASCENSOS */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

          <SectionTitle
            eyebrow="LOS ASCENSOS"
            title="Tres momentos que marcarán el recorrido"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <DifficultyCard
              number="01"
              difficulty="DIFICULTAD 5"
              slope="Pendiente media 9%"
              elevation="+566 M"
            />

            <DifficultyCard
              number="02"
              difficulty="DIFICULTAD 5"
              slope="Pendiente media 10%"
              elevation="+370 M"
            />

            <DifficultyCard
              number="03"
              difficulty="DIFICULTAD 4"
              slope="Pendiente media 7%"
              elevation="+285 M"
            />

          </div>

        </div>

      </section>


      {/* ABASTOS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">

        <SectionTitle
          eyebrow="ABASTOS"
          title="Puntos de asistencia en montaña"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <AidStation
            title="Abasto 1"
            km="KM 5"
            detail="Desde la salida hasta este punto: +390 M"
            items={[
              <span key="water" className="flex items-center gap-2">
                <Droplets size={16} />
                Agua
              </span>,
              <span key="fruit" className="flex items-center gap-2">
                <Apple size={16} />
                Fruta
              </span>,
            ]}
          />

          <AidStation
            title="Abasto 2 · Especial"
            km="KM 13"
            detail="Desde Abasto 1: 8 KM · +220 M"
            items={[
              <span key="hot" className="flex items-center gap-2">
                <Soup size={16} />
                Comida caliente
              </span>,
              <span key="soda" className="flex items-center gap-2">
                <Waves size={16} />
                Soda
              </span>,
              <span key="water" className="flex items-center gap-2">
                <Droplets size={16} />
                Agua
              </span>,
              <span key="fruit" className="flex items-center gap-2">
                <Apple size={16} />
                Fruta
              </span>,
              <span key="food" className="flex items-center gap-2">
                <Utensils size={16} />
                Salado y dulce
              </span>,
              <span key="hydration" className="flex items-center gap-2">
                <Waves size={16} />
                Hidratación
              </span>,
            ]}
          />

          <AidStation
            title="Abasto 3"
            km="KM 26"
            detail="Desde Abasto 2: 13 KM · +700 M"
            items={[
              <span key="water" className="flex items-center gap-2">
                <Droplets size={16} />
                Agua
              </span>,
              <span key="fruit" className="flex items-center gap-2">
                <Apple size={16} />
                Fruta
              </span>,
              <span key="sandwich" className="flex items-center gap-2">
                <Sandwich size={16} />
                Sándwiches
              </span>,
              <span key="hydration" className="flex items-center gap-2">
                <Waves size={16} />
                Hidratación
              </span>,
            ]}
          />

        </div>

        <div className="mt-8 rounded-xl border border-[#331010]/10 bg-white p-6 text-sm leading-relaxed text-[#331010]/70">
          Desde el Abasto 3 hasta la meta restan aproximadamente 5 KM,
          con un descenso de 470 metros negativos.
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
                05:30
              </p>

              <p className="mt-3 text-[#F2E7E7]/70">
                5:30 de la mañana
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
                03:45
              </p>

              <p className="mt-3 leading-relaxed text-[#F2E7E7]/70">
                El participante deberá llegar al Abasto 2,
                ubicado en el KM 13, antes de las 09:15.
                Superado este tiempo, se procederá al retiro
                del dorsal y finalización de su participación.
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
            "Reserva alimentaria de 800 kcal",
            "Depósito de agua mínimo 1.5 L",
            "Jacket con capucha impermeable",
            "Frontal mínimo 200 lumens + baterías de repuesto",
            "Zapatillas de trail · recomendación: taco de 5 mm",
            "Capa térmica / pantalón lycra",
            "GPS con la ruta cargada",
            "Dorsal colocado en la parte frontal y visible",
            "Manta de supervivencia",
            "Guantes",
            "Buff",
            "Teléfono celular con saldo",
            "Silbato",
            "Vaso personal plegable de silicona",
            "Plato personal plegable de silicona",
            "Cubiertos",
            "Venda elástica adhesiva",
            "Bolsa o pouch personal para residuos",
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
            <RecommendationCard text="Segundo frontal" />
            <RecommendationCard text="Gorra" />
            <RecommendationCard text="Buff multifunción" />
            <RecommendationCard text="Guantes impermeables" />
            <RecommendationCard text="Gafas de sol" />
            <RecommendationCard text="Protector solar" />
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

          <div className="mt-12 grid gap-10 md:grid-cols-2">

            <div>

              <h3 className="mb-5 text-sm font-semibold tracking-[0.2em]">
                TIPOS DE TERRENO
              </h3>

              <div className="space-y-3">

                <TerrainRow
                  label="Fuera de vías conocidas"
                  value="19.9 KM"
                  dark
                />

                <TerrainRow
                  label="Senda"
                  value="5.11 KM"
                  dark
                />

                <TerrainRow
                  label="Sendero de montaña"
                  value="4.07 KM"
                  dark
                />

                <TerrainRow
                  label="Carretera"
                  value="1.06 KM"
                  dark
                />

                <TerrainRow
                  label="Calle"
                  value="897 M"
                  dark
                />

                <TerrainRow
                  label="Sendero"
                  value="250 M"
                  dark
                />

              </div>

            </div>


            <div>

              <h3 className="mb-5 text-sm font-semibold tracking-[0.2em]">
                SUPERFICIES
              </h3>

              <div className="space-y-3">

                <TerrainRow
                  label="Desconocido"
                  value="19.9 KM"
                  dark
                />

                <TerrainRow
                  label="Pista no pavimentada"
                  value="5.36 KM"
                  dark
                />

                <TerrainRow
                  label="Pista alpina"
                  value="4.07 KM"
                  dark
                />

                <TerrainRow
                  label="Camino de grava"
                  value="1.06 KM"
                  dark
                />

                <TerrainRow
                  label="Camino natural"
                  value="897 M"
                  dark
                />

              </div>

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
            value="4840 msnm"
          />

          <KeyData
            label="Punto más bajo"
            value="4220 msnm"
          />

          <KeyData
            label="Tiempo máximo"
            value="7h 30"
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
                Ruta 30K en Komoot
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#331010]/65">
                Revisa el recorrido y carga la ruta en tu dispositivo
                GPS antes de iniciar la competencia.
              </p>

            </div>

            <a
              href="https://www.komoot.com/es-es/tour/3324492905?share_token=a4p4wBDKGBUVL3VF8ZkyV2XFMYVt3PNfrGXUQlO68O4pAZK19b&ref=wtd&t_s=referral&t_cid=route_share&t_ref_username=5958915167242"
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
            ¿Estás listo para los 30K?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-[#F2E7E7]/80">
            El Carihuairazo y el Chimborazo te esperan.
            La montaña pondrá las reglas. Tú decides hasta dónde llegar.
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