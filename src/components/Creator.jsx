import React from 'react'
import { motion } from 'framer-motion'

export default function Creator() {
  return (
    <section className="relative bg-black text-white py-24">
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative h-72 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-transparent">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0_2px,transparent_2px_4px)] mix-blend-overlay animate-scan" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_60%)]" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-2xl md:text-3xl font-extrabold">The Creator. The Creator. The Creator</h3>
          <p className="mt-4 text-white/80">Created by Noam Sa-Man. Digital world-builder exploring myth and code. Control Zero is the spark. The rest is collective.</p>
          <div className="mt-8">
            <a href="#discord" className="inline-flex items-center px-5 py-3 rounded-md bg-white text-black font-semibold hover:opacity-90">Connect on Discord</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
