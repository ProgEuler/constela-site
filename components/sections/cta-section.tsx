import { GooglePlayButton } from "@/components/ui/google-play-button"

export function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card p-10 text-center shadow-xl shadow-primary/5 sm:p-16">
        <div
          className="glow-orb -top-20 left-1/2 size-[300px] -translate-x-1/2 bg-primary/60"
          aria-hidden
        />
        <h2 className="relative text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to find your people?
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-muted-foreground">
          Download Constela and start meeting neurodivergent people near you.
          Free to start, optional Premium if you want more.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <GooglePlayButton size="lg" />
        </div>
      </div>
    </section>
  )
}