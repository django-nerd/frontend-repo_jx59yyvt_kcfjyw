import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { title: 'Signal 01: Whisper Grid', type: 'text' },
  { title: 'Artifact 02: Neon Relic', type: 'art' },
  { title: 'Wave 03: Subnet Drone', type: 'audio' },
  { title: 'Lore 04: Node Ghost', type: 'text' },
  { title: 'Sketch 05: CYDEF Seal', type: 'art' },
  { title: 'Pulse 06: Entropy Hymn', type: 'audio' },
]

export default function Fragments() {
  return (
    <section className="relative bg-black text-white py-24">
      <div className="container mx-auto px-6 md:px-10">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-10">Early World Fragments</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.a key={idx} href="#" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }} className="group relative p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 overflow-hidden">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500/0 via-fuchsia-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-fuchsia-500/10 group-hover:to-cyan-500/10 transition" />
              <div className="relative">
                <div className="text-sm text-white/60 uppercase tracking-wider">{it.type}</div>
                <div className="mt-2 text-lg font-semibold">{it.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-8">
          <a href="#fragments" className="inline-flex items-center px-5 py-3 rounded-md bg-black border border-cyan-400/40 text-white">Explore Genesis Fragments</a>
        </div>
      </div>
    </section>
  )
}
