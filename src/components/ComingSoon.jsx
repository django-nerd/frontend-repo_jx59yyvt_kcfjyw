import React from 'react'
import { motion } from 'framer-motion'

const tiles = [
  { title: 'Membership NFT', copy: 'Origin badge that grows with the universe. Unlock channels, lore, perks.' },
  { title: 'Token', copy: 'Earn by creating and participating. Spend on access, cosmetics, boosts.' },
  { title: 'DAO', copy: 'Hybrid governance for creative direction and micro-game proposals.' },
  { title: 'Micro-games', copy: 'Interactive lore fragments to explore style, tone, and mechanics.' },
  { title: 'First Canon Arc', copy: 'Community-shaped characters become anchors of Control Zero canon.' },
]

export default function ComingSoon() {
  return (
    <section className="relative bg-[#060607] text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.07),transparent_60%)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-10">Coming Soon</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {tiles.map((t, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="relative p-6 rounded-xl bg-black/60 border border-white/10">
              <div className="absolute inset-0 rounded-xl pointer-events-none">
                <div className="absolute inset-0 rounded-xl border border-transparent [mask:linear-gradient(0deg,black,transparent)] group-hover:border-cyan-400/40" />
              </div>
              <div className="text-lg font-semibold">{t.title}</div>
              <div className="mt-2 text-white/70 text-sm leading-relaxed line-clamp-4">{t.copy}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
