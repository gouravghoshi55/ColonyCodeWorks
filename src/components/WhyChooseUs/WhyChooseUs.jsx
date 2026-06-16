import { motion } from 'framer-motion'
import { Lightbulb, Rocket, GitBranch, Layers, Cpu, HeartHandshake } from 'lucide-react'
import { staggerContainer, fadeInUp } from '../../animations/variants'

const reasons = [
  {
    icon: Lightbulb,
    title: 'Product Mindset',
    desc: 'We think like product founders, not just developers. Every decision is driven by user value and business impact.',
    gradient: 'from-honey to-orange-500',
    shadow: 'hover:shadow-[0_0_30px_rgba(253,184,19,0.2)]',
  },
  {
    icon: Rocket,
    title: 'Startup Friendly',
    desc: 'We understand startup needs — lean MVPs, fast iterations, flexible budgets, and growth-oriented architecture.',
    gradient: 'from-blue-500 to-cyan-500',
    shadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
  },
  {
    icon: GitBranch,
    title: 'Agile Development',
    desc: 'Weekly sprints, continuous delivery, and transparent communication keep you in control throughout.',
    gradient: 'from-purple-500 to-pink-500',
    shadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    desc: 'Every product is architected to scale from day one. No tech debt, no rewrites — just solid foundations.',
    gradient: 'from-green-500 to-emerald-500',
    shadow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]',
  },
  {
    icon: Cpu,
    title: 'Latest Technologies',
    desc: 'We work with cutting-edge tech stacks including AI/ML, cloud-native, and modern frameworks.',
    gradient: 'from-red-500 to-rose-500',
    shadow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    desc: 'Long-term partnership with dedicated support, maintenance, and continuous improvement.',
    gradient: 'from-teal-500 to-cyan-500',
    shadow: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-secondary" />
      
      {/* Top/bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/20 to-transparent" />

      {/* Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-honey/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-card border border-honey/20 px-4 py-2 rounded-full mb-6">
            <span className="text-honey text-sm font-medium">🏆 Why Us</span>
          </div>
          <h2 className="section-title mb-6">
            Why <span className="gradient-text">Colony Code Works</span>?
          </h2>
          <p className="section-subtitle">
            Inspired by the intelligence of a bee colony — collaborative, precise,
            and always building toward something greater.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className={`group glass-card border border-white/10 hover:border-white/20 rounded-2xl p-8 relative overflow-hidden cursor-pointer transition-all duration-500 ${reason.shadow}`}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-dark rounded-xl flex items-center justify-center">
                    <reason.icon size={20} className="text-white" />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>

              {/* Hover line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${reason.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs