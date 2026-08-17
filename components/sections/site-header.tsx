import Link from "next/link"
import { Menu } from "lucide-react"

import { LogoMark } from "@/components/brand"
import { Button } from "@/components/ui/button"
import { GooglePlayButton } from "@/components/ui/google-play-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { APP_CONFIG } from "@/config/app-config"
import { NAV_ITEMS } from "@/data/landing"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark className="shadow-sm shadow-primary/30" />
          <span className="font-semibold tracking-tight">
            {APP_CONFIG.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <GooglePlayButton size="sm" className="hidden sm:inline-flex" />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  )
}