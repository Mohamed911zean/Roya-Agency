"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image" // لو شغال Next.js، لو React عادية استبدلها بـ <img />

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
        
        {/* مكان اللوجو الجديد مع تظبيط اللون */}
        <a href="#" className="flex items-center h-full py-3">
          <img 
            src="\Roya-Agency-logo-no-bg-removebg-preview.png" // حط مسار لوجو براندك الأبيض هنا
            alt="Roya Agency Logo" 
            className="h-full w-auto object-contain brightness-0" 
            // كلاس brightness-0 بيحول أي لوجو (حتى لو أبيض) للون أسود فحم عشان يبان ع الخلفية البيضاء
            // لو عايزه يقلب رمادي غامق جرب: invert drop-shadow-sm
          />
        </a>
        
        {/* Nav Items */}
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

        {/* CTA Button */}
        <a 
          href="#contact" 
          className="hidden md:inline-flex items-center gap-2 bg-roya-primary text-white px-6 py-3 rounded-full font-medium hover:bg-roya-secondary transition-colors"
        >
          Book a Discovery Call
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden p-2 text-text-secondary hover:text-roya-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border framework-fix"
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