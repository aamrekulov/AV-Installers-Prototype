import { useState, useEffect, useRef } from "react"
import { useLocation, Link } from "react-router"
import {
  Sliders, PhoneOff, Wallet, ZapOff, Cable, Clock,
  Monitor, Home as HomeIcon, Music2, Headphones,
  Plus, ChevronLeft, ChevronRight, ArrowRight, ChevronDown,
} from "lucide-react"
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
const DARK_GRID  = "#17191c"
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

  const cls = `inline-flex items-center gap-2.5 px-7 py-3 rounded-full font-sans font-medium text-[0.9375rem] tracking-[0.04em] cursor-pointer ${className}`

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

/* ── Pain point card with icon hover ─────────────────────────────────────── */
function PainCard({ Icon, label, quote }: { Icon: React.ElementType; label: string; quote: string }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      style={{
        background: DARK_BG,
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        transition: TRANS,
      }}
      className="p-7 lg:p-8 flex flex-col gap-7 h-full"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="flex items-center justify-between">
        <Icon
          size={18}
          strokeWidth={1.4}
          style={{ color: hov ? ACCENT : "rgba(255,255,255,0.35)", transition: TRANS }}
        />
        <span className="font-sans text-[0.85rem] uppercase tracking-[0.22em]" style={{ color: hov ? ACCENT : "rgba(255,255,255,0.25)", transition: TRANS }}>
          {label}
        </span>
      </div>
      <p className="font-display font-light italic" style={{ fontSize: "1.1rem", lineHeight: 1.68, color: "#ffffff" }}>
        {quote}
      </p>
    </div>
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
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [heroArrow, setHeroArrow] = useState(false)
  const [form, setForm] = useState({ name: "", contact: "", project: "", interest: "" })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formSubmitted, setFormSubmitted] = useState(false)
  const location = useLocation()

  // scroll reveal refs
  const revPain   = useScrollReveal()
  const revBridge = useScrollReveal()
  const revSvc    = useScrollReveal()
  const revProc   = useScrollReveal()
  const revBrands = useScrollReveal()
  const revFaq    = useScrollReveal()
  const revCta    = useScrollReveal()

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

  function updateField(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
    setFormErrors((errs) => (errs[key] ? { ...errs, [key]: "" } : errs))
  }

  function handleConsultationSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!form.name.trim()) nextErrors.name = "Please enter your name."
    if (!form.contact.trim()) nextErrors.contact = "Please add a phone number or email."
    if (!form.project.trim()) nextErrors.project = "Tell us a little about the project."
    setFormErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setFormSubmitted(true)
  }

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
            className="w-full h-full object-cover object-right"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,10,12,0.95) 0%, rgba(8,10,12,0.72) 42%, rgba(8,10,12,0.2) 75%, transparent 100%)" }}
          />
        </div>

        <div className="relative z-10 w-full py-20 px-5 lg:py-32 lg:px-20 xl:px-28">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-2 mb-9">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: ACCENT }} />
              <span className="font-sans text-[0.68rem] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.45)" }}>
                Home Cinema &amp; Smart Home Specialists — London &amp; the South East
              </span>
            </div>

            <h1
              className="font-display font-light text-white mb-8"
              style={{
                fontSize: "clamp(3.2rem, 6vw, 5.5rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
              }}
            >
              You invested in the dream. Why doesn't it feel like it?
            </h1>

            <p
              className="font-sans font-light mb-12 max-w-[480px]"
              style={{ fontSize: "1.0625rem", lineHeight: 1.85, color: "rgba(255,255,255,0.48)" }}
            >
              Most AV systems underdeliver — fiddly remotes, amateurish cabling, and technology
              that works against itself. We sort that out. Properly.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full font-sans font-medium text-[0.9375rem] tracking-[0.04em] text-white"
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
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-sans font-light text-[0.9375rem]"
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
      <section className="py-20 px-5 lg:py-36 lg:px-16" style={{ background: DARK_BG }}>
        <div className="max-w-[1400px] mx-auto">
          <div ref={revPain.ref}>
            <div className="mb-12 lg:mb-16" style={revealStyle(revPain.visible)}>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: ACCENT }} />
                <span className="font-sans text-[0.68rem] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.38)" }}>
                  Common frustrations
                </span>
              </div>
              <h2
                className="font-display font-light text-white mb-4"
                style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Sound familiar?
              </h2>
              <p className="font-sans font-light max-w-[440px]" style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.45)" }}>
                If any of these resonate, you've come to exactly the right place.
              </p>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              style={{ gap: 4, padding: 4, background: DARK_GRID }}
            >
              {painPoints.map(({ Icon, label, quote }, i) => (
                <div key={label} style={revealStyle(revPain.visible, i * 80)}>
                  <PainCard Icon={Icon} label={label} quote={quote} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                    <h4 className="font-sans text-[0.81rem] uppercase tracking-[0.18em] mb-2 text-[#111111] group-hover:text-accent transition-colors duration-300">
                      {title}
                    </h4>
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
      <section id="faq" className="py-16 px-5 lg:py-28 lg:px-16" style={{ background: LIGHT_BG }}>
        <div className="max-w-[760px] mx-auto" ref={revFaq.ref}>
          <h2
            className="font-display font-light mb-10 lg:mb-14"
            style={{ fontSize: "clamp(1.9rem, 3vw, 2.8rem)", letterSpacing: "-0.025em", color: "#111111", ...revealStyle(revFaq.visible) }}
          >
            Questions you might have
          </h2>
          <div>
            {faqs.map(({ q, a }, i) => (
              <FaqRow
                key={i}
                q={q}
                a={a}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                visible={revFaq.visible}
                delay={i * 60}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA (dark) ──────────────────────────────────────────── */}
      <section
        id="consultation"
        className="py-20 px-5 lg:py-40 lg:px-16 relative overflow-hidden"
        style={{ background: DARK_BG }}
        ref={revCta.ref}
      >
        {[360, 560, 760, 960].map((d) => (
          <div
            key={d}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{ width: d, height: d, border: "1px solid rgba(255,255,255,0.025)" }}
          />
        ))}

        <div className="relative z-10 max-w-[500px] mx-auto text-center" style={revealStyle(revCta.visible)}>
          <div className="flex items-center justify-center gap-2 mb-9">
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: ACCENT }} />
            <span className="font-sans text-[0.68rem] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.38)" }}>
              Free consultation
            </span>
          </div>

          <h2
            className="font-display font-light text-white mb-6"
            style={{ fontSize: "clamp(2.1rem, 3.5vw, 3.2rem)", lineHeight: 1.13, letterSpacing: "-0.025em" }}
          >
            Your home should work for you. Let's make that happen.
          </h2>
          <p className="font-sans font-light mb-10 max-w-[440px] mx-auto" style={{ fontSize: "1rem", lineHeight: 1.9, color: "rgba(255,255,255,0.36)" }}>
            A free 30-minute discovery call. No obligation, no sales pitch — just a
            straightforward conversation about what's possible in your home.
          </p>

          <form className="space-y-3 text-left" onSubmit={handleConsultationSubmit} noValidate>
            <FormField
              id="cta-name"
              label="Name"
              value={form.name}
              onChange={(v) => updateField("name", v)}
              error={formErrors.name}
              maxLength={100}
            />
            <FormField
              id="cta-contact"
              label="Telephone / Email"
              value={form.contact}
              onChange={(v) => updateField("contact", v)}
              error={formErrors.contact}
              maxLength={100}
            />
            <FormField
              id="cta-project"
              label="Brief Project Description"
              value={form.project}
              onChange={(v) => updateField("project", v)}
              error={formErrors.project}
              textarea
              maxLength={1000}
            />
            <div className="relative">
              <label htmlFor="cta-interest" className="sr-only">Interest</label>
              <select
                id="cta-interest"
                value={form.interest}
                onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
                className="w-full px-0 py-3 font-sans font-light text-[0.9375rem] appearance-none cursor-pointer bg-transparent focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60 focus-visible:outline-offset-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.18)", color: form.interest ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.28)" }}
              >
                <option value="" disabled>Interest</option>
                <option value="cinema" style={{ background: "#111111", color: "white" }}>Home Cinema</option>
                <option value="smart-home" style={{ background: "#111111", color: "white" }}>Smart Home Automation</option>
                <option value="multiroom" style={{ background: "#111111", color: "white" }}>Multiroom Audio</option>
                <option value="support" style={{ background: "#111111", color: "white" }}>System Support &amp; Rescue</option>
              </select>
              <ChevronDown size={13} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(255,255,255,0.18)" }} />
            </div>

            <PillButton type="submit" dark className="w-full justify-center py-3.5" disabled={formSubmitted}>
              {formSubmitted ? "Request sent" : "Book Private Consultation"} <ArrowRight size={13} />
            </PillButton>

            {formSubmitted && (
              <p className="font-sans text-[0.8rem] text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
                Thank you — we'll be in touch within one working day.
              </p>
            )}
          </form>

          <p className="mt-8 font-sans text-[0.6rem] uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.5)" }}>
            Or ring us directly: 0800 246 8000 · Monday–Friday, 9am–6pm
          </p>
        </div>
      </section>
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

