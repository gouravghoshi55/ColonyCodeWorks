import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, ArrowRight, TrendingUp, Zap, Target } from 'lucide-react'

const portfolio = [
  {
    id: 1,
    category: 'SaaS',
    image: null,
    gradient: 'from-blue-600 via-blue-700 to-blue-900',
    title: 'PropertyCRM Platform',
    company: 'RealEstate Corp',
    problem: 'Real estate agents struggled with scattered leads, missed follow-ups, and no unified platform for property management.',
    solution: 'Built a comprehensive CRM platform with AI-powered lead scoring, automated follow-ups, property listing management, and analytics dashboard.',
    result: '3x increase in deal closures',
    metrics: [
      { icon: TrendingUp, value: '300%', label: 'More Deals Closed' },
      { icon: Zap, value: '70%', label: 'Faster Follow-ups' },
      { icon: Target, value: '95%', label: 'Lead Accuracy' },
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'AI'],
    emoji: '🏠',
  },
  {
    id: 2,
    category: 'Enterprise',
    image: null,
    gradient: 'from-orange-600 via-red-700 to-pink-900',
    title: 'RestaurantOS System',
    company: 'FoodChain Network',
    problem: 'Restaurant chain operating 50+ locations faced inventory chaos, staff scheduling issues, and no real-time visibility.',
    solution: 'Developed an all-in-one restaurant management system with real-time POS, inventory tracking, staff scheduling, and analytics.',
    result: '40% reduction in food waste',
    metrics: [
      { icon: TrendingUp, value: '40%', label: 'Reduced Waste' },
      { icon: Zap, value: '60%', label: 'Faster Service' },
      { icon: Target, value: '$2M', label: 'Cost Saved Annually' },
    ],
    tags: ['React Native', 'Express', 'PostgreSQL'],
    emoji: '🍽️',
  },
  {
    id: 3,
    category: 'AI',
    image: null,
    gradient: 'from-purple-600 via-violet-700 to-indigo-900',
    title: 'AI Sales Intelligence',
    company: 'TechSales Inc',
    problem: 'Sales team spending 60% of time on manual prospecting, low-quality lead discovery, and inconsistent outreach.',
    solution: 'Built AI-powered sales intelligence platform with automated lead discovery, personalized outreach generation, and conversion prediction.',
    result: '200% ROI in first quarter',
    metrics: [
      { icon: TrendingUp, value: '200%', label: 'ROI Achieved' },
      { icon: Zap, value: '80%', label: 'Time Saved' },
      { icon: Target, value: '5x', label: 'Lead Quality' },
    ],
    tags: ['OpenAI', 'Python', 'React', 'Redis'],
    emoji: '🤖',
  },
]

const Portfolio = () => {
  const [activeId, setActiveId] = useState(null)

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-secondary" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-card border border-honey/20 px-4 py-2 rounded-full mb-6">
            <span className="text-honey text-sm font-medium">💼 Case Studies</span>
          </div>
          <h2 className="section-title mb-6">
            Real Results for{' '}
            <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it. See how we've transformed
            businesses with measurable impact.
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {portfolio.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              onClick={() => setActiveId(activeId === item.id ? null : item.id)}
              className="group cursor-pointer"
            >
              <div className="glass-card border border-white/10 hover:border-honey/20 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                {/* Image/gradient header */}
                <div className={`relative h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="text-8xl opacity-30">{item.emoji}</div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <div className="text-5xl mb-2">{item.emoji}</div>
                    <span className="glass-card border border-white/20 px-3 py-1 rounded-full text-white text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="glass-card border border-white/20 px-4 py-2 rounded-xl flex items-center gap-2 text-white text-sm">
                      <ExternalLink size={14} />
                      View Case Study
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-500 text-xs mb-1">{item.company}</p>
                    <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                    
                    {/* Result badge */}
                    <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-3 py-1.5 rounded-full text-sm font-medium">
                      <TrendingUp size={14} />
                      {item.result}
                    </div>
                  </div>

                  {/* Problem/Solution - expandable */}
                  <AnimatePresence>
                    {activeId === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 mb-4 pt-2">
                          <div>
                            <p className="text-honey text-xs font-semibold uppercase tracking-wider mb-1">Problem</p>
                            <p className="text-gray-400 text-sm">{item.problem}</p>
                          </div>
                          <div>
                            <p className="text-honey text-xs font-semibold uppercase tracking-wider mb-1">Solution</p>
                            <p className="text-gray-400 text-sm">{item.solution}</p>
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {item.metrics.map((m) => (
                            <div key={m.label} className="glass-card rounded-xl p-3 text-center">
                              <m.icon size={14} className="text-honey mx-auto mb-1" />
                              <p className="text-white font-bold text-sm">{m.value}</p>
                              <p className="text-gray-500 text-xs leading-tight">{m.label}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tags + CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs glass-card border border-white/10 px-2 py-1 rounded-full text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-1 text-honey text-sm font-medium">
                      {activeId === item.id ? 'Less' : 'More'}
                      <ArrowRight size={14} className={`transition-transform ${activeId === item.id ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="outline-btn"
          >
            View All Case Studies
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio