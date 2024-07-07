export function HomeScreen() {
    return (
        <article id="Home" className="bg-black h-screen flex flex-col justify-center p-14 gap-8 ">
            <h2 className="title-page text-center text-6xl select-none">{"< Cristionel | Messinaldo />"}</h2>
            <div className="p-8 bg-page rounded">
                <p className="text-page text-center text-4xl select-none">
                    Proyecto preparado para los alumnos de 4to año de Electrónica y diseñado para competir en la Liga Nacional de Robotica como robot Futbolista
                </p>
                <br />
                <p className="text-page text-center text-4xl select-none">
                    El mismo también tiene una integración apta para ser un sumo; sin embargo, no tiene un código implementado para ello.
                </p>
            </div>
        </article>
    )
}