"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    event: "",
    category: "",
    experience: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aquí iría la lógica de envío del formulario
    alert("¡Gracias por tu inscripción! Te contactaremos pronto con más detalles.")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-accent">Inscríbete Ahora</h1>
            <p className="text-xl text-muted-foreground">
              Completa tu registro y únete a la comunidad de atletas más apasionados de la región
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8 bg-card p-8 md:p-12 rounded-xl border border-border">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Información Personal</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Apellido *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Teléfono *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+593 999 999 999"
                  />
                </div>
              </div>
            </div>

            {/* Event Selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Selecciona tu Evento</h3>

              <div>
                <label className="block text-sm font-medium mb-2">Evento *</label>
                <select
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Selecciona un evento</option>
                  <option value="trail">Trail Chimborazo (15-16 Marzo)</option>
                  <option value="urban">Urban Challenge (19-20 Abril)</option>
                  <option value="desert">Desert Marathon (24-25 Mayo)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Categoría *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="16-25">16-25 años</option>
                  <option value="26-35">26-35 años</option>
                  <option value="36-45">36-45 años</option>
                  <option value="46+">46+ años</option>
                </select>
              </div>
            </div>

            {/* Experience Level */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent">Nivel de Experiencia</h3>

              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Selecciona tu nivel</option>
                <option value="principiante">Principiante</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>
                <option value="experto">Experto</option>
              </select>
            </div>

            {/* Terms & Conditions */}
            <div className="space-y-4 pt-4 border-t border-border">
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 rounded border-border accent-accent cursor-pointer"
                />
                <span>Acepto los términos y condiciones</span>
              </label>
              <label className="flex items-center gap-3 text-sm">
                <input type="checkbox" className="w-4 h-4 rounded border-border accent-accent cursor-pointer" />
                <span>Deseo recibir información sobre futuros eventos</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors text-lg"
            >
              COMPLETAR INSCRIPCIÓN
            </button>

            <p className="text-center text-xs text-muted-foreground">
              *Campos requeridos. Tus datos serán procesados de acuerdo con nuestra política de privacidad.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
