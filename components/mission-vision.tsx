"use client"

import { Eye, Target } from "lucide-react"

export function MissionVision() {
  return (
    <section id="mission" className="py-20 md:py-32 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Misión */}
          <div className="space-y-6 p-8 bg-background rounded-2xl border border-border hover:border-accent transition-all duration-300">
            <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-accent">Misión</h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Impulsar el deporte y la cultura del movimiento mediante la organización de eventos de alta calidad que inspiren superación personal, fortalezcan el sentido de comunidad y destaquen la riqueza natural, histórica y emocional de la provincia de Chimborazo. Creamos experiencias deportivas seguras, responsables y memorables, donde cada participante encuentre motivación, propósito y la oportunidad de transformar su vida a través del esfuerzo.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="space-y-6 p-8 bg-background rounded-2xl border border-border hover:border-accent transition-all duration-300">
            <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-accent">Visión</h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Convertir a Chimborazo Endurance Series en la serie de eventos deportivos más representativa del centro del país, reconocida por su innovación, impacto social y conexión profunda entre corredores, territorio y comunidad. Aspiramos a ser un referente nacional e internacional en la organización de carreras urbanas y trail, impulsando turismo, sostenibilidad y orgullo por nuestra identidad andina.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
