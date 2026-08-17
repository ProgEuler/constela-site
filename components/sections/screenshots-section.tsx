import { ImageIcon } from "lucide-react"

export function ScreenshotsSection() {
  return (
    <section id="preview" className="relative overflow-hidden py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div
        className="glow-orb left-1/2 top-20 size-[460px] -translate-x-1/2 bg-primary/70"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Preview
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A peek inside Constela
          </h2>
          <p className="mt-4 text-muted-foreground">
            Calm by default. Designed around your sensory profile, not against
            it.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="phone-frame w-[280px] sm:w-[320px]">
            <div className="phone-screen">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-muted-foreground">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-dashed border-border bg-background">
                  <ImageIcon className="size-6" />
                </div>
                <p className="text-sm font-medium">App screenshot</p>
                <p className="px-8 text-center text-xs text-muted-foreground/80">
                  Drop your mobile app screenshot here. Recommended 1170×2532
                  (iPhone Pro).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}