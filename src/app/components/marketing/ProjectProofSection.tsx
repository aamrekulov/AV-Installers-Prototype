import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router"

export function ProjectProofSection({
  id,
  heading,
  subheading,
  projects,
  viewAllLabel,
}: {
  id?: string
  heading: string
  subheading: string
  projects: { image: string; location: string; description: string; quote: string; client: string }[]
  viewAllLabel: string
}) {
  return (
    <section id={id} className="py-16 px-5 lg:py-36 lg:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-5">
          <h2 className="font-display font-light text-[clamp(2.5rem,4vw,3.5rem)] text-[#111111] mb-3">{heading}</h2>
          <p className="font-sans text-[0.62rem] uppercase tracking-[0.22em] text-black/40">{subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-10 lg:mt-16">
          {projects.map(({ image, location, description, quote, client }) => (
            <div key={client} className="bg-[#f8f7f4] overflow-hidden transition-transform duration-300 hover:-translate-y-0.5">
              <div className="relative h-80 overflow-hidden bg-[#141414]">
                <img src={image} alt={location} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-5 left-6 font-sans text-[0.58rem] uppercase tracking-[0.2em] text-white/70">
                  {location}
                </span>
              </div>

              <div className="p-9 lg:p-11">
                <p className="text-[#374151] text-sm font-light leading-relaxed mb-8">{description}</p>
                <blockquote className="font-display font-light italic text-[1.15rem] leading-[1.6] text-[#111111] mb-6">
                  "{quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-px h-5 bg-accent shrink-0" />
                  <p className="font-sans text-[0.6rem] uppercase tracking-[0.15em] text-black/45">{client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 lg:mt-14">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-[#111111] hover:text-accent transition-colors duration-300 group"
          >
            {viewAllLabel}
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
