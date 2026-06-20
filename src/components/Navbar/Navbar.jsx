import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import ThemeToggle from '../common/ThemeToggle'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/#products' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Contact', href: '/#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('/')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update active link based on current route
  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location.pathname])

  const handleNavClick = (href) => {
    setActiveLink(href)
    setMobileOpen(false)

    // Page route (e.g., /about, /)
    if (href === '/' || href === '/about') {
      navigate(href)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Hash link on home page (e.g., /#services)
    if (href.startsWith('/#')) {
      const hash = href.substring(2)
      
      if (location.pathname !== '/') {
        // Navigate to home first, then scroll
        navigate('/')
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 300)
      } else {
        // Already on home, just scroll
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const handleLogoClick = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={handleLogoClick}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 hexagon bg-gradient-to-br from-honey to-orange-500 flex items-center justify-center">
              <span className="text-lg font-black text-dark">C</span>
            </div>
            <div className="text-left">
              <span className="font-display font-bold text-white text-lg leading-none block">
                Colony Code
              </span>
              <span className="gradient-text font-bold text-sm leading-none">Works</span>
            </div>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeLink === link.href
                    ? 'text-honey bg-honey/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('/#contact')}
              className="honey-btn py-2 px-6 text-sm"
            >
              Start Project
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 glass-card flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 right-0 z-[99] bg-dark/95 backdrop-blur-xl border-b border-white/10 lg:hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                    activeLink === link.href
                      ? 'text-honey bg-honey/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => handleNavClick('/#contact')}
                className="honey-btn mt-4 text-center"
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar