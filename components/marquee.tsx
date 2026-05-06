"use client"

const services = [
  "UNIFORM",
  "GIFT ITEMS",
  "PHOTOGRAPHY",
  "EVENT BOOTHS",
  "SOCIAL MEDIA",
  "PRINTING",
  "INTERIOR DESIGN",
  "BRANDING",
]

export function Marquee() {
  return (
    <div className="py-6 bg-primary overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...services, ...services, ...services].map((service, index) => (
          <span
            key={index}
            className="mx-8 text-lg font-semibold text-primary-foreground flex items-center gap-8 tracking-wider"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {service}
            <span className="text-primary-foreground/40">|</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  )
}
