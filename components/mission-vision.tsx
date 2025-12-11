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
              <h3 className="text-3xl font-bold mb-4 text-accent">Nuestra Misión</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Organizar eventos de endurance que desafíen a atletas de todos los niveles, promoviendo la superación
                personal, el espíritu comunitario y el amor por el deporte de resistencia en entornos naturales y
                urbanos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Creamos experiencias transformadoras donde cada participante descubre su verdadero potencial y celebra
                el viaje, no solo la meta.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="space-y-6 p-8 bg-background rounded-2xl border border-border hover:border-accent transition-all duration-300">
            <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-accent">Nuestra Visión</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser la serie de eventos de resistencia más reconocida y respetada de América Latina, conocida por la
                excelencia en la organización y por inspirar a miles de atletas a alcanzar sus máximos límites.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Queremos construir una comunidad global de apasionados por el endurance que se inspiran mutuamente a
                vivir vidas más plenas, resilientes y significativas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
