"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ShiftLogo } from "@/components/shift-logo"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Values", href: "#values" },
  { label: "Vision", href: "#vision" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname()
  const isArabic = pathname === "/ar"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <div dir="ltr">
              <ShiftLogo size="md" showTagline />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <Button asChild>
              <Link href="#contact">
                Get in Touch
              </Link>
            </Button>

            <Link
              href={isArabic ? "/" : "/ar"}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {isArabic ? "English" : "العربية"}
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-6 pb-4 border-t border-border mt-4">

            <div className="flex flex-col gap-4">

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Button asChild className="mt-2">
                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </Button>

              {/* Language Switch */}
              <Link
                href={isArabic ? "/" : "/ar"}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {isArabic ? "English" : "العربية"}
              </Link>

            </div>
          </div>
        )}

      </nav>
    </header>
  )
}
