import { MessageCircle } from "lucide-react"
import {FaFacebook , FaInstagram , FaTiktok} from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-roya-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="font-bold text-2xl mb-6">Roya Agency</div>
            <p className="text-white/70">Helping brands grow, scale, and convert faster.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
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
            <h4 className="font-semibold mb-4">Technology Partner</h4>
            <div className="bg-gradient-to-r from-reactech-purple to-reactech-pink bg-clip-text text-transparent font-semibold">
              <a href="https://www.facebook.com/profile.php?id=61581516043531">Reactech Team</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
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
          <p className="text-white/50 text-sm">© 2026 Roya Agency. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button className="text-white/70 hover:text-white transition-colors text-sm">English</button>
            <span className="text-white/30">|</span>
            <button className="text-white/70 hover:text-white transition-colors text-sm">العربية</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
