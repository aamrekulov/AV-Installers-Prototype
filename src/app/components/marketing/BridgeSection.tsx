export function BridgeSection({
  eyebrow,
  heading,
  body,
}: {
  eyebrow: string
  heading: string
  body: React.ReactNode
}) {
  return (
    <section className="py-20 px-5 lg:py-44 lg:px-16 bg-white">
      <div className="max-w-[900px] mx-auto text-center">
        <div className="w-10 h-px bg-accent mx-auto mb-10" />
        <p className="font-sans text-[0.65rem] uppercase tracking-[0.24em] text-black/60 mb-8">{eyebrow}</p>
        <h2 className="font-display font-light text-[clamp(2.2rem,3.5vw,3.25rem)] leading-[1.15] tracking-[-0.01em] text-[#111111] mb-10">
          {heading}
        </h2>
        <p className="text-[#374151] text-lg font-light leading-[1.8] max-w-[640px] mx-auto">{body}</p>
      </div>
    </section>
  )
}
