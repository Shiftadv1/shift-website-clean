"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function ContactAr() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              تواصل معنا
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              هل أنت <span className="text-primary">جاهز للارتقاء</span> بعلامتك التجارية؟
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              دعنا نتحدث عن مشروعك القادم. سواء كنت تبحث عن تطوير شامل لهوية
              علامتك التجارية أو عن حملة إعلانية موجهة، نحن هنا لمساعدتك.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    راسلنا عبر البريد
                  </p>

                  <a
                    href="mailto:shift.sa00@gmail.com"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    shift.sa00@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    اتصل بنا
                  </p>

                  <a
                    href="tel:+966510360025"
                    className="font-medium hover:text-primary transition-colors inline-block"
                    dir="ltr"
                    style={{ unicodeBidi: "embed" }}
                  >
                    +966 51 036 0025
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    موقعنا
                  </p>

                  <p className="text-foreground font-medium">
                    الرياض، المملكة العربية السعودية
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-card rounded-xl p-8 md:p-12 border border-border">

            <h3
              className="text-2xl font-bold mb-2 text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ابدأ مشروعك
            </h3>

            <p className="text-muted-foreground mb-8">
              قم بتعبئة النموذج أدناه وسنتواصل معك خلال 24 ساعة.
            </p>

            <form
              action="https://formspree.io/f/xlgzllqr"
              method="POST"
              className="space-y-6"
            >

              <div className="grid sm:grid-cols-2 gap-4">

                <div>
                  <label
                    htmlFor="name"
                    className="text-sm text-muted-foreground mb-2 block font-medium"
                  >
                    الاسم
                  </label>

                  <Input
                    name="name"
                    id="name"
                    placeholder="الاسم الكامل"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm text-muted-foreground mb-2 block font-medium"
                  >
                    البريد الإلكتروني
                  </label>

                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="example@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-background border-border focus:border-primary"
                    required
                  />
                </div>

              </div>

              <div>
                <label
                  htmlFor="company"
                  className="text-sm text-muted-foreground mb-2 block font-medium"
                >
                  اسم الشركة
                </label>

                <Input
                  name="company"
                  id="company"
                  placeholder="اسم شركتك"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm text-muted-foreground mb-2 block font-medium"
                >
                  تفاصيل المشروع
                </label>

                <textarea
                  name="message"
                  id="message"
                  placeholder="أخبرنا عن مشروعك..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full min-h-[120px] px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none transition-all"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full font-semibold"
              >
                إرسال الرسالة
                <ArrowRight className="mr-2 h-4 w-4" />
              </Button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
