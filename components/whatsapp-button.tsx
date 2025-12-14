import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  // ✅ función integrada en el mismo componente
  function createWhatsappLink(phone: string, message: string) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  }
  const phone = "593982121157";
  const message = "Hola, estoy interesado en participar en la carrera.";
  const whatsappURL = createWhatsappLink(phone, message);

  return (
    <Link
      href={whatsappURL}
      target="_blank"
      aria-label="Contact via WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        bg-green-600 hover:bg-green-700
        text-white p-4 rounded-full shadow-lg
        transition-transform duration-300
        hover:scale-110 focus:ring-2 focus:ring-green-400 focus:outline-none
      "
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}