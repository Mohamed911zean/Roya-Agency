"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Globe, 
  Target, 
  Layers,
  ArrowUpRight
} from "lucide-react"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section 
      className="relative min-h-screen w-full bg-[#09090b] text-gray-200 overflow-hidden flex flex-col justify-between selection:bg-indigo-950 selection:text-indigo-200 font-sans antialiased"
      aria-label="Agency Introduction Section"
    >
      {/* --- BACKGROUND (Clean, Ultra-lightweight Minimal Grid) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), 
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0))',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0))'
          }}
        />
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-10 lg:px-12 pt-28 pb-16 lg:pt-36 lg:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-grow">
        
        {/* --- LEFT SIDE (45% on Desktop) --- */}
        <div className="col-span-1 lg:col-span-5 space-y-8 flex flex-col justify-center">
          
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 bg-gray-900/80 border border-gray-800 px-3.5 py-1 rounded-full w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">{t("tag")}</span>
          </div>

          {/* Strong, Minimal Typography */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              {t("title")} <span className="text-indigo-400 font-semibold">{t("titleHighlight")}</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-400 font-normal max-w-lg leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Clean Call to Actions */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs px-6 py-3.5 rounded-lg transition-colors duration-200 text-center"
              >
                {t("cta1")}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#discovery"
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-800 font-medium text-xs px-6 py-3.5 rounded-lg transition-colors duration-200 text-center"
              >
                {t("cta2")}
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex items-center text-gray-600 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current text-indigo-500/80" />
                ))}
              </div>
              <p className="text-[11px] text-gray-500 font-medium">
                {t("trustText")}
              </p>
            </div>
          </div>

          {/* Premium Clean Badges */}
          <div className="space-y-2.5 pt-2">
            <h2 className="text-[10px] font-bold tracking-wider text-gray-600 uppercase">{t("expertiseTitle")}</h2>
            <div className="flex flex-wrap gap-1.5">
              {t.raw("expertise").map((badge: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-950 border border-gray-900 rounded-md text-[11px] font-medium text-gray-400 cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE (55% Dashboard - Elegant & Pure CSS) --- */}
        <div className="col-span-1 lg:col-span-7 relative w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full bg-[#0e0e11] border border-gray-800/60 rounded-xl shadow-2xl p-4 sm:p-5 relative"
          >
            {/* Top Minimal Window Bar */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-900">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-gray-800" />
                <div className="w-2 h-2 rounded-full bg-gray-800" />
                <div className="w-2 h-2 rounded-full bg-gray-800" />
              </div>
              <span className="text-[10px] font-mono text-gray-600 tracking-wider">analytics_overview.sh</span>
            </div>

            {/* Metrics Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">{t("analytics.label")}</p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">$1,429,400</span>
                  <span className="text-[11px] font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                    +124.8%
                  </span>
                </div>
              </div>

              {/* Minimalist Cards Info */}
              <div className="flex items-center gap-2">
                <div className="bg-gray-950 px-3 py-2 rounded-lg border border-gray-900 text-left min-w-[80px]">
                  <p className="text-[9px] uppercase text-gray-500 font-medium">{t("analytics.roasLabel")}</p>
                  <p className="text-xs font-bold text-gray-300">{t("analytics.roasValue")}</p>
                </div>
                <div className="bg-gray-950 px-3 py-2 rounded-lg border border-gray-900 text-left min-w-[80px]">
                  <p className="text-[9px] uppercase text-gray-500 font-medium">{t("analytics.conversionLabel")}</p>
                  <p className="text-xs font-bold text-gray-300">{t("analytics.conversionValue")}</p>
                </div>
              </div>
            </div>

            {/* Clean SVG Performance Chart */}
            <div className="relative w-full h-44 bg-gray-950/40 rounded-lg border border-gray-900 p-3 overflow-hidden mb-4">
              <div className="absolute inset-x-0 bottom-4 top-8 flex flex-col justify-between opacity-5 pointer-events-none px-1">
                <div className="w-full border-b border-gray-400" />
                <div className="w-full border-b border-gray-400" />
                <div className="w-full border-b border-gray-400" />
              </div>

              {/* Vector Chart Line */}
              <svg className="absolute bottom-4 left-2 right-2 w-[calc(100%-16px)] h-28 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  d="M0,85 C15,75 25,35 40,45 C55,55 70,15 85,25 L100,5"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute inset-x-3 bottom-1 flex justify-between text-[8px] font-mono text-gray-600">
                <span>01 JAN</span>
                <span>15 FEB</span>
                <span>31 MAR</span>
              </div>
            </div>

            {/* Bottom 3-Column Mini Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-gray-950/60 border border-gray-900 rounded-lg p-3">
                <span className="text-[9px] font-medium text-gray-500 uppercase block">{t("analytics.trafficLabel")}</span>
                <span className="text-base font-bold text-gray-200 mt-0.5 block">{t("analytics.trafficValue")}</span>
              </div>
              <div className="bg-gray-950/60 border border-gray-900 rounded-lg p-3">
                <span className="text-[9px] font-medium text-gray-500 uppercase block">{t("analytics.performanceLabel")}</span>
                <span className="text-base font-bold text-emerald-400 mt-0.5 block">{t("analytics.performanceValue")}</span>
              </div>
              <div className="bg-gray-950/60 border border-gray-900 rounded-lg p-3 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-medium text-gray-500 uppercase block">{t("analytics.securityLabel")}</span>
                  <span className="text-xs font-semibold text-gray-400 mt-0.5 block">{t("analytics.securityValue")}</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- MINIMAL TICKER / TRUST STRIP --- */}
      <div className="relative w-full z-10 border-t border-gray-900 bg-gray-950 py-4 overflow-hidden">
        <div className="w-full overflow-hidden whitespace-nowrap flex">
          <div className="animate-marquee-slow flex items-center gap-12 text-[10px] font-medium tracking-widest text-gray-500 uppercase select-none">
            {[...Array(4)].map((_, containerIdx) => (
              <React.Fragment key={containerIdx}>
                {t.raw("ticker").map((item: string, idx: number) => (
                  <React.Fragment key={`${containerIdx}-${idx}`}>
                    <span>{item}</span>
                    {idx < t.raw("ticker").length - 1 && <span className="text-gray-800">•</span>}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Lightweight Custom CSS for Marquee (Non-blocking & Zero JS Overhead) */}
      <style jsx global>{`
        @keyframes marqueeSlow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee-slow {
          animation: marqueeSlow 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
