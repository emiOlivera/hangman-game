import React from 'react'
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Provider from "./Contexto/Provider";
import Juego from "./componentes/Juego";
import Player1 from "./componentes/Player1";
import Player2 from "./componentes/Player2";
import PlayerOneLost from "./componentes/PlayerOneLost"
import PlayerTwoLost from "./componentes/PlayerTwoLost"


const Rutas = () => {
  return (
    <Provider>
    <Router>
      <Routes>
      <Route path="/" element={<Juego/>}/>
      <Route path="/player1" element={<Player1/>}/>
      <Route path="/player2" element={<Player2/>}/>
      <Route path="/player1-lost" element={<PlayerOneLost/>}/>
      <Route path="/player2-lost" element={<PlayerTwoLost/>}/>
      <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </Provider>
  )
}

export default Rutas
