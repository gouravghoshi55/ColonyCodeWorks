import { motion } from 'framer-motion'
import { Target, Eye, Heart } from 'lucide-react'

const items = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower businesses with cutting-edge digital products that drive growth, efficiency, and innovation. We build scalable solutions that transform ideas into market-leading products.',
    gradient: 'from-honey to-orange-500',
    iconBg: 'bg-honey/20',
    iconColor: 'text-honey',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To become a global leader in product engineering by 2030 — known for building world-class software products that set new industry standards and create meaningful impact.',
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Collaboration, Intelligence, Scalability, Precision, and Continuous Innovation. These five pillars guide every line of code we write and every decision we make.',
    gradient: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
  },
]

const MissionVision = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-secondary" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card border border-honey/20 px-4 py-2 rounded-full mb-6">
            <span className="text-honey text-sm font-medium">🎯 What Drives Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Mission, Vision &{' '}
            <span className="gradient-text">Values</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The principles that guide our work and define who we are.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group glass-card border border-white/10 hover:border-honey/30 rounded-3xl p-8 relative overflow-hidden transition-all duration-500"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={28} className={item.iconColor} />
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decoration */}
              <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionVision