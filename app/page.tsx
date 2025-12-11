"use client"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { AboutPreview } from "@/components/about-preview"
import { MissionVision } from "@/components/mission-vision"
import { EventsGrid } from "@/components/events-grid"
import { ValuesSection } from "@/components/values-section"
import { UpcomingEventTimer } from "@/components/upcoming-event-timer"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <UpcomingEventTimer />
      <AboutPreview />
      <MissionVision />
      <EventsGrid />
      <ValuesSection />
      <Footer />
    </div>
  )
}
