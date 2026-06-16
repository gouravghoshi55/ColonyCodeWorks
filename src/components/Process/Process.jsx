import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Search, FileText, Palette, Code2, TestTube, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery',
    desc: 'Deep dive into your business goals, target audience, and technical requirements to build a solid foundation.',
    duration: '1-2 weeks',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Planning',
    desc: 'Create detailed project roadmap, technical architecture, sprint plans, and resource allocation.',
    duration: '1 week',
    color: 'from-honey to-orange-400',
    bg: 'bg-honey/10',
    border: 'border-honey/30',
  },
  {
    icon: Palette,
    step: '03',
    title: 'Design',
    desc: 'Craft beautiful wireframes, prototypes, and high-fidelity designs with a focus on user experience.',
    duration: '2-3 weeks',
    color: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
  },
  {
    icon: Code2,
    step: '04',
    title: 'Development',
    desc: 'Agile development with weekly sprints, code reviews, and continuous integration for quality output.',
    duration: '4-12 weeks',
    color: 'from-green-500 to-emerald-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
  },
  {
    icon: TestTube,
    step: '05',
    title: 'Testing',
    desc: 'Comprehensive QA testing, performance optimization, security audits, and bug fixes.',
    duration: '1-2 weeks',
    color: 'from-red-500 to-rose-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
  },
  {
    icon: Rocket,
    step: '06',
    title: 'Deployment',
    desc: 'Smooth production deployment with CI/CD pipelines, monitoring, and zero-downtime releases.',
    duration: '1 week',
    color: 'from-honey to-orange-500',
    bg: 'bg-honey/10',
    border: 'border-honey/30',
  },
  {
    icon: TrendingUp,
    step: '07',
    title: 'Scale',
    desc: 'Post-launch support, performance monitoring, feature iterations, and continuous improvement.',
    duration: 'Ongoing',
    color: 'from-teal-500 to-cyan-500',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/30',
  },
]

const Process = () => {
  const containerRef = useRef(null)

  return (
    <section id="process" className="py-32 relative overflow-hidden">
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
            <span className="text-honey text-sm font-medium">⚙️ Our Process</span>
          </div>
          <h2 className="section-title mb-6">
            How We{' '}
            <span className="gradient-text">Build Excellence</span>
          </h2>
          <p className="section-subtitle">
            Our proven 7-step development process ensures every project is delivered
            on time, on budget, and beyond expectations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-honey/50 via-orange-500/30 to-transparent transform lg:-translate-x-px" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className={`relative flex items-center gap-8 mb-12 ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-row`}
            >
              {/* Mobile: left line indicator */}
              <div className="relative flex-shrink-0 z-10">
                {/* Step circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center relative`}
                >
                  <step.icon size={24} className="text-white" />
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-honey to-orange-500 flex items-center justify-center">
                    <span className="text-dark text-xs font-black">{i + 1}</span>
                  </div>
                </motion.div>
              </div>

              {/* Connector dot on timeline */}
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-honey to-orange-500 z-20 shadow-honey" />

              {/* Content card */}
              <div className={`flex-1 ${i % 2 === 0 ? 'lg:mr-[calc(50%+2rem)]' : 'lg:ml-[calc(50%+2rem)]'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card-hover border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-display font-bold text-white">{step.title}</h3>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-dark`}>
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process