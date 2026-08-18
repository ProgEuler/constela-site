"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { GooglePlayButton } from "@/components/ui/google-play-button"
import { Icon } from "@/components/ui/icon"
import { ThemeToggle } from "@/components/theme-toggle"
import { APP_CONFIG } from "@/config/app-config"
import { NAV_ITEMS } from "@/data/landing"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  // Close menu when resizing up to desktop width
  React.useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)")
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false)
    }
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Lock body scroll while menu is open
  React.useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.webp"
            alt={APP_CONFIG.name}
            width={32}
            height={32}
            className="size-8 rounded-lg shadow-sm shadow-primary/30"
          />
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
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <Icon icon={Cancel01Icon} className="size-5" />
            ) : (
              <Icon icon={Menu01Icon} className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-base text-foreground/90 transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
