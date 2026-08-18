import { CtaSection } from "@/components/sections/cta-section"
import { ChangelogSection } from "@/components/sections/changelog-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { HeroSection } from "@/components/sections/hero-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { ScreenshotsSection } from "@/components/sections/screenshots-section"
import { SiteFooter } from "@/components/sections/site-footer"
import { SiteHeader } from "@/components/sections/site-header"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <ScreenshotsSection />
        <ChangelogSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}