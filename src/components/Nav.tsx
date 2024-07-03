import { List } from "./List"

export function Nav() {
  return (
    <nav className="nav h-screen bg-black top-0 sticky">
      <ul className=" bg-slate-600 w-full h-screen flex flex-col justify-around items-center ">
        <List />
      </ul>
    </nav>
  )
}



