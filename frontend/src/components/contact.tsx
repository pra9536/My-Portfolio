"use client"

import { useRef, useState } from "react"
import { toast } from "sonner"

export default function Collaborate() {
  const ref = useRef<HTMLElement>(null)
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [message, setMessage] = useState("")
  const [budget, setBudget] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      toast.error("Name is required")
      return
    }
    if (!email.trim()) {
      toast.error("Email is required")
      return
    }
    if (!serviceType) {
      toast.error("Please select a service type")
      return
    }
    if (!message.trim() || message.length < 20) {
      toast.error("Message must be at least 20 characters")
      return
    }

    setIsSubmitting(true)

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://my-portfolio-06a2.onrender.com";
      const response = await fetch(`${apiBaseUrl}/api/proposals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          contact: contact.trim() || null,
          serviceType,
          message: message.trim(),
          budget: budget ? parseInt(budget) : null,
        }),
      })

      if (response.ok) {
        toast.success("Proposal sent successfully! I will contact you soon.")
        setName("")
        setEmail("")
        setContact("")
        setServiceType("")
        setMessage("")
        setBudget("")
      } else {
        const errorData = await response.json().catch(() => ({}))
        toast.error(errorData.error || "Failed to submit proposal. Please try again.")
      }
    } catch (err) {
      console.error("Submission error:", err)
      toast.error("Unable to reach the backend server. Please verify it is running.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 sm:py-24 px-4 sm:px-6 scroll-mt-24
      bg-gradient-to-b from-background to-background"
    >
      <div className="max-w-4xl mx-auto">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's build something{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">
              impactful
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Ready to collaborate on your next project? Let's connect and create
            amazing solutions together.
          </p>
        </div>

        {/* ================= FORM CARD ================= */}
        <div
          className="
            bg-gradient-to-br from-card/90 to-card/90
            backdrop-blur-xl border border-red-500/20
            rounded-2xl sm:rounded-3xl
            p-5 sm:p-8
            shadow-[0_0_80px_-20px_rgba(255,59,59,0.35)]
          "
        >
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name *"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full px-4 sm:px-5 py-3 sm:py-4
                rounded-xl bg-secondary
                text-foreground border border-red-500/20
                focus:outline-none focus:ring-2 focus:ring-red-500
                transition
              "
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email *"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full px-4 sm:px-5 py-3 sm:py-4
                rounded-xl bg-secondary
                text-foreground border border-red-500/20
                focus:outline-none focus:ring-2 focus:ring-red-500
                transition
              "
            />

            {/* Contact */}
            <input
              type="tel"
              placeholder="Your Contact No (optional)"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="
                w-full px-4 sm:px-5 py-3 sm:py-4
                rounded-xl bg-secondary
                text-foreground border border-red-500/20
                focus:outline-none focus:ring-2 focus:ring-red-500
                transition
              "
            />

            {/* Select */}
            <select
              required
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="
                w-full px-4 sm:px-5 py-3 sm:py-4
                rounded-xl bg-secondary text-foreground
                border border-red-500/40
                focus:outline-none focus:ring-2 focus:ring-red-500
              "
            >
              <option value="">Select Service Type *</option>
              <option value="Web Development">Web Development</option>
              <option value="UI / UX Design">UI / UX Design</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Consulting">Consulting</option>
              <option value="Other">Other</option>
            </select>

            {/* Message */}
            <textarea
              rows={5}
              minLength={20}
              required
              placeholder="Tell me about your project. What are your goals? 💡 (min 20 characters)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
                w-full px-4 sm:px-5 py-3 sm:py-4
                rounded-xl bg-secondary
                text-foreground border border-red-500/20
                focus:outline-none focus:ring-2 focus:ring-red-500
                transition resize-none
              "
            />

            {/* Budget */}
            <input
              type="number"
              placeholder="Estimated Budget in $ (optional)"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="
                w-full px-4 sm:px-5 py-3 sm:py-4
                rounded-xl bg-secondary
                text-foreground border border-red-500/20
                focus:outline-none focus:ring-2 focus:ring-red-500
                transition
              "
            />

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full py-3 sm:py-4 rounded-xl font-semibold
                text-white bg-gradient-to-r from-red-600 to-orange-500
                hover:scale-[1.02] transition-transform
                shadow-lg shadow-red-500/30
                disabled:opacity-50 disabled:pointer-events-none
              "
            >
              {isSubmitting ? "Sending..." : "Send Proposal"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

