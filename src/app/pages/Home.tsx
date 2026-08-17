import { useState, useEffect, useRef } from "react"
import { useLocation, Link } from "react-router"
import {
  Sliders, PhoneOff, Wallet, ZapOff, Cable, Clock,
  Monitor, Home as HomeIcon, Music2, Headphones,
  ChevronLeft, ChevronRight, ArrowRight,
} from "lucide-react"
import { PainPointSection } from "../components/marketing/PainPointSection"
import { FaqSection } from "../components/marketing/FaqSection"
import { ConsultationSection } from "../components/marketing/ConsultationSection"
import heroImg from "../../imports/hero.webp"
import secondImg from "../../imports/second-image.webp"
import installationImg from "../../imports/installation.webp"
import smartHomeImg from "../../imports/smart-home-automation.webp"
import multiroomImg from "../../imports/multiroom-audio.webp"
import systemCareImg from "../../imports/system-care-and-aftercare.webp"
import discoveryCallImg from "../../imports/discovery-call.webp"
import designSpecificationImg from "../../imports/design-specification-1.webp"
import handoverImg from "../../imports/handover-support.webp"
import testimonial1Img from "../../imports/testimonial-1.webp"
import testimonial2Img from "../../imports/testimonial-2.webp"
import testimonial3Img from "../../imports/testimonial-3.webp"

/* ── Design tokens ────────────────────────────────────────────────────────── */
const DARK_BG    = "#080a0c"
const LIGHT_BG   = "#ffffff"
const TINTED_BG  = "#F7F6F5"
const EASE       = "cubic-bezier(0.16, 1, 0.3, 1)"
const TRANS      = `all 300ms ${EASE}`
const ACCENT     = "#F80F0F"
const GOLD       = "#C8A97A"
const BODY_TEXT  = "#374151"
const MUTED_TEXT = "#6B7280"

