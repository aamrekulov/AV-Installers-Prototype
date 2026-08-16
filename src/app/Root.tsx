import { useState, useEffect, useRef } from "react"
import { Outlet, Link } from "react-router"
import { ChevronDown, Menu, X, BadgeCheck, Star, MapPin, Shield, ArrowRight } from "lucide-react"

const DARK_BG = "#080a0c"
const ACCENT  = "#f97316"
const EASE    = "cubic-bezier(0.16, 1, 0.3, 1)"
const TRANS   = `all 300ms ${EASE}`

const smartHomeLinks = [
  { label: "Smart Home Automation", href: "#" },
  { label: "Multiroom Audio", href: "#" },
  { label: "The Process", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Locations", href: "#" },
]

const trustItems = [
  { Icon: BadgeCheck, label: "CEDIA certified" },
  { Icon: BadgeCheck, label: "Control4 dealer" },
  { Icon: Star, label: "5-star Google rating" },
  { Icon: Shield, label: "10-year workmanship guarantee" },
  { Icon: MapPin, label: "London & South East" },
]

const footerCols = [
  {
    heading: "Services",
    links: [
      { label: "Home Cinema", href: "/home-cinema" },
      { label: "Smart Home Automation", href: "#" },
      { label: "Multiroom Audio", href: "#" },
      { label: "System Care & Aftercare", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Work", href: "#work" },
      { label: "About", href: "#" },
      { label: "The Process", href: "#" },
      { label: "Locations", href: "#" },
    ],
  },
  {
    heading: "Get in touch",
    links: [
      { label: "Book a Consultation", href: "#consultation" },
      { label: "0800 XXX XXXX", href: "#" },
      { label: "Monday–Friday, 9am–6pm", href: "#" },
    ],
  },
]

function NavLink({ children, href, to, onClick }: { children: React.ReactNode; href?: string; to?: string; onClick?: () => void }) {
  const [hov, setHov] = useState(false)
  const cls = "font-sans text-[0.8rem] uppercase tracking-[0.12em] px-4 py-3"
  const style: React.CSSProperties = { color: hov ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.6)", transition: TRANS }
  if (to) return <Link to={to} className={cls} style={style} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}>{children}</Link>
  return <a href={href} className={cls} style={style} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}>{children}</a>
}

