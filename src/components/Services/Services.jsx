import { motion } from 'framer-motion'
import { 
  PackageOpen, Globe, Smartphone, Brain, 
  Building2, Palette, ArrowRight 
} from 'lucide-react'
import { staggerContainer, fadeInUp } from '../../animations/variants'

const services = [
  {
    icon: PackageOpen,
    title: 'Product Development',
    desc: 'Build SaaS products from scratch with proven architecture, modern tech stack, and product-first thinking.',
    features: ['MVP Development', 'SaaS Platforms', 'Product Strategy'],
    color: 'from-honey/20 to-orange-500/20',
    border: 'group-hover:border-honey/40',
    iconBg: 'bg-honey/20',
    iconColor: 'text-honey',
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Modern, scalable web applications built with the latest technologies for performance and user experience.',
    features: ['React / Next.js', 'Full Stack Apps', 'Progressive Web Apps'],
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'group-hover:border-blue-500/40',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile applications for Android and iOS with exceptional user experiences.',
    features: ['React Native', 'iOS & Android', 'App Store Ready'],
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'group-hover:border-purple-500/40',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    desc: 'Cutting-edge AI automation, machine learning, and intelligent systems to power your digital products.',
    features: ['LLM Integration', 'AI Automation', 'Predictive Analytics'],
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'group-hover:border-emerald-500/40',
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Building2,
    title: 'Enterprise Software',
    desc: 'Large-scale, mission-critical business solutions built for reliability, security, and performance at scale.',
    features: ['ERP Systems', 'Custom Workflows', 'API Integration'],
    color: 'from-red-500/20 to-rose-500/20',
    border: 'group-hover:border-red-500/40',
    iconBg: 'bg-red-500/20',
    iconColor: 'text-red-400',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Beautiful, intuitive, and user-centered designs that create memorable experiences and drive conversions.',
    features: ['Design Systems', 'Prototyping', 'User Research'],
    color: 'from-amber-500/20 to-yellow-500/20',
    border: 'group-hover:border-amber-500/40',
    iconBg: 'bg-amber-500/20',
    iconColor: 'text-amber-400',
  },
]

const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Blob */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-honey/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-card border border-honey/20 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-honey rounded-full animate-pulse" />
            <span className="text-honey text-sm font-medium">What We Do</span>
          </div>
          <h2 className="section-title mb-6">
            Comprehensive{' '}
            <span className="gradient-text">Digital Services</span>
          </h2>
          <p className="section-subtitle">
            From idea to deployment, we handle every aspect of your digital product journey
            with precision and expertise.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className={`group glass-card border border-white/10 ${service.border} rounded-2xl p-8 cursor-pointer transition-all duration-500 relative overflow-hidden`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={26} className={service.iconColor} />
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {service.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-honey rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-honey text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-0 transition-all duration-300">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-honey/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services