/* ── Scroll-reveal hook ───────────────────────────────────────────────────── */
function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function scrollToSection(id: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

function revealStyle(visible: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 700ms ${EASE} ${delay}ms, transform 700ms ${EASE} ${delay}ms`,
  }
}

/* ── Data ─────────────────────────────────────────────────────────────────── */
const proofSlides = [
  {
    image: testimonial1Img,
    alt: "Client project — Sevenoaks, Kent",
    quote: "We'd had a dreadful experience with another company. These chaps were the complete opposite — meticulous, communicative, and the result is beyond anything we'd imagined.",
    name: "James Rutherford",
    role: "Property Developer",
    location: "Sevenoaks, Kent",
  },
  {
    image: testimonial2Img,
    alt: "Client project — Richmond, London",
    quote: "The level of integration is flawless. The lighting, climate, and music all respond seamlessly without a single visible cable or obtrusive panel. It's exactly the premium experience we wanted.",
    name: "Eleanor Davies",
    role: "Architect",
    location: "Richmond, London",
  },
  {
    image: testimonial3Img,
    alt: "Client project — Guildford, Surrey",
    quote: "From the first call to the final handover, the attention to detail was extraordinary. Our home finally works the way we always imagined it would — effortlessly.",
    name: "William Ashford",
    role: "Private Client",
    location: "Guildford, Surrey",
  },
]

const painPoints = [
  { Icon: Sliders, label: "Complexity", quote: '"Five remotes to watch a film — and it still doesn\'t work first time."' },
  { Icon: PhoneOff, label: "Aftercare", quote: '"The installer disappeared after the final payment. Calls go straight to voicemail."' },
  { Icon: Wallet, label: "Wasted spend", quote: '"Spent £30,000 on an AV system the whole family refuses to touch."' },
  { Icon: ZapOff, label: "Reliability", quote: '"Smart lighting that switches itself off at random. Blinds that won\'t budge."' },
  { Icon: Cable, label: "Shoddy work", quote: '"The builder\'s electrician ran the cabling. It shows."' },
  { Icon: Clock, label: "Time lost", quote: '"Entire weekends troubleshooting kit instead of actually enjoying the house."' },
]

const services = [
  {
    Icon: Monitor, num: "01",
    title: "Home cinema design & installation",
    description: "Dedicated rooms or multipurpose spaces. 4K, Dolby Atmos, acoustic treatment, screen and projector selection.",
    image: installationImg,
    imageAlt: "Custom home cinema design and installation",
    tags: ["4K Projection", "Dolby Atmos", "Acoustic Design"],
  },
  {
    Icon: HomeIcon, num: "02",
    title: "Smart home automation",
    description: "Lighting scenes, climate, blinds, security — all brought together under one intuitive interface.",
    image: smartHomeImg,
    imageAlt: "Contemporary smart home automation interface and living space",
    tags: ["Lighting", "Climate", "Security"],
  },
  {
    Icon: Music2, num: "03",
    title: "Multiroom audio",
    description: "Whole-home audio that responds to every room — music that follows you through the house, or zones that stay entirely separate.",
    image: multiroomImg,
    imageAlt: "Multiroom audio system installed throughout a premium home",
    tags: ["Whole-Home", "Zone Control", "Sonos"],
  },
  {
    Icon: Headphones, num: "04",
    title: "System care & aftercare",
    description: "Remote monitoring, annual servicing, and a dedicated support line staffed by people — not a chatbot.",
    image: systemCareImg,
    imageAlt: "Professional system care and aftercare support",
    tags: ["Remote Monitoring", "Annual Service", "Direct Line"],
  },
]

const processSteps = [
  { num: "01", title: "Discovery call", desc: "30 minutes to understand your home, your household, and what success looks like for you.", image: discoveryCallImg },
  { num: "02", title: "Design & specification", desc: "A detailed design proposal — rooms, equipment, cabling routes, and a fixed-price quotation.", image: designSpecificationImg },
  { num: "03", title: "Installation", desc: "Tidy, respectful of your home, and on programme. Daily updates so you're never kept in the dark.", image: installationImg },
  { num: "04", title: "Handover & support", desc: "A thorough walkthrough. A phone number that's answered. An annual check-in, included as standard.", image: handoverImg },
]

const brands = [
  { name: "Control4" },
  { name: "Lutron" },
  { name: "Sonos" },
  { name: "Savant" },
  { name: "Loxone" },
  { name: "Sony" },
  { name: "Screen Research" },
]

const faqs = [
  {
    q: "How much does a proper system cost?",
    a: "A professionally designed system ought to be considered an investment in your property. While every home is unique, our entry-level media rooms start around £15,000, and comprehensive whole-home systems typically range from £50,000 to £150,000+. We provide fixed-price quotations after the design phase, so there are never any surprises.",
  },
  {
    q: "Can you install in an existing, finished home?",
    a: "Absolutely. While new builds and major renovations are common, we specialise in retrofitting advanced systems into finished homes with minimal disruption. We use a combination of enterprise-grade wireless technologies and discreet cable routing to ensure your decor remains pristine.",
  },
  {
    q: "I've had a poor experience with an AV installer in the past. How are you different?",
    a: "We hear this entirely too often. The industry is unfortunately full of \"electricians who do a bit of AV\". We are dedicated specialists. We document everything, design thoroughly before touching a wire, and most importantly, our relationship doesn't end when the invoice is paid. We are accountable for the long-term reliability of your system.",
  },
  {
    q: "Will my family actually be able to use it?",
    a: "If you need an instruction manual, we have failed. Our core philosophy is that a home technology system should be intuitive for everyone — from children to houseguests. We consolidate everything into a single, elegant interface, eliminating wall clutter and the dreaded basket of remote controls.",
  },
  {
    q: "What happens if something goes wrong?",
    a: "Technology isn't perfect, but our support is uncompromising. We actively monitor systems remotely, often resolving issues before you even notice them. If you do need us, you can ring us directly and speak to the team that built your system. No call centres, no dodging responsibility.",
  },
]

/* ── Reusable outlined pill button ───────────────────────────────────────── */
function PillButton({
  href,
  to,
  children,
  dark = true,
  type,
  className = "",
  onClick,
  disabled,
}: {
  href?: string
  to?: string
  children: React.ReactNode
  dark?: boolean
  type?: "button" | "submit"
  className?: string
  onClick?: (e: React.MouseEvent) => void
  disabled?: boolean
}) {
  const [hov, setHov] = useState(false)
  const base: React.CSSProperties = dark
    ? {
        border: `1px solid ${hov ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.25)"}`,
        background: hov ? "rgba(255,255,255,0.05)" : "transparent",
        color: "#ffffff",
        transition: TRANS,
        opacity: disabled ? 0.6 : 1,
      }
    : {
        border: `1px solid ${hov ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.2)"}`,
        background: hov ? "rgba(0,0,0,0.03)" : "transparent",
        color: "#111111",
        transition: TRANS,
        opacity: disabled ? 0.6 : 1,
      }

  const cls = `inline-flex items-center gap-2.5 px-7 py-3 rounded-full font-sans font-medium uppercase text-[0.9375rem] tracking-[0.04em] cursor-pointer ${className}`

  if (to) return (
    <Link to={to} className={cls} style={base}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}>
      {children}
    </Link>
  )
  if (href) return (
    <a href={href} className={cls} style={base}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}>
      {children}
    </a>
  )
  return (
    <button type={type ?? "button"} className={cls} style={base} disabled={disabled}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}>
      {children}
    </button>
  )
}

