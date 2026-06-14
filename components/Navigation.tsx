"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Packages", href: "#packages" },
  { name: "Industries", href: "#industries" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-bold text-2xl text-roya-primary">Roya Agency</div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-text-secondary hover:text-roya-primary transition-colors font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="hidden md:inline-flex items-center gap-2 bg-roya-primary text-white px-6 py-3 rounded-full font-medium hover:bg-roya-secondary transition-colors"
        >
          Book a Discovery Call
          <ArrowRight className="w-4 h-4" />
        </a>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-text-secondary hover:text-roya-primary transition-colors font-medium text-lg"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-roya-primary text-white px-6 py-3 rounded-full font-medium mt-4"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
