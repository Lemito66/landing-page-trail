import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { KNOW_AS_FIRST_PARAGRAPH, KNOW_AS_SECOND_PARAGRAPH, MISSION, VALUES, VISION } from "./constants/knowAs"
import { EVENTS } from "./constants/events"

function CountdownTimer({ targetDate, isCompact = false }: { targetDate: Date; isCompact?: boolean }) {
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

  const timerClasses = isCompact
    ? "flex gap-1 sm:gap-2 flex-wrap justify-center"
    : "flex gap-2 sm:gap-4 flex-wrap justify-center"

  const unitClasses = isCompact
    ? "flex flex-col items-center bg-yellow-500/20 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-yellow-500/30 min-w-[45px] sm:min-w-[55px]"
    : "flex flex-col items-center bg-yellow-500/20 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-yellow-500/30 min-w-[50px] sm:min-w-[70px]"

  const valueClasses = isCompact
    ? "text-base sm:text-lg font-bold text-yellow-400"
    : "text-xl sm:text-2xl font-bold text-yellow-400"
  const labelClasses = isCompact
    ? "text-[10px] sm:text-xs font-semibold uppercase mt-0.5"
    : "text-xs sm:text-sm font-semibold uppercase mt-1"

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


  const nextEvent = EVENTS
    .filter(e => e.date > new Date())
    .reduce((closest, event) => {
      return event.date < closest.date ? event : closest;
    }, EVENTS.find(e => e.date > new Date()) || EVENTS[0]);




  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleWhatsApp = () => {
    const phoneNumber = import.meta.env.VITE_PHONE_NUMBER_WHATSAPP
    const message = encodeURIComponent("Hola, quiero más información sobre la carrera")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/98 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center gap-2">
          <div className="flex-shrink-0 min-w-0">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400 truncate">
              Chimborazo Endurace Series
            </h1>
          </div>
          <nav className="flex gap-1 sm:gap-2 md:gap-4 lg:gap-6 flex-wrap justify-end">
            {["inicio", "quienes-somos", "calendario", "contacto"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white text-xs sm:text-sm md:text-base font-semibold hover:text-yellow-400 transition-colors duration-300 px-2 sm:px-3 py-1 rounded-md hover:bg-yellow-400/10 whitespace-nowrap"
              >
                {item === "inicio"
                  ? "Inicio"
                  : item === "quienes-somos"
                    ? "Quiénes Somos"
                    : item === "calendario"
                      ? "Calendario"
                      : ""}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section
        id="inicio"
        className="min-h-screen bg-gradient-to-r from-black via-slate-900 to-yellow-400 flex items-center justify-center text-center text-white px-4 sm:px-6 md:px-8 relative overflow-hidden py-12 sm:py-20"
      >
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path fill="rgba(251,191,36,0.05)" d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z" />
            <path fill="rgba(251,191,36,0.08)" d="M0,350 Q300,250 600,350 T1200,350 L1200,600 L0,600 Z" />
          </svg>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 leading-tight">
            Carrera de Trail 2026
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-light">
            Vive la montaña, supera tus límites.
          </p>

          <div className="mb-6 sm:mb-8 bg-yellow-500/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-yellow-500/30">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 font-semibold">
              Próximo evento: {nextEvent.name}
            </p>
            <CountdownTimer targetDate={nextEvent.date} />
          </div>

          <Button
            onClick={() => scrollToSection("calendario")}
            className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 sm:px-8 py-3 sm:py-6 text-sm sm:text-base md:text-lg font-bold rounded-full uppercase tracking-wider"
          >
            Inscríbete ahora
          </Button>
        </div>
      </section>

      <section id="quienes-somos" className="bg-yellow-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 text-center">
            Quiénes somos
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-yellow-400 mx-auto mb-6 sm:mb-8"></div>

          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
            <p className="text-justify">
              {KNOW_AS_FIRST_PARAGRAPH}
            </p>
            <p className="text-justify">
              {KNOW_AS_SECOND_PARAGRAPH}
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 text-center">
            Misión
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-yellow-400 mx-auto mb-6 sm:mb-8"></div>

          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
            <p className="text-justify">
              {MISSION}
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 text-center">
            Visión
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-yellow-400 mx-auto mb-6 sm:mb-8"></div>

          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
            <p className="text-justify">
              {VISION}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {VALUES.map((value, idx) => (
              <Card
                key={idx}
                className="p-4 sm:p-6 bg-white border-l-4 border-yellow-400 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calendario" className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 text-center">
            Calendario 2026
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-yellow-400 mx-auto mb-8 sm:mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {EVENTS.map((event) => (
              <Card
                key={event.id}
                className="p-4 sm:p-6 bg-gradient-to-br from-black to-slate-800 text-white border border-yellow-400/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold flex-1">{event.name}</h3>
                  <span className="bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                    {event.date.toLocaleString("es-ES", {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </span>
                </div>

                <p className="text-gray-300 mb-3 text-xs sm:text-sm">{event.location}</p>

                <p className="text-gray-200 flex-1 mb-4 text-sm sm:text-base text-justify">{event.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {event.distances.map((distance) => (
                    <span
                      key={distance}
                      className="bg-yellow-500/20 text-yellow-400 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-bold border border-yellow-500"
                    >
                      {distance}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-3 sm:pt-4 border-t border-yellow-500/30">
                  <p className="text-xs sm:text-sm font-semibold text-yellow-400 mb-2 uppercase">Faltan:</p>
                  <CountdownTimer targetDate={event.date} isCompact={true} />
                </div>
                {event.inscriptionLink && (
                  <a
                    href={event.inscriptionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-4"
                  >
                    <Button
                      className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 text-base font-bold rounded-full uppercase tracking-wider w-full"
                    >
                      Inscribirse
                    </Button>
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>



      <footer className="bg-black text-white text-center py-4 sm:py-6 border-t-4 border-yellow-400 px-4">
        <div className="space-y-2 sm:space-y-3">
          <p className="text-xs sm:text-sm md:text-base">
            © 2025 Chimborazo Endurace Series. Todos los derechos reservados.
          </p>

          {/* Contacto adicional */}
          <p className="text-xs sm:text-sm md:text-base font-medium">
            📞 Teléfono: <span className="font-bold">{import.meta.env.VITE_PHONE_NUMBER}</span>
          </p>
          <p className="text-xs sm:text-sm md:text-base font-medium">
            ✉ Correo: <a
              href="mailto:info@chimborazoendurance.com"
              className="font-bold hover:underline"
            >
              chimborazoendurance@gmail.com
            </a>
          </p>
        </div>
      </footer>


      <button
        onClick={handleWhatsApp}
        aria-label="Contactar por WhatsApp"
        title="¡Contáctanos por WhatsApp!"
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-40"
      >

        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.004 2C6.475 2 2 6.475 2 12.004c0 1.78.46 3.495 1.335 5.012L2 22l5.065-1.323A9.97 9.97 0 0012.004 22C17.532 22 22 17.532 22 12.004 22 6.475 17.532 2 12.004 2zm5.938 14.498c-.247.695-1.432 1.326-2.006 1.413-.51.077-1.158.109-1.871-.118a7.51 7.51 0 01-1.694-.625c-2.98-1.287-4.927-4.289-5.076-4.487-.15-.198-1.213-1.612-1.213-3.074 0-1.463.767-2.182 1.04-2.479.272-.297.595-.372.792-.372h.57c.183.01.429-.067.67.51.247.595.842 2.058.916 2.207.075.149.124.322.025.52-.1.198-.15.322-.298.497-.148.173-.312.387-.446.52-.149.148-.304.309-.13.606.173.298.77 1.271 1.653 2.059 1.135 1.012 2.094 1.325 2.39 1.475.297.148.47.124.644-.075.173-.198.743-.86.94-1.164.198-.298.396-.248.67-.15.272.1 1.733.818 2.03.967.297.148.495.223.57.347.075.124.075.719-.173 1.413zm-6.738-2.373l-.004-.001-.002.004c-.51-.257-.96-.627-1.28-1.025-.247-.296-.2-.456.126-.786l.921-.923c.2-.2.52-.26.786-.126 1.07.534 2.67 1.06 3.56 1.063a.82.82 0 01.58.24l1.14 1.142c.285.283.22.75-.07 1.03-.25.24-.6.38-.86.38-.594 0-1.323-.236-2.666-.8z" />
        </svg>
      </button>
    </>
  )
}

export default App
