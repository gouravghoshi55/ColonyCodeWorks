import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle, Clock, Star } from 'lucide-react'
import { staggerContainer, fadeInUp } from '../../animations/variants'

const products = [
  {
    emoji: '🏠',
    name: 'PropertyCRM',
    tagline: 'Real Estate CRM Platform',
    desc: 'Complete real estate management platform with property listings, client tracking, deal pipeline, and automated follow-ups.',
    features: ['Lead Management', 'Property Listings', 'Deal Pipeline', 'Analytics Dashboard'],
    status: 'Live',
    statusColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    tech: ['React', 'Node.js', 'MongoDB'],
    stars: 4.8,
  },
  {
    emoji: '🍽️',
    name: 'RestaurantOS',
    tagline: 'Restaurant Management System',
    desc: 'End-to-end restaurant operations platform covering POS, inventory, staff management, and customer experience.',
    features: ['POS System', 'Inventory Tracking', 'Staff Management', 'Online Orders'],
    status: 'Live',
    statusColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    tech: ['React Native', 'Express', 'PostgreSQL'],
    stars: 4.9,
  },
  {
    emoji: '👥',
    name: 'HRFlow',
    tagline: 'HR Management Suite',
    desc: 'Comprehensive HR management platform for employee lifecycle, payroll, attendance, and performance management.',
    features: ['Employee Onboarding', 'Payroll Processing', 'Leave Management', 'Performance Reviews'],
    status: 'Beta',
    statusColor: 'text-honey bg-honey/10 border-honey/30',
    tech: ['Next.js', 'NestJS', 'PostgreSQL'],
    stars: 4.7,
  },
  {
    emoji: '🎯',
    name: 'LeadHive',
    tagline: 'Sales Automation Platform',
    desc: 'Intelligent sales automation platform with AI-powered lead scoring, nurturing sequences, and conversion analytics.',
    features: ['AI Lead Scoring', 'Email Sequences', 'CRM Integration', 'Sales Analytics'],
    status: 'Coming Soon',
    statusColor: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
    tech: ['React', 'Python', 'Redis'],
    stars: null,
  },
]

const Stars = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={12}
        className={i < Math.floor(rating) ? 'text-honey fill-honey' : 'text-gray-600'}
      />
    ))}
    <span className="text-gray-400 text-xs ml-1">{rating}</span>
  </div>
)

const Products = () => {
  return (
    <section id="products" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary to-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/20 to-transparent" />
      <div className="absolute bottom-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl left-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-card border border-honey/20 px-4 py-2 rounded-full mb-6">
            <span className="text-honey text-sm font-medium">🏗️ Our Products</span>
          </div>
          <h2 className="section-title mb-6">
            Products Built by{' '}
            <span className="gradient-text">Colony Code Works</span>
          </h2>
          <p className="section-subtitle">
            We don't just build for clients — we build products ourselves.
            Here's what we've shipped.
          </p>
        </motion.div>

        {/* Products grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="group glass-card border border-white/10 hover:border-honey/20 rounded-3xl p-8 relative overflow-hidden transition-all duration-500"
            >
              {/* Background glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-honey/5 rounded-full blur-3xl group-hover:bg-honey/10 transition-all duration-500" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-3xl border border-honey/20">
                      {product.emoji}
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white">{product.name}</h3>
                      <p className="text-gray-400 text-sm">{product.tagline}</p>
                      {product.stars && <Stars rating={product.stars} />}
                    </div>
                  </div>
                  
                  <div className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${product.statusColor} flex items-center gap-1.5`}>
                    {product.status === 'Live' && <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />}
                    {product.status === 'Beta' && <div className="w-1.5 h-1.5 bg-honey rounded-full animate-pulse" />}
                    {product.status === 'Coming Soon' && <Clock size={12} />}
                    {product.status}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">{product.desc}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-honey flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex items-center gap-2 flex-wrap">
                  {product.tech.map((t) => (
                    <span key={t} className="text-xs glass-card border border-white/10 px-3 py-1 rounded-full text-gray-400">
                      {t}
                    </span>
                  ))}
                  
                  {product.status === 'Live' && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="ml-auto flex items-center gap-1.5 text-honey text-sm font-medium hover:underline"
                    >
                      View Product <ExternalLink size={14} />
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming soon banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 glass-card border border-honey/20 px-8 py-4 rounded-2xl">
            <span className="text-2xl animate-float">🚀</span>
            <div className="text-left">
              <p className="text-white font-semibold">More Products Coming Soon</p>
              <p className="text-gray-400 text-sm">We're constantly building new innovations</p>
            </div>
            <div className="w-2 h-2 bg-honey rounded-full animate-pulse ml-2" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products