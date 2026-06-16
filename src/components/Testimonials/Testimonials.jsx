import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'PropTech Ventures',
    avatar: 'SJ',
    review: 'Colony Code Works completely transformed our business. They delivered a world-class CRM platform that increased our sales team efficiency by 300%. Their product-first mindset and attention to detail is unmatched.',
    rating: 5,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'FoodChain Networks',
    avatar: 'MC',
    review: 'Working with Colony Code Works was a game-changer. They understood our complex restaurant management needs and delivered an elegant solution. The team is highly professional, communicative, and technically excellent.',
    rating: 5,
    color: 'from-honey to-orange-500',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Founder',
    company: 'HRPro Solutions',
    avatar: 'ER',
    review: 'As a startup, we needed a partner who could move fast without sacrificing quality. Colony Code Works delivered our MVP in 6 weeks and the product was flawless. Highly recommended for any startup!',
    rating: 5,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'VP Engineering',
    company: 'TechScale Corp',
    avatar: 'DK',
    review: 'The AI solution they built for us is incredible. It automated 80% of our manual sales processes and the ROI was visible within the first month. Their technical expertise in AI is truly world-class.',
    rating: 5,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    name: 'Priya Patel',
    role: 'Product Manager',
    company: 'SaaS Innovations Ltd',
    avatar: 'PP',
    review: 'Colony Code Works is more than a development company — they are true product partners. Their insights, quality code, and dedicated support made our product launch a massive success.',
    rating: 5,
    color: 'from-red-500 to-rose-500',
  },
]

const Stars = ({ count }) => (
  <div className="flex gap-1">
    {[...Array(count)].map((_, i) => (
      <Star key={i} size={14} className="text-honey fill-honey" />
    ))}
  </div>
)

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[current]

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-honey/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-blob" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card border border-honey/20 px-4 py-2 rounded-full mb-6">
            <span className="text-honey text-sm font-medium">💬 Testimonials</span>
          </div>
          <h2 className="section-title mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden mb-8"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote size={80} className="text-honey" />
              </div>

              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-5 rounded-3xl`} />

              <div className="relative z-10">
                <Stars count={t.rating} />
                
                <p className="text-white text-lg md:text-xl leading-relaxed my-8 font-light">
                  "{t.review}"
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center font-bold text-white text-lg flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.role} at {t.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 glass-card border border-white/10 hover:border-honey/40 rounded-xl flex items-center justify-center text-gray-400 hover:text-honey transition-colors"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-honey' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 glass-card border border-white/10 hover:border-honey/40 rounded-xl flex items-center justify-center text-gray-400 hover:text-honey transition-colors"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Mini testimonials row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrent(i)}
              className={`glass-card border rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                i === current 
                  ? 'border-honey/40 bg-honey/5' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm mb-2`}>
                {t.avatar}
              </div>
              <p className="text-white text-xs font-semibold">{t.name}</p>
              <p className="text-gray-500 text-xs">{t.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials