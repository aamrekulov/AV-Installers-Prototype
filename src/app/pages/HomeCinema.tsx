import { useState } from "react"
import { Monitor, Layers, PhoneOff, Plus, ArrowRight, ChevronDown, ArrowUpRight } from "lucide-react"
import heroCinemaImg from "../../imports/testimonial-2.webp"
import designSpecificationImg from "../../imports/design-specification-1.webp"
import smartHomeImg from "../../imports/smart-home-automation.webp"
import multiroomImg from "../../imports/multiroom-audio.webp"
import discoveryCallImg from "../../imports/discovery-call.webp"
import handoverImg from "../../imports/handover-support.webp"
import testimonial1Img from "../../imports/testimonial-1.webp"
import testimonial2Img from "../../imports/testimonial-2.webp"

const capabilityImages = [
  // Picture — projector light beam in cinema auditorium
  "https://images.unsplash.com/photo-1762541693135-fb989de961e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  // Sound — tall precision speaker driver
  "https://images.unsplash.com/photo-1761294364444-09faad3bf1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  // Acoustics — dark geometric textured wall pattern
  "https://images.unsplash.com/photo-1770370718162-ae91c1643354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  // Lighting — moody atmospheric room with ambient lighting
  "https://images.unsplash.com/photo-1668891451335-40e811042e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  // Seating & layout — luxurious home theater with comfortable seating
  "https://images.unsplash.com/photo-1746439324737-2c9f9a3e81a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  // Control — clean smart home touch tablet interface
  "https://images.unsplash.com/photo-1650682009477-52fd77302b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
]

const dedicatedCinemaImg = "https://images.unsplash.com/photo-1774619755413-7c31ab3aabc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
const mediaRoomImg = "https://images.unsplash.com/photo-1780042731953-15dd1b3b5f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"

// ─── Data ──────────────────────────────────────────────────────────────────

const painPoints = [
  {
    Icon: Monitor,
    label: "Disappointment",
    quote: '"We spent serious money on a TV and a soundbar. It\'s fine. But it\'s just... fine."',
  },
  {
    Icon: Layers,
    label: "Complexity",
    quote: '"The room\'s never quite right — too bright, too echoey, the bass rattling the windows. Nobody can agree on the settings."',
  },
  {
    Icon: PhoneOff,
    label: "Broken promises",
    quote: '"The company who sold us the system had moved on to the next job before we\'d figured out how to use this one."',
  },
]

const capabilities = [
  {
    label: "Picture",
    copy: "4K laser projection or high-end display. Calibrated to the room, not to factory settings. Screen Research, Sony, and Epson systems selected for your specific dimensions and ambient light conditions.",
  },
  {
    label: "Sound",
    copy: "Dolby Atmos object-based audio with ceiling, wall, and floor channels placed precisely for your room geometry. Not approximate. Not close enough. Precisely.",
  },
  {
    label: "Acoustics",
    copy: "Fabric wall panels, bass traps, diffusers and ceiling treatment — designed to look architectural rather than technical. The room becomes the instrument.",
  },
  {
    label: "Lighting",
    copy: "Scene-based lighting that transitions from arrival, to previews, to feature — automatically, or at the touch of one button. No white light spilling onto the screen. No compromise.",
  },
  {
    label: "Seating & layout",
    copy: "Fixed tiered seating or flexible arrangements. We work with interior designers and furniture suppliers who understand cinema acoustics — or with yours, if you already have a relationship.",
  },
  {
    label: "Control",
    copy: "One button. Or one voice command. Or nothing at all — if you want the room to know what you need before you ask. Control4 and Savant systems that the whole family can operate without instruction.",
  },
]

const processSteps = [
  {
    num: "01",
    title: "Discovery call",
    desc: "30 minutes. We talk through your room, your household, how you watch, and what you've imagined. We'll tell you honestly whether your space will work and what it would take.",
    image: discoveryCallImg,
  },
  {
    num: "02",
    title: "Room assessment & design",
    desc: "We visit the room. We measure, assess acoustics, map cable routes, and design the system around your space. A detailed design proposal with a fixed-price quotation — not a range.",
    image: designSpecificationImg,
  },
  {
    num: "03",
    title: "Installation",
    desc: "We work around your household. Tidy, careful with your finishes, and communicative throughout. Most installations complete in three to five days. We don't leave until everything works perfectly.",
    image: multiroomImg,
  },
  {
    num: "04",
    title: "Handover & ongoing support",
    desc: "A thorough walkthrough with everyone in the household. A direct number for the team who built it. Remote monitoring included as standard, so we often resolve issues before you notice them.",
    image: handoverImg,
  },
]

