export function Nav() {
  return (
    <nav className="nav h-screen bg-black top-0 sticky">
      <ul className="bg-white w-full h-screen flex flex-col justify-around items-center ">
        <List />
      </ul>
    </nav>
  )
}

//? Crear Mapeo de List
//? Objeto de JS para almacenar la información; src, href, link, text, etc. Suerte mañana!

function List() {
  return (
    <li className="h-10 w-full bg-black">
      <a className="flex items-center" href="#">
        <img src="#" alt="IMG" />
        <p className="text-white text-2xl">lol</p>
      </a>
    </li>
  )
}

