import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { ShiftLogo } from "@/components/shift-logo"

const footerLinks = {
  company: [
    { label: "من نحن", href: "#about" },
    { label: "الخدمات", href: "#services" },
    { label: "القيم", href: "#values" },
    { label: "تواصل معنا", href: "#contact" },
  ],
  services: [
    { label: "اليونيفورم", href: "#services" },
    { label: "الهدايا الدعائية", href: "#services" },
    { label: "التصوير", href: "#services" },
    { label: "خدمات الطباعة", href: "#services" },
  ],
}

export function FooterAr() {
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
              وكالة إعلانات متكاملة مقرها الرياض، المملكة العربية السعودية.
              نحن ننقل العلامات التجارية إلى مستوى جديد.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">الرياض، المملكة العربية السعودية</span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
               <div dir="ltr">
<a
  href="tel:+966510360025"
  className="text-sm hover:text-primary transition-colors inline-block"
  dir="ltr"
  style={{ unicodeBidi: "embed" }}
>
  +966 51 036 0025
</a>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:shift.sa00@gmail.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  shift.sa00@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              الشركة
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
              الخدمات
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
              رؤيتنا
            </h4>

            <p className="text-muted-foreground text-sm leading-relaxed">
              أن نكون الشريك الإبداعي الأكثر ثقة في المنطقة،
              ونساعد العلامات التجارية على تحقيق نمو مؤثر
              من خلال الابتكار والشراكة والثقة.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} وكالة شيفت للإعلانات.
            جميع الحقوق محفوظة.
          </p>

          <p className="text-sm text-muted-foreground">
            <a
              href="https://www.shiftadv.net"
              className="hover:text-primary transition-colors"
            >
              www.shiftadv.net
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
