import { CHANGELOG } from "@/data/landing"

export function ChangelogSection() {
  return (
    <section id="changelog" className="border-t border-border/60">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Changelog
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Always improving
          </h2>
          <p className="mt-4 text-muted-foreground">
            We ship updates every month — shaped by feedback from the
            neurodivergent community.
          </p>
        </div>

        <ol className="mt-12 space-y-8 border-l border-border pl-6">
          {CHANGELOG.map((entry) => (
            <li key={entry.title} className="relative">
              <span className="absolute -left-[31px] top-1.5 flex size-4 items-center justify-center rounded-full border border-primary bg-background">
                <span className="size-1.5 rounded-full bg-primary" />
              </span>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {entry.date}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{entry.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}