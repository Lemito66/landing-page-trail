"use client"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { UpcomingEventTimer } from "@/components/upcoming-event-timer"
import { Footer } from "@/components/footer"
import WhatsappButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <UpcomingEventTimer />
      <Footer />
      <WhatsappButton />
    </div>
  )
}
