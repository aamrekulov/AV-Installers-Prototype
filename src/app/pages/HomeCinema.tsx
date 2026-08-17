import { Monitor, Layers, PhoneOff } from "lucide-react"
import heroCinemaImg from "../../imports/testimonial-2.webp"
import designSpecificationImg from "../../imports/design-specification-1.webp"
import smartHomeImg from "../../imports/smart-home-automation.webp"
import multiroomImg from "../../imports/multiroom-audio.webp"
import discoveryCallImg from "../../imports/discovery-call.webp"
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

const capabilityImages = [
  "https://images.unsplash.com/photo-1762541693135-fb989de961e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1761294364444-09faad3bf1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1770370718162-ae91c1643354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1668891451335-40e811042e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1746439324737-2c9f9a3e81a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1650682009477-52fd77302b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
]

const dedicatedCinemaImg = "https://images.unsplash.com/photo-1774619755413-7c31ab3aabc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
const mediaRoomImg = "https://images.unsplash.com/photo-1780042731953-15dd1b3b5f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"

const painPoints = [
  { Icon: Monitor, label: "Disappointment", quote: '"We spent serious money on a TV and a soundbar. It\'s fine. But it\'s just... fine."' },
  { Icon: Layers, label: "Complexity", quote: '"The room\'s never quite right — too bright, too echoey, the bass rattling the windows. Nobody can agree on the settings."' },
  { Icon: PhoneOff, label: "Broken promises", quote: '"The company who sold us the system had moved on to the next job before we\'d figured out how to use this one."' },
]

const capabilities = [
  { label: "Picture", image: capabilityImages[0], copy: "4K laser projection or high-end display. Calibrated to the room, not to factory settings. Screen Research, Sony, and Epson systems selected for your specific dimensions and ambient light conditions." },
  { label: "Sound", image: capabilityImages[1], copy: "Dolby Atmos object-based audio with ceiling, wall, and floor channels placed precisely for your room geometry. Not approximate. Not close enough. Precisely." },
  { label: "Acoustics", image: capabilityImages[2], copy: "Fabric wall panels, bass traps, diffusers and ceiling treatment — designed to look architectural rather than technical. The room becomes the instrument." },
  { label: "Lighting", image: capabilityImages[3], copy: "Scene-based lighting that transitions from arrival, to previews, to feature — automatically, or at the touch of one button. No white light spilling onto the screen. No compromise." },
  { label: "Seating & layout", image: capabilityImages[4], copy: "Fixed tiered seating or flexible arrangements. We work with interior designers and furniture suppliers who understand cinema acoustics — or with yours, if you already have a relationship." },
  { label: "Control", image: capabilityImages[5], copy: "One button. Or one voice command. Or nothing at all — if you want the room to know what you need before you ask. Control4 and Savant systems that the whole family can operate without instruction." },
]

const comparisonPanels = [
  {
    image: dedicatedCinemaImg,
    imageAlt: "Cinema auditorium with red seats and projector beam — dedicated cinema room",
    eyebrow: "For rooms used exclusively for cinema",
    title: "Dedicated Cinema Room",
    description: "A purpose-designed space with full acoustic treatment, fixed tiered seating, and complete light control. The gold standard of home cinema — and the closest experience to a professional screening room you can create in a private home.",
    features: [
      "Full acoustic design and treatment",
      "Laser projector with 4K mastering-grade picture",
      "Dolby Atmos with 7.1.4 or greater speaker configuration",
      "Tiered or raked fixed seating",
      "Full light lock and scene-based lighting control",
      "Dedicated AV rack with remote monitoring",
    ],
    priceLabel: "Investment from",
    price: "£35,000",
  },
  {
    image: mediaRoomImg,
    imageAlt: "Minimalist living room with concealed TV and elegant media integration",
    eyebrow: "For rooms that serve more than one purpose",
    title: "Media Room",
    description: "A living room, family room, or study that becomes a cinema when you want it to — and disappears back into a beautiful room when you don't. Concealed screens, wireless systems, and furniture-friendly speaker placement that leave no trace of the technology during the day.",
    features: [
      "Large format display or motorised projector screen",
      "Architectural speaker installation",
      "Acoustic optimisation within the room's existing character",
      "Automated lighting and blind control",
      "Single-app control integrated with the rest of the home",
    ],
    priceLabel: "Investment from",
    price: "£15,000",
  },
]

