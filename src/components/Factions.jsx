import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Skull, Eye } from 'lucide-react'

const Card = ({ icon: Icon, name, essence, onClick }) => (
  <motion.button onClick={onClick} whileHover={{ scale: 1.02 }} className="relative group w-full text-left p-6 rounded-xl bg-black/60 border border-white/10 hover:border-cyan-400/50 shadow-[0_0_30px_rgba(167,139,250,0.15)]">
    <div className="absolute inset-0 rounded-xl pointer-events-none transition-colors duration-300 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]" />
    <div className="flex items-center gap-4">
      <Icon className="w-8 h-8 text-cyan-300" />
      <div>
        <div className="text-xl font-bold tracking-wide">{name}</div>
        <div className="text-white/70 text-sm mt-1">{essence}</div>
      </div>
    </div>
    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    <div className="mt-4 text-cyan-300 text-sm">Vote on Faction Evolution →</div>
  </motion.button>
)

export default function Factions() {
  const [open, setOpen] = useState(null)

  const factions = [
    { key: 'cydef', name: 'CYDEF', essence: 'Order. Control. Central chains.', icon: Shield },
    { key: 'virbizz', name: 'VIRBIZZ', essence: 'Chaos. Profit. The undernet.', icon: Skull },
    { key: 'entropy', name: 'ENTROPY SYNDICATE', essence: 'Liberation. Decentralized destiny.', icon: Eye }
  ]

  return (
    <section className="relative bg-black text-white py-24">
      <div className="container mx-auto px-6 md:px-10">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-8">Factions</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {factions.map(f => (
            <Card key={f.key} icon={f.icon} name={f.name} essence={f.essence} onClick={() => setOpen(f.key)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }} className="max-w-lg w-full bg-[#0b0d10] border border-white/10 rounded-xl p-6">
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">{factions.find(x => x.key === open)?.name}</div>
                <button onClick={() => setOpen(null)} className="text-white/60 hover:text-white">✕</button>
              </div>
              <div className="mt-4 text-white/80 text-sm leading-relaxed">
                Deeper lore coming soon. Cast your influence and help shape this faction's identity.
              </div>
              <div className="mt-6">
                <a href="#vote" className="inline-flex items-center px-4 py-2 rounded-md bg-black border border-cyan-400/40 text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]">Vote in Genesis Polls</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
