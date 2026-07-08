"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  TrendingUp,
  Globe,
  MousePointerClick,
  Users,
  CheckCircle2,
  XCircle,
} from "lucide-react"
import { useTranslations } from "next-intl"

export function Partnership() {
  const t = useTranslations("partnership")
  const journey = t.raw("journey")
  const traditionalAgency = t.raw("traditionalList")
  const partnership = t.raw("partnershipList")

  return (
    <section className="relative overflow-hidden py-24 bg-[#0B1020]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm">
            {t("badge")}
          </div>
        </div>

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {t("title1")}
            <span className="text-indigo-400"> {t("title2")} </span>
            {t("title3")}
          </h2>

          <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Logos */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">

          <motion.div
            whileHover={{ y: -5 }}
            className="w-full md:w-[320px] h-[160px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center"
          >
            <img src="/Roya-Agency-logo-no-bg-removebg-preview.png" alt="Roya-Agency-logo" />
          </motion.div>

          <div className="flex flex-col items-center">
            <div className="hidden md:block w-24 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />

            <div className="my-3 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm">
              {t("badge")}
            </div>

            <div className="hidden md:block w-24 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
          </div>

          <motion.div
            whileHover={{ y: -5 }}
            className="w-full md:w-[320px] h-[160px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center"
          >
           <img src="/reactech-logo-no-bg.png" alt="Reactech-logo" />
          </motion.div>
        </div>

        {/* Journey */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">
              {t("journeyTitle")}
            </h3>

            <p className="text-zinc-400 mt-4">
              {t("journeySubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {journey.map((item: any, index: number) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-5">
                    {item.icon === "MousePointerClick" && <MousePointerClick className="w-7 h-7 text-indigo-400" />}
                    {item.icon === "Users" && <Users className="w-7 h-7 text-indigo-400" />}
                    {item.icon === "Globe" && <Globe className="w-7 h-7 text-indigo-400" />}
                    {item.icon === "TrendingUp" && <TrendingUp className="w-7 h-7 text-indigo-400" />}
                  </div>

                  <h4 className="text-white font-semibold text-lg mb-2">
                    {item.title}
                  </h4>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-24 grid lg:grid-cols-2 gap-8">

          <div className="rounded-3xl border border-red-500/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              {t("traditionalTitle")}
            </h3>

            <div className="space-y-4">
              {traditionalAgency.map((item: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-zinc-400"
                >
                  <XCircle className="w-5 h-5 text-red-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-indigo-500/20 bg-indigo-500/[0.04] p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              {t("partnershipTitle")}
            </h3>

            <div className="space-y-4">
              {partnership.map((item: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-24 text-center">

          <div className="max-w-3xl mx-auto rounded-[32px] border border-white/10 bg-white/5 p-10">

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              {t("ctaTitle")}
            </h3>

            <p className="text-zinc-400 mt-4 text-lg">
              {t("ctaDescription")}
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 bg-indigo-500 hover:bg-indigo-600 transition-colors text-white px-7 py-4 rounded-full font-semibold"
            >
              {t("ctaButton")}
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>
        </div>

      </div>
    </section>
  )
}
