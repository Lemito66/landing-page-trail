"use client"
import {
  Target,
  Users,
  Zap,
  Flame,
  ShieldCheck,
  Handshake,
  Award,
  Leaf,
  Mountain
} from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Flame,
      title: "Pasión",
      description:
        "Amor y energía por cada ruta, cada detalle y cada corredor.",
    },
    {
      icon: ShieldCheck,
      title: "Integridad",
      description:
        "Transparencia, respeto y responsabilidad en cada decisión.",
    },
    {
      icon: Handshake,
      title: "Solidaridad",
      description:
        "El deporte como fuerza que une y genera cambio social.",
    },
    {
      icon: Users,
      title: "Comunidad",
      description:
        "Corredores, voluntarios, instituciones y territorio trabajando juntos.",
    },
    {
      icon: Award,
      title: "Excelencia",
      description:
        "Planificación, seguridad y logística con estándares de primer nivel.",
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description:
        "Compromiso con la protección de nuestros ecosistemas.",
    },
    {
      icon: Mountain,
      title: "Identidad",
      description:
        "La historia, cultura y grandeza del Chimborazo como esencia.",
    },
  ]

  return (
    <section id="values" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Nuestros Valores</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-card border border-border rounded-xl hover:border-accent transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
