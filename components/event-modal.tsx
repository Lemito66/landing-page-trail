"use client"
import { X } from "lucide-react"
import { CountdownTimer } from "./countdown-timer"
import { Event } from "@/interface/events.interface"



interface EventModalProps {
  event: Event | null
  isOpen: boolean
  onClose: () => void
}

export function EventModal({ event, isOpen, onClose }: EventModalProps) {
  if (!isOpen || !event) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-card border border-border rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <div className="flex justify-between items-center sticky top-0 bg-card border-b border-border p-6">
            <h2 className="text-3xl font-bold text-accent">{event.name}</h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Cerrar modal"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-8">
            {/* Event Image */}
            <div className="relative h-72 overflow-hidden rounded-lg">
              <img src={event.image || "/placeholder.svg"} alt={event.name} className="w-full h-full object-cover" />
            </div>

            {/* Countdown Timer */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Tiempo Restante</h3>
              <CountdownTimer eventDate={event.dateObject} eventName={event.name} />
            </div>

            {/* Event Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2">Descripción</h3>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-background p-4 rounded-lg border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Distancia</div>
                  <div className="font-bold text-accent text-lg">{event.distance}</div>
                </div>
                <div className="bg-background p-4 rounded-lg border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Elevación</div>
                  <div className="font-bold text-accent text-lg">+{event.elevation}</div>
                </div>
                <div className="bg-background p-4 rounded-lg border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Dificultad</div>
                  <div className="font-bold text-accent text-lg">{event.difficulty}</div>
                </div>
                <div className="bg-background p-4 rounded-lg border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Participantes</div>
                  <div className="font-bold text-accent text-lg">{event.participants}</div>
                </div>
                <div className="bg-background p-4 rounded-lg border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Fecha</div>
                  <div className="font-bold text-accent text-sm">{event.date}</div>
                </div>
                <div className="bg-background p-4 rounded-lg border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Ubicación</div>
                  <div className="font-bold text-accent text-sm">{event.location}</div>
                </div>
              </div>
            </div>

            {/* Register Button */}
            {event.inscriptionLink?.trim() ? (
              <a
                href={event.inscriptionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-accent text-accent-foreground py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors"
              >
                Inscribirse Ahora
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="w-full inline-flex items-center justify-center py-3 rounded-lg font-bold bg-muted text-muted-foreground cursor-not-allowed"
              >
                Muy pronto
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
