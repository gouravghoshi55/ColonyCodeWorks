import { motion } from 'framer-motion'
import {  Mail, ArrowRight, Heart } from 'lucide-react'

const services = ['Product Development', 'Web Development', 'Mobile Apps', 'AI Solutions', 'Enterprise Software', 'UI/UX Design']
const products = ['PropertyCRM', 'RestaurantOS', 'HRFlow', 'LeadHive']
const company = ['About Us', 'Blog', 'Careers', 'Press', 'Privacy Policy', 'Terms of Service']

const socials = [
  { icon: Mail, href: 'mailto:hello@colonycodeworks.com', label: 'Email' },
]
const Footer = () => {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden bg-dark border-t border-white/5">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-honey/50 to-transparent" />
      
      {/* Background blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-honey/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20 text-center border-b border-white/5"
        >
          <div className="text-5xl mb-6 animate-float">🐝</div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
            Ready to Join the <span className="gradient-text">Colony?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Start building your dream product with a team that's as invested in your success as you are.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('#contact')}
            className="honey-btn flex items-center gap-2 mx-auto text-base group"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 hexagon bg-gradient-to-br from-honey to-orange-500 flex items-center justify-center">
                <span className="text-lg font-black text-dark">C</span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg leading-none block">Colony Code</span>
                <span className="gradient-text font-bold text-sm">Works</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Building digital products that scale. Inspired by the precision,
              intelligence, and collaboration of a bee colony. 🐝
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass-card border border-white/10 hover:border-honey/30 rounded-xl flex items-center justify-center text-gray-400 hover:text-honey transition-all"
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-honey rounded-full" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-gray-400 hover:text-honey text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-orange-500 rounded-full" />
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p}>
                  <a href="#products" className="text-gray-400 hover:text-honey text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-purple-500 rounded-full" />
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c}>
                  <a href="#" className="text-gray-400 hover:text-honey text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Colony Code Works. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Built with <Heart size={14} className="text-honey fill-honey animate-pulse" /> by{' '}
            <span className="gradient-text font-semibold">Colony Code Works</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer