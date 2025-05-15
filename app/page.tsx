import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeatureCards } from "@/components/feature-cards"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-4 flex-1">
        <HeroSection />
        <FeatureCards />
        <CommunitySection />
        <FAQSection />
      </div>
      <Footer />
    </main>
  )
}
