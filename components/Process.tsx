"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowDown } from "lucide-react"

const processSteps = [
  { step: "01", title: "Discovery", desc: "Understanding your brand, goals, and market position." },
  { step: "02", title: "Research", desc: "Analyzing competitors, audience, and opportunities." },
  { step: "03", title: "Strategy", desc: "Building a roadmap tailored to your growth targets." },
  { step: "04", title: "Planning", desc: "Mapping content, campaigns, and timelines." },
  { step: "05", title: "Execution", desc: "Bringing the strategy to life across channels." },
  { step: "06", title: "Optimization", desc: "Refining based on real performance data." },
  { step: "07", title: "Growth", desc: "Scaling what works, consistently." },
]

export function Process() {
  return (
    <section className="py-24 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <span className="inline-block px-4 py-2 bg-roya-primary/10 text-roya-primary rounded-full text-sm font-medium mb-6">
          How We Work
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-roya-primary mb-16">Our Process</h2>

        {/* Desktop / tablet: horizontal flow with connecting arrows */}
        <div className="hidden md:flex items-start justify-between gap-2">
          {processSteps.map((step, idx) => (
            <div key={step.step} className="flex items-start flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center px-2"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-roya-primary/10 flex items-center justify-center relative">
                  <span className="text-xl font-bold text-roya-primary">{step.step}</span>
                </div>
                <p className="font-semibold text-roya-primary mb-1">{step.title}</p>
                <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
              </motion.div>

              {idx < processSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 + 0.2 }}
                  className="flex-shrink-0 mt-6 mx-1"
                >
                  <ArrowRight className="w-5 h-5 text-roya-accent" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow with connecting arrows */}
        <div className="md:hidden flex flex-col items-center">
          {processSteps.map((step, idx) => (
            <div key={step.step} className="flex flex-col items-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="flex items-center gap-4 w-full bg-bg-secondary rounded-2xl p-4"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-roya-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-roya-primary">{step.step}</span>
                </div>
                <div>
                  <p className="font-semibold text-roya-primary">{step.title}</p>
                  <p className="text-sm text-text-secondary">{step.desc}</p>
                </div>
              </motion.div>

              {idx < processSteps.length - 1 && (
                <ArrowDown className="w-5 h-5 text-roya-accent my-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}