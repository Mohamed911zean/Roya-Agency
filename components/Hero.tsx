"use client"

import { motion } from "framer-motion"
import { ArrowRight, Layers, Star, TrendingUp, BarChart3, PieChart, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bg-secondary via-bg-primary to-bg-tertiary" />
      <div className="absolute inset-0 opacity-30" style={{
        background: "radial-gradient(circle at 20% 30%, rgba(232, 112, 78, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(23, 58, 138, 0.15) 0%, transparent 50%)"
      }} />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-full text-sm font-medium text-roya-primary shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-roya-accent" />
            Marketing, Branding & Web — Under One Roof
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-roya-primary leading-tight">
              Helping ambitious brands grow,
              <br />
              scale, and convert faster.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl"
          >
            We combine strategic marketing, branding, and digital experiences to help businesses attract customers and accelerate growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-roya-accent text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-roya-primary border border-border px-8 py-4 rounded-full font-semibold hover:bg-bg-secondary transition-colors"
            >
              Book a Discovery Call
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            {["Marketing Strategy", "Branding", "Paid Advertising", "Growth Systems"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white border border-border rounded-full text-text-secondary font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Hero Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 relative w-full max-w-md mx-auto md:max-w-none"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-border p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-text-secondary text-sm">Campaign Performance</p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-3xl font-bold text-roya-primary"
                >
                  +124%
                </motion.p>
              </div>
              <div className="w-12 h-12 bg-roya-accent/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-roya-accent" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-bg-secondary rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-text-secondary">Leads Generated</p>
                  <p className="text-2xl font-bold text-roya-primary">2,847</p>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-roya-primary to-roya-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-bg-secondary rounded-2xl p-4">
                  <BarChart3 className="w-6 h-6 text-roya-secondary mb-2" />
                  <p className="text-text-secondary text-sm">Conversion</p>
                  <p className="text-xl font-bold text-roya-primary">24.3%</p>
                </div>
                <div className="bg-bg-secondary rounded-2xl p-4">
                  <PieChart className="w-6 h-6 text-roya-accent mb-2" />
                  <p className="text-text-secondary text-sm">ROAS</p>
                  <p className="text-xl font-bold text-roya-primary">7.2x</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-border hidden sm:block"
          >
            <Layers className="w-8 h-8 text-roya-secondary" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-border hidden sm:block"
          >
            <Star className="w-8 h-8 text-roya-accent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Trust strip */}
      <div className="relative border-t border-border bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-text-secondary">
          <span>Performance Marketing</span>
          <span className="w-1 h-1 rounded-full bg-border hidden sm:block" />
          <span>Brand Identity</span>
          <span className="w-1 h-1 rounded-full bg-border hidden sm:block" />
          <span>Web & Ecommerce Development</span>
          <span className="w-1 h-1 rounded-full bg-border hidden sm:block" />
          <span>Content & Social Media</span>
        </div>
      </div>
    </section>
  )
}