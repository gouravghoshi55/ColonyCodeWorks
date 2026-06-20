import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const AboutHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 animated-bg" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-honey/10 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-card border border-honey/30 px-5 py-2 rounded-full mb-8"
        >
          <Sparkles size={16} className="text-honey" />
          <span className="text-honey text-sm font-semibold tracking-wide">
            About Colony Code Works
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-display font-black mb-6 leading-tight"
        >
          We're Building the{' '}
          <span className="gradient-text">Future of Software</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
        >
          A passionate team of engineers, designers, and product thinkers — 
          inspired by the collaborative intelligence of a{' '}
          <span className="text-honey font-medium">bee colony 🐝</span>
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: '2024', label: 'Founded' },
            { value: '10+', label: 'Team Members' },
            { value: '50+', label: 'Projects' },
            { value: '15+', label: 'Countries' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="glass-card border border-white/10 rounded-2xl p-4"
            >
              <div className="text-3xl font-display font-black gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-honey rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutHero