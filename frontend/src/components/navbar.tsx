"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  /* ===== Scroll Effect ===== */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* ===== Smooth Scroll ===== */
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (!element) return

    const navbarHeight = 90
    const position =
      element.getBoundingClientRect().top + window.scrollY - navbarHeight

    window.scrollTo({ top: position, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  /* ===== Logo Click ===== */
  const handleLogoClick = () => {
    localStorage.setItem("theme", "light")
    window.location.reload()
  }

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="w-full px-3 sm:px-6 lg:px-10 py-2 sm:py-3">
        <div className="flex items-center justify-between">

          {/* ===== LOGO (ACCESSIBLE) ===== */}
          <button
            onClick={handleLogoClick}
            aria-label="Reload home and reset theme"
            className="flex items-center gap-2 cursor-pointer shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">
                PY
              </span>
            </div>

            <span className="hidden sm:block font-bold text-base sm:text-lg text-foreground">
              Prateek Yadav
            </span>
          </button>

          {/* ===== DESKTOP MENU ===== */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* ===== RIGHT ===== */}
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />

            {/* ===== MOBILE MENU ===== */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full max-w-[320px] sm:max-w-[380px] bg-background p-5 sm:p-6"
              >
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={handleLogoClick}
                    aria-label="Reload home"
                    className="flex items-center gap-2"
                  >
                    <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">PY</span>
                    </div>
                    <span className="font-bold text-base sm:text-lg">
                      Prateek Yadav
                    </span>
                  </button>

                  <button
                    aria-label="Close menu"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                    border border-border text-muted-foreground
                    hover:text-orange-500 hover:border-orange-500 hover:bg-orange-500/10"
                  >
                    ✕
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-base sm:text-lg font-medium
                      px-4 py-3 rounded-xl
                      text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
