import { ServiceHero } from "../components/marketing/ServiceHero"
import { BridgeSection } from "../components/marketing/BridgeSection"
import { AccreditationSection } from "../components/marketing/AccreditationSection"
import { ConsultationSection } from "../components/marketing/ConsultationSection"

const heroImg = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"

const stats = [
  { value: "12", label: "Years trading" },
  { value: "340+", label: "Installations completed" },
  { value: "4.9★", label: "Average client rating" },
  { value: "CEDIA", label: "Certified since 2015" },
]

const team = [
  {
    name: "Thomas Whitfield",
    role: "Founder & Director",
    bio: "Started the company after a decade fitting AV systems for other people's mistakes. Still visits every design consultation personally.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Charlotte Reeves",
    role: "Head of Design",
    bio: "Trained as an interior architect before specialising in AV integration. Believes technology should never compromise a room's design.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Daniel Osei",
    role: "Lead Installation Engineer",
    bio: "Twenty years on site across London and the South East. If it's not level, wired properly, and tidy, it doesn't leave his snag list.",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Priya Nair",
    role: "Client Care Manager",
    bio: "Runs the aftercare team and answers the support line herself more often than not. The name behind \"a person, not a call centre.\"",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
]

const brands = ["Control4", "Lutron", "Sonos", "Savant", "Loxone", "Sony", "Screen Research"]

export default function About() {
  return (
    <>
      <ServiceHero
        image={heroImg}
        imageAlt="AV design studio with technology mounted on a display wall"
        eyebrow="About Us — London & the South East"
        heading="We got tired of watching good money buy bad experiences."
        description="Minimalist AV was founded on a simple frustration: too many home technology companies disappear the moment the invoice is paid. We build systems properly, and then we stick around."
        primaryCta={{ label: "Book a free consultation", targetId: "consultation" }}
      />

      <BridgeSection
        eyebrow="Why we exist."
        heading="Technology should disappear into your life, not dominate it."
        body={
          <>
            We started as a two-person team fixing other companies' half-finished installations.
            The pattern was always the same — rushed cabling, mismatched equipment, and an
            installer who'd already moved on to the next job before the family had learned how
            to use what they'd paid for.
            <br /><br />
            We built Minimalist AV to be the opposite of that. Every project starts with
            understanding the room and the household in it, not a product catalogue. And every
            relationship continues long after handover, because a system that's abandoned after
            installation was never really finished in the first place.
          </>
        }
      />

      <section className="py-16 px-5 lg:py-24 lg:px-16 bg-[#f8f7f4]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display font-light text-[clamp(2.2rem,4vw,3rem)] text-[#111111] mb-2">{value}</p>
              <p className="font-sans text-[0.68rem] uppercase tracking-[0.18em] text-[#6b7280]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-5 lg:py-32 lg:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 lg:mb-16 text-center">
            <h2 className="font-display font-light text-[clamp(2rem,3.5vw,3rem)] tracking-tight text-[#111111] mb-4">
              The people behind the work.
            </h2>
            <p className="text-[#374151] text-lg font-light max-w-[520px] mx-auto">
              Small enough that you'll speak to the same faces from consultation through to aftercare.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(({ name, role, bio, image }) => (
              <div key={name} className="group transition-transform duration-300 hover:-translate-y-0.5">
                <div className="relative overflow-hidden mb-5" style={{ aspectRatio: "4/5" }}>
                  <img src={image} alt={name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <h3 className="font-display font-light text-[1.2rem] text-[#111111] mb-1 group-hover:text-accent transition-colors duration-300">{name}</h3>
                <p className="font-sans text-[0.68rem] uppercase tracking-[0.16em] text-accent mb-3">{role}</p>
                <p className="text-[#374151] text-sm font-light leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AccreditationSection heading="Certified installers for the world's leading systems" brands={brands} />

      <ConsultationSection
        heading="Let's talk about your project."
        description="A free 30-minute discovery call. No obligation, no sales pitch — just a straightforward conversation about what's possible in your home."
        projectLabel="Brief description of your project"
        interestLabel="Interest"
        interestOptions={[
          { value: "cinema", label: "Home Cinema" },
          { value: "smart-home", label: "Smart Home Automation" },
          { value: "multiroom", label: "Multiroom Audio" },
          { value: "support", label: "System Care & Aftercare" },
        ]}
        submitLabel="Book a Consultation"
        submittedLabel="Thank you — we'll be in touch within one working day."
      />
    </>
  )
}
