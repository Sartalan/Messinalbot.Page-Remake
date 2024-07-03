import { Header } from "./screens/Header"
import { Nav } from "./components/Nav"
//? All Screens
import { HomeScreen } from "./screens/HomeScreen"
import { PcbScreen } from "./screens/PcbScreen"
import { SchematicScreen } from "./screens/SchematicScreen"
import { CodeScreen } from "./screens/CodeScreen"
import { AppScreen } from "./screens/AppScreen"
import { ModelScreen } from "./screens/ModelScreen"


function App() {

  return (
    <>

      <Header />

      <main className="flex bg-black ">
        <Nav />
        <section className="section bg-white">
          <HomeScreen/>
          <PcbScreen/>
          <SchematicScreen/>
          <CodeScreen/>
          <AppScreen/>
          <ModelScreen/>
        </section>
      </main>
    </>
  )
}

export default App



