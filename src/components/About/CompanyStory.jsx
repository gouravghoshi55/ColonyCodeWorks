import { motion } from 'framer-motion'
import { Lightbulb, Target, Zap } from 'lucide-react'

const CompanyStory = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 glass-card border border-honey/20 px-4 py-2 rounded-full mb-6">
              <span className="text-honey text-sm font-medium">📖 Our Story</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              From an Idea to a{' '}
              <span className="gradient-text">Thriving Colony</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Colony Code Works was born from a simple yet powerful observation — 
                the most successful software products are built like bee colonies: 
                with <span className="text-white font-medium">collaboration, 
                precision, and continuous innovation</span>.
              </p>

              <p>
                Founded in <span className="text-honey font-semibold">2024</span>, 
                we set out to redefine how digital products are built. We're not 
                just another agency — we're a product-first company that builds both 
                our own SaaS products and crafts custom solutions for ambitious 
                startups, SMEs, and enterprises.
              </p>

              <p>
                Today, we're a team of <span className="text-white font-medium">passionate 
                engineers, designers, and product thinkers</span> united by a shared 
                vision: to build digital products that scale, inspire, and create 
                lasting impact.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Lightbulb, label: 'Innovation' },
                { icon: Target, label: 'Precision' },
                { icon: Zap, label: 'Speed' },
              ].map((item) => (
                <div key={item.label} className="glass-card border border-white/10 rounded-xl p-4 text-center">
                  <item.icon size={24} className="text-honey mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main visual card */}
            <div className="relative glass-card border border-honey/20 rounded-3xl p-8 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-honey/10 to-orange-500/10 opacity-50" />
              
              {/* Bee icon */}
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-9xl mb-6"
                >
                  🐝
                </motion.div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  The Colony Philosophy
                </h3>
                <p className="text-gray-400 mb-6">
                  Just like bees work together with purpose and precision, 
                  we collaborate to build extraordinary digital experiences.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card rounded-xl p-4">
                    <p className="text-3xl font-display font-black gradient-text">99%</p>
                    <p className="text-gray-400 text-xs mt-1">Client Satisfaction</p>
                  </div>
                  <div className="glass-card rounded-xl p-4">
                    <p className="text-3xl font-display font-black gradient-text">24/7</p>
                    <p className="text-gray-400 text-xs mt-1">Dedicated Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -top-6 -right-6 w-24 h-24 hexagon bg-gradient-to-br from-honey to-orange-500 flex items-center justify-center shadow-honey-lg"
            >
              <span className="text-3xl">⚡</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              className="absolute -bottom-6 -left-6 w-20 h-20 hexagon bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStory