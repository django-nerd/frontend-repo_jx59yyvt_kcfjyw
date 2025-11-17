import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const PrimaryCTA = ({ className = '' }) => (
  <a href="#waitlist" className={`relative inline-flex items-center justify-center px-5 py-3 text-sm md:text-base font-semibold text-white bg-black/80 rounded-md border border-cyan-400/40 shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_45px_rgba(34,211,238,0.5)] transition-all duration-300 ring-1 ring-cyan-500/30 hover:ring-cyan-400/70 group ${className}`}>
    <span className="relative z-10">Join the Waitlist 🚨</span>
    <span className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-600/30 via-fuchsia-600/20 to-cyan-600/30 blur-sm opacity-70 group-hover:opacity-100 transition" />
  </a>
)

const SecondaryCTA = ({ className = '' }) => (
  <a href="#discord" className={`relative inline-flex items-center justify-center px-5 py-3 text-sm md:text-base font-semibold text-black bg-white/90 rounded-md border border-violet-400/40 hover:border-violet-300/70 transition-all duration-300 shadow-[0_0_20px_rgba(167,139,250,0.25)] hover:shadow-[0_0_40px_rgba(167,139,250,0.45)] ${className}`}>
    Enter Discord Node 💬
  </a>
)

export default function Hero() {
  const { scrollY } = useScroll()
  const yFront = useTransform(scrollY, [0, 800], [0, -80])
  const yMid = useTransform(scrollY, [0, 800], [0, -40])
  const yBack = useTransform(scrollY, [0, 800], [0, -16])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Back gradient */}
      <motion.div style={{ y: yBack }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(167,139,250,0.12),transparent_60%)]" />
      </motion.div>

      {/* Spline Cover */}
      <motion.div style={{ y: yMid }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Overlay to deepen contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70 pointer-events-none" />
      </motion.div>

      {/* Foreground particles (simple) */}
      <motion.div style={{ y: yFront }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-1 h-1 bg-cyan-300/70 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-float-slow" />
        <div className="absolute top-48 right-20 w-1 h-1 bg-fuchsia-300/70 rounded-full shadow-[0_0_20px_rgba(217,70,239,0.8)] animate-float" />
        <div className="absolute bottom-24 left-1/3 w-1 h-1 bg-cyan-200/70 rounded-full shadow-[0_0_16px_rgba(34,211,238,0.7)] animate-float-delayed" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="block glitch-text">Own the Origin. Shape the Code.</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
              A collaborative cyberpunk storyworld at the spark of creation. Built by early rebels. Powered by the collective.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <PrimaryCTA />
              <SecondaryCTA />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { PrimaryCTA, SecondaryCTA }
