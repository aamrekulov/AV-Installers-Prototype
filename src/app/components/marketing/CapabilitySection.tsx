import { useState } from "react"

export function CapabilitySection({
  heading,
  intro,
  baseImage,
  baseImageAlt,
  capabilities,
}: {
  heading: string
  intro: string
  baseImage: string
  baseImageAlt: string
  capabilities: { label: string; copy: string; image: string }[]
}) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="bg-[#f8f7f4] px-5 py-16 lg:px-16 lg:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10 lg:mb-16">
          <h2 className="font-display font-light text-[clamp(2.5rem,4vw,3.5rem)] tracking-tight text-[#111111] mb-5">
            {heading}
          </h2>
          <p className="text-[#374151] text-lg font-light max-w-[640px] leading-relaxed">{intro}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          <div className="relative overflow-hidden min-h-[500px] lg:min-h-0">
            <img
              src={baseImage}
              alt={baseImageAlt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {capabilities.map(({ label, image }, i) => (
              <img
                key={i}
                src={image}
                alt={label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                style={{ opacity: hovered === i ? 1 : 0 }}
              />
            ))}
            <div className="absolute inset-0 bg-[#080a0c]/20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none">
              <div className="transition-opacity duration-500" style={{ opacity: hovered !== null ? 1 : 0 }}>
                <span className="font-sans text-[0.6rem] uppercase tracking-[0.24em] text-white/50 block mb-1">
                  {hovered !== null ? `0${hovered + 1}` : ""}
                </span>
                <span className="font-display font-light text-white text-2xl">
                  {hovered !== null ? capabilities[hovered].label : ""}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white">
            {capabilities.map(({ label, copy }, i) => (
              <div
                key={label}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`px-10 lg:px-14 py-9 group transition-colors duration-300 cursor-default ${
                  hovered === i ? "bg-[#f8f7f4]" : ""
                } ${i < capabilities.length - 1 ? "border-b border-black/[0.07]" : ""}`}
              >
                <div className="flex items-start gap-8">
                  <span className="font-display text-[4.5rem] leading-none font-light text-[#111111]/[0.08] shrink-0 select-none">
                    0{i + 1}
                  </span>
                  <div>
                    <h3
                      className={`font-sans text-[0.83rem] uppercase tracking-[0.2em] mb-3 transition-colors duration-300 ${
                        hovered === i ? "text-accent" : "text-[#111111]"
                      }`}
                    >
                      {label}
                    </h3>
                    <p className="text-[#374151] text-sm font-light leading-relaxed">{copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
