import React from 'react'
import { motion } from 'framer-motion'
import { PrimaryCTA } from './Hero'

export default function Why() {
  return (
    <section className="relative bg-[#07070a] text-white py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_60%)]" />
      </div>
      <div className="relative container mx-auto px-6 md:px-10 text-center max-w-3xl">
        <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-extrabold">
          Why You Matter
        </motion.h3>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-4 text-white/80">
          This is the genesis moment. Nothing is fixed. You shape the DNA. You are not a fan. You are a co-founder.
        </motion.p>
        <div className="mt-8">
          <PrimaryCTA />
        </div>
      </div>
    </section>
  )
}