const processSteps = [
  { num: "01", title: "Discovery call", desc: "30 minutes. We talk through your room, your household, how you watch, and what you've imagined. We'll tell you honestly whether your space will work and what it would take.", image: discoveryCallImg },
  { num: "02", title: "Room assessment & design", desc: "We visit the room. We measure, assess acoustics, map cable routes, and design the system around your space. A detailed design proposal with a fixed-price quotation — not a range.", image: designSpecificationImg },
  { num: "03", title: "Installation", desc: "We work around your household. Tidy, careful with your finishes, and communicative throughout. Most installations complete in three to five days. We don't leave until everything works perfectly.", image: multiroomImg },
  { num: "04", title: "Handover & ongoing support", desc: "A thorough walkthrough with everyone in the household. A direct number for the team who built it. Remote monitoring included as standard, so we often resolve issues before you notice them.", image: handoverImg },
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
  { q: "My room isn't purpose-built. Can you still create a proper cinema?", a: "Most of the rooms we work with weren't built with cinema in mind. A dedicated cinema room is the ideal, but a beautifully executed media room in a living space — with the right screen, the right acoustics, and the right control — can be a genuinely impressive experience. We'll tell you honestly what your room can achieve during the design consultation, before any commitment is made." },
  { q: "How disruptive is the installation?", a: "Less than you'd expect. Most installations complete in three to five days. We protect your floors, keep the work contained, and leave each day tidier than we arrived. Where cabling needs to be routed through finished walls, we use discreet techniques developed specifically to avoid redecoration. We'll walk you through exactly what to expect during the design phase so there are no surprises." },
  { q: "Can the cinema integrate with the rest of our smart home?", a: "Yes — and it should. A properly designed cinema room integrates seamlessly with your lighting, blinds, heating, and whole-home audio system. Walking into the room and pressing play should trigger everything: lights to scene, blinds closed, system on. If you already have a smart home system, we'll work with what's there. If you're starting from scratch, we'll design both together." },
  { q: "What happens if something stops working?", a: "We monitor your system remotely and resolve most issues before you're even aware of them. If you do notice something, you ring us directly — not a call centre, not a support ticket system — and speak to the team who built your room. We don't consider the job finished when the invoice is paid. The relationship is ongoing, by design." },
]

export default function HomeCinema() {
  return (
    <>
      <ServiceHero
        image={heroCinemaImg}
        imageAlt="Beautifully lit dedicated home cinema room with deep armchairs and large projection screen"
        eyebrow="Home Cinema Design & Installation — London & the South East"
        heading="The cinema you always imagined your home could have."
        description="Not a projector bolted to the ceiling. Not a soundbar pointed at a wall. A genuinely immersive experience — designed around your room, your household, and the way you actually want to spend an evening."
        primaryCta={{ label: "Book a free design consultation", targetId: "consultation" }}
        secondaryCta={{ label: "See our cinema projects", targetId: "projects" }}
      />

      <PainPointSection heading="Sound familiar?" points={painPoints} />

      <BridgeSection
        eyebrow="It doesn't need to be like this."
        heading="A home cinema should make you forget you're watching a screen."
        body={
          <>
            The finest cinema experiences don't announce themselves. The picture doesn't strain.
            The sound doesn't overwhelm. The lighting adjusts without being asked. Everything
            disappears — and all that remains is the film, the family, and the room you're
            genuinely glad you created.
            <br /><br />
            That's what we design. And it begins with understanding your home, not with a
            catalogue of equipment.
          </>
        }
      />

      <CapabilitySection
        heading="Everything that makes the difference."
        intro="Every decision we make — screen size, projector placement, acoustic treatment, seating, lighting — is made in service of one thing: the experience of being in that room."
        baseImage={smartHomeImg}
        baseImageAlt="Precision acoustic panelling and cinema detail in a minimalist AV installation"
        capabilities={capabilities}
      />

      <ComparisonSection heading="Which type of cinema is right for your home?" panels={comparisonPanels} />

      <ProcessSection
        heading={<>We make the whole process effortless.<br />Here's how.</>}
        subheading="No pressure to commit. No equipment recommendations before we've understood the room."
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
        heading="Your cinema begins with a conversation."
        description="A free 30-minute discovery call. We'll listen to what you have in mind, tell you honestly what your space can achieve, and give you a clear picture of what's involved — before you commit to anything."
        projectLabel="Brief description of your room or project"
        interestLabel="Interest"
        interestOptions={[
          { value: "dedicated", label: "Dedicated Cinema Room" },
          { value: "media-room", label: "Media Room" },
          { value: "unsure", label: "Not sure yet — happy to be guided" },
        ]}
        submitLabel="Book my free consultation"
        submittedLabel="Thank you — we'll be in touch within one working day."
      />
    </>
  )
}
