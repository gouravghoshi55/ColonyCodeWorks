import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) return

    setIsVisible(true)

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setTimeout(() => {
        setDotPosition({ x: e.clientX, y: e.clientY })
      }, 80)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (target.matches('a, button, [role="button"], input, textarea, select, [data-hover]')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="custom-cursor w-10 h-10 border-2 border-honey rounded-full"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 0.8,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      />
      {/* Inner dot */}
      <motion.div
        className="custom-cursor w-2 h-2 bg-honey rounded-full"
        animate={{
          x: dotPosition.x - 4,
          y: dotPosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.05 }}
      />
    </>
  )
}

export default CustomCursor