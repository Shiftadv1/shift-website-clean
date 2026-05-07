"use client"

import { Check } from "lucide-react"

const highlights = [
  "حلول مستدامة للنمو على المدى الطويل",
  "شراكة مبنية على الثقة والشفافية",
  "علامات تجارية أقوى تحقق التأثير ونمو المبيعات",
  "استراتيجيات فعّالة تحقق نتائج حقيقية",
]

export function AboutAr() {
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
                شيفت هي وكالة إعلانات متكاملة مقرها الرياض، المملكة العربية السعودية 
                نتعاون مع العلامات التجارية الطموحة لبناء علاقات مؤثرة من خلال
                الإبداع والاستراتيجية وتحقيق نتائج ملموسة وقابلة للقياس
              </p>
              <p>
                في شيفت، نحن نتجاوز مفهوم الحملات الإعلانية التقليدية 
                نبتكر حلولاً مستدامة تحقق تأثيراً حقيقياً ونمواً في المبيعات 
                ومن خلال الإبداع والاستراتيجية والابتكار، نساعد العلامات التجارية
                على بناء علاقات مؤثرة تحقق نتائج ملموسة ونمواً فعلياً في المبيعات
              </p>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="bg-background rounded-xl p-8 md:p-12 border border-border">
            <h3 
              className="text-2xl font-bold mb-8 text-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              نحو المستقبل. تأثير ينمو باستمرار.
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
