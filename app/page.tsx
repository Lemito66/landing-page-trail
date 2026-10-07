"use client"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import WhatsappButton from "@/components/whatsapp-button"

const categories = [
  {
    distance: "5K",
    ages: [
      "Juvenil · 13 a 18 años",
      "Abierta · 19 a 29 años",
      "Máster A · 30 a 39 años",
      "Máster B · 40 a 49 años",
      "Máster C · 50+ años",
    ],
  },
  {
    distance: "10K",
    ages: [
      "Juvenil · hasta los 18 años",
      "Abierta · 19 a 29 años",
      "Máster A · 30 a 39 años",
      "Máster B · 40 a 49 años",
      "Máster C · 50+ años",
    ],
  },
  {
    distance: "20K",
    ages: [
      "Abierta · hasta los 29 años",
      "Máster A · 30 a 39 años",
      "Máster B · 40 a 49 años",
      "Máster C · 50+ años",
    ],
  },
  {
    distance: "30K",
    ages: [
      "Abierta · hasta los 29 años",
      "Máster A · 30 a 39 años",
      "Máster B · 40 a 49 años",
      "Máster C · 50+ años",
    ],
  },
]

const individualPrices = [
  { distance: "30K", price: "$45" },
  { distance: "20K", price: "$40" },
  { distance: "10K", price: "$35" },
  { distance: "5K", price: "$30" },
]

const groupPrices = [
  { distance: "30K", price: "$40,50" },
  { distance: "20K", price: "$36" },
  { distance: "10K", price: "$31,50" },
  { distance: "5K", price: "$27" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <Hero />

      {/* CATEGORÍAS Y PRECIOS */}
      <section className="bg-[#331010] text-[#F2E7E7]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">

          {/* Encabezado */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-[#E74238]">
              LOS DOS GIGANTES ULTRA TRAIL
            </p>

            <h2 className="text-3xl font-bold uppercase tracking-tight md:text-5xl">
              Categorías y precios
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-[#F2E7E7]/80 md:text-lg">
              Elige tu distancia, conoce tu categoría y prepárate para
              desafiar la alta montaña.
            </p>
          </div>

          {/* CATEGORÍAS */}
          <div className="mb-16">
            <h3 className="mb-7 text-center text-xl font-semibold uppercase tracking-[0.15em] md:text-2xl">
              Categorías
            </h3>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <div
                  key={category.distance}
                  className="border border-[#F2E7E7]/20 bg-[#2F3F2F]/40 p-6"
                >
                  <div className="mb-5 border-b border-[#F2E7E7]/15 pb-4">
                    <h4 className="text-2xl font-bold tracking-wide text-[#E74238]">
                      {category.distance}
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {category.ages.map((age) => {
                      const [categoryName, range] = age.split(" · ")

                      return (
                        <li
                          key={age}
                          className="text-sm leading-relaxed text-[#F2E7E7]/85"
                        >
                          <span className="font-semibold text-[#F2E7E7]">
                            {categoryName}
                          </span>

                          <br />

                          <span className="text-[#F2E7E7]/65">
                            {range}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* PRECIOS */}
          <div>
            <h3 className="mb-7 text-center text-xl font-semibold uppercase tracking-[0.15em] md:text-2xl">
              Inscripciones
            </h3>

            <div className="grid gap-6 md:grid-cols-2">

              {/* INDIVIDUAL */}
              <div className="border border-[#E74238]/40 bg-[#F2E7E7] p-6 text-[#331010] md:p-8">
                <div className="mb-6">
                  <p className="text-sm font-semibold tracking-[0.2em] text-[#E74238]">
                    COSTO INDIVIDUAL
                  </p>

                  <h4 className="mt-2 text-2xl font-bold uppercase md:text-3xl">
                    Distancia · costo
                  </h4>
                </div>

                <div className="divide-y divide-[#331010]/15">
                  {individualPrices.map((item) => (
                    <div
                      key={item.distance}
                      className="flex items-center justify-between py-4"
                    >
                      <span className="text-lg font-semibold">
                        {item.distance}
                      </span>

                      <span className="text-xl font-bold text-[#E74238]">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GRUPOS */}
              <div className="border border-[#E74238]/40 bg-[#2F3F2F] p-6 text-[#F2E7E7] md:p-8">
                <div className="mb-6">
                  <p className="text-sm font-semibold tracking-[0.2em] text-[#E74238]">
                    GRUPOS 10+
                  </p>

                  <h4 className="mt-2 text-2xl font-bold uppercase md:text-3xl">
                    Distancia · costo
                  </h4>
                </div>

                <div className="divide-y divide-[#F2E7E7]/15">
                  {groupPrices.map((item) => (
                    <div
                      key={item.distance}
                      className="flex items-center justify-between py-4"
                    >
                      <span className="text-lg font-semibold">
                        {item.distance}
                      </span>

                      <span className="text-xl font-bold text-[#E74238]">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />

      <WhatsappButton />
    </div>
  )
}