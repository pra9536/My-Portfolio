"use client"

import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start md:items-center">

          {/* LEFT: CONTACT INFO */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Get in Touch
            </h3>

            {/* Email */}
            <div className="group flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 transition-colors group-hover:text-orange-400" />
              <a
                href="mailto:prateek246729@gmail.com"
                className="text-sm sm:text-base transition-all duration-200
                group-hover:text-orange-400 group-hover:underline"
              >
                prateek246729@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="group flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
              <Phone className="w-5 h-5 transition-colors group-hover:text-orange-400" />
              <a
                href="N/A"
                className="text-sm sm:text-base transition-all duration-200
                group-hover:text-orange-400 group-hover:underline"
              >
                N/A
              </a>
            </div>

            {/* Location */}
            <div className="group flex items-center justify-center md:justify-start gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 transition-colors group-hover:text-orange-400" />
              <a
                href="https://www.google.com/maps?q=Kanpur,+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base transition-all duration-200
                group-hover:text-orange-400 group-hover:underline"
              >
                Kanpur, Uttar Pradesh
              </a>
            </div>
          </div>

          {/* RIGHT: SOCIAL ICONS */}
          <div className="flex justify-center md:justify-end gap-3 sm:gap-4 flex-wrap">
            {[
              { name: "GitHub", icon: Github, link: "https://github.com/pra9536" },
              {
                name: "LinkedIn",
                icon: Linkedin,
                link: "https://linkedin.com/in/prateek-yadav-2616a6257",
              },
              { name: "Twitter", icon: Twitter, link: "#" },
              {
                name: "Instagram",
                icon: Instagram,
                link: "https://www.instagram.com/prateek___yadav____/",
              },
              {
                name: "Email",
                icon: Mail,
                link: "mailto:prateek246729@gmail.com",
              },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10 sm:w-11 sm:h-11
                    rounded-full bg-secondary/50
                    border border-border
                    flex items-center justify-center
                    text-muted-foreground
                    hover:text-orange-400 hover:border-orange-400
                    hover:scale-110
                    transition-all duration-300
                  "
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                {/* Tooltip (hide on very small screens) */}
                <span
                  className="
                    hidden sm:block
                    absolute -top-10 left-1/2 -translate-x-1/2
                    bg-popover text-popover-foreground
                    text-xs px-3 py-1 rounded-md
                    opacity-0 scale-90
                    group-hover:opacity-100 group-hover:scale-100
                    transition-all duration-300
                    pointer-events-none whitespace-nowrap
                  "
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-6 sm:my-8 border-t border-border"></div>

        {/* ================= BOTTOM ================= */}
        <div className="text-center text-xs sm:text-sm text-muted-foreground">
          © {new Date().getFullYear()} Prateek Yadav. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
