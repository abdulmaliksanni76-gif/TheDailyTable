import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '2349161413245'
  const message = encodeURIComponent('Hello! I would like to place an order from The Place Restaurant.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors pulse-gold"
      aria-label="Order via WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </motion.a>
  )
}
