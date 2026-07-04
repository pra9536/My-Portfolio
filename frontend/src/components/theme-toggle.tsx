"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="h-9 w-9 rounded-full hover:bg-secondary/80"
    >
      {/* Sun icon */}
      <Sun
        aria-hidden="true"
        className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />

      {/* Moon icon */}
      <Moon
        aria-hidden="true"
        className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />

      {/* Screen reader fallback */}
      <span className="sr-only">
        {isDark ? "Switch to light theme" : "Switch to dark theme"}
      </span>
    </Button>
  )
}
