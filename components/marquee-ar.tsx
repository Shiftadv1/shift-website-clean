"use client"

const services = [
  "اليونيفورم",
  "الهدايا الدعائية",
  "التصوير",
  "أجنحة المعارض",
  "إدارة السوشال ميديا",
  "الطباعة",
  "التصميم الداخلي",
  "الهوية التجارية",
]

export function MarqueeAr() {
  return (
    <div className="py-6 bg-primary overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...services, ...services, ...services].map((service, index) => (
          <span
            key={index}
            className="mx-8 text-lg md:text-xl font-bold text-primary-foreground flex items-center gap-8 tracking-wider"
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
            transform: translateX(33.33%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  )
}
