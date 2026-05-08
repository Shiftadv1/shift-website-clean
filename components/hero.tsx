"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />

      <div className="absolute inset-0 bg-background/60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-white">WE SHIFT</span>
            <br />
            <span className="text-primary">BRANDS FORWARD.</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-4 leading-relaxed font-medium transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Creative ideas. Smart strategy. Real impact.
          </p>

          <p
            className={`text-base md:text-lg text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A full-service advertising agency partnering with ambitious brands
            to build meaningful connections through creativity, strategy and
            measurable results.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button size="lg" asChild className="text-base px-8 font-semibold">
              <Link href="#services">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8 font-semibold border-primary/50 hover:bg-primary/10"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm mt-8 transition-all duration-700 delay-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-white/80 font-medium">
              Riyadh, Saudi Arabia | 2026
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
