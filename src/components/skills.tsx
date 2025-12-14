"use client"

import { useInView } from "@/hooks/use-in-view"
import { useRef, useState } from "react"

export function Skills() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="skills" ref={ref} className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        {/* ================= ROW 1 (ALWAYS VISIBLE) ================= */}
        <div className="grid md:grid-cols-2 gap-12 justify-items-center">
          <LayeredCard>
            <SkillCard title="Programming Languages">
              <SkillBar label="Java" percent={95} color="from-red-500 to-orange-500" tag="J" />
              <SkillBar label="JavaScript" percent={90} color="from-yellow-500 to-yellow-600" tag="JS" />
              <SkillBar label="TypeScript" percent={85} color="from-blue-500 to-blue-600" tag="TS" />
              <SkillBar label="Python" percent={80} color="from-green-500 to-blue-500" tag="Py" />
            </SkillCard>
          </LayeredCard>

          <LayeredCard>
            <SkillCard title="Backend Technologies">
              <SkillBar label="Spring Boot" percent={95} color="from-green-500 to-green-600" tag="SB" />
              <SkillBar label="REST APIs" percent={90} color="from-purple-500 to-purple-600" tag="API" />
              <SkillBar label="JDBC" percent={85} color="from-blue-500 to-indigo-500" tag="DB" />
              <SkillBar label="Microservices" percent={80} color="from-teal-500 to-cyan-500" tag="MS" />
            </SkillCard>
          </LayeredCard>
        </div>

        {/* ================= ROW 2 + ROW 3 (TOGGLE) ================= */}
        {showAll && (
          <>
            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-12 mt-12 justify-items-center">
              <LayeredCard>
                <SkillCard title="Frontend Technologies">
                  <SkillBar label="React" percent={90} color="from-cyan-500 to-blue-500" tag="R" />
                  <SkillBar label="HTML5" percent={95} color="from-orange-500 to-red-500" tag="H5" />
                  <SkillBar label="CSS3" percent={90} color="from-blue-500 to-purple-500" tag="C3" />
                  <SkillBar label="Tailwind CSS" percent={85} color="from-teal-500 to-green-500" tag="TW" />
                </SkillCard>
              </LayeredCard>

              <LayeredCard>
                <SkillCard title="Database">
                  <SkillBar label="MySQL" percent={90} color="from-blue-700 to-blue-900" tag="SQL" />
                  <SkillBar label="MongoDB" percent={80} color="from-green-600 to-green-800" tag="MDB" />
                  <SkillBar label="System Design" percent={80} color="from-purple-500 to-pink-600" tag="SD" />
                  <SkillBar label="Database Design" percent={85} color="from-indigo-500 to-indigo-700" tag="DB" />
                </SkillCard>
              </LayeredCard>
            </div>

            {/* ROW 3 */}
            <div className="grid md:grid-cols-2 gap-12 mt-12 justify-items-center">
              <LayeredCard>
                <SkillCard title="AI & Cloud Technologies">
                  <SkillBar label="Artificial Intelligence" percent={80} color="from-fuchsia-500 to-purple-600" tag="AI" />
                  <SkillBar label="Microsoft Azure" percent={75} color="from-blue-500 to-sky-600" tag="AZ" />
                  <SkillBar label="Docker" percent={80} color="from-cyan-500 to-blue-600" tag="DK" />
                  <SkillBar label="Google Cloud Platform" percent={85} color="from-emerald-500 to-green-600" tag="GCP" />
                </SkillCard>
              </LayeredCard>

              <LayeredCard>
                <SkillCard title="Developer Tools">
                  <SkillBar label="VS Code" percent={95} color="from-blue-600 to-blue-800" tag="VS" />
                  <SkillBar label="Git & GitHub" percent={85} color="from-gray-700 to-gray-900" tag="Git" />
                  <SkillBar label="IntelliJ IDEA" percent={90} color="from-pink-600 to-purple-700" tag="IJ" />
                  <SkillBar label="Eclipse" percent={80} color="from-indigo-500 to-indigo-700" tag="EC" />
                </SkillCard>
              </LayeredCard>
            </div>
          </>
        )}

        {/* ================= VIEW ALL / SHOW LESS BUTTON ================= */}
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
              {showAll ? "Show Less" : "View All Skills"}
            </button>
          </div>
        </div>

        {/* ================= COMPUTER SCIENCE FUNDAMENTALS ================= */}
        <div
          className={`mt-14 bg-gradient-to-br from-secondary/80 to-secondary/40
          backdrop-blur-xl rounded-2xl p-8 border border-border/50
          shadow-2xl transition-all duration-1000
          ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          shadow-[0_0_60px_-15px_rgba(34,197,94,0.25)]`}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-green-500 rounded-full"></div>
            Computer Science Fundamentals
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { tag: "DSA", label: "Data Structures and Algorithms" },
              { tag: "OS", label: "Operating System" },
              { tag: "OOP", label: "OOP Concepts" },
              { tag: "DBMS", label: "Database Management System" },
            ].map((item) => (
              <div
                key={item.tag}
                className={`group bg-secondary/50 border border-border/30 rounded-xl p-4 text-center
                transition-all duration-700 hover:scale-105 hover:bg-secondary/70`}
              >
                <div className="min-w-[64px] h-12 px-4 bg-gradient-to-r from-green-500 to-green-600
                rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm tracking-wide">
                    {item.tag}
                  </span>
                </div>
                <span className="text-muted-foreground text-sm font-medium group-hover:text-foreground transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

/* ================= LAYERED CARD ================= */

function LayeredCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-xl group transition-all duration-500">
      <div
        className="absolute inset-0 translate-x-4 translate-y-4
        rounded-2xl bg-gradient-to-br from-secondary/60 to-secondary/30
        border border-border/40 blur-[1.5px] opacity-90
        shadow-[0_25px_60px_-20px_rgba(0,0,0,0.6)]
        transition-all duration-500
        group-hover:translate-x-2 group-hover:translate-y-2"
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

/* ================= SKILL CARD ================= */

function SkillCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div
      className="bg-gradient-to-br from-secondary/80 to-secondary/40
      backdrop-blur-xl rounded-2xl p-8 border border-border/50 shadow-2xl
      transition-all duration-500
      group-hover:-translate-y-2
      group-hover:shadow-[0_40px_80px_-25px_rgba(0,0,0,0.7)]"
    >
      <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
        <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"></div>
        {title}
      </h3>
      <div className="space-y-6">{children}</div>
    </div>
  )
}

/* ================= SKILL BAR ================= */

function SkillBar({
  label,
  percent,
  color,
  tag,
}: {
  label: string
  percent: number
  color: string
  tag: string
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center font-bold text-white`}>
            {tag}
          </div>
          <span className="text-muted-foreground">{label}</span>
        </div>
        <span className="text-sm text-muted-foreground font-mono">{percent}%</span>
      </div>

      <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${color}
          rounded-full transition-all duration-1000`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
