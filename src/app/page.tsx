"use client"

import { About } from "@/components/about"
import { Achievements } from "@/components/achievements"
import Contact from "@/components/contact"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      {/* <Projects />
      <Experience />
      <Skills /> */}
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
