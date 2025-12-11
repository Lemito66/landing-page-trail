"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar } from "lucide-react"

export default function CalendarPage() {
  const calendarEvents = [
    {
      month: "Enero",
      events: [
        { name: "Registro Abierto", date: "01", type: "registration" },
        { name: "Webinar Preparación", date: "15", type: "seminar" },
      ],
    },
    {
      month: "Febrero",
      events: [
        { name: "Taller de Entrenamiento", date: "10", type: "workshop" },
        { name: "Plazo Final Inscripción Early Bird", date: "28", type: "deadline" },
      ],
    },
    {
      month: "Marzo",
      events: [
        { name: "Trail Chimborazo - Día 1", date: "15", type: "event" },
        { name: "Trail Chimborazo - Día 2", date: "16", type: "event" },
      ],
    },
    {
      month: "Abril",
      events: [
        { name: "Urban Challenge - Día 1", date: "19", type: "event" },
        { name: "Urban Challenge - Día 2", date: "20", type: "event" },
        { name: "Resultados y Premiación", date: "25", type: "awards" },
      ],
    },
    {
      month: "Mayo",
      events: [
        { name: "Desert Marathon - Día 1", date: "24", type: "event" },
        { name: "Desert Marathon - Día 2", date: "25", type: "event" },
      ],
    },
  ]

  const getEventColor = (type) => {
    const colors = {
      event: "bg-accent text-accent-foreground",
      registration: "bg-blue-600 text-white",
      seminar: "bg-purple-600 text-white",
      workshop: "bg-green-600 text-white",
      deadline: "bg-red-600 text-white",
      awards: "bg-yellow-600 text-gray-900",
    }
    return colors[type] || "bg-muted text-foreground"
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-accent">Calendario 2026</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Plan completo de todos nuestros eventos, talleres y actividades para la temporada 2026
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Timeline */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {calendarEvents.map((month, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-3xl font-bold text-accent border-b border-border pb-4">{month.month} 2026</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {month.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className={`p-6 rounded-lg border border-border ${getEventColor(event.type)}`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Calendar size={20} />
                        <span className="text-sm font-bold">{event.date}</span>
                      </div>
                      <h3 className="font-bold text-lg">{event.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold">¿Listo para el Desafío?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecciona tu evento favorito e inscríbete ahora. Las inscripciones tempranas tienen descuentos especiales.
          </p>
          <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors text-lg">
            VER TODOS LOS EVENTOS
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
