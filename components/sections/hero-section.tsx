import { Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GooglePlayButton } from "@/components/ui/google-play-button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 landing-grid-bg" aria-hidden />
      <div
        className="glow-orb -left-32 top-10 size-[420px] bg-primary"
        aria-hidden
      />
      <div
        className="glow-orb -right-32 top-40 size-[360px] bg-chart-3"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center sm:pt-32">

        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          Authentic connections for
          <span className="block bg-primary bg-clip-text text-transparent">
            neurodivergent minds.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
          Constela is the dating and friendship app built for neurodivergent
          people — matching on substance, compatibility, and authenticity, not
          just photos.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <GooglePlayButton size="lg" />
          {/* <Button size="lg" variant="outline" className="h-12 px-5 text-[15px]">
            Learn more
          </Button> */}
        </div>

        <p className="mt-5 text-xs text-muted-foreground">
          Available on Android · iOS coming soon
        </p>
      </div>
    </section>
  )
}
