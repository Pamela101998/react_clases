import { useState } from "react";

const Contador = () => {


    const [contador, setContador]= useState(10);


    const handleContador = () => {
        setContador (contador + 1);
    
    };
    const handle2Contador = () => {
    
        setContador (contador - 1);
    };

    return (
        <>
            <h4>Componente contador</h4>
            <h3>{contador}</h3>
            <div>
                <button onClick={handleContador}>Aumentar</button>
                <button onClick={handle2Contador}>Disminuir</button>


            </div>
        </>
    );

};

export default Contador;