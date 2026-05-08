import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Vision } from "@/components/vision"
import { Values } from "@/components/values"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Vision />
      <Values />
      <Contact />
      <Footer />
    </main>
    <WhatsAppButton />
  )
}
