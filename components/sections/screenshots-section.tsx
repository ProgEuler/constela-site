import Image from "next/image"

const SCREENSHOTS = [
  {
    src: "/screenshots/Screenshot_1787086277.png",
    alt: "Constela app — match discovery screen",
  },
  {
    src: "/screenshots/Screenshot_1787086358.png",
    alt: "Constela app — profile detail screen",
  },
  {
    src: "/screenshots/Screenshot_1787086362.png",
    alt: "Constela app — conversation screen",
  },
  {
    src: "/screenshots/Screenshot_1787086374.png",
    alt: "Constela app — sensory preferences screen",
  },
] as const

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

        <div className="mt-16">
          <div className="mx-auto flex w-fit max-w-full flex-wrap items-start justify-center gap-6 sm:gap-8">
            {SCREENSHOTS.map((shot) => (
              <div
                key={shot.src}
                className="phone-frame w-[180px] sm:w-[220px] md:w-[240px]"
              >
                <div className="phone-screen py-2 bg-white">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1080}
                    height={2424}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 768px) 240px, (min-width: 640px) 220px, 180px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
