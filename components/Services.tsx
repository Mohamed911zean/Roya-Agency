import { Check } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Marketing Services */}
          <div className="bg-bg-secondary rounded-3xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-roya-primary mb-6">Marketing Services</h3>
            <ul className="space-y-4">
              {["Performance Marketing", "Paid Advertising", "Social Media Management", "Content Creation", "Branding", "SEO Strategy", "Marketing Consultation"].map((service) => (
                <li key={service} className="flex items-center gap-3 text-text-secondary">
                  <Check className="w-5 h-5 text-roya-accent" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Software Services */}
          <div className="bg-white rounded-3xl p-8 border-2 border-roya-accent/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-reactech-purple/10 to-reactech-pink/10 rounded-bl-full" />
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-reactech-purple/20 to-reactech-pink/20 text-reactech-purple rounded-full text-xs font-medium mb-4">
              Powered by Reactech Team
            </span>
            <h3 className="text-2xl font-bold text-roya-primary mb-6">Software Services</h3>
            <ul className="space-y-4">
              {["Business Websites", "Landing Pages", "Ecommerce Stores", "Web Applications", "Dashboards", "Custom Platforms", "Technical Consultation"].map((service) => (
                <li key={service} className="flex items-center gap-3 text-text-secondary">
                  <Check className="w-5 h-5 text-roya-secondary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Growth Solutions */}
          <div className="bg-[#09090b] rounded-3xl p-8 text-white relative overflow-hidden">

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
            <h3 className="text-2xl font-bold mb-6">Growth Solutions</h3>
            <ul className="space-y-4">
              {["Marketing + Website Launch", "Ecommerce Growth Systems", "Brand Growth Packages", "Lead Generation Funnels", "Full Digital Transformation"].map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-roya-accent" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
