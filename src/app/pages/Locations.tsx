import { MapPin } from "lucide-react"
import { ServiceHero } from "../components/marketing/ServiceHero"
import { BridgeSection } from "../components/marketing/BridgeSection"
import { ConsultationSection } from "../components/marketing/ConsultationSection"

const heroImg = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"

const coverage = [
  { county: "London", towns: "Richmond, Kensington, Chelsea, Wimbledon, Dulwich" },
  { county: "Surrey", towns: "Guildford, Cobham, Esher, Weybridge, Farnham" },
  { county: "Kent", towns: "Sevenoaks, Tunbridge Wells, Bromley, Westerham" },
  { county: "Sussex", towns: "Horsham, East Grinstead, Haywards Heath" },
  { county: "Berkshire", towns: "Ascot, Windsor, Sunningdale, Wokingham" },
  { county: "Hertfordshire", towns: "St Albans, Radlett, Rickmansworth" },
]

const recentWork = [
  { location: "Cobham, Surrey", note: "Seven-seat dedicated cinema room" },
  { location: "Richmond, London", note: "Full-home automation, four storeys" },
  { location: "Sevenoaks, Kent", note: "Eight-zone whole-home audio" },
  { location: "Guildford, Surrey", note: "Wireless smart home retrofit" },
  { location: "Kensington, London", note: "Motorised media room conversion" },
  { location: "Windsor, Berkshire", note: "Standard Care aftercare plan" },
]

export default function Locations() {
  return (
    <>
      <ServiceHero
        image={heroImg}
        imageAlt="Aerial view of the English countryside across the South East"
        eyebrow="Where We Work"
        heading="Local expertise, wherever you are in the South East."
        description="Every project starts with an in-person visit — not a video call and a guess. That only works because we stay close to home, covering London and the surrounding counties in person, not on a map with a wide radius drawn round it."
        primaryCta={{ label: "Book a free consultation", targetId: "consultation" }}
      />

      <section className="py-16 px-5 lg:py-32 lg:px-16 bg-[#f8f7f4]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 lg:mb-16 text-center">
            <h2 className="font-display font-light text-[clamp(2rem,3.5vw,3rem)] tracking-tight text-[#111111] mb-4">
              Where we cover.
            </h2>
            <p className="text-[#374151] text-lg font-light max-w-[560px] mx-auto">
              If you're outside these areas, ask anyway — we take on projects further afield where the scope justifies it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-1 bg-[#f8f7f4]">
            {coverage.map(({ county, towns }) => (
              <div key={county} className="group bg-white p-8 lg:p-10 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-2.5">
                  <MapPin size={16} strokeWidth={1.5} className="text-accent shrink-0" />
                  <h3 className="font-display font-light text-[1.3rem] text-[#111111] group-hover:text-accent transition-colors duration-300">{county}</h3>
                </div>
                <p className="text-[#374151] text-sm font-light leading-relaxed">{towns}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BridgeSection
        eyebrow="Why local matters."
        heading="You can't design a room properly from a video call."
        body={
          <>
            Acoustics, light, cable routes, and how a household actually moves through a space —
            none of it comes through on a screen share. We visit every project in person during
            design, and staying close to home is what makes that possible on every job, not just
            the ones nearby.
            <br /><br />
            It's also why our aftercare works. A local team can be on site the same day, not
            three weeks after a call centre eventually escalates the ticket.
          </>
        }
      />

      <section className="py-16 px-5 lg:py-32 lg:px-16 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-10 lg:mb-14 text-center">
            <h2 className="font-display font-light text-[clamp(2rem,3.5vw,3rem)] tracking-tight text-[#111111] mb-4">
              Recent work near you.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {recentWork.map(({ location, note }) => (
              <div key={location} className="flex items-start gap-3 border-b border-black/[0.07] pb-5">
                <div className="w-px h-5 bg-accent shrink-0 mt-1" />
                <div>
                  <p className="font-sans text-[0.8rem] font-medium text-[#111111]">{location}</p>
                  <p className="text-[#374151] text-sm font-light">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationSection
        heading="Let's talk about your project."
        description="A free 30-minute discovery call. Tell us where you are and what you have in mind, and we'll let you know honestly what's possible."
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
