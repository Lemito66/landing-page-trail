"use client"

import { useState } from "react"
import { Calendar, MapPin } from "lucide-react"
import { EventModal } from "./event-modal"

interface Event {
  id: number
  name: string
  date: string
  dateObject: string
  location: string
  distance: string
  elevation: string
  difficulty: string
  participants: string
  description: string
  image: string,
  inscriptionLink?: string
}

export function EventsGrid() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const events: Event[] = [
    {
      id: 1,
      name: "Sultana Run: Corazón de la Patria – Primera Edición Solidaria “Km que Sanan”",
      date: "17 de Enero, 20:00",
      dateObject: "2026-01-17",
      location: "Riobamba, Ecuador",
      distance: "5 km / 10 km",
      elevation: "2,500 m",
      difficulty: "Extremo",
      participants: "500+",
      description: `Un evento urbano lleno de energía y propósito, con distancias de 5 km y 10 km, que se realizará en Riobamba el sábado 17 de enero de 2026 a las 20h00. Una carrera nocturna que une a la comunidad en torno a la solidaridad, el movimiento y el orgullo de nuestra tierra. Un recorrido donde cada kilómetro se convierte en un acto de apoyo, esperanza y transformación social.`,
      image: "/chimborazo-ploma.png",
      inscriptionLink: "https://forms.gle/iaQSyQfdXALnW1Fr8",
    },
    {
      id: 2,
      name: "Los Dos Gigantes Ultra Trail: Entre el Sol y la Sombra",
      date: "24 de Octubre, 20:00",
      dateObject: "2026-10-24",
      location: "Riobamba, Ecuador",
      distance: "15 km / Por definir",
      elevation: "800 m",
      difficulty: "Avanzado",
      participants: "800+",
      description: `Una experiencia de alta resistencia y conexión con la naturaleza, prevista para octubre de 2026 en la majestuosa Reserva de Producción Faunística del Chimborazo. Aquí, los corredores desafían los contrastes del páramo andino, atravesando los dominios del nevado Chimborazo y el Carihuairazo, dos titanes que resguardan historias de viento, silencio y grandeza.
      Un trail pensado para quienes buscan superarse, sentir la inmensidad del paisaje y vivir un reto épico entre sombras, luz y altura.`,
      image: "/chimborazo-ploma.png",
      inscriptionLink: ""
    },
    {
      id: 3,
      name: "Desert Marathon",
      date: "24-25 Mayo 2026",
      dateObject: "2026-05-24",
      location: "Costa",
      distance: "42 km",
      elevation: "100 m",
      difficulty: "Avanzado",
      participants: "400+",
      description: "Una experiencia única en el desierto ecuatoriano. Resistencia pura bajo el sol ardiente.",
      image: "/chimborazo-ploma.png",
      inscriptionLink: ""
    },
  ]

  const handleOpenModal = (event: Event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  return (
    <>
      <section id="events" className="py-20 md:py-32 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-card-foreground">
                Nuestros Eventos 2026
              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="group bg-background border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50" />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-accent">{event.name}</h3>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-2">
                      <div>
                        <div className="font-bold text-accent">{event.distance}</div>
                        <div className="text-xs text-muted-foreground">Distancia</div>
                      </div>
                      <div>
                        <div className="font-bold text-accent">+{event.elevation}</div>
                        <div className="text-xs text-muted-foreground">Elevación</div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenModal(event)}
                      className="w-full bg-accent text-accent-foreground py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EventModal event={selectedEvent} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}
