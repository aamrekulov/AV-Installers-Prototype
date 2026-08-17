import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function ConsultationSection({
  id = "consultation",
  heading,
  description,
  projectLabel,
  interestLabel,
  interestOptions,
  submitLabel,
  submittedLabel,
}: {
  id?: string
  heading: string
  description: string
  projectLabel: string
  interestLabel: string
  interestOptions: { value: string; label: string }[]
  submitLabel: string
  submittedLabel: string
}) {
  const [form, setForm] = useState({ name: "", contact: "", project: "", interest: "" })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  function updateField(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
    setFormErrors((errs) => (errs[key] ? { ...errs, [key]: "" } : errs))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!form.name.trim()) nextErrors.name = "Please enter your name."
    if (!form.contact.trim()) nextErrors.contact = "Please add a phone number or email."
    if (!form.project.trim()) nextErrors.project = "Please tell us a little more."
    setFormErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setFormSubmitted(true)
  }

  return (
    <section id={id} className="py-20 px-5 lg:py-40 lg:px-16 bg-[#080a0c] relative overflow-hidden">
      {[360, 560, 760, 960].map((d) => (
        <div
          key={d}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025] pointer-events-none"
          style={{ width: d, height: d }}
        />
      ))}

      <div className="relative z-10 max-w-[520px] mx-auto text-center">
        <div className="w-10 h-px bg-accent mx-auto mb-10" />
        <h2 className="font-display font-light text-[clamp(2.2rem,3.5vw,3.2rem)] leading-[1.15] text-white mb-6">
          {heading}
        </h2>
        <p className="text-white/45 text-lg font-light leading-[1.8] mb-12">{description}</p>

        <form className="space-y-5 text-left" onSubmit={handleSubmit} noValidate>
          <Field
            id={`${id}-name`}
            label="Name"
            value={form.name}
            onChange={(v) => updateField("name", v)}
            error={formErrors.name}
            maxLength={100}
          />
          <Field
            id={`${id}-contact`}
            label="Telephone / Email"
            value={form.contact}
            onChange={(v) => updateField("contact", v)}
            error={formErrors.contact}
            maxLength={100}
          />
          <Field
            id={`${id}-project`}
            label={projectLabel}
            value={form.project}
            onChange={(v) => updateField("project", v)}
            error={formErrors.project}
            textarea
            maxLength={1000}
          />
          <div className="relative">
            <label htmlFor={`${id}-interest`} className="sr-only">{interestLabel}</label>
            <select
              id={`${id}-interest`}
              value={form.interest}
              onChange={(e) => setForm((f) => ({ ...f, interest: e.target.value }))}
              className="w-full bg-transparent border-b border-white/[0.14] py-3.5 text-white/28 text-sm focus:border-white/45 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60 focus-visible:outline-offset-4 transition-colors duration-300 appearance-none cursor-pointer"
            >
              <option value="" disabled>{interestLabel}</option>
              {interestOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[#111111] text-white">
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown size={13} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/22 pointer-events-none" />
          </div>
          <button
            type="submit"
            disabled={formSubmitted}
            className="w-full mt-2 py-4 rounded-full border border-white/25 text-white text-[0.75rem] uppercase tracking-[0.18em] font-semibold transition-all duration-300 hover:border-white/60 hover:bg-white/5 active:scale-[0.985] disabled:opacity-60"
          >
            {formSubmitted ? "Request sent" : submitLabel}
          </button>
          {formSubmitted && (
            <p className="text-white/45 text-xs text-center">{submittedLabel}</p>
          )}
        </form>

        <p className="mt-10 font-sans text-[0.6rem] text-white/50 uppercase tracking-[0.15em]">
          Or ring us directly: 0800 246 8000 · Monday–Friday, 9am–6pm
        </p>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  textarea = false,
  maxLength,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  textarea?: boolean
  maxLength?: number
}) {
  const shared = {
    id,
    value,
    maxLength,
    placeholder: label,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${id}-error` : undefined,
    className: `w-full block bg-transparent border-b py-3.5 text-white text-sm placeholder-white/25 transition-colors duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/60 focus-visible:outline-offset-4 ${
      error ? "border-red-400/60" : "border-white/[0.14] focus:border-white/45"
    }`,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
  }
  return (
    <div>
      <label htmlFor={id} className="sr-only">{label}</label>
      {textarea ? <textarea rows={3} {...shared} /> : <input type={type} {...shared} />}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[0.75rem] text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}
