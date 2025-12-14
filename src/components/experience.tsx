"use client"

import { useInView } from "@/hooks/use-in-view"
import {
  Building2,
  Code2,
  ExternalLink,
} from "lucide-react"
import { useRef } from "react"

const experiences = [
  {
    title: "AI Azure Intern",
    company: "Microsoft",
    duration: "May 2025 – June 2025",
    type: "Internship",
    Icon: Building2,
    gradient: "from-blue-500 to-blue-600",
    certificateLink:
      "https://drive.google.com/file/d/182FxMDc5U4rUjhevJy2D-YULimpHf25b/view?usp=sharing",
    achievements: [
      "Built intelligent applications using Azure Custom Vision API for image recognition",
      "Developed Face Recognition system with CNN architecture achieving 95% accuracy",
      "Improved automation and deployment efficiency by 40% using Azure DevOps pipelines",
      "Collaborated with cross-functional teams on AI-powered solutions",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "WebStack Academy",
    duration: "Sep 2025 – Nov 2025",
    type: "Internship",
    Icon: Code2,
    gradient: "from-green-500 to-green-600",
    certificateLink:
      "https://drive.google.com/file/d/1Vm6qtBfP6RuXrRGi6THdPssGFlSV1gPk/view?usp=sharing",
    achievements: [
      "Built comprehensive MERN stack applications with JWT authentication",
      "Integrated Stripe payment gateway for e-commerce solutions",
      "Improved UI stability and data fetch performance by 35%",
      "Mentored junior developers on React best practices and state management",
    ],
  },
]

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section id="experience" ref={ref} className="py-20 sm:py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text">
              Experience
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and technology innovation
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line (desktop only) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-green-500 hidden md:block" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative transition-all duration-700
                ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
                style={{ transitionDelay: `${index * 250}ms` }}
              >
                {/* Timeline Dot (desktop only) */}
                <div
                  className={`absolute left-6 w-5 h-5 bg-gradient-to-r ${exp.gradient}
                  rounded-full border-4 border-background shadow-lg hidden md:block`}
                />

                {/* Card wrapper */}
                <div className="ml-0 md:ml-20">
                  <div
                    className="
                      relative bg-gradient-to-br from-secondary/80 to-secondary/40
                      backdrop-blur-xl border border-border/50 rounded-2xl
                      p-5 sm:p-6 md:p-8
                      shadow-2xl transition-all duration-500
                      hover:-translate-y-1
                      shadow-[0_0_60px_-15px_rgba(249,115,22,0.2)]
                    "
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${exp.gradient}
                          flex items-center justify-center shadow-lg`}
                        >
                          <exp.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold hover:text-orange-400 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-orange-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end gap-2">
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                          {exp.duration}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium
                          border border-orange-500/30
                          text-transparent bg-gradient-to-r ${exp.gradient} bg-clip-text`}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground"
                          >
                            <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certificate Button */}
                    <div className="flex justify-start sm:justify-end">
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          px-4 py-2 text-sm font-medium
                          rounded-lg border border-orange-500/40
                          text-orange-400
                          hover:bg-orange-500 hover:text-black
                          transition-all duration-300
                        "
                      >
                        View Certificate
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
