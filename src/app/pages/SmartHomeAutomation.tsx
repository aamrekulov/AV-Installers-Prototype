import { Smartphone, WifiOff, Puzzle } from "lucide-react"
import smartHomeImg from "../../imports/smart-home-automation.webp"
import discoveryCallImg from "../../imports/discovery-call.webp"
import designSpecificationImg from "../../imports/design-specification-1.webp"
import handoverImg from "../../imports/handover-support.webp"
import testimonial2Img from "../../imports/testimonial-2.webp"
import testimonial3Img from "../../imports/testimonial-3.webp"
import { ServiceHero } from "../components/marketing/ServiceHero"
import { PainPointSection } from "../components/marketing/PainPointSection"
import { BridgeSection } from "../components/marketing/BridgeSection"
import { CapabilitySection } from "../components/marketing/CapabilitySection"
import { ComparisonSection } from "../components/marketing/ComparisonSection"
import { ProcessSection } from "../components/marketing/ProcessSection"
import { ProjectProofSection } from "../components/marketing/ProjectProofSection"
import { FaqSection } from "../components/marketing/FaqSection"
import { ConsultationSection } from "../components/marketing/ConsultationSection"

const installImg = "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
const newBuildImg = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
const retrofitImg = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"

const capabilityImages = [
  "https://images.unsplash.com/photo-1558002038-2f3d5c1c9c5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1567925086983-b7a4d5b03fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1512446816042-444d641267d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1558002038-bb0237f4e204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
]

const painPoints = [
  { Icon: Smartphone, label: "App overload", quote: '"We\'ve got six different apps for lights, heating, blinds, and the alarm. Nobody in the house knows which one does what."' },
  { Icon: WifiOff, label: "Unreliable", quote: '"The lights switch themselves off at random. The blinds ignore commands half the time. It\'s meant to make life easier."' },
  { Icon: Puzzle, label: "No integration", quote: '"The builder\'s electrician fitted smart switches. They don\'t talk to the heating, or the blinds, or each other."' },
]

const capabilities = [
  { label: "Lighting", image: capabilityImages[0], copy: "Scene-based lighting across every room, tuned to the time of day and how you actually use the space. Lutron and Control4 systems that respond to a single tap, a voice command, or nothing at all." },
  { label: "Climate", image: capabilityImages[1], copy: "Zoned heating and cooling that learns your household's routine, with individual room control instead of one thermostat guessing for the whole house." },
  { label: "Blinds & shading", image: capabilityImages[2], copy: "Motorised blinds and curtains on scenes or schedules — closed for a film, open for the morning light, all without anyone touching a wall switch." },
  { label: "Security & access", image: capabilityImages[3], copy: "Video entry, smart locks, and monitored alarm integration, all inside the same interface as everything else — not a separate app you forget exists." },
  { label: "Voice & app control", image: capabilityImages[4], copy: "One app for the household, voice control for everyone else. Built to be intuitive enough that a houseguest can operate it without being told how." },
  { label: "Scenes & automation", image: capabilityImages[5], copy: "\"Leaving the house\" turns everything off. \"Movie night\" sets the lights, blinds, and screen in one press. The home does the thinking." },
]

const comparisonPanels = [
  {
    image: newBuildImg,
    imageAlt: "Contemporary new-build home with clean structured wiring routes",
    eyebrow: "For new builds and full renovations",
    title: "Structured Wired Backbone",
    description: "Wired where it matters, wireless where it's smarter — designed in at first-fix stage for a system that's rock solid for the life of the house, with no compromises on speed or reliability.",
    features: [
      "First-fix cabling for lighting, AV, and network",
      "Control4 or Savant whole-home backbone",
      "Enterprise-grade wireless network throughout",
      "Zoned climate control integrated at design stage",
      "Fully concealed keypads and in-wall control points",
    ],
    priceLabel: "Investment from",
    price: "£25,000",
  },
  {
    image: retrofitImg,
    imageAlt: "Finished period home living room with no visible smart home wiring",
    eyebrow: "For finished homes, no rewiring required",
    title: "Wireless Retrofit",
    description: "Enterprise-grade wireless automation added to a home you're not prepared to rip apart — most retrofits complete in one to two days with zero redecoration required.",
    features: [
      "Wireless lighting and blind control",
      "Smart heating zoned room by room",
      "Works with most existing switches and sockets",
      "Single app bringing every system together",
      "No plastering, no rewiring, no mess",
    ],
    priceLabel: "Investment from",
    price: "£8,000",
  },
]

