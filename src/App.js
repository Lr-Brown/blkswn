import React, { useState } from "react"
import Scaffold from "./lib/components/scaffold"
import GlobalStyle from "./lib/GlobalStyles"
import LightLogo from "./lib/logos/light_logo.png"
// import DarkLogo from "./lib/logos/dark_logo.png"
import IntroView from "./sections/intro"
import { Switch, Route, useLocation } from "react-router-dom"
import WorksView from "./sections/works"
import { AnimatePresence } from "framer-motion"
import AppBar from "./lib/components/appbar"

function App() {
  const [mobileMenu, setMenu] = useState("none")
  const location = useLocation()

  return (
    <div>
      <GlobalStyle />
      <Scaffold
        menu={mobileMenu}
        sidebar={
          <AppBar menu={mobileMenu} setMenu={setMenu} logo={LightLogo} />
        }
        body={
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={IntroView} />
              <Route path="/works" component={WorksView} />
            </Switch>
          </AnimatePresence>
        }
      />
    </div>
  )
}

export default App
