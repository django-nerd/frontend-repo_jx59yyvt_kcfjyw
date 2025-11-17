import React from 'react'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Why from './components/Why'
import Factions from './components/Factions'
import Contribute from './components/Contribute'
import Fragments from './components/Fragments'
import ComingSoon from './components/ComingSoon'
import Creator from './components/Creator'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Intro />
      <Why />
      <Factions />
      <Contribute />
      <Fragments />
      <ComingSoon />
      <Creator />
      <footer className="py-10 text-center text-white/50 text-sm">
        © Control Zero — Built with early rebels.
      </footer>
    </div>
  )
}
