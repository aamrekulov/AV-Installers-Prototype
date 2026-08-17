export function ProcessSection({
  heading,
  subheading,
  steps,
}: {
  heading: React.ReactNode
  subheading: string
  steps: { num: string; title: string; desc: string; image: string }[]
}) {
  return (
    <section className="py-16 px-5 lg:py-36 lg:px-16 bg-[#f8f7f4]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 lg:mb-24">
          <h2 className="font-display font-light text-[clamp(2rem,3vw,3rem)] text-[#111111] mb-4">{heading}</h2>
          <p className="text-[#374151] text-lg font-light max-w-md mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-1 bg-[#f8f7f4]">
          {steps.map(({ num, title, desc, image }) => (
            <div key={num} className="group flex flex-col overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-0.5">
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <img src={image} alt={title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 p-7 h-full flex items-end">
                  <div className="font-display text-[4.5rem] leading-none font-light text-white">{num}</div>
                </div>
              </div>
              <div className="p-7 flex-1">
                <h4 className="font-sans text-[0.81rem] uppercase tracking-[0.18em] text-[#111111] mb-3 group-hover:text-accent transition-colors duration-300">{title}</h4>
                <p className="text-[#374151] text-sm font-light leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
