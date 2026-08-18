import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PRICING_PLANS, type PricingPlan } from "@/data/landing"
import { cn } from "@/lib/utils"

function PricingCard({ plan }: { plan: PricingPlan }) {
  const isHighlighted = plan.highlighted

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card p-7 transition-all",
        isHighlighted
          ? "border-primary shadow-xl shadow-primary/10 -translate-y-0 lg:scale-[1.03]"
          : "border-border hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
      )}
    >
      {isHighlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground shadow-sm">
          Most popular
        </span>
      )}

      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold tracking-tight">{plan.name}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>

      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="text-4xl font-semibold tracking-tight">
          {plan.price}
        </span>
        {plan.priceSuffix && (
          <span className="text-sm text-muted-foreground">
            {plan.priceSuffix}
          </span>
        )}
      </div>

      <Button
        asChild
        size="lg"
        variant={isHighlighted ? "default" : "outline"}
        className="mt-6 w-full"
      >
        <a href={plan.cta.href}>{plan.cta.label}</a>
      </Button>

      <ul className="mt-7 space-y-3 text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                isHighlighted
                  ? "bg-primary/15 text-primary"
                  : "bg-muted text-muted-foreground"
              )}
            >
              <Check className="size-3" />
            </span>
            <span className="text-foreground/90">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Free to start. Upgrade when you&apos;re ready.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Constela is free to use end-to-end. Paid tiers unlock more reach
            and finer-grained filters — never the basics of feeling seen.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Prices in USD. Cancel anytime — no hidden fees, no selling your data.
        </p>
      </div>
    </section>
  )
}
