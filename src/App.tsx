"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

function CountdownTimer({ targetDate, isCompact = false }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const timerClasses = isCompact ? "flex gap-2 flex-wrap justify-center" : "flex gap-4 flex-wrap justify-center"

  const unitClasses = isCompact
    ? "flex flex-col items-center bg-yellow-500/20 px-3 py-2 rounded-lg border border-yellow-500/30 min-w-[55px]"
    : "flex flex-col items-center bg-yellow-500/20 px-4 py-3 rounded-lg border border-yellow-500/30 min-w-[70px]"

  const valueClasses = isCompact ? "text-lg font-bold text-yellow-400" : "text-2xl font-bold text-yellow-400"
  const labelClasses = isCompact ? "text-xs font-semibold uppercase mt-1" : "text-sm font-semibold uppercase mt-1"

  return (
    <div className={timerClasses}>
      <div className={unitClasses}>
        <span className={valueClasses}>{String(timeLeft.days).padStart(2, "0")}</span>
        <span className={labelClasses}>Días</span>
      </div>
      <div className={unitClasses}>
        <span className={valueClasses}>{String(timeLeft.hours).padStart(2, "0")}</span>
        <span className={labelClasses}>Horas</span>
      </div>
      <div className={unitClasses}>
        <span className={valueClasses}>{String(timeLeft.minutes).padStart(2, "0")}</span>
        <span className={labelClasses}>Minutos</span>
      </div>
      <div className={unitClasses}>
        <span className={valueClasses}>{String(timeLeft.seconds).padStart(2, "0")}</span>
        <span className={labelClasses}>Segundos</span>
      </div>
    </div>
  )
}

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  })

  const events = [
    {
      id: 1,
      name: "Trail de la Montaña",
      date: new Date("2025-01-15"),
      location: "Pichincha, Ecuador",
      distances: ["15K", "30K"],
    },
    {
      id: 2,
      name: "Volcán Challenge",
      date: new Date("2025-04-10"),
      location: "Latacunga, Ecuador",
      distances: ["10K", "21K"],
    },
    {
      id: 3,
      name: "Ultra Trail",
      date: new Date("2025-08-05"),
      location: "Tungurahua, Ecuador",
      distances: ["50K"],
    },
    {
      id: 4,
      name: "Trail Nocturno",
      date: new Date("2025-11-22"),
      location: "Ibarra, Ecuador",
      distances: ["12K", "25K"],
    },
  ]

  const nextEvent = events.reduce((closest, event) => {
    return event.date > new Date() && event.date < closest.date ? event : closest
  }, events[0])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Mensaje enviado (demo) - ¡Gracias por tu interés en la carrera de trail!")
    console.log("Formulario enviado:", formData)
    setFormData({ nombre: "", email: "", mensaje: "" })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleWhatsApp = () => {
    const phoneNumber = "593XXXXXXXXX"
    const message = encodeURIComponent("Hola, quiero más información sobre la carrera de trail")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/98 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">Trail de las Cumbres</h1>
          </div>
          <nav className="flex gap-2 md:gap-6 flex-wrap justify-end">
            {["inicio", "quienes-somos", "calendario", "contacto"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white text-sm md:text-base font-semibold hover:text-yellow-400 transition-colors duration-300 px-2 md:px-3 py-1 rounded-md hover:bg-yellow-400/10"
              >
                {item === "inicio"
                  ? "Inicio"
                  : item === "quienes-somos"
                    ? "Quiénes somos"
                    : item === "calendario"
                      ? "Calendario 2025"
                      : "Contacto"}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="inicio"
        className="min-h-screen bg-gradient-to-r from-black via-slate-900 to-yellow-400 flex items-center justify-center text-center text-white px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path fill="rgba(251,191,36,0.05)" d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z" />
            <path fill="rgba(251,191,36,0.08)" d="M0,350 Q300,250 600,350 T1200,350 L1200,600 L0,600 Z" />
          </svg>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">Carrera de Trail 2025</h2>
          <p className="text-xl md:text-2xl mb-8 font-light letter-spacing-wide">
            Vive la montaña, supera tus límites.
          </p>

          <div className="mb-8 bg-yellow-500/10 p-6 rounded-xl backdrop-blur-sm border border-yellow-500/30">
            <p className="text-lg md:text-xl mb-4 font-semibold">Próximo evento: {nextEvent.name}</p>
            <CountdownTimer targetDate={nextEvent.date} />
          </div>

          <Button
            onClick={() => scrollToSection("contacto")}
            className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-6 text-lg font-bold rounded-full uppercase tracking-wider"
          >
            Inscríbete ahora
          </Button>
        </div>
      </section>

      <section id="quienes-somos" className="bg-yellow-100 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-2 text-center">Quiénes somos</h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-8"></div>

          <div className="space-y-6 mb-12 text-lg text-gray-800 leading-relaxed">
            <p className="text-justify">
              Somos una organización dedicada a promover el trail running, conectando a atletas con la naturaleza. Con
              más de 5 años de experiencia organizando carreras, nuestro objetivo es crear eventos seguros, desafiantes
              y memorables en los corazones de las montañas de Ecuador.
            </p>
            <p className="text-justify">
              Creemos en el poder de la comunidad, la seguridad extrema y el respeto por el medio ambiente. Cada carrera
              es un viaje hacia la superación personal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Seguridad",
                description: "Protección total con puestos de hidratación, personal médico y rutas bien señalizadas.",
              },
              {
                title: "Naturaleza",
                description:
                  "Respeto por el ecosistema. Cada carrera contribuye a la conservación de nuestras montañas.",
              },
              {
                title: "Comunidad",
                description: "Uniendo a corredores de todas partes para compartir pasión, desafío y amistad.",
              },
            ].map((value, idx) => (
              <Card
                key={idx}
                className="p-6 bg-white border-l-4 border-yellow-400 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calendario" className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-2 text-center">Calendario 2025</h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {events.map((event) => (
              <Card
                key={event.id}
                className="p-6 bg-gradient-to-br from-black to-slate-800 text-white border border-yellow-400/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="flex justify-between items-start gap-3 mb-4">
                  <h3 className="text-xl font-bold flex-1">{event.name}</h3>
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                    {event.date.toLocaleDateString("es-ES", { month: "short", day: "numeric" })}
                  </span>
                </div>

                <p className="text-gray-300 mb-3 text-sm">{event.location}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {event.distances.map((distance) => (
                    <span
                      key={distance}
                      className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-md text-sm font-bold border border-yellow-500"
                    >
                      {distance}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-yellow-500/30">
                  <p className="text-sm font-semibold text-yellow-400 mb-2 uppercase">Faltan:</p>
                  <CountdownTimer targetDate={event.date} isCompact={true} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-yellow-100 py-20 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-2 text-center">Contacto</h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-8"></div>

          <p className="text-center text-lg text-gray-800 mb-8">
            Si tienes dudas sobre inscripciones, rutas o logística, contáctanos. Nos encanta hablar sobre trail.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-black font-semibold">Nombre</label>
              <Input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Tu nombre completo"
                required
                className="border-2 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-black font-semibold">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                required
                className="border-2 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-black font-semibold">Mensaje</label>
              <Textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="Cuéntanos qué quieres saber..."
                required
                rows={5}
                className="border-2 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-yellow-400 text-black hover:bg-yellow-500 py-3 text-lg font-bold rounded-lg uppercase tracking-wider"
            >
              Enviar
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-6 border-t-4 border-yellow-400">
        <p className="text-lg">© 2025 Trail de las Cumbres. Todos los derechos reservados.</p>
      </footer>

      <button
        onClick={handleWhatsApp}
        aria-label="Contactar por WhatsApp"
        title="¡Contáctanos por WhatsApp!"
        className="fixed bottom-5 right-5 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-40"
      >
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a5.505 5.505 0 00-5.487 5.505c0 1.416.346 2.777.994 3.966L3.612 20.07l4.232-1.108a5.5 5.5 0 002.882.757h.005c3.035 0 5.487-2.452 5.487-5.491 0-1.467-.567-2.848-1.597-3.878-1.052-1.052-2.455-1.632-3.922-1.632z" />
        </svg>
      </button>
    </>
  )
}

export default App