import React from "react"
import { NavBar } from "./components/navBar/navBar"
import { Hero } from "./components/heroSection/heroSection"
import { Conte } from "./components/conteudosSection/conteudo"

function App() {

  return (
    <div className="App bg-brancoEscuro">
      <NavBar/>
      <Hero/>
      <Conte/>
    </div>
  )
}

export default App
