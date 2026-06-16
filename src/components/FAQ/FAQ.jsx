import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How long does development take?',
    a: 'Project timelines vary based on complexity. A typical MVP takes 6-10 weeks, a full SaaS platform takes 3-6 months, and enterprise solutions can take 6-12 months. We provide detailed timelines after the discovery phase.',
  },
  {
    q: 'What technologies do you use?',
    a: 'We use a modern tech stack including React/Next.js for frontend, Node.js/NestJS for backend, MongoDB/PostgreSQL for databases, AWS/Vercel for deployment, and OpenAI/LangChain for AI solutions. We choose the best tools for each specific project.',
  },
  {
    q: 'Do you build SaaS products?',
    a: 'Absolutely! SaaS development is one of our core specialties. We build complete SaaS platforms including multi-tenancy, subscription billing, user management, analytics dashboards, and API integrations from the ground up.',
  },
  {
    q: 'Do you provide maintenance and support?',
    a: 'Yes! We offer dedicated post-launch maintenance, bug fixes, performance monitoring, feature additions, and 24/7 technical support. We build long-term partnerships, not one-time projects.',
  },
  {
    q: 'Can you help startups with limited budgets?',
    a: 'Yes! We have flexible engagement models designed for startups — from MVP-first development to phased builds. We help you prioritize features that matter most and build incrementally to manage budget effectively.',
  },
  {
    q: 'Do you sign NDA and IP agreements?',
    a: 'Absolutely. We sign NDAs and complete IP transfer agreements. All code, designs, and intellectual property developed for your project are 100% yours upon project completion and payment.',
  },
  {
    q: 'How do we communicate during the project?',
    a: 'We provide full transparency via Slack/Teams, weekly video calls, Jira sprint tracking, GitHub/GitLab code access, and real-time staging environments. You are always in the loop.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-secondary" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center gap-2 glass-card border border-honey/20 px-4 py-2 rounded-full mb-6">
              <span className="text-honey text-sm font-medium">❓ FAQ</span>
            </div>
            <h2 className="section-title mb-6">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Got questions? We've got answers. If you can't find what you're 
              looking for, feel free to reach out directly.
            </p>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="outline-btn inline-flex"
            >
              Ask Us Anything
            </motion.a>

            {/* Bee colony icon */}
            <div className="mt-12 glass-card border border-honey/20 rounded-2xl p-6">
              <div className="text-4xl mb-4">🐝</div>
              <p className="text-white font-semibold mb-2">Bee Analogy</p>
              <p className="text-gray-400 text-sm">
                Just like a bee colony works with precision and intelligence,
                we apply the same principles to every project we build.
              </p>
            </div>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`glass-card border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'border-honey/30 bg-honey/5' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-semibold pr-4 leading-snug">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                    openIndex === i ? 'bg-honey text-dark' : 'glass-card border border-white/10 text-gray-400'
                  }`}>
                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px bg-white/10 mb-4" />
                        <p className="text-gray-400 leading-relaxed text-sm">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQