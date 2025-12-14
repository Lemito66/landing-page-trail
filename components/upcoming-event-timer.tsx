"use client"

import { CountdownTimer } from "./countdown-timer"

interface Event {
  name: string
  dateObject: string
}

export function UpcomingEventTimer() {
  const events: Event[] = [
    {
      name: "Trail Chimborazo",
      dateObject: "2026-01-17",
    },
    {
      name: "Urban Challenge",
      dateObject: "2026-10-24",
    },
    {
      name: "Desert Marathon",
      dateObject: "2026-05-24",
    },
  ]

  const getUpcomingEvent = () => {
    const now = new Date()
    const upcoming = events.find((event) => new Date(event.dateObject) > now)
    return upcoming || events[0]
  }

  const upcomingEvent = getUpcomingEvent()

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-accent/10 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Próximo Evento</h2>
            <p className="text-muted-foreground text-lg">Prepárate para el desafío más emocionante del año</p>
          </div>

          <CountdownTimer eventDate={upcomingEvent.dateObject} eventName={upcomingEvent.name} />
        </div>
      </div>
    </section>
  )
}
