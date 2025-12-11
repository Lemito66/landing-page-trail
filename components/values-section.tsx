"use client"

import { Target, Users, Zap } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Zap,
      title: "Resiliencia",
      description:
        "Nos desafiamos a superar nuestros límites cada día, porque en la adversidad encontramos nuestra fortaleza.",
    },
    {
      icon: Users,
      title: "Comunidad",
      description:
        "Juntos somos más fuertes. Compartimos experiencias, nos apoyamos y celebramos cada logro en equipo.",
    },
    {
      icon: Target,
      title: "Excelencia",
      description:
        "Buscamos la perfección en cada detalle, desde la organización de eventos hasta el bienestar de nuestros atletas.",
    },
  ]

  return (
    <section id="values" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Nuestros Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principios que guían cada evento y cada decisión que tomamos
            </p>
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
