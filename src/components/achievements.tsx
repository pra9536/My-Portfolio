"use client"

import { useInView } from "@/hooks/use-in-view"
import {
  Award,
  Bot,
  ClipboardCheck,
  Code2,
  ExternalLink,
  GitBranch,
  Medal,
  Network,
  Terminal,
  Trophy,
} from "lucide-react"
import { useRef, useState } from "react"

/* ================= DATA ================= */

const achievements = [
  {
    Icon: Trophy,
    stat: "₹2,00,000",
    title: "Reliance Scholarship Winner",
    description:
      "Awarded ₹2,00,000 scholarship for academic excellence and innovative project development",
    gradient: "from-yellow-500 to-orange-500",
    link:
      "https://drive.google.com/file/d/1Bq-6Ger9KoNUXb3AZtb23esifpWshfBX/view?usp=sharing",
  },
  {
    Icon: Award,
    stat: "Code for Success",
    title: "Java Full Stack Certified",
    description:
      "Comprehensive certification in Java Full Stack Development with hands-on project experience",
    gradient: "from-blue-500 to-purple-500",
    link:
      "https://drive.google.com/file/d/14D8uQVB204rlN0IN3qT2cFTkpBH44QJ_/view?usp=sharing",
  },
  {
    Icon: Bot,
    stat: "NPTEL",
    title: "Programming with Generative AI",
    description:
      "Certification in Generative AI technologies and machine learning applications",
    gradient: "from-purple-500 to-pink-500",
    link:
      "https://drive.google.com/file/d/1JDtC3x93Z539WpHD83Y3LWzvYf8pfGan/view?usp=sharing",
  },
  {
    Icon: Code2,
    stat: "Oracle",
    title: "DevOps Tools Certification",
    description:
      "Certified expertise in DevOps tools including Git, Jenkins, Docker, Kubernetes, and automated deployment workflows",
    gradient: "from-blue-500 to-indigo-500",
    link:
      "https://drive.google.com/file/d/11fz_n1VGpR_dBxPOg9urL1h6RrrbNQOi/view?usp=sharing",
  },
  {
    Icon: Terminal,
    stat: "Hacker Rank",
    title: "JavaScript for Web Development",
    description:
      "Certified in JavaScript fundamentals, DOM scripting, and modern web workflows",
    gradient: "from-amber-400 to-yellow-500",
    link:
      "https://drive.google.com/file/d/1wqZKZ9fHyL37pU2xOngxpZa7Ay27OhDs/view?usp=sharing",
  },
  {
    Icon: Medal,
    stat: "Infosys",
    title: "DSA Certification",
    description:
      "Recognized expertise in Data Structures and Algorithms by Infosys training program",
    gradient: "from-indigo-500 to-blue-500",
    link:
      "https://drive.google.com/file/d/1Jusu2wV3H8aBi83oa0SluCKCnB0Ivmxq/view?usp=sharing",
  },
  {
    Icon: GitBranch,
    stat: "Microsoft",
    title: "Git & GitHub Certification",
    description:
      "Certified in version control using Git and GitHub, including branching strategies, pull requests, code reviews, and collaborative workflows",
    gradient: "from-orange-500 to-red-500",
    link:
      "https://drive.google.com/file/d/1uf09EBYQwk501Un5ngQAMT24_ftpqNxQ/view?usp=sharing",
  },
  {
    Icon: Network,
    stat: "Physics Wallah",
    title: "System Design Certification",
    description:
      "Industry-focused system design training covering scalability, load balancing, databases, caching, APIs, and designing high-availability distributed systems",
    gradient: "from-sky-500 to-indigo-500",
    link:
      "https://drive.google.com/file/d/1kKFPFId4Zd7jfdHYxhm-KXrlF7cvuWiR/view?usp=sharing",
  },
  {
    Icon: ClipboardCheck,
    stat: "Qualified",
    title: "Naukri Campus Aptitude Test",
    description:
      "Qualified Naukri Campus Aptitude Test assessing quantitative aptitude, logical reasoning, verbal ability, and problem-solving skills for placement readiness",
    gradient: "from-green-500 to-emerald-500",
    link:
      "https://drive.google.com/file/d/1hL0mZrVBGxDSJSdbSFCPJR8RKkNVpdp9/view?usp=sharing",
  },
]

