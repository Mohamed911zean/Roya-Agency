"use client"

import {
  ShoppingBag,
  UtensilsCrossed,
  Hotel,
  Rocket,
  Briefcase,
  UserCircle2,
  Building2,
  Home,
} from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const industries = [
  { name: "Ecommerce", icon: ShoppingBag, desc: "Stores built to sell" },
  { name: "Real Estate", icon: Home, desc: "Listings that close deals" },
  { name: "Restaurants", icon: UtensilsCrossed, desc: "Brands people crave" },
  { name: "Hospitality", icon: Hotel, desc: "Experiences worth booking" },
  { name: "Startups", icon: Rocket, desc: "Launches with momentum" },
  { name: "Service Businesses", icon: Briefcase, desc: "Clients on autopilot" },
  { name: "Personal Brands", icon: UserCircle2, desc: "Influence that converts" },
  { name: "Corporate Companies", icon: Building2, desc: "Authority at scale" },
]

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-roya-primary/10 text-roya-primary rounded-full text-sm font-medium mb-6">
            Who We Work With
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-roya-primary">Industries We Serve</h2>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <CarouselItem
                  key={industry.name}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="p-1.5">
                    <div className="group bg-white rounded-2xl p-6 border border-border text-center hover:border-roya-accent/40 hover:shadow-lg transition-all cursor-pointer h-full">
                      <div className="relative w-16 h-16 mx-auto mb-5">
                        <div className="absolute inset-0 rounded-full bg-roya-primary/5 group-hover:bg-roya-accent/10 transition-colors" />
                        <div className="absolute inset-0 rounded-full border border-roya-primary/15 group-hover:border-roya-accent/30 transition-colors" />
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Icon
                            className="w-7 h-7 text-roya-primary group-hover:text-roya-accent transition-colors"
                            strokeWidth={1.75}
                          />
                        </div>
                      </div>
                      <h3 className="font-semibold text-roya-primary text-sm md:text-base">{industry.name}</h3>
                      <p className="text-xs text-text-secondary mt-1">{industry.desc}</p>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-10">
            <CarouselPrevious className="relative static inset-auto" />
            <CarouselNext className="relative static inset-auto" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}