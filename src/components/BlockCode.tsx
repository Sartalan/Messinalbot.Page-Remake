import Prism from "prismjs";
import "../styles/prism-atom-dark.css" 
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c"; // Arduino se basa en C/C++

export function BlockCode({title, code}){

    return(
        <>
            <h3 className="title-page text-center lg:text-start text-5xl select-none">{title}</h3>
            <pre className="overflow-hidden  w-[80%] h-96 ">
                <code className="language-js line-number overflow-x-hidden">{code}</code>
            </pre>
        </>

    )
}
