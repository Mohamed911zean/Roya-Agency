"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "./LanguageSwitcher"

export function Navigation() {
  const t = useTranslations("nav")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: t("services"), href: "#services" },
    { name: t("packages"), href: "#packages" },
    { name: t("industries"), href: "#industries" },
    { name: t("about"), href: "#about" },
    { name: t("contact"), href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center h-full py-3">
          <img 
            src="/Roya-Agency-logo-no-bg-removebg-preview.png"
            alt="Roya Agency Logo" 
            className="h-full w-auto object-contain brightness-0" 
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

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          {/* CTA Button */}
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-roya-primary text-white px-6 py-3 rounded-full font-medium hover:bg-roya-secondary transition-colors"
          >
            {t("bookDiscovery")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

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
              <div className="flex justify-end">
                <LanguageSwitcher />
              </div>
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
                {t("bookDiscovery")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