/* ── Dark panel card ─────────────────────────────────────────────────────── */
function DarkCard({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const [hov, setHov] = useState(false)
  return (
    <div
      className={className}
      style={{
        background: DARK_BG,
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        transition: TRANS,
        ...style,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </div>
  )
}

/* ── Light panel card ────────────────────────────────────────────────────── */
function LightCard({
  children,
  className = "",
  style = {},
  bg = "#ffffff",
  initialBorder = "1px solid rgba(0,0,0,0.08)",
  hoverBorder = "1px solid rgba(0,0,0,0.18)",
  hoverShadow = "0 4px 20px rgba(0,0,0,0.06)",
  lift = true,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  bg?: string
  initialBorder?: string
  hoverBorder?: string
  hoverShadow?: string
  lift?: boolean
}) {
  const [hov, setHov] = useState(false)
  return (
    <div
      className={className}
      style={{
        background: bg,
        border: hov ? hoverBorder : initialBorder,
        boxShadow: hov ? hoverShadow : "none",
        transform: lift && hov ? "translateY(-2px)" : "translateY(0)",
        transition: TRANS,
        ...style,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </div>
  )
}

/* ── Arrow that slides right on parent hover ─────────────────────────────── */
function SlideArrow({ hov }: { hov: boolean }) {
  return (
    <ArrowRight
      size={14}
      style={{ transform: hov ? "translateX(3px)" : "translateX(0)", transition: TRANS }}
    />
  )
}

/* ── Service card with icon hover ─────────────────────────────────────────── */
function ServiceCard({ Icon, num, title, description, image, imageAlt, tags }: {
  Icon: React.ElementType; num: string; title: string; description: string;
  image: string; imageAlt: string; tags: string[]
}) {
  const [hov, setHov] = useState(false)
  return (
    <div
      className="overflow-hidden h-full"
      style={{ background: TINTED_BG, transform: hov ? "translateY(-2px)" : "translateY(0)", transition: TRANS }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="relative overflow-hidden" style={{ height: 224, background: DARK_BG }}>
        <img src={image} alt={imageAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.82 }} />
      </div>
      <div className="p-7 lg:p-8">
        <div className="flex items-center gap-2 mb-5">
          <Icon
            size={18}
            strokeWidth={1.4}
            style={{ color: hov ? ACCENT : "rgba(0,0,0,0.3)", transition: TRANS }}
          />
          <span className="font-sans text-[0.62rem] uppercase tracking-[0.2em]" style={{ color: MUTED_TEXT }}>{num}</span>
        </div>
        <h3
          className="font-display font-light mb-3"
          style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)", lineHeight: 1.25, letterSpacing: "-0.02em", color: hov ? ACCENT : "#111111", transition: TRANS }}
        >
          {title}
        </h3>
        <p className="font-sans font-light mb-5" style={{ fontSize: "0.9375rem", lineHeight: 1.85, color: BODY_TEXT }}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="font-sans text-[0.7rem] uppercase tracking-[0.05em] px-2.5 py-1 rounded-full"
              style={{ border: "1px solid rgba(0,0,0,0.1)", color: MUTED_TEXT }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Main component ───────────────────────────────────────────────────────── */
export default function Home() {
  const [slide, setSlide] = useState(0)
  const [slidePaused, setSlidePaused] = useState(false)
  const [heroArrow, setHeroArrow] = useState(false)
  const location = useLocation()

  // scroll reveal refs
  const revBridge = useScrollReveal()
  const revSvc    = useScrollReveal()
  const revProc   = useScrollReveal()
  const revBrands = useScrollReveal()

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion || slidePaused) return
    const t = setInterval(() => setSlide((s) => (s + 1) % proofSlides.length), 6000)
    return () => clearInterval(t)
  }, [slidePaused])

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (scrollTo) document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [location.state])

  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[100dvh] flex items-center overflow-hidden"
        style={{ background: DARK_BG }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Premium custom home cinema with large projection screen and luxury seating"
            className="hero-image-animate w-full h-full object-cover object-right"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,10,12,0.95) 0%, rgba(8,10,12,0.72) 42%, rgba(8,10,12,0.2) 75%, transparent 100%)" }}
          />
        </div>

        <div className="relative z-10 w-full py-20 px-5 lg:py-32 lg:px-20 xl:px-28">
          <div className="max-w-[600px]">
            <div className="hero-eyebrow-animate flex items-center gap-2 mb-9">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: ACCENT }} />
              <span className="font-sans text-[0.68rem] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.45)" }}>
                Home Cinema &amp; Smart Home Specialists — London &amp; the South East
              </span>
            </div>

            <h1
              className="hero-heading-animate font-display font-light text-white mb-8 text-[2.75rem] leading-[1.15] lg:text-[clamp(3.2rem,6vw,5.5rem)] lg:leading-[1.06]"
              style={{
                letterSpacing: "-0.03em",
              }}
            >
              You invested in the dream. Why doesn't it feel like it?
            </h1>

            <p
              className="hero-subtext-animate font-sans font-light mb-12 max-w-[480px]"
              style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "rgba(255,255,255,0.48)" }}
            >
              Most AV systems underdeliver — fiddly remotes, amateurish cabling, and technology
              that works against itself. We sort that out. Properly.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#consultation"
                className="hero-cta-animate inline-flex items-center gap-2.5 px-7 py-3 rounded-full font-sans font-medium uppercase text-[0.9375rem] tracking-[0.04em] text-white"
                style={{
                  border: `1px solid ${heroArrow ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.25)"}`,
                  background: heroArrow ? "rgba(255,255,255,0.05)" : "transparent",
                  transition: TRANS,
                }}
                onMouseEnter={() => setHeroArrow(true)}
                onMouseLeave={() => setHeroArrow(false)}
                onClick={scrollToSection("consultation")}
              >
                Book a free consultation
                <SlideArrow hov={heroArrow} />
              </a>
              <a
                href="#work"
                className="hero-cta-animate-secondary inline-flex items-center gap-2 px-7 py-3 rounded-full font-sans font-light uppercase text-[0.9375rem]"
                style={{ color: "rgba(255,255,255,0.55)", transition: TRANS }}
                onClick={scrollToSection("work")}
              >
                View our work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PAIN RECOGNITION (dark) ───────────────────────────────────── */}
      <PainPointSection heading="Sound familiar?" points={painPoints} />

      {/* ── IMAGE STRIP ──────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ height: "55vh", minHeight: 360 }}>
        <img
          src={secondImg}
          alt="Premium modern smart home interior with floor-to-ceiling glass and refined furnishings"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ── 3. THE BRIDGE (light) ─────────────────────────────────────────── */}
      <section className="py-20 px-5 lg:py-40 lg:px-16" style={{ background: LIGHT_BG }}>
        <div className="max-w-[900px] mx-auto" ref={revBridge.ref}>
          <div style={revealStyle(revBridge.visible)}>
            <p className="font-sans font-light text-sm mb-8 flex items-center gap-2" style={{ color: MUTED_TEXT }}>
              <span className="w-6 h-px shrink-0" style={{ background: GOLD }} />
              It doesn't need to be like this.
            </p>
            <h2
              className="font-display font-light mb-8 max-w-[800px]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", lineHeight: 1.15, letterSpacing: "-0.025em", color: "#111111" }}
            >
              A home cinema or smart home should quietly disappear into your life — not constantly
              demand your attention.
            </h2>
            <p className="font-sans font-light max-w-[600px]" style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: BODY_TEXT }}>
              We design systems around how your household actually lives — then we build them to
              precisely that standard. No cutting corners, no guesswork, and no vanishing act once
              the job's done.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES (light) ──────────────────────────────────────────── */}
      <section id="services" className="py-16 px-5 lg:py-24 lg:px-16" style={{ background: TINTED_BG }}>
        <div className="max-w-[1400px] mx-auto" ref={revSvc.ref}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12" style={revealStyle(revSvc.visible)}>
            <h2
              className="font-display font-light max-w-[500px]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1, letterSpacing: "-0.025em", color: "#111111" }}
            >
              Everything you need. Nothing you don't.
            </h2>
            <PillButton href="#consultation" dark={false} className="shrink-0" onClick={scrollToSection("consultation")}>
              Book a consultation <ArrowRight size={13} />
            </PillButton>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: 4, padding: 4, background: LIGHT_BG }}
          >
            {services.map(({ Icon, num, title, description, image, imageAlt, tags }, i) => (
              <div key={title} style={revealStyle(revSvc.visible, i * 80)}>
                <ServiceCard Icon={Icon} num={num} title={title} description={description} image={image} imageAlt={imageAlt} tags={tags} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. OUR PROCESS (light) ───────────────────────────────────────── */}
      <section id="process" className="py-16 px-5 lg:py-28 lg:px-16" style={{ background: LIGHT_BG, borderTop: `1px solid ${TINTED_BG}` }}>
        <div className="max-w-[1400px] mx-auto" ref={revProc.ref}>
          <div className="mb-10 lg:mb-14" style={revealStyle(revProc.visible)}>
            <h2
              className="font-display font-light mb-3"
              style={{ fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em", color: "#111111" }}
            >
              We make the whole process effortless.
            </h2>
            <p className="font-sans font-light max-w-[400px]" style={{ fontSize: "1rem", lineHeight: 1.85, color: BODY_TEXT }}>
              No site visits until we've fully understood the brief. No pressure to commit before
              you're ready.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            style={{ gap: 4, padding: 4, background: TINTED_BG }}
          >
            {processSteps.map(({ num, title, desc, image }, i) => (
              <div key={num} style={revealStyle(revProc.visible, i * 80)}>
                <LightCard
                  className="group overflow-hidden h-full"
                  bg={LIGHT_BG}
                  initialBorder="none"
                  hoverBorder="none"
                  hoverShadow="none"
                >
                  <div className="relative overflow-hidden" style={{ height: 192, background: DARK_BG }}>
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ opacity: 0.72 }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top right, rgba(8,10,12,0.82) 0%, rgba(8,10,12,0.45) 35%, rgba(8,10,12,0.08) 58%, transparent 75%)" }}
                    />
                    <div
                      className="absolute bottom-4 left-5 font-display font-light select-none"
                      style={{ fontSize: "3.8rem", lineHeight: 1, color: "rgba(255,255,255,0.95)" }}
                    >
                      {num}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-sans text-[0.81rem] uppercase tracking-[0.18em] mb-2 text-[#111111] group-hover:text-accent transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="font-sans font-light text-sm" style={{ lineHeight: 1.85, color: BODY_TEXT }}>
                      {desc}
                    </p>
                  </div>
                </LightCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PROJECT PROOF (dark) ──────────────────────────────────────── */}
      <section id="work" style={{ background: DARK_BG }}>
        <div className="py-12 px-5 lg:py-20 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: ACCENT }} />
                <span className="font-sans text-[0.68rem] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.38)" }}>
                  Client projects
                </span>
              </div>
              <h2
                className="font-display font-light text-white mb-2"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Don't take our word for it.
              </h2>
              <p className="font-sans font-light" style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.3)" }}>
                Every project below is a real home. Every quote is unsolicited.
              </p>
            </div>
            <PillButton to="/portfolio" dark className="shrink-0">
              View full portfolio <ArrowRight size={13} />
            </PillButton>
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          style={{ height: "62vh", minHeight: 460, maxHeight: 780 }}
          onMouseEnter={() => setSlidePaused(true)}
          onMouseLeave={() => setSlidePaused(false)}
          onFocus={() => setSlidePaused(true)}
          onBlur={() => setSlidePaused(false)}
        >
          {proofSlides.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{ opacity: i === slide ? 1 : 0, pointerEvents: i === slide ? "auto" : "none", transition: `opacity 1000ms ${EASE}` }}
            >
              <img src={s.image} alt={s.alt} loading="lazy" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top right, rgba(8,10,12,0.97) 0%, rgba(8,10,12,0.88) 30%, rgba(8,10,12,0.52) 56%, transparent 78%)" }}
              />
              <div className="absolute bottom-0 left-0 px-8 lg:px-16 pb-12 max-w-[660px]">
                <p
                  className="font-display font-light italic text-white mb-5"
                  style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.8rem)", lineHeight: 1.65 }}
                >
                  "{s.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-px h-6 flex-shrink-0" style={{ background: GOLD }} />
                  <div>
                    <p className="font-sans font-medium text-sm text-white">{s.name}</p>
                    <p className="font-sans text-[0.62rem] uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.28)" }}>
                      {s.role} — {s.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-5 right-8 lg:right-16 flex items-center gap-2 z-10">
            {[
              { label: "prev", icon: <ChevronLeft size={14} />, action: () => setSlide((s) => (s - 1 + proofSlides.length) % proofSlides.length) },
              { label: "next", icon: <ChevronRight size={14} />, action: () => setSlide((s) => (s + 1) % proofSlides.length) },
            ].map(({ label, icon, action }) => (
              <NavBtn key={label} aria-label={label === "prev" ? "Previous slide" : "Next slide"} onClick={action}>
                {icon}
              </NavBtn>
            ))}
            <div className="flex gap-1.5 ml-1">
              {proofSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className="h-[2px] rounded-full"
                  style={{ width: i === slide ? 24 : 12, background: i === slide ? GOLD : "rgba(255,255,255,0.18)", transition: `all 400ms ${EASE}` }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. ACCREDITATION (light) ─────────────────────────────────────── */}
      <section
        className="py-12 px-5 lg:py-16 lg:px-16"
        style={{ background: LIGHT_BG, borderBottom: "1px solid rgba(0,0,0,0.05)" }}
        ref={revBrands.ref}
      >
        <p
          className="font-sans text-[0.6rem] uppercase tracking-[0.26em] text-center mb-9"
          style={{ color: MUTED_TEXT }}
        >
          Certified installers for the world's leading systems
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 max-w-[1100px] mx-auto" style={revealStyle(revBrands.visible)}>
          {brands.map(({ name }) => (
            <BrandMark key={name} name={name} />
          ))}
        </div>
      </section>

      {/* ── 8. FAQ (light) ───────────────────────────────────────────────── */}
      <FaqSection id="faq" heading="Questions you might have" faqs={faqs} />

      {/* ── 9. FINAL CTA (dark) ──────────────────────────────────────────── */}
      <ConsultationSection
        heading="Your home should work for you. Let's make that happen."
        description="A free 30-minute discovery call. No obligation, no sales pitch — just a straightforward conversation about what's possible in your home."
        projectLabel="Brief Project Description"
        interestLabel="Interest"
        interestOptions={[
          { value: "cinema", label: "Home Cinema" },
          { value: "smart-home", label: "Smart Home Automation" },
          { value: "multiroom", label: "Multiroom Audio" },
          { value: "support", label: "System Support & Rescue" },
        ]}
        submitLabel="Book Private Consultation"
        submittedLabel="Thank you — we'll be in touch within one working day."
      />
    </>
  )
}

/* ── Small local components ───────────────────────────────────────────────── */

function NavBtn({ children, onClick, "aria-label": label }: { children: React.ReactNode; onClick: () => void; "aria-label": string }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="w-11 h-11 rounded-[6px] flex items-center justify-center"
      style={{
        border: `1px solid ${hov ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.12)"}`,
        color: hov ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
        transition: TRANS,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </button>
  )
}

function BrandMark({ name }: { name: string }) {
  const [hov, setHov] = useState(false)
  return (
    <span
      className="font-display font-light text-[1.05rem] select-none"
      style={{ color: MUTED_TEXT, opacity: hov ? 0.9 : 0.45, letterSpacing: "0.01em", transition: TRANS }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {name}
    </span>
  )
}

