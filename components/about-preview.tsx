"use client"

export function AboutPreview() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-accent/20 to-transparent rounded-2xl border border-border overflow-hidden order-last lg:order-first">
            <img
              src="/chimborazo-ploma.png"
              alt="Comunidad Chimborazo Endurance"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-accent font-bold text-sm uppercase tracking-widest">Quiénes Somos</span>
            </div>
            
            <p className="text-2xl text-foreground/90 leading-relaxed text-justify">
            Chimborazo Endurance Series nace con la visión de impulsar el deporte, la integración comunitaria y el desarrollo de experiencias que trascienden más allá de la meta. Somos un proyecto deportivo que combina pasión, identidad y territorio, llevando a los corredores a descubrir la fuerza que habita en ellos y la grandeza natural que rodea nuestra provincia. Nuestro propósito es crear eventos que inspiren, conecten y transformen. Creemos en el poder del deporte para sanar, unir y desafiar los límites personales. Por ello, diseñamos competencias que mezclan corazón, historia y naturaleza, brindando a cada participante una vivencia auténtica y profundamente significativa.
            </p>
            <p className="text-2xl text-foreground/90 leading-relaxed text-justify">
            En Chimborazo Endurance Series nos mueve el compromiso con la excelencia, la sostenibilidad y el impacto positivo. Trabajamos para que cada evento sea más que una carrera: sea una experiencia que inspire y deje huella. Somos deporte, somos territorio, somos resistencia. Y estamos apenas comenzando.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
