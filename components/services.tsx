"use client"

import { Shirt, Gift, Camera, LayoutGrid, Share2, Printer, PenTool } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Shirt,
    title: "Uniform",
    description: "Professional uniforms for every industry.",
    image: "/images/uniform.png",
  },
  {
    icon: Gift,
    title: "Gift Items",
    description: "Branded gifts that leave a lasting impression.",
    image: "/images/gift-items.png",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography that captures moments and elevates your brand.",
    image: "/images/photography.png",
  },
  {
    icon: LayoutGrid,
    title: "Event Booths & Stands",
    description: "Creative booths & stand designs that make your brand stand out.",
    image: "/images/booths.png",
  },
  {
    icon: Share2,
    title: "Social Media & Page Management",
    description: "We manage your presence and grow your audience effectively.",
    image: "/images/SMm.png",
  },
  {
    icon: Printer,
    title: "Printing Services",
    description: "Digital & offset printing solutions for your brand.",
    image: "/images/printing.png",
  },
  {
    icon: PenTool,
    title: "Design & Interior Decoration",
    description: "Creative design and interior solutions that reflect your identity and values.",
    image: "/images/interior-design.png",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Products & Services</span>
          <h2 
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Complete Solutions to <span className="text-primary">Build, Grow & Elevate</span> Your Brand
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From strategy to execution, we offer comprehensive advertising solutions 
            tailored to your unique needs and goals.
          </p>
        </div>
<div className="my-16 overflow-hidden rounded-2xl">
  <img
    src="/images/our-services.png"
    alt="Our Services"
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
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
