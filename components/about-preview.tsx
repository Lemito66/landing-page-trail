"use client"

export function AboutPreview() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-accent/20 to-transparent rounded-2xl border border-border overflow-hidden order-last lg:order-first">
            <img
              src="/grupo-atletas-celebrando.jpg"
              alt="Comunidad Chimborazo Endurance"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-accent font-bold text-sm uppercase tracking-widest">Quiénes Somos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              La comunidad de resistencia más desafiante del Ecuador
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos más que una serie de eventos. Somos una comunidad de atletas apasionados que se desafían a sí
              mismos, que superan sus límites y que celebran cada victoria juntos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde 2020, hemos organizado competencias que ponen a prueba la resistencia física y mental de nuestros
              participantes en los escenarios más desafiantes de la región.
            </p>
            <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-bold hover:bg-accent/90 transition-colors mt-4">
              Conocer Más
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