/* ================= CARD BASE ================= */

const cardBaseClass = `
  w-full max-w-xl
  min-h-[300px]
  bg-gradient-to-br from-secondary/80 to-secondary/40
  backdrop-blur-xl rounded-xl
  p-5 sm:p-6 md:p-8
  border border-border/50
  shadow-2xl
  transition-all duration-500
  sm:hover:-translate-y-2 sm:hover:scale-[1.02]
  shadow-[0_0_60px_-15px_rgba(249,115,22,0.2)]
`

/* ================= COMPONENT ================= */

export function Achievements() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)
  const [showAll, setShowAll] = useState(false)

  const visibleAchievements = showAll
    ? achievements
    : achievements.slice(0, 3)

  return (
    <section id="achievements" ref={ref} className="py-20 sm:py-24 px-4">
      <div className="container mx-auto max-w-7xl">

        {/* ===== Heading ===== */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Achievements &{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text">
              Certifications
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones in my development journey
          </p>
        </div>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {visibleAchievements.map((item, index) => (
            <div
              key={item.title}
              className="relative w-full max-w-xl group"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* BACK CARD */}
              <div
                className="
                  absolute inset-0
                  translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3
                  rounded-xl
                  bg-gradient-to-br from-secondary/60 to-secondary/30
                  border border-border/40
                  blur-[1px]
                  opacity-80
                "
              />

              {/* FRONT CARD */}
              <div
                className={`
                  relative z-10 flex flex-col
                  ${cardBaseClass}
                  ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
              >
                {/* Icon + Stat */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl
                    bg-gradient-to-r ${item.gradient}
                    flex items-center justify-center shadow-lg
                    transition-transform duration-300
                    group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <item.Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>

                  <div
                    className={`text-lg sm:text-xl font-bold
                    text-transparent bg-gradient-to-r ${item.gradient} bg-clip-text`}
                  >
                    {item.stat}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Button */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-auto inline-flex items-center gap-2
                    px-4 py-2 text-sm font-medium
                    rounded-lg
                    border border-orange-500/40
                    text-orange-400
                    hover:bg-orange-500 hover:text-black
                    transition-all duration-300
                  "
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 rounded-xl
                  bg-gradient-to-r ${item.gradient}
                  opacity-0 group-hover:opacity-[0.06]
                  transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ===== View All Button ===== */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <div
            className={`bg-gradient-to-br from-secondary/80 to-secondary/40
            backdrop-blur-xl rounded-2xl p-5 sm:p-6
            border border-border/50
            shadow-2xl transition-all duration-700
            ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 sm:px-10 py-3 rounded-full font-semibold
              bg-orange-500 text-white
              hover:bg-orange-600
              transition-all duration-300
              shadow-lg hover:shadow-orange-500/40"
            >
              {showAll ? "Show Less" : "View All Certificates"}
            </button>
          </div>
        </div>

        {/* ===== Stats ===== */}
        <div className="mt-14 sm:mt-20 bg-gradient-to-br from-secondary/80 to-secondary/40
          backdrop-blur-xl border border-border/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
            <Stat value="9+" label="Certifications" gradient="from-orange-400 to-orange-500" />
            <Stat value="900+" label="Problems Solved" gradient="from-green-400 to-green-500" />
            <Stat value="24+" label="Technologies" gradient="from-blue-400 to-blue-500" />
            <Stat value="8+" label="Major Projects" gradient="from-purple-400 to-purple-500" />
          </div>
        </div>

      </div>
    </section>
  )
}

/* ================= STAT ================= */

function Stat({
  value,
  label,
  gradient,
}: {
  value: string
  label: string
  gradient: string
}) {
  return (
    <div className="space-y-2">
      <div
        className={`text-2xl sm:text-3xl font-bold
        text-transparent bg-gradient-to-r ${gradient} bg-clip-text`}
      >
        {value}
      </div>
      <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  )
}
