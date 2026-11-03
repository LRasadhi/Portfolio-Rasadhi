import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroBackdrop() {
  const reduce = useReducedMotion()
  const [spot, setSpot] = useState({ x: 55, y: 30 })

  useEffect(() => {
    if (reduce) {
      return
    }

    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100
      const y = (event.clientY / window.innerHeight) * 100
      setSpot({ x, y })
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [reduce])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          left: `${spot.x}%`,
          top: `${spot.y}%`,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(79,140,255,0.18), transparent 65%)",
        }}
      />
      <motion.div
        className="absolute top-16 right-[8%] h-40 w-40 rounded-full border border-white/8"
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-[12%] h-24 w-24 rounded-xl border border-accent/20"
        animate={reduce ? undefined : { y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