export default function Root() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSmartOpen, setMobileSmartOpen] = useState(false)
  const [ctaHov, setCtaHov] = useState(false)
  const dropdownTimer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const openDropdown = () => { clearTimeout(dropdownTimer.current); setDropdownOpen(true) }
  const closeDropdown = () => { dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 120) }

  return (
    <div className="font-sans text-foreground antialiased overflow-x-hidden" style={{ background: DARK_BG }}>

      {/* ── NAVBAR ──────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ transition: `background 400ms ${EASE}, backdrop-filter 400ms ${EASE}` }}>
        <div
          style={{
            background: scrolled ? "rgba(8,10,12,0.97)" : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            transition: `background 400ms ${EASE}`,
          }}
        >
          <div className="max-w-[1560px] mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between">

              <Link to="/" className="font-display font-light text-white text-xl tracking-[-0.01em] shrink-0 py-5">
                Minimalist AV
              </Link>

              {/* Desktop nav */}
              <div className="hidden lg:flex items-center">
                <NavLink to="/home-cinema">Home Cinema</NavLink>

                <div className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                  <button
                    className="flex items-center gap-1.5 font-sans text-[0.8rem] uppercase tracking-[0.12em] px-4 py-3"
                    style={{ color: dropdownOpen ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.6)", transition: TRANS }}
                  >
                    Smart Home
                    <ChevronDown size={12} style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: TRANS }} />
                  </button>

                  <div
                    className="absolute top-[calc(100%+4px)] left-0 min-w-[220px] py-2"
                    style={{
                      background: "rgba(8,10,12,0.98)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      backdropFilter: "blur(12px)",
                      borderRadius: 8,
                      opacity: dropdownOpen ? 1 : 0,
                      transform: dropdownOpen ? "translateY(0)" : "translateY(-6px)",
                      pointerEvents: dropdownOpen ? "auto" : "none",
                      transition: TRANS,
                    }}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    {smartHomeLinks.map(({ label, href }) => (
                      <DropdownLink key={label} href={href}>{label}</DropdownLink>
                    ))}
                  </div>
                </div>

                <NavLink href="#work">Our Work</NavLink>
                <NavLink href="#">About</NavLink>

                {/* CTA — outlined pill */}
                <a
                  href="#consultation"
                  className="ml-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-sans font-medium text-[0.8rem] tracking-[0.06em] text-white"
                  style={{
                    border: `1px solid ${ctaHov ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.22)"}`,
                    background: ctaHov ? "rgba(255,255,255,0.05)" : "transparent",
                    transition: TRANS,
                  }}
                  onMouseEnter={() => setCtaHov(true)}
                  onMouseLeave={() => setCtaHov(false)}
                >
                  Book a Consultation
                </a>
              </div>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden py-5"
                style={{ color: "rgba(255,255,255,0.7)", transition: TRANS }}
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            {/* Mobile menu */}
            <div
              className="lg:hidden overflow-hidden"
              style={{
                maxHeight: mobileOpen ? 600 : 0,
                transition: `max-height 500ms ${EASE}`,
                background: "rgba(8,10,12,0.98)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="px-2 py-6 flex flex-col gap-1">
                <NavLink to="/home-cinema" onClick={() => setMobileOpen(false)}>Home Cinema</NavLink>

                <button
                  onClick={() => setMobileSmartOpen((o) => !o)}
                  className="flex items-center justify-between px-4 py-3 font-sans text-[0.8rem] uppercase tracking-[0.14em]"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Smart Home
                  <ChevronDown size={12} style={{ transform: mobileSmartOpen ? "rotate(180deg)" : "rotate(0deg)", transition: TRANS }} />
                </button>
                {mobileSmartOpen && (
                  <div className="pl-4 flex flex-col gap-0.5 pb-1">
                    {smartHomeLinks.map(({ label, href }) => (
                      <a key={label} href={href} className="px-4 py-2.5 font-sans text-[0.75rem] uppercase tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {label}
                      </a>
                    ))}
                  </div>
                )}

                <NavLink href="#work">Our Work</NavLink>
                <NavLink href="#">About</NavLink>

                <a
                  href="#consultation"
                  className="mt-5 mx-4 inline-flex items-center justify-center px-6 py-3 rounded-full font-sans font-medium text-[0.875rem] text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.22)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── PAGE CONTENT ─────────────────────────────────────────────────── */}
      <Outlet />

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ background: DARK_BG, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        {/* Main footer body */}
        <div className="max-w-[1400px] mx-auto px-5 lg:px-16 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24">

            {/* Left — statement + CTA */}
            <div className="max-w-[480px]">
              <Link to="/" className="font-display font-light text-white text-xl tracking-[-0.01em] block mb-8">
                Minimalist AV
              </Link>
              <h2
                className="font-display font-light text-white mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.12, letterSpacing: "-0.025em" }}
              >
                Home technology that disappears into your life.
              </h2>
              <FooterCTA />
            </div>

            {/* Right — link columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {footerCols.map(({ heading, links }) => (
                <div key={heading}>
                  <p className="font-sans text-[0.68rem] uppercase tracking-[0.2em] mb-5" style={{ color: "rgba(255,255,255,0.28)" }}>
                    {heading}
                  </p>
                  <ul className="space-y-3">
                    {links.map(({ label, href }) => (
                      <li key={label}>
                        <FooterLink href={href}>{label}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-[1400px] mx-auto px-5 lg:px-16 py-6">
            <ul className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3">
              {trustItems.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2 font-sans text-[0.6rem] uppercase tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.28)" }}>
                  <Icon size={12} strokeWidth={1.5} style={{ color: ACCENT }} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ── Footer sub-components ───────────────────────────────────────────────── */

function FooterCTA() {
  const [hov, setHov] = useState(false)
  return (
    <a
      href="#consultation"
      className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full font-sans font-medium text-[0.9375rem] tracking-[0.04em] text-white"
      style={{
        border: `1px solid ${hov ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.22)"}`,
        background: hov ? "rgba(255,255,255,0.05)" : "transparent",
        transition: TRANS,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      Book a free consultation
      <ArrowRight size={13} style={{ transform: hov ? "translateX(3px)" : "translateX(0)", transition: TRANS }} />
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      className="font-sans text-[0.82rem]"
      style={{ color: hov ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.45)", transition: TRANS }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  )
}

function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      className="block px-6 py-3 font-sans text-[0.78rem] uppercase tracking-[0.1em]"
      style={{
        color: hov ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.55)",
        background: hov ? "rgba(255,255,255,0.04)" : "transparent",
        transition: TRANS,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </a>
  )
}
