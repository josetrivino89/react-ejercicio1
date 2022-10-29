import React from 'react'
import {ListGroup, Button} from "react-bootstrap";
import {BsFillXCircleFill } from "react-icons/bs";

const tarea = ({nombredeTarea,borrarTarea})=>{
  return (
    <ListGroup.Item variant="primary">
      <i className='BsFillExclamationCircleFill'></i>
      <Button variant="outline-danger" onClick={() => borrarTarea (nombredeTarea)}>
      <BsFillXCircleFill/>
      </Button>
      <>{nombredeTarea}</>
    </ListGroup.Item>
  );
};

export default tarea;