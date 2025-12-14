"use client"

import { useInView } from "@/hooks/use-in-view"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion"
import { Coffee, Database } from "lucide-react"
import { useTheme } from "next-themes"
import { useRef } from "react"
import { FaReact } from "react-icons/fa"

export function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  // ✅ IMPORTANT: resolvedTheme only
  const { resolvedTheme } = useTheme()

  /* ===== 3D IMAGE TILT ===== */
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const smoothX = useSpring(rotateX, { stiffness: 120, damping: 18 })
  const smoothY = useSpring(rotateY, { stiffness: 120, damping: 18 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2

    rotateX.set(((y - cy) / cy) * -8)
    rotateY.set(((x - cx) / cx) * 8)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  const imageSrc =
    resolvedTheme === "dark" ? "/Photo2.png" : "/Photo1.png"

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-24 px-4 lg:px-12 bg-gradient-to-b from-background to-background"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-1000 ease-out
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="
          bg-gradient-to-br from-card/80 to-card/80
          backdrop-blur-xl rounded-3xl
          border border-border
          p-6 sm:p-10 lg:p-14
          shadow-[0_0_80px_-20px_rgba(249,115,22,0.2)]
        ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Let's get to know{" "}
                <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text">
                  me closer
                </span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                I am{" "}
                <strong className="text-foreground">
                  Prateek Yadav
                </strong>
                , a passionate Java Full Stack Developer with expertise in
                scalable web applications.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I focus on writing clean, maintainable code that delivers
                real-world impact.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-4 justify-center lg:justify-start">
                {[
                  "Java & Spring Boot",
                  "REST APIs",
                  "React Frontend",
                  "Database Design",
                  "Cloud & AI Exposure",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 sm:px-4 py-2 rounded-full
                      text-xs sm:text-sm font-medium
                      bg-orange-500/10 border border-orange-500/20
                      text-orange-400
                      hover:scale-105 transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className={`relative transition-all duration-1000 delay-300
              ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            >
              <div
                className="
                  relative
                  w-64 h-80
                  sm:w-72 sm:h-88
                  md:w-80 md:h-96
                  mx-auto
                "
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: 1200 }}
              >
                {/* GLOW */}
                <div
                  className="
                    absolute inset-0 rounded-3xl blur-2xl opacity-80
                    bg-orange-400/40 dark:bg-blue-500/35
                  "
                />

                {/* IMAGE */}
                <motion.div
                  style={{
                    rotateX: smoothX,
                    rotateY: smoothY,
                    transformStyle: "preserve-3d",
                  }}
                  className="
                    relative w-full h-full
                    rounded-2xl overflow-hidden
                    border border-white/10
                    shadow-2xl
                  "
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={resolvedTheme}
                      src={imageSrc}
                      alt="Prateek Yadav"
                      className="absolute inset-0 w-full h-full object-cover object-top"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </motion.div>

                {/* ICONS (hide on very small screens) */}
                <div className="hidden sm:flex absolute -top-4 -right-4 w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 rounded-xl items-center justify-center shadow-lg animate-pulse">
                  <Coffee className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div className="hidden sm:flex absolute top-1/2 -left-5 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 bg-blue-500 rounded-lg items-center justify-center shadow-lg animate-bounce">
                  <FaReact className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div className="hidden sm:flex absolute -bottom-4 -right-4 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-xl items-center justify-center shadow-lg animate-pulse">
                  <Database className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
