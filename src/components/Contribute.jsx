import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Megaphone, Pencil } from 'lucide-react'

const steps = [
  { icon: CheckCircle, title: 'Vote in genesis polls', desc: 'Shape direction with your signal.' },
  { icon: Pencil, title: 'Create early fan content', desc: 'Stories, art, music — feed the myth.' },
  { icon: Megaphone, title: 'Spread the signal', desc: 'Help pull co-founders into orbit.' },
]

export default function Contribute() {
  return (
    <section className="relative bg-[#0a0a0c] text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.06),transparent_60%)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-10">How to Contribute</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.6 }} className="p-6 rounded-xl bg-black/60 border border-white/10">
              <s.icon className="w-8 h-8 text-cyan-300" />
              <div className="mt-4 text-lg font-semibold">{s.title}</div>
              <div className="text-white/70 text-sm mt-1">{s.desc}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <a href="#discord" className="inline-flex items-center px-5 py-3 rounded-md bg-white text-black font-semibold hover:opacity-90">Enter Discord Node 💬</a>
        </div>
      </div>
    </section>
  )
}
