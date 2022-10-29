import React from 'react'
import Ejercicio4y5Tarea from "./Ejercicio4y5Tarea";
import {ListGroup} from "react-bootstrap";

const ListaDeTareas = ({ListaDeTareas,borrarTarea}) => {
  return (
    <ListGroup>
        {ListaDeTareas.map((tarea,index)=> <Ejercicio4y5Tarea key={index} nombredeTarea={tarea} borrarTarea={borrarTarea}></Ejercicio4y5Tarea>)}
    </ListGroup>
  )
}

export default ListaDeTareas