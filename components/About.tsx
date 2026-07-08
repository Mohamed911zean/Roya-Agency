import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"
import { useTranslations } from "next-intl"

export function About() {
  const t = useTranslations("about")

  return (
    <section id="about" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            {/* Tag */}
            <span className="inline-block px-4 py-2 bg-roya-primary/10 text-roya-primary rounded-full text-sm font-medium mb-6">
              {t("tag")}
            </span>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-roya-primary mb-6 leading-tight">
              {t("title")}
            </h2>
            
            {/* Description */}
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              {t("description")}
            </p>
            
            {/* Social Media Icons Container */}
            <div className="flex items-center gap-5 mt-6">
              <a 
                href="https://www.facebook.com/profile.php?id=61578555195753" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-roya-primary/5 text-roya-primary hover:bg-roya-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>

              <a 
                href="https://www.instagram.com/roya_agency7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-roya-primary/5 text-roya-primary hover:bg-roya-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>

              <a 
                href="https://www.tiktok.com/@roya.agency7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-roya-primary/5 text-roya-primary hover:bg-roya-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
                aria-label="TikTok"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
