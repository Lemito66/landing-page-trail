import { EventsGrid } from '@/components/events-grid'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'

function Events() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <EventsGrid />
            <Footer />
        </div>
    )
}

export default Events