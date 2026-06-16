import { motion } from 'framer-motion'
import { useState } from 'react'
import { staggerContainerFast, scaleIn } from '../../animations/variants'

const techCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    active: 'border-blue-500/50 bg-blue-500/10',
    techs: [
      { name: 'React', icon: '⚛️', desc: 'UI Library' },
      { name: 'Next.js', icon: '▲', desc: 'SSR Framework' },
      { name: 'Tailwind', icon: '🎨', desc: 'CSS Framework' },
      { name: 'Redux', icon: '🔄', desc: 'State Management' },
      { name: 'TypeScript', icon: '📘', desc: 'Type Safety' },
      { name: 'Vite', icon: '⚡', desc: 'Build Tool' },
    ]
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    color: 'from-green-500 to-emerald-500',
    active: 'border-green-500/50 bg-green-500/10',
    techs: [
      { name: 'Node.js', icon: '🟢', desc: 'Runtime' },
      { name: 'Express', icon: '🚂', desc: 'Web Framework' },
      { name: 'NestJS', icon: '🏠', desc: 'Enterprise Framework' },
      { name: 'Python', icon: '🐍', desc: 'AI/ML Backend' },
      { name: 'GraphQL', icon: '◉', desc: 'API Query Language' },
      { name: 'REST API', icon: '🔗', desc: 'API Design' },
    ]
  },
  {
    id: 'database',
    label: 'Database',
    icon: '🗄️',
    color: 'from-honey to-orange-500',
    active: 'border-honey/50 bg-honey/10',
    techs: [
      { name: 'MongoDB', icon: '🍃', desc: 'NoSQL Database' },
      { name: 'PostgreSQL', icon: '🐘', desc: 'SQL Database' },
      { name: 'Redis', icon: '🔴', desc: 'Cache & Queue' },
      { name: 'Prisma', icon: '△', desc: 'ORM' },
      { name: 'Mongoose', icon: '🌿', desc: 'MongoDB ODM' },
      { name: 'Supabase', icon: '⚡', desc: 'BaaS' },
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud',
    icon: '☁️',
    color: 'from-purple-500 to-pink-500',
    active: 'border-purple-500/50 bg-purple-500/10',
    techs: [
      { name: 'AWS', icon: '☁️', desc: 'Cloud Provider' },
      { name: 'Docker', icon: '🐳', desc: 'Containerization' },
      { name: 'Vercel', icon: '▲', desc: 'Edge Deployment' },
      { name: 'GitHub CI', icon: '🔧', desc: 'CI/CD Pipeline' },
      { name: 'Nginx', icon: '🌐', desc: 'Web Server' },
      { name: 'Render', icon: '🚀', desc: 'Cloud Platform' },
    ]
  },
  {
    id: 'ai',
    label: 'AI & ML',
    icon: '🤖',
    color: 'from-red-500 to-rose-500',
    active: 'border-red-500/50 bg-red-500/10',
    techs: [
      { name: 'OpenAI', icon: '🤖', desc: 'LLM API' },
      { name: 'LangChain', icon: '⛓️', desc: 'AI Framework' },
      { name: 'Vector DB', icon: '📊', desc: 'Embeddings Store' },
      { name: 'Hugging Face', icon: '🤗', desc: 'ML Models' },
      { name: 'TensorFlow', icon: '🧠', desc: 'Deep Learning' },
      { name: 'Pinecone', icon: '🌲', desc: 'Vector Search' },
    ]
  },
]

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('frontend')
  const activeCat = techCategories.find(t => t.id === activeTab)

  return (
    <section id="technologies" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Blobs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-honey/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card border border-honey/20 px-4 py-2 rounded-full mb-6">
            <span className="text-honey text-sm font-medium">🔧 Tech Stack</span>
          </div>
          <h2 className="section-title mb-6">
            Powered by{' '}
            <span className="gradient-text">Modern Technology</span>
          </h2>
          <p className="section-subtitle">
            We use industry-leading tools and technologies to build robust, 
            scalable, and future-proof solutions.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {techCategories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all duration-300 font-medium text-sm ${
                activeTab === cat.id
                  ? `${cat.active} text-white border-opacity-50`
                  : 'glass-card border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Tech grid */}
        <motion.div
          key={activeTab}
          variants={staggerContainerFast}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
        >
          {activeCat?.techs.map((tech) => (
            <motion.div
              key={tech.name}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group glass-card-hover border border-white/10 rounded-2xl p-5 text-center cursor-pointer"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
              <p className="text-gray-500 text-xs">{tech.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Technologies', value: '30+' },
            { label: 'Frameworks', value: '15+' },
            { label: 'Cloud Platforms', value: '5+' },
            { label: 'AI Tools', value: '10+' },
          ].map((item) => (
            <div key={item.label} className="glass-card border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-3xl font-display font-black gradient-text mb-1">{item.value}</p>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies