"use client"

import { Zap, Heart, Flame, RefreshCw, Lightbulb } from "lucide-react"

const values = [
  {
    letter: "S",
    title: "SPEED",
    description: "We move fast to seize every opportunity.",
    icon: Zap,
  },
  {
    letter: "H",
    title: "HONESTY",
    description: "We build trust through clarity and integrity.",
    icon: Heart,
  },
  {
    letter: "I",
    title: "INNOVATION",
    description: "We turn ideas into powerful experiences.",
    icon: Lightbulb,
  },
  {
    letter: "F",
    title: "FEARLESS",
    description: "We challenge limits to achieve extraordinary.",
    icon: Flame,
  },
  {
    letter: "T",
    title: "TRANSFORMATION",
    description: "We create change that drives real results.",
    icon: RefreshCw,
  },
]

export function Values() {
  return (
   <section
  <div className="absolute inset-0 bg-black/75"></div>
  id="values"
  className="relative py-24 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/world.png')" }}
  >
     <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Values</span>
          <h2 
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            What <span className="text-primary">SHIFT</span> Stands For
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every letter in SHIFT represents a core value that guides everything we do.
          </p>
        </div>

        {/* SHIFT Values */}
        <div className="grid md:grid-cols-5 gap-4 mb-20">
          {values.map((value, index) => (
            <div
              key={value.letter}
              className="group bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:bg-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span 
                  className="text-4xl font-bold text-primary"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {value.letter}
                </span>
                <value.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-sm font-semibold tracking-wider mb-2 text-foreground">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
