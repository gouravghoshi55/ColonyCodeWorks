import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-honey/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Floating bee */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-7xl mb-8"
          >
            🐝
          </motion.div>

          <div className="inline-flex items-center gap-2 glass-card border border-honey/30 px-5 py-2 rounded-full mb-6">
            <Sparkles size={16} className="text-honey" />
            <span className="text-honey text-sm font-semibold">
              Join Our Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
            Ready to Build Something{' '}
            <span className="gradient-text">Amazing?</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate and turn your ideas into powerful digital products. 
            Join the colony and be part of something extraordinary.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="honey-btn flex items-center gap-2 group"
              >
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link to="/#portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="outline-btn"
              >
                View Our Work
              </motion.button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {[
              '✨ 24-hour Response',
              '🔒 NDA Protected',
              '💯 Money-back Guarantee',
              '🌍 Global Service',
            ].map((badge) => (
              <div 
                key={badge}
                className="glass-card border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300"
              >
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection