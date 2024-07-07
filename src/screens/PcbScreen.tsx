export function PcbScreen() {
    return (
        <article id="PCB" className="bg-black max-h-screen p-14 flex flex-col items-center w-full h-full">
            <div className="flex flex-col p-6 gap-4">
                <h3 className="title-page text-5xl select-none">PCB - ROBOT</h3>
                <p className=" bg-page text-page text-pretty p-4 text-3xl">Circuito con sensores infrarrojos y de ultrasonido, botón de encendido, y la capacidad de controlar dos motores. A más detalles de su funcionamiento leer la documentación respectiva en el repositorio de Github del proyecto.</p>
            </div>

            <div className=" flex gap-10 p-6 ">
                <div className="rounded flex items-center justify-center  ">
                    <img className="" src="pcb.png" alt="" />

                </div>
                <div className="  w-full flex-grow-0 p-5">
                    <h4 className="text-center italic p-3 text-white text-5xl select-none ">Componentes:</h4>
                    <hr className="list-bottom-line-style m-3" />
                    <ul className=" flex flex-col gap-2 max-h-40  overflow-y-scroll">
                        <li className="hover:bg-red-700 rounded w-11/12 p-1" ><a className="text-list-style whitespace-nowrap italic font-thin  text-2xl block " href="#">Microcontrolador: ESP32</a></li>
                        <li className="hover:bg-red-700 w-11/12 p-1" ><a className="text-list-style whitespace-nowrap italic font-thin  text-2xl block " href="#">Microcontrolador: ESP32</a></li>
                        <li className="hover:bg-red-700 w-11/12 p-1" ><a className="text-list-style whitespace-nowrap italic font-thin  text-2xl block " href="#">Microcontrolador: ESP32</a></li>
                        <li className="hover:bg-red-700 w-11/12 p-1" ><a className="text-list-style whitespace-nowrap italic font-thin  text-2xl block " href="#">Microcontrolador: ESP32</a></li>
                       
                    </ul>
                </div>
            </div>
        </article>
    )
}