const processSteps = [
  { num: "01", title: "Discovery call", desc: "30 minutes to understand your home, your household, and what \"easier\" actually looks like for you day to day.", image: discoveryCallImg },
  { num: "02", title: "Design & specification", desc: "A room-by-room automation plan — what's wired, what's wireless, and a fixed-price quotation before any work begins.", image: designSpecificationImg },
  { num: "03", title: "Installation", desc: "Careful, tidy work around your household, whether that's first-fix cabling in a renovation or a wireless retrofit in a finished home.", image: installImg },
  { num: "04", title: "Handover & support", desc: "A walkthrough with everyone who'll use it, a direct line to the team who built it, and remote monitoring included as standard.", image: handoverImg },
]

const projects = [
  {
    image: testimonial2Img,
    location: "Full-home automation — Richmond, London",
    description: "A four-storey townhouse brought under one Control4 system: lighting, heating, blinds, and security, with structured cabling designed in during a full renovation.",
    quote: "The level of integration is flawless. The lighting, climate, and music all respond seamlessly without a single visible cable or obtrusive panel.",
    client: "E. Davies, Richmond, London",
  },
  {
    image: testimonial3Img,
    location: "Wireless retrofit — Guildford, Surrey",
    description: "A Victorian house automated without touching the plasterwork — wireless lighting scenes and zoned heating fitted around the family's existing routine in under two days.",
    quote: "We assumed it would mean months of building work. It took a day and a half, and nothing about the house looks any different — it just works better.",
    client: "W. Ashford, Guildford, Surrey",
  },
]

const faqs = [
  { q: "Our home is finished and decorated — can you still automate it?", a: "Yes. Most of our smart home work is retrofit into finished homes using enterprise-grade wireless technology, not the consumer gadgets sold in shops. Most installations complete in one to two days with no plastering, no rewiring, and no redecoration needed afterwards." },
  { q: "What happens if the internet or Wi-Fi goes down?", a: "Core functions — lighting scenes, heating schedules, security — continue to work locally even without an internet connection, because the automation logic lives on a processor in your home, not in the cloud. You'd only lose remote access and voice control from outside the house until it's back." },
  { q: "Can you work with the smart devices we already own?", a: "Often, yes. We'll assess what you already have during the design consultation and bring it into the single system where it makes sense to, rather than asking you to throw it all out and start again. Where a device won't integrate cleanly, we'll tell you honestly rather than force a workaround." },
  { q: "How is this different from just buying smart plugs and bulbs myself?", a: "Consumer smart-home kit is built to be bought individually and rarely talks to other brands well — that's usually the app-overload problem we're called in to fix. We design one coherent system from the outset, professionally installed and configured so lighting, climate, blinds, and security genuinely work together." },
]

export default function SmartHomeAutomation() {
  return (
    <>
      <ServiceHero
        image={smartHomeImg}
        imageAlt="Contemporary smart home automation interface and living space"
        eyebrow="Smart Home Automation — London & the South East"
        heading="A home that responds to you, not the other way around."
        description="Not another app to manage. Not gadgets bolted on by whoever wired the house. A single, coherent system for lighting, climate, blinds, and security — designed around how your household actually lives."
        primaryCta={{ label: "Book a free design consultation", targetId: "consultation" }}
        secondaryCta={{ label: "See our smart home projects", targetId: "projects" }}
      />

      <PainPointSection heading="Sound familiar?" points={painPoints} />

      <BridgeSection
        eyebrow="It doesn't need to be like this."
        heading="A smart home should disappear into how you already live."
        body={
          <>
            The best automation is invisible. Lights that anticipate the time of day. Heating
            that already knows the household's routine. A single interface instead of a drawer
            full of remotes and a phone full of apps.
            <br /><br />
            That's what we design — starting with how you actually use your home, not with a
            catalogue of smart devices.
          </>
        }
      />

      <CapabilitySection
        heading="Everything under one system."
        intro="Every automation decision — what's wired, what's wireless, which rooms get their own zone — is made in service of one thing: a home that works without you thinking about it."
        baseImage={smartHomeImg}
        baseImageAlt="Smart home control interface in a contemporary living space"
        capabilities={capabilities}
      />

      <ComparisonSection heading="Which approach is right for your home?" panels={comparisonPanels} />

      <ProcessSection
        heading={<>We make the whole process effortless.<br />Here's how.</>}
        subheading="No pressure to commit. No equipment recommendations before we've understood the home."
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
        heading="Your smart home begins with a conversation."
        description="A free 30-minute discovery call. We'll listen to what's frustrating you now, tell you honestly what's possible in your home, and give you a clear picture of what's involved."
        projectLabel="Brief description of your home or requirements"
        interestLabel="Interest"
        interestOptions={[
          { value: "full-home", label: "Full Home Automation" },
          { value: "lighting-climate", label: "Lighting & Climate Only" },
          { value: "security", label: "Security & Access" },
          { value: "unsure", label: "Not sure yet — happy to be guided" },
        ]}
        submitLabel="Book my free consultation"
        submittedLabel="Thank you — we'll be in touch within one working day."
      />
    </>
  )
}
