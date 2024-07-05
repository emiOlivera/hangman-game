import React, { useContext, useEffect } from 'react';
import Contexto from '../Contexto/Contexto';
import { useNavigate } from 'react-router-dom';

const Player1 = () => {
  const { palabra, setPalabra, player1, setArrayPalabra, arrayPalabra, setPlayer1, setPlayer2} = useContext(Contexto);
  const letras = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z', "Borrar"
  ];
  const navegacion = useNavigate();

  useEffect(() => {
    const volver = (event) => {
      event.preventDefault();
      setPalabra([]);
      setPlayer1("")
      setPlayer2("")
      navegacion('/');
    };

    window.addEventListener('beforeunload', volver);

    return () => {
      window.removeEventListener('beforeunload', volver);
    };
  }, [setPalabra, setPlayer1, setPlayer2, navegacion]);


  const clickear = (letra) => {
    if (letra.target.textContent === "Borrar") {
      setPalabra(palabra.slice(0, -1));
    } else {
      setPalabra([...palabra, letra.target.textContent]);
    }
  };

  const elegir = () => {
    if (palabra.length > 0){
      setArrayPalabra([...arrayPalabra, palabra]);
      navegacion('/player2');
    }
  };

  const limpiar = () => {
    setPalabra([])
  }

  return (
    <div className='player1'>
      <h1>turno de {player1}</h1>
      <input type="text" placeholder='Elija la palabra' id='input' readOnly disabled value={palabra.join('')} />
    <div className='letras'>
      {letras.map(letra => (
        <button key={letra} onClick={clickear}>{letra}</button>
      ))}
      <button onClick={limpiar}>Limpiar</button>
      <button onClick={elegir}>Elegir</button>
    </div>
    </div>
  );
};

export default Player1;
