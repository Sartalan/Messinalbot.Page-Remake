

function App() {

  return (
    <>

      <Header />

      <main className="flex bg-black ">
        <Nav />
        <section className="section bg-white">
          <article className="bg-blue-800 h-screen border-t-8 border-b-8 border-black border-solid"></article>
          <article className="bg-violet-800 h-screen border-t-8 border-b-8 border-black border-solid"></article>
        </section>
      </main>
    </>
  )
}

export default App

function Header() {
  return (
    <div className=" h-full w-full bg-robot bg-cover bg-no-repeat ">
      <h1 className=" text-center text-white text-5xl ">Hello World</h1>
    </div>
  )
}

function Nav() {
  return (

    <nav className="nav h-screen bg-black top-0 sticky">
      <ul className="bg-red-900 w-full flex flex-col ">
        <li className="text-center text-white text-2xl flex justify-center items-center">ddasdwadwa</li>
        <li className="text-center text-white text-2xl flex justify-center items-center">ddasdwadwa</li>
        <li className="text-center text-white text-2xl flex justify-center items-center">ddasdwadwa</li>
        <li className="text-center text-white text-2xl flex justify-center items-center">ddasdwadwa</li>
      </ul>
    </nav>
  )
}
