"use client"

import { Shirt, Gift, Camera, LayoutGrid, Share2, Printer, PenTool, PartyPopper, Layout } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Shirt,
    title: "الزي الموحد",
    description: "أزياء موحدة احترافية تناسب جميع القطاعات.",
    image: "/images/uniform.png",
  },
  {
    icon: Gift,
    title: "الهدايا الدعائية",
    description: "هدايا دعائية مميزة تترك انطباعاً دائماً.",
    image: "/images/gift-items.png",
  },
  {
    icon: Camera,
    title: "التصوير الاحترافي",
    description: "خدمات تصوير احترافية توثق اللحظات وترتقي بعلامتك التجارية.",
    image: "/images/photography.png",
  },
  {
    icon: LayoutGrid,
    title: "الأجنحة والمعارض",
    description: "تصاميم أجنحة ومعارض إبداعية تبرز علامتك التجارية.",
    image: "/images/booths.png",
  },
  {
    icon: Share2,
    title: "إدارة وسائل التواصل الاجتماعي",
    description: "ندير حضورك الرقمي ونساعدك على تنمية جمهورك بفعالية.",
    image: "/images/SMm.png",
  },
  {
    icon: Printer,
    title: "خدمات الطباعة",
    description: "حلول طباعة رقمية وأوفست عالية الجودة لعلامتك التجارية.",
    image: "/images/printing.png",
  },
  {
    icon: PenTool,
    title: "التصميم والديكور الداخلي",
    description: "حلول تصميم وديكور تعكس هوية علامتك التجارية وقيمها.",
    image: "/images/interior-design.png",
  },
  {
    icon: PartyPopper,
    title: "إدارة الفعاليات والعارضين",
    description: "خدمات متكاملة لإدارة الفعاليات وتوفير العارضين لتعزيز حضور علامتك التجارية.",
    image: "/images/modeling.jpg",
  },
  {
    icon: Layout,
    title: "اللوحات الإعلانية",
    description: "حلول لوحات إعلانية عالية الجودة تعزز الظهور وتقوي هوية علامتك التجارية.",
    image: "/images/signage.png",
  },
]

export function ServicesAr() {
  return (
    <section id="services" dir="rtl" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            منتجاتنا وخدماتنا
          </span>

          <h2 
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            حلول متكاملة لـ
            <span className="text-primary"> بناء وتنمية وتطوير </span>
            علامتك التجارية
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            من التخطيط وحتى التنفيذ، نقدم حلولاً إعلانية متكاملة
            مصممة خصيصاً لتلبية احتياجاتك وتحقيق أهدافك.
          </p>
        </div>

        <div className="my-16 overflow-hidden rounded-2xl">
          <img
            src="/images/our-services.png"
            alt="خدماتنا"
            className="w-full h-auto block"
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:bg-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">

                <img
                  src={service.image}
                  alt={service.title}
                  className="mb-6 h-56 w-full rounded-xl object-contain"
                />

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 
                  className="text-xl font-semibold mb-3 text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
