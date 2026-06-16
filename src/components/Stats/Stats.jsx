import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { staggerContainer, fadeInUp } from '../../animations/variants'

const stats = [
  { end: 50, suffix: '+', label: 'Projects Delivered', desc: 'Across industries', icon: '🚀' },
  { end: 20, suffix: '+', label: 'Happy Clients', desc: 'Worldwide', icon: '🤝' },
  { end: 99, suffix: '%', label: 'Client Satisfaction', desc: 'Industry leading', icon: '⭐' },
  { end: 5, suffix: '+', label: 'Products Built', desc: 'By our team', icon: '🏗️' },
]

const Counter = ({ end, suffix, isActive }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return
    let start = 0
    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(eased * end)
      setCount(current)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isActive, end])

  return (
    <span className="gradient-text">
      {count}{suffix}
    </span>
  )
}

const Stats = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-secondary" />
      
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="glass-card-hover p-8 rounded-2xl text-center relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-honey/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="text-4xl mb-4">{stat.icon}</div>
                
                <div className="text-5xl md:text-6xl font-display font-black mb-2">
                  <Counter end={stat.end} suffix={stat.suffix} isActive={inView} />
                </div>
                
                <p className="text-white font-semibold text-lg mb-1">{stat.label}</p>
                <p className="text-gray-500 text-sm">{stat.desc}</p>

                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-honey to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/20 to-transparent" />
    </section>
  )
}

export default Stats