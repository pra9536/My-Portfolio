"use client"

import { useRef } from "react"

export default function Collaborate() {
  const ref = useRef<HTMLElement>(null)

  return (
    <section
      ref={ref}
      id="contact"
      className="py-24 px-4 scroll-mt-24 sm:px-6
      bg-gradient-to-b from-background to-background"
    >
      <div className="max-w-4xl mx-auto">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's build something{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">
              impactful
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to collaborate on your next project? Let's connect and create
            amazing solutions together.
          </p>
        </div>

        {/* ================= FORM CARD ================= */}
        <div
          className="bg-gradient-to-br from-card/90 to-card/90
          backdrop-blur-xl border border-red-500/20
          rounded-3xl p-8
          shadow-[0_0_80px_-20px_rgba(255,59,59,0.35)]"
        >
          <form className="space-y-6">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name *"
              required
              className="w-full px-5 py-4 rounded-xl bg-secondary
              text-foreground border border-red-500/20
              focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email *"
              required
              className="w-full px-5 py-4 rounded-xl bg-secondary
              text-foreground border border-red-500/20
              focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />

            {/* Contact */}
            <input
              type="tel"
              placeholder="Your Contact No (optional)"
              className="w-full px-5 py-4 rounded-xl bg-secondary
              text-foreground border border-red-500/20
              focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />

            {/* ================= SELECT (FIXED) ================= */}
           <select
        required
  className="w-full px-5 py-4 rounded-xl bg-secondary text-foreground
  border border-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-500"
>
  <option value="">Select Service Type *</option>
  <option>Web Development</option>
  <option>UI / UX Design</option>
  <option>Mobile App Development</option>
  <option>Consulting</option>
  <option>Other</option>
</select>


            {/* Message */}
            <textarea
              rows={5}
              minLength={20}
              required
              placeholder="Tell me about your project. What are your goals? 💡 (min 20 characters)"
              className="w-full px-5 py-4 rounded-xl bg-secondary
              text-foreground border border-red-500/20
              focus:outline-none focus:ring-2 focus:ring-red-500
              transition resize-none"
            />

            {/* Budget */}
            <input
              type="number"
              placeholder="Estimated Budget in $ (optional)"
              className="w-full px-5 py-4 rounded-xl bg-secondary
              text-foreground border border-red-500/20
              focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold
              text-white bg-gradient-to-r from-red-600 to-orange-500
              hover:scale-[1.02] transition-transform
              shadow-lg shadow-red-500/30"
            >
              Send Proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
