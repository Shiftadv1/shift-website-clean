"use client"

import { Target, TrendingUp, Handshake, Shield } from "lucide-react"

const keywords = [
  { label: "IMPACT", icon: Target },
  { label: "GROWTH", icon: TrendingUp },
  { label: "PARTNERSHIP", icon: Handshake },
  { label: "TRUST", icon: Shield },
]

export function Vision() {
  return (
    <section id="vision" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Vision */}
          <div className="bg-card rounded-xl p-8 md:p-12 border border-border hover:border-primary/30 transition-all">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Vision</span>
            <h2 
              className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-foreground text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Vision
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To be the most trusted creative partner in the region, driving brands to achieve 
              impactful growth through innovation, partnership, and trust.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-card rounded-xl p-8 md:p-12 border border-border hover:border-primary/30 transition-all">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Mission</span>
            <h2 
              className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-foreground text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We empower brands through creativity, technology and strategy to deliver measurable 
              impact, sustainable growth and lasting partnerships.
            </p>
          </div>
        </div>

        {/* Keywords */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {keywords.map((keyword, index) => (
            <div
              key={keyword.label}
              className="flex items-center justify-center gap-3 p-6 bg-primary/10 rounded-xl border border-primary/20 hover:bg-primary/15 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <keyword.icon className="w-5 h-5 text-primary" />
              <span 
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {keyword.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
