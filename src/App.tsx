import { Header } from "./screens/Header"
import { Nav } from "./components/Nav"



function App() {

  return (
    <>

      <Header />

      <main className="flex bg-black ">
        <Nav />
        <section className="section bg-white">
          <article className="bg-blue-800 h-screen border-black border-solid"></article>
          <article className="bg-violet-800 h-screen  border-black border-solid"></article>
        </section>
      </main>
    </>
  )
}

export default App



