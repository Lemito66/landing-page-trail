"use client"

import { EVENTS } from "@/constants/events.constants"
import { CountdownTimer } from "./countdown-timer"



export function UpcomingEventTimer() {


  const getUpcomingEvent = () => {
    const now = new Date()
    const upcoming = EVENTS.find((event) => new Date(event.dateObject) > now)
    return upcoming || EVENTS[0]
  }

  const upcomingEvent = getUpcomingEvent()

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 to-accent/10 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Próximo Evento</h2>
          </div>

          <CountdownTimer eventDate={upcomingEvent.dateObject} eventName={upcomingEvent.name} inscriptionLink={upcomingEvent.inscriptionLink}/>
        </div>
      </div>
    </section>
  )
}
