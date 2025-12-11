"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  eventDate: string
  eventName?: string
}

export function CountdownTimer({ eventDate, eventName }: CountdownTimerProps) {
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
      {eventName && <h3 className="text-lg font-semibold text-accent">{eventName}</h3>}
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
      </div>
    </div>
  )
}
