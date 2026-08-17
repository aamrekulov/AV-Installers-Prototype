import { useEffect } from "react"
import { Link, Navigate, useParams } from "react-router"
import { ArrowLeft } from "lucide-react"
import { caseStudies } from "../data/caseStudies"
import { ConsultationSection } from "../components/marketing/ConsultationSection"

export default function CaseStudy() {
  const { slug } = useParams()
  const project = caseStudies.find((c) => c.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) return <Navigate to="/portfolio" replace />

  return (
    <>
      <section className="relative min-h-[70vh] flex items-end bg-[#080a0c] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080a0c] via-[#080a0c]/50 to-[#080a0c]/10" />
        </div>

        <div className="relative z-10 w-full px-5 py-14 lg:px-16 lg:py-20">
          <div className="max-w-[1400px] mx-auto">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-sans text-[0.68rem] uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={13} />
              Back to Our Work
            </Link>
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.22em] text-white/60 mb-4 block">
              {project.category} — {project.location}
            </span>
            <h1 className="font-display font-light text-white leading-[1.1] tracking-[-0.02em] text-[clamp(2.2rem,4.5vw,3.8rem)] max-w-[900px]">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-10 px-5 lg:px-16 bg-white border-b border-black/[0.07]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Service", value: project.facts.service },
            { label: "Location", value: project.facts.location },
            { label: "Duration", value: project.facts.duration },
            { label: "Investment", value: project.facts.investment },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-[#6b7280] mb-2">{label}</p>
              <p className="font-display font-light text-[1.2rem] text-[#111111]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-5 lg:py-32 lg:px-16 bg-white">
        <div className="max-w-[720px] mx-auto space-y-16">
          {[
            { label: "The Brief", text: project.narrative.brief },
            { label: "The Design", text: project.narrative.design },
            { label: "The Result", text: project.narrative.result },
          ].map(({ label, text }) => (
            <div key={label}>
              <p className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-accent mb-4">{label}</p>
              <p className="text-[#374151] text-lg font-light leading-[1.85]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-5 lg:px-16 lg:pb-16 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.gallery.map((src, i) => (
            <div key={i} className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img src={src} alt={`${project.title} — detail ${i + 1}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-5 lg:py-32 lg:px-16 bg-[#080a0c]">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="w-10 h-px bg-accent mx-auto mb-10" />
          <blockquote className="font-display font-light italic text-white text-[clamp(1.3rem,2.5vw,1.9rem)] leading-[1.6] mb-8">
            "{project.quote}"
          </blockquote>
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.15em] text-white/45">{project.client}</p>
        </div>
      </section>

      <section className="py-12 px-5 lg:px-16 bg-white text-center border-b border-black/[0.07]">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 font-sans text-[0.7rem] uppercase tracking-[0.15em] text-[#111111] hover:text-accent transition-colors duration-300"
        >
          <ArrowLeft size={13} />
          View more of our work
        </Link>
      </section>

      <ConsultationSection
        heading="Your project could be next."
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
