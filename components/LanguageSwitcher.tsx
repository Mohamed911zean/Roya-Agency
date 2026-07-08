"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { Globe } from "lucide-react"
import { locales } from "@/i18n/request";

export function LanguageSwitcher() {
  const t = useTranslations("language")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    // Replace the current locale in the pathname
    const segments = pathname.split("/")
    segments[1] = newLocale
    const newPath = segments.join("/")
    router.push(newPath)
  }

  const otherLocale = locales.find((l) => l !== locale) || "en"

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLocale(otherLocale)}
        className="text-text-secondary hover:text-roya-primary transition-colors"
      >
        <Globe className="w-4 h-4 mr-1" />
        {t(otherLocale)}
      </Button>
    </div>
  )
}
