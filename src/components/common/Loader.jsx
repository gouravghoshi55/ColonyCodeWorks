import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setShow(false)
            onComplete?.()
          }, 400)
          return 100
        }
        return prev + 2
      })
    }, 25)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-honey/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Honeycomb loader */}
            <motion.div
              className="relative mb-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-20 h-20 hexagon bg-gradient-to-br from-honey to-orange-500 flex items-center justify-center">
                <span className="text-3xl">🐝</span>
              </div>
            </motion.div>

            {/* Company name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-display font-bold">
                <span className="gradient-text">Colony Code Works</span>
              </h1>
              <p className="text-gray-400 mt-2 text-sm tracking-wider uppercase">
                Building Digital Products That Scale
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-honey to-orange-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <p className="text-gray-500 text-sm mt-3">{progress}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader