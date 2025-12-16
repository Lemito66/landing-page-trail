"use client"

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold">
                CE
              </div>
              <span className="font-bold text-white">CHIMBORAZO ENDURANCE SERIES</span>
            </div>
            <p className="text-sm text-gray-400">La serie de eventos de resistencia más desafiante de América Latina</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="quienes-somos" className="hover:text-white transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="mision-vision" className="hover:text-white transition-colors">
                  Misión / Visión
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-white transition-colors">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Información</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span>Ecuador</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>+593 (0) 982121157</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>chimborazoendurance@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">¿Listo para el desafío?</h4>
            <p className="text-sm text-gray-400 mb-4">Únete a nuestra comunidad de atletas apasionados</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>&copy; 2026 Chimborazo Endurance Series. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/" className="hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="/" className="hover:text-white transition-colors">
                Términos
              </a>
              <a href="/" className="hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
