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
    name: "Starter",
    price: "4500",
    originalPrice: "6000",
    description: "Perfect for startups and small businesses",
    popular: false,
    badge: null,
    budget: "5,000 - 15,000 EGP / month",
    features: [
      "Meta Ads Management (Facebook & Instagram)",
      "2 Advertising Campaigns Monthly",
      "Weekly Campaign Optimization",
      "Audience Targeting Setup",
      "Meta Pixel Installation & Tracking",
      "Monthly Performance Report",
      "WhatsApp Support",
    ],
    addons: [
      "Lead Generation Setup",
      "WordPress Website Setup",
      "E-commerce Store Setup",
      "Professional Landing Page",
      "Pixel & CPA Tracking",
      "Product Photography",
      "Motion Graphics Design",
    ],
  },
  {
    name: "Professional",
    price: "15000",
    originalPrice: "18000",
    description: "For growing businesses and active stores",
    popular: false,
    badge: "Business Choice",
    budget: "50,000 - 150,000 EGP / month",
    features: [
      "Full Campaign Management",
      "Advanced Audience Retargeting",
      "Daily Optimization",
      "Weekly Meetings",
      "CPA & ROAS Analysis",
      "Performance Dashboard",
      "10 Advertising Campaigns Monthly",
      "3% Success Fee Upon Target Achievement",
    ],
    addons: [
      "Lead Generation Setup",
      "WordPress Website Setup",
      "E-commerce Store Setup",
      "Professional Landing Page",
      "Pixel & CPA Tracking",
      "Product Photography",
      "Motion Graphics Design",
    ],
  },
  {
    name: "Growth",
    price: "8500",
    originalPrice: "10000",
    description: "Our most requested package",
    popular: true,
    badge: "Most Popular",
    budget: "15,000 - 50,000 EGP / month",
    features: [
      "Meta Ads Management",
      "5 Live Campaigns Monthly",
      "Competitor Analysis",
      "A/B Testing Strategy",
      "Retargeting Campaigns",
      "Campaign Performance Optimization",
      "Weekly Reporting",
      "Sales & Results Tracking",
    ],
    addons: [
      "Lead Generation Setup",
      "WordPress Website Setup",
      "E-commerce Store Setup",
      "Professional Landing Page",
      "Pixel & CPA Tracking",
      "Product Photography",
      "Motion Graphics Design",
    ],
  },
  {
    name: "Enterprise",
    price: "25000",
    originalPrice: "30000",
    description: "For large businesses and brands",
    popular: false,
    badge: "Enterprise",
    budget: "150,000+ EGP / month",
    features: [
      "Multi-Platform Advertising Management",
      "Meta Ads Management",
      "TikTok Ads Management",
      "Snapchat Ads Management",
      "Google Ads Management",
      "Full Funnel Strategy",
      "Advanced Tracking System",
      "Weekly Meetings",
      "Professional Reporting",
      "Dedicated Account Manager",
      "20 Creative Ad Designs Monthly",
      "5% Success Fee Upon KPI Achievement",
    ],
    addons: [
      "Lead Generation Setup",
      "WordPress Website Setup",
      "E-commerce Store Setup",
      "Professional Landing Page",
      "Pixel & CPA Tracking",
      "Product Photography",
      "Motion Graphics Design",
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


                        {pkg.budget && (
  <div className="mb-4 p-3 rounded-xl bg-roya-accent/10 border border-roya-accent/20">
    <p className="text-xs text-text-secondary mb-1">
      Recommended Ad Budget
    </p>
    <p className="font-semibold text-roya-primary">
      {pkg.budget}
    </p>
  </div>
)}

{pkg.addons?.length > 0 && (
  <div className="mb-5 p-4 rounded-xl bg-roya-primary/5 border border-border">
    <h4 className="font-semibold text-sm text-roya-primary mb-3">
      Optional Add-ons
    </h4>

    <ul className="space-y-2">
      {pkg.addons.map((addon) => (
        <li
          key={addon}
          className="text-xs text-text-secondary flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-roya-accent" />
          {addon}
        </li>
      ))}
    </ul>
  </div>
)}

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