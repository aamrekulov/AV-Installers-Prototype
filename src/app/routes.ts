import { createHashRouter } from "react-router"
import Root from "./Root"
import Home from "./pages/Home"
import HomeCinema from "./pages/HomeCinema"
import SmartHomeAutomation from "./pages/SmartHomeAutomation"
import MultiroomAudio from "./pages/MultiroomAudio"
import SystemCare from "./pages/SystemCare"
import About from "./pages/About"
import Locations from "./pages/Locations"
import Portfolio from "./pages/Portfolio"
import CaseStudy from "./pages/CaseStudy"

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "home-cinema", Component: HomeCinema },
      { path: "smart-home-automation", Component: SmartHomeAutomation },
      { path: "multiroom-audio", Component: MultiroomAudio },
      { path: "system-care", Component: SystemCare },
      { path: "about", Component: About },
      { path: "locations", Component: Locations },
      { path: "portfolio", Component: Portfolio },
      { path: "portfolio/:slug", Component: CaseStudy },
    ],
  },
])
