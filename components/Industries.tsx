import { ShoppingBag, Coffee, Zap, Users, Building2, Star } from "lucide-react"
import { FaHome } from "react-icons/fa"
import { cn } from "@/lib/utils"

const industries = [
  { name: "Ecommerce", icon: ShoppingBag, color: "from-orange-400 to-pink-500" },
  { name: "Real Estate", icon: FaHome, color: "from-blue-400 to-indigo-500" },
  { name: "Restaurants", icon: Coffee, color: "from-red-400 to-orange-500" },
  { name: "Hospitality", icon: Building2, color: "from-teal-400 to-emerald-500" },
  { name: "Startups", icon: Zap, color: "from-purple-400 to-pink-500" },
  { name: "Service Businesses", icon: Users, color: "from-cyan-400 to-blue-500" },
  { name: "Personal Brands", icon: Star, color: "from-yellow-400 to-orange-500" },
  { name: "Corporate Companies", icon: Building2, color: "from-slate-500 to-slate-700" },
]

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-roya-primary text-center mb-16">Industries We Serve</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div 
                key={industry.name} 
                className="group bg-white rounded-2xl p-8 border border-border text-center hover:shadow-xl transition-all cursor-pointer"
              >
                <div className={cn(
                  "w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br flex items-center justify-center",
                  industry.color
                )}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-roya-primary">{industry.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
