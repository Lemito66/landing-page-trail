"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, MapPin } from "lucide-react"

export default function EventsPage() {
  const allEvents = [
    {
      id: 1,
      name: "Trail Chimborazo",
      date: "15-16 Marzo 2026",
      location: "Ambato, Pichincha",
      distance: "42 km",
      elevation: "2,500 m",
      difficulty: "Extremo",
      participants: "500+",
      description:
        "La carrera de montaña más desafiante de nuestro calendario. Desafía tus límites en los senderos del Chimborazo.",
      image: "/carrera-monta-a.jpg",
    },
    {
      id: 2,
      name: "Urban Challenge",
      date: "19-20 Abril 2026",
      location: "Quito",
      distance: "21 km",
      elevation: "800 m",
      difficulty: "Avanzado",
      participants: "800+",
      description: "Corre a través de la ciudad capital combinando asfalto y senderos en una experiencia urbana única.",
      image: "/carrera-urbana.jpg",
    },
    {
      id: 3,
      name: "Desert Marathon",
      date: "24-25 Mayo 2026",
      location: "Salinas de Guaranda",
      distance: "42 km",
      elevation: "100 m",
      difficulty: "Avanzado",
      participants: "400+",
      description: "Una experiencia única en el desierto ecuatoriano. Resistencia pura bajo el sol ardiente.",
      image: "/marat-n-desierto.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-accent">Nuestros Eventos 2026</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explora nuestra completa cartera de eventos diseñados para desafiar a atletas de todos los niveles
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {allEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 grid grid-cols-1 lg:grid-cols-2"
              >
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest">
                        {event.difficulty}
                      </div>
                      <h3 className="text-3xl font-bold">{event.name}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Distancia</div>
                        <div className="font-bold text-lg text-accent">{event.distance}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Elevación</div>
                        <div className="font-bold text-lg text-accent">+{event.elevation}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Participantes</div>
                        <div className="font-bold text-lg text-accent">{event.participants}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Ubicación</div>
                        <div className="font-bold text-sm">{event.location}</div>
                      </div>
                    </div>

                    <div className="space-y-2 pt-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} className="text-accent" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} className="text-accent" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>

                  <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors mt-6 self-start">
                    Inscribirse Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
