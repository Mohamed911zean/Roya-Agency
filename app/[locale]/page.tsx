"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { PackagesCarousel } from "@/components/PackagesCarousel";
import { Partnership } from "@/components/Partnership";
import { Industries } from "@/components/Industries";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <PackagesCarousel />
      <Partnership />
      <Industries />
      <Process />
      <Testimonials />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </div>
  );
}
