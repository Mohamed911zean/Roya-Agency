import MarqueeDemo from "@/components/ready-marquee"
import { useTranslations } from "next-intl"


export function Testimonials() {
  const t = useTranslations("testimonials")

  return (
    <section className="py-24 bg-bg-tertiary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <div className="text-center">

          <span className="inline-block px-4 py-2 rounded-full bg-roya-primary/10 text-roya-primary text-sm font-medium mb-6">
            {t("tag")}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-roya-primary">
            {t("title")}
          </h2>

          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            {t("description")}
          </p>

        </div>
      </div>

      <div className="relative flex w-full flex-col gap-6 overflow-hidden">

        <MarqueeDemo />


        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-tertiary to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-tertiary to-transparent" />

      </div>
    </section>
  )
}
