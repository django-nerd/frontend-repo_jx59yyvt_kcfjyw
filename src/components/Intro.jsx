import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className="relative bg-black text-white py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl md:text-3xl font-bold">What is Control Zero?</h2>
          <p className="mt-4 text-white/80 leading-relaxed text-lg">
            Control Zero is a techno myth emerging from the decentralized web. A glitch. A rebellion waiting for architects.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative h-56 md:h-72">
          <div className="absolute inset-0 rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 backdrop-blur-sm shadow-[0_0_40px_rgba(34,211,238,0.2)]" />
          <div className="absolute -inset-1 rounded-xl blur-xl bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-cyan-500/20" />
          <div className="absolute inset-0 bg-[linear-gradient(transparent_0,transparent_95%,rgba(255,255,255,0.2)_100%)] animate-scanlines rounded-xl" />
        </motion.div>
      </div>
    </section>
  )
}
