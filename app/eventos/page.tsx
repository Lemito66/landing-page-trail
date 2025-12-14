import { EventsGrid } from '@/components/events-grid'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import WhatsappButton from '@/components/whatsapp-button'

function Events() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <EventsGrid />
            <Footer />
            <WhatsappButton />
        </div>
    )
}

export default Events