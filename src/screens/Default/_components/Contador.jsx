import { useEffect, useState } from "react";

const Contador = () => {

//UseState tiene 2 partes, una variable, y una función que le cambia su valor
    const [contador, setContador]= useState(10);


    const handleContador = () => {
        setContador (contador + 1);
    };
    const handle2Contador = () => {
    
        setContador (contador - 1);
    };

//useEffect para controlar ciclo de vida

    useEffect (() => {
        setContador (12);
    }, []);

    
    useEffect (() => {
        if (contador === 15){
            alert ('contador es 15');
        }

    }, [contador]);

//función especial que se ejecuta cuando el componente se desmonta
useEffect (() =>{
    return () => {
        console.log ('el component se desmontó');
    }
});

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