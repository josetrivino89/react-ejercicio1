import React from 'react'
import Ejercicio4y5Listas from "./Ejercicio4y5Listas";
import { useState,useEffect } from "react";
import {Form, Button} from "react-bootstrap";
import {BsFillXCircleFill } from "react-icons/bs";


const Formularios = () => {
    let tareasLocalStorage = JSON.parse(localStorage.getItem("Lista de Tareas"))|| [];
    const [ListaDeTareas, setListaDeTareas] =  useState(tareasLocalStorage)
    const [tarea, setTareas] =  useState("")

    useEffect(() => {
        localStorage.setItem("Lista de Tareas", JSON.stringify(ListaDeTareas));
      },[ListaDeTareas]);

      const handleSubmit = (e)=>{
        e.preventDefault();
        setListaDeTareas([...ListaDeTareas, tarea]);setTareas("");
      };
      const borrarTarea = (nombreTarea)=>{
        let _ListaDeTarea = ListaDeTareas.filter((item)=>{
            return item !==nombreTarea
        })
        setListaDeTareas(_ListaDeTarea)

      }

  return (
    <div>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
             <Form.Control type="text" placeholder="Ingrese una Tarea" />
             <Button variant="primary" type="submit">
            <BsFillXCircleFill/>
            </Button>
        </Form.Group>
      
      </Form>
      <Ejercicio4y5Listas ListaDeTareas={ListaDeTareas} borrarTarea={borrarTarea}></Ejercicio4y5Listas>

    </div>
    
  )
}

export default Formularios