"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Carreras", href: "/carreras" },
    { label: "Distancias", href: "/distancias" },
    { label: "Cómo llegar", href: "/como-llegar" },
    { label: "Contacto", href: "/contacto" },
  ]

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-accent"
          >
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary font-bold">
              CE
            </div>

            <span className="hidden sm:inline text-white">
              CHIMBORAZO ENDURANCE SERIES
            </span>

            <span className="sm:hidden text-white">
              CE
            </span>
          </Link>

          {/* Navegación escritorio */}
          <div className="hidden lg:flex gap-1">

            {navItems.map((item) => (

              item.label === "Carreras" ? (

                /* SUBMENÚ CARRERAS */
                <div key={item.label} className="relative group">

                  <button
                    className="px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
                  >
                    Carreras ▾
                  </button>

                  <div className="absolute left-0 top-full hidden group-hover:block pt-2 w-64">
                    <div className="bg-primary border border-accent rounded-md shadow-lg overflow-hidden">

                      <Link
                        href="/los-dos-gigantes"
                        className="block px-4 py-3 text-sm text-white hover:text-accent hover:bg-black/20 transition-colors"
                      >
                        Los Dos Gigantes Ultra Trail
                      </Link>

                      <Link
                        href="/duatlon-rio"
                        className="block px-4 py-3 text-sm text-white hover:text-accent hover:bg-black/20 transition-colors"
                      >
                        Duatlón Río
                      </Link>

                    </div>
                  </div>

                </div>

              ) : item.label === "Distancias" ? (

                /* SUBMENÚ DISTANCIAS */
                <div key={item.label} className="relative group">

                  {/* BOTÓN DISTANCIAS */}
                 <Link
  href="/distancias"
  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
>
  <span>Distancias</span>
  <span className="text-xs">▾</span>
</Link>

                  {/* MENÚ DESPLEGABLE */}
                  <div className="absolute left-0 top-full hidden group-hover:block pt-2 w-56">
                    <div className="bg-primary border border-accent rounded-md shadow-lg overflow-hidden">

                      <Link
                        href="/distancias/5k"
                        className="block px-4 py-3 text-sm text-white hover:text-accent hover:bg-black/20 transition-colors"
                      >
                        5K
                      </Link>

                      <Link
                        href="/distancias/10k"
                        className="block px-4 py-3 text-sm text-white hover:text-accent hover:bg-black/20 transition-colors"
                      >
                        10K
                      </Link>

                      <Link
                        href="/distancias/20k"
                        className="block px-4 py-3 text-sm text-white hover:text-accent hover:bg-black/20 transition-colors"
                      >
                        20K
                      </Link>

                      <Link
                        href="/distancias/30k"
                        className="block px-4 py-3 text-sm text-white hover:text-accent hover:bg-black/20 transition-colors"
                      >
                        30K
                      </Link>

                    </div>
                  </div>

                </div>

              ) : (

                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>

              )

            ))}

          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Navegación móvil */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">

            {navItems.map((item) => (

              item.label === "Carreras" ? (

                <div key={item.label}>

                  <div className="px-3 py-2 text-sm font-medium text-white">
                    Carreras
                  </div>

                  <div className="pl-6 space-y-1">

                    <Link
                      href="/los-dos-gigantes"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                      Los Dos Gigantes Ultra Trail
                    </Link>

                    <Link
                      href="/duatlon-rio"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                      Duatlón Río
                    </Link>

                  </div>

                </div>

              ) : item.label === "Distancias" ? (

                <div key={item.label}>

                  {/* DISTANCIAS EN MÓVIL */}
                  <Link
                    href="/distancias"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
                  >
                    Distancias
                  </Link>

                  <div className="pl-6 space-y-1">

                    <Link
                      href="/distancias/5k"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                      5K
                    </Link>

                    <Link
                      href="/distancias/10k"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                      10K
                    </Link>

                    <Link
                      href="/distancias/20k"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                      20K
                    </Link>

                    <Link
                      href="/distancias/30k"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                      30K
                    </Link>

                  </div>

                </div>

              ) : (

                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>

              )

            ))}

          </div>
        )}

      </div>
    </nav>
  )
}