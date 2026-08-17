import { useState } from "react"
import { Link } from "react-router"
import { ArrowRight } from "lucide-react"
import { caseStudies, serviceCategories, type ServiceCategory } from "../data/caseStudies"
import { ServiceHero } from "../components/marketing/ServiceHero"
import { ConsultationSection } from "../components/marketing/ConsultationSection"

const heroImg = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"

export default function Portfolio() {
  const [filter, setFilter] = useState<ServiceCategory | "All">("All")
  const filtered = filter === "All" ? caseStudies : caseStudies.filter((c) => c.category === filter)

  return (
    <>
      <ServiceHero
        image={heroImg}
        imageAlt="Completed home cinema and smart home installation"
        eyebrow="Our Work — London & the South East"
        heading="Real homes. Real projects. No stock photography."
        description="Every project below is a real installation for a real household — the brief, the design decisions, and what it actually took to get there."
        primaryCta={{ label: "Book a free consultation", targetId: "consultation" }}
        secondaryCta={{ label: "Browse our projects", targetId: "projects" }}
      />

      <section id="projects" className="py-16 px-5 lg:py-32 lg:px-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-12 lg:mb-16">
            {(["All", ...serviceCategories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-5 py-3 rounded-full font-sans text-[0.75rem] uppercase tracking-[0.1em] transition-all duration-300"
                style={
                  filter === cat
                    ? { background: "#111111", color: "#ffffff", border: "1px solid #111111" }
                    : { background: "transparent", color: "#6b7280", border: "1px solid rgba(0,0,0,0.15)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((project) => (
              <Link
                key={project.slug}
                to={`/portfolio/${project.slug}`}
                className="group bg-[#f8f7f4] overflow-hidden block transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="relative h-80 overflow-hidden bg-[#141414]">
                  <img src={project.cardImage} alt={project.title} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-5 left-6 font-sans text-[0.6rem] uppercase tracking-[0.15em] text-white px-3 py-1.5" style={{ background: "rgba(8,10,12,0.48)", backdropFilter: "blur(4px)" }}>
                    {project.category}
                  </span>
                  <span className="absolute bottom-4 left-5 font-sans text-[0.58rem] uppercase tracking-[0.2em] text-white/70 px-3 py-1.5 bg-transparent group-hover:bg-[rgba(8,10,12,0.44)] group-hover:text-accent transition-colors duration-300">
                    {project.location}
                  </span>
                </div>

                <div className="p-9 lg:p-11">
                  <h2 className="font-display font-light text-[1.4rem] text-[#111111] mb-3">{project.title}</h2>
                  <p className="text-[#374151] text-sm font-light leading-relaxed mb-6">{project.summary}</p>
                  <span className="inline-flex items-center gap-2 font-sans text-[0.68rem] uppercase tracking-[0.15em] text-[#111111] group-hover:text-accent transition-colors duration-300">
                    View case study
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
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
