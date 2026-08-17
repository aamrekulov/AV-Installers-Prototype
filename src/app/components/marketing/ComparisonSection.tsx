export function ComparisonSection({
  heading,
  panels,
}: {
  heading: string
  panels: {
    image: string
    imageAlt: string
    eyebrow: string
    title: string
    description: string
    features: string[]
    priceLabel: string
    price: string
  }[]
}) {
  return (
    <section className="py-16 px-5 lg:py-36 lg:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-display font-light text-[clamp(2rem,3vw,3rem)] tracking-tight text-[#111111] text-center mb-10 lg:mb-20">
          {heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-black/[0.07]">
          {panels.map((panel, i) => (
            <div key={panel.title} className={`group flex flex-col transition-transform duration-300 hover:-translate-y-0.5 ${i % 2 === 0 ? "bg-white" : "bg-[#f8f7f4]"}`}>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={panel.image}
                  alt={panel.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="px-10 lg:px-16 py-14 flex flex-col flex-1">
                <span className="font-sans text-[0.62rem] uppercase tracking-[0.22em] text-accent mb-6 block">
                  {panel.eyebrow}
                </span>
                <h3 className="font-display font-light text-[2rem] text-[#111111] mb-6 leading-snug group-hover:text-accent transition-colors duration-300">
                  {panel.title}
                </h3>
                <p className="text-[#374151] font-light leading-[1.8] mb-10">{panel.description}</p>
                <ul className="space-y-4 mb-14 flex-1">
                  {panel.features.map((item) => (
                    <li key={item} className="flex items-start gap-4 text-[#111111] text-sm font-light leading-relaxed">
                      <span className="text-accent mt-[3px] shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-black/[0.08] pt-8">
                  <p className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-black/45 mb-1">
                    {panel.priceLabel}
                  </p>
                  <p className="font-display font-light text-[2.2rem] text-[#111111]">{panel.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
