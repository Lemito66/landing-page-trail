import { AboutPreview } from '@/components/about-preview'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { MissionVision } from '@/components/mission-vision'
function About() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <AboutPreview />
            <MissionVision />
            <Footer />

        </div>
    )
}

export default About