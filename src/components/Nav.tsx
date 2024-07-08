import { List } from "./List"

export function Nav() {
  return (
    <nav className=" hidden lg:block nav h-screen top-0 sticky">
      <ul className=" w-full h-screen flex flex-col justify-evenly items-center ">
        <List />
      </ul>
    </nav>
  )
}



