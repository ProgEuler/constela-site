"use client"

import * as React from "react"
import { MoonIcon, Sun01Icon } from "@hugeicons/core-free-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      suppressHydrationWarning
    >
      {mounted && (
        <Icon icon={isDark ? Sun01Icon : MoonIcon} className="size-4" />
      )}
    </Button>
  )
}
