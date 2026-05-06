"use client"

import { Check } from "lucide-react"

const highlights = [
  "Sustainable solutions for long-term growth",
  "Partnership built on trust and transparency",
  "Sustainable solutions for long-term growth",
  "Impactful strategies that drive real results",
]

export function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">About SHIFT</span>
            <h2 
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              We Create Momentum & <span className="text-primary">Sustainable Impact</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Shift is a full-service advertising agency based in Riyadh, Saudi Arabia. 
                We partner with ambitious brands to build meaningful connections through 
                creativity, strategy and measurable results.
              </p>
              <p>
                At Shift, we go beyond campaigns. We create sustainable solutions that drive 
                real impact and sales growth. Through creativity, strategy and innovation, 
                we help brands build meaningful connections that deliver measurable impact 
                & sales growth.
              </p>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="bg-background rounded-xl p-8 md:p-12 border border-border">
            <h3 
              className="text-2xl font-bold mb-8 text-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Future Forward. Impact That Grows.
            </h3>
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className="flex items-start gap-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
