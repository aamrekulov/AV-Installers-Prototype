import { UserX, PhoneMissed, TrendingDown } from "lucide-react"
import systemCareImg from "../../imports/system-care-and-aftercare.webp"
import { ServiceHero } from "../components/marketing/ServiceHero"
import { PainPointSection } from "../components/marketing/PainPointSection"
import { BridgeSection } from "../components/marketing/BridgeSection"
import { CapabilitySection } from "../components/marketing/CapabilitySection"
import { ComparisonSection } from "../components/marketing/ComparisonSection"
import { FaqSection } from "../components/marketing/FaqSection"
import { ConsultationSection } from "../components/marketing/ConsultationSection"

const capabilityImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1560264280-88b68371db39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
]

const standardImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
const priorityImg = "https://images.unsplash.com/photo-1560264280-88b68371db39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"

const painPoints = [
  { Icon: UserX, label: "Vanishing act", quote: '"The installer disappeared after the final payment. Calls go straight to voicemail."' },
  { Icon: PhoneMissed, label: "No one to call", quote: '"Something\'s not working and there\'s genuinely no one to ring. The company that fitted it doesn\'t exist anymore."' },
  { Icon: TrendingDown, label: "Silent drift", quote: '"It worked perfectly on day one. Eighteen months later half of it is out of sync and we never noticed it happening."' },
]

const capabilities = [
  { label: "Remote monitoring", image: capabilityImages[0], copy: "Your system is watched around the clock, so a fault is often caught and resolved before you've noticed anything's wrong." },
  { label: "Annual servicing", image: capabilityImages[1], copy: "A scheduled visit every year to recalibrate, update, and health-check every part of your system — not just wait for something to break." },
  { label: "Priority support line", image: capabilityImages[2], copy: "A direct number to the team who actually knows your system, answered by a person — never a call centre, never a ticket queue." },
  { label: "Firmware & updates", image: capabilityImages[3], copy: "Software and firmware kept current across every device, so your system stays secure and compatible as manufacturers roll out changes." },
  { label: "Emergency callout", image: capabilityImages[4], copy: "A guaranteed response window when something needs a hands-on visit, not an open-ended \"someone will be in touch.\"" },
  { label: "Health reports", image: capabilityImages[5], copy: "A plain-English summary after every visit — what was checked, what was fixed, and what to keep an eye on before it becomes a problem." },
]

const carePlans = [
  {
    image: standardImg,
    imageAlt: "Technician reviewing a system health dashboard",
    eyebrow: "For systems that just need to be looked after",
    title: "Standard Care",
    description: "Ongoing monitoring and a yearly service visit, with support during business hours from the team who understands your system.",
    features: [
      "24/7 remote system monitoring",
      "One scheduled service visit per year",
      "Business-hours priority support line",
      "48-hour callout response window",
      "Firmware & software kept current",
    ],
    priceLabel: "From",
    price: "£45/month",
  },
  {
    image: priorityImg,
    imageAlt: "Engineer performing an emergency callout at a client home",
    eyebrow: "For systems that can't afford downtime",
    title: "Priority Care",
    description: "Everything in Standard Care, plus faster response times and a proactive check-in schedule for households who use their system daily.",
    features: [
      "24/7 remote system monitoring",
      "Two scheduled service visits per year",
      "24/7 priority support line",
      "Same-day callout response window",
      "Proactive quarterly health check-ins",
    ],
    priceLabel: "From",
    price: "£95/month",
  },
]

const faqs = [
  { q: "Do you only support systems you installed yourselves?", a: "No. We regularly take on care plans for systems installed by other companies, including ones that are no longer trading. We'll start with an assessment visit to understand what's there before proposing a plan, so there are no surprises." },
  { q: "What actually happens during the annual service visit?", a: "We check every device against its intended configuration, recalibrate anything that's drifted, update firmware and software, inspect cabling and connections, and test every automation and scene. You'll get a plain-English report afterwards covering what was found and fixed." },
  { q: "What's the difference between the response windows?", a: "Standard Care guarantees a response within 48 hours for anything that needs a hands-on visit. Priority Care guarantees same-day response, which matters most for households that rely on their system daily or use it for work." },
  { q: "Is this a long-term contract, or can we leave if it's not working for us?", a: "Care plans run on a rolling monthly basis with no long-term tie-in. If a plan isn't delivering, you can cancel with 30 days' notice — we'd rather earn the renewal than lock you into one." },
]

export default function SystemCare() {
  return (
    <>
      <ServiceHero
        image={systemCareImg}
        imageAlt="Professional system care and aftercare support"
        eyebrow="System Care & Aftercare — London & the South East"
        heading="Your system, looked after properly."
        description="Not a vanishing installer or a voicemail that never gets returned. Ongoing monitoring, scheduled servicing, and a direct line to a team who actually knows your home."
        primaryCta={{ label: "Talk to our support team", targetId: "consultation" }}
        secondaryCta={{ label: "See our care plans", targetId: "plans" }}
      />

      <PainPointSection heading="Sound familiar?" points={painPoints} />

      <BridgeSection
        eyebrow="It doesn't need to be like this."
        heading="A system shouldn't be your problem the moment the invoice is paid."
        body={
          <>
            The best aftercare is the kind you rarely notice, because most issues are caught
            and resolved before you're even aware of them. When something does need a person,
            it should be a straightforward call to someone who already knows your system —
            not a search for a company that might still exist.
            <br /><br />
            That's the relationship we build. It doesn't end at handover — it's just getting started.
          </>
        }
      />

      <CapabilitySection
        heading="What's covered."
        intro="Every part of a care plan is built around one thing: catching problems before you do, and making it effortless when you need a person."
        baseImage={systemCareImg}
        baseImageAlt="System care technician working on a home automation panel"
        capabilities={capabilities}
      />

      <div id="plans">
        <ComparisonSection heading="Which level of cover is right for your system?" panels={carePlans} />
      </div>

      <FaqSection heading="Questions you might have" faqs={faqs} />

      <ConsultationSection
        heading="Let's get your system properly looked after."
        description="A free 15-minute call. Tell us what you already have, and we'll recommend the right level of cover — no obligation, no pressure."
        projectLabel="Brief description of your current system"
        interestLabel="Interest"
        interestOptions={[
          { value: "standard", label: "Standard Care" },
          { value: "priority", label: "Priority Care" },
          { value: "unsure", label: "Not sure yet — happy to be guided" },
        ]}
        submitLabel="Talk to our support team"
        submittedLabel="Thank you — we'll be in touch within one working day."
      />
    </>
  )
}
