import { useState } from "react"
import { Plus } from "lucide-react"

export function FaqSection({ heading, faqs }: { heading: string; faqs: { q: string; a: string }[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-16 px-5 lg:py-36 lg:px-16 bg-[#f8f7f4]">
      <div className="max-w-[760px] mx-auto">
        <h2 className="font-display font-light text-[clamp(2rem,3vw,2.75rem)] text-[#111111] text-center mb-10 lg:mb-16">
          {heading}
        </h2>
        <div>
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="border-b border-black/[0.08]">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between py-7 text-left gap-6 group"
                aria-expanded={openFaq === i}
              >
                <h3 className="font-display font-light text-xl text-[#111111] group-hover:text-accent transition-colors duration-300">
                  {q}
                </h3>
                <div
                  className={`flex-shrink-0 text-black/30 group-hover:text-accent transition-all duration-300 ${
                    openFaq === i ? "rotate-45" : "rotate-0"
                  }`}
                >
                  <Plus size={18} strokeWidth={1.5} />
                </div>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                  openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[#374151] font-light leading-[1.8] text-[1.05rem] pb-8">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
