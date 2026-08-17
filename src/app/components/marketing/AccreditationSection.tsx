import { useState } from "react"

function BrandMark({ name }: { name: string }) {
  const [hov, setHov] = useState(false)
  return (
    <span
      className="font-display font-light text-[1.05rem] select-none"
      style={{ color: "#6b7280", opacity: hov ? 0.9 : 0.45, letterSpacing: "0.01em", transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {name}
    </span>
  )
}

export function AccreditationSection({ heading, brands }: { heading: string; brands: string[] }) {
  return (
    <section className="py-12 px-5 lg:py-16 lg:px-16 bg-white border-b border-black/[0.05]">
      <p className="font-sans text-[0.6rem] uppercase tracking-[0.26em] text-center mb-9 text-[#6b7280]">{heading}</p>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 max-w-[1100px] mx-auto">
        {brands.map((name) => (
          <BrandMark key={name} name={name} />
        ))}
      </div>
    </section>
  )
}
