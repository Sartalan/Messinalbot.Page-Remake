import { useEffect, useRef } from "react";

export  function Manzana() {
  const ref = useRef(null);

  useEffect(() => {
    fetch("/snippet.html")
      .then(r => r.text())
      .then(html => {
        if (ref.current) ref.current.innerHTML = html; // inyecta HTML crudo
      });
  }, []);

  return <div ref={ref} />; // React solo crea el contenedor
}