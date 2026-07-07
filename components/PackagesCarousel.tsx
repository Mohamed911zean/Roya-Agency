"use client"

import { Check, Sparkles, Crown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const packages = [
  {
    name: "Start Plan",
    price: "6000",
    originalPrice: "7500", // سعر تقديري لحساب الخصم تلقائياً
    description: "Essential social media presence for small businesses",
    popular: false,
    badge: null,
    budget: "Sponsored ads budget is not included",
    features: [
      "4 Social Media Posts",
      "2 Stories",
      "6 AI-Generated Posts",
      "1 Reels Video",
      "Content Writing",
      "Page Management",
    ],
  },
  {
    name: "ViP Plan",
    price: "16000",
    originalPrice: "20000", // سعر تقديري لحساب الخصم تلقائياً
    description: "Maximum growth and complete digital dominance",
    popular: true,
    badge: "Most Popular",
    budget: "Sponsored ads budget is not included",
    features: [
      "12 Social Media Posts",
      "6 Stories",
      "18 AI-Generated Posts",
      "3 Reels Videos",
      "Content Writing",
      "Page Management",
      "Free 2,000 Followers Bonus",
    ],
  },
  {
    name: "Gold Plan",
    price: "11000",
    originalPrice: "14000", // سعر تقديري لحساب الخصم تلقائياً
    description: "Advanced package for growing brands and active accounts",
    popular: false,
    badge: "Business Choice",
    budget: "Sponsored ads budget is not included",
    features: [
      "8 Social Media Posts",
      "4 Stories",
      "12 AI-Generated Posts",
      "2 Reels Videos",
      "Content Writing",
      "Page Management",
      "Free 1,000 Followers Bonus",
    ],
  },
]

export function PackagesCarousel() {
  return (
    <section id="packages" className="py-24 bg-[#09090b] relative overflow-hidden">
      
      {/* --- BACKGROUND GRID (Ultra-lightweight) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), 
                              linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))'
          }}
        />
      </div>

      {/* Ambient background accents - Smooth & Low CPU footprint */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        background: "radial-gradient(circle at 15% 20%, rgba(79, 70, 229, 0.15) 0%, transparent 50%), radial-gradient(circle at 85% 80%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)"
      }} />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Header Section */}
        <div className="text-center mb-4">
          <span className="inline-block px-3.5 py-1 bg-gray-900 border border-gray-800 text-gray-400 rounded-full text-xs font-medium mb-6 uppercase tracking-wider">
            Limited-Time Pricing
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 tracking-tight">
          Our Packages
        </h2>
        <p className="text-sm md:text-base text-gray-400 text-center mb-16 max-w-xl mx-auto leading-relaxed">
          Transparent pricing, real value. Pick the plan that matches where your business is headed.
        </p>

        {/* --- CAROUSEL SYSTEM --- */}
        {/* الحاوية الكبرى مضاف لها padding جانبي على الديسكتوب لإعطاء مساحة آمنة للأزرار الطائرة */}
        <div className="relative w-full md:px-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            
            {/* items-stretch تضمن تمدد الكروت لارتفاع موحد هندسياً */}
            <CarouselContent className="-ml-4 flex items-stretch">
              {packages.map((pkg) => (
                <CarouselItem 
                  key={pkg.name} 
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 flex"
                >
                  <div className="w-full pb-2 pt-4 flex">
                    <div
                      className={cn(
                        "relative rounded-2xl w-full flex flex-col bg-[#0e0e11] p-6 border transition-all duration-200",
                        pkg.popular
                          ? "border-indigo-500/50 ring-1 ring-indigo-500/30 shadow-xl shadow-indigo-500/5"
                          : "border-gray-800/80 shadow-sm"
                      )}
                    >
                      {/* Badge */}
                      {pkg.badge && (
                        <div
                          className={cn(
                            "absolute -top-3 left-6 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap",
                            pkg.popular
                              ? "bg-indigo-600 text-white"
                              : "bg-gray-800 text-gray-300 border border-gray-700"
                          )}
                        >
                          {pkg.popular ? <Crown className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                          {pkg.badge}
                        </div>
                      )}

                      {/* Card Header */}
                      <div className="pt-2 pb-5 mb-5 border-b border-gray-900">
                        <h3 className="text-lg font-bold text-white mb-2">{pkg.name}</h3>
                        
                        <div className="flex items-baseline gap-1 flex-wrap">
                          <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                            {pkg.price}
                          </span>
                          <span className="text-xs text-gray-500 font-medium">EGP/mo</span>
                        </div>

                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-xs text-gray-600 line-through">{pkg.originalPrice} EGP</span>
                          <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded">
                            Save {Math.round((1 - Number(pkg.price) / Number(pkg.originalPrice)) * 100)}%
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-3 min-h-[32px] line-clamp-2 leading-relaxed">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Features List (flex-grow تملأ المساحة لتدفع بقية العناصر للأسفل وتوحد المحاذاة) */}
                      <ul className="space-y-3 mb-6 flex-grow">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <div className="w-4 h-4 mt-0.5 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                              <Check className="w-2.5 h-2.5 text-indigo-400" strokeWidth={3} />
                            </div>
                            <span className="text-xs text-gray-300 leading-normal">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Contextual Budget Section */}
                      <div className="mt-auto pt-2 space-y-4">
                        {pkg.budget && (
                          <div className="p-3 rounded-xl bg-gray-950 border border-gray-900">
                            <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-0.5">
                              Recommended Ad Budget
                            </p>
                            <p className="text-xs font-semibold text-gray-200">
                              {pkg.budget}
                            </p>
                          </div>
                        )}

                        {/* CTA Button */}
                        <a
                          href="#contact"
                          className={cn(
                            "w-full py-2.5 rounded-lg text-xs font-bold text-center block transition-colors duration-200",
                            pkg.popular
                              ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                              : "bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-800"
                          )}
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* --- SIDE CONTROLLERS --- */}
            {/* الأزرار متموضعة في منتصف الكاروسيل عمودياً وتظهر في الشاشات المتوسطة والكبيرة فقط */}
            <div className=" md:block">
              <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 -left-4 w-10 h-10 bg-[#0e0e11] hover:bg-gray-900 text-gray-300 border border-gray-800 hover:text-white shadow-md transition-all rounded-full z-30" />
              <CarouselNext className="absolute top-1/2 -translate-y-1/2 -right-4 w-10 h-10 bg-[#0e0e11] hover:bg-gray-900 text-gray-300 border border-gray-800 hover:text-white shadow-md transition-all rounded-full z-30" />
            </div>
          </Carousel>
        </div>

        <p className="text-center text-gray-500 text-xs mt-12">
          All plans are billed monthly. Cancel or upgrade anytime — no long-term contracts.
        </p>
      </div>
    </section>
  )
}