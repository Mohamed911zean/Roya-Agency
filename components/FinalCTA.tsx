import { ArrowRight, MessageCircle } from "lucide-react"
import { useTranslations } from "next-intl"

export function FinalCTA() {
  const t = useTranslations("finalCta")

  return (
    <section className="py-24 bg-gradient-to-br from-roya-primary/5 via-bg-secondary to-roya-accent/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-roya-primary mb-6">{t("title")}</h2>
        <p className="text-xl text-text-secondary mb-12">
          {t("description")}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center gap-2 bg-roya-accent text-white px-10 py-5 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            {t("cta1")}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="https://wa.me/201016236711" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-roya-primary border border-border px-10 py-5 rounded-full font-semibold text-lg hover:bg-bg-secondary transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            {t("cta2")}
          </a>
        </div>
      </div>
    </section>
  )
}
