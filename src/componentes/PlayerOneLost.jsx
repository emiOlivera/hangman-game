import React, { useContext, useEffect} from 'react'
import Contexto from '../Contexto/Contexto'
import { useNavigate } from 'react-router-dom';
import imagen from './images/happyBear.png'

const PlayerOneLost = () => {

  const {player1, player2, setPalabra, setArrayPalabra, setPlayer1, setPlayer2} = useContext(Contexto)
  const navegacion = useNavigate();

  const revancha = () => {
    setPalabra([]);
    setArrayPalabra([]);
    navegacion("/Player1")
  }

  const inicio = () => {
    setPalabra([]);
    setArrayPalabra([]);
    setPlayer1("")
    setPlayer2("")
    navegacion("/")
  }

  const cambiar = () => {
    let auxiliar = player1;
    setPlayer1(player2);
    setPlayer2(auxiliar);
    setPalabra([]);
    setArrayPalabra([]);
    navegacion("/player1")
  }

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

  return (
    <div className='lost1'>
      <h1>{player2} es el/la ganador/a </h1>
      <span>{player1}, mas suerte la proxima vez</span>
      <div className='imagenFinal'>
        <img src={imagen} alt="" />
      </div>
      <div className='botones'>
        <button onClick={revancha}>Revancha</button>
        <button onClick={cambiar}>Cambiar Roles</button>
        <button onClick={inicio}>Inicio</button>
      </div>  
    </div>
  )
}

export default PlayerOneLost
