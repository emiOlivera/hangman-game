import React, { useContext, useState, useEffect } from 'react';
import Contexto from '../Contexto/Contexto';
import { useNavigate } from 'react-router-dom';




const Player2 = () => {
  const { player2, arrayPalabra, setPlayer1, setPlayer2, setPalabra, setArrayPalabra } = useContext(Contexto);
  const letras = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
  ];
  const [error, setError] = useState(0);
  const [acierto, setAcierto] = useState(0);
  const [elegidas, setElegidas] = useState([]);
  const [botonEstado, setBotonEstado] = useState(Array(26).fill(''))
  let imagen  = `error${error}`

  const navegacion = useNavigate();

  useEffect(() => {
    const palabraCompletada = arrayPalabra.flat().every(letra => elegidas.includes(letra));
    if (palabraCompletada) {
      navegacion("/player1-lost");
    }
  }, [elegidas, arrayPalabra, navegacion]);

      useEffect(() => {
      window.onpopstate = e => {
        setPalabra([])
        setArrayPalabra([])
      };
    });

  const elegir = (letra, index) => {
    if (!elegidas.includes(letra)) {
      setElegidas([...elegidas, letra]);
      if (arrayPalabra.some(palabra => palabra.includes(letra))) {
        setAcierto(acierto + 1);
        const nuevosEstados = [...botonEstado];
        nuevosEstados[index] = 'verde';
        setBotonEstado(nuevosEstados);
      } else {
        setError(error + 1);
        const nuevosEstados = [...botonEstado];
        nuevosEstados[index] = 'rojo';
        setBotonEstado(nuevosEstados);
        if (error == 6){
          navegacion("/player2-lost")
        }
      }
    }
  }

  return (
    <div className='player2'>
      <h1>Turno de {player2}</h1>
    <div className='interfaz'>
      <div className="palabra">
        {arrayPalabra.map((palabra, index) => (
          <span key={index}>
            {palabra.map((letra, i) => (
              elegidas.includes(letra) ? <span key={i}>{letra}</span> : <span key={i}>-</span>
            ))}
          </span>
        ))}
      </div>
      <div className='imagen'>
      <img src={require(`./images/${imagen}.png`)} alt="" />
      </div>
      </div>
      <div className="letras">
        {letras.map((letra, index) => (
          <button
            key={letra}
            onClick={() => elegir(letra, index)}
            className={botonEstado[index]}
            disabled={elegidas.includes(letra)}
          >
            {letra}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Player2;
