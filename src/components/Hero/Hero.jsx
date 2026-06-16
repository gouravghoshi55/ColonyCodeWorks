import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Code2, Brain, Globe, Smartphone, Database, Cloud } from 'lucide-react'
import { useRef } from 'react'

const floatingIcons = [
  { icon: Code2, label: 'Code', delay: 0, position: 'top-20 left-[10%]', size: 'lg' },
  { icon: Brain, label: 'AI', delay: 0.5, position: 'top-32 right-[12%]', size: 'md' },
  { icon: Globe, label: 'Web', delay: 1, position: 'bottom-40 left-[8%]', size: 'md' },
  { icon: Smartphone, label: 'Mobile', delay: 1.5, position: 'bottom-32 right-[10%]', size: 'sm' },
  { icon: Database, label: 'DB', delay: 0.8, position: 'top-1/2 left-[5%]', size: 'sm' },
  { icon: Cloud, label: 'Cloud', delay: 1.2, position: 'top-1/2 right-[6%]', size: 'md' },
]

const TrustBadge = ({ text }) => (
  <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full border border-white/10">
    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
    <span className="text-gray-300 text-sm">{text}</span>
  </div>
)

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated blobs */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-honey/8 rounded-full blur-[120px] animate-blob"
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[100px] animate-blob animation-delay-2000"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-honey/3 rounded-full blur-[150px]" />

      {/* Floating tech icons */}
      {floatingIcons.map(({ icon: Icon, label, delay, position, size }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5 }}
          className={`absolute ${position} hidden xl:flex`}
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
            className={`glass-card p-3 rounded-2xl border border-honey/20 ${
              size === 'lg' ? 'scale-125' : size === 'sm' ? 'scale-90' : ''
            }`}
          >
            <Icon size={24} className="text-honey" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 text-center pt-24"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 glass-card border border-honey/30 px-5 py-2 rounded-full mb-8"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="text-xl"
          >
            🐝
          </motion.span>
          <span className="text-honey text-sm font-semibold tracking-wide">
            Product Engineering Company
          </span>
          <div className="w-1.5 h-1.5 bg-honey rounded-full animate-pulse" />
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[1.05] mb-6 tracking-tight">
            <span className="block text-white">Building Products.</span>
            <span className="block gradient-text">Powering Innovation.</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          We transform ideas into scalable software products, AI solutions, SaaS platforms,
          and enterprise applications. Inspired by the{' '}
          <span className="text-honey font-medium">precision of a bee colony</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(253,184,19,0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="honey-btn flex items-center gap-2 text-base group"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="outline-btn flex items-center gap-2 text-base group"
          >
            <Play size={16} className="group-hover:scale-110 transition-transform" />
            View Our Work
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <TrustBadge text="50+ Projects Delivered" />
          <TrustBadge text="99% Client Satisfaction" />
          <TrustBadge text="Startup to Enterprise" />
          <TrustBadge text="AI-Powered Solutions" />
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="glass-card border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-6 py-4 bg-white/3 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-honey/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4 bg-white/5 rounded-full px-4 py-1.5 text-gray-500 text-xs text-left">
                colonycodeworks.com/dashboard
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="p-6 bg-gradient-to-br from-dark-secondary/50 to-dark/50">
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Active Projects', value: '12', change: '+3', color: 'honey' },
                  { label: 'Revenue', value: '$48K', change: '+12%', color: 'green' },
                  { label: 'Deployments', value: '89', change: '+7', color: 'blue' },
                  { label: 'Uptime', value: '99.9%', change: '↑', color: 'purple' },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card p-4 rounded-xl">
                    <p className="text-gray-500 text-xs mb-1">{stat.label}</p>
                    <p className="text-white font-bold text-xl">{stat.value}</p>
                    <span className="text-green-400 text-xs">{stat.change}</span>
                  </div>
                ))}
              </div>
              
              {/* Chart mockup */}
              <div className="glass-card p-4 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-medium text-sm">Project Growth</span>
                  <span className="text-honey text-xs glass-card px-2 py-1 rounded-full border border-honey/20">Live</span>
                </div>
                <div className="flex items-end gap-2 h-24">
                  {[30, 45, 35, 60, 75, 55, 80, 70, 90, 85, 95, 88].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1.5 + i * 0.05, duration: 0.6, ease: 'easeOut' }}
                      className="flex-1 rounded-t-sm"
                      style={{
                        background: i === 10 
                          ? 'linear-gradient(to top, #FDB813, #F97316)' 
                          : 'rgba(253,184,19,0.2)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -left-12 top-1/3 glass-card p-3 rounded-2xl border border-honey/30 hidden lg:block"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-honey/20 rounded-lg flex items-center justify-center">
                <span className="text-sm">🚀</span>
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Just Launched!</p>
                <p className="text-gray-500 text-xs">PropertyCRM v2.0</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="absolute -right-12 top-1/4 glass-card p-3 rounded-2xl border border-green-500/30 hidden lg:block"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span className="text-sm">✅</span>
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Deployed</p>
                <p className="text-gray-500 text-xs">0 errors</p>
              </div>
            </div>
          </motion.div>

          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent rounded-b-3xl" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-honey rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero