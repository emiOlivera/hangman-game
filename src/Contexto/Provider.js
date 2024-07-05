import { useState } from "react"
import Contexto from "./Contexto"

const Provider = ({children}) => {
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const [palabra, setPalabra] = useState([])
  const [arrayPalabra, setArrayPalabra] = useState([]);
  return (
    <Contexto.Provider value={{
    setPlayer1, 
    setPlayer2,
    player1,
    player2,
    palabra,
    setPalabra,
    setArrayPalabra,
    arrayPalabra
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider
