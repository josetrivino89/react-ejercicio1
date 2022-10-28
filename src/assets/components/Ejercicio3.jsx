import React from 'react'
import { useState } from 'react'

const Ejercicio3 = (props) => {

    const[Cambio,setCambio] = useState("");
  return (
    <>
    <h1>Hello {props.noteEj3} 👋 {Cambio}</h1>
    <button onClick={()=>setCambio(("From Changed State"))}>Cambiar</button>
    </>
  )
}

export default Ejercicio3