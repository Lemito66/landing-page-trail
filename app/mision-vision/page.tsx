import { AboutPreview } from '@/components/about-preview'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { MissionVision } from '@/components/mission-vision'
import { ValuesSection } from '@/components/values-section'
import WhatsappButton from '@/components/whatsapp-button'
function MissionAndVission() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <MissionVision />
            <ValuesSection />
            <Footer />
            <WhatsappButton />
        </div>
    )
}

export default MissionAndVission