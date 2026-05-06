import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Services } from "@/components/services"
import { Values } from "@/components/values"
import { Vision } from "@/components/vision"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <Values />
      <Vision />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
