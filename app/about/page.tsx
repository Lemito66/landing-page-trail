"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    { year: 2020, title: "Fundación", description: "Nace Chimborazo Endurance Series con el primer evento" },
    {
      year: 2021,
      title: "Expansión Regional",
      description: "Expandimos a 4 eventos anuales en diferentes provincias",
    },
    {
      year: 2023,
      title: "Reconocimiento Internacional",
      description: "Atletas de 15 países participan en nuestros eventos",
    },
    { year: 2026, title: "Año de Récords", description: "Alcanzamos los 5000+ atletas registrados" },
  ]

  const team = [
    { name: "Director General", role: "Liderazgo y Estrategia" },
    { name: "Director de Eventos", role: "Organización y Logística" },
    { name: "Coordinador Médico", role: "Seguridad y Bienestar" },
    { name: "Community Manager", role: "Conexión con Atletas" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-accent">Quiénes Somos</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Nuestra Historia</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Chimborazo Endurance Series nació de una pasión simple: crear una comunidad de atletas que se desafíen a
                sí mismos en los escenarios más hermosos y exigentes de Ecuador. Lo que comenzó como un pequeño evento
                ahora es reconocido como una de las series de endurance más importantes de América Latina.
              </p>
            </div>

            {/* Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="p-6 bg-card border border-border rounded-xl">
                  <div className="text-3xl font-bold text-accent mb-2">{milestone.year}</div>
                  <h3 className="font-bold text-lg mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-card border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Misión</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Crear experiencias de endurance que desafíen los límites físicos y mentales de nuestros atletas,
                    construyendo una comunidad global de personas apasionadas por la resistencia, la superación y la
                    excelencia en los deportes de aventura.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Visión</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser la serie de eventos de resistencia más respetada e influyente de América Latina, reconocida por
                    nuestro compromiso con la excelencia, la seguridad y la construcción de comunidades de atletas
                    inspirados a alcanzar sus máximos potenciales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Nuestro Equipo</h2>
              <p className="text-lg text-muted-foreground">
                Profesionales dedicados a hacer que cada evento sea excepcional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-accent/20 to-transparent rounded-full border border-border flex items-center justify-center">
                    <Users className="text-accent" size={48} />
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
