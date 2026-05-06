"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Contact</span>
            <h2 
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ready to <span className="text-primary">Shift</span> Your Brand?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Let&apos;s talk about your next project. Whether you&apos;re looking for a complete 
              brand transformation or a targeted campaign, we&apos;re here to help.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us at</p>
                  <a href="mailto:shift.sa00@gmail.com" className="text-foreground hover:text-primary transition-colors font-medium">
                    shift.sa00@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us at</p>
                  <a href="tel:+966510360025" className="text-foreground hover:text-primary transition-colors font-medium">
                    +966 51 036 0025
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit us at</p>
                  <p className="text-foreground font-medium">
                    Riyadh, Saudi Arabia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-card rounded-xl p-8 md:p-12 border border-border">
            <h3 
              className="text-2xl font-bold mb-2 text-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Start a Project
            </h3>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="text-sm text-muted-foreground mb-2 block font-medium">
                  Company Name
                </label>
                <Input
                  id="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block font-medium">
                  Project Details
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[120px] px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none transition-all"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full font-semibold">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
