import { GooglePlayButton } from "@/components/ui/google-play-button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden isolate">
      <div className="absolute inset-0 -z-10 landing-grid-bg" aria-hidden />
      <div
        className="glow-orb -left-16 top-2 size-[220px] bg-primary sm:-left-32 sm:top-10 sm:size-[420px]"
        aria-hidden
      />
      <div
        className="glow-orb -right-16 bottom-0 size-[200px] bg-chart-3 sm:-right-32 sm:top-40 sm:bottom-auto sm:size-[360px]"
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
        </div>

        <p className="mt-5 text-xs text-muted-foreground">
          Available on Android · iOS coming soon
        </p>
      </div>
    </section>
  )
}
