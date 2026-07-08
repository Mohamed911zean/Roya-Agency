"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { useTranslations } from "next-intl"

export function ContactForm() {
  const t = useTranslations("contact")
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    industry: "",
    requiredService: "",
    estimatedBudget: "",
    projectTimeline: "",
    projectDetails: "",
    projectGoal: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `
*New Project Inquiry*

Full Name: ${formData.fullName}
Company: ${formData.companyName}
Industry: ${formData.industry}
Required Service: ${formData.requiredService}
Estimated Budget: ${formData.estimatedBudget}
Project Timeline: ${formData.projectTimeline}
Details: ${formData.projectDetails}
Goal: ${formData.projectGoal}
    `.trim()
    const whatsappUrl = `https://wa.me/201016236711?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contact" className="py-24 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-roya-primary text-center mb-4">{t("title")}</h2>
        <p className="text-xl text-text-secondary text-center mb-12">{t("description")}</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">{t("fullName")}</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary focus:outline-none focus:border-roya-accent"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">{t("companyName")}</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary focus:outline-none focus:border-roya-accent"
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">{t("industry")}</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary focus:outline-none focus:border-roya-accent"
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
              >
                <option value="">{t("selectIndustry")}</option>
                <option value="ecommerce">{t("ecommerce")}</option>
                <option value="real-estate">{t("realEstate")}</option>
                <option value="restaurants">{t("restaurants")}</option>
                <option value="hospitality">{t("hospitality")}</option>
                <option value="startups">{t("startups")}</option>
                <option value="services">{t("services")}</option>
                <option value="personal-brand">{t("personalBrand")}</option>
                <option value="corporate">{t("corporate")}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">{t("requiredService")}</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary focus:outline-none focus:border-roya-accent"
                value={formData.requiredService}
                onChange={(e) => setFormData({...formData, requiredService: e.target.value})}
              >
                <option value="">{t("selectService")}</option>
                <option value="marketing">{t("marketingService")}</option>
                <option value="software">{t("softwareService")}</option>
                <option value="growth">{t("growthService")}</option>
                <option value="custom">{t("customPackage")}</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">{t("estimatedBudget")}</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary focus:outline-none focus:border-roya-accent"
                value={formData.estimatedBudget}
                onChange={(e) => setFormData({...formData, estimatedBudget: e.target.value})}
              >
                <option value="">{t("selectBudget")}</option>
                <option value="5k-10k">{t("budget1")}</option>
                <option value="10k-25k">{t("budget2")}</option>
                <option value="25k-50k">{t("budget3")}</option>
                <option value="50k+">{t("budget4")}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">{t("projectTimeline")}</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary focus:outline-none focus:border-roya-accent"
                value={formData.projectTimeline}
                onChange={(e) => setFormData({...formData, projectTimeline: e.target.value})}
              >
                <option value="">{t("selectTimeline")}</option>
                <option value="1month">{t("timeline1")}</option>
                <option value="3months">{t("timeline2")}</option>
                <option value="6months">{t("timeline3")}</option>
                <option value="ongoing">{t("timeline4")}</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-text-secondary mb-2">{t("projectDetails")}</label>
            <textarea 
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary focus:outline-none focus:border-roya-accent"
              value={formData.projectDetails}
              onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-text-secondary mb-2">{t("projectGoal")}</label>
            <textarea 
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary focus:outline-none focus:border-roya-accent"
              value={formData.projectGoal}
              onChange={(e) => setFormData({...formData, projectGoal: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-roya-accent text-white rounded-full font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            {t("submit")}
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  )
}
