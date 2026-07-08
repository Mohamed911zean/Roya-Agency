import { MessageCircle } from "lucide-react"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"
import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "./LanguageSwitcher"

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="relative bg-[#09090b] text-white py-16">
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="font-bold text-2xl mb-6">Roya Agency</div>
            <p className="text-white/70">{t("description")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              {["Services", "Packages", "Industries", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("technologyPartner")}</h4>
            <div className="bg-gradient-to-r from-reactech-purple to-reactech-pink bg-clip-text text-transparent font-semibold">
              <a href="https://www.facebook.com/profile.php?id=61581516043531">Reactech Team</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("contact")}</h4>
            <a href="https://wa.me/201016236711" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
              +20 101 623 6711
            </a>

            <a href="https://www.facebook.com/profile.php?id=61578555195753" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mt-5">
              <FaFacebook className="w-5 h-5" />
              Facebook
            </a>

            <a href="https://www.instagram.com/roya_agency7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mt-5">
              <FaInstagram className="w-5 h-5" />
              Instagram
            </a>

             <a href="https://www.tiktok.com/@roya.agency7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mt-5">
              <FaTiktok className="w-5 h-5" />
              Tiktok
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">{t("rights")}</p>
          <p className="text-white/50 text-sm">{t("madeBy")} <span className="bg-gradient-to-r from-reactech-purple to-reactech-pink bg-clip-text text-transparent font-semibold">
              <a href="https://www.facebook.com/profile.php?id=61581516043531">Reactech Team</a>
            </span>
          </p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  )
}
