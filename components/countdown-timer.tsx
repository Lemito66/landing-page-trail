"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  eventDate: string
  eventName?: string,
  inscriptionLink?: string
}

export function CountdownTimer({ eventDate, eventName, inscriptionLink }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const targetDate = new Date(eventDate).getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [eventDate])

  if (!mounted) {
    return null
  }

  return (
    <div className="space-y-4">
      {eventName && <h1 className="text-2xl font-semibold text-accent">{eventName}</h1>}
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 sm:p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-accent">{timeLeft.days}</div>
          <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mt-1">Días</div>
        </div>
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 sm:p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-accent">{timeLeft.hours}</div>
          <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mt-1">Horas</div>
        </div>
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 sm:p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-accent">{timeLeft.minutes}</div>
          <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mt-1">Min</div>
        </div>
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 sm:p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold text-accent">{timeLeft.seconds}</div>
          <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mt-1">Seg</div>
        </div>
        <div className="col-span-4 mt-4 text-center">
          {inscriptionLink?.trim() ? (
            <a
              href={inscriptionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Inscripciones Abiertas
            </a>
          ) : (
            <span className="inline-block px-6 py-3 bg-muted text-muted-foreground font-semibold rounded-lg">
              Muy pronto
            </span>
          )}
        </div>


      </div>
    </div>
  )
}
