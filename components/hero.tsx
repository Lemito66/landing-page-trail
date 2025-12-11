"use client"

export function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      <img
        src="/chimborazo-ploma.png"
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
              Desafía tus límites en la serie de eventos de resistencia más exigente de la región
            </p>
          </div>

          {/* Buttons with responsive sizing */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6">
            <button className="bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-accent/90 transition-colors text-base sm:text-lg w-full sm:w-auto">
              INSCRÍBETE AHORA
            </button>
            <button className="border-2 border-accent text-accent px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-accent/10 transition-colors text-base sm:text-lg w-full sm:w-auto">
              MÁS INFORMACIÓN
            </button>
          </div>

          {/* Statistics section with responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-8 pt-8 sm:pt-10 lg:pt-12">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">12+</div>
              <div className="text-xs sm:text-sm lg:text-base text-foreground/80">Eventos Anuales</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">5000+</div>
              <div className="text-xs sm:text-sm lg:text-base text-foreground/80">Atletas Registrados</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent">2026</div>
              <div className="text-xs sm:text-sm lg:text-base text-foreground/80">Próxima Temporada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
