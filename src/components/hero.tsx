"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { useEffect, useState } from "react"

/* ================= CODE STRING ================= */

const CODE = `public class Developer {
  private String name = "Prateek Yadav";

  private String[] skills = {
    "Java",
    "Spring Boot",
    "React",
    "MySQL"
  };

  public static void main(String[] args) {
    Developer dev = new Developer();
    System.out.print(dev.name);
  }
}`

/* ================= ROTATING TITLES ================= */

const TITLES = [
  "Java Full Stack Developer",
  "React.js Developer",
  "Spring Boot Developer",
  "Artificial Intelligence",
  "Cloud Computing",
]

export function Hero() {
  /* ================= POST-LCP CONTROL ================= */

  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setStartAnimation(true), 900)
    return () => clearTimeout(id)
  }, [])

  /* ================= CODE TYPING LOOP ================= */

  const [typedCode, setTypedCode] = useState("")
  const [codeIndex, setCodeIndex] = useState(0)
  const [codeDeleting, setCodeDeleting] = useState(false)

  useEffect(() => {
    if (!startAnimation) return

    let timeout: NodeJS.Timeout

    if (!codeDeleting) {
      if (codeIndex < CODE.length) {
        timeout = setTimeout(() => {
          setTypedCode(CODE.slice(0, codeIndex + 1))
          setCodeIndex(codeIndex + 1)
        }, 120)
      } else {
        timeout = setTimeout(() => setCodeDeleting(true), 1800)
      }
    } else {
      if (codeIndex > 0) {
        timeout = setTimeout(() => {
          setTypedCode(CODE.slice(0, codeIndex - 1))
          setCodeIndex(codeIndex - 1)
        }, 80)
      } else {
        setCodeDeleting(false)
      }
    }

    return () => clearTimeout(timeout)
  }, [codeIndex, codeDeleting, startAnimation])

  /* ================= TITLE TYPING LOOP ================= */

  const [titleIndex, setTitleIndex] = useState(0)
  const [titleText, setTitleText] = useState("")
  const [titleChar, setTitleChar] = useState(0)
  const [titleDeleting, setTitleDeleting] = useState(false)

  useEffect(() => {
    if (!startAnimation) return

    const current = TITLES[titleIndex]
    let timeout: NodeJS.Timeout

    if (!titleDeleting) {
      if (titleChar < current.length) {
        timeout = setTimeout(() => {
          setTitleText(current.slice(0, titleChar + 1))
          setTitleChar(titleChar + 1)
        }, 80)
      } else {
        timeout = setTimeout(() => setTitleDeleting(true), 1200)
      }
    } else {
      if (titleChar > 0) {
        timeout = setTimeout(() => {
          setTitleText(current.slice(0, titleChar - 1))
          setTitleChar(titleChar - 1)
        }, 50)
      } else {
        setTitleDeleting(false)
        setTitleIndex((prev) => (prev + 1) % TITLES.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [titleChar, titleDeleting, titleIndex, startAnimation])

  /* ================= ACTIONS ================= */

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Resume.pdf"
    link.download = "Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 sm:px-6 overflow-hidden"
    >
      {/* ===== BACKGROUND (DECORATIVE) ===== */}
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />

        <div
          aria-hidden
          className="hidden sm:block absolute top-24 left-24 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"
        />

        <div
          aria-hidden
          className="hidden sm:block absolute bottom-24 right-24 w-96 h-96 
          bg-red-500/20 dark:bg-green-500/20 
          rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        {/* ================= LEFT ================= */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <span
            className="
              inline-flex items-center justify-center
              min-h-[40px] px-4 sm:px-6 py-2 sm:py-3
              rounded-full text-xs sm:text-sm md:text-base
              font-bold tracking-widest
              bg-orange-500/10 text-orange-500
              dark:text-red-500
              border border-orange-500/30
            "
          >
            {titleText}
            <span className="ml-1 opacity-70">|</span>
          </span>

          {/* ===== LCP ELEMENT ===== */}
          <h1
            className="
              text-3xl sm:text-4xl md:text-6xl lg:text-7xl
              font-extrabold leading-tight
              will-change-transform
              contain-layout
            "
          >
            Building <span className="text-orange-500">Scalable</span>
            <br />
            & <span className="text-green-400">Intelligent</span> Web
            <br />
            Applications
          </h1>

          <p
            className="
              text-sm sm:text-base md:text-lg
              text-muted-foreground
              max-w-xl mx-auto lg:mx-0
            "
          >
            Java • Spring Boot • React • MySQL • Cloud & AI-Enabled Systems
          </p>

          <div
            className="
              flex flex-col sm:flex-row
              gap-3 sm:gap-4
              justify-center lg:justify-start
              pt-2 sm:pt-4
            "
          >
            <Button
              className="rounded-full px-6 sm:px-8 bg-orange-500 hover:bg-orange-600"
              onClick={scrollToProjects}
            >
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              className="
                rounded-full px-6 sm:px-8
                border-gray-500/40
                transition-all duration-300
                hover:bg-blue-600 hover:text-white hover:border-blue-600
                dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-600
              "
              onClick={downloadResume}
            >
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* ================= RIGHT (CODE CARD) ================= */}
        <div className="relative hidden md:block">
          <div className="absolute -top-3 -right-7 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg z-20">
            <i className="fab fa-java text-white text-xl"></i>
          </div>

          <div
            className="
              relative bg-gradient-to-br from-card to-card
              border border-border
              rounded-2xl p-5 sm:p-6
              text-xs sm:text-sm
              font-mono shadow-2xl
              rotate-3 lg:rotate-6
              hover:rotate-3 transition-transform duration-500
            "
          >
            <div className="flex gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="absolute top-4 right-5 text-xs text-muted-foreground">
              portfolio.java
            </div>

            <pre className="whitespace-pre-wrap leading-relaxed">
              <code className="text-red-500 dark:text-green-400">
                {typedCode}
              </code>
              <span className="opacity-70">▍</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