const projects = [
  {
    image: testimonial1Img,
    location: "Dedicated cinema room — Cobham, Surrey",
    description: "A seven-seat Dolby Atmos cinema in a fully converted basement, with acoustic panelling designed to complement the home's period architecture.",
    quote: "We'd looked at other companies. The difference was that these were the only ones who talked about the room before they talked about the kit. That told us everything.",
    client: "M. Harrison, Cobham, Surrey",
  },
  {
    image: testimonial2Img,
    location: "Media room — Kensington, London",
    description: "A dual-purpose living room transformed into a 4K cinema space, with a motorised screen that disappears entirely when not in use.",
    quote: "My children can operate the whole room themselves. My husband thought that was impossible. It wasn't.",
    client: "S. Whitmore, Kensington, London",
  },
]

const faqs = [
  {
    q: "My room isn't purpose-built. Can you still create a proper cinema?",
    a: "Most of the rooms we work with weren't built with cinema in mind. A dedicated cinema room is the ideal, but a beautifully executed media room in a living space — with the right screen, the right acoustics, and the right control — can be a genuinely impressive experience. We'll tell you honestly what your room can achieve during the design consultation, before any commitment is made.",
  },
  {
    q: "How disruptive is the installation?",
    a: "Less than you'd expect. Most installations complete in three to five days. We protect your floors, keep the work contained, and leave each day tidier than we arrived. Where cabling needs to be routed through finished walls, we use discreet techniques developed specifically to avoid redecoration. We'll walk you through exactly what to expect during the design phase so there are no surprises.",
  },
  {
    q: "Can the cinema integrate with the rest of our smart home?",
    a: "Yes — and it should. A properly designed cinema room integrates seamlessly with your lighting, blinds, heating, and whole-home audio system. Walking into the room and pressing play should trigger everything: lights to scene, blinds closed, system on. If you already have a smart home system, we'll work with what's there. If you're starting from scratch, we'll design both together.",
  },
  {
    q: "What happens if something stops working?",
    a: "We monitor your system remotely and resolve most issues before you're even aware of them. If you do notice something, you ring us directly — not a call centre, not a support ticket system — and speak to the team who built your room. We don't consider the job finished when the invoice is paid. The relationship is ongoing, by design.",
  },
]

// ─── Component ─────────────────────────────────────────────────────────────

