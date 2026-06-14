export function Partnership() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-roya-primary mb-6">Strategic Technology Partnership</h2>
        <p className="text-xl text-text-secondary mb-12">
          To deliver exceptional digital experiences, Roya Agency collaborates with Reactech Team for website development, ecommerce solutions, and custom software systems.
        </p>

        <div className="flex items-center justify-center gap-8">
          <div className="bg-bg-secondary p-8 rounded-2xl border border-border">
            <div className="font-bold text-2xl text-roya-primary">Roya Agency</div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-1 bg-gradient-to-r from-roya-accent via-reactech-purple to-reactech-pink rounded-full" />
            <span className="text-sm text-text-secondary">Partner</span>
          </div>

          <div className="bg-bg-secondary p-8 rounded-2xl border border-border">
            <div className="font-bold text-2xl bg-gradient-to-r from-reactech-purple to-reactech-pink bg-clip-text text-transparent">Reactech Team</div>
          </div>
        </div>
      </div>
    </section>
  )
}
