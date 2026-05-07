"use client"

import { Zap, Heart, Flame, RefreshCw, Lightbulb } from "lucide-react"

const values = [
  {
    letter: "S",
    title: "السرعة",
    description: "نتحرك بسرعة لاغتنام كل فرصة.",
    icon: Zap,
  },
  {
    letter: "H",
    title: "الشفافية",
    description: "نبني الثقة من خلال الوضوح والمصداقية.",
    icon: Heart,
  },
  {
    letter: "I",
    title: "الابتكار",
    description: "نحوّل الأفكار إلى تجارب مؤثرة.",
    icon: Lightbulb,
  },
  {
    letter: "F",
    title: "الجرأة",
    description: "نتحدى الحدود لتحقيق نتائج استثنائية.",
    icon: Flame,
  },
  {
    letter: "T",
    title: "التطوير",
    description: "نصنع التغيير الذي يحقق نتائج حقيقية.",
    icon: RefreshCw,
  },
]

export function ValuesAr() {
  return (
    <section
      id="values"
      dir="rtl"
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/world.png')" }}
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 container mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            قيمنا
          </span>

          <h2 
            className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            ماذا تمثل
            <span className="text-primary"> SHIFT </span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            كل حرف في كلمة SHIFT يمثل قيمة أساسية تقود كل ما نقوم به.
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

              <h3 className="text-lg font-bold tracking-wider mb-3 text-foreground">
                {value.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