export default function HomeCinema() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null)

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-[#080a0c] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroCinemaImg}
            alt="Beautifully lit dedicated home cinema room with deep armchairs and large projection screen"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient to left, so text box reads cleanly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080a0c]/80 via-[#080a0c]/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full py-16 px-5 lg:py-28 lg:px-20 xl:px-28">
          <div
            className="max-w-[600px] px-10 py-12 lg:px-14 lg:py-14"
            style={{ background: "rgba(8,10,12,0.52)", backdropFilter: "blur(2px)" }}
          >
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/75 mb-8 block">
              Home Cinema Design &amp; Installation — London &amp; the South East
            </span>
            <h1 className="font-display font-light text-white leading-[1.05] tracking-[-0.02em] text-[clamp(2.8rem,5vw,4.6rem)] mb-8">
              The cinema you always imagined your home could have.
            </h1>
            <p className="text-white/65 text-xl font-light leading-[1.8] mb-12">
              Not a projector bolted to the ceiling. Not a soundbar pointed at a wall. A genuinely
              immersive experience — designed around your room, your household, and the way you
              actually want to spend an evening.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-[#080a0c] text-[0.8rem] uppercase tracking-[0.14em] font-semibold transition-all duration-300 hover:bg-[#f0ebe4] group hover:shadow-[0_0_32px_rgba(255,255,255,0.12)]"
              >
                Book a free design consultation
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/25 text-white text-[0.8rem] uppercase tracking-[0.14em] font-medium transition-all duration-300 hover:border-white/60 hover:bg-white/5"
              >
                See our cinema projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PAIN RECOGNITION ─────────────────────────────────────────── */}
      <section className="py-16 px-5 lg:py-36 lg:px-16 bg-[#f7f4ef]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display font-light text-[clamp(2.5rem,4vw,3.5rem)] tracking-tight text-[#0d0d0d] text-center mb-10 lg:mb-20">
            Sound familiar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.07]">
            {painPoints.map(({ Icon, label, quote }) => (
              <div
                key={label}
                className="bg-[#f7f4ef] p-10 lg:p-12 flex flex-col gap-8 group transition-all duration-500 hover:bg-white hover:shadow-[0_12px_48px_rgba(0,0,0,0.07)] relative z-0 hover:z-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[#0d0d0d] group-hover:text-accent transition-colors duration-300">
                    <Icon size={20} strokeWidth={1.25} />
                  </div>
                  <span className="font-mono text-[1.05rem] uppercase tracking-[0.2em] text-black/75 group-hover:text-accent transition-colors duration-300 text-right">
                    {label}
                  </span>
                </div>
                <p className="font-display font-light italic text-[1.2rem] leading-[1.55] text-[#0d0d0d]">
                  {quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. THE BRIDGE ───────────────────────────────────────────────── */}
      <section className="py-20 px-5 lg:py-44 lg:px-16 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="w-10 h-px bg-accent mx-auto mb-10" />
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-black/60 mb-8">
            It doesn't need to be like this.
          </p>
          <h2 className="font-display font-light text-[clamp(2.2rem,3.5vw,3.25rem)] leading-[1.15] tracking-[-0.01em] text-[#0d0d0d] mb-10">
            A home cinema should make you forget you're watching a screen.
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-[1.8] max-w-[640px] mx-auto">
            The finest cinema experiences don't announce themselves. The picture doesn't strain.
            The sound doesn't overwhelm. The lighting adjusts without being asked. Everything
            disappears — and all that remains is the film, the family, and the room you're
            genuinely glad you created.
            <br /><br />
            That's what we design. And it begins with understanding your home, not with a
            catalogue of equipment.
          </p>
        </div>
      </section>

      {/* ── 4. WHAT WE DESIGN ───────────────────────────────────────────── */}
      <section className="bg-[#f7f4ef] px-5 py-16 lg:px-16 lg:py-32">
        <div className="max-w-[1400px] mx-auto">

          <div className="mb-10 lg:mb-16">
            <h2 className="font-display font-light text-[clamp(2.5rem,4vw,3.5rem)] tracking-tight text-[#0d0d0d] mb-5">
              Everything that makes the difference.
            </h2>
            <p className="text-muted-foreground text-lg font-light max-w-[640px] leading-relaxed">
              Every decision we make — screen size, projector placement, acoustic treatment,
              seating, lighting — is made in service of one thing: the experience of being in
              that room.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Left: cross-fade image panel */}
            <div className="relative overflow-hidden min-h-[500px] lg:min-h-0">
              {/* Default / base image */}
              <img
                src={smartHomeImg}
                alt="Precision acoustic panelling and cinema detail in a minimalist AV installation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Capability-specific images that cross-fade on hover */}
              {capabilityImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={capabilities[i].label}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                  style={{ opacity: hoveredCapability === i ? 1 : 0 }}
                />
              ))}
              <div className="absolute inset-0 bg-[#0d0d0d]/20 pointer-events-none" />
              {/* Capability label overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none">
                <div
                  className="transition-opacity duration-500"
                  style={{ opacity: hoveredCapability !== null ? 1 : 0 }}
                >
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-white/50 block mb-1">
                    {hoveredCapability !== null ? `0${hoveredCapability + 1}` : ""}
                  </span>
                  <span className="font-display font-light text-white text-2xl">
                    {hoveredCapability !== null ? capabilities[hoveredCapability].label : ""}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: capability stack */}
            <div className="bg-white">
              {capabilities.map(({ label, copy }, i) => (
                <div
                  key={label}
                  onMouseEnter={() => setHoveredCapability(i)}
                  onMouseLeave={() => setHoveredCapability(null)}
                  className={`px-10 lg:px-14 py-9 group transition-colors duration-300 cursor-default ${
                    hoveredCapability === i ? "bg-[#f7f4ef]" : ""
                  } ${i < capabilities.length - 1 ? "border-b border-black/[0.07]" : ""}`}
                >
                  <div className="flex items-start gap-8">
                    <span className="font-display text-[4.5rem] leading-none font-light text-[#0d0d0d]/[0.08] shrink-0 select-none">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className={`font-mono text-[0.83rem] uppercase tracking-[0.2em] mb-3 transition-colors duration-300 ${
                        hoveredCapability === i ? "text-accent" : "text-[#0d0d0d]"
                      }`}>
                        {label}
                      </h3>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed">
                        {copy}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DEDICATED ROOM VS MEDIA ROOM ─────────────────────────────── */}
      <section className="py-16 px-5 lg:py-36 lg:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display font-light text-[clamp(2rem,3vw,3rem)] tracking-tight text-[#0d0d0d] text-center mb-10 lg:mb-20">
            Which type of cinema is right for your home?
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-black/[0.07]">

            {/* Panel 1 — Dedicated Cinema Room */}
            <div className="bg-white flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dedicatedCinemaImg}
                  alt="Cinema auditorium with red seats and projector beam — dedicated cinema room"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="px-10 lg:px-16 py-14 flex flex-col flex-1">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-accent mb-6 block">
                For rooms used exclusively for cinema
              </span>
              <h3 className="font-display font-light text-[2rem] text-[#0d0d0d] mb-6 leading-snug">
                Dedicated Cinema Room
              </h3>
              <p className="text-muted-foreground font-light leading-[1.8] mb-10">
                A purpose-designed space with full acoustic treatment, fixed tiered seating,
                and complete light control. The gold standard of home cinema — and the closest
                experience to a professional screening room you can create in a private home.
              </p>
              <ul className="space-y-4 mb-14 flex-1">
                {[
                  "Full acoustic design and treatment",
                  "Laser projector with 4K mastering-grade picture",
                  "Dolby Atmos with 7.1.4 or greater speaker configuration",
                  "Tiered or raked fixed seating",
                  "Full light lock and scene-based lighting control",
                  "Dedicated AV rack with remote monitoring",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[#0d0d0d] text-sm font-light leading-relaxed">
                    <span className="text-accent mt-[3px] shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-black/[0.08] pt-8">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-black/45 mb-1">Investment from</p>
                <p className="font-display font-light text-[2.2rem] text-[#0d0d0d]">£35,000</p>
              </div>
              </div>
            </div>

            {/* Panel 2 — Media Room */}
            <div className="bg-[#f7f4ef] flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={mediaRoomImg}
                  alt="Minimalist living room with concealed TV and elegant media integration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="px-10 lg:px-16 py-14 flex flex-col flex-1">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-accent mb-6 block">
                For rooms that serve more than one purpose
              </span>
              <h3 className="font-display font-light text-[2rem] text-[#0d0d0d] mb-6 leading-snug">
                Media Room
              </h3>
              <p className="text-muted-foreground font-light leading-[1.8] mb-10">
                A living room, family room, or study that becomes a cinema when you want it to —
                and disappears back into a beautiful room when you don't. Concealed screens,
                wireless systems, and furniture-friendly speaker placement that leave no trace
                of the technology during the day.
              </p>
              <ul className="space-y-4 mb-14 flex-1">
                {[
                  "Large format display or motorised projector screen",
                  "Architectural speaker installation",
                  "Acoustic optimisation within the room's existing character",
                  "Automated lighting and blind control",
                  "Single-app control integrated with the rest of the home",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[#0d0d0d] text-sm font-light leading-relaxed">
                    <span className="text-accent mt-[3px] shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-black/[0.08] pt-8">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-black/45 mb-1">Investment from</p>
                <p className="font-display font-light text-[2.2rem] text-[#0d0d0d]">£15,000</p>
              </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. THE PROCESS ──────────────────────────────────────────────── */}
      <section className="py-16 px-5 lg:py-36 lg:px-16 bg-[#f7f4ef]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12 lg:mb-24">
            <h2 className="font-display font-light text-[clamp(2rem,3vw,3rem)] text-[#0d0d0d] mb-4">
              We make the whole process effortless.<br />Here's how.
            </h2>
            <p className="text-muted-foreground text-lg font-light max-w-md mx-auto">
              No pressure to commit. No equipment recommendations before we've understood the room.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map(({ num, title, desc, image }) => (
              <div key={num} className="group flex flex-col overflow-hidden">
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                  <div className="relative z-10 p-7 h-full flex items-end">
                    <div className="font-display text-[4.5rem] leading-none font-light text-white">
                      {num}
                    </div>
                  </div>
                </div>
                <div className="bg-white p-7 flex-1">
                  <h4 className="font-mono text-[0.81rem] uppercase tracking-[0.18em] text-[#0d0d0d] mb-3">
                    {title}
                  </h4>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PROJECT PROOF ────────────────────────────────────────────── */}
      <section id="projects" className="py-16 px-5 lg:py-36 lg:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-5">
            <h2 className="font-display font-light text-[clamp(2.5rem,4vw,3.5rem)] text-[#0d0d0d] mb-3">
              Don't take our word for it.
            </h2>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-black/40">
              Every project below is a real home. Every quote is unsolicited.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-10 lg:mt-16">
            {projects.map(({ image, location, description, quote, client }) => (
              <div
                key={client}
                className="group bg-[#f7f4ef] overflow-hidden transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.09)]"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-[#141414]">
                  <img
                    src={image}
                    alt={location}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-5 left-6 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-white/70">
                    {location}
                  </span>
                </div>

                {/* Content */}
                <div className="p-9 lg:p-11">
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8">
                    {description}
                  </p>
                  <blockquote className="font-display font-light italic text-[1.15rem] leading-[1.6] text-[#0d0d0d] mb-6">
                    "{quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-px h-5 bg-accent shrink-0" />
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-black/45">
                      {client}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 lg:mt-14">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[#0d0d0d] hover:text-accent transition-colors duration-300 group"
            >
              View all cinema projects
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-5 lg:py-36 lg:px-16 bg-[#f7f4ef]">
        <div className="max-w-[760px] mx-auto">
          <h2 className="font-display font-light text-[clamp(2rem,3vw,2.75rem)] text-[#0d0d0d] text-center mb-10 lg:mb-16">
            Questions you might have
          </h2>
          <div>
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="border-b border-black/[0.08]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-7 text-left gap-6 group"
                  aria-expanded={openFaq === i}
                >
                  <h3 className="font-display font-light text-xl text-[#0d0d0d] group-hover:text-accent transition-colors duration-300">
                    {q}
                  </h3>
                  <div
                    className={`flex-shrink-0 text-black/30 group-hover:text-accent transition-all duration-300 ${
                      openFaq === i ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <Plus size={18} strokeWidth={1.5} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                    openFaq === i ? "max-h-80 pb-8" : "max-h-0"
                  }`}
                >
                  <p className="text-muted-foreground font-light leading-[1.8] text-[1.05rem]">
                    {a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ────────────────────────────────────────────────── */}
      <section id="consultation" className="py-20 px-5 lg:py-40 lg:px-16 bg-[#080a0c] relative overflow-hidden">
        {[360, 560, 760, 960].map((d) => (
          <div
            key={d}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025] pointer-events-none"
            style={{ width: d, height: d }}
          />
        ))}

        <div className="relative z-10 max-w-[520px] mx-auto text-center">
          <div className="w-10 h-px bg-accent mx-auto mb-10" />
          <h2 className="font-display font-light text-[clamp(2.2rem,3.5vw,3.2rem)] leading-[1.15] text-white mb-6">
            Your cinema begins with a conversation.
          </h2>
          <p className="text-white/45 text-lg font-light leading-[1.8] mb-12">
            A free 30-minute discovery call. We'll listen to what you have in mind, tell you
            honestly what your space can achieve, and give you a clear picture of what's
            involved — before you commit to anything.
          </p>

          <form className="space-y-5 text-left">
            {[
              { label: "Name", type: "text" },
              { label: "Telephone / Email", type: "text" },
              { label: "Brief description of your room or project", type: "text" },
            ].map(({ label, type }) => (
              <input
                key={label}
                type={type}
                placeholder={label}
                className="w-full block bg-transparent border-b border-white/[0.14] py-3.5 text-white text-sm placeholder-white/25 focus:outline-none focus:border-white/45 transition-colors duration-300"
              />
            ))}
            <div className="relative">
              <select
                defaultValue=""
                className="w-full bg-transparent border-b border-white/[0.14] py-3.5 text-white/28 text-sm focus:outline-none focus:border-white/45 transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="" disabled>Interest</option>
                <option value="dedicated" className="bg-[#0d0d0d] text-white">Dedicated Cinema Room</option>
                <option value="media-room" className="bg-[#0d0d0d] text-white">Media Room</option>
                <option value="unsure" className="bg-[#0d0d0d] text-white">Not sure yet — happy to be guided</option>
              </select>
              <ChevronDown size={13} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/22 pointer-events-none" />
            </div>
            <button
              type="button"
              className="w-full mt-2 py-4 bg-white text-[#080a0c] text-[0.75rem] uppercase tracking-[0.18em] font-semibold transition-all duration-300 hover:bg-[#eee8e0] active:scale-[0.985]"
            >
              Book my free consultation
            </button>
          </form>

          <p className="mt-10 font-mono text-[0.6rem] text-white/22 uppercase tracking-[0.15em]">
            Or ring us directly: 0800 XXX XXXX · Monday–Friday, 9am–6pm
          </p>
        </div>
      </section>
    </>
  )
}
