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
        <li className="h-10 w-full bg-black" key={Data.id}>
          <a className="flex items-center" href={Data.src}>
            <img src={Data.img} alt={Data.alt} />
            <p className="text-white text-2xl">{Data.name}</p>
          </a>
        </li>
      ))
    )
  }