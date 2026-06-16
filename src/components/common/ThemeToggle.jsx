import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/10 hover:border-honey/40 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {isDark ? (
          <Moon size={18} className="text-honey" />
        ) : (
          <Sun size={18} className="text-honey" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle