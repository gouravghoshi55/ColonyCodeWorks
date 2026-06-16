import { useState, useEffect, useRef } from 'react'

export const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start)
  const [isActive, setIsActive] = useState(false)
  const startTimeRef = useRef(null)
  const frameRef = useRef(null)

  const startCounter = () => setIsActive(true)

  useEffect(() => {
    if (!isActive) return

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * (end - start) + start))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [isActive, end, start, duration])

  return { count, startCounter }
}