"use client"

import { UpcomingEventTimer } from "@/components/upcoming-event-timer"

export function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      <img
        src="/chimborazo-ploma.jpg"
        alt="Chimborazo mountain landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/60 to-primary/75"></div>

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl space-y-6 sm:space-y-8 lg:space-y-10 text-center">
          {/* Title section with responsive typography */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-balance leading-tight text-foreground">
              CHIMBORAZO
              <br />
              <span className="text-accent">ENDURANCE</span>

              <br />
              SERIES
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto px-4 leading-relaxed">
              Somos aventura.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto px-4 leading-relaxed">
              Somos resistencia.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto px-4 leading-relaxed">
              Somos velocidad.
            </p>
          </div>
          <UpcomingEventTimer />
        </div>
      </div>
    </section>
  )
}
