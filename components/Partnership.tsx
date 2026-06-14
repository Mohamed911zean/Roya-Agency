"use client"

import { motion } from "framer-motion"
import { Sparkles, Code2, Rocket, ShieldCheck } from "lucide-react"

const benefits = [
  {
    icon: Code2,
    title: "Custom-built, not templated",
    desc: "Your website and platforms are coded from scratch by Reactech — built specifically around your business, not a recycled theme.",
  },
  {
    icon: Rocket,
    title: "Marketing and tech, in sync",
    desc: "Your campaigns, landing pages, and digital systems are designed together — so every click leads somewhere built to convert.",
  },
  {
    icon: ShieldCheck,
    title: "One team, full accountability",
    desc: "No finger-pointing between agencies. Strategy, design, and development sit under one roof and one plan.",
  },
]

export function Partnership() {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-roya-primary/10 text-roya-primary rounded-full text-sm font-medium mb-6">
            Why It Matters For You
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-roya-primary mb-6">
            Your marketing and your website, built by one team.
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Most agencies hand you off to a separate developer — and things get lost in translation.
            Roya Agency partners directly with{" "}
            <span className="bg-gradient-to-r from-reactech-purple to-reactech-pink bg-clip-text text-transparent font-semibold">
              Reactech Team
            </span>{" "}
            so your strategy and your digital experience are built as one product, from day one.
          </p>
        </div>

        {/* Partnership badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <div className="bg-white px-8 py-5 rounded-2xl border border-border shadow-sm w-full sm:w-auto text-center">
            <div className="font-bold text-xl md:text-2xl text-roya-primary">Roya Agency</div>
            <div className="text-xs text-text-secondary mt-1">Strategy & Marketing</div>
          </div>

          <div className="flex flex-col items-center gap-2 shrink-0">
            <Sparkles className="w-5 h-5 text-roya-accent" />
            <div className="hidden sm:block w-20 h-1 bg-gradient-to-r from-roya-accent via-reactech-purple to-reactech-pink rounded-full" />
            <div className="sm:hidden w-1 h-10 bg-gradient-to-b from-roya-accent via-reactech-purple to-reactech-pink rounded-full" />
            <span className="text-sm text-text-secondary font-medium">Partner</span>
          </div>

          <div className="bg-white px-8 py-5 rounded-2xl border border-border shadow-sm w-full sm:w-auto text-center">
            <div className="font-bold text-xl md:text-2xl bg-gradient-to-r from-reactech-purple to-reactech-pink bg-clip-text text-transparent">
              Reactech Team
            </div>
            <div className="text-xs text-text-secondary mt-1">Web & Software Development</div>
          </div>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-reactech-purple/10 to-reactech-pink/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-reactech-purple" />
                </div>
                <h3 className="font-semibold text-roya-primary mb-2 leading-snug">{benefit.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{benefit.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}