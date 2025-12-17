import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google"
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"], // ajusta a lo que uses
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://chimborazoendurance.com"),
  title: {
    default: "Chimborazo Endurance Series",
    template: "%s | Chimborazo Endurance Series",
  },
  description:
    "Carreras urbanas y trail en Chimborazo, Ecuador. Vive una experiencia deportiva segura, auténtica y memorable. Revisa fechas, rutas e inscripciones.",

  keywords: [
    "Chimborazo Endurance Series",
    "trail running Chimborazo",
    "carreras Chimborazo",
    "trail Ecuador",
    "carreras de montaña Ecuador",
    "running Riobamba",
    "carrera urbana",
    "evento deportivo",
    "inscripciones carrera",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "/",
    siteName: "Chimborazo Endurance Series",
    title: "Chimborazo Endurance Series",
    description:
      "Carreras urbanas y trail en Chimborazo, Ecuador. Fechas, rutas e inscripciones.",
    images: [
      {
        url: "/og.jpg", // public/og.jpg
        width: 1200,
        height: 630,
        alt: "Chimborazo Endurance Series - Carreras urbanas y trail",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chimborazo Endurance Series",
    description:
      "Carreras urbanas y trail en Chimborazo, Ecuador. Fechas, rutas e inscripciones.",
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
