import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

/* ================= FONT ================= */

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

/* ================= SEO METADATA ================= */

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://prateekyadav-portfolio.vercel.app/"
  ),

  title: {
    default: "Prateek Yadav | Java Full Stack Developer",
    template: "%s | Prateek Yadav",
  },

  description:
    "Prateek Yadav is a Java Full Stack Developer specializing in Spring Boot, React, MySQL, REST APIs, and scalable cloud-ready web applications. Explore real-world projects, technical skills, and professional experience.",

  keywords: [
    "Prateek Yadav",
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "React Developer",
    "MySQL",
    "REST APIs",
    "Java Developer Portfolio",
    "Software Engineer India",
  ],

  authors: [{ name: "Prateek Yadav" }],
  creator: "Prateek Yadav",

  openGraph: {
    title: "Prateek Yadav | Java Full Stack Developer",
    description:
      "Java Full Stack Developer with expertise in Spring Boot, React, MySQL, and scalable backend systems. View projects, skills, and professional work.",
    url: "https://prateekyadav-portfolio.vercel.app/",
    siteName: "Prateek Yadav Portfolio",
    images: [
      {
        url: "/og-img.png", // ✅ correct path
        width: 1200,
        height: 630,
        alt: "Prateek Yadav | Java Full Stack Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prateek Yadav | Java Full Stack Developer",
    description:
      "Java Full Stack Developer skilled in Spring Boot, React, MySQL, REST APIs, and scalable cloud applications.",
    images: ["/og-img.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

/* ================= VIEWPORT (CORRECT WAY) ================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff", // light mode theme color
}

/* ================= ROOT LAYOUT ================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />

        {/* Remix Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        />
      </head>

      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
