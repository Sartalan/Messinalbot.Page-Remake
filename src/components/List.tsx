//? Crear Mapeo de List [V]
//? Objeto de JS para almacenar la información; src, href, link, text, etc. Suerte mañana!
//* Hecho (◠﹏◠)

export function List() {
    interface Item {
      id: number;
      name: string;
      alt: string;
      img: string;
      src: string;
    }
  
    const data: Item[] = [
      {
        id: 1,
        name: "Home",
        alt: "",
        img: "icons/home.png",
        src: "#Home"
      },
      {
        id: 2,
        name: "PCB",
        alt: "",
        img: "icons/pcb.png",
        src: "#PCB"
      },
      {
        id: 3,
        name: "Schematic",
        alt: "",
        img: "icons/schematic.png",
        src: "#Schematic"
      },
      {
        id: 4,
        name: "Code",
        alt: "",
        img: "icons/code.png",
        src: "#Code"
      },
      {
        id: 5,
        name: "App",
        alt: "",
        img: "icons/app.png",
        src: "#App"
      },
      {
        id: 6,
        name: "Model",
        alt: "",
        img: "icons/model.png",
        src: "#Model"
      },
     
    ];
  
    return (
      data.map((Data: Item) => (
        <li className=" flex rounded-lg w-11/12 hover:bg-gray-800  bg-black" key={Data.id}>
          <a className="h-16 p-5 w-full  flex items-center justify-start gap-4 " href={Data.src}>
            <img className=" w-10" src={Data.img} alt={Data.alt} />
            <p className="text-white inline-block w-full text-start overflow-hidden text-xl  ">{Data.name}</p>
          </a>
        </li>
      ))
    )
  }