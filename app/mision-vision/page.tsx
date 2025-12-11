import { AboutPreview } from '@/components/about-preview'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { MissionVision } from '@/components/mission-vision'
import { ValuesSection } from '@/components/values-section'
function MissionAndVission() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <MissionVision />
            <ValuesSection />
            <Footer />
        </div>
    )
}

export default MissionAndVission