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
  /* ================= CODE TYPING LOOP ================= */

  const [typedCode, setTypedCode] = useState("")
  const [codeIndex, setCodeIndex] = useState(0)
  const [codeDeleting, setCodeDeleting] = useState(false)

  useEffect(() => {
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
  }, [codeIndex, codeDeleting])

  /* ================= TITLE TYPING LOOP ================= */

  const [titleIndex, setTitleIndex] = useState(0)
  const [titleText, setTitleText] = useState("")
  const [titleChar, setTitleChar] = useState(0)
  const [titleDeleting, setTitleDeleting] = useState(false)

  useEffect(() => {
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
  }, [titleChar, titleDeleting, titleIndex])

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
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0">
  <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />

  <div className="absolute top-24 left-24 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />

  {/* Light mode = RED | Dark mode = GREEN */}
  <div className="absolute bottom-24 right-24 w-96 h-96 
                  bg-red-500/20 
                  dark:bg-green-500/20 
                  rounded-full blur-3xl" />
</div>


      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* ================= LEFT ================= */}
        <div className="space-y-8">
          <span className="inline-flex items-center min-h-[44px] px-6 py-3 rounded-full text-sm md:text-base font-bold tracking-widest bg-orange-500/10 text-orange-500 dark:text-red-500 border border-orange-500/30">
            {titleText}
            <span className="ml-1 animate-pulse">|</span>
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Building <span className="text-orange-500">Scalable</span>
            <br />
            & <span className="text-green-400">Intelligent</span> Web
            <br />
            Applications
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl">
            Java • Spring Boot • React • MySQL • Cloud & AI-Enabled Systems
          </p>

          <div className="flex gap-4 flex-wrap pt-4 ">
            <Button
              className="rounded-full px-8 bg-orange-500 hover:bg-orange-600 cursor-pointer "
              onClick={scrollToProjects}
            >
              View Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
  variant="outline"
  className="
    rounded-full px-8 cursor-pointer
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
        <div className="relative">
          {/* JAVA ICON BADGE */}
          <div className="absolute -top-3 -right-7 w-11 h-13 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse z-20">
            <i className="fab fa-java text-white text-2xl"></i>
          </div>

          {/* CODE CARD */}
          <div className="relative bg-gradient-to-br from-card to-card border border-border rounded-2xl p-6 text-sm font-mono shadow-2xl rotate-6 hover:rotate-3 transition-transform duration-500">
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
              <span className="animate-pulse">▍</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
