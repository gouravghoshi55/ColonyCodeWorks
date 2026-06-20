import { motion } from 'framer-motion'
import { Rocket, Users, Award, TrendingUp, Globe } from 'lucide-react'

const milestones = [
  {
    year: '2024',
    quarter: 'Q1',
    title: 'The Beginning',
    description: 'Colony Code Works was founded with a vision to build digital products that scale.',
    icon: Rocket,
    color: 'from-honey to-orange-500',
  },
  {
    year: '2024',
    quarter: 'Q2',
    title: 'First Products',
    description: 'Launched our first SaaS product — PropertyCRM. Onboarded 5 enterprise clients.',
    icon: Award,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2024',
    quarter: 'Q3',
    title: 'Team Expansion',
    description: 'Grew the team to 10+ engineers and designers. Started AI/ML division.',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2024',
    quarter: 'Q4',
    title: 'Global Reach',
    description: 'Expanded operations to 15+ countries. 50+ projects successfully delivered.',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
  },
  {
    year: '2025',
    quarter: 'Q1',
    title: 'Next Frontier',
    description: 'Launching AI-powered products and entering the enterprise market.',
    icon: TrendingUp,
    color: 'from-red-500 to-rose-500',
  },
]

const Journey = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-card border border-honey/20 px-4 py-2 rounded-full mb-6">
            <span className="text-honey text-sm font-medium">🗓️ Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Milestones in Our{' '}
            <span className="gradient-text">Story</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From a small idea to a thriving colony — here's our journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-honey/50 via-orange-500/30 to-transparent transform md:-translate-x-px" />

          {milestones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`relative flex items-center gap-6 mb-10 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Icon circle */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                >
                  <item.icon size={24} className="text-white" />
                </motion.div>
              </div>

              {/* Center dot on desktop */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-honey to-orange-500 z-20 shadow-honey" />

              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:mr-[calc(50%+3rem)]' : 'md:ml-[calc(50%+3rem)]'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card border border-white/10 hover:border-honey/30 rounded-2xl p-6 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                      {item.year} • {item.quarter}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journey