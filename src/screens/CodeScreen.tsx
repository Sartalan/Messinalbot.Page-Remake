
import Prism from "prismjs";
import {useEffect} from 'react'
// @ts-ignore
import {arduinoCode} from "../data/arduinoCode.js"
// @ts-ignore
import {jsCode} from "../data/jsCode.js"
import {BlockCode} from '../components/BlockCode.tsx'


export function CodeScreen() {

    useEffect(() => {
        Prism.highlightAll();
      }, []);

    return (
        <article id="Code" className="bg-black h-auto flex justify-center items-center">
            <div className="flex flex-col gap-2">
                <BlockCode title="Bluetooth 1." code={arduinoCode}/>
                <BlockCode title="Wifi .2" code={jsCode}/>
            </div>
        </article>
    )
}