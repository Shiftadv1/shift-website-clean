import { HeaderAr } from "@/components/header-ar"
import { HeroAr } from "@/components/hero-ar"
import { MarqueeAr } from "@/components/marquee-ar"
import { AboutAr } from "@/components/about-ar"
import { ServicesAr } from "@/components/services-ar"
import { VisionAr } from "@/components/vision-ar"
import { ValuesAr } from "@/components/values-ar"
import { ContactAr } from "@/components/contact-ar"
import { FooterAr } from "@/components/footer-ar"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen">
      <HeaderAr />
      <HeroAr />
      <MarqueeAr />
      <AboutAr />
      <ServicesAr />
      <VisionAr />
      <ValuesAr />
      <ContactAr />
      <FooterAr />
    </main>
    <WhatsAppButton />
  )
}
