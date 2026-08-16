import { createHashRouter } from "react-router"
import Root from "./Root"
import Home from "./pages/Home"
import HomeCinema from "./pages/HomeCinema"

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "home-cinema", Component: HomeCinema },
    ],
  },
])
