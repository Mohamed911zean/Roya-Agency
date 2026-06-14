export function About() {
  return (
    <section id="about" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="inline-block px-4 py-2 bg-roya-primary/10 text-roya-primary rounded-full text-sm font-medium mb-6">
              01 — About Roya
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-roya-primary mb-6">
              Strategy-led marketing built for brands that want measurable growth.
            </h2>
            <p className="text-xl text-text-secondary">
              Roya Agency helps businesses grow through performance marketing, branding, content, and digital strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
