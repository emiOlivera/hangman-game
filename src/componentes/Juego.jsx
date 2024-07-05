import React, { useContext, useState } from 'react'
import Contexto from '../Contexto/Contexto'
import { useNavigate } from 'react-router-dom';

const Juego = () => {
  const { player1, setPlayer1, player2, setPlayer2 } = useContext(Contexto);
  const navegacion = useNavigate()

  const jugador1 = (nombre) => {
  setPlayer1(nombre.target.value)
  }

  const jugador2 = (nombre) => {
    setPlayer2(nombre.target.value)
  } 

  const jugar = () => {
    if (player1 !== "" && player2 !== ""){
      navegacion('/player1')
    }
  }

  return (
    <div className='container'>
    <h3>Jugador 1</h3>
    <input type="text" placeholder='Nombre' onChange={jugador1}/>
    
    <h3>Jugador 2</h3>
    <input type="text" placeholder='Nombre' onChange={jugador2}/>
    
    <button onClick={jugar}>Jugar</button>
    </div>
  )
}

export default Juego
