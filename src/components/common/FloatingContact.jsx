import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Mail, Phone, MessageSquare } from 'lucide-react'

const FloatingContact = () => {
  const [open, setOpen] = useState(false)

  const contacts = [
    { icon: Mail, label: 'Email Us', href: 'mailto:hello@colonycodeworks.com', color: 'from-blue-500 to-blue-600' },
    { icon: Phone, label: 'Call Us', href: 'tel:+1234567890', color: 'from-green-500 to-green-600' },
    { icon: MessageSquare, label: 'WhatsApp', href: 'https://wa.me/1234567890', color: 'from-emerald-500 to-emerald-600' },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && contacts.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ delay: i * 0.05 }}
            className={`flex items-center gap-3 bg-gradient-to-r ${item.color} text-white px-4 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform`}
          >
            <item.icon size={18} />
            <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
          </motion.a>
        ))}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-gradient-to-r from-honey to-orange-500 text-dark rounded-2xl shadow-honey flex items-center justify-center"
        aria-label="Contact options"
      >
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {open ? <X size={22} strokeWidth={2.5} /> : <MessageCircle size={22} strokeWidth={2.5} />}
        </motion.div>
      </motion.button>
    </div>
  )
}

export default FloatingContact