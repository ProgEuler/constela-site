import Link from "next/link"

import { LogoMark } from "@/components/brand"
import { APP_CONFIG } from "@/config/app-config"
import { FOOTER_GROUPS, FOOTER_NAV } from "@/data/landing"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <LogoMark />
              <span className="font-semibold tracking-tight">
                {APP_CONFIG.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The dating and friendship app for neurodivergent people — built
              with the community, designed for authenticity.
            </p>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>{APP_CONFIG.copyright}</p>
          <ul className="flex items-center gap-5">
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/privacy"
                className="transition-colors hover:text-foreground"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="transition-colors hover:text-foreground"
              >
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
