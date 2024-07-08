export function PcbScreen() {

    interface Item {
        id: number;
        text: string;
        url: string;

    }

    const data: Item[] = [
        {
            "id": 1,
            "text": "Microcontrolador: ESP32",
            "url": "#"
        },
        {
            "id": 2,
            "text": "Puente H: DRV8833",
            "url": "#"
        },
        {
            "id": 3,
            "text": "S. Ultrasonido: HC-SR05 (2)",
            "url": "#"
        },
        {
            "id": 4,
            "text": "S. Infrarrojo : CNY70 (2)",
            "url": "#"
        },
        {
            "id": 5,
            "text": "Regulador de Voltaje (1)",
            "url": "#"
        },
        {
            "id": 6,
            "text": "Motores Amarillos (2)",
            "url": "#"
        },
        {
            "id": 7,
            "text": "Borneras (8)",
            "url": "#"
        },
        {
            "id": 8,
            "text": "Resistencias (4)",
            "url": "#"
        },
        {
            "id": 9,
            "text": "Transistores (2)",
            "url": "#"
        },
        {
            "id": 10,
            "text": "Capacitores (4)",
            "url": "#"
        }
    ]

    return (
        <article id="PCB" className="bg-black h-screen pt-14 flex flex-col items-center w-full ">
            <div className="flex flex-col p-6 gap-4">
                <h3 className="title-page text-5xl select-none">PCB - ROBOT</h3>
                <p className=" bg-page text-page text-pretty p-4 text-3xl select-none">Circuito con sensores infrarrojos y de ultrasonido, botón de encendido, y la capacidad de controlar dos motores. A más detalles de su funcionamiento leer la documentación respectiva en el repositorio de Github del proyecto.</p>
            </div>

            <div className=" flex gap-10 p-6 ">
                <div className="rounded flex items-center justify-center  ">
                    <img className="" src="pcb.png" alt="" />

                </div>
                <div className="  w-full flex-grow-0 p-5">
                    <h4 className="text-start italic p-3 text-white text-5xl select-none ">Componentes:</h4>
                    <hr className="list-bottom-line-style m-3" />
                    <ul className="flex flex-col gap-2 max-h-40 scrollbar scrollbar-thumb-gray-700 scrollbar-track-black overflow-y-scroll">
                        {
                            data.map((data: Item) => (
                                <li key={data.id} className=" hover:bg-cyan-900 rounded w-11/12 " ><a className="text-list-style whitespace-nowrap h-full p-1 m-1 italic font-thin text-2xl block" href={data.url}>{data.text}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </article>
    )
}