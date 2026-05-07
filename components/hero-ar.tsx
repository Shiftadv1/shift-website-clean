"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroAr() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section dir="rtl" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image - Riyadh Skyline */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm mb-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">الرياض، المملكة العربية السعودية | 2026</span>
          </div>

          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-foreground">نرتقي</span>
            <br />
            <span className="text-primary">بالعلامات التجارية.</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed font-medium transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            أفكار إبداعية. استراتيجية ذكية. تأثير حقيقي.
          </p>
          
          <p
            className={`text-base text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-250 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            وكالة إعلانات متكاملة نتعاون مع العلامات التجارية الطموحة
            لبناء علاقات مؤثرة من خلال الإبداع والاستراتيجية وتحقيق نتائج ملموسة.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button size="lg" asChild className="text-base px-8 font-semibold">
              <Link href="#services">
                خدماتنا
                <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8 font-semibold border-primary/50 hover:bg-primary/10">
              <Link href="#contact">تواصل معنا</Link>
            </Button>
          </div>
        </div>


      </div>
    </section>
  )
}
