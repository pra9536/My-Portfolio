"use client"

import { useInView } from "@/hooks/use-in-view"
import { ExternalLink, Github } from "lucide-react"
import { useRef, useState } from "react"

type Project = {
  title: string
  tech: string
  description: string
  image: string
  codeLink: string
  demoLink: string
  gradient: string
  features: string[]
  technologies: string[]
}

const projects: Project[] = [
  {
    title: "Quiz Application",
    tech: "Core Java, Swing",
    description:
      "Desktop-based interactive quiz application with multiple choice questions, timer functionality, and score tracking.",
    image: "/quiz-app-interface.jpg",
    codeLink: "https://github.com/pra9536/QuizApplication",
    demoLink: "#",
    gradient: "from-blue-500 to-blue-600",
    technologies: ["Java", "Swing", "OOP", "Event Handling", "MVC Pattern", "JDBC"],
    features: [
      "Timer-based questions",
      "Auto score calculation",
      "Result summary",
      "Clean UI",
    ],
  },
  {
    title: "Book My Movies",
    tech: "Java, JDBC, MySQL",
    description:
      "Movie ticket booking system with seat selection, payment integration, and booking management.",
    image: "/movie-booking-app.jpg",
    codeLink: "https://github.com/pra9536/BookMyMovies-Java-JDBC",
    demoLink: "#",
    gradient: "from-purple-500 to-purple-600",
    technologies: [
      "Java",
      "JDBC",
      "MySQL",
      "SQL Queries",
      "Authentication",
      "Exception Handling",
      "Database Design",
    ],
    features: [
      "Seat selection",
      "User authentication",
      "Booking history",
      "Database-driven",
    ],
  },
  {
    title: "WatchList Application",
    tech: "Spring Boot, Thymeleaf, JPA",
    description:
      "Movie watchlist manager built with Spring Boot. Features movie search and ratings.",
    image: "/watchlist-app.jpg",
    codeLink: "https://github.com/pra9536/WatchListApp",
    demoLink: "#",
    gradient: "from-green-500 to-green-600",
    technologies: [
      "Spring Boot",
      "Spring MVC",
      "JPA",
      "Hibernate",
      "Thymeleaf",
      "REST APIs",
    ],
    features: [
      "Movie search",
      "Ratings",
      "Watchlist management",
      "Responsive UI",
    ],
  },
]

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  const [showAll, setShowAll] = useState(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <>
      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        ref={ref}
        className="py-24 px-4 bg-background text-foreground"
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My Projects{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text">
                Highlight
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world projects demonstrating strong technical skills
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {visibleProjects.map((project, index) => (
              <div key={index} className="relative">

                {/* Back Card */}
                <div className="absolute inset-0 translate-x-3 translate-y-3
                  rounded-2xl
                  bg-gray-200/80 dark:bg-gray-900/60
                  border border-gray-300 dark:border-gray-700/40"
                />

                {/* Front Card */}
                <div
                  className={`relative z-10 flex flex-col h-full
                  rounded-2xl overflow-hidden border
                  bg-white dark:bg-gradient-to-br dark:from-gray-900/80 dark:to-gray-800/60
                  border-gray-200 dark:border-gray-700/50
                  shadow-xl transition-all duration-500
                  hover:scale-105 hover:-translate-y-2
                  ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0
                      bg-gradient-to-t
                      from-white/90 dark:from-gray-900/80
                      to-transparent"
                    />

                    <span className="absolute top-4 left-4 text-xs font-medium
                      px-3 py-1 rounded-full
                      bg-white/80 text-gray-800
                      dark:bg-black/60 dark:text-gray-300">
                      {project.tech}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 space-y-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>

                    {/* Skills Preview */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full
                          bg-gray-200 text-gray-800
                          dark:bg-gray-800 dark:text-gray-300
                          border border-gray-300 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}

                      {project.technologies.length > 4 && (
                        <span className="text-xs text-orange-500 px-2">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="mt-auto pt-4 flex justify-between">
                      <div className="flex gap-3">
                        <a
                          href={project.codeLink}
                          target="_blank"
                          className="h-10 px-4 flex items-center gap-2 rounded-lg
                          bg-gray-100 text-gray-800
                          dark:bg-gray-800 dark:text-gray-300
                          text-sm transition"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>

                        <a
                          href={project.demoLink}
                          target="_blank"
                          className={`h-10 px-4 flex items-center gap-2 rounded-lg
                          bg-gradient-to-r ${project.gradient}
                          text-white text-sm`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </div>

                      <button
                        onClick={() => setActiveProject(project)}
                        className="h-10 px-4 rounded-lg text-sm
                        text-orange-500 border border-orange-400/40
                        hover:bg-orange-500/10"
                      >
                        Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All */}
          <div className="flex justify-center mt-16">
          <div
            className={`bg-gradient-to-br from-secondary/80 to-secondary/40
            backdrop-blur-xl rounded-2xl p-6
            border border-border/50
            shadow-2xl transition-all duration-700
            ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-3 rounded-full font-semibold
              bg-orange-500 text-white
              hover:bg-orange-600
              transition-all duration-300
              shadow-lg hover:shadow-orange-500/40"
            >
              {showAll ? "Show Less" : "View All Projects"}
            </button>
          </div>
        </div>

        </div>
      </section>

      {/* ================= MODAL ================= */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center
        bg-black/70 backdrop-blur-sm">

          <div className="relative max-w-3xl w-full mx-4
          bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800
          rounded-2xl overflow-hidden border
          border-gray-300 dark:border-gray-700 shadow-2xl">

            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10
              rounded-full bg-gray-200 dark:bg-black/60
              text-gray-800 dark:text-white hover:text-orange-400"
            >
              ✕
            </button>

            <div className="relative h-64">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t
                from-white/90 dark:from-gray-900/80 to-transparent" />
              <h3 className="absolute bottom-4 left-6 text-2xl font-bold">
                {activeProject.title}
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-gray-600 dark:text-gray-400">
                {activeProject.description}
              </p>

              <div>
                <h4 className="text-lg font-semibold mb-3">
                  Skills & Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-full text-sm
                      bg-orange-500/10 text-orange-600
                      dark:text-orange-400
                      border border-orange-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                {activeProject.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="flex gap-4 pt-2">
                <a
                  href={activeProject.codeLink}
                  target="_blank"
                  className="px-5 py-2 rounded-lg bg-gray-200
                  dark:bg-gray-800 text-sm flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>

                <a
                  href={activeProject.demoLink}
                  target="_blank"
                  className={`px-5 py-2 rounded-lg
                  bg-gradient-to-r ${activeProject.gradient}
                  text-white text-sm flex items-center gap-2`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
