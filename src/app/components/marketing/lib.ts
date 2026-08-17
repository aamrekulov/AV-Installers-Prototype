import { useNavigate } from "react-router"

export function scrollToSection(id: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

/**
 * Scrolls to `id` if it's on the current page; otherwise navigates to "/" and
 * asks Home to scroll once mounted. Needed because this app uses createHashRouter,
 * where a plain `<a href="#id">` on a non-Home page would corrupt the route.
 */
export function makeSectionScroller(navigate: ReturnType<typeof useNavigate>) {
  return (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (!id) return
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      navigate("/", { state: { scrollTo: id } })
    }
  }
}

export function useSectionScroller() {
  const navigate = useNavigate()
  return makeSectionScroller(navigate)
}
