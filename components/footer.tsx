import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { ShiftLogo } from "@/components/shift-logo"

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Values", href: "#values" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Uniform", href: "#services" },
    { label: "Gift Items", href: "#services" },
    { label: "Photography", href: "#services" },
    { label: "Printing Services", href: "#services" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div dir="ltr">
  <ShiftLogo size="lg" showTagline />
</div>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A full-service advertising agency based in Riyadh, Saudi Arabia. We shift brands forward.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Riyadh, Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+966510360025" className="text-sm hover:text-primary transition-colors">
                  +966 51 036 0025
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:shift.sa00@gmail.com" className="text-sm hover:text-primary transition-colors">
                  shift.sa00@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Our Vision
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To be the most trusted creative partner in the region, driving brands to achieve 
              impactful growth through innovation, partnership, and trust.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SHIFT Advertisement Agency. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            <a href="https://www.shiftadv.net" className="hover:text-primary transition-colors">
              www.shiftadv.net
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
