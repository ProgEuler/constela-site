"use client"

import * as React from "react"
import { useTheme } from "next-themes"

const THEME_TOGGLE_KEY = "d"

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false
  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

export function ThemeHotkey() {
  const { setTheme } = useTheme()

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) return
      if (event.metaKey || event.ctrlKey || event.altKey) return
      if (event.key.toLowerCase() !== THEME_TOGGLE_KEY) return
      if (isTypingTarget(event.target)) return

      setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [setTheme])

  return null
}
