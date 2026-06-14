const testimonials = [
  { name: "Startup Founder", text: "Working with Roya Agency transformed our online presence completely." },
  { name: "Ecommerce Brand Owner", text: "Our conversion rates increased by 300% in just 3 months." },
  { name: "Real Estate Manager", text: "Professional, creative, and results-driven. Highly recommended." },
  { name: "Marketing Director", text: "The team delivers exceptional quality and strategic thinking." },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-bg-tertiary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-roya-primary text-center">Client Feedback</h2>
      </div>
      
      <div className="flex gap-6 animate-marquee">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div 
            key={`${testimonial.name}-${index}`} 
            className="bg-white rounded-3xl p-8 border border-border min-w-[350px]"
          >
            <p className="text-text-secondary mb-6 text-lg">{testimonial.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-roya-primary/10 rounded-full" />
              <div>
                <p className="font-semibold text-roya-primary">{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
