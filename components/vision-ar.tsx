"use client"

import { Target, TrendingUp, Handshake, Shield } from "lucide-react"

const keywords = [
  { label: "التأثير", icon: Target },
  { label: "النمو", icon: TrendingUp },
  { label: "الشراكة", icon: Handshake },
  { label: "الثقة", icon: Shield },
]

export function VisionAr() {
  return (
    <section id="vision" dir="rtl" className="py-24 bg-background">

      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Vision */}
          <div className="bg-card rounded-xl p-8 md:p-12 border border-border hover:border-primary/30 transition-all">

            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              رؤيتنا
            </span>

            <h2 
              className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-foreground text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              رؤيتنا
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              أن نكون الشريك الإبداعي الأكثر ثقة في المنطقة،
              ونقود العلامات التجارية نحو نمو مؤثر من خلال
              الابتكار والشراكة والثقة.
            </p>

          </div>

          {/* Mission */}
          <div className="bg-card rounded-xl p-8 md:p-12 border border-border hover:border-primary/30 transition-all">

            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              رسالتنا
            </span>

            <h2 
              className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-foreground text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              رسالتنا
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              نمكّن العلامات التجارية من خلال الإبداع والتقنية والاستراتيجية
              لتحقيق تأثير ملموس ونمو مستدام وشراكات طويلة الأمد.
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
                className="font-semibold text-foreground"
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
