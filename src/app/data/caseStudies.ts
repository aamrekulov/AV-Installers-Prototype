import testimonial1Img from "../../imports/testimonial-1.webp"
import testimonial2Img from "../../imports/testimonial-2.webp"
import testimonial3Img from "../../imports/testimonial-3.webp"
import installationImg from "../../imports/installation.webp"
import designSpecificationImg from "../../imports/design-specification-1.webp"
import smartHomeImg from "../../imports/smart-home-automation.webp"
import secondImg from "../../imports/second-image.webp"
import multiroomImg from "../../imports/multiroom-audio.webp"
import systemCareImg from "../../imports/system-care-and-aftercare.webp"
import handoverImg from "../../imports/handover-support.webp"

export type ServiceCategory = "Home Cinema" | "Smart Home Automation" | "Multiroom Audio" | "System Care & Aftercare"

export type CaseStudy = {
  slug: string
  category: ServiceCategory
  title: string
  location: string
  heroImage: string
  cardImage: string
  summary: string
  gallery: string[]
  facts: { service: string; location: string; duration: string; investment: string }
  narrative: { brief: string; design: string; result: string }
  quote: string
  client: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cobham-dedicated-cinema-room",
    category: "Home Cinema",
    title: "A seven-seat cinema, built into a period home",
    location: "Cobham, Surrey",
    heroImage: testimonial1Img,
    cardImage: testimonial1Img,
    summary: "A converted basement that sat unused became a full Dolby Atmos cinema the family use several nights a week.",
    gallery: [
      installationImg,
      designSpecificationImg,
      "https://images.unsplash.com/photo-1489599162946-2a1e1e6cff5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    facts: { service: "Home Cinema", location: "Cobham, Surrey", duration: "6 weeks", investment: "£38,000" },
    narrative: {
      brief: "The client had converted their basement but knew immediately the pre-installed kit wasn't right — the room sat unused because it simply wasn't enjoyable to be in. They wanted a proper dedicated cinema, not another TV room with the lights off.",
      design: "We stripped the room back to the shell and designed around acoustic treatment first: fabric wall panels, a bass-trapped rear wall, and raked seating for genuine sightlines to a 4K laser projector and 120-inch acoustically transparent screen. Every cable route was planned before a single panel went up.",
      result: "A seven-seat Dolby Atmos cinema that the family now uses several nights a week — not just for films, but for the football, for the kids' cartoons on a Sunday morning, for everything. The acoustic treatment means none of it bothers the rest of the house.",
    },
    quote: "We'd looked at other companies. The difference was that these were the only ones who talked about the room before they talked about the kit. That told us everything.",
    client: "M. Harrison, Cobham, Surrey",
  },
  {
    slug: "richmond-full-home-automation",
    category: "Smart Home Automation",
    title: "One system, four storeys, no visible wiring",
    location: "Richmond, London",
    heroImage: testimonial2Img,
    cardImage: testimonial2Img,
    summary: "A full renovation gave us the rare chance to design a Control4 system in from first principles, not retrofit it.",
    gallery: [
      smartHomeImg,
      secondImg,
      "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    facts: { service: "Smart Home Automation", location: "Richmond, London", duration: "10 weeks", investment: "£31,000" },
    narrative: {
      brief: "A full renovation of a four-storey townhouse gave us the rare opportunity to design a smart home system in from first principles, rather than retrofitting around finished walls.",
      design: "We specified a Control4 backbone with structured cabling to every floor, zoned climate control per room, and a lighting design built around how the family actually uses each space — arrival scenes, evening scenes, and a single \"goodnight\" button that secures the whole house.",
      result: "Lighting, heating, blinds, and security now run from one interface, with no wall clutter and no visible cabling anywhere in the finished house. The system has run without a single fault since handover.",
    },
    quote: "The level of integration is flawless. The lighting, climate, and music all respond seamlessly without a single visible cable or obtrusive panel. It's exactly the premium experience we wanted.",
    client: "E. Davies, Richmond, London",
  },
  {
    slug: "sevenoaks-whole-home-audio",
    category: "Multiroom Audio",
    title: "Eight zones, one app, every room covered",
    location: "Sevenoaks, Kent",
    heroImage: testimonial3Img,
    cardImage: testimonial3Img,
    summary: "A scatter of bluetooth speakers became one properly zoned system — garden terrace included.",
    gallery: [
      multiroomImg,
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    facts: { service: "Multiroom Audio", location: "Sevenoaks, Kent", duration: "4 weeks", investment: "£14,500" },
    narrative: {
      brief: "The family had accumulated a scatter of bluetooth speakers across the house and wanted something that actually worked as one system — including the garden terrace, which had nothing at all.",
      design: "We specified architectural Sonos and Sonance speakers zoned to eight areas, including a weatherproofed outdoor zone for the terrace and pool area, all wired during a two-week first-fix window before decoration.",
      result: "Every room — and the garden — now plays perfectly synchronised audio from a single app, with independent control so the kitchen can be on one playlist while the living room plays something else entirely.",
    },
    quote: "We'd had a dreadful experience with another company. These chaps were the complete opposite — meticulous, communicative, and the result is beyond anything we'd imagined.",
    client: "J. Rutherford, Sevenoaks, Kent",
  },
  {
    slug: "windsor-priority-care",
    category: "System Care & Aftercare",
    title: "Picking up a system another company walked away from",
    location: "Windsor, Berkshire",
    heroImage: "https://images.unsplash.com/photo-1560264280-88b68371db39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    cardImage: "https://images.unsplash.com/photo-1560264280-88b68371db39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    summary: "An eighteen-month-old system that had drifted badly out of calibration, brought back under a Priority Care plan.",
    gallery: [
      systemCareImg,
      handoverImg,
      "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    ],
    facts: { service: "System Care & Aftercare", location: "Windsor, Berkshire", duration: "Ongoing — Priority Care", investment: "£95/month" },
    narrative: {
      brief: "The client's existing smart home and cinema system — installed by a company that had since stopped trading — had drifted badly out of calibration over eighteen months, with several automations no longer working at all.",
      design: "We began with a full system audit rather than assuming what needed fixing, then brought every device back to its intended configuration, updated firmware across the board, and moved the household onto a Priority Care plan with quarterly check-ins.",
      result: "The system now runs the way it was originally meant to, with remote monitoring catching the kind of drift that caused the original problem before it becomes noticeable again.",
    },
    quote: "\"Something's not working and there's genuinely no one to ring anymore\" was where we started. Eighteen months on, we've never had to think about it since.",
    client: "R. Fenwick, Windsor, Berkshire",
  },
]

export const serviceCategories: ServiceCategory[] = ["Home Cinema", "Smart Home Automation", "Multiroom Audio", "System Care & Aftercare"]
