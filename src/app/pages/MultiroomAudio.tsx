import { Bluetooth, VolumeX, Rows3 } from "lucide-react"
import multiroomImg from "../../imports/multiroom-audio.webp"
import discoveryCallImg from "../../imports/discovery-call.webp"
import designSpecificationImg from "../../imports/design-specification-1.webp"
import handoverImg from "../../imports/handover-support.webp"
import testimonial1Img from "../../imports/testimonial-1.webp"
import testimonial2Img from "../../imports/testimonial-2.webp"
import { ServiceHero } from "../components/marketing/ServiceHero"
import { PainPointSection } from "../components/marketing/PainPointSection"
import { BridgeSection } from "../components/marketing/BridgeSection"
import { CapabilitySection } from "../components/marketing/CapabilitySection"
import { ComparisonSection } from "../components/marketing/ComparisonSection"
import { ProcessSection } from "../components/marketing/ProcessSection"
import { ProjectProofSection } from "../components/marketing/ProjectProofSection"
import { FaqSection } from "../components/marketing/FaqSection"
import { ConsultationSection } from "../components/marketing/ConsultationSection"

const installImg = "https://images.unsplash.com/photo-1558379850-3f3d1ba6bf2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
const wholeHomeImg = "https://images.unsplash.com/photo-1545454675-3531b543be5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
const zonedImg = "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"

const capabilityImages = [
  "https://images.unsplash.com/photo-1545454675-3531b543be5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1558379850-3f3d1ba6bf2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1512446816042-444d641267d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
]

const painPoints = [
  { Icon: Bluetooth, label: "Bluetooth chaos", quote: '"Every room has its own bluetooth speaker. Half the time they\'re fighting over which phone is connected."' },
  { Icon: VolumeX, label: "Inconsistent quality", quote: '"The kitchen speaker sounds tinny, the living room soundbar is fine, and the bedroom has nothing at all."' },
  { Icon: Rows3, label: "No zone control", quote: '"We can\'t play different music in different rooms, or turn it all off from one place. It\'s all or nothing."' },
]

const capabilities = [
  { label: "Zone control", image: capabilityImages[0], copy: "Every room its own zone — the kitchen on one playlist, the garden on another, or the whole home in sync for a party. Controlled from a single app." },
  { label: "Sound quality", image: capabilityImages[1], copy: "Architectural speakers selected and placed for the acoustics of each specific room, not a one-size-fits-all soundbar. Sonos, Sonance, and Bowers & Wilkins systems calibrated on install." },
  { label: "Streaming & sources", image: capabilityImages[2], copy: "Every streaming service, vinyl, and radio station available in every room, without a single extra box or remote to manage." },
  { label: "Outdoor audio", image: capabilityImages[3], copy: "Weatherproof architectural speakers for the garden, terrace, or pool area — genuinely built for the outdoors, not a bluetooth speaker left out in the rain." },
  { label: "Whole-home sync", image: capabilityImages[4], copy: "Perfectly synchronised audio across every zone, so moving between rooms never means a jarring gap or an echo between speakers." },
  { label: "Control", image: capabilityImages[5], copy: "One app for the household, physical keypads for guests, voice control for everyone else. No account logins required to change the song." },
]

const comparisonPanels = [
  {
    image: wholeHomeImg,
    imageAlt: "Open-plan contemporary home with architectural speakers integrated throughout",
    eyebrow: "For homes wanting every room covered",
    title: "Whole-Home Audio",
    description: "Every room in the house — indoors and out — wired into one system, with independent zone control and perfectly synchronised playback wherever you are.",
    features: [
      "Architectural speakers in every principal room",
      "Independent zone control, room by room",
      "Outdoor zones for garden and terrace",
      "Sonos, Sonance, or Bowers & Wilkins systems",
      "Single app control for the whole household",
    ],
    priceLabel: "Investment from",
    price: "£12,000",
  },
  {
    image: zonedImg,
    imageAlt: "Single living room with discreet architectural speaker installation",
    eyebrow: "For getting started in the rooms that matter most",
    title: "Zoned Starter System",
    description: "Two or three key rooms — the kitchen, living room, primary bedroom — done properly, with the ability to expand room by room as your needs grow.",
    features: [
      "Architectural speakers in 2–3 chosen rooms",
      "Wireless-first for minimal disruption",
      "Expandable to whole-home later",
      "Streaming from any service, any room",
    ],
    priceLabel: "Investment from",
    price: "£4,000",
  },
]

const processSteps = [
  { num: "01", title: "Discovery call", desc: "30 minutes to understand which rooms matter most, how your household listens, and what \"good\" sounds like to you.", image: discoveryCallImg },
  { num: "02", title: "Design & specification", desc: "A room-by-room speaker plan and cabling route, with a fixed-price quotation before any work begins.", image: designSpecificationImg },
  { num: "03", title: "Installation", desc: "Discreet, tidy installation around your household — most zoned systems complete in a single day.", image: installImg },
  { num: "04", title: "Handover & support", desc: "A walkthrough of the app with everyone in the household, and a direct line to the team who built it.", image: handoverImg },
]

