"use client"

import { UpcomingEventTimer } from "@/components/upcoming-event-timer"

// Pega aquí el enlace de inscripción de Los Dos Gigantes (entre las comillas)
const INSCRIPCION_URL = "https://forms.gle/UCHYrQdXCpB6w3XB9"

export function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      <img
        src="/Chimborazo Hero.jpg"
        alt="Chimborazo mountain landscape"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/60 to-primary/75"></div>

      {/* Franja de inscripción: arriba a la derecha */}
      <a href={INSCRIPCION_URL} target="_blank" rel="noopener noreferrer" className="absolute right-0 top-10 sm:top-12 lg:top-16 z-20 flex items-center gap-2 sm:gap-3 rounded-l-xl bg-[#e74238] pl-4 pr-3 sm:pl-6 sm:pr-5 lg:pl-8 lg:pr-6 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-lg lg:text-2xl font-extrabold uppercase tracking-wide text-[#f2e7e7] shadow-lg transition hover:bg-[#331010]">
        Inscríbete ahora
        <span className="hidden sm:inline">→</span>
      </a>

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center">
        {/* Logo, fecha y lugar: mismo contenedor y márgenes que el menú */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-16">
          <h1>
            <img
              src="/LogoHorizontalLDG-blanco.png"
              alt="Los Dos Gigantes Ultra Trail"
              className="block w-52 sm:w-64 md:w-72 lg:w-80 xl:w-[22rem] h-auto"
            />
          </h1>

          <div className="w-fit">
            <p className="mt-6 sm:mt-8 text-xl sm:text-2xl lg:text-3xl font-semibold uppercase tracking-widest text-[#f2e7e7]">
              13 Diciembre 2026
            </p>
            <p className="w-0 min-w-full mt-2 text-sm sm:text-base lg:text-lg font-semibold text-[#e74238] [text-shadow:0_1px_6px_rgba(51,16,16,0.8)]">
              Reserva de Producción de Fauna de Chimborazo - Ecuador
            </p>
          </div>
        </div>

        {/* Frase y cuenta regresiva */}
        <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 mt-28 sm:mt-36 lg:mt-52 text-center">
          <UpcomingEventTimer />
        </div>
      </div>
    </section>
  )
}