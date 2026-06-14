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
    price: "5000",
    originalPrice: "8000",
    description: "Perfect for small businesses and startups",
    popular: false,
    badge: null,
    features: [
      "4 Social Media Posts",
      "2 Stories",
      "6 AI-Generated Posts",
      "1 Video Reel",
      "Content Writing",
      "Page Management",
    ],
  },
  {
    name: "Gold Plan",
    price: "8000",
    originalPrice: "12000",
    description: "Ideal for growing businesses ready to scale",
    popular: false,
    badge: "Best Value",
    features: [
      "8 Social Media Posts",
      "4 Stories",
      "12 AI-Generated Posts",
      "2 Video Reels",
      "Content Writing",
      "Page Management",
      "1,000 EGP Ad Credit",
    ],
  },
  {
    name: "VIP Plan",
    price: "13000",
    originalPrice: "20000",
    description: "Our most comprehensive package for maximum growth",
    popular: true,
    badge: "Most Popular",
    features: [
      "12 Social Media Posts",
      "6 Stories",
      "18 AI-Generated Posts",
      "3 Video Reels",
      "Content Writing",
      "Page Management",
      "2,000 EGP Ad Credit",
    ],
  },
  {
    name: "Premium Plan",
    price: "22000",
    originalPrice: "32000",
    description: "Enterprise-level marketing and development",
    popular: false,
    badge: "Full Service",
    features: [
      "Unlimited Social Media Posts",
      "10 Stories",
      "30 AI-Generated Posts",
      "5 Video Reels",
      "Content Writing",
      "Page Management",
      "5,000 EGP Ad Credit",
      "Custom Website Included",
    ],
  },
]

export function PackagesCarousel() {
  return (
    <section id="packages" className="py-24 bg-roya-primary relative overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute inset-0 opacity-40" style={{
        background: "radial-gradient(circle at 15% 20%, rgba(232, 112, 78, 0.18) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(23, 58, 138, 0.5) 0%, transparent 50%)"
      }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
            Limited-Time Pricing
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Our Packages</h2>
        <p className="text-xl text-white/70 text-center mb-16 max-w-2xl mx-auto">
          Transparent pricing, real value. Pick the plan that matches where your business is headed.
        </p>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {packages.map((pkg) => (
              <CarouselItem key={pkg.name} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-2 h-full">
                  <div
                    className={cn(
                      "relative rounded-3xl h-full flex flex-col bg-white p-6 transition-all duration-300 hover:-translate-y-1",
                      pkg.popular
                        ? "ring-2 ring-roya-accent shadow-2xl shadow-roya-accent/20"
                        : "ring-1 ring-white/10 shadow-xl"
                    )}
                  >
                    {/* Badge */}
                    {pkg.badge && (
                      <div
                        className={cn(
                          "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 whitespace-nowrap",
                          pkg.popular
                            ? "bg-roya-accent text-white"
                            : "bg-roya-primary text-white"
                        )}
                      >
                        {pkg.popular ? <Crown className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                        {pkg.badge}
                      </div>
                    )}

                    {/* Header */}
                    <div className="text-center pt-4 pb-5 mb-5 border-b border-border">
                      <h3 className="text-xl font-bold text-roya-primary mb-3">{pkg.name}</h3>
                      <div className="flex items-end justify-center gap-2 flex-wrap">
                        <span className="text-3xl md:text-4xl font-extrabold text-roya-primary">
                          {pkg.price}
                        </span>
                        <span className="text-sm text-text-secondary mb-1">EGP/mo</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 mt-1.5">
                        <span className="text-sm text-text-secondary line-through">{pkg.originalPrice} EGP</span>
                        <span className="text-xs font-semibold text-roya-accent bg-roya-accent/10 px-2 py-0.5 rounded-full">
                          Save {Math.round((1 - Number(pkg.price) / Number(pkg.originalPrice)) * 100)}%
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary mt-3">{pkg.description}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6 flex-grow">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 mt-0.5 rounded-full bg-roya-accent/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-roya-accent" strokeWidth={3} />
                          </div>
                          <span className="text-sm text-text-primary">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="#contact"
                      className={cn(
                        "w-full py-3.5 rounded-full font-semibold text-center transition-opacity hover:opacity-90 block",
                        pkg.popular
                          ? "bg-roya-accent text-white"
                          : "bg-roya-primary text-white"
                      )}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-10">
            <CarouselPrevious className="relative static inset-auto bg-white text-roya-primary hover:bg-white/90 border-none" />
            <CarouselNext className="relative static inset-auto bg-white text-roya-primary hover:bg-white/90 border-none" />
          </div>
        </Carousel>

        <p className="text-center text-white/50 text-sm mt-10">
          All plans are billed monthly. Cancel or upgrade anytime — no long-term contracts.
        </p>
      </div>
    </section>
  )
}