const projects = [
  {
    image: testimonial1Img,
    location: "Whole-home audio — Sevenoaks, Kent",
    description: "Eight-zone Sonos and architectural speaker system covering every principal room plus the garden terrace, controlled from a single app for the whole family.",
    quote: "We'd had a dreadful experience with another company. These chaps were the complete opposite — meticulous, communicative, and the result is beyond anything we'd imagined.",
    client: "J. Rutherford, Sevenoaks, Kent",
  },
  {
    image: testimonial2Img,
    location: "Zoned starter system — Richmond, London",
    description: "A three-zone system covering the kitchen, living room, and primary bedroom, installed wirelessly in a single day with no disruption to a recently renovated home.",
    quote: "It was meant to be a small job and they treated it like one — in and out in a day, and it sounds better than systems friends paid three times as much for.",
    client: "E. Davies, Richmond, London",
  },
]

const faqs = [
  { q: "We already have Sonos speakers — can you build on what we have?", a: "In most cases, yes. We'll assess your existing kit during the design consultation and integrate it into a properly specified system rather than asking you to replace everything. Where an upgrade genuinely improves the result, we'll explain exactly why before recommending it." },
  { q: "Do outdoor speakers actually survive an English winter?", a: "Properly specified architectural outdoor speakers are built for permanent outdoor installation — rated for rain, frost, and direct sun, not a consumer bluetooth speaker brought in when it rains. We only fit systems designed to stay outside year-round." },
  { q: "Does every room need to be wired, or can it be wireless?", a: "Most of our systems are a mix — wired for the best sound quality where practical, wireless where a room can't be chased for cable without redecorating. We'll recommend the right balance for your home rather than defaulting to either." },
  { q: "Can different rooms really play different music at the same time?", a: "Yes — that's the whole point of proper zone control. Each room operates independently unless you choose to group them, so the kitchen can be on one playlist while the living room plays something else entirely, all managed from the same app." },
]

export default function MultiroomAudio() {
  return (
    <>
      <ServiceHero
        image={multiroomImg}
        imageAlt="Multiroom audio system installed throughout a premium home"
        eyebrow="Multiroom Audio — London & the South East"
        heading="Music that follows you through the house."
        description="Not a bluetooth speaker in every room, fighting over whose phone is connected. A properly designed system with independent zones, real sound quality, and one app for the whole household."
        primaryCta={{ label: "Book a free design consultation", targetId: "consultation" }}
        secondaryCta={{ label: "See our audio projects", targetId: "projects" }}
      />

      <PainPointSection heading="Sound familiar?" points={painPoints} />

      <BridgeSection
        eyebrow="It doesn't need to be like this."
        heading="Every room should sound like it was designed for music, because it was."
        body={
          <>
            The best multiroom systems don't announce themselves with visible speakers or
            fiddly apps. The sound simply belongs in the room — full where it needs to be
            heard, silent where it doesn't, and perfectly in sync as you move through the house.
            <br /><br />
            That's what we design. And it starts with how your household actually listens,
            not a catalogue of speaker brands.
          </>
        }
      />

      <CapabilitySection
        heading="Everything that makes the difference."
        intro="Every decision we make — speaker placement, zone layout, source selection — is made in service of one thing: music that sounds right, wherever you are in the house."
        baseImage={multiroomImg}
        baseImageAlt="Multiroom audio control interface in a premium home"
        capabilities={capabilities}
      />

      <ComparisonSection heading="Which system is right for your home?" panels={comparisonPanels} />

      <ProcessSection
        heading={<>We make the whole process effortless.<br />Here's how.</>}
        subheading="No pressure to commit. No speaker recommendations before we've heard how you listen."
        steps={processSteps}
      />

      <ProjectProofSection
        id="projects"
        heading="Don't take our word for it."
        subheading="Every project below is a real home. Every quote is unsolicited."
        projects={projects}
        viewAllLabel="View all our projects"
      />

      <FaqSection heading="Questions you might have" faqs={faqs} />

      <ConsultationSection
        heading="Your system begins with a conversation."
        description="A free 30-minute discovery call. We'll listen to which rooms matter most, tell you honestly what's achievable, and give you a clear picture of what's involved."
        projectLabel="Brief description of your rooms or requirements"
        interestLabel="Interest"
        interestOptions={[
          { value: "whole-home", label: "Whole-Home Audio" },
          { value: "zoned", label: "Zoned Starter System" },
          { value: "outdoor", label: "Outdoor Audio" },
          { value: "unsure", label: "Not sure yet — happy to be guided" },
        ]}
        submitLabel="Book my free consultation"
        submittedLabel="Thank you — we'll be in touch within one working day."
      />
    </>
  )
}