function FaqRow({ q, a, open, onToggle, visible, delay }: { q: string; a: string; open: boolean; onToggle: () => void; visible: boolean; delay: number }) {
  const [hov, setHov] = useState(false)
  return (
    <div style={{ borderBottom: "1px solid rgba(0,0,0,0.07)", ...revealStyle(visible, delay) }}>
      <button
        onClick={onToggle}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="w-full flex items-center justify-between py-6 text-left gap-6"
        aria-expanded={open}
      >
        <h3
          className="font-display font-light text-[1.1rem] leading-snug"
          style={{ color: hov || open ? "#111111" : "#111111", opacity: hov || open ? 1 : 0.85, transition: TRANS }}
        >
          {q}
        </h3>
        <div
          className="flex-shrink-0"
          style={{
            color: open ? "#111111" : "rgba(0,0,0,0.28)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: TRANS,
          }}
        >
          <Plus size={16} strokeWidth={1.5} />
        </div>
      </button>
      <div
        className="grid"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: `grid-template-rows 500ms ${EASE}`,
        }}
      >
        <div className="overflow-hidden">
          <p className="font-sans font-light text-base pb-7" style={{ lineHeight: 1.9, color: BODY_TEXT }}>{a}</p>
        </div>
      </div>
    </div>
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

function FormField({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  textarea = false,
  maxLength,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  textarea?: boolean
  maxLength?: number
}) {
  const [focused, setFocused] = useState(false)
  const shared = {
    id,
    value,
    maxLength,
    placeholder: label,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${id}-error` : undefined,
    className:
      "w-full block px-0 py-3 font-sans font-light text-[0.9375rem] text-white placeholder-white/30 bg-transparent focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60 focus-visible:outline-offset-4",
    style: {
      borderBottom: `1px solid ${error ? "rgba(248,15,15,0.65)" : focused ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.18)"}`,
      transition: TRANS,
    } as React.CSSProperties,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
  }
  return (
    <div>
      <label htmlFor={id} className="sr-only">{label}</label>
      {textarea ? <textarea rows={3} {...shared} /> : <input type={type} {...shared} />}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 font-sans text-[0.75rem]" style={{ color: "#ff9d9d" }}>
          {error}
        </p>
      )}
    </div>
  )
}
