export function PainPointSection({
  heading,
  points,
}: {
  heading: string
  points: { Icon: React.ElementType; label: string; quote: string }[]
}) {
  return (
    <section className="py-16 px-5 lg:py-36 lg:px-16 bg-[#080a0c]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-display font-light text-[clamp(2.5rem,4vw,3.5rem)] tracking-tight text-white text-center mb-10 lg:mb-20">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-1 bg-[#17191c]">
          {points.map(({ Icon, label, quote }) => (
            <div key={label} className="bg-[#080a0c] p-7 lg:p-8 flex flex-col gap-7 h-full group transition-transform duration-300 hover:-translate-y-0.5">
              <div className="flex items-start justify-between gap-4">
                <div className="text-white/35 group-hover:text-accent transition-colors duration-300">
                  <Icon size={20} strokeWidth={1.25} />
                </div>
                <span className="font-sans text-[0.85rem] uppercase tracking-[0.2em] text-white/75 group-hover:text-accent transition-colors duration-300 text-right">
                  {label}
                </span>
              </div>
              <p className="font-display font-light italic text-[1.2rem] leading-[1.55] text-white">{quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
