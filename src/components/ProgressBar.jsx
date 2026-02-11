import { useState, useEffect } from 'react'

export default function ProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    function updateProgress() {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      setScrollPercent((scrollY / docHeight) * 100)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div
      className="fixed left-0 right-0 top-[72px] z-[40] h-0.5 bg-gray-200"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta transition-all duration-150 ease-out"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  )
}
