"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
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
        <h2 className="text-4xl md:text-5xl font-bold text-roya-primary text-center mb-4">Project Inquiry</h2>
        <p className="text-xl text-text-secondary text-center mb-12">Let's discuss your project and create something amazing together.</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary focus:outline-none focus:border-roya-accent"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Company Name</label>
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
              <label className="block text-sm font-medium text-text-secondary mb-2">Industry</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary focus:outline-none focus:border-roya-accent"
                value={formData.industry}
                onChange={(e) => setFormData({...formData, industry: e.target.value})}
              >
                <option value="">Select Industry</option>
                <option value="ecommerce">Ecommerce</option>
                <option value="real-estate">Real Estate</option>
                <option value="restaurants">Restaurants</option>
                <option value="hospitality">Hospitality</option>
                <option value="startups">Startups</option>
                <option value="services">Service Businesses</option>
                <option value="personal-brand">Personal Brands</option>
                <option value="corporate">Corporate Companies</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Required Service</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary focus:outline-none focus:border-roya-accent"
                value={formData.requiredService}
                onChange={(e) => setFormData({...formData, requiredService: e.target.value})}
              >
                <option value="">Select Service</option>
                <option value="marketing">Marketing Services</option>
                <option value="software">Software/Website</option>
                <option value="growth">Growth Solutions</option>
                <option value="custom">Custom Package</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Estimated Budget</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary focus:outline-none focus:border-roya-accent"
                value={formData.estimatedBudget}
                onChange={(e) => setFormData({...formData, estimatedBudget: e.target.value})}
              >
                <option value="">Select Range</option>
                <option value="5k-10k">$5k - $10k</option>
                <option value="10k-25k">$10k - $25k</option>
                <option value="25k-50k">$25k - $50k</option>
                <option value="50k+">$50k+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Project Timeline</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary focus:outline-none focus:border-roya-accent"
                value={formData.projectTimeline}
                onChange={(e) => setFormData({...formData, projectTimeline: e.target.value})}
              >
                <option value="">Select Timeline</option>
                <option value="1-month">1 Month</option>
                <option value="3-months">3 Months</option>
                <option value="6-months">6 Months</option>
                <option value="ongoing">Ongoing</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-text-secondary mb-2">Project Details</label>
            <textarea 
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary focus:outline-none focus:border-roya-accent"
              value={formData.projectDetails}
              onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-text-secondary mb-2">Goal of the Project</label>
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
            Request a Proposal
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  )
}
