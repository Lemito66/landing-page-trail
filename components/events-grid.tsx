"use client"

import { useState } from "react"
import { Calendar, MapPin } from "lucide-react"
import { EventModal } from "./event-modal"
import { EVENTS } from "@/constants/events.constants"
import type { Event as TrailEvent } from "@/interface/events.interface" // 👈 alias

export function EventsGrid() {
  const [selectedEvent, setSelectedEvent] = useState<TrailEvent | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (evt: TrailEvent) => {
    setSelectedEvent(evt)
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
              {EVENTS.map((evt) => (
                <div
                  key={evt.id}
                  className="group bg-background border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={evt.image || "/placeholder.svg"}
                      alt={evt.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50" />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-accent">{evt.name}</h3>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="text-sm">{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span className="text-sm">{evt.location}</span>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-2">
                      <div>
                        <div className="font-bold text-accent">{evt.distance}</div>
                        <div className="text-xs text-muted-foreground">Distancia</div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenModal(evt)}
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
