import { ArrowRight } from "lucide-react"
import { scrollToSection } from "./lib"

export function ServiceHero({
  image,
  imageAlt,
  eyebrow,
  heading,
  description,
  primaryCta,
  secondaryCta,
}: {
  image: string
  imageAlt: string
  eyebrow: string
  heading: string
  description: string
  primaryCta: { label: string; targetId: string }
  secondaryCta?: { label: string; targetId: string }
}) {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-[#080a0c] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={image} alt={imageAlt} className="hero-image-animate w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080a0c]/80 via-[#080a0c]/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full py-16 px-5 lg:py-28 lg:px-20 xl:px-28">
        <div
          className="max-w-[600px] p-5 lg:px-14 lg:py-14"
          style={{ background: "rgba(8,10,12,0.52)", backdropFilter: "blur(2px)" }}
        >
          <span className="hero-eyebrow-animate font-sans text-[0.65rem] uppercase tracking-[0.22em] text-white/75 mb-8 block">
            {eyebrow}
          </span>
          <h1 className="hero-heading-animate font-display font-light text-white leading-[1.15] lg:leading-[1.05] tracking-[-0.02em] text-[2.75rem] lg:text-[clamp(2.8rem,5vw,4.6rem)] mb-8">
            {heading}
          </h1>
          <p className="hero-subtext-animate text-white/65 text-[1.125rem] lg:text-xl font-light leading-[1.8] mb-12">{description}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`#${primaryCta.targetId}`}
              className="hero-cta-animate inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/25 text-white text-[0.8rem] uppercase tracking-[0.14em] font-semibold transition-all duration-300 hover:border-white/60 hover:bg-white/5 group"
              onClick={scrollToSection(primaryCta.targetId)}
            >
              {primaryCta.label}
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            {secondaryCta && (
              <a
                href={`#${secondaryCta.targetId}`}
                className="hero-cta-animate-secondary inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/25 text-white text-[0.8rem] uppercase tracking-[0.14em] font-medium transition-all duration-300 hover:border-white/60 hover:bg-white/5"
                onClick={scrollToSection(secondaryCta.targetId)}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
