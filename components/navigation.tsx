"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Quiénes Somos", href: isHomePage ? "#about" : "/#about" },
    { label: "Misión / Visión", href: isHomePage ? "#mission" : "/#mission" },
    { label: "Calendario 2026", href: "/calendar" },
    { label: "Nuestros Eventos", href: isHomePage ? "#events" : "/#events" },
    { label: "Valores", href: isHomePage ? "#values" : "/#values" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const elementId = href.replace("#", "")
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      }
    } else if (pathname !== "/" && href.includes("#")) {
      setIsOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-primary border-b border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-accent">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary font-bold">
              CE
            </div>
            <span className="hidden sm:inline text-white">CHIMBORAZO ENDURANCE</span>
            <span className="sm:hidden text-white">CE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/register">
              <Button className="bg-accent text-primary hover:bg-accent/90">INSCRÍBETE</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link href="/register" className="block">
              <Button className="w-full bg-accent text-primary hover:bg-accent/90">INSCRÍBETE</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
