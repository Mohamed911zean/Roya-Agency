"use client"

import { Check } from "lucide-react"
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
    description: "Perfect for small businesses and startups",
    popular: false,
    colorScheme: "light",
    promotion: "Limited Time: Get 1 Month Free!",
    features: [
      "4 Social Media Posts",
      "2 Stories",
      "6 AI Posts",
      "Video Reel",
      "Content Writing",
      "Page Management",
    ],
  },
  {
    name: "VIP Plan",
    price: "16000",
    description: "Our most comprehensive package for maximum growth",
    popular: true,
    colorScheme: "blue",
    promotion: "🔥 Special Offer: 20% Off!",
    features: [
      "12 Social Media Posts",
      "6 Stories",
      "18 AI Posts",
      "3 Video Reels",
      "Content Writing",
      "Page Management",
      "2000 EGP Ad Credit",
    ],
  },
  {
    name: "Gold Plan",
    price: "11000",
    description: "Ideal for growing businesses ready to scale",
    popular: false,
    colorScheme: "light",
    promotion: "Early Bird Discount: Save 15%",
    features: [
      "8 Social Media Posts",
      "4 Stories",
      "12 AI Posts",
      "2 Video Reels",
      "Content Writing",
      "Page Management",
      "1000 EGP Ad Credit",
    ],
  },
  {
    name: "Premium Plan",
    price: "25000",
    description: "Enterprise-level marketing and development",
    popular: false,
    colorScheme: "dark",
    promotion: "💎 Exclusive: Free Consultation!",
    features: [
      "Unlimited Social Media Posts",
      "10 Stories",
      "30 AI Posts",
      "5 Video Reels",
      "Content Writing",
      "Page Management",
      "5000 EGP Ad Credit",
      "Custom Website",
    ],
  },
]

export function PackagesCarousel() {
  return (
    <section id="packages" className="py-24 bg-gradient-to-br from-[#0a1d4d] via-[#173a8a] to-[#0a1d4d]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Our Packages</h2>
        <p className="text-xl text-white/80 text-center mb-16">Choose the perfect plan for your business growth</p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {packages.map((pkg) => (
              <CarouselItem key={pkg.name} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-2">
                  <div className={cn(
                    "relative rounded-[32px] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl",
                    pkg.popular ? "scale-105 z-10" : ""
                  )}>
                    {/* Textured Background */}
                    <div 
                      className="absolute inset-0 opacity-100"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        mixBlendMode: "multiply",
                      }}
                    />
                    
                    {/* Main Card Content */}
                    <div className={cn(
                      "relative p-6 h-full flex flex-col",
                      pkg.colorScheme === "blue" ? "bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6]" :
                      pkg.colorScheme === "dark" ? "bg-gradient-to-br from-[#1f2937] to-[#374151]" :
                      "bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb]"
                    )}>
                      {/* Popular Badge */}
                      {pkg.popular && (
                        <div className="absolute -top-2 -right-2 z-20 bg-[#1e40af] text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg transform rotate-3">
                          MOST POPULAR
                        </div>
                      )}
                      
                      {/* Promotion Banner */}
                      <div className={cn(
                        "mb-4 px-3 py-1 rounded-full text-center font-bold text-sm",
                        pkg.colorScheme === "blue" ? "bg-white/20 text-white" :
                        pkg.colorScheme === "dark" ? "bg-white/10 text-white" :
                        "bg-[#1e40af]/10 text-[#1e40af]"
                      )}>
                        {pkg.promotion}
                      </div>

                      {/* Header Section */}
                      <div className={cn(
                        "rounded-[24px] p-4 mb-4 text-center",
                        pkg.colorScheme === "blue" ? "bg-[#1f2937]" :
                        pkg.colorScheme === "dark" ? "bg-[#0f172a]" :
                        "bg-[#1f2937]"
                      )}>
                        <h3 className={cn(
                          "text-2xl font-bold mb-2",
                          pkg.colorScheme === "blue" || pkg.colorScheme === "dark" ? "text-white" : "text-white"
                        )}>
                          {pkg.name}
                        </h3>
                        <div className={cn(
                          "inline-flex items-center px-6 py-2 rounded-full font-bold text-2xl",
                          pkg.colorScheme === "blue" || pkg.colorScheme === "dark" ? "bg-black/30 text-white" : "bg-black text-white"
                        )}>
                          {pkg.price} EGP
                          <span className="text-lg ml-1 font-normal">/month</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={cn(
                        "text-center mb-6 text-sm",
                        pkg.colorScheme === "blue" || pkg.colorScheme === "dark" ? "text-white/80" : "text-[#1f2937]/80"
                      )}>
                        {pkg.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-3 mb-8 flex-grow">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <div className={cn(
                              "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0",
                              pkg.colorScheme === "blue" || pkg.colorScheme === "dark" ? "bg-white text-[#1e40af]" : "bg-[#1e40af] text-white"
                            )}>
                              <Check className="w-4 h-4" />
                            </div>
                            <span className={cn(
                              "text-sm font-medium",
                              pkg.colorScheme === "blue" || pkg.colorScheme === "dark" ? "text-white" : "text-[#1f2937]"
                            )}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Footer Button */}
                      <div className={cn(
                        "rounded-[24px] p-2",
                        pkg.colorScheme === "blue" ? "bg-[#1f2937]" :
                        pkg.colorScheme === "dark" ? "bg-[#0f172a]" :
                        "bg-[#1f2937]"
                      )}>
                        <button className={cn(
                          "w-full py-3 rounded-[20px] font-bold text-xl transition-all hover:opacity-90",
                          pkg.colorScheme === "blue" || pkg.colorScheme === "dark" ? "bg-white text-[#1e40af]" : "bg-white text-[#1e40af]"
                        )}>
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static inset-auto bg-white text-[#1e40af] hover:bg-gray-100 border-2 border-white" />
            <CarouselNext className="relative static inset-auto bg-white text-[#1e40af] hover:bg-gray-100 border-2 border-white" />
          </div>
        </Carousel>
        
        
        
      </div>
    </section>
  )
}
