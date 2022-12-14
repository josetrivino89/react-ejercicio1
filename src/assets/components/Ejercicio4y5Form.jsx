import React from 'react'
import Ejercicio4y5Listas from "./Ejercicio4y5Listas";
import { useState,useEffect } from "react";
import {Form, Button} from "react-bootstrap";
import { HiCheckCircle } from "react-icons/hi2";


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
             <Form.Control type="text" placeholder="Ingrese una Tarea" onChange={(e)=>setTareas(e.target.value.trimStart())} value={tarea} />
             <Button variant="primary" type="submit">
            <HiCheckCircle/>
            </Button>
        </Form.Group>
      
      </Form>
      <Ejercicio4y5Listas ListaDeTareas={ListaDeTareas} borrarTarea={borrarTarea}></Ejercicio4y5Listas>

    </div>
    
  )
}

export default Formularios