import { motion } from 'framer-motion'
import { Users, Brain, Layers, Target, Sparkles } from 'lucide-react'

const values = [
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work together like a beehive — every voice matters, every contribution counts.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Brain,
    title: 'Intelligence',
    description: 'Smart solutions powered by data, research, and continuous learning.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Layers,
    title: 'Scalability',
    description: 'Built to grow — from MVP to millions of users without breaking a sweat.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Every pixel, every line of code, crafted with meticulous attention to detail.',
    color: 'text-honey',
    bg: 'bg-honey/10',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Constantly pushing boundaries with cutting-edge tech and bold ideas.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
  },
]

const TeamValues = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-secondary" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card border border-honey/20 px-4 py-2 rounded-full mb-6">
            <span className="text-honey text-sm font-medium">💎 Core Values</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            The Five Pillars of{' '}
            <span className="gradient-text">Our Colony</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Five principles that define how we work, think, and build.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group glass-card border border-white/10 hover:border-honey/30 rounded-2xl p-6 text-center transition-all duration-300"
            >
              <div className={`w-14 h-14 ${value.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <value.icon size={24} className={value.color} />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamValues