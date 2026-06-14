const processSteps = [
  { step: "01", title: "Discovery" },
  { step: "02", title: "Research" },
  { step: "03", title: "Strategy" },
  { step: "04", title: "Planning" },
  { step: "05", title: "Execution" },
  { step: "06", title: "Optimization" },
  { step: "07", title: "Growth" },
]

export function Process() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-roya-primary text-center mb-16">Our Process</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {processSteps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-roya-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-roya-primary">{step.step}</span>
              </div>
              <p className="font-semibold text-roya-primary">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
